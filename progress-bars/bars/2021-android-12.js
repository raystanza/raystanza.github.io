/* 2021 - Android 12 · Material You - dynamic colour from wallpaper (GUI) */
PBH.registerBar({
  year: 2021, yearLabel: '2021',
  name: 'Android 12 · Material You',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #f0d9c0 0%, #d8a98a 100%)',
      padding: '20px',
      fontFamily: '"Google Sans", "Roboto", sans-serif',
      display:'flex', alignItems:'center', justifyContent:'center',
    });
    canvas.innerHTML = `
      <div style="width: 280px; height: 480px; background: linear-gradient(180deg, #efddc7 0%, #e6cdb1 100%); border: 6px solid #2a1a0a; border-radius: 36px; padding: 20px 16px; position:relative; box-shadow: 0 20px 60px rgba(40,20,0,0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size: 11px; color:#3a2412; padding: 0 6px; margin-bottom: 28px;">
          <span style="font-weight:500;">9:41</span>
          <span style="display:flex; gap:6px;">
            <span>📶</span><span>📡</span><span>🔋</span>
          </span>
        </div>
        <div style="background: #ffe8d3; border-radius: 28px; padding: 22px; margin-bottom: 16px; box-shadow: 0 6px 14px rgba(50,30,15,0.1);">
          <div style="font-size:18px; font-weight:500; color:#3a2412; margin-bottom: 4px;">Updating apps</div>
          <div style="font-size: 11px; color:#7a5b3d; margin-bottom: 22px;" id="bay-app">Maps · 142 MB</div>
          <div style="background: #f4d8b5; border-radius: 12px; height: 12px; padding: 2px;">
            <div id="bay-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #b56d3d, #7c4523); border-radius: 8px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#7a5b3d;">
            <span>3 of 8 complete</span>
            <span id="bay-pct">0%</span>
          </div>
        </div>
        <div style="position:absolute; bottom:14px; left:50%; transform:translateX(-50%); width:120px; height:4px; background:#3a2412; border-radius:2px;"></div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bay-fill');
    const pctEl = canvas.querySelector('#bay-pct');
    const appEl = canvas.querySelector('#bay-app');
    const apps = ['Maps · 142 MB', 'Gmail · 38 MB', 'Photos · 88 MB', 'Drive · 26 MB', 'Calendar · 14 MB', 'Chrome · 92 MB'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        appEl.textContent = apps[Math.min(apps.length-1, Math.floor((pct/100)*apps.length))];
      }
    };
  }
});
