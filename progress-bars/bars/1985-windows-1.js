/* 1985 - Microsoft Windows 1.0 (GUI)
 *
 * Authentic Windows 1.01 look:
 *  - Solid teal-grey desktop background (no overlapping windows in 1.0)
 *  - Flat window with single-pixel black border (no 3D bezels - those came in 3.0)
 *  - Title bar is a horizontal hash/grip pattern (not a colored bar)
 *  - System Menu box on the LEFT of the title bar (Mac-influenced)
 *  - System bitmap font emulated via Courier/monospace
 *  - "MS-DOS Executive" was the shell - Setup ran from DOS
 *  - Progress bar: simple solid black fill in a bordered box (no segments)
 */
PBH.registerBar({
  year: 1985, yearLabel: '1985',
  name: 'Microsoft Windows 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // Default Win 1.0 desktop was a solid teal/cyan grey
      background: '#5a8a8a',
      padding: '40px',
      // Win 1.0 used the System bitmap font - emulate with a chunky bitmap-ish stack
      fontFamily: '"VT323", "Px437 IBM VGA", "Courier New", monospace',
      color: '#000',
    });
    canvas.innerHTML = `
      <!-- Win 1.0 window: thick double border, flat, no shadow -->
      <div style="
        background:#cccccc;
        border:1px solid #000;
        outline:1px solid #000;
        outline-offset:2px;
        width:560px;
        margin:90px auto;
        font-size:14px;
        line-height:1.2;
      ">
        <!-- Title bar: hash/grip pattern with system menu box on left -->
        <div style="
          height:18px;
          display:flex;
          align-items:stretch;
          border-bottom:1px solid #000;
          background-image: repeating-linear-gradient(0deg, #000 0 1px, #fff 1px 2px);
        ">
          <!-- System Menu box (control-box) on the LEFT -->
          <div style="
            width:22px;
            background:#fff;
            border-right:1px solid #000;
            display:flex; align-items:center; justify-content:center;
            font-size:14px; font-weight:bold;
          ">─</div>
          <!-- Centered title -->
          <div style="
            flex:1;
            background:#fff;
            text-align:center;
            font-size:13px;
            font-weight:bold;
            line-height:18px;
            border-left:1px solid #000;
            border-right:1px solid #000;
            margin: 0 80px;
          ">MS-DOS Executive</div>
        </div>

        <!-- Menu bar -->
        <div style="
          padding:2px 6px;
          font-size:13px;
          border-bottom:1px solid #000;
          background:#cccccc;
        ">
          <span style="text-decoration:underline;">F</span>ile
          &nbsp;&nbsp;<span style="text-decoration:underline;">V</span>iew
          &nbsp;&nbsp;<span style="text-decoration:underline;">S</span>pecial
        </div>

        <div style="padding:24px 28px 22px;">
          <div style="font-size:14px; margin-bottom:10px;">Installing Microsoft Windows...</div>
          <div style="font-size:13px; margin-bottom:22px;" id="b85-file">A:\\USER.EXE</div>

          <!-- Progress bar: black border, solid black fill, no segments -->
          <div style="
            border:1px solid #000;
            height:18px;
            background:#fff;
            width:78%;
            margin:0 auto;
            position:relative;
            overflow:hidden;
          ">
            <div id="b85-fill" style="
              height:100%;
              background:#000;
              width:0%;
            "></div>
          </div>
          <div style="font-size:13px; margin-top:14px; text-align:center;" id="b85-pct">0% Complete</div>
        </div>

        <!-- Status bar -->
        <div style="
          border-top:1px solid #000;
          padding:2px 6px;
          font-size:12px;
          background:#cccccc;
        ">A:  360 KB free</div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b85-fill');
    const pctEl = canvas.querySelector('#b85-pct');
    const fileEl = canvas.querySelector('#b85-file');
    const files = [
      'A:\\USER.EXE',
      'A:\\KERNEL.EXE',
      'A:\\GDI.EXE',
      'A:\\MSDOS.EXE',
      'A:\\CALC.EXE',
      'A:\\PAINT.EXE',
      'A:\\CARDFILE.EXE',
      'A:\\CLOCK.EXE',
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '% Complete';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
