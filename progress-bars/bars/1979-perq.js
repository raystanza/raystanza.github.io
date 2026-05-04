/* 1979 - PERQ (Three Rivers) */
PBH.registerBar({
  year: 1979, yearLabel: '1979',
  name: 'PERQ · Three Rivers',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background:'#fff', padding:'40px',
      fontFamily:'"Courier New", monospace', color:'#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#fff; border:1px solid #000;
        width:520px; margin:50px auto;
        box-shadow: 4px 4px 0 #000;
      ">
        <div style="
          background:#000; color:#fff; padding:5px 10px;
          font-size:13px; font-weight:bold;
          display:flex; justify-content:space-between; align-items:center;
        ">
          <span>PERQ - POS Workstation</span>
          <div style="display:flex; gap:4px;">
            <div style="width:12px;height:12px;border:1px solid #fff;background:#fff;"></div>
            <div style="width:12px;height:12px;border:1px solid #fff;"></div>
          </div>
        </div>
        <div style="padding:30px 28px;">
          <div style="font-size:14px; margin-bottom:6px;">Compiling PASCAL module…</div>
          <div style="font-size:12px; color:#555; margin-bottom:24px;" id="b79-file">SCREEN.PAS</div>
          <div style="
            border:1px solid #000; height:24px; background:#fff;
            position:relative; overflow:hidden;
          ">
            <div id="b79-fill" style="
              height:100%; width:0%;
              background-image:
                repeating-linear-gradient(0deg, #000 0 2px, transparent 2px 4px);
              transition: width 0.05s linear;
            "></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span style="color:#555;">PASCAL → POS bytecode</span>
            <span id="b79-pct">0%</span>
          </div>
        </div>
      </div>`;
    const fillEl=canvas.querySelector('#b79-fill'), pctEl=canvas.querySelector('#b79-pct'), fileEl=canvas.querySelector('#b79-file');
    const files=['SCREEN.PAS','WINDOW.PAS','EDITOR.PAS','PRINTER.PAS','GRAPH.PAS','MAIN.PAS'];
    return {
      update(pct){
        fillEl.style.width=pct+'%';
        pctEl.textContent=Math.floor(pct)+'%';
        fileEl.textContent=files[Math.min(files.length-1,Math.floor((pct/100)*files.length))];
      }
    };
  }
});
