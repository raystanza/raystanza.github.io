/* 1993 - Windows NT 3.1 cmd.exe (CLI) */
PBH.registerBar({
  year: 1993, yearLabel: '1993',
  name: 'Windows NT · cmd.exe',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      color: '#cccccc',
      fontFamily: '"Lucida Console", "Courier New", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div>Microsoft (R) Windows NT(TM)</div>
      <div>(C) Copyright 1985-1993 Microsoft Corp.</div>
      <div style="height:18px"></div>
      <div>C:\\WINNT\\system32&gt;<span style="color:#fff"> chkdsk C:</span></div>
      <div id="bnt-step" style="color:#aaa">Verifying files (Stage 1 of 3)…</div>
      <div style="height:14px"></div>
      <div>     <span id="bnt-bar" style="color:#fff"></span><span id="bnt-empty" style="color:#444"></span> <span id="bnt-pct">0</span> percent complete.</div>
    `;
    const barEl = canvas.querySelector('#bnt-bar');
    const emptyEl = canvas.querySelector('#bnt-empty');
    const pctEl = canvas.querySelector('#bnt-pct');
    const stepEl = canvas.querySelector('#bnt-step');
    const stages = ['Verifying files (Stage 1 of 3)…', 'Verifying indexes (Stage 2 of 3)…', 'Verifying security descriptors (Stage 3 of 3)…'];
    return {
      update(pct) {
        const total = 32;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct);
        stepEl.textContent = stages[Math.min(stages.length-1, Math.floor((pct/100)*stages.length))];
      }
    };
  }
});
