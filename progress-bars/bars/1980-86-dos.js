/* 1980 - 86-DOS · COMMAND.COM (CLI) - Tim Paterson's QDOS for the Intel 8086 */
PBH.registerBar({
  year: 1980, yearLabel: '1980',
  name: '86-DOS · COMMAND.COM',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background: '#000',
      color: '#cccccc',
      fontFamily: '"Courier New", monospace',
      fontSize: '20px',
      padding: '40px',
      lineHeight: '1.45',
    });
    canvas.innerHTML = `
      <div>The Software Bus 86-DOS  version 0.34</div>
      <div>(C) Seattle Computer Products 1980</div>
      <div style="height:24px"></div>
      <div>A&gt;<span style="color:#fff"> WRITING SECTORS</span></div>
      <div id="b80d-track" style="color:#aaa">TRACK 00 SECTOR 01</div>
      <div style="height:18px"></div>
      <div>WRITING [<span id="b80d-bar" style="color:#cccccc"></span><span id="b80d-empty" style="color:#444"></span>]</div>
    `;
    const trackEl = canvas.querySelector('#b80d-track');
    const barEl = canvas.querySelector('#b80d-bar');
    const emptyEl = canvas.querySelector('#b80d-empty');
    return {
      update(pct) {
        const total = 32;
        const filled = Math.floor((pct / 100) * total);
        barEl.textContent = '#'.repeat(filled);
        emptyEl.textContent = '.'.repeat(total - filled);
        const t = Math.floor((pct / 100) * 39);
        const s = 1 + Math.floor(((pct / 100) * 39 * 8) % 8);
        trackEl.textContent = `TRACK ${String(t).padStart(2,'0')} SECTOR ${String(s).padStart(2,'0')}`;
      }
    };
  }
});
