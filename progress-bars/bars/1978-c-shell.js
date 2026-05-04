/* 1978 - C shell (csh) */
PBH.registerBar({
  year: 1978, yearLabel: '1978',
  name: 'C shell (csh)',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background:'#0a0a0a', color:'#f0f0e0',
      fontFamily:'"Courier New", monospace',
      fontSize:'20px', padding:'40px', lineHeight:'1.55',
    });
    canvas.innerHTML = `
      <div style="color:#aaa">2.9BSD csh - University of California, Berkeley</div>
      <div style="height:14px"></div>
      <div>vax% foreach f (*.c)</div>
      <div>foreach? cc -O $f</div>
      <div>foreach? end</div>
      <div id="b78-file" style="color:#bbb">compiling pathname.c</div>
      <div style="height:14px"></div>
      <div>[<span id="b78-bar"></span><span id="b78-empty" style="color:#333"></span>] <span id="b78-pct">  0</span>%</div>
      <div style="height:14px"></div>
      <div>vax%<span id="b78-cur" style="background:#f0f0e0;color:#0a0a0a">_</span></div>`;
    const barEl=canvas.querySelector('#b78-bar'), emptyEl=canvas.querySelector('#b78-empty');
    const pctEl=canvas.querySelector('#b78-pct'), fileEl=canvas.querySelector('#b78-file');
    const cur=canvas.querySelector('#b78-cur');
    const blink=setInterval(()=>cur.style.visibility=cur.style.visibility==='hidden'?'visible':'hidden',500);
    const files=['pathname.c','expand.c','glob.c','history.c','set.c','dir.c','time.c','jobs.c'];
    return {
      update(pct){
        const total=30, filled=Math.floor((pct/100)*total);
        barEl.textContent='='.repeat(filled);
        emptyEl.textContent='.'.repeat(total-filled);
        pctEl.textContent=String(Math.floor(pct)).padStart(3,' ');
        fileEl.textContent='compiling '+files[Math.min(files.length-1,Math.floor((pct/100)*files.length))];
      },
      unmount(){clearInterval(blink);}
    };
  }
});
