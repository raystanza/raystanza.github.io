/* 1977 - AppleSoft BASIC (Apple II) */
PBH.registerBar({
  year: 1977, yearLabel: '1977',
  name: 'AppleSoft BASIC · Apple II',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background:'#000', color:'#41ff41',
      fontFamily:'"Courier New", monospace',
      fontSize:'20px', padding:'40px', lineHeight:'1.55',
      textShadow:'0 0 4px rgba(65,255,65,0.7)',
    });
    canvas.innerHTML = `
      <div>APPLE ][</div>
      <div style="height:18px"></div>
      <div>]<span>LOAD "APPLEWRITER",D1</span></div>
      <div>READING DISK ][</div>
      <div id="b77a-track" style="color:#41ff41">TRACK 00 / 35</div>
      <div style="height:18px"></div>
      <div>[<span id="b77a-bar"></span><span id="b77a-empty" style="color:#173">]</span> <span id="b77a-pct">  0</span>%</div>
      <div style="height:18px"></div>
      <div>]<span id="b77a-cur" style="background:#41ff41;color:#000">_</span></div>`;
    const barEl=canvas.querySelector('#b77a-bar'), emptyEl=canvas.querySelector('#b77a-empty');
    const pctEl=canvas.querySelector('#b77a-pct'), trackEl=canvas.querySelector('#b77a-track');
    const cur=canvas.querySelector('#b77a-cur');
    const blink=setInterval(()=>cur.style.visibility=cur.style.visibility==='hidden'?'visible':'hidden',500);
    return {
      update(pct){
        const total=28, filled=Math.floor((pct/100)*total);
        barEl.textContent='*'.repeat(filled);
        emptyEl.textContent='.'.repeat(total-filled)+']';
        pctEl.textContent=String(Math.floor(pct)).padStart(3,' ');
        trackEl.textContent='TRACK '+String(Math.floor((pct/100)*35)).padStart(2,'0')+' / 35';
      },
      unmount(){clearInterval(blink);}
    };
  }
});
