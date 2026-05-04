/* 1973 - Xerox Alto */
PBH.registerBar({
  year: 1973, yearLabel: '1973',
  name: 'Xerox Alto',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#fff', padding: '40px',
      fontFamily: '"Courier New", monospace', color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        border:2px solid #000; width:560px; margin:60px auto;
        background:#fff; box-shadow: 6px 6px 0 #000;
      ">
        <div style="
          background:#000; color:#fff; padding:4px 10px;
          font-size:13px; font-weight:bold; letter-spacing:1px;
        ">Bravo - Document.bravo</div>
        <div style="padding:24px; font-size:13px; line-height:1.7;">
          <div>Saving document to file system…</div>
          <div style="height:18px"></div>
          <div style="font-size:12px; color:#444;" id="b73-page">Page 1 of 12</div>
          <div style="
            border:2px solid #000; height:18px; background:#fff;
            margin-top:14px; position:relative;
          ">
            <div id="b73-fill" style="
              height:100%; width:0%;
              background-image: repeating-linear-gradient(90deg, #000 0 4px, #fff 4px 6px);
              transition: width 0.05s linear;
            "></div>
          </div>
          <div style="font-size:12px; margin-top:10px;" id="b73-pct">0%</div>
        </div>
      </div>`;
    const fillEl = canvas.querySelector('#b73-fill');
    const pctEl  = canvas.querySelector('#b73-pct');
    const pageEl = canvas.querySelector('#b73-page');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent  = Math.floor(pct) + '%';
        pageEl.textContent = `Page ${Math.max(1, Math.ceil((pct/100)*12))} of 12`;
      }
    };
  }
});
