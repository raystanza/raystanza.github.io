/* 2008 - KDE Plasma 4 · Oxygen - early Qt4 darkness (GUI) */
PBH.registerBar({
  year: 2008, yearLabel: '2008',
  name: 'KDE Plasma 4 · Oxygen',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #2c3338 0%, #1a1c20 100%)',
      padding: '40px',
      fontFamily: '"Oxygen Sans", "Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:60px auto; background: rgba(60,68,76,0.92); border:1px solid #000; border-radius:6px; box-shadow: 0 8px 30px rgba(0,0,0,0.6); overflow:hidden;">
        <div style="background: linear-gradient(180deg, #5a6168 0%, #3a4046 100%); color:#fff; padding: 7px 14px; font-size:13px; font-weight:500; display:flex; justify-content:space-between;">
          <span>Dolphin - Move</span>
          <span style="display:flex; gap:5px;">
            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ffd070, #b07c20);"></span>
            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ff8484, #b03030);"></span>
          </span>
        </div>
        <div style="padding: 22px; color:#dcdcdc;">
          <div style="font-size:13px; margin-bottom:6px;">Moving 263 items to <i>~/Pictures/Vacation</i></div>
          <div style="font-size:11px; color:#aaa; margin-bottom: 22px;" id="bkp4-file">DSC_0148.JPG</div>
          <div style="background: #1a1c20; border:1px solid #000; border-radius:3px; height:14px; padding:1px;">
            <div id="bkp4-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #5fa6e8 0%, #2068b8 100%); border-radius:2px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>~ 12 sec remaining</span>
            <span id="bkp4-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bkp4-fill');
    const pctEl = canvas.querySelector('#bkp4-pct');
    const fileEl = canvas.querySelector('#bkp4-file');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const n = 148 + Math.floor((pct/100)*40);
        fileEl.textContent = `DSC_0${n}.JPG`;
      }
    };
  }
});
