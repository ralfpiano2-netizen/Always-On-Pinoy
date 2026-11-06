// Short, single-voice arrangements, synthesized locally after a visitor opts in.
// The pitches are adapted to a small phone-speaker register; these are reconstructions.
import { enable, isOn, musicChannel } from './audio.js?v=dances-sb19-20261105-2';
import { esc } from './ui.js';

const repeat = (phrase, times = 2) => Array(times).fill(phrase).join(' ');
export const RINGTONE_TRACKS = [
  {
    title: 'Spaghetti Song', artist: 'SexBomb Girls', bpm: 132,
    notes: repeat('D5:.5 E5:.5 F5:1 F5:.5 F5:.5 F5:.5 F5:1 E5:1 E5:.5 D5:.5 C5:1 E5:.5 E5:.5 D5:1 D5:.5 D5:.5 D5:1 C5:.5 D5:.5 E5:1 E5:.5 E5:.5 E5:1 R:1'),
    source: 'https://www.kalimbatabs.net/kalimba-tabs-tutorials/spaghetti-song-sexbomb-girls/',
    credit: 'Melody reference: Lanie Marcelino A, via KalimbaTabs.net. Single-note adaptation with simplified rhythm.',
  },
  {
    title: 'Pamela One', artist: 'Vhong Navarro', bpm: 132,
    notes: repeat('D5:.5 G5:.5 B5:1 G5:.5 G5:.5 G5:1 D5:.5 G5:.5 B5:1 A5:.5 A5:.5 A5:1 D5:.5 A5:.5 C6:1 B5:.5 G5:.5 B5:.5 D6:.5 C6:1 R:1'),
    source: 'https://www.youtube.com/watch?v=KbqNOh69Gj8&t=15s',
    credit: 'Melody reference: Easy Piano Tutorial, “Pamela One” (2022), opening lead phrase. Transposed and rhythmically simplified.',
  },
  {
    title: 'Otso-Otso', artist: 'Bayani Agbayani', bpm: 136,
    notes: repeat('G5:.5 G5:.5 D5:.5 A5:.5 A5:.5 A5:1.5 D5:.5 G5:.5 G5:.5 G5:1.5 D5:.5 A5:.5 A5:.5 A5:1.5 B5:.5 A5:.5 G5:2 R:1'),
    source: 'https://www.youtube.com/watch?v=wnlx_lumqk8&t=15s',
    credit: 'Melody reference: Easy Piano Tutorial, “Otso Otso” (2022), opening lead phrase. Transposed and rhythmically simplified.',
  },
];

export function ringtoneNotes(track) {
  const pitches = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  return track.notes.trim().split(/\s+/).map(token => {
    const m = /^(R|([A-G])(#?)([4-6])):([\d.]+)$/.exec(token);
    if (!m || !(Number(m[5]) > 0)) throw new Error(`Invalid ringtone note: ${token}`);
    const midi = m[1] === 'R' ? null : (Number(m[4]) + 1) * 12 + pitches[m[2]] + (m[3] ? 1 : 0);
    return { frequency: midi === null ? 0 : 440 * 2 ** ((midi - 69) / 12), seconds: Number(m[5]) * 60 / track.bpm };
  });
}

// One PCM channel, one pitch at a time, with a short silence between songs.
export function renderRingtoneMedley(sampleRate = 24000) {
  let duration = 0.25;
  const tracks = RINGTONE_TRACKS.map(track => {
    const notes = ringtoneNotes(track);
    const start = duration;
    duration += notes.reduce((sum, n) => sum + n.seconds, 0);
    const end = duration;
    duration += 1.25;
    return { ...track, notes, start, end };
  });
  duration += 3;
  const samples = new Float32Array(Math.ceil(duration * sampleRate));
  for (const track of tracks) {
    let time = track.start;
    for (const note of track.notes) {
      const start = Math.round(time * sampleRate);
      const length = Math.floor(note.seconds * 0.86 * sampleRate);
      if (note.frequency) for (let i = 0; i < length; i++) {
        const t = i / sampleRate;
        const envelope = Math.min(1, t / 0.004, (length - i) / (sampleRate * 0.012));
        // A softened square wave retains the buzzy handset character at low volume.
        const phase = 2 * Math.PI * note.frequency * t;
        samples[start + i] = 0.18 * envelope * (Math.sin(phase) + Math.sin(3 * phase) / 3 + Math.sin(5 * phase) / 8);
      }
      time += note.seconds;
    }
  }
  return { samples, sampleRate, duration: samples.length / sampleRate, tracks };
}

export function createRingtonePlayer(context, destination) {
  const medley = renderRingtoneMedley();
  const buffer = context.createBuffer(1, medley.samples.length, medley.sampleRate);
  buffer.getChannelData(0).set(medley.samples);
  const volume = context.createGain();
  volume.gain.value = 0.25;
  volume.connect(destination);
  let source = null, offset = 0, startedAt = 0;
  const position = () => source ? (offset + Math.max(0, context.currentTime - startedAt)) % medley.duration : offset;
  const pause = () => {
    if (!source) return;
    offset = position();
    source.stop();
    source.disconnect();
    source = null;
  };
  return {
    play() {
      if (source) return;
      source = context.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.connect(volume);
      startedAt = context.currentTime;
      source.start(0, offset);
    },
    pause,
    next() {
      const p = position();
      let i = 0;
      medley.tracks.forEach((track, index) => { if (p >= track.start) i = index; });
      const next = (i + 1) % medley.tracks.length;
      const playing = !!source;
      pause(); offset = medley.tracks[next].start;
      if (playing) this.play();
    },
    setVolume(value) {
      const safe = Number.isFinite(Number(value)) ? Math.max(0, Math.min(1, Number(value))) : 0.25;
      volume.gain.setTargetAtTime(safe, context.currentTime, 0.04);
    },
    current: () => medley.tracks.find(t => position() >= t.start && position() < t.end) ?? null,
    isPlaying: () => !!source,
  };
}

export function ringtonePanelHTML() {
  return `<section class="ringtone-panel" aria-labelledby="ringtone-title"><h3 id="ringtone-title">2000s ringtone radio</h3><p>Spaghetti Song · Pamela One · Otso-Otso</p><p class="ringtone-note">3310-style, one-note melodies. Tap Sound on to listen.</p><p id="ringtone-status" role="status">Music is off.</p><div class="ringtone-controls"><button class="btn" id="ringtone-play" type="button" aria-pressed="false">Play music</button><button class="btn btn--plain" id="ringtone-next" type="button">Next song</button><label for="ringtone-volume">Music volume <output id="ringtone-level" for="ringtone-volume">25%</output><input id="ringtone-volume" type="range" min="0" max="100" step="5" value="25"></label></div><details><summary>Song credits</summary><p>Short synthesized reconstructions of the selected melodies, with simplified timing.</p><ul>${RINGTONE_TRACKS.map(t => `<li><a href="${esc(t.source)}" target="_blank" rel="noopener noreferrer">${esc(t.title)}</a> — ${esc(t.artist)}. ${esc(t.credit)}</li>`).join('')}</ul></details></section>`;
}

export function mountRingtones() {
  const play = document.getElementById('ringtone-play');
  const slider = document.getElementById('ringtone-volume');
  const status = document.getElementById('ringtone-status');
  let player = null, wanted = true, videoVisible = false;
  const visibleEmbeds = new Set();
  const synchronize = () => {
    if (!player && isOn()) {
      const channel = musicChannel();
      if (channel) player = createRingtonePlayer(channel.context, channel.output);
    }
    const playing = isOn() && wanted && !videoVisible && document.visibilityState !== 'hidden';
    if (player) {
      player.setVolume(Number(slider.value) / 100);
      if (playing) player.play(); else player.pause();
    }
    const label = wanted && isOn() ? 'Pause music' : 'Play music';
    if (play.textContent !== label) play.textContent = label;
    play.setAttribute('aria-pressed', String(wanted && isOn()));
    const track = player?.current();
    const text = !isOn() ? 'Music is off.' : !wanted ? 'Music paused.' : videoVisible ? 'Music paused for exhibit media.' : track ? `Now playing: ${track.title} · ${track.artist}` : 'A short pause between songs…';
    if (status.textContent !== text) status.textContent = text;
  };
  play.addEventListener('click', () => {
    wanted = !isOn() || !wanted;
    if (wanted && !isOn()) enable();
    synchronize();
  });
  document.getElementById('ringtone-next').addEventListener('click', () => { player?.next(); synchronize(); });
  slider.addEventListener('input', () => {
    document.getElementById('ringtone-level').textContent = `${slider.value}%`;
    player?.setVolume(Number(slider.value) / 100);
  });
  document.addEventListener('sound', synchronize);
  document.addEventListener('visibilitychange', synchronize);
  // Embedded players cannot report cross-origin playback. Keep the radio quiet while
  // a loaded exhibit player is visible, including inline Pacquiao media.
  const observer = new IntersectionObserver(entries => {
    for (const e of entries) { if (e.isIntersecting) visibleEmbeds.add(e.target); else visibleEmbeds.delete(e.target); }
    for (const el of visibleEmbeds) if (!el.isConnected) visibleEmbeds.delete(el);
    videoVisible = visibleEmbeds.size > 0; synchronize();
  });
  const observe = () => {
    for (const el of visibleEmbeds) if (!el.isConnected) visibleEmbeds.delete(el);
    for (const el of document.querySelectorAll('.media-video iframe, .media-post iframe')) {
      if (el.dataset.ringtoneObserved) continue;
      el.dataset.ringtoneObserved = 'true'; observer.observe(el);
    }
    videoVisible = visibleEmbeds.size > 0; synchronize();
  };
  new MutationObserver(observe).observe(document.body, { childList: true, subtree: true });
  setInterval(synchronize, 1000);
  synchronize();
}
