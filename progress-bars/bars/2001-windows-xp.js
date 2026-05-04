/* 2001 - Windows XP · Luna (GUI)
 *
 * Authentic XP Luna file-copy dialog:
 *  - Three-stop blue gradient title bar with the iconic red gradient close box.
 *  - Window body fill is the warm Luna #ece9d8 ("buttonface").
 *  - Tahoma 8pt for body, Tahoma bold for filenames (XP file dialogs put the
 *    current filename in bold #000080).
 *  - Folder icon: the iconic Luna manila folder - a dimensional 3D folder with
 *    a darker back-panel + tab visible at the top, white paper sheet peeking
 *    above the front face, lighter front face leaning forward. We approximate
 *    the official 32-px shell32.dll icon in inline SVG.
 *  - Progress bar: green-to-emerald vertical gradient with a moving
 *    horizontal sheen (#5cb028 base, the Luna green well-known from XP).
 */
PBH.registerBar({
  year: 2001, yearLabel: '2001',
  name: 'Microsoft Windows XP · Luna',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #5a8dc4 0%, #2c5d96 50%, #b3d4f0 100%)',
      padding: '40px',
      fontFamily: '"Tahoma", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        width:540px; margin:60px auto;
        background:#ece9d8;
        border-radius:8px 8px 0 0;
        box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        overflow:hidden;
        text-align:left;
        color:#000;
      ">
        <!-- Luna title bar -->
        <div style="
          background: linear-gradient(180deg, #0058e0 0%, #0050cc 50%, #2576e3 100%);
          padding: 5px 6px 5px 10px;
          color: #fff;
          display:flex; align-items:center;
          font-size: 13px; font-weight: bold;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
        ">
          <span style="flex:1;">Copying...</span>
          <div style="
            background: linear-gradient(180deg, #f29494, #c00000);
            width:26px; height:20px;
            border-radius: 3px;
            color:#fff; font-size:11px; font-weight:bold;
            display:flex; align-items:center; justify-content:center;
            border:1px solid #800000;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
          ">✕</div>
        </div>

        <div style="padding: 22px 24px; text-align:left;">
          <div style="display:flex; gap:18px; align-items:flex-start; margin-bottom:16px;">
            <!-- Iconic XP Luna manila folder (open/3D) -->
            <svg width="56" height="50" viewBox="0 0 56 50" style="flex-shrink:0; filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3));">
              <defs>
                <linearGradient id="xp-fld-back" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#fbe082"/>
                  <stop offset="100%" stop-color="#c98a1f"/>
                </linearGradient>
                <linearGradient id="xp-fld-front" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#ffeeaa"/>
                  <stop offset="60%" stop-color="#ffd060"/>
                  <stop offset="100%" stop-color="#d49830"/>
                </linearGradient>
                <linearGradient id="xp-fld-paper" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#ffffff"/>
                  <stop offset="100%" stop-color="#e6e6e6"/>
                </linearGradient>
              </defs>

              <!-- BACK PANEL with tab on the left -->
              <path d="
                M3 12
                L3 44 Q3 47 6 47
                L50 47 Q53 47 53 44
                L53 14 Q53 11 50 11
                L24 11
                L20 7
                L6 7 Q3 7 3 10 Z
              " fill="url(#xp-fld-back)" stroke="#8a5e10" stroke-width="0.9"/>

              <!-- White paper sheets peeking up -->
              <rect x="9" y="14" width="38" height="20" fill="url(#xp-fld-paper)" stroke="#a89968" stroke-width="0.5"/>
              <line x1="13" y1="19" x2="43" y2="19" stroke="#cfc8a8" stroke-width="0.4"/>
              <line x1="13" y1="22" x2="43" y2="22" stroke="#cfc8a8" stroke-width="0.4"/>
              <line x1="13" y1="25" x2="40" y2="25" stroke="#cfc8a8" stroke-width="0.4"/>

              <!-- FRONT PANEL leaning forward -->
              <path d="
                M3 22
                L3 44 Q3 47 6 47
                L50 47 Q53 47 53 44
                L53 22
                L48 19
                L8 19 Z
              " fill="url(#xp-fld-front)" stroke="#8a5e10" stroke-width="0.9"/>
              <!-- inner top rim highlight on front -->
              <line x1="6" y1="22" x2="50" y2="22" stroke="#fff4c0" stroke-width="0.7" opacity="0.85"/>
            </svg>

            <div style="font-size:12px; line-height:1.6; color:#000;">
              <div>Copying:</div>
              <div style="color:#000080; font-weight:bold; margin: 2px 0;" id="b2001x-file">setup.exe</div>
              <div style="color:#444;">From <b>'D:\\install'</b> to <b>'C:\\Program Files'</b></div>
            </div>
          </div>

          <!-- XP green progress well -->
          <div style="
            background:#fff;
            border:1px solid #919b9c;
            height:20px;
            border-radius:2px;
            padding:1px;
            position:relative;
            overflow:hidden;
          ">
            <div id="b2001x-fill" style="
              height:100%; width:0%;
              background: linear-gradient(180deg, #b0e870 0%, #5cb028 50%, #4ca018 100%);
              position:relative; overflow:hidden;
              transition: width 0.05s linear;
            ">
              <div style="position:absolute; inset:0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent); animation: pbh-xp-shine 1.6s linear infinite;"></div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#444;">
            <span id="b2001x-status">Time remaining: about 1 minute</span>
            <span id="b2001x-pct">0%</span>
          </div>

          <!-- Cancel button (Luna style) -->
          <div style="text-align:right; margin-top:18px;">
            <button style="
              background: linear-gradient(180deg, #f6f4ec 0%, #e0dcc8 100%);
              color:#000;
              border:1px solid #919b9c;
              border-radius:3px;
              padding:4px 18px;
              font-family:inherit; font-size:11px;
              cursor:default;
              box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2001x-fill');
    const pctEl = canvas.querySelector('#b2001x-pct');
    const fileEl = canvas.querySelector('#b2001x-file');
    const statusEl = canvas.querySelector('#b2001x-status');
    const files = ['setup.exe', 'mfc42.dll', 'kernel32.dll', 'msvcrt.dll', 'shell32.dll', 'ntoskrnl.exe', 'explorer.exe'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const remaining = Math.max(1, Math.ceil((100 - pct) / 10));
        statusEl.textContent = pct < 100 ? `Time remaining: about ${remaining} seconds` : 'Complete';
      }
    };
  }
});
