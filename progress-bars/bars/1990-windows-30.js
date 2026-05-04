/* 1990 - Microsoft Windows 3.0 - first true mass-market Windows (GUI)
 *
 * Authentic Windows 3.0 look (vs the chunkier Win95 we end up at):
 *  - 16-colour EGA/VGA palette only.
 *  - Default desktop: "tropical" dithered cyan (#00aaaa hatch on grey).
 *  - SOLID blue (#000080) title bar - NO gradient (gradients arrived with
 *    Win95 Plus! in 1995).
 *  - 1-pixel bevels (white top/left, dark grey bottom/right) - Win 3.0 was
 *    visibly thinner than Win 95's 2-pixel "chunky" bevels.
 *  - System menu (─) box on the LEFT of the title bar; minimise (▼) and
 *    maximise (▲) buttons on the right. NO close button (close was via the
 *    system menu).
 *  - Helv / System bitmap font (later renamed MS Sans Serif).
 *  - Setup progress bar: solid blue (#0000a8) fill in a sunken white well.
 *  - Buttons are flat grey with a single-pixel bevel.
 */
PBH.registerBar({
  year: 1990, yearLabel: '1990',
  name: 'Microsoft Windows 3.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // Iconic Win 3.0 dithered cyan desktop: 1-bit checker of #00aaaa on #008080
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
        margin:80px auto;
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
          <!-- System menu box: 1px bevel -->
          <div style="
            background:#c0c0c0; color:#000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            width:16px; height:14px; line-height:12px; text-align:center;
            font-size:13px; margin-right:2px;
          ">─</div>

          <span style="flex:1; text-align:center;">Windows Setup</span>

          <!-- Minimise / maximise -->
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

        <div style="padding:22px 24px; color:#000;">
          <div style="font-size:12px; color:#000; margin-bottom:8px;">
            Setup is installing files...
          </div>
          <div style="font-size:12px; color:#000; margin-bottom:18px;" id="bw30-file">
            PROGMAN.EXE
          </div>

          <!-- Sunken (inset) progress well: 1px dark top/left, 1px white bottom/right -->
          <div style="
            border-top:1px solid #808080;
            border-left:1px solid #808080;
            border-bottom:1px solid #ffffff;
            border-right:1px solid #ffffff;
            height:18px;
            background:#ffffff;
            padding:0;
          ">
            <div id="bw30-fill" style="
              height:100%;
              width:0%;
              background:#0000a8;
            "></div>
          </div>

          <div style="
            display:flex; justify-content:space-between;
            font-size:12px; color:#000; margin-top:10px;
          ">
            <span>Approximate time remaining: 4 minutes</span>
            <span id="bw30-pct">0%</span>
          </div>

          <!-- Cancel button (flat 1px bevel) -->
          <div style="text-align:right; margin-top:18px;">
            <button style="
              background:#c0c0c0; color:#000;
              border-top:1px solid #fff; border-left:1px solid #fff;
              border-bottom:1px solid #000; border-right:1px solid #000;
              padding:2px 16px;
              font-family:inherit; font-size:12px;
              cursor:default;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw30-fill');
    const pctEl = canvas.querySelector('#bw30-pct');
    const fileEl = canvas.querySelector('#bw30-file');
    const files = [
      'PROGMAN.EXE',
      'KRNL386.EXE',
      'USER.EXE',
      'GDI.EXE',
      'WIN.COM',
      'CLOCK.EXE',
      'PAINTBRSH.EXE',
      'WINHELP.EXE',
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
