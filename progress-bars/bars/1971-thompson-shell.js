/* 1971 - Thompson shell · UNIX v1 */
PBH.registerBar({
  year: 1971, yearLabel: '1971',
  name: 'Thompson shell · UNIX v1',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background: '#001a05', color: '#33ff66',
      fontFamily: '"Courier New", monospace',
      fontSize: '20px', padding: '40px', lineHeight: '1.6',
      textShadow: '0 0 6px rgba(51, 255, 102, 0.7)',
    });
    canvas.innerHTML = `
      <div>$ : ld /dev/mt0 /usr/sys/data</div>
      <div>archive: 47 blocks (24064 bytes)</div>
      <div style="height:36px"></div>
      <div>loading [<span id="b71-bar"></span>] <span id="b71-pct">  0</span>%</div>
      <div style="height:36px"></div>
      <div>$<span id="b71-cur" style="background:#33ff66;color:#001a05">_</span></div>`;
    const barEl = canvas.querySelector('#b71-bar');
    const pctEl = canvas.querySelector('#b71-pct');
    const curEl = canvas.querySelector('#b71-cur');
    const blink = setInterval(() => {
      curEl.style.visibility = curEl.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
    return {
      update(pct) {
        const total = 30, filled = Math.floor((pct / 100) * total);
        barEl.textContent = '#'.repeat(filled) + '.'.repeat(total - filled);
        pctEl.textContent = String(Math.floor(pct)).padStart(3, ' ');
      },
      unmount() { clearInterval(blink); }
    };
  }
});
