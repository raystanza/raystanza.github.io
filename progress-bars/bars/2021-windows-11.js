/* 2021 - Windows 11 - File Explorer copy dialog (GUI)
 *
 * Authentic Win11 file-copy dialog:
 *  - Same fundamental layout as the Win 10 dialog, but skinned with Win11's
 *    visual language:
 *      • Mica acrylic chrome (translucent + backdrop blur of the wallpaper)
 *      • 8px rounded window corners with a subtle 1px translucent border
 *      • Segoe UI Variable; slightly larger body type than Win10
 *      • Window controls are still 46x32 hit-targets with monochrome glyphs,
 *        but the close button hover is a softened red and corner clipping
 *        respects the rounded window
 *      • Buttons are rounded (4px) with Win11's neutral surface fill
 *  - Big "X% complete" headline, "Copying N items from A to B" sub-line,
 *    current filename, then the thin accent-blue progress bar.
 *  - Default Win11 "Bloom" wallpaper-ish gradient behind the window so the
 *    Mica blur has something to sample.
 */
PBH.registerBar({
  year: 2021, yearLabel: '2021',
  name: 'Microsoft Windows 11',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(135deg, #1a3a8a 0%, #4d8cd1 35%, #c46db8 70%, #f0a070 100%)',
      padding: '40px',
      fontFamily: '"Segoe UI Variable", "Segoe UI", "Tahoma", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        width:560px; margin:50px auto;
        background: rgba(243, 243, 243, 0.78);
        backdrop-filter: blur(60px) saturate(180%);
        -webkit-backdrop-filter: blur(60px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 8px;
        box-shadow: 0 28px 60px rgba(0,0,0,0.4);
        overflow:hidden;
        text-align:left;
        color:#000;
      ">
        <!-- Title bar: thin, mica, 32px tall -->
        <div style="
          display:flex; align-items:center;
          height:32px;
          font-size:12px; color:#1a1a1a;
        ">
          <div style="padding: 0 12px; display:flex; align-items:center; gap:8px;">
            <!-- Tiny copy icon (two pages) -->
            <svg width="14" height="14" viewBox="0 0 14 14" style="flex-shrink:0;">
              <rect x="1" y="3" width="8" height="9" fill="#fff" stroke="#0078d4" stroke-width="1"/>
              <rect x="4" y="1" width="8" height="9" fill="#fff" stroke="#0078d4" stroke-width="1"/>
            </svg>
            <span>5,612 Items - 12.4 GB</span>
          </div>
          <div style="flex:1;"></div>
          <!-- Win11 window controls: 46x32 hit-targets, thinner glyphs -->
          <div style="display:flex; height:32px;">
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:10px; color:#1a1a1a;">-</div>
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#1a1a1a;">▢</div>
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:11px; color:#1a1a1a; border-top-right-radius:8px;">✕</div>
          </div>
        </div>

        <div style="padding: 12px 22px 22px;">
          <!-- Big percent-complete headline (Segoe UI Variable Display Light) -->
          <div style="font-size:24px; font-weight:300; color:#000; margin-bottom:8px;" id="bw11-pct-big">
            0% complete
          </div>

          <!-- Source → Destination -->
          <div style="font-size:13px; color:#000; margin-bottom:2px;">
            Copying <b>5,612 items</b> from <b>Documents</b> (C:) to <b>OneDrive</b>
          </div>

          <!-- Currently copying file name -->
          <div style="font-size:12px; color:#5a5a5a; margin-bottom:16px;" id="bw11-file">
            Name: project-spec.docx
          </div>

          <!-- Thin accent-blue progress bar on rounded grey track -->
          <div style="
            background: rgba(0,0,0,0.08);
            border-radius: 8px;
            height: 4px;
            overflow:hidden;
          ">
            <div id="bw11-fill" style="
              height:100%; width:0%;
              background: #0078d4;
              border-radius: 8px;
              transition: width 0.05s linear;
            "></div>
          </div>

          <!-- Time-remaining & numerical percent -->
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-top:10px; color:#5a5a5a;">
            <span id="bw11-rem">About 9 seconds remaining</span>
            <span id="bw11-pct">0%</span>
          </div>

          <!-- More details link + buttons (Win11-rounded) -->
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:18px;">
            <a style="font-size:12px; color:#0066cc; text-decoration:none;">⌃ More details</a>
            <div style="display:flex; gap:8px;">
              <button style="
                background: rgba(255,255,255,0.7);
                color:#000;
                border:1px solid rgba(0,0,0,0.12);
                border-radius:4px;
                padding:6px 18px;
                font-family:inherit; font-size:12px;
                cursor:default;
              ">Pause</button>
              <button style="
                background: rgba(255,255,255,0.7);
                color:#000;
                border:1px solid rgba(0,0,0,0.12);
                border-radius:4px;
                padding:6px 18px;
                font-family:inherit; font-size:12px;
                cursor:default;
              ">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw11-fill');
    const pctEl = canvas.querySelector('#bw11-pct');
    const pctBigEl = canvas.querySelector('#bw11-pct-big');
    const fileEl = canvas.querySelector('#bw11-file');
    const remEl = canvas.querySelector('#bw11-rem');
    const files = [
      'Name: project-spec.docx',
      'Name: budget-2021.xlsx',
      'Name: team-photo.heic',
      'Name: demo-recording.mp4',
      'Name: installer.msix',
      'Name: archive.zip',
    ];
    return {
      update(pct) {
        const p = Math.floor(pct);
        fillEl.style.width = pct + '%';
        pctEl.textContent = p + '%';
        pctBigEl.textContent = p + '% complete';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const sec = Math.max(0, Math.ceil((100 - pct) / 10));
        remEl.textContent = pct < 100 ? `About ${sec} seconds remaining` : 'Complete';
      }
    };
  }
});
