const characters = [
  {
    "name": "10代目ドクター",
    "work": "Doctor Whoシリーズ",
    "image": "images/10thDoctor.jpg"
  },
  {
    "name": "14代目ドクター",
    "work": "Doctor Who: 60th Anniversary Specials",
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
    "name": "アリスター・ガルブレイス",
    "work": "Bite",
    "image": "images/Alastair Galbraith.jpg"
  },
  {
    "name": "アレック・ハーディ",
    "work": "ブロードチャーチ〜殺意の町〜",
    "image": "images/AlecHardy.png"
  },
  {
    "name": "アーサー・エディントン",
    "work": "Einstein and Eddington",
    "image": "images/Arthur Eddington.jpg"
  },
  {
    "name": "バーティ・クラウチ・ジュニア",
    "work": "ハリー・ポッターと炎のゴブレット",
    "image": "images/Barty Crouch Junior.png"
  },
  {
    "name": "ベネディック",
    "work": "Much Ado About Nothing",
    "image": "images/Benedick.jpg"
  },
  {
    "name": "ブレンダン・ブロック",
    "work": "Secret Smile",
    "image": "images/Brendan Block.webp"
  },
  {
    "name": "ケイル・エレンドライヒ",
    "work": "バッド・サマリタン",
    "image": "images/Cale Erendreich.webp"
  },
  {
    "name": "キャンベル・ベイン",
    "work": "Takin' Over the Asylum",
    "image": "images/Campbell.jpg"
  },
  {
    "name": "ジェラルド・コルサースト大尉",
    "work": "The Last September",
    "image": "images/Captain Gerald Colthurst.jpg"
  },
  {
    "name": "ジャコモ・カサノヴァ",
    "work": "Casanova",
    "image": "images/Casanova.jpg"
  },
  {
    "name": "チャーリー",
    "work": "Nine 1/2 Minutes",
    "image": "images/Charlie.jpg"
  },
  {
    "name": "クリス",
    "work": "Learners",
    "image": "images/Chris.webp"
  },
  {
    "name": "クリストファー・ウィリアムズ",
    "work": "The Deputy",
    "image": "images/Christopher Williams.jpg"
  },
  {
    "name": "クロウリー",
    "work": "グッド・オーメンズ",
    "image": "images/Crowley.jpg"
  },
  {
    "name": "デイヴ・タイラー",
    "work": "Single Father",
    "image": "images/Dave Tiler.jpg"
  },
  {
    "name": "デイヴィッド",
    "work": "Staged",
    "image": "images/David.png"
  },
  {
    "name": "ダヴィーナ",
    "work": "Rab C. Nesbitt",
    "image": "images/Davina.png"
  },
  {
    "name": "デニス・ニルセン",
    "work": "Des",
    "image": "images/Des.jpg"
  },
  {
    "name": "ゴードン・ブリスコー博士",
    "work": "The Quatermass Experiment",
    "image": "images/Doctor Gordon Briscoe.jpg"
  },
  {
    "name": "ドン・ジュアン",
    "work": "Don Juan in Soho",
    "image": "images/Don Juan.webp"
  },
  {
    "name": "ドナルド・ピーターソン",
    "work": "Nativity 2: Danger in the Manger!",
    "image": "images/Donald.jpg"
  },
  {
    "name": "ダグ・マクラウド",
    "work": "What We Did on Our Holiday",
    "image": "images/Doug McLeod.jpg"
  },
  {
    "name": "エドガー・ファロン医師",
    "work": "クリミナル：イギリス編",
    "image": "images/Dr. Edgar Fallon.webp"
  },
  {
    "name": "ドクター・クラル",
    "work": "Spine Chillers",
    "image": "images/Dr. Krull.jpg"
  },
  {
    "name": "酔っ払った学部生",
    "work": "Jude",
    "image": "images/Drunk Undergraduate.jpg"
  },
  {
    "name": "エメット・カーヴァー",
    "work": "Gracepoint",
    "image": "images/Emmett Carver.webp"
  },
  {
    "name": "元カレ",
    "work": "Being Considered",
    "image": "images/Ex.jpg"
  },
  {
    "name": "ゲイリー・イネス",
    "work": "Quality Control",
    "image": "images/Gary Innes.jpg"
  },
  {
    "name": "ギャビン・マキュアン",
    "work": "Trust",
    "image": "images/Gavin MacEwan.png"
  },
  {
    "name": "ギャビン",
    "work": "A Mug's Game",
    "image": "images/Gavin.jpg"
  },
  {
    "name": "ギャズ・ホイットニー",
    "work": "HIGH STAKES",
    "image": "images/Gaz Witney.jpg"
  },
  {
    "name": "現在を司るクリスマスの霊",
    "work": "The Catherine Tate Show: Nan's Christmas Carol",
    "image": "images/Ghost of Christmas Present.webp"
  },
  {
    "name": "ジャンピエロ",
    "work": "フォー・シーズンズ",
    "image": "images/Gianpiero.jpg"
  },
  {
    "name": "ジンジャー・リトルジョン",
    "work": "Bright Young Things",
    "image": "images/Ginger Littlejohn.jpg"
  },
  {
    "name": "ゴードン・スタイラス",
    "work": "Randall & Hopkirk (Deceased)",
    "image": "images/Gordon Stylus.jpg"
  },
  {
    "name": "グレイグ・ミラー",
    "work": "Terri McIntyre - Classy Bitch",
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
    "name": "ヘクター",
    "work": "ブラック・レコード〜禁じられた記録〜/ヒトラーコード39",
    "image": "images/Hector.jpg"
  },
  {
    "name": "イアン・ヴェンサム",
    "work": "木曜殺人クラブ",
    "image": "images/Ian Ventham.png"
  },
  {
    "name": "ジェームズ・アーバー",
    "work": "The Decoy Bride",
    "image": "images/James Arber.jpg"
  },
  {
    "name": "ジャン＝フランソワ・メルシエ",
    "work": "Spies of Warsaw",
    "image": "images/Jean-François Mercier.jpg"
  },
  {
    "name": "ジャン＝ジャック・ルソー",
    "work": "THE ROMANTICS",
    "image": "images/Jean-Jacques Rousseau.jpg"
  },
  {
    "name": "ジミー・マーフィー",
    "work": "ユナイテッド -ミュンヘンの悲劇-",
    "image": "images/Jimmy Murphy.jpg"
  },
  {
    "name": "ジョン・ハルダー",
    "work": "National Theatre Live: Good",
    "image": "images/John Halder.jpg"
  },
  {
    "name": "ジョン・ノックス",
    "work": "ふたりの女王 メアリーとエリザベス",
    "image": "images/John Knox.jpg"
  },
  {
    "name": "ジョン・マクブライド",
    "work": "The Tales of Para Handy",
    "image": "images/John MacBryde.jpg"
  },
  {
    "name": "ジョン",
    "work": "You, Me and Him",
    "image": "images/John.jpg"
  },
  {
    "name": "ジョン",
    "work": "Love in the 21st Century",
    "image": "images/John_21st.jpg"
  },
  {
    "name": "ホセ＝ルイス",
    "work": "POSH NOSH",
    "image": "images/Jose-Luis and Piers.jpg"
  },
  {
    "name": "キルグレイヴ",
    "work": "Marvel ジェシカ・ジョーンズ",
    "image": "images/Kevin Thompson.webp"
  },
  {
    "name": "ピアース・ポンフリー",
    "work": "聖トリニアンズ女学院２",
    "image": "images/Lord Pomfrey.png"
  },
  {
    "name": "マクベス",
    "work": "Macbeth",
    "image": "images/Macbeth.png"
  },
  {
    "name": "マーク",
    "work": "96 Ways to Say I Love You",
    "image": "images/Mark.jpg"
  },
  {
    "name": "マーティン・ラム",
    "work": "Hang Ups",
    "image": "images/Martin Lamb.jpg"
  },
  {
    "name": "マックス・ヴァレンタイン",
    "work": "The Mrs Bradley Mysteries",
    "image": "images/Max Valentine.jpg"
  },
  {
    "name": "ギブソン氏",
    "work": "He Knew He Was Right",
    "image": "images/Mr Gibson.jpg"
  },
  {
    "name": "ミスター・スライトリーマン",
    "work": "THIS IS JINSY",
    "image": "images/Mr Slightlyman.jpg"
  },
  {
    "name": "ローガン先生",
    "work": "The Big Night In",
    "image": "images/Mr. Logan.png"
  },
  {
    "name": "ミスター・ワトソン",
    "work": "Old Street",
    "image": "images/Mr. Watson.jpg"
  },
  {
    "name": "ニール・マクドナルド",
    "work": "Dramarama",
    "image": "images/Neil McDonald.jpg"
  },
  {
    "name": "ニック・デイヴィス",
    "work": "The Hack",
    "image": "images/Nick Davies.jpg"
  },
  {
    "name": "ニック",
    "work": "True Love",
    "image": "images/Nick.jpg"
  },
  {
    "name": "看護師",
    "work": "HOLDING THE BABY",
    "image": "images/Nurse.jpg"
  },
  {
    "name": "ピート",
    "work": "Sweetnightgoodheart",
    "image": "images/Pete.jpg"
  },
  {
    "name": "ピーター・カーライル",
    "work": "Blackpool",
    "image": "images/Peter Carlisle.png"
  },
  {
    "name": "ピーター・ヴィンセント",
    "work": "フライトナイト/恐怖の夜",
    "image": "images/Peter Vincent.webp"
  },
  {
    "name": "フィリアス・フォッグ",
    "work": "Around the World in 80 Days",
    "image": "images/Phileas Fogg.jpg"
  },
  {
    "name": "警察官",
    "work": "BUNCH OF FIVE",
    "image": "images/Policeman.jpg"
  },
  {
    "name": "トニー・ブレア",
    "work": "Dead Ringers",
    "image": "images/Regenerated Tony Blair.jpg"
  },
  {
    "name": "レックス・アレクサンダー",
    "work": "Rex Is Not Your Lawyer",
    "image": "images/Rex Alexander.jpg"
  },
  {
    "name": "リチャード・ホガート",
    "work": "The Chatterley Affair",
    "image": "images/Richard Hoggart.jpg"
  },
  {
    "name": "リチャード2世",
    "work": "RSC Live: Richard II",
    "image": "images/Richard II.jpg"
  },
  {
    "name": "リチャード",
    "work": "GO! GO! L.A.",
    "image": "images/Richard.jpg"
  },
  {
    "name": "ロブ・ハーカー",
    "work": "People Like Us",
    "image": "images/Rob Harker.jpg"
  },
  {
    "name": "ロデリック・ピーターソン",
    "work": "Nativity 2: Danger in the Manger!",
    "image": "images/Roderick.jpg"
  },
  {
    "name": "R・D・レイン",
    "work": "Mad to Be Normal",
    "image": "images/Ronald David Laing.jpg"
  },
  {
    "name": "サイモン・“ダーウィン”・ブラウン",
    "work": "Duck Patrol",
    "image": "images/Simon 'Darwin' Brown.jpg"
  },
  {
    "name": "サイモン",
    "work": "There She Goes",
    "image": "images/Simon.jpg"
  },
  {
    "name": "スティーブ・クレメンス",
    "work": "THE BILL",
    "image": "images/Steve Clemens.jpg"
  },
  {
    "name": "クリエイター",
    "work": "The Genius Game",
    "image": "images/The Creator.png"
  },
  {
    "name": "テオ・ハワード",
    "work": "Foyle's War",
    "image": "images/Theo Howard.jpg"
  },
  {
    "name": "第3の歩兵",
    "work": "The Play on One / Biting the Hands",
    "image": "images/Third Squaddie.jpg"
  },
  {
    "name": "ティモシー",
    "work": "Screening",
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
    "name": "交通巡視員",
    "work": "Traffic Warden",
    "image": "images/Traffic Warden.jpg"
  },
  {
    "name": "ヴィニー",
    "work": "Spaces",
    "image": "images/Vinny.jpg"
  },
  {
    "name": "ウォルト",
    "work": "Camping",
    "image": "images/Walt.jpg"
  },
  {
    "name": "ウィル・バートン",
    "work": "The Escape Artist",
    "image": "images/Will Burton.webp"
  },
  {
    "name": "ウィル",
    "work": "Playhouse Presents",
    "image": "images/Will.jpg"
  },
  {
    "name": "アレクサンドル・リトビネンコ",
    "work": "Litvinenko",
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
    const fullGroups=Math.floor(current/4);
    const remainder=current%4;

    // 4人組に加えて、2〜3人余った場合はその余り組も比較する。
    total+=fullGroups+(remainder>=2 ? 1 : 0);

    // 余りは1人でも2〜3人でも、次ラウンドへ進むのは1人。
    current=fullGroups+(remainder>0 ? 1 : 0);
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
  state.active=shuffle(state.active);
  state.active.forEach(c=>state.reachedRound.set(c.id,state.round));

  state.groups=[];
  state.roundWinners=[];

  const fullCount=Math.floor(state.active.length/4)*4;
  const matched=state.active.slice(0,fullCount);
  const leftovers=state.active.slice(fullCount);

  for(let i=0;i<matched.length;i+=4){
    state.groups.push(matched.slice(i,i+4));
  }

  // 1人だけ余った場合のみ自動通過。
  // 2〜3人余った場合は、その人数で比較して1人を選ぶ。
  if(leftovers.length===1){
    state.roundWinners.push(leftovers[0]);
  }else if(leftovers.length>=2){
    state.groups.push(leftovers);
  }

  state.groupIndex=0;
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
  wrap.dataset.count=String(group.length);

  group.forEach(c=>{
    const card=document.createElement("article");
    card.className="choice";
    const work=c.work ? `<div class="choice-work">${escapeHtml(c.work)}</div>` : "";
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
  state.active=winners;
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

  // スクショ風：4・5・6 / 2・1・3 / 7・8・9
  const displayOrder=[3,4,5,1,0,2,6,7,8];

  displayOrder.forEach(resultIndex=>{
    const c=state.result[resultIndex];
    if(!c) return;

    const rank=resultIndex+1;
    const el=document.createElement("article");
    el.className=`rank rank-${rank}`;
    el.dataset.rank=String(rank);

    const work=c.work
      ? `<div class="rank-work">${escapeHtml(c.work)}</div>`
      : "";

    el.innerHTML=`
      <div class="rank-badge">${rank}位</div>
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

// david-tennant-site と同じ「正方形 + cover + center top」
function drawSquareCoverTop(ctx,img,x,y,size) {
  const scale=Math.max(size/img.width,size/img.height);
  const dw=img.width*scale;
  const dh=img.height*scale;
  const dx=x+(size-dw)/2;
  const dy=y;

  ctx.save();
  ctx.beginPath();
  ctx.rect(x,y,size,size);
  ctx.clip();
  ctx.drawImage(img,dx,dy,dw,dh);
  ctx.restore();
}

async function createResultBlob() {
  const W=1200;
  const margin=70,gap=18,top=245;
  const cell=(W-margin*2-gap*2)/3;
  const imgH=cell; // 正方形
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
  ctx.fillText("デイヴィッド・テナント 好き顔9選",72,198);

  const displayOrder=[3,4,5,1,0,2,6,7,8];

  for(let i=0;i<displayOrder.length;i++){
    const resultIndex=displayOrder[i];
    const c=state.result[resultIndex];
    if(!c) continue;
    const rank=resultIndex+1;
    const row=Math.floor(i/3),col=i%3;
    const x=margin+col*(cell+gap);
    const y=top+row*(imgH+labelH+gap);

    ctx.fillStyle="#eef0f3"; ctx.fillRect(x,y,cell,imgH);
    const img=await loadImage(c.image);

    if(img){
      drawSquareCoverTop(ctx,img,x,y,cell);
    }else{
      ctx.fillStyle="#9ca3af"; ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.font="800 58px sans-serif"; ctx.fillText(initials(c.name),x+cell/2,y+cell/2);
      ctx.textAlign="left"; ctx.textBaseline="alphabetic";
    }

    if(rank===1){
      const badgeGrad=ctx.createLinearGradient(x+10,y+10,x+78,y+10);
      badgeGrad.addColorStop(0,"#8b5cf6");
      badgeGrad.addColorStop(1,"#ec4899");
      ctx.fillStyle=badgeGrad;
    }else if(rank===2){
      ctx.fillStyle="#5f82d9";
    }else{
      ctx.fillStyle="#fff";
    }

    ctx.beginPath();
    if(ctx.roundRect){
      ctx.roundRect(x+10,y+10,68,48,24);
    }else{
      ctx.rect(x+10,y+10,68,48);
    }
    ctx.fill();

    ctx.fillStyle=rank<=2 ? "#fff" : "#111827";
    ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.font="800 22px sans-serif";
    ctx.fillText(`${rank}位`,x+44,y+34);
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
  const shareText = `私のDT 好き顔9選 👑

#DTCharacterSort
https://qnopod.github.io/david-tennant-character-sort/?v=3`;

  // 画像付き共有に対応するスマホ等では、
  // 結果画像を生成してOSの共有画面へ渡す。
  // Webの仕様上、共有先をXに固定することはできない。
  if (navigator.share && navigator.canShare) {
    const blob = await createResultBlob();
    if (!blob) return;

    const file = new File(
      [blob],
      "dt-character-top9.png",
      {type:"image/png"}
    );

    if (navigator.canShare({files:[file]})) {
      try {
        await navigator.share({
          title: "DT 好き顔9選",
          text: shareText,
          files: [file]
        });
        return;
      } catch (e) {
        if (e && e.name === "AbortError") return;
      }
    }
  }

  // PC等ではXの投稿作成画面を即座に開く。
  // X Web Intentはローカル画像の自動添付には対応していないため、
  // 結果画像を同時に自動保存する。
  const intent =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(shareText);

  const xWindow = window.open(
    intent,
    "_blank",
    "noopener,noreferrer"
  );

  if (!xWindow) {
    window.location.href = intent;
  }

  const blob = await createResultBlob();
  if (blob) {
    downloadBlob(blob, "dt-character-top9.png");
  }
});

renderHero();
