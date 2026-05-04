/* 2012 - Windows 8 · Metro - flat saturated tiles (GUI) */
PBH.registerBar({
  year: 2012, yearLabel: '2012',
  name: 'Microsoft Windows 8 · Metro',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0072c6',
      padding: '40px',
      fontFamily: '"Segoe UI", "Segoe UI Light", "Tahoma", sans-serif',
      color: '#fff',
    });
    canvas.innerHTML = `
      <div style="display:flex; gap:12px; margin-bottom: 60px;">
        <div style="width:120px; height:120px; background:#16a085;"></div>
        <div style="width:120px; height:120px; background:#e74c3c;"></div>
        <div style="width:248px; height:120px; background:#8e44ad; padding:14px; font-weight:300; font-size:24px;">Mail</div>
      </div>
      <div style="text-align:center; max-width:560px; margin:0 auto;">
        <div style="font-size: 36px; font-weight: 200; margin-bottom: 14px; letter-spacing:-1px;">Installing apps</div>
        <div style="font-size: 14px; font-weight: 300; margin-bottom: 36px; opacity: 0.85;" id="bw8-app">Mail · Calendar · People</div>
        <div style="height:4px; background: rgba(255,255,255,0.2); margin: 0 auto;">
          <div id="bw8-fill" style="height:100%; width:0%; background: #fff; transition: width 0.05s linear;"></div>
        </div>
        <div style="font-size: 13px; font-weight:300; margin-top: 14px; letter-spacing:0.4px;" id="bw8-pct">0%</div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw8-fill');
    const pctEl = canvas.querySelector('#bw8-pct');
    const appEl = canvas.querySelector('#bw8-app');
    const apps = ['Mail · Calendar · People', 'Photos · Camera · Skype', 'Music · Video · Maps', 'News · Sports · Travel', 'Weather · Finance'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        appEl.textContent = apps[Math.min(apps.length-1, Math.floor((pct/100)*apps.length))];
      }
    };
  }
});
