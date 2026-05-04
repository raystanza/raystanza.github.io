/* 2006 - Windows PowerShell - Monad's verb-noun cmdlets (CLI) */
PBH.registerBar({
  year: 2006, yearLabel: '2006',
  name: 'Windows PowerShell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#012456',
      color: '#eeeeee',
      fontFamily: '"Lucida Console", "Consolas", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div style="color:#ffe552">Windows PowerShell 1.0</div>
      <div style="color:#aaa">Copyright (C) 2006 Microsoft Corporation. All rights reserved.</div>
      <div style="height:18px"></div>
      <div>PS C:\\Users\\admin&gt; <span style="color:#fff">Get-ChildItem | ForEach-Object { Compress-Archive $_ -DestinationPath out.zip }</span></div>
      <div style="height:14px"></div>
      <div style="color:#ffe552; font-weight:bold;">Compress-Archive</div>
      <div style="font-size:13px; color:#fff;" id="bps-status">    Adding members to archive 'out.zip'</div>
      <div style="height:8px"></div>
      <div style="color:#fff;">[<span id="bps-bar" style="color:#3edcf8"></span><span id="bps-empty" style="color:#0a3a76"></span>] <span id="bps-pct">  0</span>%</div>
    `;
    const barEl = canvas.querySelector('#bps-bar');
    const emptyEl = canvas.querySelector('#bps-empty');
    const pctEl = canvas.querySelector('#bps-pct');
    const statusEl = canvas.querySelector('#bps-status');
    const items = ['Documents', 'Pictures', 'Music', 'Videos', 'Downloads', 'Desktop', 'AppData', 'Source'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        statusEl.textContent = '    Compressing item: ' + items[Math.min(items.length-1, Math.floor((pct/100)*items.length))];
      }
    };
  }
});
