/* 1995 - Amiga ClassAct (later renamed ReAction in OS 3.5) - the "official"
 *        BOOPSI-based widget toolkit, positioned as the cleaner alternative to
 *        MUI (GUI)
 *
 * ClassAct/ReAction's visual signature:
 *   - Clean, restrained 3D bezels - SINGLE-deep frames where MUI nested
 *     them three deep. The look is much closer to stock Workbench than to
 *     MUI's framed-on-framed-on-framed aesthetic.
 *   - Layout.gadget did horizontal/vertical/grid arrangement implicitly,
 *     so ClassAct apps tend to feel airier and grid-aligned.
 *   - Gauge.gadget renders a smooth solid-colour fill (no MUI-style stripes)
 *     with optional gradient. The "%" label sits to the right of the bar
 *     rather than overlaid on it.
 *   - Standard Workbench-3.x palette (#aaaaaa surface, #6688bb title bar
 *     accent), Topaz 8 system font.
 *   - Buttons have rounded labels and a single 1-px raised bezel - much
 *     thinner than MUI's chunky 2-px bezels.
 *
 * This is a typical ClassAct file-copy requester (the kind shipped with
 * AmigaOS 3.5+ tools).
 */
PBH.registerBar({
  year: 1995, yearLabel: '1995',
  name: 'Amiga ReAction · ClassAct UI',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#aaaaaa',
      padding: '40px',
      fontFamily: '"Topaz", "Courier New", monospace',
      color: '#000',
    });
    canvas.innerHTML = `
      <div style="
        width:560px; margin:60px auto;
        background:#aaaaaa;
        border-top: 2px solid #ffffff;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #000000;
        border-right: 2px solid #000000;
        text-align:left;
        color:#000;
      ">
        <!-- Title bar - same Intuition chrome as WB2/MUI -->
        <div style="
          background:#6688bb;
          color:#ffffff;
          height:18px;
          display:flex; align-items:stretch;
          font-size:12px;
          border-bottom:1px solid #000;
        ">
          <div style="
            width:22px; background:#aaaaaa;
            border-right:1px solid #000;
            border-top:1px solid #fff; border-left:1px solid #fff;
            border-bottom:1px solid #000;
            display:flex; align-items:center; justify-content:center;
          ">
            <div style="width:8px; height:8px; border:1px solid #000; background:#aaaaaa; box-shadow: inset 1px 1px 0 #fff;"></div>
          </div>
          <div style="flex:1; padding: 0 8px; display:flex; align-items:center; font-weight:bold;">
            Workbench &middot; Copy Files
          </div>
          <div style="
            width:22px; background:#aaaaaa;
            border-left:1px solid #000; border-top:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            display:flex; align-items:center; justify-content:center;
          ">
            <div style="width:10px; height:8px; border:1px solid #000; background:#aaaaaa; position:relative;">
              <div style="position:absolute; left:-1px; top:-1px; width:6px; height:5px; border:1px solid #000; background:#fff;"></div>
            </div>
          </div>
          <div style="
            width:22px; background:#aaaaaa;
            border-left:1px solid #000; border-top:1px solid #fff;
            border-bottom:1px solid #000; border-right:1px solid #000;
            display:flex; align-items:center; justify-content:center;
          ">
            <div style="width:11px; height:9px; background:#fff; border:1px solid #000; position:relative;">
              <div style="position:absolute; left:3px; top:3px; width:7px; height:5px; background:#aaaaaa; border:1px solid #000;"></div>
            </div>
          </div>
        </div>

        <!-- Window content - airy ClassAct layout (no nested groups) -->
        <div style="padding: 18px 22px; font-size:13px; line-height:1.6;">
          <div style="display:grid; grid-template-columns: 110px 1fr; row-gap:6px; column-gap:10px; margin-bottom:18px;">
            <span style="text-align:right;">Source:</span>
            <span style="
              border-top:1px solid #555; border-left:1px solid #555;
              border-bottom:1px solid #fff; border-right:1px solid #fff;
              background:#9090a0; color:#000; padding: 1px 6px;
            ">RAM Disk:</span>

            <span style="text-align:right;">Destination:</span>
            <span style="
              border-top:1px solid #555; border-left:1px solid #555;
              border-bottom:1px solid #fff; border-right:1px solid #fff;
              background:#9090a0; color:#000; padding: 1px 6px;
            ">System:Tools/</span>

            <span style="text-align:right;">Currently:</span>
            <span id="brea-file" style="
              border-top:1px solid #555; border-left:1px solid #555;
              border-bottom:1px solid #fff; border-right:1px solid #fff;
              background:#9090a0; color:#000; padding: 1px 6px;
            ">PrefsLoader</span>
          </div>

          <!-- Gauge.gadget - smooth gradient fill, percentage to the right -->
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="
              flex:1;
              border-top: 1px solid #555555;
              border-left: 1px solid #555555;
              border-bottom: 1px solid #ffffff;
              border-right: 1px solid #ffffff;
              background:#9090a0;
              height:14px;
              padding:0;
            ">
              <div id="brea-fill" style="
                height:100%; width:0%;
                background: linear-gradient(180deg, #88aacc 0%, #4466aa 100%);
                transition: width 0.05s linear;
              "></div>
            </div>
            <span id="brea-pct" style="font-size:12px; min-width:38px; text-align:right;">0%</span>
          </div>

          <!-- Action buttons: thin single-bezel ClassAct buttons -->
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:16px;">
            <button style="
              background:#aaaaaa; color:#000;
              border-top: 1px solid #ffffff;
              border-left: 1px solid #ffffff;
              border-bottom: 1px solid #000000;
              border-right: 1px solid #000000;
              padding: 3px 18px;
              font-family: inherit; font-size: 12px;
              cursor: default;
            ">Pause</button>
            <button style="
              background:#aaaaaa; color:#000;
              border-top: 1px solid #ffffff;
              border-left: 1px solid #ffffff;
              border-bottom: 1px solid #000000;
              border-right: 1px solid #000000;
              padding: 3px 18px;
              font-family: inherit; font-size: 12px;
              cursor: default;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#brea-fill');
    const pctEl = canvas.querySelector('#brea-pct');
    const fileEl = canvas.querySelector('#brea-file');
    const files = [
      'PrefsLoader',
      'IPrefs',
      'ConClip',
      'FixFonts',
      'ShowConfig',
      'ToolsDaemon',
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
