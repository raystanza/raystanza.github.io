/* 1998 - KDE 1.0 - first widely-used Linux desktop (GUI) */
PBH.registerBar({
  year: 1998, yearLabel: '1998',
  name: 'KDE 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#9c9c9c',
      backgroundImage: 'linear-gradient(180deg, #c0c0c0 0%, #707080 100%)',
      padding: '40px',
      fontFamily: '"Helvetica", "Arial", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:560px; margin:60px auto; background:#bbbbbb; border-top:2px solid #f0f0f0; border-left:2px solid #f0f0f0; border-bottom:2px solid #444; border-right:2px solid #444;">
        <div style="background: linear-gradient(180deg, #4060a0 0%, #2a4070 100%); color:#fff; padding:5px 10px; font-size:13px; font-weight:bold; display:flex; justify-content:space-between;">
          <span>KFM - Copy progress</span>
          <span style="display:flex; gap:3px;">
            <span style="width:14px; height:14px; background:#bbb; border-top:1px solid #f0f0f0; border-left:1px solid #f0f0f0; border-bottom:1px solid #444; border-right:1px solid #444; color:#000; font-size:10px; text-align:center; line-height:12px;">_</span>
            <span style="width:14px; height:14px; background:#bbb; border-top:1px solid #f0f0f0; border-left:1px solid #f0f0f0; border-bottom:1px solid #444; border-right:1px solid #444; color:#000; font-size:10px; text-align:center; line-height:12px;">x</span>
          </span>
        </div>
        <div style="padding:22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying file:</div>
          <div style="font-size:11px; color:#222; margin-bottom: 18px;" id="bkde1-file">/home/konqi/Mail/inbox</div>
          <div style="border-top:2px solid #444; border-left:2px solid #444; border-bottom:2px solid #f0f0f0; border-right:2px solid #f0f0f0; height: 22px; background:#fff;">
            <div id="bkde1-fill" style="height:100%; width:0%; background:#4060a0;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>K Desktop Environment 1.0</span>
            <span id="bkde1-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bkde1-fill');
    const pctEl = canvas.querySelector('#bkde1-pct');
    const fileEl = canvas.querySelector('#bkde1-file');
    const files = ['/home/konqi/Mail/inbox', '/home/konqi/Documents/letter.kwd', '/home/konqi/Pictures/wallpaper.jpg', '/usr/share/sounds/login.wav', '/usr/share/icons/kfm.png'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
