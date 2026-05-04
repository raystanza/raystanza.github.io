/* 1977 - Commodore BASIC (PETSCII) */
PBH.registerBar({
  year: 1977, yearLabel: '1977',
  name: 'Commodore BASIC · PETSCII',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background:'#3526a8', padding:'30px',
      fontFamily:'"Courier New", monospace',
      fontSize:'19px', lineHeight:'1.5',
    });
    canvas.innerHTML = `
      <div style="
        background:#3526a8; border:18px solid #6f5dec; height:100%;
        padding:22px 28px; color:#a59cff;
      ">
        <div style="text-align:center; letter-spacing:1px;">**** COMMODORE 64 BASIC V2 ****</div>
        <div style="height:14px"></div>
        <div>64K RAM SYSTEM  38911 BASIC BYTES FREE</div>
        <div style="height:14px"></div>
        <div>READY.</div>
        <div>LOAD "WIZARDRY",8,1</div>
        <div style="height:6px"></div>
        <div>SEARCHING FOR WIZARDRY</div>
        <div id="b77c-status">LOADING</div>
        <div style="height:14px"></div>
        <div>[<span id="b77c-bar"></span><span id="b77c-empty" style="color:#5b4ed4"></span>] <span id="b77c-pct">  0</span>%</div>
        <div style="height:14px"></div>
        <div>READY.</div>
        <div><span id="b77c-cur" style="background:#a59cff;color:#3526a8">&nbsp;</span></div>
      </div>`;
    const barEl=canvas.querySelector('#b77c-bar'), emptyEl=canvas.querySelector('#b77c-empty');
    const pctEl=canvas.querySelector('#b77c-pct'), statusEl=canvas.querySelector('#b77c-status');
    const cur=canvas.querySelector('#b77c-cur');
    const blink=setInterval(()=>cur.style.visibility=cur.style.visibility==='hidden'?'visible':'hidden',400);
    return {
      update(pct){
        const total=28, filled=Math.floor((pct/100)*total);
        barEl.textContent='\u2588'.repeat(filled);
        emptyEl.textContent='\u2592'.repeat(total-filled);
        pctEl.textContent=String(Math.floor(pct)).padStart(3,' ');
        statusEl.textContent = pct < 100 ? 'LOADING' : 'LOADED';
      },
      unmount(){clearInterval(blink);}
    };
  }
});
