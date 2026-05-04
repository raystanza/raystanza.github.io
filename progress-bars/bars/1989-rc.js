/* 1989 - rc · the Plan 9 shell (CLI) */
PBH.registerBar({
  year: 1989, yearLabel: '1989',
  name: 'rc · Plan 9 shell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#ffffea',
      color: '#222',
      fontFamily: '"Pelm", "Lucida Sans Typewriter", "Courier New", monospace',
      fontSize: '18px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div style="background:#222; color:#ffffea; padding:2px 8px; font-size:11px; margin: -40px -40px 22px;">term% - rio</div>
      <div>cpu% <span style="color:#666">mk install</span></div>
      <div id="brc-file" style="color:#666">8c -FVw 9p.c</div>
      <div style="height:14px"></div>
      <div><span style="color:#222">[</span><span id="brc-bar" style="color:#222"></span><span id="brc-empty" style="color:#cfcfb8"></span><span style="color:#222">]</span> <span id="brc-pct" style="color:#222">0%</span></div>
      <div style="height:14px"></div>
      <div>cpu%<span style="background:#222;color:#ffffea;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#brc-bar');
    const emptyEl = canvas.querySelector('#brc-empty');
    const pctEl = canvas.querySelector('#brc-pct');
    const fileEl = canvas.querySelector('#brc-file');
    const files = ['8c -FVw 9p.c', '8c -FVw fs.c', '8c -FVw rio.c', '8l -o rio rio.8', 'install -m 775 rio /bin', 'mk clean'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '|'.repeat(filled);
        emptyEl.textContent = ' '.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
