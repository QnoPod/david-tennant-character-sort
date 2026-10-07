const characters = [
  {
    "name": "10代目ドクター",
    "work": "Doctor Who",
    "image": "images/10thDoctor.jpg"
  },
  {
    "name": "14代目ドクター",
    "work": "Doctor Who",
    "image": "images/14thDoctor.jpg"
  },
  {
    "name": "エイデン・ホインズ",
    "work": "The Politician's Husband",
    "image": "images/Aidan Hoynes.webp"
  },
  {
    "name": "アラン・ハミルトン",
    "work": "Recovery",
    "image": "images/Alan Hamilton.jpg"
  },
  {
    "name": "Alastair Galbraith",
    "work": "",
    "image": "images/Alastair Galbraith.jpg"
  },
  {
    "name": "アレック・ハーディ",
    "work": "Broadchurch",
    "image": "images/AlecHardy.png"
  },
  {
    "name": "アーサー・エディントン",
    "work": "Einstein and Eddington",
    "image": "images/Arthur Eddington.jpg"
  },
  {
    "name": "バーティ・クラウチ・Jr.",
    "work": "Harry Potter and the Goblet of Fire",
    "image": "images/Barty Crouch Junior.png"
  },
  {
    "name": "Benedick",
    "work": "",
    "image": "images/Benedick.jpg"
  },
  {
    "name": "ブレンダン・ブロック",
    "work": "Secret Smile",
    "image": "images/Brendan Block.webp"
  },
  {
    "name": "ケイル・エレンドライヒ",
    "work": "Bad Samaritan",
    "image": "images/Cale Erendreich.webp"
  },
  {
    "name": "キャンベル・ベイン",
    "work": "Takin' Over the Asylum",
    "image": "images/Campbell.jpg"
  },
  {
    "name": "Captain Gerald Colthurst",
    "work": "",
    "image": "images/Captain Gerald Colthurst.jpg"
  },
  {
    "name": "カサノヴァ",
    "work": "Casanova",
    "image": "images/Casanova.jpg"
  },
  {
    "name": "Charlie",
    "work": "",
    "image": "images/Charlie.jpg"
  },
  {
    "name": "Chris",
    "work": "",
    "image": "images/Chris.webp"
  },
  {
    "name": "Christopher Williams",
    "work": "",
    "image": "images/Christopher Williams.jpg"
  },
  {
    "name": "クロウリー",
    "work": "Good Omens",
    "image": "images/Crowley.jpg"
  },
  {
    "name": "デイヴ・タイラー",
    "work": "Single Father",
    "image": "images/Dave Tiler.jpg"
  },
  {
    "name": "David",
    "work": "",
    "image": "images/David.png"
  },
  {
    "name": "Davina",
    "work": "",
    "image": "images/Davina.png"
  },
  {
    "name": "デニス・ニルセン",
    "work": "Des",
    "image": "images/Des.jpg"
  },
  {
    "name": "Doctor Gordon Briscoe",
    "work": "",
    "image": "images/Doctor Gordon Briscoe.jpg"
  },
  {
    "name": "ドン・ジュアン",
    "work": "Don Juan in Soho",
    "image": "images/Don Juan.webp"
  },
  {
    "name": "Donald",
    "work": "",
    "image": "images/Donald.jpg"
  },
  {
    "name": "Doug McLeod",
    "work": "",
    "image": "images/Doug McLeod.jpg"
  },
  {
    "name": "Dr. Edgar Fallon",
    "work": "",
    "image": "images/Dr. Edgar Fallon.webp"
  },
  {
    "name": "Dr. Krull",
    "work": "",
    "image": "images/Dr. Krull.jpg"
  },
  {
    "name": "Drunk Undergraduate",
    "work": "",
    "image": "images/Drunk Undergraduate.jpg"
  },
  {
    "name": "エメット・カーヴァー",
    "work": "Gracepoint",
    "image": "images/Emmett Carver.webp"
  },
  {
    "name": "Ex",
    "work": "",
    "image": "images/Ex.jpg"
  },
  {
    "name": "Gary Innes",
    "work": "",
    "image": "images/Gary Innes.jpg"
  },
  {
    "name": "Gavin MacEwan",
    "work": "",
    "image": "images/Gavin MacEwan.png"
  },
  {
    "name": "Gavin",
    "work": "",
    "image": "images/Gavin.jpg"
  },
  {
    "name": "Gaz Witney",
    "work": "",
    "image": "images/Gaz Witney.jpg"
  },
  {
    "name": "General Kreig",
    "work": "",
    "image": "images/General Kreig.png"
  },
  {
    "name": "Ghost of Christmas Present",
    "work": "",
    "image": "images/Ghost of Christmas Present.webp"
  },
  {
    "name": "Gianpiero",
    "work": "",
    "image": "images/Gianpiero.jpg"
  },
  {
    "name": "ジンジャー・リトルジョン",
    "work": "Bright Young Things",
    "image": "images/Ginger Littlejohn.jpg"
  },
  {
    "name": "Gordon Stylus",
    "work": "",
    "image": "images/Gordon Stylus.jpg"
  },
  {
    "name": "Greig Miller",
    "work": "",
    "image": "images/Greig Miller.jpg"
  },
  {
    "name": "ハムレット",
    "work": "Hamlet",
    "image": "images/Hamlet.jpg"
  },
  {
    "name": "ハリー・ワトリング",
    "work": "Inside Man",
    "image": "images/Harry Watling.png"
  },
  {
    "name": "Hector",
    "work": "",
    "image": "images/Hector.jpg"
  },
  {
    "name": "Ian Ventham",
    "work": "",
    "image": "images/Ian Ventham.png"
  },
  {
    "name": "ジェームズ・アーバー",
    "work": "The Decoy Bride",
    "image": "images/James Arber.jpg"
  },
  {
    "name": "Jean-François Mercier",
    "work": "",
    "image": "images/Jean-François Mercier.jpg"
  },
  {
    "name": "Jean-Jacques Rousseau",
    "work": "",
    "image": "images/Jean-Jacques Rousseau.jpg"
  },
  {
    "name": "Jimmy Murphy",
    "work": "",
    "image": "images/Jimmy Murphy.jpg"
  },
  {
    "name": "John Halder",
    "work": "",
    "image": "images/John Halder.jpg"
  },
  {
    "name": "ジョン・ノックス",
    "work": "Mary Queen of Scots",
    "image": "images/John Knox.jpg"
  },
  {
    "name": "John MacBryde",
    "work": "",
    "image": "images/John MacBryde.jpg"
  },
  {
    "name": "John",
    "work": "",
    "image": "images/John.jpg"
  },
  {
    "name": "John (21st)",
    "work": "",
    "image": "images/John_21st.jpg"
  },
  {
    "name": "Jose-Luis and Piers",
    "work": "",
    "image": "images/Jose-Luis and Piers.jpg"
  },
  {
    "name": "キルグレイヴ",
    "work": "Jessica Jones",
    "image": "images/Kevin Thompson.webp"
  },
  {
    "name": "Lord Pomfrey",
    "work": "",
    "image": "images/Lord Pomfrey.png"
  },
  {
    "name": "マクベス",
    "work": "Macbeth",
    "image": "images/Macbeth.png"
  },
  {
    "name": "Mark",
    "work": "",
    "image": "images/Mark.jpg"
  },
  {
    "name": "Martin Lamb",
    "work": "",
    "image": "images/Martin Lamb.jpg"
  },
  {
    "name": "Max Valentine",
    "work": "",
    "image": "images/Max Valentine.jpg"
  },
  {
    "name": "Mr Gibson",
    "work": "",
    "image": "images/Mr Gibson.jpg"
  },
  {
    "name": "Mr Slightlyman",
    "work": "",
    "image": "images/Mr Slightlyman.jpg"
  },
  {
    "name": "Mr. Logan",
    "work": "",
    "image": "images/Mr. Logan.png"
  },
  {
    "name": "Mr. Watson",
    "work": "",
    "image": "images/Mr. Watson.jpg"
  },
  {
    "name": "Neil McDonald",
    "work": "",
    "image": "images/Neil McDonald.jpg"
  },
  {
    "name": "Nick Davies",
    "work": "",
    "image": "images/Nick Davies.jpg"
  },
  {
    "name": "Nick",
    "work": "",
    "image": "images/Nick.jpg"
  },
  {
    "name": "Nurse",
    "work": "",
    "image": "images/Nurse.jpg"
  },
  {
    "name": "Pete",
    "work": "",
    "image": "images/Pete.jpg"
  },
  {
    "name": "ピーター・カーライル",
    "work": "Blackpool",
    "image": "images/Peter Carlisle.png"
  },
  {
    "name": "ピーター・ヴィンセント",
    "work": "Fright Night",
    "image": "images/Peter Vincent.webp"
  },
  {
    "name": "フィリアス・フォッグ",
    "work": "Around the World in 80 Days",
    "image": "images/Phileas Fogg.jpg"
  },
  {
    "name": "Policeman",
    "work": "",
    "image": "images/Policeman.jpg"
  },
  {
    "name": "Regenerated Tony Blair",
    "work": "",
    "image": "images/Regenerated Tony Blair.jpg"
  },
  {
    "name": "Rex Alexander",
    "work": "",
    "image": "images/Rex Alexander.jpg"
  },
  {
    "name": "Richard Hoggart",
    "work": "",
    "image": "images/Richard Hoggart.jpg"
  },
  {
    "name": "リチャード二世",
    "work": "Richard II",
    "image": "images/Richard II.jpg"
  },
  {
    "name": "Richard",
    "work": "",
    "image": "images/Richard.jpg"
  },
  {
    "name": "Rob Harker",
    "work": "",
    "image": "images/Rob Harker.jpg"
  },
  {
    "name": "Roderick",
    "work": "",
    "image": "images/Roderick.jpg"
  },
  {
    "name": "R.D.レイン",
    "work": "Mad to Be Normal",
    "image": "images/Ronald David Laing.jpg"
  },
  {
    "name": "Simon 'Darwin' Brown",
    "work": "",
    "image": "images/Simon 'Darwin' Brown.jpg"
  },
  {
    "name": "サイモン・イェーツ",
    "work": "There She Goes",
    "image": "images/Simon.jpg"
  },
  {
    "name": "Steve Clemens",
    "work": "",
    "image": "images/Steve Clemens.jpg"
  },
  {
    "name": "The Creator",
    "work": "",
    "image": "images/The Creator.png"
  },
  {
    "name": "Theo Howard",
    "work": "",
    "image": "images/Theo Howard.jpg"
  },
  {
    "name": "Third Squaddie",
    "work": "",
    "image": "images/Third Squaddie.jpg"
  },
  {
    "name": "Timothy",
    "work": "",
    "image": "images/Timothy.png"
  },
  {
    "name": "トム・ケンドリック",
    "work": "Deadwater Fell",
    "image": "images/Tom Kendrick.webp"
  },
  {
    "name": "トニー・バディンガム",
    "work": "Rivals",
    "image": "images/Tony Baddingham.webp"
  },
  {
    "name": "Traffic Warden",
    "work": "",
    "image": "images/Traffic Warden.jpg"
  },
  {
    "name": "Vinny",
    "work": "",
    "image": "images/Vinny.jpg"
  },
  {
    "name": "Walt",
    "work": "",
    "image": "images/Walt.jpg"
  },
  {
    "name": "ウィル・バートン",
    "work": "The Escape Artist",
    "image": "images/Will Burton.webp"
  },
  {
    "name": "Will",
    "work": "",
    "image": "images/Will.jpg"
  },
  {
    "name": "alexander litvinenko",
    "work": "",
    "image": "images/alexander litvinenko.jpg"
  }
];

const state = {
  active: [],
  groups: [],
  groupIndex: 0,
  round: 0,
  roundWinners: [],
  score: new Map(),
  reachedRound: new Map(),
  totalEstimated: 1,
  answered: 0,
  result: []
};

const $ = id => document.getElementById(id);

function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function initials(name) {
  return name.replace(/[・\s\.]/g,"").slice(0,2);
}

function show(id) {
  document.querySelectorAll(".screen").forEach(el=>el.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"instant"});
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

function imageSrc(path) {
  return encodeURI(path);
}

function imageMarkup(c) {
  return `
    <img src="${imageSrc(c.image)}" alt="${escapeHtml(c.name)}"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="fallback" style="display:none">${escapeHtml(initials(c.name))}</div>`;
}

function renderHero() {
  $("member-count").textContent=`${characters.length}人から、あなたのTOP9を。`;
  const box=$("hero-collage");
  box.innerHTML="";
  characters.slice(0,9).forEach(c=>{
    const el=document.createElement("div");
    el.className="hero-tile";
    el.innerHTML=imageMarkup(c);
    box.appendChild(el);
  });
}

function estimateQuestions(n) {
  let total=0,current=n;
  while(current>9){
    total+=Math.ceil(current/4);
    current=Math.ceil(current/4);
  }
  return Math.max(total,1);
}

function startQuiz() {
  state.active=shuffle(characters.map((c,i)=>({...c,id:i})));
  state.groups=[];
  state.groupIndex=0;
  state.round=0;
  state.roundWinners=[];
  state.score=new Map(state.active.map(c=>[c.id,0]));
  state.reachedRound=new Map(state.active.map(c=>[c.id,0]));
  state.totalEstimated=estimateQuestions(state.active.length);
  state.answered=0;
  state.result=[];
  beginRound();
  show("quiz");
}

function beginRound() {
  state.round++;
  state.active.forEach(c=>state.reachedRound.set(c.id,state.round));
  state.groups=[];
  for(let i=0;i<state.active.length;i+=4){
    state.groups.push(state.active.slice(i,i+4));
  }
  state.groupIndex=0;
  state.roundWinners=[];
  renderGroup();
}

function updateProgress() {
  const pct=Math.min(99,Math.round(state.answered/state.totalEstimated*100));
  $("percent").textContent=`${pct}%`;
  $("bar").style.width=`${pct}%`;
}

function renderGroup() {
  updateProgress();
  const group=state.groups[state.groupIndex];
  if(!group) return endRound();

  const wrap=$("choices");
  wrap.innerHTML="";

  group.forEach(c=>{
    const card=document.createElement("article");
    card.className="choice";
    const work = c.work ? `<div class="choice-work">${escapeHtml(c.work)}</div>` : "";
    card.innerHTML=`
      <div class="choice-media">${imageMarkup(c)}</div>
      <div class="choice-body">
        <div class="choice-name">${escapeHtml(c.name)}</div>
        ${work}
      </div>`;
    card.addEventListener("click",()=>selectCharacter(c));
    wrap.appendChild(card);
  });
}

function selectCharacter(c) {
  state.roundWinners.push(c);
  state.score.set(c.id,(state.score.get(c.id)||0)+100*state.round);
  state.answered++;
  state.groupIndex++;
  renderGroup();
}

function endRound() {
  const winners=[...new Map(state.roundWinners.map(c=>[c.id,c])).values()];
  if(winners.length<=9){
    buildFinalRanking(winners);
    return;
  }
  state.active=shuffle(winners);
  beginRound();
}

function buildFinalRanking(finalists) {
  const finalistIds=new Set(finalists.map(c=>c.id));
  const all=characters.map((c,i)=>({...c,id:i}));
  const sorted=[...all].sort((a,b)=>{
    const aFinal=finalistIds.has(a.id)?1:0;
    const bFinal=finalistIds.has(b.id)?1:0;
    if(aFinal!==bFinal) return bFinal-aFinal;
    const roundDiff=(state.reachedRound.get(b.id)||0)-(state.reachedRound.get(a.id)||0);
    if(roundDiff) return roundDiff;
    const scoreDiff=(state.score.get(b.id)||0)-(state.score.get(a.id)||0);
    if(scoreDiff) return scoreDiff;
    return a.name.localeCompare(b.name,"ja");
  });
  state.result=sorted.slice(0,9);
  renderResult();
}

function renderResult() {
  const box=$("ranking");
  box.innerHTML="";
  state.result.forEach((c,i)=>{
    const el=document.createElement("article");
    el.className="rank";
    const work = c.work ? `<div class="rank-work">${escapeHtml(c.work)}</div>` : "";
    el.innerHTML=`
      <div class="rank-badge">${i+1}</div>
      <div class="rank-media">${imageMarkup(c)}</div>
      <div class="rank-body">
        <div class="rank-name">${escapeHtml(c.name)}</div>
        ${work}
      </div>`;
    box.appendChild(el);
  });
  show("result");
}

$("start-btn").addEventListener("click",startQuiz);
$("restart-btn").addEventListener("click",()=>show("home"));

function loadImage(src) {
  return new Promise(resolve=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=()=>resolve(null);
    img.src=imageSrc(src);
  });
}

function fitText(ctx,text,maxWidth,startSize,minSize=24) {
  let size=startSize;
  while(size>minSize){
    ctx.font=`700 ${size}px sans-serif`;
    if(ctx.measureText(text).width<=maxWidth) return size;
    size-=2;
  }
  return minSize;
}

function drawContain(ctx,img,x,y,w,h) {
  const scale=Math.min(w/img.width,h/img.height);
  const dw=img.width*scale;
  const dh=img.height*scale;
  const dx=x+(w-dw)/2;
  const dy=y+(h-dh)/2;
  ctx.drawImage(img,dx,dy,dw,dh);
}

async function createResultBlob() {
  const W=1200;
  const margin=70,gap=18,top=245;
  const cell=(W-margin*2-gap*2)/3;
  const imgH=cell*1.25;
  const labelH=112;
  const rows=Math.ceil(state.result.length/3);
  const contentBottom=top+rows*(imgH+labelH)+Math.max(0,rows-1)*gap;
  const H=Math.ceil(contentBottom+110);

  const canvas=document.createElement("canvas");
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext("2d");

  ctx.fillStyle="#fff"; ctx.fillRect(0,0,W,H);
  ctx.fillStyle="#111827"; ctx.font="800 38px sans-serif";
  ctx.fillText("DAVID TENNANT CHARACTER",70,78);

  const grad=ctx.createLinearGradient(70,100,650,100);
  grad.addColorStop(0,"#7060ea"); grad.addColorStop(1,"#ec2f9c");
  ctx.fillStyle=grad; ctx.font="900 74px sans-serif";
  ctx.fillText("MY TOP 9",70,155);

  ctx.fillStyle="#6b7280"; ctx.font="400 25px sans-serif";
  ctx.fillText("デイヴィッド・テナント キャラクター 推し9選",72,198);

  for(let i=0;i<state.result.length;i++){
    const c=state.result[i];
    const row=Math.floor(i/3), col=i%3;
    const x=margin+col*(cell+gap);
    const y=top+row*(imgH+labelH+gap);

    ctx.fillStyle="#eef0f3"; ctx.fillRect(x,y,cell,imgH);
    const img=await loadImage(c.image);
    if(img) drawContain(ctx,img,x,y,cell,imgH);
    else {
      ctx.fillStyle="#9ca3af"; ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.font="800 58px sans-serif"; ctx.fillText(initials(c.name),x+cell/2,y+imgH/2);
      ctx.textAlign="left"; ctx.textBaseline="alphabetic";
    }

    ctx.fillStyle="rgba(17,24,39,.88)"; ctx.fillRect(x+10,y+10,54,54);
    ctx.fillStyle="#fff"; ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.font="800 28px sans-serif"; ctx.fillText(String(i+1),x+37,y+37);
    ctx.textAlign="left"; ctx.textBaseline="alphabetic";

    ctx.fillStyle="#111827";
    const nameSize=fitText(ctx,c.name,cell-24,27,18);
    ctx.font=`800 ${nameSize}px sans-serif`;
    ctx.fillText(c.name,x+10,y+imgH+38);

    if(c.work){
      ctx.fillStyle="#6b7280";
      const workSize=fitText(ctx,c.work,cell-24,19,14);
      ctx.font=`400 ${workSize}px sans-serif`;
      ctx.fillText(c.work,x+10,y+imgH+73);
    }
  }

  ctx.fillStyle="#9ca3af"; ctx.font="400 20px sans-serif";
  ctx.fillText(location.hostname+location.pathname,70,H-38);
  return new Promise(resolve=>canvas.toBlob(resolve,"image/png",1));
}

function downloadBlob(blob,name) {
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url; a.download=name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

$("save-btn").addEventListener("click",async()=>{
  const blob=await createResultBlob();
  if(blob) downloadBlob(blob,"dt-character-top9.png");
});

$("share-btn").addEventListener("click",async()=>{
  const shareText =
    "私のデイヴィッド・テナント キャラクター推し9選 👑\n\n" +
    "#DTCharacterSort\n" +
    location.href;

  const blob=await createResultBlob();
  if(!blob)return;

  const file=new File([blob],"dt-character-top9.png",{type:"image/png"});

  if(navigator.share && navigator.canShare && navigator.canShare({files:[file]})){
    try{
      await navigator.share({
        title:"デイヴィッド・テナント キャラクター 推し9選",
        text:shareText,
        files:[file]
      });
      return;
    }catch(e){
      if(e && e.name==="AbortError") return;
    }
  }

  downloadBlob(blob,"dt-character-top9.png");
  const intent="https://twitter.com/intent/tweet?text="+encodeURIComponent(shareText);
  window.open(intent,"_blank","noopener,noreferrer");
});

renderHero();
