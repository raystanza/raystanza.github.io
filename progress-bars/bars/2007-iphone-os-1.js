/* 2007 - iPhone OS 1.0 (GUI) */
PBH.registerBar({
  year: 2007, yearLabel: '2007',
  name: 'Apple iPhone OS 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #000 100%)',
      padding: '20px',
      fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    });
    canvas.innerHTML = `
      <div style="width: 240px; height: 460px; background:#000; border: 8px solid #1a1a1a; border-radius: 36px; padding: 38px 12px 56px; position: relative; box-shadow: 0 0 60px rgba(0,150,255,0.25), inset 0 0 0 2px #444;">
        <div style="position:absolute; top:18px; left:50%; transform:translateX(-50%); width:50px; height:6px; background:#222; border-radius:3px; box-shadow: inset 0 1px 1px rgba(0,0,0,0.6);"></div>
        <div style="background:#fff; height:100%; color:#000; display:flex; flex-direction:column;">
          <div style="background: linear-gradient(180deg, #b8b8b8, #6e6e6e); color: #fff; padding: 5px 10px; font-size: 11px; display:flex; justify-content: space-between; align-items: center; font-weight: 500;">
            <span>●●●●○ AT&amp;T</span>
            <span style="font-weight:bold">2:42 PM</span>
            <span>🔋</span>
          </div>
          <div style="background: linear-gradient(180deg, #5588dd, #224488); color:#fff; font-weight:bold; text-align:center; padding: 9px; font-size: 14px; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.4);">Safari</div>
          <div style="flex:1; padding: 16px 14px; color:#000; font-size:12px; text-align:center;">
            <div style="margin-bottom:14px; color:#888; font-size:11px;">Loading page…</div>
            <div id="b2007-url" style="font-size:10px; color:#999; word-break:break-all; margin-bottom: 32px; text-align:left;">http://www.apple.com/iphone/</div>
            <div style="height: 4px; background: #ddd; border-radius: 2px; overflow: hidden; position: relative;">
              <div id="b2007-fill" style="height: 100%; width: 0%; background: linear-gradient(180deg, #5588dd, #224488); transition: width 0.05s linear; border-radius: 2px;"></div>
            </div>
          </div>
        </div>
        <div style="position:absolute; bottom:12px; left:50%; transform:translateX(-50%); width:36px; height:36px; border:2px solid #444; border-radius:50%; background:#000; display:flex; align-items:center; justify-content:center;">
          <div style="width:12px;height:12px;border:2px solid #777;border-radius:3px;"></div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2007-fill');
    return { update(pct) { fillEl.style.width = pct + '%'; } };
  }
});
