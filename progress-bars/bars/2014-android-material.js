/* 2014 - Android 5.0 · Material Design (GUI) */
PBH.registerBar({
  year: 2014, yearLabel: '2014',
  name: 'Android 5.0 · Material Design',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#eceff1',
      padding: '40px',
      fontFamily: '"Roboto", "Noto Sans", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width: 480px; margin: 60px auto; background: #fff; border-radius: 2px; box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08); overflow:hidden;">
        <div style="background: #3f51b5; color: #fff; padding: 18px 20px; font-size: 18px; font-weight: 500; letter-spacing: 0.4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Downloading update</div>
        <div style="padding: 22px 24px 20px;">
          <div style="font-size:14px; color:#212121; margin-bottom:6px;" id="b2014-file">system-update-1.2.7.zip</div>
          <div style="font-size:12px; color:#757575; margin-bottom: 22px;" id="b2014-status">42 MB of 96 MB · 12 sec remaining</div>
          <div style="height: 4px; background: #c5cae9; border-radius: 2px; overflow:hidden; position:relative;">
            <div id="b2014-fill" style="height: 100%; width: 0%; background: #3f51b5; transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:4px; margin-top: 22px;">
            <button style="background:transparent; border:none; color:#3f51b5; padding: 10px 14px; font-size:14px; font-weight:500; text-transform:uppercase; letter-spacing:1.2px; cursor:pointer; border-radius:2px; font-family: inherit;">PAUSE</button>
            <button style="background:transparent; border:none; color:#3f51b5; padding: 10px 14px; font-size:14px; font-weight:500; text-transform:uppercase; letter-spacing:1.2px; cursor:pointer; border-radius:2px; font-family: inherit;">CANCEL</button>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2014-fill');
    const statusEl = canvas.querySelector('#b2014-status');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        const mb = Math.floor((pct / 100) * 96);
        const sec = Math.max(0, Math.ceil((100 - pct) / 10));
        statusEl.textContent = `${mb} MB of 96 MB · ${sec} sec remaining`;
      }
    };
  }
});
