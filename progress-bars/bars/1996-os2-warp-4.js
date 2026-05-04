/* 1996 - OS/2 Warp 4 · Merlin - IBM blue/red warp (GUI) */
PBH.registerBar({
  year: 1996, yearLabel: '1996',
  name: 'OS/2 Warp 4 · Merlin',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #1a2068 0%, #5560c4 100%)',
      padding: '40px',
      fontFamily: '"WarpSans", "MS Sans Serif", Tahoma, sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:560px; margin:60px auto; background:#9999bb; border-top:2px solid #ccccdd; border-left:2px solid #ccccdd; border-bottom:2px solid #1a1a3a; border-right:2px solid #1a1a3a;">
        <div style="background: linear-gradient(180deg, #2030a0 0%, #4050c0 100%); color:#fff; padding:5px 10px; font-size:13px; font-weight:bold; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); display:flex; justify-content:space-between;">
          <span>WarpCenter - Installer</span>
          <span style="background:#3040b0; padding: 0 6px; border:1px solid #fff;">x</span>
        </div>
        <div style="padding: 22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying Object: Personal Information Manager …</div>
          <div style="font-size:11px; color:#222; margin-bottom: 18px;" id="bwarp-file">PMR.DLL</div>
          <div style="border-top:1px solid #1a1a3a; border-left:1px solid #1a1a3a; border-bottom:1px solid #ccccdd; border-right:1px solid #ccccdd; height: 22px; background:#fff;">
            <div id="bwarp-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #5070d8 0%, #2030a0 100%); transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>Workplace Shell</span>
            <span id="bwarp-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bwarp-fill');
    const pctEl = canvas.querySelector('#bwarp-pct');
    const fileEl = canvas.querySelector('#bwarp-file');
    const files = ['PMR.DLL', 'WPCONFIG.DLL', 'PMSHELL.EXE', 'OS2KRNL', 'BOOKSHELF.DLL', 'NETSCAPE.EXE'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
