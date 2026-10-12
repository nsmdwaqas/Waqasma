// Tasteful Web Audio ambient generator for the royal wedding reveal
// Generates warm, serene harmonic harp/oud-like acoustic chords

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let loopTimer: number | null = null;

export const initAudio = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Play a single soft resonant chime or harp note
const playWarmNote = (freq: number, startTime: number, duration: number = 2.5, volume: number = 0.08) => {
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Gentle sine & triangle blend for soft string tone
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, startTime);

  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq * 2, startTime); // subtle harmonic

  // Filter for velvet warmth
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, startTime);
  filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  osc2.connect(gain);
  gain.connect(filter);
  filter.connect(audioCtx.destination);

  osc.start(startTime);
  osc2.start(startTime);
  osc.stop(startTime + duration);
  osc2.stop(startTime + duration);
};

// Play royal celebration chime sequence on envelope unbox
export const playUnboxChime = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    
    // Serene oriental/pentatonic chord arpeggio (D major pentatonic / Maqam inspired warmth)
    const notes = [
      { f: 293.66, t: 0 },    // D4
      { f: 369.99, t: 0.18 }, // F#4
      { f: 440.00, t: 0.36 }, // A4
      { f: 554.37, t: 0.54 }, // C#5
      { f: 587.33, t: 0.76 }, // D5
      { f: 739.99, t: 1.05 }, // F#5
      { f: 880.00, t: 1.35 }, // A5
    ];

    notes.forEach(n => {
      playWarmNote(n.f, now + n.t, 3.2, 0.1);
    });
  } catch (err) {
    console.warn('Audio play restricted or unsupported:', err);
  }
};

// Ambient loop that gently plays calming chords every few seconds
export const startAmbientSound = () => {
  if (isPlaying) return;
  isPlaying = true;

  try {
    const ctx = initAudio();
    if (!ctx) return;

    const chords = [
      [293.66, 369.99, 440.00, 587.33], // D maj
      [220.00, 277.18, 329.63, 440.00], // A maj
      [246.94, 293.66, 369.99, 493.88], // B min
      [196.00, 246.94, 293.66, 392.00], // G maj
    ];
    let chordIndex = 0;

    const playChordCycle = () => {
      if (!isPlaying || !audioCtx) return;
      const now = audioCtx.currentTime;
      const currentChord = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      currentChord.forEach((freq, idx) => {
        playWarmNote(freq, now + idx * 0.22, 4.0, 0.04);
      });

      loopTimer = window.setTimeout(playChordCycle, 6500);
    };

    playChordCycle();
  } catch (err) {
    console.warn('Ambient loop error:', err);
  }
};

export const stopAmbientSound = () => {
  isPlaying = false;
  if (loopTimer) {
    clearTimeout(loopTimer);
    loopTimer = null;
  }
};

// Subtle pleasant harp chime on card flip
export const playFlipSound = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    playWarmNote(440.00, now, 1.2, 0.05); // A4
    playWarmNote(659.25, now + 0.08, 1.4, 0.04); // E5
  } catch (err) {
    console.warn('Flip sound error:', err);
  }
};

