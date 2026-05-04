/* 1983 - KornShell (ksh) - David Korn at Bell Labs (CLI) */
PBH.registerBar({
  year: 1983, yearLabel: '1983',
  name: 'KornShell · ksh',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      color: '#dcdcdc',
      fontFamily: '"DejaVu Sans Mono", "Courier New", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.5',
    });
    canvas.innerHTML = `
      <div>$ ksh -V</div>
      <div>  version sh (AT&amp;T Research) 1983-08-01</div>
      <div style="height:18px"></div>
      <div>$ <span style="color:#fff">find /usr -name '*.c' | xargs wc -l</span></div>
      <div id="bksh-line" style="color:#aaa">scanning /usr/include …</div>
      <div style="height:14px"></div>
      <div><span style="color:#bbb">Progress:</span> <span id="bksh-bar" style="color:#fff"></span><span id="bksh-empty" style="color:#444"></span> <span id="bksh-pct">0%</span></div>
      <div style="height:14px"></div>
      <div>$<span id="bksh-cur" style="background:#dcdcdc;color:#000;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bksh-bar');
    const emptyEl = canvas.querySelector('#bksh-empty');
    const pctEl = canvas.querySelector('#bksh-pct');
    const lineEl = canvas.querySelector('#bksh-line');
    const dirs = ['/usr/include', '/usr/include/sys', '/usr/src/cmd', '/usr/src/lib', '/usr/src/uts', '/usr/local/src'];
    return {
      update(pct) {
        const total = 28;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '='.repeat(filled);
        emptyEl.textContent = '-'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        lineEl.textContent = 'scanning ' + dirs[Math.min(dirs.length-1, Math.floor((pct/100)*dirs.length))] + ' …';
      }
    };
  }
});
