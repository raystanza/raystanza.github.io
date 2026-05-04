/* 1997 - Mac OS 8 · Platinum appearance (GUI) */
PBH.registerBar({
  year: 1997, yearLabel: '1997',
  name: 'Mac OS 8 · Platinum',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#9090a8',
      backgroundImage: 'radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)',
      backgroundSize: '5px 5px',
      padding: '40px',
      fontFamily: '"Charcoal", "Geneva", "Lucida Grande", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:60px auto; background: linear-gradient(180deg, #ececec 0%, #c9c9c9 100%); border:1px solid #000; box-shadow: 4px 4px 8px rgba(0,0,0,0.3); border-radius:4px; overflow:hidden;">
        <div style="background: linear-gradient(180deg, #f4f4f4 0%, #b8b8b8 100%); padding: 5px 12px; font-size:12px; color:#000; font-weight:bold; border-bottom: 1px solid #777; display:flex; align-items:center;">
          <span style="display:inline-block; width:11px; height:11px; border:1px solid #000; background: linear-gradient(180deg, #fff, #ccc); margin-right:8px; border-radius:1px;"></span>
          <span style="flex:1; text-align:center;">Copy</span>
        </div>
        <div style="padding: 22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying 14 items to "Macintosh HD"</div>
          <div style="font-size:11px; color:#444; margin-bottom: 18px;" id="bmos8-file">Sherlock</div>
          <div style="background: linear-gradient(180deg, #c8c8c8 0%, #ececec 100%); border:1px solid #555; height:18px; padding:1px; border-radius:2px;">
            <div id="bmos8-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #b0c8e8 0%, #5078b8 100%); transition: width 0.05s linear; border-radius:1px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>About a minute remaining</span>
            <span id="bmos8-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bmos8-fill');
    const pctEl = canvas.querySelector('#bmos8-pct');
    const fileEl = canvas.querySelector('#bmos8-file');
    const files = ['Sherlock', 'AppleScript', 'Stickies', 'Note Pad', 'Calculator', 'SimpleText', 'AppleCD Audio'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
