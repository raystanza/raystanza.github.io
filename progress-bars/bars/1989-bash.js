/* 1989 - GNU Bash 1.0 - Brian Fox / FSF (CLI) */
PBH.registerBar({
  year: 1989, yearLabel: '1989',
  name: 'GNU Bash · Bourne Again SHell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#000',
      color: '#dcdcdc',
      fontFamily: '"DejaVu Sans Mono", "Courier New", monospace',
      fontSize: '18px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div>GNU bash, version 1.05.0(1)-release (i386-gnu)</div>
      <div style="height:14px"></div>
      <div>$ <span style="color:#fff">tar -xzvf gnu-emacs-19.tar.gz</span></div>
      <div id="bbash-file" style="color:#9cf">x emacs-19/src/keyboard.c</div>
      <div style="height:14px"></div>
      <div>[<span id="bbash-bar" style="color:#9cf"></span><span id="bbash-empty" style="color:#333"></span>] <span id="bbash-pct" style="color:#9cf">0%</span></div>
      <div style="height:14px"></div>
      <div>$<span style="background:#dcdcdc;color:#000;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bbash-bar');
    const emptyEl = canvas.querySelector('#bbash-empty');
    const pctEl = canvas.querySelector('#bbash-pct');
    const fileEl = canvas.querySelector('#bbash-file');
    const files = ['x emacs-19/src/keyboard.c', 'x emacs-19/src/window.c', 'x emacs-19/lisp/simple.el', 'x emacs-19/lisp/files.el', 'x emacs-19/etc/DOC', 'x emacs-19/info/emacs'];
    return {
      update(pct) {
        const total = 32;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '#'.repeat(filled);
        emptyEl.textContent = '-'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
