/* 2016 - PowerShell Core - open-source, cross-platform black-on-cyan (CLI) */
PBH.registerBar({
  year: 2016, yearLabel: '2016',
  name: 'PowerShell Core · pwsh',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#1e1e1e',
      color: '#cccccc',
      fontFamily: '"Cascadia Code", "Consolas", "Menlo", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div style="color:#3edcf8">PowerShell 6.0.0</div>
      <div style="color:#aaa">https://aka.ms/pscore6</div>
      <div style="height:16px"></div>
      <div><span style="color:#3edcf8;">PS</span> <span style="color:#fff;">/Users/admin&gt;</span> <span style="color:#fff">Get-Module -ListAvailable | Update-Module</span></div>
      <div style="height:14px"></div>
      <div style="color:#ffe552; font-weight:bold;">Update-Module</div>
      <div style="font-size:13px; color:#fff;" id="bpwsh-status">Updating PSReadLine</div>
      <div style="height:8px"></div>
      <div>[<span id="bpwsh-bar" style="color:#3edcf8"></span><span id="bpwsh-empty" style="color:#444"></span>] <span id="bpwsh-pct">  0</span>%</div>
    `;
    const barEl = canvas.querySelector('#bpwsh-bar');
    const emptyEl = canvas.querySelector('#bpwsh-empty');
    const pctEl = canvas.querySelector('#bpwsh-pct');
    const statusEl = canvas.querySelector('#bpwsh-status');
    const mods = ['PSReadLine', 'PSScriptAnalyzer', 'Pester', 'Az.Accounts', 'Microsoft.PowerShell.Archive', 'PowerShellGet'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        statusEl.textContent = 'Updating ' + mods[Math.min(mods.length-1, Math.floor((pct/100)*mods.length))];
      }
    };
  }
});
