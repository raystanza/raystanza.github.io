/* 2012 - Elvish - structured-data shell with rich prompt (CLI) */
PBH.registerBar({
  year: 2012, yearLabel: '2012',
  name: 'Elvish · expressive shell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#1c2228',
      color: '#dadada',
      fontFamily: '"JetBrains Mono", "Menlo", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div style="background:#3a4048; padding: 4px 12px; color:#fff; font-size:11px; margin:-40px -40px 22px; display:flex; justify-content:space-between;">
        <span>~ on elvish v0.18</span>
        <span>main ✓</span>
      </div>
      <div><span style="color:#7fb8a4;">~/work</span> <span style="color:#777;">›</span> <span style="color:#fff">put (range 100) | each {|n| println $n}</span></div>
      <div id="belv-line" style="color:#bbb">  ▸ emitting 0…</div>
      <div style="height:14px"></div>
      <div>processing <span id="belv-bar" style="color:#7fb8a4"></span><span id="belv-empty" style="color:#2a3038"></span> <span id="belv-pct" style="color:#7fb8a4">0%</span></div>
      <div style="height:14px"></div>
      <div><span style="color:#7fb8a4;">~/work</span> <span style="color:#777;">›</span> <span style="background:#dadada;color:#1c2228;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#belv-bar');
    const emptyEl = canvas.querySelector('#belv-empty');
    const pctEl = canvas.querySelector('#belv-pct');
    const lineEl = canvas.querySelector('#belv-line');
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '◆'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        lineEl.textContent = `  ▸ emitting ${Math.floor(pct)}…`;
      }
    };
  }
});
