/* 2017 - GNOME Shell · refined Adwaita, dark variant (GUI) */
PBH.registerBar({
  year: 2017, yearLabel: '2017',
  name: 'GNOME Shell · refined',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(135deg, #2e3436 0%, #1e2226 100%)',
      padding: '40px',
      fontFamily: '"Cantarell", "Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="background:#000; color:#bbb; padding:6px 18px; font-size:12px; margin:-40px -40px 32px; display:flex; justify-content:space-between; border-bottom: 1px solid #111;">
        <span>Activities</span>
        <span>Files</span>
        <span>9:41 AM ◔</span>
      </div>
      <div style="width:520px; margin:30px auto; background: #353535; border-radius:12px; box-shadow: 0 12px 40px rgba(0,0,0,0.7); overflow:hidden;">
        <div style="background: linear-gradient(180deg, #404040, #2a2a2a); padding:10px 14px; color:#fff; font-weight:500; font-size:13px; border-bottom: 1px solid #1a1a1a; display:flex; justify-content:space-between;">
          <span>Files - Restore from backup</span>
          <span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#404040; color:#fff; text-align:center; line-height:22px;">x</span>
        </div>
        <div style="padding: 22px; color:#dcdcdc;">
          <div style="font-size:13px; margin-bottom:6px;">Restoring backup snapshot</div>
          <div style="font-size:11px; color:#888; margin-bottom: 22px;" id="bgs-file">/home/user/Documents/draft.odt</div>
          <div style="background: #1a1a1a; border-radius: 8px; height: 6px; padding:0; overflow:hidden;">
            <div id="bgs-fill" style="height:100%; width:0%; background: #62a0ea; border-radius: 8px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#888;">
            <span>Snapshot ‘weekly-04’</span>
            <span id="bgs-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bgs-fill');
    const pctEl = canvas.querySelector('#bgs-pct');
    return { update(pct) { fillEl.style.width = pct + '%'; pctEl.textContent = Math.floor(pct) + '%'; } };
  }
});
