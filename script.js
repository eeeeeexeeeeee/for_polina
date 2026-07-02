const site = document.getElementById("site");
const button = document.getElementById("openButton");
const letter = document.getElementById("letterSection");

let opened = false;

function playTwinkle() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, ctx.currentTime);
  master.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.025);
  master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.25);
  master.connect(ctx.destination);

  const notes = [
    { freq: 1174.66, start: 0.00, length: 0.34 },
    { freq: 1567.98, start: 0.12, length: 0.42 },
    { freq: 2093.00, start: 0.28, length: 0.58 }
  ];

  notes.forEach(({ freq, start, length }) => {
    const t = ctx.currentTime + start;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.015, t + length);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.18, t + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + length);

    osc.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + length + 0.04);
  });

  window.setTimeout(() => ctx.close().catch(() => {}), 1600);
}

button.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  playTwinkle();
  site.classList.add("open");
  button.setAttribute("aria-expanded", "true");

  window.setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1550);
});
