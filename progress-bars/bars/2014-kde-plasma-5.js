/* 2014 - KDE Plasma 5 · Breeze (GUI) */
PBH.registerBar({
  year: 2014, yearLabel: '2014',
  name: 'KDE Plasma 5 · Breeze',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #1d1d24 0%, #131318 100%)',
      padding: '40px',
      fontFamily: '"Noto Sans", "Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:520px; margin:60px auto; background: rgba(48,49,53,0.96); border:1px solid #1a1a1a; border-radius: 4px; box-shadow: 0 14px 50px rgba(0,0,0,0.7); overflow:hidden;">
        <div style="background: rgba(38,40,46,0.9); padding: 9px 14px; color:#eff0f1; font-weight:500; font-size:13px; border-bottom: 1px solid #1a1a1a; display:flex; justify-content:space-between;">
          <span>File transfer</span>
          <span style="display:flex; gap:5px;">
            <span style="width:12px;height:12px;border-radius:50%;background:#7f8c8d;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background:#3daee9;"></span>
          </span>
        </div>
        <div style="padding: 22px; color:#eff0f1;">
          <div style="font-size:13px; margin-bottom:6px;">Moving 2,418 items to <i>External SSD</i></div>
          <div style="font-size:11px; color:#7f8c8d; margin-bottom: 20px;" id="bp5-file">music/album/track-04.flac</div>
          <div style="background: #1d1d24; border-radius:0; height:6px; padding:0; overflow:hidden;">
            <div id="bp5-fill" style="height:100%; width:0%; background:#3daee9; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:14px; color:#bdc3c7;">
            <span>22 MB/s</span>
            <span id="bp5-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bp5-fill');
    const pctEl = canvas.querySelector('#bp5-pct');
    const fileEl = canvas.querySelector('#bp5-file');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const tn = String(Math.min(99, 4 + Math.floor((pct/100)*40))).padStart(2,'0');
        fileEl.textContent = `music/album/track-${tn}.flac`;
      }
    };
  }
});
