/* 1995 - CDE · Common Desktop Environment - Sun/HP/IBM Motif (GUI) */
PBH.registerBar({
  year: 1995, yearLabel: '1995',
  name: 'CDE · Common Desktop Environment',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#5c80a4',
      backgroundImage: 'repeating-linear-gradient(45deg, #527797 0 4px, #6189aa 4px 8px)',
      padding: '40px',
      fontFamily: '"Lucida Sans", "Helvetica", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:560px; margin:60px auto; background:#aebfd1; border-top:2px solid #d8e0e8; border-left:2px solid #d8e0e8; border-bottom:2px solid #364d65; border-right:2px solid #364d65;">
        <div style="background: linear-gradient(180deg, #6189aa 0%, #4c6f8b 100%); color:#fff; padding:5px 10px; font-size:13px; font-weight:bold; display:flex; justify-content:space-between; border-bottom: 1px solid #364d65;">
          <span>File Manager - Copy</span>
          <span style="display:flex; gap:4px;">
            <span style="width:12px; height:12px; background:#aebfd1; border:1px solid #364d65;"></span>
            <span style="width:12px; height:12px; background:#aebfd1; border:1px solid #364d65;"></span>
          </span>
        </div>
        <div style="padding: 22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying files to /home/user/backup …</div>
          <div style="font-size:11px; color:#1a2a3a; margin-bottom: 18px;" id="bcde-file">.dtprofile</div>
          <div style="border-top:2px solid #364d65; border-left:2px solid #364d65; border-bottom:2px solid #d8e0e8; border-right:2px solid #d8e0e8; height: 18px; background:#fff;">
            <div id="bcde-fill" style="height:100%; width:0%; background:#3a557a; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>Solaris CDE 1.0</span>
            <span id="bcde-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bcde-fill');
    const pctEl = canvas.querySelector('#bcde-pct');
    const fileEl = canvas.querySelector('#bcde-file');
    const files = ['.dtprofile', '.Xdefaults', '.cshrc', '.bashrc', 'Xresources', 'wm/dt.fp', 'sessionetc'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
