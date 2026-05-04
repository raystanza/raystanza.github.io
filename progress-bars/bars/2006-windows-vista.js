/* 2006 - Windows Vista · Aero (GUI) */
PBH.registerBar({
  year: 2006, yearLabel: '2006',
  name: 'Microsoft Windows Vista · Aero',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'radial-gradient(ellipse at top, #4d7ec1 0%, #1a2c54 60%, #0a1530 100%)',
      padding: '40px',
      fontFamily: '"Segoe UI", "Tahoma", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:60px auto; background: rgba(220,235,250,0.78); backdrop-filter: blur(20px); border:1px solid rgba(255,255,255,0.7); border-radius:10px; box-shadow: 0 12px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.5); overflow:hidden;">
        <div style="background: linear-gradient(180deg, rgba(200,230,255,0.6), rgba(140,190,235,0.6)); padding: 8px 14px; color: #000; display:flex; align-items:center; font-size: 13px; border-bottom: 1px solid rgba(0,0,0,0.1);">
          <span style="flex:1; font-weight:500;">Copying 47 items</span>
        </div>
        <div style="padding: 24px;">
          <div style="font-size:13px; color:#000; margin-bottom:8px;" id="b2006-status">Copying from <i>Documents</i> to <i>Backup</i>…</div>
          <div style="font-size:11px; color:#444; margin-bottom:18px;" id="b2006-file">Photos.jpg</div>
          <div style="background: rgba(255,255,255,0.6); border:1px solid #888; border-radius:4px; height:24px; padding: 1px; position:relative; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);">
            <div id="b2006-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #c8f088 0%, #80c038 30%, #50a020 70%, #80c038 100%); position:relative; overflow:hidden; transition: width 0.05s linear; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);">
              <div style="position:absolute; inset:0; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%); animation: pbh-vista-pulse 2s ease-in-out infinite;"></div>
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#000;">
            <span id="b2006-remaining">Calculating remaining time…</span>
            <span id="b2006-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2006-fill');
    const pctEl = canvas.querySelector('#b2006-pct');
    const fileEl = canvas.querySelector('#b2006-file');
    const remEl = canvas.querySelector('#b2006-remaining');
    const files = ['Photos.jpg', 'Resume.docx', 'Music.mp3', 'Movie.avi', 'Notes.txt', 'Backup.zip'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
        const sec = Math.max(0, Math.ceil((100 - pct) / 10));
        remEl.textContent = pct < 100 ? `Time remaining: ${sec} seconds` : 'Complete';
      }
    };
  }
});
