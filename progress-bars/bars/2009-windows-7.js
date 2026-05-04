/* 2009 - Windows 7 - Aero refined, the green-bar hero shot (GUI) */
PBH.registerBar({
  year: 2009, yearLabel: '2009',
  name: 'Microsoft Windows 7',
  type: 'gui',
  mount(canvas) {
    Object.assign(canvas.style, {
      background: 'linear-gradient(180deg, #6cb9f6 0%, #1c69d4 100%)',
      padding: '40px',
      fontFamily: '"Segoe UI", "Tahoma", sans-serif',
    });
    canvas.innerHTML = `
      <div style="width:540px; margin:60px auto; background: rgba(245,250,255,0.94); border: 1px solid rgba(255,255,255,0.7); border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.6); overflow:hidden;">
        <div style="background: linear-gradient(180deg, rgba(220,235,255,0.85), rgba(180,210,245,0.85)); padding: 8px 14px; color: #000; display:flex; align-items:center; font-size: 12px; border-bottom: 1px solid rgba(0,0,0,0.1);">
          <span style="flex:1;">Copying 1,247 items (4.32 GB)</span>
          <span style="display:flex; gap:5px;">
            <span style="display:inline-block;width:18px;height:14px;border:1px solid #888;border-radius:2px;background:#eaf2ff;font-size:10px;text-align:center;line-height:12px;">_</span>
            <span style="display:inline-block;width:18px;height:14px;border:1px solid #888;border-radius:2px;background:#eaf2ff;font-size:10px;text-align:center;line-height:12px;">□</span>
            <span style="display:inline-block;width:18px;height:14px;border:1px solid #c00;border-radius:2px;background:#f88;font-size:10px;text-align:center;line-height:12px;color:#fff;">x</span>
          </span>
        </div>
        <div style="padding: 22px 22px 20px;">
          <div style="font-size:13px; color:#000; margin-bottom:4px;" id="bw7-status">Copying from <i>Documents</i> (C:) to <i>Backup</i> (D:)</div>
          <div style="font-size:11px; color:#444; margin-bottom: 18px;" id="bw7-file">Quarterly_Report_Q3.docx</div>
          <div style="background: #fff; border:1px solid #888; border-radius: 4px; height:22px; padding: 1px; position:relative; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);">
            <div id="bw7-fill" style="height:100%; width:0%; background: linear-gradient(180deg, #c8f088 0%, #8fc850 35%, #5ca838 100%); border-radius:2px; position:relative; overflow:hidden; transition: width 0.05s linear; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);">
              <div style="position:absolute; inset:0; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%); animation: pbh-vista-pulse 1.8s ease-in-out infinite;"></div>
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-top:10px; color:#000;">
            <span id="bw7-rem">About 12 seconds remaining</span>
            <span id="bw7-pct">0%</span>
          </div>
        </div>
      </div>
    `;
    const fillEl = canvas.querySelector('#bw7-fill');
    const pctEl = canvas.querySelector('#bw7-pct');
    const fileEl = canvas.querySelector('#bw7-file');
    const remEl = canvas.querySelector('#bw7-rem');
    const files = ['Quarterly_Report_Q3.docx', 'Vacation_2008.zip', 'Family_Photo.jpg', 'expenses.xlsx', 'design.psd', 'install.exe'];
    return {
      update(pct) {
        fillEl.style.width = pct + '%';
        pctEl.textContent = Math.floor(pct) + '%';
        fileEl.textContent = files[Math.min(files.length-1, Math.floor((pct/100)*files.length))];
        const sec = Math.max(0, Math.ceil((100 - pct) / 10));
        remEl.textContent = pct < 100 ? `About ${sec} seconds remaining` : 'Complete';
      }
    };
  }
});
