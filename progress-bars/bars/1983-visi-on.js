/* 1983 - VisiOn - VisiCorp's GUI for the IBM PC (GUI) */
PBH.registerBar({
  year: 1983, yearLabel: '1983',
  name: 'Visi On',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      padding: '40px',
      fontFamily: '"Courier New", monospace',
    });
    canvas.innerHTML = `
      <div style="background:#000; border: 2px solid #fff; width:540px; margin:80px auto; padding:0; color:#fff;">
        <div style="background:#fff; color:#000; padding:4px 10px; font-size:13px; font-weight:bold;">VISI ON - APPLICATION MANAGER</div>
        <div style="padding:24px;">
          <div style="font-size:13px; margin-bottom:8px;">Loading VisiOn Calc …</div>
          <div style="font-size:11px; color:#aaa; margin-bottom:20px;" id="bvo-step">Reading overlay 1 of 5</div>
          <div style="border: 1px solid #fff; height:20px; padding: 0;">
            <div id="bvo-fill" style="height:100%; width:0%; background-image: repeating-linear-gradient(90deg, #fff 0 2px, #000 2px 4px); transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#bbb;">
            <span>5.25" diskette · drive A:</span>
            <span id="bvo-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bvo-fill');
    const pctEl = canvas.querySelector('#bvo-pct');
    const stepEl = canvas.querySelector('#bvo-step');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        const n = 1 + Math.min(4, Math.floor((pct/100)*5));
        stepEl.textContent = `Reading overlay ${n} of 5`;
      }
    };
  }
});
