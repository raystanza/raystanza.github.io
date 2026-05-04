/* 1987 - Microsoft Windows 2.0 - overlapping windows (GUI)
 *
 * Authentic Windows 2.0 / 2.03 look:
 *  - Overlapping windows now possible (key 2.0 feature)
 *  - Title bar became a SOLID colored band (typically blue) with white text
 *  - System Menu box on LEFT, minimize/maximize on RIGHT (introduced in 2.0)
 *  - Still flat - no 3D bezels (those came in 3.0)
 *  - System bitmap font
 *  - Icons could now appear at the bottom of the screen for minimized windows
 *  - Default desktop was a solid color (often dark teal/cyan)
 */
PBH.registerBar({
  year: 1987, yearLabel: '1987',
  name: 'Microsoft Windows 2.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#008787',
      padding: '40px',
      fontFamily: '"VT323", "Px437 IBM VGA", "Courier New", monospace',
      color: '#000',
    });
    canvas.innerHTML = `
      <!-- A second, partially-covered window behind to show "overlapping windows" was new in 2.0 -->
      <div style="
        position:relative;
        width:580px;
        margin:60px auto 0;
      ">
        <!-- Background window: MS-DOS Executive partially obscured -->
        <div style="
          position:absolute;
          top:-30px; left:-30px;
          width:520px;
          background:#cccccc;
          border:1px solid #000;
          font-size:13px;
        ">
          <div style="
            background:#000080; color:#fff;
            padding:1px 4px; height:16px; line-height:16px;
            display:flex; align-items:center;
          ">
            <span style="
              background:#cccccc; color:#000;
              border:1px solid #fff;
              width:14px; height:12px; line-height:10px; text-align:center;
              font-size:11px; margin-right:4px;
            ">─</span>
            <span style="flex:1; text-align:center; font-weight:bold;">MS-DOS Executive</span>
            <span style="
              background:#cccccc; color:#000;
              border:1px solid #fff;
              width:14px; height:12px; line-height:10px; text-align:center;
              font-size:10px;
            ">▼</span>
          </div>
          <div style="padding:6px 8px; font-size:13px; line-height:1.3;">
            <div>SETUP&nbsp;&nbsp;&nbsp;EXE&nbsp;&nbsp;47616</div>
            <div>WIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;6432</div>
            <div>USER&nbsp;&nbsp;&nbsp;EXE&nbsp;&nbsp;31402</div>
            <div>...</div>
          </div>
        </div>

        <!-- Foreground Setup window -->
        <div style="
          position:relative;
          background:#cccccc;
          border:1px solid #000;
          width:560px;
          margin-left:20px;
          font-size:13px;
        ">
          <!-- Title bar: solid blue with white text, controls on either side -->
          <div style="
            background:#000080;
            color:#fff;
            padding:0 2px;
            height:18px;
            display:flex; align-items:center;
            font-size:13px; font-weight:bold;
          ">
            <span style="
              background:#cccccc; color:#000;
              border:1px solid #fff;
              width:16px; height:14px; line-height:12px; text-align:center;
              font-size:12px; margin-right:4px;
            ">─</span>
            <span style="flex:1; text-align:center;">Setup</span>
            <span style="
              background:#cccccc; color:#000;
              border:1px solid #fff;
              width:16px; height:14px; line-height:12px; text-align:center;
              font-size:11px; margin-right:2px;
            ">▼</span>
            <span style="
              background:#cccccc; color:#000;
              border:1px solid #fff;
              width:16px; height:14px; line-height:12px; text-align:center;
              font-size:11px;
            ">▲</span>
          </div>

          <div style="padding:24px 28px;">
            <div style="font-size:14px; margin-bottom:8px;">Setup is installing Windows 2.0 ...</div>
            <div style="font-size:13px; margin-bottom:22px;" id="bw2-file">A:\\CALC.EXE</div>

            <!-- Flat progress bar - single black fill, simple bordered box -->
            <div style="
              border:1px solid #000;
              height:20px;
              width:80%;
              margin:0 auto;
              background:#fff;
              position:relative;
              overflow:hidden;
            ">
              <div id="bw2-fill" style="
                height:100%;
                width:0%;
                background:#000080;
              "></div>
            </div>

            <div style="
              display:flex; justify-content:space-between;
              font-size:13px; margin-top:14px;
              padding: 0 10%;
            ">
              <span>Disk 1 of 5</span>
              <span id="bw2-pct">0%</span>
            </div>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw2-fill');
    const pctEl = canvas.querySelector('#bw2-pct');
    const fileEl = canvas.querySelector('#bw2-file');
    const files = [
      'A:\\CALC.EXE',
      'A:\\CALENDAR.EXE',
      'A:\\CARDFILE.EXE',
      'A:\\CLIPBRD.EXE',
      'A:\\CLOCK.EXE',
      'A:\\NOTEPAD.EXE',
      'A:\\PIFEDIT.EXE',
      'A:\\WRITE.EXE',
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
