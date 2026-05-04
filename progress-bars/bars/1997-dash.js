/* 1997 - Debian Almquist shell (dash) (CLI) */
PBH.registerBar({
  year: 1997, yearLabel: '1997',
  name: 'Debian Almquist shell · dash',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      color: '#dcdcdc',
      fontFamily: '"DejaVu Sans Mono", "Courier New", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div>Debian GNU/Linux 2.0 (hamm)  /bin/sh -> dash</div>
      <div style="height:14px"></div>
      <div># <span style="color:#fff">apt-get install gnome-core</span></div>
      <div id="bdash-line" style="color:#9c9">Reading package lists... Done</div>
      <div style="height:14px"></div>
      <div>Progress: <span id="bdash-bar" style="color:#9c9"></span><span id="bdash-empty" style="color:#333"></span> <span id="bdash-pct">0%</span></div>
      <div style="height:14px"></div>
      <div>#<span style="background:#dcdcdc;color:#000;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bdash-bar');
    const emptyEl = canvas.querySelector('#bdash-empty');
    const pctEl = canvas.querySelector('#bdash-pct');
    const lineEl = canvas.querySelector('#bdash-line');
    const lines = [
      'Reading package lists... Done',
      'Building dependency tree... Done',
      'Get:1 http://deb.debian.org gnome-core 1.0',
      'Unpacking gnome-core (1.0-2)…',
      'Setting up gnome-core (1.0-2)…',
      'Done.',
    ];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '#'.repeat(filled);
        emptyEl.textContent = ' '.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        lineEl.textContent = lines[Math.min(lines.length-1, Math.floor((pct/100)*lines.length))];
      }
    };
  }
});
