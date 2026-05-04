/* 1990 - Z shell (zsh) - Paul Falstad (CLI) */
PBH.registerBar({
  year: 1990, yearLabel: '1990',
  name: 'Z shell · zsh',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#1d1f21',
      color: '#c5c8c6',
      fontFamily: '"Menlo", "DejaVu Sans Mono", monospace',
      fontSize: '17px',
      padding: '40px',
      lineHeight: '1.55',
    });
    canvas.innerHTML = `
      <div><span style="color:#b294bb;">~/projects</span> <span style="color:#cc6666;">git:(main)</span> <span style="color:#fff">❯</span> <span style="color:#fff">brew install neovim</span></div>
      <div id="bzsh-file" style="color:#81a2be">==> Pouring neovim--0.9.5.arm64_sonoma.bottle.tar.gz</div>
      <div style="height:14px"></div>
      <div>↻ Installing… <span id="bzsh-bar" style="color:#b5bd68"></span><span id="bzsh-empty" style="color:#373b41"></span> <span id="bzsh-pct" style="color:#b5bd68">0%</span></div>
      <div style="height:14px"></div>
      <div><span style="color:#b294bb;">~/projects</span> <span style="color:#cc6666;">git:(main)</span> ❯<span style="background:#c5c8c6;color:#1d1f21;">&nbsp;</span></div>
    `;
    const barEl = canvas.querySelector('#bzsh-bar');
    const emptyEl = canvas.querySelector('#bzsh-empty');
    const pctEl = canvas.querySelector('#bzsh-pct');
    const fileEl = canvas.querySelector('#bzsh-file');
    const lines = [
      '==> Pouring neovim--0.9.5.arm64_sonoma.bottle.tar.gz',
      '==> /opt/homebrew/Cellar/neovim/0.9.5/bin/nvim',
      '==> Caveats',
      '==> Summary',
      '🍺  /opt/homebrew/Cellar/neovim/0.9.5: 1,623 files, 23.2MB',
    ];
    return {
      update(pct) {
        const total = 30;
        const filled = Math.floor((pct/100) * total);
        barEl.textContent = '━'.repeat(filled);
        emptyEl.textContent = '─'.repeat(total - filled);
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = lines[Math.min(lines.length-1, Math.floor((pct/100)*lines.length))];
      }
    };
  }
});
