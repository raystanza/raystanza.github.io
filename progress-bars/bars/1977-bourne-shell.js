/* 1977 - Bourne shell · UNIX v7 */
PBH.registerBar({
  year: 1977, yearLabel: '1977',
  name: 'Bourne shell (sh)',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background:'#0a0a0a', color:'#f0f0e0',
      fontFamily:'"Courier New", monospace',
      fontSize:'20px', padding:'40px', lineHeight:'1.55',
    });
    canvas.innerHTML = `
      <div style="color:#aaa">Version 7 UNIX (Bell Labs)</div>
      <div style="height:14px"></div>
      <div>$ tar xvf - &lt; /dev/rmt0</div>
      <div id="b77b-file" style="color:#bbb">x usr/src/cmd/sh.c, 24064 bytes</div>
      <div style="height:14px"></div>
      <div>[<span id="b77b-bar"></span><span id="b77b-empty" style="color:#333"></span>] <span id="b77b-pct">  0</span>%</div>
      <div style="height:14px"></div>
      <div>$<span id="b77b-cur" style="background:#f0f0e0;color:#0a0a0a">_</span></div>`;
    const barEl=canvas.querySelector('#b77b-bar'), emptyEl=canvas.querySelector('#b77b-empty');
    const pctEl=canvas.querySelector('#b77b-pct'), fileEl=canvas.querySelector('#b77b-file');
    const cur=canvas.querySelector('#b77b-cur');
    const blink=setInterval(()=>cur.style.visibility=cur.style.visibility==='hidden'?'visible':'hidden',500);
    const files=['cmd/sh.c','cmd/cat.c','cmd/ls.c','cmd/cp.c','cmd/mv.c','cmd/awk/main.c','sys/conf.c'];
    return {
      update(pct){
        const total=32, filled=Math.floor((pct/100)*total);
        barEl.textContent='#'.repeat(filled);
        emptyEl.textContent='-'.repeat(total-filled);
        pctEl.textContent=String(Math.floor(pct)).padStart(3,' ');
        const f=files[Math.min(files.length-1,Math.floor((pct/100)*files.length))];
        fileEl.textContent='x usr/src/'+f+', '+(2048+Math.floor(Math.random()*30000))+' bytes';
      },
      unmount(){clearInterval(blink);}
    };
  }
});
