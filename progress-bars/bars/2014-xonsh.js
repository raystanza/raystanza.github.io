/* 2014 - Xonsh - Python-powered shell (CLI) */
PBH.registerBar({
  year: 2014, yearLabel: '2014',
  name: 'Xonsh · Python-powered shell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#202530',
      color: '#d8d8d8',
      fontFamily: '"Fira Code", "Menlo", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div style="color:#ffd866">xonsh 0.5.0</div>
      <div style="height:14px"></div>
      <div><span style="color:#a9dc76;">user</span><span style="color:#777;">@</span><span style="color:#78dce8;">xonsh</span> <span style="color:#ff6188;">~/notebooks</span> $ <span style="color:#fff">[ls *.ipynb | nbconvert --to html for $f]</span></div>
      <div id="bxon-line" style="color:#999">  python: converting analysis-1.ipynb …</div>
      <div style="height:14px"></div>
      <div>iter ▶ <span id="bxon-bar" style="color:#ab9df2"></span><span id="bxon-empty" style="color:#3a3a4a"></span> <span id="bxon-pct" style="color:#ab9df2">0%</span></div>
      <div style="height:14px"></div>
      <div><span style="color:#a9dc76;">user</span><span style="color:#777;">@</span><span style="color:#78dce8;">xonsh</span> <span style="color:#ff6188;">~/notebooks</span> $<span style="background:#d8d8d8;color:#202530;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bxon-bar');
    const emptyEl = canvas.querySelector('#bxon-empty');
    const pctEl = canvas.querySelector('#bxon-pct');
    const lineEl = canvas.querySelector('#bxon-line');
    const files = ['analysis-1.ipynb', 'analysis-2.ipynb', 'forecast.ipynb', 'eda.ipynb', 'final.ipynb'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '━'.repeat(filled);
        emptyEl.textContent = '─'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        lineEl.textContent = `  python: converting ${files[Math.min(files.length-1, Math.floor((pct/100)*files.length))]} …`;
      }
    };
  }
});
