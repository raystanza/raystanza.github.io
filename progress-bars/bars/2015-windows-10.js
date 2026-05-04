/* 2015 - Windows 10 - File Explorer copy dialog (GUI)
 *
 * Authentic Windows 10 file-copy dialog (the "compact" view, before the user
 * clicks "More details" to expand the speed graph):
 *  - Flat WHITE window chrome (no Mica/blur - that arrived with Win11).
 *  - Thin 1px outer border, square corners.
 *  - Title bar: white with the standard min/max/close glyphs (-, □, x). The
 *    close button only turns red on hover - at rest it is a simple grey x.
 *  - Big "X% complete" headline in Segoe UI light/regular.
 *  - "Copying from <Source> to <Destination>" line in body grey.
 *  - Thin (4px) accent-blue (#0078d4) progress bar on a light grey (#e6e6e6)
 *    track, with the active fill animated by an indeterminate "march" stripe
 *    in some states; for determinate copies it's just the solid fill.
 *  - "More details" toggle link and a "Pause / Cancel" pair below.
 *  - The default Win10 wallpaper was the blue "hero" geometric design.
 */
PBH.registerBar({
  year: 2015, yearLabel: '2015',
  name: 'Microsoft Windows 10 · Fluent',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'radial-gradient(ellipse at 30% 35%, #2a6cb6 0%, #0a2a52 60%, #061830 100%)',
      padding: '40px',
      fontFamily: '"Segoe UI", "Tahoma", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        width:560px; margin:50px auto;
        background:#ffffff;
        border:1px solid #b8b8b8;
        box-shadow: 0 16px 40px rgba(0,0,0,0.45);
        color:#000;
        text-align:left;
      ">
        <!-- Flat white title bar with system icon + title + window controls -->
        <div style="
          display:flex; align-items:center;
          height:32px; padding-left:10px;
          font-size:12px; color:#000;
          border-bottom:1px solid #efefef;
        ">
          <!-- Tiny copy icon (two pages) -->
          <svg width="14" height="14" viewBox="0 0 14 14" style="margin-right:8px; flex-shrink:0;">
            <rect x="1" y="3" width="8" height="9" fill="#fff" stroke="#0078d4" stroke-width="1"/>
            <rect x="4" y="1" width="8" height="9" fill="#fff" stroke="#0078d4" stroke-width="1"/>
          </svg>
          <span style="flex:1;">5,612 Items - 12.4 GB</span>

          <!-- Win10 window controls: flat 46x32 hit-targets, monochrome glyphs -->
          <div style="display:flex; height:32px;">
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:10px; color:#000;">-</div>
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:10px; color:#000;">▢</div>
            <div style="width:46px; display:flex; align-items:center; justify-content:center; font-size:11px; color:#000;">✕</div>
          </div>
        </div>

        <div style="padding: 16px 22px 20px;">
          <!-- Big percent-complete headline -->
          <div style="font-size:22px; font-weight:300; color:#000; margin-bottom:6px;" id="bw10-pct-big">
            0% complete
          </div>

          <!-- Source → Destination -->
          <div style="font-size:12px; color:#000; margin-bottom:2px;">
            Copying <b>5,612 items</b> from <b>Documents</b> (C:) to <b>OneDrive</b>
          </div>

          <!-- Currently copying file name -->
          <div style="font-size:12px; color:#5a5a5a; margin-bottom:14px;" id="bw10-file">
            Name: project-spec.docx
          </div>

          <!-- Thin accent-blue progress bar on flat grey track -->
          <div style="
            background: #e6e6e6;
            height: 4px;
            overflow: hidden;
          ">
            <div id="bw10-fill" style="
              height:100%; width:0%;
              background: #0078d4;
              transition: width 0.05s linear;
            "></div>
          </div>

          <!-- Time-remaining & speed line -->
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-top:10px; color:#5a5a5a;">
            <span id="bw10-rem">About 9 seconds remaining</span>
            <span id="bw10-pct">0%</span>
          </div>

          <!-- More details link + buttons -->
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:18px;">
            <a style="font-size:12px; color:#0066cc; text-decoration:none;">⌃ More details</a>
            <div style="display:flex; gap:8px;">
              <button style="
                background:#cccccc; color:#000;
                border:1px solid #adadad;
                padding:5px 22px;
                font-family:inherit; font-size:12px;
                cursor:default;
              ">Pause</button>
              <button style="
                background:#cccccc; color:#000;
                border:1px solid #adadad;
                padding:5px 22px;
                font-family:inherit; font-size:12px;
                cursor:default;
              ">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw10-fill');
    const pctEl = canvas.querySelector('#bw10-pct');
    const pctBigEl = canvas.querySelector('#bw10-pct-big');
    const fileEl = canvas.querySelector('#bw10-file');
    const remEl = canvas.querySelector('#bw10-rem');
    const files = [
      'Name: project-spec.docx',
      'Name: budget-2015.xlsx',
      'Name: team-photo.png',
      'Name: demo.mp4',
      'Name: install.exe',
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
