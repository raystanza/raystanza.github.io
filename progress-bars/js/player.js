/* ============================================================
   Progress Bars Throughout History - Player engine.
   Exposes a small global API on window.PBH:
     - PBH.registerBar(def)   ← called by every bar module
     - PBH.start()            ← called once after all bars loaded
   ============================================================ */

window.PBH = (function () {
  const bars = [];

  // Tunables.
  const DURATION_MS      = 10000; // 10s to fill from 0 → 100%
  const POST_COMPLETE_MS = 1000;  // 1s pause at 100% before advancing

  // Sort order: year asc → CLI before GUI in same year → name asc.
  const TYPE_ORDER = { cli: 0, gui: 1 };

  function registerBar(def) {
    if (!def || typeof def !== 'object') return;
    if (typeof def.year !== 'number')      throw new Error('bar missing year: ' + def.name);
    if (typeof def.name !== 'string')      throw new Error('bar missing name');
    if (typeof def.mount !== 'function')   throw new Error('bar missing mount(): ' + def.name);
    if (!def.yearLabel) def.yearLabel = String(def.year);
    if (!def.type) def.type = 'gui';
    bars.push(def);
  }

  function start(opts = {}) {
    // Sort chronologically.
    bars.sort((a, b) =>
      a.year - b.year ||
      ((TYPE_ORDER[a.type] ?? 99) - (TYPE_ORDER[b.type] ?? 99)) ||
      a.name.localeCompare(b.name)
    );

    // DOM refs.
    const canvas    = document.getElementById('canvas');
    const uiNameEl  = document.getElementById('uiName');
    const yearEl    = document.getElementById('year');
    const timeline  = document.getElementById('timeline');
    const counterEl = document.getElementById('counter');
    const btnPrev   = document.getElementById('btnPrev');
    const btnNext   = document.getElementById('btnNext');
    const btnPlay   = document.getElementById('btnPlay');

    if (!canvas) {
      console.error('PBH: #canvas not found in DOM');
      return;
    }
    if (bars.length === 0) {
      uiNameEl.textContent = 'No bars registered';
      return;
    }

    // Player state.
    let currentIndex     = 0;
    let currentBar       = null;
    let progress         = 0;
    let isPaused         = false;
    let postCompleteWait = 0;
    let lastTs           = null;
    let stopped          = false;

    function loadBar(index) {
      if (currentBar?.unmount) {
        try { currentBar.unmount(); } catch (e) { console.warn(e); }
      }
      canvas.innerHTML = '';
      canvas.removeAttribute('style');
      canvas.className = 'canvas';

      const def = bars[index];
      if (!def) return;

      uiNameEl.textContent  = def.name;
      yearEl.textContent    = def.yearLabel || String(def.year);
      counterEl.textContent = `${index + 1} / ${bars.length}`;

      let result;
      try {
        result = def.mount(canvas) || {};
      } catch (e) {
        console.error('Failed to mount bar:', def.name, e);
        result = {};
      }
      currentBar = {
        update:   result.update   || (() => {}),
        unmount:  result.unmount  || (() => {}),
      };
      progress         = 0;
      postCompleteWait = 0;
      stopped          = false;
      try { currentBar.update(0); } catch (e) { console.warn(e); }
      timeline.style.width = '0%';
      updateButtons();
    }

    function updateButtons() {
      btnPrev.disabled = currentIndex <= 0;
      btnNext.disabled = currentIndex >= bars.length - 1;
    }

    function advance() {
      if (currentIndex < bars.length - 1) {
        currentIndex++;
        loadBar(currentIndex);
      } else {
        // End of catalog - stop on the last bar's complete state.
        stopped  = true;
        isPaused = true;
        btnPlay.textContent = '▶';
      }
    }

    function prev() {
      if (currentIndex > 0) {
        currentIndex--;
        loadBar(currentIndex);
      }
    }

    function tick(ts) {
      if (lastTs === null) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (!isPaused && !stopped) {
        if (progress < 100) {
          progress = Math.min(100, progress + (dt / DURATION_MS) * 100);
          try { currentBar?.update(progress); } catch (e) { console.warn(e); }
          timeline.style.width = progress + '%';
        } else {
          postCompleteWait += dt;
          if (postCompleteWait >= POST_COMPLETE_MS) advance();
        }
      }
      requestAnimationFrame(tick);
    }

    // Wire up controls.
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', () => {
      if (currentIndex < bars.length - 1) {
        currentIndex++;
        loadBar(currentIndex);
      }
    });
    btnPlay.addEventListener('click', () => {
      isPaused = !isPaused;
      btnPlay.textContent = isPaused ? '▶' : '⏸';
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        if (currentIndex < bars.length - 1) {
          currentIndex++;
          loadBar(currentIndex);
        }
      } else if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === ' ') {
        isPaused = !isPaused;
        btnPlay.textContent = isPaused ? '▶' : '⏸';
        e.preventDefault();
      }
    });

    // Optional: jump to a specific year on init via ?year=1995
    const params = new URLSearchParams(location.search);
    const wantYear = params.get('year');
    if (wantYear) {
      const i = bars.findIndex(b => String(b.year) === wantYear || b.yearLabel === wantYear);
      if (i >= 0) currentIndex = i;
    }

    // Go.
    loadBar(currentIndex);
    requestAnimationFrame(tick);

    console.log(`PBH: started with ${bars.length} bars`);
  }

  return { bars, registerBar, start };
})();
