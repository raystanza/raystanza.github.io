/* 2024 – 2026 - AI-Integrated Interface (GUI) */
PBH.registerBar({
  year: 2025, yearLabel: '2024 - 2026',
  name: 'AI-Integrated Interface',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0a0a14',
      padding: '40px',
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#eee',
      position: 'relative',
      overflow: 'hidden',
    });
    canvas.innerHTML = `
      <div style="position:absolute; inset:0; background: radial-gradient(circle at 20% 30%, rgba(120,80,255,0.28), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,80,200,0.22), transparent 50%), radial-gradient(circle at 60% 20%, rgba(80,200,255,0.20), transparent 50%); animation: pbh-aurora 8s ease-in-out infinite alternate;"></div>
      <div style="position:relative; max-width:560px; margin:60px auto; padding:32px; background: rgba(20,20,28,0.55); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; box-shadow: 0 12px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:22px;">
          <div style="width:14px; height:14px; border-radius: 50%; background: conic-gradient(#7d4dff, #ff4d9d, #4dd2ff, #7d4dff); animation: pbh-spin 3s linear infinite; box-shadow: 0 0 16px rgba(125,77,255,0.7);"></div>
          <div style="font-size:14px; font-weight:500; letter-spacing:0.3px;">Generating response</div>
        </div>
        <div style="font-size:13px; line-height:1.7; color:#bbb; margin-bottom:24px; min-height: 92px;" id="b2025-stream">…</div>
        <div style="height:3px; background: rgba(255,255,255,0.08); border-radius:2px; overflow:hidden; position:relative;">
          <div id="b2025-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #7d4dff, #ff4d9d, #4dd2ff, #7d4dff); background-size: 300% 100%; animation: pbh-ai-shift 3s linear infinite; transition: width 0.05s linear; border-radius: 2px; box-shadow: 0 0 14px rgba(125,77,255,0.6);"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:11px; color:#888; margin-top:14px;">
          <span id="b2025-tokens">0 / 4096 tokens</span>
          <span id="b2025-pct">0%</span>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b2025-fill');
    const pctEl = canvas.querySelector('#b2025-pct');
    const tokensEl = canvas.querySelector('#b2025-tokens');
    const streamEl = canvas.querySelector('#b2025-stream');
    const fullText = 'Analyzing context across connected systems. Synthesizing knowledge from 47 sources, validating accuracy, and drafting a structured response with relevant citations…';
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        tokensEl.textContent = Math.floor((pct / 100) * 4096) + ' / 4096 tokens';
        const chars = Math.floor((pct / 100) * fullText.length);
        streamEl.innerHTML = fullText.slice(0, chars) +
          (pct < 100 ? '<span style="display:inline-block;width:7px;height:14px;background:#bbb;margin-left:2px;animation:pbh-blink 1s steps(2) infinite;vertical-align:-2px;"></span>' : '');
      }
    };
  }
});
