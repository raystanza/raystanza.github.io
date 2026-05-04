/* 2008 - Android 1.0 · the original T-Mobile G1 - green/amber chrome (GUI) */
PBH.registerBar({
  year: 2008, yearLabel: '2008',
  name: 'Android 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#202020',
      padding: '20px',
      fontFamily: '"Droid Sans", "Roboto", sans-serif',
      display:'flex', alignItems:'center', justifyContent:'center',
    });
    canvas.innerHTML = `
      <div style="width: 260px; height: 460px; background:#000; border:6px solid #1a1a1a; border-radius:18px; padding: 24px 10px 60px; position:relative; box-shadow: 0 0 50px rgba(0,200,80,0.2);">
        <div style="background: linear-gradient(180deg, #1a1a1a 0%, #000 100%); color: #aaa; padding: 4px 8px; font-size: 11px; display:flex; justify-content:space-between; align-items:center;">
          <span>3G ◆◆◆◆</span>
          <span>2:42 PM</span>
          <span>🔋</span>
        </div>
        <div style="background: linear-gradient(180deg, #f0f0f0 0%, #c8c8c8 100%); color:#000; font-weight:bold; padding: 8px; font-size: 13px; text-align:center; border-bottom: 1px solid #888;">Market</div>
        <div style="padding: 18px 12px; color:#000; background:#fff; height: calc(100% - 80px);">
          <div style="font-size:12px; color:#222; margin-bottom: 6px;">Downloading…</div>
          <div style="font-size:11px; color:#666; margin-bottom: 28px;" id="ba1-file">com.android.maps</div>
          <div style="height: 12px; background: #ddd; border:1px solid #888; border-radius: 6px; overflow:hidden; padding: 1px;">
            <div id="ba1-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #a0e870 0%, #4ca018 100%); border-radius: 5px; transition: width 0.05s linear; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);"></div>
          </div>
          <div style="font-size:11px; color:#666; margin-top:10px; text-align:center;" id="ba1-status">0 KB / 1.4 MB</div>
        </div>
        <div style="position:absolute; bottom:14px; left:50%; transform:translateX(-50%); width:48px; height:24px; background:#0a0a0a; border-radius:12px;"></div>
      </div>
    `;
    const fillEl = canvas.querySelector('#ba1-fill');
    const statusEl = canvas.querySelector('#ba1-status');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        const kb = Math.floor((pct/100)*1400);
        statusEl.textContent = `${kb} KB / 1400 KB`;
      }
    };
  }
});
