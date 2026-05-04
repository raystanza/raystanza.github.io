/* 2020 - macOS Big Sur - Finder file copy (GUI) */
PBH.registerBar({
  year: 2020, yearLabel: '2020',
  name: 'macOS Big Sur',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(135deg, #ec5b6f 0%, #e3a96a 25%, #66c5e8 60%, #2c6cad 100%)',
      padding: '40px',
      fontFamily: '"SF Pro Display", "Helvetica Neue", -apple-system, sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:50px auto; background: rgba(248,248,250,0.82); backdrop-filter: blur(40px); border:0.5px solid rgba(0,0,0,0.18); border-radius: 12px; box-shadow: 0 24px 60px rgba(0,0,0,0.4), inset 0 0 0 0.5px rgba(255,255,255,0.6); overflow:hidden;">
        <div style="padding: 11px 14px; display:flex; align-items:center; gap:8px; position:relative; border-bottom: 0.5px solid rgba(0,0,0,0.08);">
          <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#ff5f57; border:0.5px solid rgba(0,0,0,0.12);"></span>
          <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#febc2e; border:0.5px solid rgba(0,0,0,0.12);"></span>
          <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#28c840; border:0.5px solid rgba(0,0,0,0.12);"></span>
          <span style="position:absolute; left:0; right:0; text-align:center; font-size:13px; color:#000; font-weight:600; pointer-events:none;">Copy</span>
        </div>
        <div style="padding: 28px 26px 22px;">
          <div style="display:flex; gap:18px; align-items:center; justify-content:center; margin-bottom: 22px;">
            <svg width="240" height="64" viewBox="0 0 240 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bbsTab" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#6cbcf3"/>
                  <stop offset="100%" stop-color="#2e84cc"/>
                </linearGradient>
                <linearGradient id="bbsFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#a4d8f8"/>
                  <stop offset="100%" stop-color="#3d99dc"/>
                </linearGradient>
              </defs>
              <g transform="translate(8,6)">
                <path d="M3 9 Q3 6 6 6 L20 6 L25 11 L52 11 Q55 11 55 14 L55 20 L3 20 Z" fill="url(#bbsTab)"/>
                <path d="M3 16 L55 16 L55 44 Q55 49 50 49 L8 49 Q3 49 3 44 Z" fill="url(#bbsFront)"/>
                <rect x="3" y="16" width="52" height="1.5" fill="rgba(0,0,0,0.1)"/>
              </g>
              <text x="120" y="40" font-size="26" fill="rgba(0,0,0,0.45)" text-anchor="middle" font-family="-apple-system, Helvetica Neue, sans-serif">→</text>
              <g transform="translate(174,6)">
                <path d="M3 9 Q3 6 6 6 L20 6 L25 11 L52 11 Q55 11 55 14 L55 20 L3 20 Z" fill="url(#bbsTab)"/>
                <path d="M3 16 L55 16 L55 44 Q55 49 50 49 L8 49 Q3 49 3 44 Z" fill="url(#bbsFront)"/>
                <rect x="3" y="16" width="52" height="1.5" fill="rgba(0,0,0,0.1)"/>
              </g>
            </svg>
          </div>
          <div style="font-size:13px; color:#000; font-weight:600; margin-bottom:4px; text-align:center;">Copying 142 items to &ldquo;Backup&rdquo;</div>
          <div style="font-size:11px; color:#5e5e63; margin-bottom:14px; text-align:center;" id="bbs-file">IMG_0142.HEIC</div>
          <div style="background: rgba(0,0,0,0.08); border-radius:10px; height:5px; overflow:hidden;">
            <div id="bbs-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #007aff, #5e5ce6); border-radius:10px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#5e5e63;">
            <span id="bbs-remaining">About 2 minutes remaining</span>
            <span id="bbs-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bbs-fill');
    const pctEl = canvas.querySelector('#bbs-pct');
    const fileEl = canvas.querySelector('#bbs-file');
    const remEl = canvas.querySelector('#bbs-remaining');
    const files = [
      'IMG_0142.HEIC', 'IMG_0157.HEIC', 'IMG_0203.HEIC',
      'IMG_0238.HEIC', 'IMG_0264.HEIC', 'IMG_0289.HEIC'
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const sec = Math.max(1, Math.ceil((100 - pct) / 2));
        remEl.textContent = pct < 100 ? `About ${sec} seconds remaining` : 'Complete';
      }
    };
  }
});
