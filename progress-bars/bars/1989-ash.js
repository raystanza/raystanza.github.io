/* 1989 - Almquist shell (ash) - NetBSD-style minimalism (CLI) */
PBH.registerBar({
  year: 1989, yearLabel: '1989',
  name: 'Almquist shell · ash',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#101820',
      color: '#c8d6e5',
      fontFamily: '"DejaVu Sans Mono", "Courier New", monospace',
      fontSize: '18px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div># <span style="color:#fff">cd /usr/src/sys; make build</span></div>
      <div id="bash89-file" style="color:#7fb8a4">cc -c kern_main.c</div>
      <div style="height:14px"></div>
      <div>building : <span id="bash89-bar" style="color:#7fb8a4"></span><span id="bash89-empty" style="color:#23303a"></span> <span id="bash89-pct" style="color:#7fb8a4">0%</span></div>
      <div style="height:14px"></div>
      <div>#<span style="background:#c8d6e5;color:#101820;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bash89-bar');
    const emptyEl = canvas.querySelector('#bash89-empty');
    const pctEl = canvas.querySelector('#bash89-pct');
    const fileEl = canvas.querySelector('#bash89-file');
    const lines = ['cc -c kern_main.c', 'cc -c uipc_socket.c', 'cc -c vfs_syscalls.c', 'cc -c subr_extent.c', 'ld -o vmunix *.o', 'install -m 555 vmunix /'];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '■'.repeat(filled);
        emptyEl.textContent = '·'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = lines[Math.min(lines.length-1, Math.floor((pct/100)*lines.length))];
      }
    };
  }
});
