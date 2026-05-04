/* 1987 - OS/2 cmd.exe - IBM blue console (CLI) */
PBH.registerBar({
  year: 1987, yearLabel: '1987',
  name: 'OS/2 · cmd.exe',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0000aa',
      color: '#cccccc',
      fontFamily: '"Lucida Console", "Courier New", monospace',
      fontSize: '18px',
      padding: '40px',
      lineHeight: '1.5',
    });
    canvas.innerHTML = `
      <div>The Operating System/2  Version 1.0</div>
      <div>(C) Copyright IBM Corp 1987.  (C) Copyright Microsoft Corp 1987.</div>
      <div style="height:18px"></div>
      <div>[C:\\OS2]<span style="color:#fff"> XCOPY *.* D:\\BACKUP /S /E</span></div>
      <div id="bos2c-file" style="color:#aaaaaa">CONFIG.SYS  →  D:\\BACKUP\\</div>
      <div style="height:14px"></div>
      <div>[<span id="bos2c-bar" style="color:#ffff55"></span><span id="bos2c-empty" style="color:#000088"></span>] <span id="bos2c-pct">  0</span>%</div>
    `;
    const barEl = canvas.querySelector('#bos2c-bar');
    const emptyEl = canvas.querySelector('#bos2c-empty');
    const pctEl = canvas.querySelector('#bos2c-pct');
    const fileEl = canvas.querySelector('#bos2c-file');
    const files = ['CONFIG.SYS', 'OS2.INI', 'CMD.EXE', 'OS2KRNL', 'PMSHELL.EXE', 'PMWIN.DLL', 'DOSCALL1.DLL'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))] + '  →  D:\\BACKUP\\';
      }
    };
  }
});
