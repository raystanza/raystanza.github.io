/* 1983 - Apple Lisa Office System 1 (GUI)
 *
 * Authentic Lisa Office System 1 look:
 *  - 720x364 monochrome bitmap display (1-bit B&W only, no greys)
 *  - Custom Lisa bitmap font (similar idea to Chicago but proportional, slightly
 *    taller). We approximate with Chicago/Geneva fallbacks.
 *  - Windows had a DOUBLE black outline (outer hairline + inner black border)
 *    with a hard offset drop shadow - a very distinct look from the Mac.
 *  - Title bar carried the title in plain bold text on a solid white field with
 *    a horizontal rule below it (NOT the striped Mac title bar - that came
 *    later on the Macintosh).
 *  - Close box on the left was a small square with a tiny black square inside.
 *  - Lisa progress UI was a plain thermometer: a thin black-bordered rectangle
 *    that filled solid black left-to-right.
 *  - Desktop background was dithered grey (1-bit dither pattern).
 */
PBH.registerBar({
  year: 1983, yearLabel: '1983',
  name: 'Apple Lisa · Office System 1',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // 1-bit dithered grey desktop (50% checker)
      background: '#ffffff',
      backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)',
      backgroundSize: '4px 4px',
      padding: '40px',
      fontFamily: '"Chicago", "Geneva", "Lucida Grande", sans-serif',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        background:#fff;
        border:1px solid #000;
        outline:1px solid #000;
        outline-offset:2px;
        width:520px;
        margin:70px auto;
        box-shadow: 6px 6px 0 #000;
        color:#000;
      ">
        <!-- Plain Lisa title bar: solid white, title in bold, hairline rule below -->
        <div style="
          height:22px; padding:0 8px;
          display:flex; align-items:center;
          border-bottom:1px solid #000;
          font-size:13px; font-weight:bold;
          color:#000;
        ">
          <!-- Lisa close box: small square with inner square -->
          <div style="
            width:11px; height:11px;
            border:1px solid #000;
            position:relative;
            margin-right:10px;
          ">
            <div style="position:absolute; inset:2px; background:#000;"></div>
          </div>
          <span style="flex:1; text-align:center; letter-spacing:0.5px;">Lisa Workshop</span>
          <div style="width:11px;"></div>
        </div>

        <div style="padding: 28px 26px; color:#000;">
          <div style="font-size:13px; color:#000; margin-bottom:6px;">
            Saving &ldquo;Annual Report.lsd&rdquo; to ProFile&hellip;
          </div>
          <div style="font-size:12px; color:#000; margin-bottom:18px;" id="blisa-step">
            Writing index blocks
          </div>

          <!-- Lisa thermometer: thin black-bordered bar, solid black fill -->
          <div style="border:1px solid #000; height:14px; background:#fff;">
            <div id="blisa-fill" style="
              height:100%; width:0%;
              background:#000;
              transition: width 0.05s linear;
            "></div>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:12px; color:#000; margin-top:10px;">
            <span>ProFile 5MB</span>
            <span id="blisa-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#blisa-fill');
    const pctEl = canvas.querySelector('#blisa-pct');
    const stepEl = canvas.querySelector('#blisa-step');
    const steps = [
      'Writing index blocks',
      'Allocating extents',
      'Flushing buffer',
      'Updating directory',
      'Verifying checksum',
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        stepEl.textContent = steps[Math.min(steps.length - 1, Math.floor((pct / 100) * steps.length))];
      }
    };
  }
});
