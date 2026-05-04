/* 1989 - NeXTSTEP (GUI) */
PBH.registerBar({
  year: 1989, yearLabel: '1989',
  name: 'NeXTSTEP',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#3a3a3a',
      backgroundImage: 'radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)',
      backgroundSize: '3px 3px',
      padding: '40px',
      fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
    });
    canvas.innerHTML = `
      <div style="background:#a4a4a4; border-top:1px solid #ddd; border-left:1px solid #ddd; border-bottom:2px solid #1a1a1a; border-right:2px solid #1a1a1a; width:520px; margin:90px auto;">
        <div style="background: linear-gradient(180deg, #d4d4d4 0%, #888 100%); padding:6px 12px; font-size:13px; color:#000; font-weight:bold; border-bottom:1px solid #444; display:flex; align-items:center;">
          <div style="width:14px; height:14px; background:#888; border:1px solid #000; margin-right:10px; box-shadow: inset 1px 1px 0 #ccc;"></div>
          <span>Workspace Manager - Installer</span>
        </div>
        <div style="padding:36px 32px;">
          <div style="font-size:13px; color:#000; margin-bottom:8px;">Copying files to /LocalApps…</div>
          <div style="font-size:11px; color:#222; margin-bottom:20px;" id="b89-file">Mail.app</div>
          <div style="border-top:2px solid #1a1a1a; border-left:2px solid #1a1a1a; border-bottom:1px solid #ddd; border-right:1px solid #ddd; height:20px; background:#666; position:relative; overflow:hidden;">
            <div id="b89-fill" style="height:100%; background: linear-gradient(180deg, #889ed8 0%, #4860a8 50%, #2c3870 100%); width:0%; transition: width 0.05s linear; box-shadow: inset 0 -3px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);"></div>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#b89-fill');
    const fileEl = canvas.querySelector('#b89-file');
    const files = ['Mail.app', 'Edit.app', 'Terminal.app', 'Workspace.app', 'Preview.app', 'Webster.app'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        fileEl.textContent = files[Math.min(files.length - 1, Math.floor((pct / 100) * files.length))];
      }
    };
  }
});
