/* 1990 - Amiga Workbench 2.0 / Kickstart 37 - BOOPSI framework (GUI)
 *
 * Workbench 2.0 was a complete visual overhaul of the original orange/blue
 * 1.x palette. AmigaOS 2.0 introduced:
 *   - The "ECS" 4-colour default palette: grey (#a0a0a0), black (#000),
 *     white (#fff), blue (#6688bb).
 *   - 3D-bezelled chrome on every widget (raised buttons, sunken inputs).
 *   - A solid-blue title bar with white text and proper close / depth /
 *     zoom gadgets - gone are the WB1 horizontal stripes.
 *   - BOOPSI ("Basic Object-Oriented Programming System for Intuition"):
 *     the C-OOP framework that shipped class libraries for buttons,
 *     gauges, scrollers etc. The stock BOOPSI gauge.gadget is a sunken
 *     well filled with a solid orange (#dd7733) bar.
 *   - Topaz 8 bitmap font for system text.
 *
 * This is the iconic Format Disk requester, which was the most commonly-
 * seen Workbench 2.0 progress UI.
 */
PBH.registerBar({
  year: 1990, yearLabel: '1990',
  name: 'Amiga Workbench 2.0 · BOOPSI',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      // WB2 default desktop: solid grey #a0a0a0
      background: '#a0a0a0',
      padding: '40px',
      fontFamily: '"Topaz", "Courier New", monospace',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        width:560px; margin:60px auto;
        background:#a0a0a0;
        border-top: 2px solid #ffffff;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #000000;
        border-right: 2px solid #000000;
        text-align:left;
        color:#000;
      ">
        <!-- WB2 title bar: solid blue with 3D bezel, white text -->
        <div style="
          background:#6688bb;
          color:#ffffff;
          height:18px;
          display:flex; align-items:stretch;
          font-size:12px;
          border-bottom:1px solid #000;
        ">
          <!-- Close gadget on the left (Amiga convention) -->
          <div style="
            width:22px;
            background:#a0a0a0;
            border-right:1px solid #000;
            border-top:1px solid #fff;
            border-left:1px solid #fff;
            border-bottom:1px solid #000;
            display:flex; align-items:center; justify-content:center;
            color:#000; font-size:10px;
          ">
            <div style="
              width:8px; height:8px;
              border:1px solid #000;
              background:#a0a0a0;
              box-shadow: inset 1px 1px 0 #fff;
            "></div>
          </div>

          <!-- Drag bar / title -->
          <div style="
            flex:1; padding: 0 8px;
            display:flex; align-items:center;
            font-weight:bold;
          ">Workbench &middot; Format Disk</div>

          <!-- Zoom gadget -->
          <div style="
            width:22px;
            background:#a0a0a0;
            border-left:1px solid #000;
            border-top:1px solid #fff;
            border-bottom:1px solid #000;
            border-right:1px solid #000;
            display:flex; align-items:center; justify-content:center;
          ">
            <div style="
              width:10px; height:8px;
              border:1px solid #000;
              background:#a0a0a0;
              position:relative;
            ">
              <div style="
                position:absolute; left:-1px; top:-1px;
                width:6px; height:5px;
                border:1px solid #000;
                background:#fff;
              "></div>
            </div>
          </div>

          <!-- Depth gadget on far right -->
          <div style="
            width:22px;
            background:#a0a0a0;
            border-left:1px solid #000;
            border-top:1px solid #fff;
            border-bottom:1px solid #000;
            border-right:1px solid #000;
            display:flex; align-items:center; justify-content:center;
          ">
            <div style="
              width:11px; height:9px;
              background:#fff;
              border:1px solid #000;
              position:relative;
            ">
              <div style="
                position:absolute; left:3px; top:3px;
                width:7px; height:5px;
                background:#a0a0a0;
                border:1px solid #000;
              "></div>
            </div>
          </div>
        </div>

        <!-- Window content -->
        <div style="padding: 22px 24px; color:#000; font-size:13px;">
          <div style="margin-bottom:8px;">Formatting volume <b>Empty</b> in DF0:</div>
          <div style="margin-bottom:18px; font-size:12px;" id="bawb2-step">
            Initialising track 0 / 79
          </div>

          <!-- BOOPSI gauge: sunken bezel with orange fill -->
          <div style="
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            border-bottom: 2px solid #ffffff;
            border-right: 2px solid #ffffff;
            background:#a0a0a0;
            height:18px;
            padding:0;
          ">
            <div id="bawb2-fill" style="
              height:100%; width:0%;
              background:#dd7733;
              transition: width 0.05s linear;
            "></div>
          </div>

          <div style="display:flex; justify-content:space-between; margin-top:10px; font-size:12px;">
            <span>Drive: DF0:</span>
            <span id="bawb2-pct">0%</span>
          </div>

          <!-- Cancel button (raised BOOPSI button) -->
          <div style="text-align:center; margin-top:18px;">
            <button style="
              background:#a0a0a0; color:#000;
              border-top: 2px solid #ffffff;
              border-left: 2px solid #ffffff;
              border-bottom: 2px solid #000000;
              border-right: 2px solid #000000;
              padding: 3px 22px;
              font-family: inherit; font-size: 12px;
              cursor: default;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bawb2-fill');
    const pctEl = canvas.querySelector('#bawb2-pct');
    const stepEl = canvas.querySelector('#bawb2-step');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const track = Math.min(79, Math.floor((pct / 100) * 80));
        stepEl.textContent = pct < 50
          ? `Initialising track ${track} / 79`
          : (pct < 100 ? `Verifying track ${track} / 79` : 'Format complete');
      }
    };
  }
});
