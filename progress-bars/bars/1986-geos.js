/* 1986 - GEOS for Commodore 64 - pixel-art chrome (GUI) */
PBH.registerBar({
  year: 1986, yearLabel: '1986',
  name: 'GEOS · Commodore 64',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#7878ff',
      backgroundImage: 'linear-gradient(180deg, #4040c0 0%, #7878ff 100%)',
      padding: '50px',
      fontFamily: '"Courier New", monospace',
      imageRendering: 'pixelated',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:60px auto; background:#fff; border: 2px solid #000; box-shadow: 4px 4px 0 #000;">
        <div style="background:#000; color:#fff; padding: 3px 10px; font-size:12px; display:flex; justify-content:space-between;">
          <span>♦ deskTop</span>
          <span>geoCalc</span>
        </div>
        <div style="padding:22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">printing to Commodore MPS-803 …</div>
          <div style="font-size:11px; color:#444; margin-bottom: 20px;" id="bgeos-page">Page 1 of 4</div>
          <div style="border: 2px solid #000; height: 20px; background:#fff; padding: 1px;">
            <div id="bgeos-fill" style="height:100%; width:0%; background:#000; transition: width 0.05s linear;"></div>
          </div>
          <div style="text-align:center; font-size:11px; margin-top:10px;" id="bgeos-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bgeos-fill');
    const pctEl = canvas.querySelector('#bgeos-pct');
    const pageEl = canvas.querySelector('#bgeos-page');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        pageEl.textContent = `Page ${1 + Math.min(3, Math.floor((pct/100)*4))} of 4`;
      }
    };
  }
});
