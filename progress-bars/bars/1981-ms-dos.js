/* 1981 - MS-DOS · COMMAND.COM (CLI) */
PBH.registerBar({
  year: 1981, yearLabel: '1981',
  name: 'MS-DOS · COMMAND.COM',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background: '#000',
      color: '#c0c0c0',
      fontFamily: '"Courier New", monospace',
      fontSize: '20px',
      padding: '40px',
      lineHeight: '1.45',
    });
    canvas.innerHTML = `
      <div>Microsoft(R) MS-DOS(R) Version 1.25</div>
      <div>(C)Copyright Microsoft Corp 1981</div>
      <div style="height:24px"></div>
      <div>A:\\&gt;<span style="color:#fff"> XCOPY *.* C:\\BACKUP /S</span></div>
      <div id="b81-files" style="color:#aaa">&nbsp;</div>
      <div style="height:18px"></div>
      <div>[<span id="b81-bar" style="color:#55ffff"></span><span id="b81-empty" style="color:#444"></span>] <span id="b81-pct">  0</span>%</div>
    `;
    const filesEl = canvas.querySelector('#b81-files');
    const barEl = canvas.querySelector('#b81-bar');
    const emptyEl = canvas.querySelector('#b81-empty');
    const pctEl = canvas.querySelector('#b81-pct');
    const fileNames = ['CONFIG.SYS', 'AUTOEXEC.BAT', 'COMMAND.COM', 'IBMBIO.COM', 'IBMDOS.COM', 'FORMAT.COM', 'CHKDSK.EXE', 'EDLIN.COM'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct / 100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '░'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        const fi = Math.min(fileNames.length - 1, Math.floor((pct / 100) * fileNames.length));
        filesEl.textContent = fileNames[fi];
      }
    };
  }
});
