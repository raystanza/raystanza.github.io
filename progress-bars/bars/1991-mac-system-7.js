/* 1991 - Mac OS System 7 - first colour-capable Mac UI (GUI)
 *
 * Authentic System 7 Finder "Copy" dialog look:
 *  - Still 1-bit chrome (System 7 itself was B&W; colour was for icons / desktop).
 *  - Chicago for system, Geneva for body.
 *  - Title bar: same six-horizontal-line stripe pattern as System 1, but System 7
 *    adds a ZOOM BOX on the right of the title bar (in addition to the left close
 *    box) - a small square divided by an inner square in the top-left corner.
 *  - Window has a 1px black border and a hard offset shadow. System 7 corners
 *    are slightly more squared than System 1.
 *  - The Finder copy dialog by System 7 used a solid black filled progress bar
 *    (not the diagonal hatch of 1984) inside a 1px black-bordered groove.
 *  - System 7 added the cool tropical-blue/grey desktop pattern by default; we
 *    use the classic light-grey dither.
 */
PBH.registerBar({
  year: 1991, yearLabel: '1991',
  name: 'Mac OS System 7',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // System 7 default desktop: light-grey 1-bit dither
      background: '#bfbfbf',
      backgroundImage: `
        repeating-conic-gradient(#888 0% 25%, #fff 0% 50%)
      `,
      backgroundSize: '2px 2px',
      padding: '50px',
      fontFamily: '"Chicago", "Geneva", "Lucida Grande", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#fff;
        border:1px solid #000;
        border-radius:2px;
        width:520px;
        margin:50px auto;
        box-shadow: 2px 2px 0 #000;
        color:#000;
      ">
        <!-- System 7 striped title bar with close box (left) AND zoom box (right) -->
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
          <!-- Close box -->
          <div style="
            width:11px; height:11px;
            background:#fff;
            border:1px solid #000;
            box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #000;
            position:relative; z-index:1;
          "></div>

          <!-- Title pill -->
          <div style="
            position:absolute; left:50%; transform:translateX(-50%);
            background:#fff;
            padding:0 16px;
            font-size:12px; font-weight:bold;
            color:#000;
            line-height:18px;
          ">Copy</div>

          <!-- Zoom box on the right (System 7 addition: small square with inner square in upper-left) -->
          <div style="
            margin-left:auto;
            width:11px; height:11px;
            background:#fff;
            border:1px solid #000;
            position:relative; z-index:1;
          ">
            <div style="
              position:absolute; left:1px; top:1px;
              width:5px; height:5px;
              border:1px solid #000;
              background:#fff;
            "></div>
          </div>
        </div>

        <div style="padding: 22px 26px; color:#000;">
          <div style="font-size:12px; color:#000; margin-bottom:6px;">
            Items remaining to be copied: <b id="bm7-rem">17</b>
          </div>
          <div style="font-size:12px; color:#000; margin-bottom: 14px;" id="bm7-file">
            Copying: SimpleText
          </div>

          <!-- Solid-black filled thermometer (System 7 style) -->
          <div style="border:1px solid #000; height:14px; background:#fff;">
            <div id="bm7-fill" style="
              height:100%; width:0%;
              background:#000;
              transition: width 0.05s linear;
            "></div>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:12px; color:#000; margin-top:10px;">
            <span>Reading from &ldquo;Hard Disk&rdquo;&hellip;</span>
            <span id="bm7-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bm7-fill');
    const pctEl = canvas.querySelector('#bm7-pct');
    const fileEl = canvas.querySelector('#bm7-file');
    const remEl = canvas.querySelector('#bm7-rem');
    const files = ['SimpleText', 'TeachText', 'Calculator', 'Note Pad', 'Scrapbook', 'AppleTalk Switch', 'Easy Access'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = 'Copying: ' + files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        remEl.textContent = String(Math.max(0, 17 - Math.floor((pct / 100) * 17)));
      }
    };
  }
});
