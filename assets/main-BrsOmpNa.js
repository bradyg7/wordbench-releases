(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`## Moved or removed

Nothing was moved or removed.

## New

- Bible Workbench now installs with a Windows installer and can be updated from its release page.

## Changed

## Fixed

## Your study folder

Nothing in your study folder changes.
`,t=`## Moved or removed

Nothing was moved or removed.

## New

- An installed copy opens the study folder you choose, including your own folder of real study.

## Changed

## Fixed

- Panes (the Notebook, the Concordance, Documents and the rest) could open into a column too narrow to see, when the window had kept a column dragged to its edge. A column now never opens or is dragged narrower than its minimum.

## Your study folder

Nothing in your study folder changes.
`,n=`## Moved or removed

- The pencil and the old margin are gone; marks and the new margin replace them.
- The rail's Highlights is now the Legend.
- Selecting words no longer shows Look up, Notes & lookup or Question. Click a word or use the interlinear to look one up; a question written in a page or a margin note is found by itself.
- A folder's color is no longer drawn on the words. It shows as a small tab beside the verse number.

## New

- Marks: highlight, underline (one, two or three lines), circle, box and arrow, in any color.
- The mark bar: select words, or click a verse number (shift-click for a span), and a small bar of icons appears above them. Each kind opens its styles by name. A new color is a new pen, named as you make it.
- The legend: what each of your styles means, with quick styles, Ctrl+1 to Ctrl+9 keys, and where each style is used.
- The margin: a column beside the text for your notes on a verse, a span or the chapter. It can shrink to small signs, and a note can grow into a page.
- Right-click a selection for the same actions as a menu. Copy and Open as a tab are in the bar.
- A mark's card: click a marked word to change or delete its marks, with Undo.
- Marks and margin notes in the Notebook's search, and on a verse's card.
- Colors across the Bible: where each of your styles or folders appears, chapter by chapter.
- On a phone, the bar's choices open as sheets.

## Changed

- The reader draws every mark in a fixed order, so years of marks stay readable. A marks menu hides or shows each kind and style, and Reading mode shows the plain text.

## Fixed

## Your study folder

- Your highlights have moved from \`highlights/\` into \`marks/\`, one file per book. The old files are kept whole in \`.archive/highlights/\`.
- If you used the pencil, its lines become grey underlines. Old pencil files are kept whole in \`.archive/pencil/\`.
- The legend is kept in \`settings/legend.json\`, and margin notes in \`margin/<book>/<chapter>.md\`.
- A copy of a study folder that still has \`highlights/\` is moved with \`wb study move-marks --dry-run\`, then \`--go\`, after a backup.
`,r=`## Moved or removed

## New

- Wordbench for Mac: one download for Apple silicon and Intel Macs, macOS 11 or newer. The website's Download page has it, with a guide for the first open.

## Changed

- On a Mac, the app keeps its own data in ~/Library/Application Support; on Windows nothing moves.
- "Show in folder" opens Finder on a Mac.

## Fixed

## Your study folder

Nothing changes in your study folder.
`,i=`## Moved or removed

- The window that popped up to say a new version was ready is gone.

## New

- Updates in Settings: the installed version, when the app last looked, Check now, and the newest version with Install.
- A dot on the Settings gear says a new version is ready. Rest on the gear to see which one.
- "Look for updates": when the app opens (the default), or only when you ask.

## Changed

- Before restarting into a new version, the app saves every open page, and does not restart if one cannot be saved.

## Fixed

## Your study folder

Nothing changes in your study folder.
`,a=`https://github.com/bradyg7/wordbench-releases/releases/`,o=`${a}latest/download/Bible-Workbench-setup.exe`,s=`${a}latest/download/Wordbench-mac.dmg`;function c(e){if(!e||typeof e!=`object`||Array.isArray(e)||e.schemaVersion!==2)throw Error(`Unsupported release metadata.`);if(e.status===`unavailable`)return{schemaVersion:2,status:`unavailable`};if(e.status!==`published`)throw Error(`This release is not published.`);for(let t of[`version`,`publishedAt`,`minimumWindows`,`downloadUrl`])if(typeof e[t]!=`string`||!e[t].trim())throw Error(`Missing release field: ${t}.`);if(!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(e.version))throw Error(`Invalid release version.`);if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(e.publishedAt)||!Number.isFinite(Date.parse(e.publishedAt)))throw Error(`Invalid publication date.`);if(e.bytes!==void 0&&(!Number.isSafeInteger(e.bytes)||e.bytes<=0))throw Error(`Invalid installer size.`);if(e.downloadUrl!==`https://github.com/bradyg7/wordbench-releases/releases/latest/download/Bible-Workbench-setup.exe`&&e.downloadUrl!==`https://github.com/bradyg7/wordbench-releases/releases/download/v${e.version}/Bible-Workbench-setup.exe`)throw Error(`Invalid download link.`);if(e.mac!==void 0&&typeof e.mac!=`boolean`)throw Error(`Invalid Mac flag.`);if(e.macBytes!==void 0&&(!Number.isSafeInteger(e.macBytes)||e.macBytes<=0))throw Error(`Invalid Mac installer size.`);let t={};for(let n of[`schemaVersion`,`status`,`version`,`publishedAt`,`bytes`,`downloadUrl`,`minimumWindows`,`mac`,`macBytes`])e[n]!==void 0&&(t[n]=e[n]);return t}var l=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),u=e=>l(e).replace(/`([^`]+)`/g,`<code>$1</code>`).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`);function d(e,t=3){let n=[],r=!1,i=[],a=()=>{i.length&&n.push(`<p>${u(i.join(` `))}</p>`),i=[]},o=()=>{r&&n.push(`</ul>`),r=!1};for(let s of e.replace(/\r/g,``).split(`
`)){let e=s.trimEnd(),c=/^(#{1,6})\s+(.*)$/.exec(e),l=/^\s*[-*]\s+(.*)$/.exec(e);if(c){a(),o();let e=Math.min(6,t+c[1].length-2);n.push(`<h${e}>${u(c[2])}</h${e}>`)}else l?(a(),r||n.push(`<ul>`),r=!0,n.push(`<li>${u(l[1])}</li>`)):e.trim()?(o(),i.push(e.trim())):(a(),o())}return a(),o(),n.join(`
`).replace(/<h(\d)>[^\n]*<\/h\1>(?:\n(?=<h\d>)|\n?$)/g,``)}function f(e){return e.split(`-`)[0].split(`.`).map(Number)}function p(e,t){let n=f(e),r=f(t);for(let e=0;e<3;e++)if((n[e]??0)!==(r[e]??0))return(n[e]??0)-(r[e]??0);return 0}var m=Object.assign({"../../docs/releases/0.1.0.md":e,"../../docs/releases/0.1.1.md":t,"../../docs/releases/0.2.0.md":n,"../../docs/releases/0.2.1.md":r,"../../docs/releases/0.2.2.md":i}),h=`/wordbench-releases/`.replace(/\/$/,``),g=e=>h+e,_=location.pathname.slice(location.pathname.startsWith(h)?h.length:0).replace(/\/index\.html$/,`/`).replace(/\/$/,``)||`/`,v=[[`/`,`Overview`],[`/download/`,`Download`],[`/releases/`,`Releases`],[`/support/`,`Help`]],y={"/":`Wordbench`,"/download":`Get Wordbench.`,"/releases":`Releases`,"/support":`Help`,"/privacy":`Privacy`}[_]??`Page not found.`;document.title=_===`/`?`Wordbench — Study the text for yourself.`:`${y.replace(/\.$/,``)} — Wordbench`;var b=document.querySelector(`#app`);b.innerHTML=`
  <a class="skip" href="#main">Skip to content</a>
  <header class="wrap masthead"><a class="brand" href="${g(`/`)}">Wordbench</a>
    <nav aria-label="Main navigation">${v.map(([e,t])=>`<a href="${g(e)}" ${_===(e.replace(/\/$/,``)||`/`)?`aria-current="page"`:``}>${t}</a>`).join(``)}</nav>
  </header>
  <main id="main" class="wrap"><h1>${y}</h1><div id="content"></div></main>
  <footer class="wrap"><p>Wordbench<span>Read, look closely, and keep your own work.</span></p><nav aria-label="Footer"><a href="${g(`/privacy/`)}">Privacy</a><a href="${g(`/support/`)}">Help</a></nav></footer>`;var x=document.querySelector(`#content`),S=`Not yet tried on a real Mac.`,C=`The Mac version is coming with the next release.`,w=`<a class="button" href="${o}">Download for Windows</a>`;function T(){return`<p class="lead">Each version's notes, newest first.</p><section class="release-notes-page">${Object.entries(m).map(([e,t])=>({version:/([^/]+)\.md$/.exec(e)[1],text:t})).sort((e,t)=>p(t.version,e.version)).map(({version:e,text:t},n)=>`<details id="v${e}"${n===0?` open`:``}><summary><h2>${e}</h2></summary>${d(t)}</details>`).join(``)}</section>`}x.innerHTML={"/":`<section class="intro"><p class="lead"><em>Study the text for yourself.</em></p><p class="measure">Read the King James Bible, look closely at its words, and keep your own work beside it.</p><div class="actions">${w}</div><p class="quiet">Free, for Windows and Mac.</p><p class="mac-link"><a id="mac-link" href="https://github.com/bradyg7/wordbench-releases/releases/latest/download/Wordbench-mac.dmg" hidden>Download for Mac</a></p></section>
    <section class="features" aria-label="What Wordbench does"><div class="feature-list"><article><span class="number">01</span><div><h3>Read and look closely.</h3><p>Search, the Strong's concordance, the interlinear and word lookups, one click from the text.</p></div></article><article><span class="number">02</span><div><h3>Mark the text as you would on paper.</h3><p>Highlights, underlines, circles, arrows and margin notes, with your own legend for what each means.</p></div></article><article><span class="number">03</span><div><h3>Your work stays yours.</h3><p>Pages, folders and marks are plain files in a folder you choose. Nothing is uploaded.</p></div></article></div></section>
    <section class="ownership"><h2><em>The sources in view.<br>The conclusions are yours.</em></h2><p>The app shows the text, its words and what you write. It never supplies interpretation.</p></section>`,"/download":`<div id="release" class="release-box" aria-live="polite"><p>Checking the newest version…</p></div>
    <section class="prose"><h2>Installing</h2><p>Run the file. Windows may say “Windows protected your PC”: choose <strong>More info</strong>, then <strong>Run anyway</strong>. This appears because the app is new and not yet signed.</p>
    <div class="warning-art" role="img" aria-label="Example of the Windows warning: the More info link, then the Run anyway button"><div class="bar">Windows protected your PC</div><div class="body">Microsoft Defender SmartScreen prevented an unrecognized app from starting. <span class="more hot">More info</span></div><div class="row"><span class="hot">Run anyway</span><span>Don't run</span></div></div><p class="release-note">An example of the warning, drawn here.</p>
    <h2>Updates</h2><p>The app checks when it opens and offers each new version. Your study folder is never touched by an update.</p>
    <h2>Mac</h2><div id="mac"><p>${C}</p></div></section>`,"/releases":T(),"/privacy":`<section class="prose"><p>The app sends nothing about your study anywhere. It asks GitHub for the newest version when it opens, which sends what any web request sends (your address), and nothing else.</p><p>This website has no accounts, analytics or cookies; it is hosted by GitHub Pages, which keeps ordinary request logs.</p></section>`,"/support":`<section class="prose"><h2>Back up your study folder</h2><p>Your study is a folder you chose when you set the app up. Copy that whole folder to another disk or a cloud drive now and then, and before you install an update. The installer and updates never touch it.</p><h2>When you report a problem</h2><p>Say which version of Wordbench you have, which version of Windows, and what you were doing. Never send your study files.</p><h2>To reach someone</h2><p>Ask the person who sent you the link.</p></section>`}[_]??`<p>This page does not exist. <a href="${g(`/`)}">Return to the overview.</a></p>`;var E=`<p class="release-note">macOS 11 or newer · Apple silicon and Intel</p><p class="mac-untried"><strong>${S}</strong></p>
  <ol class="mac-guide">
    <li><p>Open the <code>.dmg</code>, drag Wordbench into Applications.</p></li>
    <li><p>Open Wordbench. macOS says it could not verify it: choose <strong>Done</strong> (not Move to Bin).</p>
      <div class="warning-art mac-art" role="img" aria-label="Example of the Mac alert: Apple could not verify Wordbench is free of malware, with the Done button"><div class="body"><strong>“Wordbench” Not Opened</strong><br>Apple could not verify “Wordbench” is free of malware that may harm your Mac or compromise your privacy.</div><div class="row"><span>Move to Bin</span><span class="hot">Done</span></div></div><p class="release-note">An example, drawn here.</p></li>
    <li><p>Open <strong>System Settings → Privacy &amp; Security</strong>, scroll down, choose <strong>Open Anyway</strong> beside the Wordbench line, confirm with your password or Touch ID. (On macOS 15 and later, right-click → Open no longer skips this.)</p>
      <div class="warning-art mac-art" role="img" aria-label="Example of Privacy and Security: Wordbench was blocked to protect your Mac, with the Open Anyway button"><div class="bar">Privacy &amp; Security</div><div class="body">“Wordbench” was blocked to protect your Mac.</div><div class="row"><span class="hot">Open Anyway</span></div></div><p class="release-note">An example, drawn here.</p></li>
    <li><p>It opens from then on like any app. Updates arrive inside the app and need none of this.</p></li>
  </ol>`,D=e=>`${Math.round(e/1048576)} MB`,O=e=>new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`,timeZone:`UTC`});async function k(){let e=document.querySelector(`#release`),t=document.querySelector(`#mac`),n=document.querySelector(`#mac-link`);if(!e&&!n)return;let r=()=>{e&&(e.innerHTML=`<h2>Not available right now</h2><p>Please try again later.</p>`)};try{let i=await fetch(g(`/release.json`),{cache:`no-store`,signal:AbortSignal.timeout(1e4)});if(!i.ok)throw Error(`Release information unavailable.`);let a=c(await i.json());if(a.status===`unavailable`)return r();if(a.mac&&(n&&(n.hidden=!1),t)){let e=document.createElement(`a`);e.className=`button`,e.href=s,e.textContent=`Download for Mac`,t.replaceChildren(e),t.insertAdjacentHTML(`beforeend`,E),a.macBytes&&(t.querySelector(`.release-note`).textContent+=` · ${D(a.macBytes)}`)}if(!e)return;let o=document.createElement(`h2`);o.textContent=`Version ${a.version}`;let l=document.createElement(`p`);l.textContent=[`Windows ${a.minimumWindows} or 11, 64-bit`,a.bytes?D(a.bytes):``,O(a.publishedAt)].filter(Boolean).join(` · `);let u=document.createElement(`a`);u.className=`button`,u.href=a.downloadUrl,u.textContent=`Download for Windows`,e.replaceChildren(o,l,u)}catch{r()}}k();