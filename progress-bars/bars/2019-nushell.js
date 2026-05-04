/* 2019 - Nushell - pipe-DataFrames-not-strings (CLI) */
PBH.registerBar({
  year: 2019, yearLabel: '2019',
  name: 'Nushell · structured shell',
  type: 'cli',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: '#181c20',
      color: '#dadada',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: '16px',
      padding: '40px',
      lineHeight: '1.5',
    });
    canvas.innerHTML = `
      <div style="color:#6cbf6c; font-weight:bold;">nu - A new type of shell.</div>
      <div style="height:14px"></div>
      <div><span style="color:#6cbf6c;">~/data</span> <span style="color:#fff">›</span> <span style="color:#fff">open big.csv | where price &gt; 100 | sort-by date | save out.json</span></div>
      <div style="height:8px"></div>
      <div style="background:#22272d; padding:8px 12px; border-left: 3px solid #6cbf6c; color:#dadada; font-size:13px; margin: 8px 0; line-height:1.5;">
        <div style="display:flex; justify-content:space-between; color:#aaa; margin-bottom:4px;">
          <span>parsing → filtering → sorting → writing</span>
          <span id="bnu-step">1 / 4</span>
        </div>
        <div style="background:#0d1014; border-radius:4px; height:6px; overflow:hidden;">
          <div id="bnu-fill" style="height:100%; width:0%; background: linear-gradient(90deg, #6cbf6c, #56b6c2); transition: width 0.05s linear; border-radius:4px;"></div>
        </div>
      </div>
      <div style="font-size:12px; color:#888;" id="bnu-rows">rows processed: 0 / 1,200,000</div>
      <div style="height:14px"></div>
      <div><span style="color:#6cbf6c;">~/data</span> ›<span style="background:#dadada;color:#181c20;">&nbsp;</span></div>
    `;
    const fillEl = canvas.querySelector('#bnu-fill');
    const stepEl = canvas.querySelector('#bnu-step');
    const rowsEl = canvas.querySelector('#bnu-rows');
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        const step = 1 + Math.min(3, Math.floor((pct/100)*4));
        stepEl.textContent = `${step} / 4`;
        const rows = Math.floor((pct/100)*1200000).toLocaleString();
        rowsEl.textContent = `rows processed: ${rows} / 1,200,000`;
      }
    };
  }
});
