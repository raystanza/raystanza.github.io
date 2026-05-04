/* 2011 - GNOME 3 - Adwaita, the controversial reboot (GUI) */
PBH.registerBar({
  year: 2011, yearLabel: '2011',
  name: 'GNOME 3 · Adwaita',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #2e3436 0%, #1f2326 100%)',
      padding: '40px',
      fontFamily: '"Cantarell", "Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="background:#000; color:#bbb; padding: 6px 18px; font-size:12px; margin: -40px -40px 32px; display:flex; justify-content:space-between;">
        <span>Activities</span>
        <span>2:42 PM</span>
        <span>○○●</span>
      </div>
      <div style="width:520px; margin:30px auto; background: #f6f5f4; border-radius:8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6); overflow:hidden;">
        <div style="background: linear-gradient(180deg, #e0dfdc, #c0bfbc); padding:10px 14px; color:#2e3436; font-weight:bold; font-size:13px; border-bottom: 1px solid #a0a0a0; display:flex; justify-content:space-between;">
          <span>Files - Copy</span>
          <span style="display:flex; gap:6px;">
            <span style="width:12px;height:12px;border-radius:50%;background:#fbb;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#bfa;"></span>
          </span>
        </div>
        <div style="padding: 22px; color:#2e3436;">
          <div style="font-size:13px; margin-bottom:6px;">Copying 142 files</div>
          <div style="font-size:11px; color:#666; margin-bottom: 22px;" id="bg3-file">~/Pictures/holiday-2011/</div>
          <div style="background: #d6d4d2; border-radius:8px; height: 6px; padding:0; overflow:hidden;">
            <div id="bg3-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #4a90d9, #1c5fa6); border-radius: 8px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#666;">
            <span>5.4 MB/s</span>
            <span id="bg3-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bg3-fill');
    const pctEl = canvas.querySelector('#bg3-pct');
    return {
      update(pct) { fillEl.style.width = pct + '%'; pctEl.textContent = Math.floor(pct) + '%'; }
    };
  }
});
