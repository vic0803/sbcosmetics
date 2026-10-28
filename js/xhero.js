/* ============================================================
   Experimental Hero — scroll-driven image sequence (night → morning).

   Preloads the rendered storyboard frames and draws them to a canvas,
   cross-fading between adjacent frames based on a pinned ScrollTrigger's
   progress. The logo + water are baked into the frames, so reflections
   stay photoreal. Fully independent of app.js and the main hero above.
   ============================================================ */
(function () {
  "use strict";

  var section = document.querySelector(".xhero");
  if (!section) return;

  var track = section.querySelector(".xhero-track");
  var stage = section.querySelector(".xhero-stage");
  var canvas = section.querySelector(".xhero-canvas");
  var phaseEl = section.querySelector(".xhero-phase");
  var ctx = canvas.getContext("2d");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = window.gsap && window.ScrollTrigger;

  /* ---------- Frames ---------- */
  var FRAME_COUNT = 11;
  var frames = [];
  var loaded = 0;
  var ready = false;

  function framePath(i) {
    // 01.jpg .. 11.jpg
    return "assets/sequence/" + (i < 10 ? "0" + i : "" + i) + ".jpg";
  }

  // Phase labels mapped to the frame range (night → morning)
  var PHASES = [
    { f: 0, name: "Ніч" },
    { f: 3, name: "Схід" },
    { f: 6, name: "Розсвіт" },
    { f: 8, name: "Ранок" },
    { f: 10, name: "День" }
  ];
  function phaseName(frameFloat) {
    var name = PHASES[0].name;
    for (var i = 0; i < PHASES.length; i++) {
      if (frameFloat >= PHASES[i].f) name = PHASES[i].name;
    }
    return name;
  }

  /* ---------- Canvas sizing (DPR-aware, capped) ---------- */
  var W = 0, H = 0, DPR = 1;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = track.clientWidth;
    H = track.clientHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    render(current);
  }

  /* ---------- Draw one frame with "cover" fit ---------- */
  function drawCover(img, alpha) {
    if (!img || !img.width) return;
    var ir = img.width / img.height;
    var cr = W / H;
    var dw, dh, dx, dy;
    if (cr > ir) { dw = W; dh = W / ir; dx = 0; dy = (H - dh) / 2; }
    else { dh = H; dw = H * ir; dx = (W - dw) / 2; dy = 0; }
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.globalAlpha = 1;
  }

  /* ---------- Render at a fractional frame index (crossfade) ---------- */
  var current = 0;
  function render(frameFloat) {
    if (!W || !H || !frames.length) return;
    current = frameFloat;
    var i = Math.floor(frameFloat);
    var next = Math.min(i + 1, FRAME_COUNT - 1);
    var k = frameFloat - i; // 0..1 blend toward next frame

    ctx.clearRect(0, 0, W, H);
    // base frame
    drawCover(frames[i], 1);
    // cross-fade into the next frame
    if (k > 0.001 && next !== i) drawCover(frames[next], k);

    // phase caption + colour (light text at night, dark by morning)
    if (phaseEl) {
      var name = phaseName(frameFloat);
      if (phaseEl.textContent !== name) phaseEl.textContent = name;
      phaseEl.style.color = frameFloat < 7 ? "#f4f1ea" : "#0e2436";
    }
  }

  /* ---------- Map scroll progress (0..1) → frame ---------- */
  function applyProgress(p) {
    var frameFloat = p * (FRAME_COUNT - 1);
    render(frameFloat);
  }

  /* ---------- Preload ---------- */
  function preload(done) {
    for (var i = 1; i <= FRAME_COUNT; i++) {
      (function (idx) {
        var img = new Image();
        img.onload = img.onerror = function () {
          loaded++;
          // Draw the first frame as soon as it arrives so the section isn't blank
          if (idx === 1) { ready = true; render(0); }
          if (loaded >= FRAME_COUNT) done();
        };
        img.src = framePath(idx);
        frames[idx - 1] = img;
      })(i);
    }
  }

  /* ---------- Init ---------- */
  function init() {
    resize();
    window.addEventListener("resize", resize, { passive: true });

    preload(function () {
      ready = true;
      render(current);
    });

    if (reduce) {
      // Static final (morning) frame; render once frames exist.
      var iv = setInterval(function () {
        if (frames[FRAME_COUNT - 1] && frames[FRAME_COUNT - 1].complete) {
          render(FRAME_COUNT - 1);
          clearInterval(iv);
        }
      }, 120);
      return;
    }

    if (hasGSAP) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: track,
        pinSpacing: false,
        onUpdate: function (self) { applyProgress(self.progress); }
      });
      applyProgress(0);
    } else {
      var onScroll = function () {
        var rect = section.getBoundingClientRect();
        var total = section.offsetHeight - window.innerHeight;
        var scrolled = Math.min(Math.max(-rect.top, 0), total);
        applyProgress(total > 0 ? scrolled / total : 0);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
