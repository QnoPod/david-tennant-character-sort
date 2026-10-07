
const characters = [{"name": "アレック・ハーディ", "work": "Broadchurch", "image": "images/alec-hardy.jpg"}, {"name": "クロウリー", "work": "Good Omens", "image": "images/crowley.jpg"}, {"name": "10代目ドクター", "work": "Doctor Who", "image": "images/tenth-doctor.jpg"}, {"name": "14代目ドクター", "work": "Doctor Who", "image": "images/fourteenth-doctor.jpg"}, {"name": "キルグレイヴ", "work": "Jessica Jones", "image": "images/kilgrave.jpg"}, {"name": "フィリアス・フォッグ", "work": "Around the World in 80 Days", "image": "images/phileas-fogg.jpg"}, {"name": "トニー・バディンガム", "work": "Rivals", "image": "images/tony-baddingham.jpg"}, {"name": "マクベス", "work": "Macbeth", "image": "images/macbeth.jpg"}, {"name": "リチャード二世", "work": "Richard II", "image": "images/richard-ii.jpg"}, {"name": "カサノヴァ", "work": "Casanova", "image": "images/casanova.jpg"}, {"name": "キャンベル・ベイン", "work": "Takin' Over the Asylum", "image": "images/campbell-bain.jpg"}, {"name": "ブレンダン・ブロック", "work": "Secret Smile", "image": "images/brendan-block.jpg"}, {"name": "ピーター・カーライル", "work": "Blackpool", "image": "images/peter-carlisle.jpg"}, {"name": "ピーター・ヴィンセント", "work": "Fright Night", "image": "images/peter-vincent.jpg"}, {"name": "ジェームズ・アーバー", "work": "The Decoy Bride", "image": "images/james-arber.jpg"}, {"name": "アーサー・エディントン", "work": "Einstein and Eddington", "image": "images/eddington.jpg"}, {"name": "デイヴ・タイラー", "work": "Single Father", "image": "images/dave-tiler.jpg"}, {"name": "エイデン・ホインズ", "work": "The Politician's Husband", "image": "images/aiden-hoynes.jpg"}, {"name": "エメット・カーヴァー", "work": "Gracepoint", "image": "images/emmett-carver.jpg"}, {"name": "ハリー・ワトリング", "work": "Inside Man", "image": "images/harry-watling.jpg"}, {"name": "デニス・ニルセン", "work": "Des", "image": "images/dennis-nilsen.jpg"}, {"name": "サイモン・イェーツ", "work": "There She Goes", "image": "images/simon-yates.jpg"}, {"name": "ハムレット", "work": "Hamlet", "image": "images/hamlet.jpg"}, {"name": "ドン・ジュアン", "work": "Don Juan in Soho", "image": "images/don-juan.jpg"}, {"name": "トム・ケンドリック", "work": "Deadwater Fell", "image": "images/tom-kendrick.jpg"}, {"name": "R.D.レイン", "work": "Mad to Be Normal", "image": "images/rd-laing.jpg"}, {"name": "ジョン・ノックス", "work": "Mary Queen of Scots", "image": "images/john-knox.jpg"}, {"name": "バーティ・クラウチ・Jr.", "work": "Harry Potter and the Goblet of Fire", "image": "images/barty-crouch-jr.jpg"}, {"name": "ジンジャー・リトルジョン", "work": "Bright Young Things", "image": "images/ginger-littlejohn.jpg"}, {"name": "ウィル・バートン", "work": "The Escape Artist", "image": "images/will-burton.jpg"}, {"name": "トミー", "work": "Recovery", "image": "images/tommy-recovery.jpg"}, {"name": "クリス・ラップ", "work": "Bad Samaritan", "image": "images/cale-erendreich.jpg"}];

const state = {
  active: [],
  groups: [],
  groupIndex: 0,
  round: 0,
  roundWinners: [],
  unknown: new Set(),
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

function imageMarkup(c) {
  return `
    <img src="${c.image}" alt="${escapeHtml(c.name)}"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="fallback" style="display:none">${escapeHtml(initials(c.name))}</div>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
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
  let total=0;
  let current=n;
  while(current>9){
    total += Math.ceil(current/4);
    current = Math.ceil(current/4);
  }
  return Math.max(total,1);
}

function startQuiz() {
  state.active=shuffle(characters.map((c,i)=>({...c,id:i})));
  state.groups=[];
  state.groupIndex=0;
  state.round=0;
  state.roundWinners=[];
  state.unknown=new Set();
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
  state.active=state.active.filter(c=>!state.unknown.has(c.id));
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
    card.innerHTML=`
      <div class="choice-media">${imageMarkup(c)}</div>
      <div class="choice-body">
        <div class="choice-name">${escapeHtml(c.name)}</div>
        <div class="choice-work">${escapeHtml(c.work)}</div>
        <button type="button" class="unknown-btn">知らない</button>
      </div>`;

    card.addEventListener("click", e=>{
      if(e.target.classList.contains("unknown-btn")) return;
      selectCharacter(c);
    });

    card.querySelector(".unknown-btn").addEventListener("click", e=>{
      e.stopPropagation();
      state.unknown.add(c.id);
      card.style.opacity=".28";
      card.style.pointerEvents="none";

      const remaining=group.filter(x=>!state.unknown.has(x.id));
      if(remaining.length===1) selectCharacter(remaining[0]);
      else if(remaining.length===0) moveNext();
    });

    wrap.appendChild(card);
  });
}

function selectCharacter(c) {
  state.roundWinners.push(c);
  state.score.set(c.id,(state.score.get(c.id)||0)+100*state.round);
  moveNext();
}

function moveNext() {
  state.answered++;
  state.groupIndex++;
  renderGroup();
}

function endRound() {
  const winners=[...new Map(state.roundWinners.map(c=>[c.id,c])).values()]
    .filter(c=>!state.unknown.has(c.id));

  if(winners.length<=9){
    buildFinalRanking(winners);
    return;
  }

  state.active=shuffle(winners);
  beginRound();
}

function buildFinalRanking(finalists) {
  const finalistIds=new Set(finalists.map(c=>c.id));
  const all=characters.map((c,i)=>({...c,id:i})).filter(c=>!state.unknown.has(c.id));

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
    el.innerHTML=`
      <div class="rank-badge">${i+1}</div>
      <div class="rank-media">${imageMarkup(c)}</div>
      <div class="rank-body">
        <div class="rank-name">${escapeHtml(c.name)}</div>
        <div class="rank-work">${escapeHtml(c.work)}</div>
      </div>`;
    box.appendChild(el);
  });
  show("result");
}

$("skip-round").addEventListener("click",moveNext);
$("start-btn").addEventListener("click",startQuiz);
$("restart-btn").addEventListener("click",()=>show("home"));

function loadImage(src) {
  return new Promise(resolve=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=()=>resolve(null);
    img.src=src;
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

async function createResultBlob() {
  const W=1200,H=1450;
  const canvas=document.createElement("canvas");
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext("2d");

  ctx.fillStyle="#ffffff";
  ctx.fillRect(0,0,W,H);

  ctx.fillStyle="#111827";
  ctx.font="800 38px sans-serif";
  ctx.fillText("DAVID TENNANT CHARACTER",70,78);

  const grad=ctx.createLinearGradient(70,100,650,100);
  grad.addColorStop(0,"#7060ea");
  grad.addColorStop(1,"#ec2f9c");
  ctx.fillStyle=grad;
  ctx.font="900 74px sans-serif";
  ctx.fillText("MY TOP 9",70,155);

  ctx.fillStyle="#6b7280";
  ctx.font="400 25px sans-serif";
  ctx.fillText("デイヴィッド・テナント キャラクター 推し9選",72,198);

  const margin=70,gap=18,top=240;
  const cell=(W-margin*2-gap*2)/3;
  const imgH=cell;
  const labelH=105;

  for(let i=0;i<state.result.length;i++){
    const c=state.result[i];
    const row=Math.floor(i/3),col=i%3;
    const x=margin+col*(cell+gap);
    const y=top+row*(imgH+labelH+gap);

    ctx.fillStyle="#f3f4f6";
    ctx.fillRect(x,y,cell,imgH);

    const img=await loadImage(c.image);
    if(img){
      const scale=Math.max(cell/img.width,imgH/img.height);
      const sw=cell/scale, sh=imgH/scale;
      const sx=(img.width-sw)/2, sy=(img.height-sh)/2;
      ctx.drawImage(img,sx,sy,sw,sh,x,y,cell,imgH);
    } else {
      ctx.fillStyle="#9ca3af";
      ctx.textAlign="center";
      ctx.textBaseline="middle";
      ctx.font="800 58px sans-serif";
      ctx.fillText(initials(c.name),x+cell/2,y+imgH/2);
      ctx.textAlign="left";
      ctx.textBaseline="alphabetic";
    }

    ctx.fillStyle="rgba(17,24,39,.88)";
    ctx.fillRect(x+10,y+10,54,54);
    ctx.fillStyle="#fff";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.font="800 28px sans-serif";
    ctx.fillText(String(i+1),x+37,y+37);
    ctx.textAlign="left";
    ctx.textBaseline="alphabetic";

    ctx.fillStyle="#111827";
    const nameSize=fitText(ctx,c.name,cell-24,27,20);
    ctx.font=`800 ${nameSize}px sans-serif`;
    ctx.fillText(c.name,x+10,y+imgH+38);

    ctx.fillStyle="#6b7280";
    const workSize=fitText(ctx,c.work,cell-24,19,15);
    ctx.font=`400 ${workSize}px sans-serif`;
    ctx.fillText(c.work,x+10,y+imgH+70);
  }

  ctx.fillStyle="#9ca3af";
  ctx.font="400 20px sans-serif";
  ctx.fillText(location.hostname + location.pathname,70,H-38);

  return new Promise(resolve=>canvas.toBlob(resolve,"image/png",1));
}

function downloadBlob(blob,name) {
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

$("save-btn").addEventListener("click",async()=>{
  const blob=await createResultBlob();
  if(blob) downloadBlob(blob,"dt-character-top9.png");
});

$("share-btn").addEventListener("click",async()=>{
  const shareText="私のデイヴィッド・テナント キャラクター推し9選 👑\n#DavidTennant #DTCharacterSort";
  const blob=await createResultBlob();
  if(!blob) return;

  const file=new File([blob],"dt-character-top9.png",{type:"image/png"});

  if(navigator.share && navigator.canShare && navigator.canShare({files:[file]})){
    try{
      await navigator.share({
        title:"デイヴィッド・テナント キャラクター 推し9選",
        text:shareText,
        url:location.href,
        files:[file]
      });
      return;
    }catch(e){
      if(e && e.name==="AbortError") return;
    }
  }

  downloadBlob(blob,"dt-character-top9.png");
  const intent="https://twitter.com/intent/tweet?text="+encodeURIComponent(shareText+"\n"+location.href);
  window.open(intent,"_blank","noopener,noreferrer");
  setTimeout(()=>alert("結果画像を保存しました。開いたXの投稿画面に画像を添付してください。"),300);
});

renderHero();
