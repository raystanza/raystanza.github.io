/* 2005 - fish · Friendly Interactive SHell - auto-suggestions in faded text (CLI) */
PBH.registerBar({
  year: 2005, yearLabel: '2005',
  name: 'fish · Friendly Interactive SHell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#181818',
      color: '#dadada',
      fontFamily: '"Menlo", "DejaVu Sans Mono", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div>Welcome to fish, the friendly interactive shell</div>
      <div>Type help for instructions on how to use fish</div>
      <div style="height:14px"></div>
      <div><span style="color:#5fafff;">user@mac</span> <span style="color:#5fff5f;">~/code</span> <span style="color:#fff">&gt;</span> <span style="color:#fff">curl -O https://example.com/big.iso</span></div>
      <div id="bfish-line" style="color:#999">  % Total    % Received % Xferd  Average Speed   Time    Current</div>
      <div style="height:14px"></div>
      <div>downloading <span id="bfish-bar" style="color:#5fafff"></span><span id="bfish-empty" style="color:#333"></span> <span id="bfish-pct" style="color:#5fafff">0%</span></div>
      <div style="height:14px"></div>
      <div><span style="color:#5fafff;">user@mac</span> <span style="color:#5fff5f;">~/code</span> &gt;<span style="background:#dadada;color:#181818;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bfish-bar');
    const emptyEl = canvas.querySelector('#bfish-empty');
    const pctEl = canvas.querySelector('#bfish-pct');
    const lineEl = canvas.querySelector('#bfish-line');
    return {
      update(pct) {
        const total = 32;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '━'.repeat(filled);
        emptyEl.textContent = '━'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        const mb = Math.floor((pct/100) * 700);
        lineEl.textContent = `  ${String(Math.floor(pct)).padStart(3,' ')}     700M  ${String(Math.floor(pct)).padStart(3,' ')}  ${String(mb).padStart(3,' ')}M    0     5.4M  0:02:11   ${String(Math.max(0, Math.ceil((100-pct)/10))).padStart(3,' ')}s`;
      }
    };
  }
});
