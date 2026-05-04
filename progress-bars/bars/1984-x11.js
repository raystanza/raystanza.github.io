/* 1984 - MIT X Window System (X11) - twm-era look (GUI) */
PBH.registerBar({
  year: 1984, yearLabel: '1984',
  name: 'MIT X Window System · X11',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#5c8aa6',
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 4px)',
      padding: '40px',
      fontFamily: '"Courier New", "Liberation Mono", monospace',
    });
    canvas.innerHTML = `
      <div style="background:#cccccc; border: 2px solid #000; box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #555; width:560px; margin:60px auto;">
        <div style="background:#000; color:#fff; padding:3px 10px; font-size:12px; display:flex; justify-content:space-between; font-family: monospace;">
          <span>xinstall@athena.mit.edu</span>
          <span>[twm]</span>
        </div>
        <div style="padding:22px; color:#000;">
          <div style="font-size:12px; margin-bottom:8px;">Compiling X11R3 release …</div>
          <div style="font-size:11px; color:#222; margin-bottom: 18px;" id="bx11-file">imake -DUseInstalled .</div>
          <div style="border-top:2px solid #555; border-left:2px solid #555; border-bottom:2px solid #fff; border-right:2px solid #fff; height:20px; background:#fff; position:relative;">
            <div id="bx11-fill" style="height:100%; width:0%; background:#444; transition: width 0.05s linear;"></div>
          </div>
          <div style="font-size:11px; color:#000; margin-top:10px; text-align:right;" id="bx11-pct">0%</div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bx11-fill');
    const pctEl = canvas.querySelector('#bx11-pct');
    const fileEl = canvas.querySelector('#bx11-file');
    const lines = ['imake -DUseInstalled .', 'cc -c Xlib.c', 'cc -c Xt.c', 'cc -c Xaw.c', 'ld -o xterm', 'install xterm /usr/bin/X11'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = lines[Math.min(lines.length-1, Math.floor((pct/100)*lines.length))];
      }
    };
  }
});
