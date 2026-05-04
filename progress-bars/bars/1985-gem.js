/* 1985 - Digital Research GEM (Atari ST flavour) (GUI) */
PBH.registerBar({
  year: 1985, yearLabel: '1985',
  name: 'GEM · Graphics Environment Manager',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#aaaaaa',
      backgroundImage: 'radial-gradient(rgba(0,0,0,0.45) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      padding: '40px',
      fontFamily: '"Geneva", "Helvetica", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:80px auto; background:#fff; border: 1px solid #000; box-shadow: 2px 2px 0 #000;">
        <div style="background:#fff; color:#000; padding:4px 10px; font-size:12px; font-weight:bold; border-bottom:1px solid #000; display:flex; justify-content:space-between;">
          <span>◆ Copy</span>
          <span>x</span>
        </div>
        <div style="padding: 26px; color:#000;">
          <div style="font-size:12px; margin-bottom: 8px;">Copying file:</div>
          <div style="font-size:12px; font-weight:bold; margin-bottom:18px;" id="bgem-file">DESKTOP.INF</div>
          <div style="border: 1px solid #000; height: 18px; background:#fff;">
            <div id="bgem-fill" style="height:100%; width:0%; background-image: repeating-linear-gradient(45deg, #000 0 2px, #fff 2px 4px); transition: width 0.05s linear;"></div>
          </div>
          <div style="font-size:11px; margin-top:8px; text-align:center;" id="bgem-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bgem-fill');
    const pctEl = canvas.querySelector('#bgem-pct');
    const fileEl = canvas.querySelector('#bgem-file');
    const files = ['DESKTOP.INF', 'GEMDOS.PRG', 'GEMVDI.PRG', 'GEMBIOS.PRG', 'GEMSYS.PRG', 'PAINT.PRG'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
