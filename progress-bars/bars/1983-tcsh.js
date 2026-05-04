/* 1983 - tcsh (TENEX C shell) - Ken Greer's filename completion fork (CLI) */
PBH.registerBar({
  year: 1983, yearLabel: '1983',
  name: 'tcsh · TENEX C shell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      color: '#e0e0e0',
      fontFamily: '"VT323", "Courier New", monospace',
      fontSize: '19px',
      padding: '40px',
      lineHeight: '1.5',
    });
    canvas.innerHTML = `
      <div>tcsh 1.0  (TENEX C shell)</div>
      <div style="height:14px"></div>
      <div>uci% <span style="color:#fff">make world</span></div>
      <div id="btcsh-line" style="color:#9c9">cc -O -c kernel.c</div>
      <div style="height:14px"></div>
      <div>[<span id="btcsh-bar" style="color:#7f7"></span><span id="btcsh-empty" style="color:#333"></span>] <span id="btcsh-pct" style="color:#7f7">0%</span></div>
      <div style="height:14px"></div>
      <div>uci% <span id="btcsh-cur" style="background:#e0e0e0;color:#000;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#btcsh-bar');
    const emptyEl = canvas.querySelector('#btcsh-empty');
    const pctEl = canvas.querySelector('#btcsh-pct');
    const lineEl = canvas.querySelector('#btcsh-line');
    const lines = ['cc -O -c kernel.c', 'cc -O -c sched.c', 'cc -O -c vm.c', 'cc -O -c fs.c', 'cc -O -c net.c', 'ld -o vmunix *.o'];
    return {
      update(pct) {
        const total = 32;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '#'.repeat(filled);
        emptyEl.textContent = '.'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        lineEl.textContent = lines[Math.min(lines.length-1, Math.floor((pct/100)*lines.length))];
      }
    };
  }
});
