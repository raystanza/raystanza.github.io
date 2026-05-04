/* 1999 - GNOME 1.0 - Gtk+ + Imlib retro pastel (GUI) */
PBH.registerBar({
  year: 1999, yearLabel: '1999',
  name: 'GNOME 1.0',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#406080',
      backgroundImage: 'linear-gradient(135deg, #506990 0%, #2a4060 100%)',
      padding: '40px',
      fontFamily: '"Helvetica", "Arial", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:560px; margin:60px auto; background:#dcdad5; border:2px solid #5a5a5a; box-shadow: 3px 3px 0 rgba(0,0,0,0.4);">
        <div style="background: linear-gradient(180deg, #888 0%, #555 100%); color:#fff; padding:4px 10px; font-size:12px; font-weight:bold;">GNOME File Manager - gmc</div>
        <div style="padding:22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying files…</div>
          <div style="font-size:11px; color:#444; margin-bottom: 18px;" id="bg1-file">~/.gnome/panel.conf</div>
          <div style="border:2px inset #888; height: 18px; background:#fff;">
            <div id="bg1-fill" style="height:100%; width:0%; background: repeating-linear-gradient(90deg, #4060a0 0 6px, #5074b8 6px 12px); transition: width 0.05s linear;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>GNOME 1.0 (Bouncing Bonobo)</span>
            <span id="bg1-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bg1-fill');
    const pctEl = canvas.querySelector('#bg1-pct');
    const fileEl = canvas.querySelector('#bg1-file');
    const files = ['~/.gnome/panel.conf', '/usr/share/gnome/help/users-guide', '/usr/lib/libgtk-1.2.so.0', '/usr/share/pixmaps/foot.png', '/usr/bin/gnome-session'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
