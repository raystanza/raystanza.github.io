/* 1988 - OS/2 1.1 Presentation Manager - IBM blue chrome (GUI) */
PBH.registerBar({
  year: 1988, yearLabel: '1988',
  name: 'OS/2 1.1 · Presentation Manager',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0000aa',
      padding: '40px',
      fontFamily: '"System", "MS Sans Serif", Tahoma, sans-serif',
    });
    canvas.innerHTML = `
      <div style="background:#bdbdbd; border-top:2px solid #fff; border-left:2px solid #fff; border-bottom:2px solid #000; border-right:2px solid #000; width:560px; margin:60px auto;">
        <div style="background:#0000aa; color:#fff; padding: 4px 10px; font-size:13px; font-weight:bold; display:flex; align-items:center;">
          <span style="display:inline-block; width:12px; height:12px; border:1px solid #000; background:#bbb; margin-right:8px;"></span>
          <span style="flex:1;">OS/2 Installer - Presentation Manager</span>
        </div>
        <div style="padding: 22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Installing OS/2 1.1 ...</div>
          <div style="font-size:11px; color:#222; margin-bottom: 20px;" id="bpm-file">PMWIN.DLL</div>
          <div style="border-top:1px solid #404040; border-left:1px solid #404040; border-bottom:1px solid #fff; border-right:1px solid #fff; height: 22px; background:#fff;">
            <div id="bpm-fill" style="height:100%; width:0%; background:#0000aa;"></div>
          </div>
          <div style="font-size:11px; margin-top:10px; text-align:right; color:#000;" id="bpm-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bpm-fill');
    const pctEl = canvas.querySelector('#bpm-pct');
    const fileEl = canvas.querySelector('#bpm-file');
    const files = ['PMWIN.DLL', 'PMGPI.DLL', 'PMSHELL.EXE', 'PMVIO.DLL', 'OS2.INI', 'OS2SYS.INI'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
