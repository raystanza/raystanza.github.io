/* 1995 - Microsoft Windows 95 (GUI)
 *
 * Authentic Win95 file-copy dialog:
 *  - Two-tone blue gradient title bar (#000080 → #1084d0). The active-window
 *    gradient was the new defining visual of 95.
 *  - Chunky 4-colour bevels: outer light + outer dark, inner white + inner grey
 *    - Win95's signature "stamped" 3D look (vs 3.x's 2-colour 1px bevel).
 *  - MS Sans Serif 8pt for system text (still bitmap; the same Helv-derived
 *    face used since 3.x but rendered at the new 96 DPI metrics).
 *  - Iconic 32x32 pixel-art manila folder: yellow/orange body, darker tab on
 *    top, single-pixel black outline, white inner highlight, dark-yellow
 *    bottom shadow.
 *  - Segmented blue progress bar (chunky #000080 blocks separated by white).
 *  - X close button in the top-right (introduced with 95).
 */
PBH.registerBar({
  year: 1995, yearLabel: '1995',
  name: 'Microsoft Windows 95',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#008080',
      padding: '40px',
      fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#c0c0c0;
        border-top:2px solid #ffffff;
        border-left:2px solid #ffffff;
        border-bottom:2px solid #000000;
        border-right:2px solid #000000;
        box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
        width:560px;
        margin:60px auto;
        font-size:12px;
        color:#000;
        text-align:left;
      ">
        <!-- Win95 gradient title bar -->
        <div style="
          background: linear-gradient(90deg, #000080 0%, #1084d0 100%);
          color:#ffffff;
          padding:2px 2px 2px 4px;
          height:20px;
          display:flex; align-items:center;
          font-size:12px; font-weight:bold;
        ">
          <!-- Tiny window icon (a folder) -->
          <div style="width:16px; height:16px; margin-right:4px; flex-shrink:0;">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <rect x="0" y="4" width="7" height="2" fill="#dfa000" stroke="#000" stroke-width="1"/>
              <rect x="0" y="5" width="15" height="10" fill="#ffd966" stroke="#000" stroke-width="1"/>
            </svg>
          </div>
          <span style="flex:1;">Copying...</span>

          <!-- Min, Max, Close (95-style 4-color bevel buttons) -->
          <button style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
            width:16px; height:14px; padding:0; margin-right:1px;
            font-family:inherit; font-size:9px; line-height:1; cursor:default;
          ">_</button>
          <button style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
            width:16px; height:14px; padding:0; margin-right:1px;
            font-family:inherit; font-size:9px; line-height:1; cursor:default;
          ">▢</button>
          <button style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
            width:16px; height:14px; padding:0;
            font-family:inherit; font-size:11px; line-height:1; cursor:default;
            font-weight:bold;
          ">x</button>
        </div>

        <div style="padding:20px 22px; color:#000;">
          <div style="display:flex; gap:18px; align-items:flex-start; margin-bottom:18px;">
            <!-- Iconic Win95 manila folder, 32x32 pixel-art -->
            <svg width="48" height="40" viewBox="0 0 32 26" style="flex-shrink:0; image-rendering: pixelated;">
              <!-- folder back tab -->
              <rect x="1" y="3" width="11" height="3" fill="#dfa000" stroke="#000" stroke-width="1"/>
              <!-- folder body fill -->
              <rect x="1" y="5" width="29" height="19" fill="#ffd966" stroke="#000" stroke-width="1"/>
              <!-- inner top/left highlight (white) -->
              <line x1="2" y1="6" x2="29" y2="6" stroke="#ffffff" stroke-width="1"/>
              <line x1="2" y1="6" x2="2" y2="23" stroke="#ffffff" stroke-width="1"/>
              <!-- inner bottom/right shadow (darker gold) -->
              <line x1="2" y1="23" x2="29" y2="23" stroke="#a07000" stroke-width="1"/>
              <line x1="29" y1="6" x2="29" y2="23" stroke="#a07000" stroke-width="1"/>
            </svg>
            <div style="font-size:12px; line-height:1.6; color:#000;">
              <div>Copying:</div>
              <div style="color:#000; font-weight:bold;" id="b95-file">SYSTEM.DAT</div>
              <div>From: <b>'A:\\WIN95'</b></div>
              <div>To: <b>'C:\\WINDOWS\\SYSTEM'</b></div>
            </div>
          </div>

          <!-- Sunken segmented progress well -->
          <div style="
            border-top:1px solid #808080;
            border-left:1px solid #808080;
            border-bottom:1px solid #ffffff;
            border-right:1px solid #ffffff;
            height:22px;
            background:#ffffff;
            padding:2px;
            display:flex; gap:2px;
            overflow:hidden;
          " id="b95-track"></div>

          <div style="display:flex; justify-content:space-between; font-size:12px; color:#000; margin-top:10px;">
            <span id="b95-status">Calculating...</span>
            <span id="b95-pct">0%</span>
          </div>

          <!-- Cancel button -->
          <div style="text-align:center; margin-top:16px;">
            <button style="
              background:#c0c0c0; color:#000;
              border-top:2px solid #ffffff;
              border-left:2px solid #ffffff;
              border-bottom:2px solid #000000;
              border-right:2px solid #000000;
              box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
              padding:4px 24px;
              font-family:inherit; font-size:12px;
              cursor:default;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const trackEl = canvas.querySelector('#b95-track');
    const pctEl = canvas.querySelector('#b95-pct');
    const fileEl = canvas.querySelector('#b95-file');
    const statusEl = canvas.querySelector('#b95-status');
    const totalBlocks = 26;
    for (let i = 0; i < totalBlocks; i++) {
      const block = document.createElement('div');
      Object.assign(block.style, { flex: '1', height: '100%', background: '#ffffff' });
      trackEl.appendChild(block);
    }
    const files = ['SYSTEM.DAT', 'USER.DAT', 'WIN.COM', 'EXPLORER.EXE', 'SHELL32.DLL', 'KERNEL32.DLL', 'SOL.EXE', 'CLOUDS.BMP'];
    return {
      update(pct) {
        const filled = Math.floor((pct / 100) * totalBlocks);
        const blocks = trackEl.children;
        for (let i = 0; i < totalBlocks; i++) {
          blocks[i].style.background = i < filled ? '#000080' : '#ffffff';
        }
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const remaining = Math.max(0, Math.ceil((100 - pct) / 10));
        statusEl.textContent = pct < 100 ? `${remaining} seconds remaining` : 'Complete';
      }
    };
  }
});
