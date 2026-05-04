/* 2001 - Mac OS X 10.0 · Aqua (GUI) */
PBH.registerBar({
  year: 2001, yearLabel: '2001',
  name: 'Mac OS X 10.0 · Aqua',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #5d76b6 0%, #2c3d6e 100%)',
      padding: '40px',
      fontFamily: '"Lucida Grande", "Helvetica Neue", sans-serif',
    });
    canvas.innerHTML = `
      <div style="background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(225,230,240,0.96)); border-radius: 10px 10px 6px 6px; width: 520px; margin: 60px auto; box-shadow: 0 6px 28px rgba(0,0,0,0.5); overflow: hidden;">
        <div style="background: linear-gradient(180deg, #e0e0e0 0%, #a8a8a8 100%); height: 22px; display:flex; align-items:center; padding: 0 10px; gap: 8px; border-bottom: 1px solid #777;">
          <div style="width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ff9088, #c8302a); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.6);"></div>
          <div style="width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ffe070, #d39520); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.6);"></div>
          <div style="width:12px; height:12px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #80df7c, #248826); box-shadow: inset 0 -1px 1px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.6);"></div>
          <div style="flex:1; text-align:center; font-size:12px; color:#222; font-weight:bold;">Copy</div>
        </div>
        <div style="padding: 28px;">
          <div style="font-size:13px; color:#000; margin-bottom:6px;">Copying 7 items to <i>"Applications"</i></div>
          <div style="font-size:11px; color:#666; margin-bottom:18px;" id="b2001a-file">Safari.app</div>
          <div style="background: linear-gradient(180deg, #cfcfcf 0%, #f6f6f6 100%); border:1px solid #888; border-radius:8px; height: 16px; padding: 1px; overflow:hidden; position:relative;">
            <div id="b2001a-fill" style="height: 100%; width: 0%; border-radius: 7px; background-image: repeating-linear-gradient(-45deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 10px, transparent 10px, transparent 20px), linear-gradient(180deg, #82c2ff 0%, #2a7bd9 50%, #1f5fa8 100%); background-size: 28px 28px, 100% 100%; animation: pbh-aqua-stripe 1s linear infinite; transition: width 0.05s linear; box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; color:#666; margin-top:10px;">
            <span id="b2001a-status">About a minute remaining</span>
            <span id="b2001a-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2001a-fill');
    const pctEl = canvas.querySelector('#b2001a-pct');
    const fileEl = canvas.querySelector('#b2001a-file');
    const statusEl = canvas.querySelector('#b2001a-status');
    const files = ['Safari.app', 'Mail.app', 'iTunes.app', 'iChat.app', 'Sherlock.app', 'TextEdit.app', 'Preview.app'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const remaining = Math.max(1, Math.ceil((100 - pct) / 10));
        statusEl.textContent = pct < 100 ? `About ${remaining} seconds remaining` : 'Complete';
      }
    };
  }
});
