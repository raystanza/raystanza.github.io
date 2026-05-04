/* 2024 - Apple visionOS - floating glass (GUI) */
PBH.registerBar({
  year: 2024, yearLabel: '2024',
  name: 'Apple visionOS',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'radial-gradient(circle at 30% 40%, #4a6fa6 0%, #1a2540 50%, #0a0f1a 100%)',
      padding: '40px',
      fontFamily: '"SF Pro Display", "Helvetica Neue", -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    });
    canvas.innerHTML = `
      <div style="position:absolute; top:60px; right: 80px; width:60px; height:60px; border-radius:50%; background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.3), transparent 70%);"></div>
      <div style="position:absolute; bottom:40px; left: 60px; width:140px; height:140px; border-radius:50%; background: radial-gradient(circle at 35% 30%, rgba(160,200,255,0.18), transparent 70%);"></div>

      <div style="width:480px; margin:80px auto; padding: 30px; background: rgba(255,255,255,0.13); backdrop-filter: blur(50px) saturate(180%); border:1px solid rgba(255,255,255,0.22); border-radius: 26px; box-shadow: 0 30px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.3); animation: pbh-float 5s ease-in-out infinite; color:#fff;">
        <div style="display:flex; gap:16px; align-items:center; margin-bottom: 22px;">
          <div style="width:50px; height:50px; border-radius:14px; background: linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.1)); border:1px solid rgba(255,255,255,0.3); backdrop-filter: blur(20px);"></div>
          <div>
            <div style="font-size:17px; font-weight:600;">Spatial Photos</div>
            <div style="font-size:13px; color: rgba(255,255,255,0.7);" id="bvos-status">Capturing immersive content</div>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.13); border-radius: 12px; height: 6px; overflow:hidden;">
          <div id="bvos-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #fff, rgba(255,255,255,0.6)); border-radius: 12px; transition: width 0.05s linear; box-shadow: 0 0 16px rgba(255,255,255,0.4);"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-top:18px; color: rgba(255,255,255,0.7);">
          <span>4K · 30 fps · Stereoscopic</span>
          <span id="bvos-pct">0%</span>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bvos-fill');
    const pctEl = canvas.querySelector('#bvos-pct');
    const statusEl = canvas.querySelector('#bvos-status');
    const stages = ['Capturing immersive content', 'Encoding stereo pair', 'Generating depth map', 'Saving to library'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        statusEl.textContent = stages[Math.min(stages.length-1, Math.floor((pct/100)*stages.length))];
      }
    };
  }
});
