/* 1987 - Acorn Arthur / RISC OS - colourful Iconbar look (GUI) */
PBH.registerBar({
  year: 1987, yearLabel: '1987',
  name: 'Acorn Arthur · RISC OS',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#bbbbbb',
      backgroundImage: 'repeating-linear-gradient(0deg, #b8b8b8 0 2px, #ababab 2px 4px)',
      padding: '40px',
      fontFamily: '"Trinity", "Times New Roman", serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:50px auto; background: #ddddee; border:2px solid #444; box-shadow: 3px 3px 0 #555; border-radius: 6px; overflow:hidden;">
        <div style="background: linear-gradient(180deg, #f4f4ff 0%, #aabbcc 100%); padding:4px 12px; font-size:12px; color:#000; border-bottom: 1px solid #888; display:flex; justify-content:space-between;">
          <span>Drag · Filer</span>
          <span style="display:flex; gap:4px;">
            <span style="display:inline-block;width:12px;height:12px;background:#f55;border:1px solid #000;border-radius:2px;"></span>
            <span style="display:inline-block;width:12px;height:12px;background:#fc0;border:1px solid #000;border-radius:2px;"></span>
            <span style="display:inline-block;width:12px;height:12px;background:#5c5;border:1px solid #000;border-radius:2px;"></span>
          </span>
        </div>
        <div style="padding:22px; color:#000;">
          <div style="font-size:13px; margin-bottom:6px;">Copying ADFS::HardDisc4.$.Apps</div>
          <div style="font-size:11px; color:#444; margin-bottom: 18px;" id="briscos-file">!Paint</div>
          <div style="border: 1px solid #444; height:16px; background:#fff; padding:1px; border-radius:3px;">
            <div id="briscos-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #6cf, #36c); transition: width 0.05s linear; border-radius: 2px;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px;">
            <span>Acorn Archimedes</span>
            <span id="briscos-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#briscos-fill');
    const pctEl = canvas.querySelector('#briscos-pct');
    const fileEl = canvas.querySelector('#briscos-file');
    const files = ['!Paint', '!Draw', '!Edit', '!Maestro', '!Lander', '!Configure'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
      }
    };
  }
});
