/* 1994 - FreeDOS · FreeCOM - open-source DOS clone (CLI) */
PBH.registerBar({
  year: 1994, yearLabel: '1994',
  name: 'FreeDOS · FreeCOM',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background: '#000080',
      color: '#cccccc',
      fontFamily: '"Lucida Console", "Courier New", monospace',
      fontSize: '20px',
      padding: '40px',
      lineHeight: '1.45',
    });
    canvas.innerHTML = `
      <div style="color:#ffff55">FreeDOS kernel 2014 (build 2042)</div>
      <div>(C) Pat Villani, Jim Hall, and the FreeDOS team.  GPLv2.</div>
      <div style="height:18px"></div>
      <div>C:\\&gt;<span style="color:#fff"> FDIMPLES /R</span></div>
      <div id="bfd-pkg" style="color:#aaa">Installing pkg: kernel.zip</div>
      <div style="height:14px"></div>
      <div>[<span id="bfd-bar" style="color:#55ff55"></span><span id="bfd-empty" style="color:#000040"></span>] <span id="bfd-pct">  0</span>%</div>
    `;
    const barEl = canvas.querySelector('#bfd-bar');
    const emptyEl = canvas.querySelector('#bfd-empty');
    const pctEl = canvas.querySelector('#bfd-pct');
    const pkgEl = canvas.querySelector('#bfd-pkg');
    const pkgs = ['kernel.zip', 'command.zip', 'edit.zip', 'fdisk.zip', 'format.zip', 'mem.zip', 'xcopy.zip', 'help.zip'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '░'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        pkgEl.textContent = 'Installing pkg: ' + pkgs[Math.min(pkgs.length-1, Math.floor((pct/100)*pkgs.length))];
      }
    };
  }
});
