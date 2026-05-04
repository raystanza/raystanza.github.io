/* 1981 - Xerox Star (8010) · the first commercial WIMP system (GUI) */
PBH.registerBar({
  year: 1981, yearLabel: '1981',
  name: 'Xerox Star · 8010 Information System',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#dcdcdc',
      backgroundImage: 'radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      padding: '50px',
      fontFamily: '"Times New Roman", "Times", serif',
    });
    canvas.innerHTML = `
      <div style="background:#fff; border:1px solid #000; width:560px; margin:60px auto; box-shadow: 3px 3px 0 #000;">
        <div style="background:#000; color:#fff; padding:4px 12px; font-size:12px; display:flex; justify-content:space-between;">
          <span>Property Sheet - Document</span>
          <span>?</span>
        </div>
        <div style="padding:30px; color:#000;">
          <div style="font-size:13px; margin-bottom: 6px; font-style:italic;">Compose Document</div>
          <div style="font-size:12px; color:#333; margin-bottom: 18px;" id="bxs-file">"Annual Report.doc"</div>
          <div style="border:1px solid #000; height:18px; background:#fff; padding: 1px; position:relative;">
            <div id="bxs-fill" style="height:100%; width:0%; background-image: repeating-linear-gradient(90deg, #000 0 1px, transparent 1px 3px); transition: width 0.05s linear;"></div>
          </div>
          <div style="font-size:12px; margin-top:10px; display:flex; justify-content:space-between;">
            <span>Pages composed:</span>
            <span id="bxs-pages">0 / 24</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bxs-fill');
    const pagesEl = canvas.querySelector('#bxs-pages');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pagesEl.textContent = Math.floor((pct/100)*24) + ' / 24';
      }
    };
  }
});
