/* 1993 - Amiga MUI (Magic User Interface) - Stefan Stuntz's widget toolkit (GUI)
 *
 * MUI was the dominant Amiga widget toolkit of the mid-90s, used by apps like
 * YAM, Voyager, AmIRC, MCC. Its visual signature:
 *   - Heavy, deeply NESTED 3D bezels: every Group, every Frame, every label
 *     and gauge sits inside its own raised/sunken frame, often two or three
 *     deep. This "frames inside frames" look is what people recognise as MUI.
 *   - Pseudo-greyscale palette with a slight cool tint - MUI users typically
 *     ran their Workbench with custom colours but the defaults skewed grey/
 *     blue (#aaaaaa surface, #888 shadow, #fff highlight).
 *   - The iconic Gauge.mcc widget: a sunken well filled with TIGHTLY-SPACED
 *     vertical stripes alternating two shades of blue. The bar text (often a
 *     percentage) was drawn centred on top in white-with-shadow.
 *   - All buttons drawn with chunky 2-px raised bezels and a 1-px black
 *     outer outline.
 *   - Topaz 8 bitmap font.
 */
PBH.registerBar({
  year: 1993, yearLabel: '1993',
  name: 'Amiga MUI · Magic User Interface',
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
        width:560px; margin:50px auto;
        background:#aaaaaa;
        border-top: 2px solid #ffffff;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #000000;
        border-right: 2px solid #000000;
        text-align:left;
        color:#000;
      ">
        <!-- Standard WB-style title bar (MUI runs on top of Intuition) -->
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
            DOpus 4 &middot; MUI &middot; File Copy
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

        <!-- Outer bezelled group: this is the OUTERMOST MUI Group -->
        <div style="padding: 14px;">
          <div style="
            border-top: 1px solid #ffffff;
            border-left: 1px solid #ffffff;
            border-bottom: 1px solid #555555;
            border-right: 1px solid #555555;
            padding: 12px;
            background:#aaaaaa;
          ">
            <!-- Inner labelled group (MUI's signature: SUNKEN frame around the
                 status block, with the group title floating above) -->
            <div style="position:relative; margin-bottom:14px;">
              <div style="
                position:absolute; left:10px; top:-7px;
                background:#aaaaaa; padding:0 4px;
                font-size:11px; font-weight:bold;
              ">Copy Status</div>
              <div style="
                border-top: 1px solid #555555;
                border-left: 1px solid #555555;
                border-bottom: 1px solid #ffffff;
                border-right: 1px solid #ffffff;
                padding: 14px 12px 10px;
                background:#aaaaaa;
                font-size:12px;
                line-height:1.6;
              ">
                <!-- Each MUI String/Text widget is itself sunken-bezelled -->
                <div style="display:flex; gap:8px; margin-bottom:4px;">
                  <span style="width:80px;">Source:</span>
                  <span style="
                    flex:1;
                    border-top:1px solid #555; border-left:1px solid #555;
                    border-bottom:1px solid #fff; border-right:1px solid #fff;
                    background:#888; color:#fff; padding: 1px 6px;
                  ">RAM:Mods/</span>
                </div>
                <div style="display:flex; gap:8px; margin-bottom:4px;">
                  <span style="width:80px;">Destination:</span>
                  <span style="
                    flex:1;
                    border-top:1px solid #555; border-left:1px solid #555;
                    border-bottom:1px solid #fff; border-right:1px solid #fff;
                    background:#888; color:#fff; padding: 1px 6px;
                  ">DH0:Music/Mods/</span>
                </div>
                <div style="display:flex; gap:8px;">
                  <span style="width:80px;">Currently:</span>
                  <span id="bmui-file" style="
                    flex:1;
                    border-top:1px solid #555; border-left:1px solid #555;
                    border-bottom:1px solid #fff; border-right:1px solid #fff;
                    background:#888; color:#fff; padding: 1px 6px;
                  ">spaceballs.mod</span>
                </div>
              </div>
            </div>

            <!-- MUI Gauge.mcc - sunken well, vertical-stripe blue fill,
                 percentage centred on top -->
            <div style="
              border-top: 2px solid #555555;
              border-left: 2px solid #555555;
              border-bottom: 2px solid #ffffff;
              border-right: 2px solid #ffffff;
              background:#888888;
              height:20px;
              position:relative;
              overflow:hidden;
            ">
              <div id="bmui-fill" style="
                height:100%; width:0%;
                background-image: repeating-linear-gradient(
                  90deg,
                  #6688bb 0 3px,
                  #4466aa 3px 5px
                );
                transition: width 0.05s linear;
              "></div>
              <div id="bmui-pct" style="
                position:absolute; inset:0;
                display:flex; align-items:center; justify-content:center;
                color:#fff;
                font-size:11px; font-weight:bold;
                text-shadow: 1px 1px 0 #000;
                pointer-events:none;
              ">0 %</div>
            </div>

            <!-- Action buttons: chunky raised MUI bezels with 1px black outline -->
            <div style="display:flex; gap:10px; justify-content:center; margin-top:14px;">
              <button style="
                background:#aaaaaa; color:#000;
                border: 1px solid #000;
                box-shadow:
                  inset  1px  1px 0 #ffffff,
                  inset -1px -1px 0 #555555,
                  inset  2px  2px 0 #aaaaaa,
                  inset -2px -2px 0 #aaaaaa;
                padding: 4px 22px;
                font-family: inherit; font-size: 12px;
                cursor: default;
              ">Pause</button>
              <button style="
                background:#aaaaaa; color:#000;
                border: 1px solid #000;
                box-shadow:
                  inset  1px  1px 0 #ffffff,
                  inset -1px -1px 0 #555555,
                  inset  2px  2px 0 #aaaaaa,
                  inset -2px -2px 0 #aaaaaa;
                padding: 4px 22px;
                font-family: inherit; font-size: 12px;
                cursor: default;
              ">Abort</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bmui-fill');
    const pctEl = canvas.querySelector('#bmui-pct');
    const fileEl = canvas.querySelector('#bmui-file');
    const files = [
      'spaceballs.mod',
      'klisje-paa-klisje.mod',
      'enigma.mod',
      'state-of-the-art.mod',
      'desert-dream.mod',
      '9-fingers.mod',
    ];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + ' %';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
