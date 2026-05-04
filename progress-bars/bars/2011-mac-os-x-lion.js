/* 2011 - Mac OS X Lion - linen + iOS-flavoured controls (GUI) */
PBH.registerBar({
  year: 2011, yearLabel: '2011',
  name: 'Mac OS X Lion',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#222',
      backgroundImage: `
        linear-gradient(rgba(40,40,40,0.6), rgba(40,40,40,0.6)),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px),
        repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 2px)
      `,
      padding: '40px',
      fontFamily: '"Helvetica Neue", "Lucida Grande", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:60px auto; background: linear-gradient(180deg, #f5f5f5 0%, #d8d8d8 100%); border:1px solid #555; border-radius: 8px 8px 6px 6px; box-shadow: 0 12px 40px rgba(0,0,0,0.6); overflow:hidden;">
        <div style="background: linear-gradient(180deg, #f4f4f4 0%, #b8b8b8 100%); padding: 6px 12px; font-size:12px; color:#000; font-weight:bold; border-bottom: 1px solid #888; display:flex; align-items:center; gap: 8px;">
          <span style="display:inline-block; width:11px; height:11px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ff9088, #c8302a); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4);"></span>
          <span style="display:inline-block; width:11px; height:11px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ffe070, #d39520); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4);"></span>
          <span style="display:inline-block; width:11px; height:11px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #80df7c, #248826); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4);"></span>
          <span style="flex:1; text-align:center;">Software Update</span>
        </div>
        <div style="padding: 24px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Downloading Mac OS X 10.7.2 …</div>
          <div style="font-size:11px; color:#555; margin-bottom: 22px;" id="blion-status">112 MB of 850 MB · 22 minutes remaining</div>
          <div style="background: linear-gradient(180deg, #b8b8b8, #ececec); border:1px solid #555; border-radius:8px; height:18px; padding:1px;">
            <div id="blion-fill" style="height:100%; width:0%; border-radius:7px; background: linear-gradient(180deg, #b6dcff 0%, #4a8edb 50%, #2c66b5 100%); transition: width 0.05s linear; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#555;">
            <span>Apple Software Update</span>
            <span id="blion-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#blion-fill');
    const pctEl = canvas.querySelector('#blion-pct');
    const statusEl = canvas.querySelector('#blion-status');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const mb = Math.floor((pct/100)*850);
        const min = Math.max(0, Math.ceil((100 - pct) / 5));
        statusEl.textContent = `${mb} MB of 850 MB · ${min} seconds remaining`;
      }
    };
  }
});
