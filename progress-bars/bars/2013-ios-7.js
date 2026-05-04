/* 2013 - iOS 7 · Flat Design (GUI) */
PBH.registerBar({
  year: 2013, yearLabel: '2013',
  name: 'Apple iOS 7 · Flat Design',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #fafafa 0%, #ececec 100%)',
      padding: '20px',
      fontFamily: '"Helvetica Neue", "SF Pro Display", -apple-system, sans-serif',
      display:'flex', alignItems:'center', justifyContent:'center',
    });
    canvas.innerHTML = `
      <div style="width: 280px; height: 480px; background: #fff; border: 1px solid #e0e0e0; border-radius: 36px; padding: 38px 18px 56px; position: relative; box-shadow: 0 0 60px rgba(0,0,0,0.08);">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size: 11px; color:#000; padding: 0 8px; font-weight: 500;">
          <span>●●●●● Verizon</span>
          <span style="font-weight:600;">9:41 AM</span>
          <span>100% 🔋</span>
        </div>
        <div style="padding: 36px 8px; text-align:center;">
          <div style="font-size: 36px; font-weight: 200; color: #000; margin-bottom: 8px; letter-spacing: -1px;">App Store</div>
          <div style="font-size:13px; color:#999; margin-bottom: 48px; font-weight:300;">Updating</div>
          <div style="margin: 0 auto; height: 2px; background: #e8e8e8; border-radius: 1px; overflow:hidden;">
            <div id="b2013-fill" style="height: 100%; width: 0%; background: #007aff; transition: width 0.05s linear;"></div>
          </div>
          <div style="font-size:14px; color:#007aff; margin-top:16px; font-weight:300;" id="b2013-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2013-fill');
    const pctEl = canvas.querySelector('#b2013-pct');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
      }
    };
  }
});
