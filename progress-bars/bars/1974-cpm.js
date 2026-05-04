/* 1974 - CP/M · Console Command Processor */
PBH.registerBar({
  year: 1974, yearLabel: '1974',
  name: 'CP/M · Console Command Processor',
  type: 'cli',
  mount(canvas) {
    canvas.classList.add('crt');
    Object.assign(canvas.style, {
      background:'#000', color:'#e0e0e0',
      fontFamily:'"Courier New", monospace',
      fontSize:'20px', padding:'40px', lineHeight:'1.5',
    });
    canvas.innerHTML = `
      <div>CP/M VER 1.4</div>
      <div>61K TPA</div>
      <div style="height:18px"></div>
      <div>A&gt;<span style="color:#fff">PIP B:=A:*.*[V]</span></div>
      <div id="b74-file" style="color:#aaa">COPYING - STARTUP.SUB</div>
      <div style="height:14px"></div>
      <div>[<span id="b74-bar"></span><span id="b74-empty" style="color:#444"></span>] <span id="b74-pct">  0</span>%</div>
      <div style="height:18px"></div>
      <div>A&gt;<span id="b74-cur" style="background:#e0e0e0;color:#000">_</span></div>`;
    const barEl=canvas.querySelector('#b74-bar'), emptyEl=canvas.querySelector('#b74-empty');
    const pctEl=canvas.querySelector('#b74-pct'), fileEl=canvas.querySelector('#b74-file');
    const cur=canvas.querySelector('#b74-cur');
    const blink=setInterval(()=>cur.style.visibility=cur.style.visibility==='hidden'?'visible':'hidden',500);
    const files=['STARTUP.SUB','PIP.COM','STAT.COM','ED.COM','ASM.COM','DDT.COM','SUBMIT.COM'];
    return {
      update(pct) {
        const total=32, filled=Math.floor((pct/100)*total);
        barEl.textContent='='.repeat(filled);
        emptyEl.textContent=' '.repeat(total-filled);
        pctEl.textContent=String(Math.floor(pct)).padStart(3,' ');
        fileEl.textContent='COPYING - '+files[Math.min(files.length-1,Math.floor((pct/100)*files.length))];
      },
      unmount(){clearInterval(blink);}
    };
  }
});
