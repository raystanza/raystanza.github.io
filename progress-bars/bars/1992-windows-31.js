/* 1992 - Microsoft Windows 3.1 (GUI)
 *
 * Authentic Windows 3.1 look - File Manager copy dialog:
 *  - SOLID blue (#000080) title bar - NO gradient (gradients arrived with
 *    Win95 Plus! in 1995).
 *  - 1-pixel bevels (white top/left, dark bottom/right) - Win 3.x was thinner
 *    than the chunky 2-pixel Win95 chrome.
 *  - MS Sans Serif (TrueType arrived in 3.1 but the system font remained
 *    bitmap MS Sans Serif).
 *  - File Manager copy dialog showed a yellow folder + filename, then a
 *    segmented progress bar - chunky blue (#000080) blocks separated by
 *    white gaps, on a sunken white well.
 *  - System menu (─) on left, minimise (▼) / maximise (▲) on right.
 *  - Default desktop background was a hatched cyan #008080.
 */
PBH.registerBar({
  year: 1992, yearLabel: '1992',
  name: 'Microsoft Windows 3.1',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      backgroundColor: '#008080',
      backgroundImage: `
        linear-gradient(45deg, #00aaaa 25%, transparent 25%, transparent 75%, #00aaaa 75%),
        linear-gradient(45deg, #00aaaa 25%, transparent 25%, transparent 75%, #00aaaa 75%)
      `,
      backgroundPosition: '0 0, 2px 2px',
      backgroundSize: '4px 4px',
      padding: '40px',
      fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#c0c0c0;
        border-top:1px solid #ffffff;
        border-left:1px solid #ffffff;
        border-bottom:1px solid #000000;
        border-right:1px solid #000000;
        width:560px;
        margin:70px auto;
        font-size:12px;
        color:#000;
      ">
        <!-- Title bar: solid blue, white bold text -->
        <div style="
          background:#000080;
          color:#ffffff;
          padding:1px 2px;
          height:18px;
          display:flex; align-items:center;
          font-size:12px; font-weight:bold;
        ">
          <div style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            width:16px; height:14px; line-height:12px; text-align:center;
            font-size:13px; margin-right:2px;
          ">─</div>

          <span style="flex:1; text-align:center;">File Manager - Copying</span>

          <div style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            width:16px; height:14px; line-height:12px; text-align:center;
            font-size:9px;
          ">▼</div>
          <div style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            width:16px; height:14px; line-height:12px; text-align:center;
            font-size:9px; margin-left:1px;
          ">▲</div>
        </div>

        <div style="padding:22px 24px; background:#c0c0c0; color:#000;">
          <!-- File icon + label row -->
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:18px;">
            <!-- Win 3.1 yellow File Manager folder (16x16 pixel-art look, scaled) -->
            <svg width="36" height="28" viewBox="0 0 32 26" style="flex-shrink:0; image-rendering: pixelated;">
              <!-- folder back tab -->
              <rect x="1" y="3" width="11" height="3" fill="#ffff00" stroke="#000" stroke-width="1"/>
              <!-- folder body -->
              <rect x="1" y="5" width="29" height="19" fill="#ffff00" stroke="#000" stroke-width="1"/>
              <!-- top highlight (white) -->
              <line x1="2" y1="6" x2="29" y2="6" stroke="#ffffff" stroke-width="1"/>
              <line x1="2" y1="6" x2="2" y2="23" stroke="#ffffff" stroke-width="1"/>
              <!-- bottom shadow -->
              <line x1="2" y1="23" x2="29" y2="23" stroke="#808000" stroke-width="1"/>
              <line x1="29" y1="6" x2="29" y2="23" stroke="#808000" stroke-width="1"/>
            </svg>
            <div style="font-size:12px; line-height:1.55; color:#000;">
              <div>Source: <b>A:\\WINDOWS\\</b></div>
              <div>Destination: <b>C:\\WINDOWS\\</b></div>
              <div style="margin-top:2px;" id="b92-file">VGA.DRV</div>
            </div>
          </div>

          <!-- Sunken progress well containing chunky segmented blocks -->
          <div style="
            border-top:1px solid #808080;
            border-left:1px solid #808080;
            border-bottom:1px solid #ffffff;
            border-right:1px solid #ffffff;
            height:20px;
            background:#ffffff;
            padding:2px;
            display:flex;
            gap:2px;
            overflow:hidden;
          " id="b92-track"></div>

          <div style="text-align:right; font-size:12px; color:#000; margin-top:8px;" id="b92-pct">0%</div>

          <!-- Cancel button -->
          <div style="text-align:center; margin-top:14px;">
            <button style="
              background:#c0c0c0; color:#000;
              border-top:1px solid #fff; border-left:1px solid #fff;
              border-bottom:1px solid #000; border-right:1px solid #000;
              padding:3px 22px;
              font-family:inherit; font-size:12px;
              cursor:default;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const trackEl = canvas.querySelector('#b92-track');
    const pctEl = canvas.querySelector('#b92-pct');
    const fileEl = canvas.querySelector('#b92-file');
    const totalBlocks = 24;
    for (let i = 0; i < totalBlocks; i++) {
      const block = document.createElement('div');
      Object.assign(block.style, { flex: '1', height: '100%', background: '#ffffff' });
      trackEl.appendChild(block);
    }
    const files = [
      'VGA.DRV',
      'KEYBOARD.DRV',
      'MOUSE.DRV',
      'SYSTEM.INI',
      'PROGMAN.EXE',
      'NOTEPAD.EXE',
      'SOL.EXE',
      'MPLAYER.EXE',
    ];
    return {
      update(pct) {
        const filled = Math.floor((pct / 100) * totalBlocks);
        const blocks = trackEl.children;
        for (let i = 0; i < totalBlocks; i++) {
          blocks[i].style.background = i < filled ? '#000080' : '#ffffff';
        }
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
