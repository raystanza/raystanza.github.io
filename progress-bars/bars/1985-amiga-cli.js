/* 1985 - Amiga CLI (AmigaDOS) - orange-on-blue Workbench colours (CLI) */
PBH.registerBar({
  year: 1985, yearLabel: '1985',
  name: 'Amiga CLI · AmigaDOS 1.0',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#0055aa',
      color: '#ff8800',
      fontFamily: '"Topaz", "Courier New", monospace',
      fontSize: '20px',
      padding: '40px',
      lineHeight: '1.4',
    });
    canvas.innerHTML = `
      <div style="background:#ffffff; color:#000; padding:2px 8px; font-size:12px; margin:-40px -40px 22px;">Amiga AmigaDOS - CLI</div>
      <div>1&gt; <span style="color:#fff">COPY DF1: TO RAM:WORK ALL</span></div>
      <div id="bamiga-file" style="color:#ff8800">Copying graphics.library</div>
      <div style="height:14px"></div>
      <div><span style="color:#fff">[</span><span id="bamiga-bar" style="color:#ff8800"></span><span id="bamiga-empty" style="color:#003366"></span><span style="color:#fff">]</span> <span id="bamiga-pct" style="color:#ff8800">  0</span>%</div>
      <div style="height:14px"></div>
      <div>1&gt;<span style="background:#ff8800; color:#0055aa;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bamiga-bar');
    const emptyEl = canvas.querySelector('#bamiga-empty');
    const pctEl = canvas.querySelector('#bamiga-pct');
    const fileEl = canvas.querySelector('#bamiga-file');
    const files = ['graphics.library', 'intuition.library', 'dos.library', 'workbench.library', 'icon.library', 'mathffp.library'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '█'.repeat(filled);
        emptyEl.textContent = '░'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
        fileEl.textContent = 'Copying ' + files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
