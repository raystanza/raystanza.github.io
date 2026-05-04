/* 2011 - Ubuntu Unity - aubergine + orange Ambiance theme (GUI) */
PBH.registerBar({
  year: 2011, yearLabel: '2011',
  name: 'Ubuntu Unity · Ambiance',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #2c001e 0%, #5d1e44 100%)',
      padding: '40px',
      fontFamily: '"Ubuntu", "Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="background:#2c001e; color:#fff; padding: 4px 18px; font-size:12px; margin: -40px -40px 32px; display:flex; align-items:center;">
        <span style="display:inline-block; width:14px; height:14px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #ff8030, #d24010); margin-right: 10px;"></span>
        <span style="flex:1;">Files</span>
        <span style="font-family:monospace;">14:42</span>
      </div>
      <div style="width:540px; margin:30px auto; background:#3a3a3a; border-radius:6px; box-shadow: 0 12px 40px rgba(0,0,0,0.6); overflow:hidden;">
        <div style="background: linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%); padding:8px 14px; color:#fff; font-weight:500; font-size:13px; border-bottom: 1px solid #1a1a1a; display:flex; justify-content:space-between;">
          <span>Copy</span>
          <span style="display:flex; gap:6px;">
            <span style="width:12px;height:12px;border-radius:50%;background:#dc4c2e;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#f0a020;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#83b13b;"></span>
          </span>
        </div>
        <div style="padding: 22px; color:#dcdcdc;">
          <div style="font-size:13px; margin-bottom:6px;">Copying file 47 of 89</div>
          <div style="font-size:11px; color:#aaa; margin-bottom: 22px;" id="buu-file">/home/ubuntu/Music/track-12.flac</div>
          <div style="background: #1a1a1a; border-radius: 4px; height: 8px; padding:0; overflow:hidden;">
            <div id="buu-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #ff8030, #dc4c2e); border-radius: 4px; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#aaa;">
            <span>About 9 seconds remaining</span>
            <span id="buu-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#buu-fill');
    const pctEl = canvas.querySelector('#buu-pct');
    return {
      update(pct) { fillEl.style.width = pct + '%'; pctEl.textContent = Math.floor(pct) + '%'; }
    };
  }
});
