/* =========================================================
   LSBU 360 — Virtual Campus Tour
   app.js  — shared logic for all site pages
   ========================================================= */

/* ---------- Play / Pause ---------- */
function togglePlayPause() {
  const video = document.getElementById('site-video');
  const btn = document.getElementById('play-pause-btn');
  if (video.paused) {
    video.play();
    btn.textContent = '⏸ Pause';
  } else {
    video.pause();
    btn.textContent = '▶ Play';
  }
}

/* ---------- Mute / Unmute ---------- */
function toggleMute() {
  const video = document.getElementById('site-video');
  const btn = document.getElementById('mute-btn');
  video.muted = !video.muted;
  btn.textContent = video.muted ? '🔇 Unmute' : '🔊 Mute';
}

/* ---------- Fullscreen ---------- */
function toggleFullscreen() {
  const scene = document.querySelector('a-scene');
  if (!document.fullscreenElement) {
    scene.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

/* ---------- Panel toggle (Info / Photos) ---------- */
function togglePanel(panelId) {
  const panel = document.getElementById(panelId);
  const isOpen = panel.classList.contains('panel-visible');

  // Close all panels first
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('panel-visible'));

  // Open the requested one if it was closed
  if (!isOpen) {
    panel.classList.add('panel-visible');
  }
}

/* ---------- Switch to 360° photo ---------- */
function showPhoto(imgId) {
  const videosphere = document.querySelector('a-videosphere');
  if (videosphere) videosphere.setAttribute('visible', false);

  // photo-sky is a persistent <a-sky id="photo-sky"> in the markup;
  // images are preloaded in <a-assets> and referenced by #id selector
  const sky = document.getElementById('photo-sky');
  if (sky) {
    sky.setAttribute('src', imgId);
    sky.setAttribute('visible', true);
  }

  const backBtn = document.getElementById('back-to-video-btn');
  if (backBtn) backBtn.style.display = 'inline-block';
}

/* ---------- Return to video from photo ---------- */
function backToVideo() {
  const videosphere = document.querySelector('a-videosphere');
  if (videosphere) videosphere.setAttribute('visible', true);

  const sky = document.getElementById('photo-sky');
  if (sky) sky.setAttribute('visible', false);

  const backBtn = document.getElementById('back-to-video-btn');
  if (backBtn) backBtn.style.display = 'none';
}

/* ---------- Enter VR ---------- */
function enterVR() {
  document.querySelector('a-scene').enterVR();
}

/* ---------- Page initialisation ---------- */
window.addEventListener('load', () => {
  const video = document.getElementById('site-video');
  if (!video) return;

  // Videos start muted (autoplay policy); mute btn reflects this
  video.muted = true;
  const muteBtn = document.getElementById('mute-btn');
  if (muteBtn) muteBtn.textContent = '🔇 Unmute';

  video.play().catch(() => {
    // Autoplay blocked — show tap-to-play overlay
    const overlay = document.getElementById('tap-to-play');
    if (overlay) overlay.style.display = 'flex';
  });

  // Hide tap-to-play overlay once video actually starts
  video.addEventListener('playing', () => {
    const overlay = document.getElementById('tap-to-play');
    if (overlay) overlay.style.display = 'none';

    const playBtn = document.getElementById('play-pause-btn');
    if (playBtn) playBtn.textContent = '⏸ Pause';
  });

  // Hide loading screen once A-Frame scene is ready
  const scene = document.querySelector('a-scene');
  if (scene) {
    scene.addEventListener('loaded', () => {
      const loader = document.getElementById('loading-screen');
      if (loader) loader.style.display = 'none';
    });
  }
});
