(() => {
'use strict';
const store='chocoscan-demo.language.v1';
const words={
'ChocoScan Demo':{en:'ChocoScan Demo',zh:'ChocoScan 演示版'},
'DEMO LAB':{en:'DEMO LAB',zh:'演示实验室'},
'Simulasi edukasi browser':{en:'Browser education simulations',zh:'浏览器安全教育模拟'},
'BROWSER SAFETY · UI PROTOTYPE':{en:'BROWSER SAFETY · UI PROTOTYPE',zh:'浏览器安全 · 界面原型'},
'Kenali tampilan web yang mencurigakan.':{en:'Recognize suspicious web interfaces.',zh:'识别可疑的网站界面。'},
'Pusat demo antarmuka untuk melihat contoh peringatan, pop-up, dan hasil pemindaian simulasi. Ini bukan pemindai keamanan sungguhan.':{en:'An interface demo hub for sample warnings, pop-ups, and simulated scan results. This is not a real security scanner.',zh:'用于查看警告、弹窗和模拟扫描结果的界面演示中心。这并非真正的安全扫描器。'},
'Jalankan simulasi lokal':{en:'Run local simulation',zh:'运行本地模拟'},
'Lihat demo lainnya':{en:'Explore other demos',zh:'查看其他演示'},
'Catatan keamanan':{en:'Safety note',zh:'安全说明'},
'Demo tidak meminta kata sandi, menyimpan input, mengunci pointer, membuka tab otomatis, atau memaksa navigasi.':{en:'The demo does not request passwords, store input, lock the pointer, open tabs automatically, or force navigation.',zh:'此演示不会要求输入密码、保存输入内容、锁定指针、自动打开标签页或强制跳转。'},
'KOLEKSI':{en:'COLLECTION',zh:'演示合集'},
'Pilih demo':{en:'Choose a demo',zh:'选择演示'},
'4 mode':{en:'4 modes',zh:'4 种模式'},
'Eksternal':{en:'External',zh:'外部'},
'Lokal':{en:'Local',zh:'本地'},
'Demo A':{en:'Demo A',zh:'演示 A'},
'Demo B':{en:'Demo B',zh:'演示 B'},
'Demo C':{en:'Demo C',zh:'演示 C'},
'Simulasi pop-up':{en:'Pop-up simulation',zh:'弹窗模拟'},
'Buka deployment demo pertama yang disiapkan untuk ChocoScan.':{en:'Open the first demo deployment prepared for ChocoScan.',zh:'打开为 ChocoScan 准备的第一个演示部署。'},
'Buka deployment demo kedua di lingkungan terpisah.':{en:'Open the second demo deployment in a separate environment.',zh:'在独立环境中打开第二个演示部署。'},
'Buka deployment demo ketiga yang sudah disiapkan.':{en:'Open the third prepared demo deployment.',zh:'打开已准备好的第三个演示部署。'},
'Uji dialog peringatan yang bertumpuk, tetapi tetap bisa ditutup satu per satu.':{en:'Test stacked warning dialogs that can still be closed one by one.',zh:'测试可逐个关闭的叠加警告对话框。'},
'Buka Demo A ↗':{en:'Open Demo A ↗',zh:'打开演示 A ↗'},
'Buka Demo B ↗':{en:'Open Demo B ↗',zh:'打开演示 B ↗'},
'Buka Demo C ↗':{en:'Open Demo C ↗',zh:'打开演示 C ↗'},
'Jalankan simulasi ↗':{en:'Run simulation ↗',zh:'运行模拟 ↗'},
'IKLAN':{en:'SPONSOR',zh:'赞助内容'},
'Lihat penawaran':{en:'View offers',zh:'查看优惠'},
'Jelajahi pilihan':{en:'Explore options',zh:'浏览选项'},
'Buka penawaran':{en:'Open offer',zh:'打开优惠'},
'Lihat opsi lain':{en:'See other options',zh:'查看其他选项'},
'PENGELOLAAN':{en:'MANAGEMENT',zh:'管理'},
'Netlify project dashboard':{en:'Netlify project dashboard',zh:'Netlify 项目控制台'},
'Tautan dashboard hanya untuk mengelola deployment, bukan halaman demo publik.':{en:'Dashboard links are for deployment management, not public demo pages.',zh:'控制台链接仅用于管理部署，并非公开演示页面。'},
'Dashboard Rad Lamington ↗':{en:'Rad Lamington dashboard ↗',zh:'Rad Lamington 控制台 ↗'},
'Dashboard Rainbow Strudel ↗':{en:'Rainbow Strudel dashboard ↗',zh:'Rainbow Strudel 控制台 ↗'},
'Prototipe edukasi · Tanpa backend':{en:'Educational prototype · No backend',zh:'教育原型 · 无后端'},
'Peringatan simulasi':{en:'Simulation warning',zh:'模拟警告'},
'Halaman contoh menampilkan peringatan yang tampak mendesak. Periksa sumber dan alamat situs sebelum mengambil tindakan.':{en:'This sample page shows an urgent-looking warning. Check the source and website address before taking action.',zh:'此示例页面显示看似紧急的警告。采取行动前，请检查来源和网站地址。'},
'CONTOH 01':{en:'EXAMPLE 01',zh:'示例 01'},
'Aktivitas tidak biasa':{en:'Unusual activity',zh:'异常活动'},
'Pesan ini hanya contoh antarmuka. Demo tidak memindai perangkat atau memeriksa jaringan.':{en:'This message is only an interface example. The demo does not scan devices or inspect networks.',zh:'此消息仅为界面示例。演示不会扫描设备或检查网络。'},
'CONTOH 02':{en:'EXAMPLE 02',zh:'示例 02'},
'Jangan terburu-buru':{en:'Do not rush',zh:'请勿仓促操作'},
'Tutup dialog yang tidak relevan dan jangan memasukkan informasi rahasia ke situs yang tidak dikenal.':{en:'Close irrelevant dialogs and do not enter confidential information on unfamiliar websites.',zh:'关闭无关对话框，不要在不熟悉的网站上输入机密信息。'},
'CONTOH 03':{en:'EXAMPLE 03',zh:'示例 03'},
'Tutup dialog yang masih terbuka sebelum memulai simulasi lagi.':{en:'Close any open dialog before starting another simulation.',zh:'再次开始模拟前，请关闭所有打开的对话框。'},
'Simulasi aktif.':{en:'Simulation active.',zh:'模拟已启动。'},
'contoh dialog ditampilkan. Semua dialog dapat ditutup satu per satu.':{en:'sample dialog(s) displayed. All dialogs can be closed individually.',zh:'个示例对话框已显示。所有对话框均可单独关闭。'},
'Simulasi dibersihkan. Tidak ada data yang dikirim atau disimpan.':{en:'Simulation cleared. No data was sent or saved.',zh:'模拟已清除。没有发送或保存任何数据。'}
};
const norm=s=>String(s||'').replace(/\s+/g,' ').trim(), original=new WeakMap(), applied=new WeakMap(), attrs=new WeakMap(), attrsApplied=new WeakMap();
let lang='id';
function translateNode(n){let cur=n.nodeValue||'';if(applied.has(n)&&cur!==applied.get(n))original.set(n,cur);if(!original.has(n))original.set(n,cur);const raw=original.get(n),key=norm(raw),next=lang==='id'?key:(words[key]?.[lang]||key),lead=(raw.match(/^\s*/)??[''])[0],tail=(raw.match(/\s*$/)??[''])[0];n.nodeValue=lead+next+tail;applied.set(n,n.nodeValue);}
function translateAttr(el,name){const cur=el.getAttribute(name);if(cur===null)return;let a=attrs.get(el)||{},b=attrsApplied.get(el)||{};if(Object.hasOwn(b,name)&&cur!==b[name])a[name]=cur;if(!Object.hasOwn(a,name))a[name]=cur;attrs.set(el,a);const key=norm(a[name]),next=lang==='id'?key:(words[key]?.[lang]||key);el.setAttribute(name,next);b[name]=next;attrsApplied.set(el,b);}
function scan(root=document.body){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!n.parentElement||n.parentElement.closest('script,style,noscript,pre,code,[data-no-translate],#tcs-language-control'))continue;translateNode(n);}root.querySelectorAll?.('[placeholder],[aria-label],[title],[alt]').forEach(el=>['placeholder','aria-label','title','alt'].forEach(a=>translateAttr(el,a)));if(root.matches?.('[placeholder],[aria-label],[title],[alt]'))['placeholder','aria-label','title','alt'].forEach(a=>translateAttr(root,a));}
function setLanguage(code){lang=['id','en','zh'].includes(code)?code:'id';try{localStorage.setItem(store,lang)}catch{}document.documentElement.lang=lang==='zh'?'zh-CN':lang;const s=document.getElementById('tcs-language-select');if(s&&s.value!==lang)s.value=lang;const l=document.querySelector('#tcs-language-control label');if(l)l.textContent=lang==='id'?'Bahasa':lang==='zh'?'语言':'Language';scan();}
function init(){const box=document.createElement('div');box.id='tcs-language-control';box.innerHTML='<label for="tcs-language-select">Bahasa</label><select id="tcs-language-select" aria-label="Pilih bahasa"><option value="id">ID · Indonesia</option><option value="en">EN · English</option><option value="zh">中文 · Mandarin</option></select>';const css=document.createElement('style');css.textContent='#tcs-language-control{position:fixed;right:14px;top:14px;z-index:10000;display:flex;align-items:center;gap:7px;padding:7px 9px;border:1px solid #b9c6d8;border-radius:12px;background:#fff;color:#182033;box-shadow:0 8px 28px #10182722;font:500 12px/1.2 system-ui,sans-serif}#tcs-language-control select{border:0;background:transparent;color:inherit;font:inherit;cursor:pointer}#tcs-language-control option{background:#fff;color:#182033}@media(max-width:640px){#tcs-language-control{top:9px;right:9px;padding:6px 8px}#tcs-language-control label{display:none}}';document.head.append(css);document.body.append(box);box.querySelector('select').addEventListener('change',e=>setLanguage(e.target.value));let saved='id';try{if(['id','en','zh'].includes(localStorage.getItem(store)))saved=localStorage.getItem(store)}catch{}setLanguage(saved);new MutationObserver(rs=>rs.forEach(r=>{if(r.type==='characterData')translateNode(r.target);else r.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE){if(!original.has(n))original.set(n,n.nodeValue||'');translateNode(n)}else if(n.nodeType===Node.ELEMENT_NODE)scan(n)});if(r.type==='attributes')translateAttr(r.target,r.attributeName)})).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','alt']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();