/* 1985 - Amiga Workbench 1.0 - Kickstart pastel orange/blue (GUI) */
PBH.registerBar({
  year: 1985, yearLabel: '1985',
  name: 'Amiga Workbench 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0055aa',
      padding: '40px',
      fontFamily: '"Topaz", "Courier New", monospace',
    });
    canvas.innerHTML = `
      <div style="width:560px; margin:60px auto; background:#fff; border: 2px solid #000; box-shadow: inset 0 0 0 1px #ff8800;">
        <div style="background: linear-gradient(180deg, #fff 0 1px, #888 1px 2px); background-size: 100% 2px; padding:3px 10px; color:#000; font-size:12px; font-weight:bold; border-bottom:1px solid #000;">AmigaDOS - Disk-Validator</div>
        <div style="padding:22px; color:#000; background: #fff;">
          <div style="font-size:13px; margin-bottom:8px;">Validating volume "Workbench" …</div>
          <div style="font-size:11px; color:#222; margin-bottom: 18px;" id="bawb-file">Block 0 / 1758</div>
          <div style="border:2px solid #000; height:18px; background:#fff;">
            <div id="bawb-fill" style="height:100%; width:0%; background:#ff8800; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>Drive DF0:</span>
            <span id="bawb-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bawb-fill');
    const pctEl = canvas.querySelector('#bawb-pct');
    const fileEl = canvas.querySelector('#bawb-file');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = 'Block ' + Math.floor((pct/100)*1758) + ' / 1758';
      }
    };
  }
});
