/* 2024 - KDE Plasma 6 - Dolphin file copy, Qt6 Breeze (GUI) */
PBH.registerBar({
  year: 2024, yearLabel: '2024',
  name: 'KDE Plasma 6',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(135deg, #1a3050 0%, #1d1d24 100%)',
      padding: '40px',
      fontFamily: '"Noto Sans", "Inter", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:60px auto; background: rgba(45,49,55,0.94); backdrop-filter: blur(20px); border:1px solid rgba(255,255,255,0.08); border-radius: 10px; box-shadow: 0 16px 48px rgba(0,0,0,0.7); overflow:hidden;">
        <div style="background: rgba(56,60,67,0.85); padding:9px 14px; color:#fff; font-weight:500; font-size:13px; border-bottom: 1px solid rgba(0,0,0,0.4); display:flex; justify-content:space-between; align-items:center;">
          <span>Copying &mdash; Dolphin</span>
          <span style="display:flex; gap:8px; align-items:center;">
            <span style="display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:3px; color:#bdc3c7; font-size:11px;">&minus;</span>
            <span style="display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:3px; color:#bdc3c7; font-size:11px;">▢</span>
            <span style="display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:3px; background:#3daee9; color:#fff; font-size:11px;">×</span>
          </span>
        </div>
        <div style="padding: 22px; color:#eff0f1;">
          <div style="display:flex; gap:14px; align-items:center; margin-bottom: 16px;">
            <svg width="56" height="44" viewBox="0 0 56 44" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bp6FolderTab" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#5fb4e6"/>
                  <stop offset="100%" stop-color="#2a8fcb"/>
                </linearGradient>
                <linearGradient id="bp6FolderFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3daee9"/>
                  <stop offset="100%" stop-color="#1d99f3"/>
                </linearGradient>
              </defs>
              <path d="M3 9 Q3 6 6 6 L20 6 L24 10 L50 10 Q53 10 53 13 L53 19 L3 19 Z" fill="url(#bp6FolderTab)"/>
              <path d="M3 15 L53 15 L53 36 Q53 41 48 41 L8 41 Q3 41 3 36 Z" fill="url(#bp6FolderFront)"/>
              <rect x="3" y="15" width="50" height="1.5" fill="rgba(0,0,0,0.18)"/>
            </svg>
            <div style="flex:1; min-width:0;">
              <div style="font-size:13px; font-weight:500; color:#eff0f1; margin-bottom:4px;">Copying 24 of 142 items to <span style="opacity:0.85;">Backup</span></div>
              <div style="font-size:11px; color:#bdc3c7; line-height:1.5;">
                <div><span style="color:#7f8c8d;">Source:</span> /home/user/Documents</div>
                <div><span style="color:#7f8c8d;">Destination:</span> /run/media/user/Backup</div>
                <div style="margin-top:2px;" id="bp6-file"><span style="color:#7f8c8d;">Copying:</span> design-spec.pdf</div>
              </div>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.06); border-radius: 6px; height: 8px; overflow:hidden;">
            <div id="bp6-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #3daee9, #1d99f3); border-radius: 6px; transition: width 0.05s linear; box-shadow: 0 0 12px rgba(60,180,255,0.4);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:12px; color:#bdc3c7;">
            <span id="bp6-status">24.6 MiB/s &middot; About 18 seconds remaining</span>
            <span id="bp6-pct">0%</span>
          </div>
          <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:14px;">
            <span style="font-size:11px; color:#eff0f1; padding:4px 12px; border:1px solid rgba(255,255,255,0.1); border-radius:4px; background:rgba(255,255,255,0.04);">Pause</span>
            <span style="font-size:11px; color:#eff0f1; padding:4px 12px; border:1px solid rgba(255,255,255,0.1); border-radius:4px; background:rgba(255,255,255,0.04);">Cancel</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bp6-fill');
    const pctEl = canvas.querySelector('#bp6-pct');
    const fileEl = canvas.querySelector('#bp6-file');
    const statusEl = canvas.querySelector('#bp6-status');
    const files = [
      'design-spec.pdf', 'budget-2024.ods', 'meeting-notes.md',
      'wireframes.kra', 'release-plan.odt', 'archive-q1.tar.gz'
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const f = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        fileEl.innerHTML = `<span style="color:#7f8c8d;">Copying:</span> ${f}`;
        const sec = Math.max(0, Math.ceil((100 - pct) / 5));
        statusEl.textContent = pct < 100
          ? `24.6 MiB/s · About ${sec} seconds remaining`
          : 'Complete';
      }
    };
  }
});
