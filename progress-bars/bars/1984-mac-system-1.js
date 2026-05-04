/* 1984 - Apple Macintosh · System 1 (GUI)
 *
 * Authentic System 1 Finder "Copying" dialog look:
 *  - 512x342 1-bit B&W bitmap display.
 *  - Chicago bitmap font for system text.
 *  - Iconic striped title bar - six horizontal black lines spanning the title bar
 *    with the title text inset in a white "pill" cutout in the centre.
 *  - Close box on the LEFT only (no zoom box yet - that arrived with System 4/7).
 *  - Window: thin (1px) black border, slightly rounded corners, hard offset shadow.
 *  - The 1984 progress bar in Finder copy was a black-bordered rectangle filled
 *    with a 50% black diagonal hatch pattern (the iconic "barber pole" look).
 *  - Desktop: the famous 50% grey 1-bit dither pattern.
 */
PBH.registerBar({
  year: 1984, yearLabel: '1984',
  name: 'Apple Macintosh · System 1',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // Classic 1-bit 50% dither desktop
      background: '#fff',
      backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)',
      backgroundSize: '2px 2px',
      padding: '60px',
      fontFamily: '"Chicago", "Geneva", "Lucida Grande", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#fff;
        border:1px solid #000;
        border-radius:2px;
        width:480px;
        margin:60px auto;
        box-shadow: 2px 2px 0 #000;
        color:#000;
      ">
        <!-- System 1 striped title bar: 6 horizontal black lines, close box left, title pill centred -->
        <div style="
          height:18px;
          background-image: repeating-linear-gradient(
            180deg,
            #fff 0 1px,
            #000 1px 2px
          );
          background-size: 100% 12px;
          background-position: 0 3px;
          background-repeat: no-repeat;
          background-color: #fff;
          border-bottom:1px solid #000;
          display:flex; align-items:center;
          padding: 0 6px;
          position:relative;
        ">
          <!-- Close box (small square with inset border) -->
          <div style="
            width:11px; height:11px;
            background:#fff;
            border:1px solid #000;
            box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #000;
            position:relative; z-index:1;
          "></div>
          <!-- Title in white pill cutout -->
          <div style="
            position:absolute; left:50%; transform:translateX(-50%);
            background:#fff;
            padding:0 16px;
            font-size:12px; font-weight:bold;
            color:#000;
            line-height:18px;
          ">Copying</div>
        </div>

        <div style="padding:22px 24px; color:#000;">
          <div style="font-size:12px; color:#000; margin-bottom: 12px;">
            Copying files to System Folder&hellip;
          </div>
          <div style="font-size:12px; color:#000; margin-bottom: 14px;" id="b84-file">
            MacWrite
          </div>

          <!-- Iconic black-hatched progress bar (50% diagonal hatch) -->
          <div style="
            border:1px solid #000;
            height:14px;
            background:#fff;
            overflow:hidden;
          ">
            <div id="b84-fill" style="
              height:100%; width:0%;
              background-image: repeating-linear-gradient(
                45deg,
                #000 0 2px,
                #fff 2px 4px
              );
              transition: width 0.05s linear;
            "></div>
          </div>

          <div style="font-size:12px; color:#000; margin-top:10px; text-align:center;" id="b84-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b84-fill');
    const pctEl = canvas.querySelector('#b84-pct');
    const fileEl = canvas.querySelector('#b84-file');
    const files = ['MacWrite', 'MacPaint', 'Finder', 'System', 'Calculator', 'Note Pad', 'Alarm Clock'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
