/* 1996 - BeOS (GUI) */
PBH.registerBar({
  year: 1996, yearLabel: '1996',
  name: 'BeOS',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#3c3c3c',
      backgroundImage: 'linear-gradient(135deg, #444 0%, #2a2a2a 100%)',
      padding: '40px',
      fontFamily: '"Lucida Sans", "Verdana", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:80px auto;">
        <div style="background: linear-gradient(180deg, #ffea7a 0%, #ffaa1c 100%); padding: 5px 18px 5px 14px; color: #000; font-size: 13px; font-weight: bold; border: 1px solid #000; border-bottom: none; border-radius: 8px 16px 0 0; width: fit-content; margin-left: 14px; box-shadow: inset 1px 1px 0 #fff, 2px 2px 0 rgba(0,0,0,0.4);">Installer - BeFS</div>
        <div style="background: linear-gradient(180deg, #d8d8d8 0%, #a0a0a0 100%); border:1px solid #000; padding:28px; box-shadow: 4px 4px 0 rgba(0,0,0,0.4);">
          <div style="font-size:13px; margin-bottom:8px; color:#000;">Copying files to /boot/home…</div>
          <div style="font-size:11px; margin-bottom:22px; color:#222;" id="b96-file">netpositive</div>
          <div style="border: 1px solid #000; height: 24px; background: linear-gradient(180deg, #777 0%, #aaa 100%); box-shadow: inset 0 1px 0 rgba(0,0,0,0.5); position:relative; overflow:hidden; border-radius: 2px;">
            <div id="b96-fill" style="height: 100%; background: linear-gradient(180deg, #88aaff 0%, #4477ee 50%, #2255cc 100%); width: 0%; transition: width 0.05s linear; border-right: 1px solid #112266; box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#000;">
            <span>BeFS · 64-bit journaling</span>
            <span id="b96-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b96-fill');
    const pctEl = canvas.querySelector('#b96-pct');
    const fileEl = canvas.querySelector('#b96-file');
    const files = ['netpositive', 'tracker', 'deskbar', 'mediaplayer', 'opentracker', 'beam', 'stylededit'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
