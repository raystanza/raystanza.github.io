/* 2021 - GNOME 40 - Files (Nautilus) file copy, libadwaita (GUI) */
PBH.registerBar({
  year: 2021, yearLabel: '2021',
  name: 'GNOME 40',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(135deg, #241f31 0%, #1c1825 100%)',
      padding: '40px',
      fontFamily: '"Inter", "Cantarell", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:60px auto; background: #2d2733; border-radius: 14px; box-shadow: 0 16px 48px rgba(0,0,0,0.7); overflow:hidden; border:1px solid rgba(255,255,255,0.05);">
        <div style="background: #3d3641; padding:10px 14px; color:#fff; font-weight:500; font-size:13px; border-bottom: 1px solid rgba(0,0,0,0.4); display:flex; justify-content:space-between; align-items:center;">
          <span>File Operations</span>
          <span style="display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:#454048; color:#fff; font-size:13px;">×</span>
        </div>
        <div style="padding: 22px; color:#fff;">
          <div style="display:flex; gap:14px; align-items:center; margin-bottom: 18px;">
            <svg width="48" height="42" viewBox="0 0 48 42" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg40FolderTab" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#62a0ea"/>
                  <stop offset="100%" stop-color="#3584e4"/>
                </linearGradient>
                <linearGradient id="bg40FolderFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3584e4"/>
                  <stop offset="100%" stop-color="#1c71d8"/>
                </linearGradient>
              </defs>
              <path d="M3 9 Q3 6 6 6 L17 6 L21 10 L42 10 Q45 10 45 13 L45 19 L3 19 Z" fill="url(#bg40FolderTab)"/>
              <path d="M3 15 L45 15 L45 35 Q45 39 41 39 L7 39 Q3 39 3 35 Z" fill="url(#bg40FolderFront)"/>
              <rect x="3" y="15" width="42" height="1.5" fill="rgba(0,0,0,0.18)"/>
            </svg>
            <div style="flex:1;">
              <div style="font-size:14px; font-weight:600;">Copying 142 files to <span style="opacity:0.85;">Backup</span></div>
              <div style="font-size:12px; color:#bbb; margin-top:2px;" id="bg40-file">~/Pictures/holiday-2021/IMG_0142.jpg</div>
            </div>
            <span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; background:#454048; color:#fff; font-size:13px;">⏸</span>
          </div>
          <div style="background: rgba(255,255,255,0.08); border-radius: 999px; height: 6px; overflow:hidden;">
            <div id="bg40-fill" style="height:100%; width:0%; background: #62a0ea; border-radius: 999px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#bbb;">
            <span id="bg40-status">5.4 MB/s &middot; 18 seconds left</span>
            <span id="bg40-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bg40-fill');
    const pctEl = canvas.querySelector('#bg40-pct');
    const fileEl = canvas.querySelector('#bg40-file');
    const statusEl = canvas.querySelector('#bg40-status');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const idx = Math.min(141, Math.floor((pct / 100) * 142));
        const num = String(142 + idx).padStart(4, '0');
        fileEl.textContent = `~/Pictures/holiday-2021/IMG_${num}.jpg`;
        const sec = Math.max(0, Math.ceil((100 - pct) / 5));
        statusEl.textContent = pct < 100
          ? `5.4 MB/s · ${sec} seconds left`
          : 'Done';
      }
    };
  }
});
