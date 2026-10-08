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

const HERO_IMAGES = null;

// Two complete qualifying passes, followed by adaptive comparisons of contenders.
// The sorter intentionally uses winner-only, four-photo choices (three if needed).
const SCREENING_ROUNDS = 2;
const CONTENDER_COUNT = 24;
const SEMIFINAL_CHOICES = 8;
const FINALIST_COUNT = 16;
const FINAL_CHOICES = 12;

const state = {
  all: [],
  phase: "screening",
  screeningRound: 0,
  groups: [],
  groupIndex: 0,
  currentGroup: null,
  pool: [],
  stageChoices: 0,
  stageAppearances: new Map(),
  pairCounts: new Map(),
  rating: new Map(),
  wins: new Map(),
  appearances: new Map(),
  seedOrder: new Map(),
  answered: 0,
  totalEstimated: 0,
  result: []
};

const $ = id => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initials(name) {
  return name.replace(/[・\s\.／]/g, "").slice(0, 2);
}

function show(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top: 0, behavior: "instant"});
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

function imageSrc(path) {
  return encodeURI(path);
}

function imageMarkup(c) {
  return `<img src="${imageSrc(c.image)}" alt="${escapeHtml(c.name)}"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="fallback" style="display:none">${escapeHtml(initials(c.name))}</div>`;
}

function renderHero() {
  $("member-count").textContent = `${characters.length}人から、あなたのTOP9を。`;
  const box = $("hero-collage");
  box.innerHTML = "";

  const heroPaths = HERO_IMAGES;
  const showItems = heroPaths
    ? heroPaths.map(path => characters.find(c => c.image === path)).filter(Boolean)
    : characters.slice(0, 9);

  showItems.forEach(c => {
    const el = document.createElement("div");
    el.className = "hero-tile";
    el.innerHTML = imageMarkup(c);
    box.appendChild(el);
  });
}

function groupSizes(n) {
  const groupCount = Math.ceil(n / 4);
  if (groupCount === 0) return [];
  const smaller = Math.floor(n / groupCount);
  const extra = n % groupCount;
  return Array.from({length: groupCount}, (_, i) => smaller + (i < extra ? 1 : 0));
}

function splitGroups(items, sizes) {
  let pos = 0;
  return sizes.map(size => {
    const group = items.slice(pos, pos + size);
    pos += size;
    return group;
  });
}

function pairKey(a, b) {
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

function previousMeetings(a, b) {
  return state.pairCounts.get(pairKey(a.id, b.id)) || 0;
}

// Find a shuffled distribution with as few repeat opponents as possible.
function makeScreeningGroups() {
  const sizes = groupSizes(state.all.length);
  let best = null;
  let bestPenalty = Infinity;
  for (let attempt = 0; attempt < 100; attempt++) {
    const trial = splitGroups(shuffle(state.all), sizes);
    let penalty = 0;
    for (const group of trial) {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          penalty += previousMeetings(group[i], group[j]);
        }
      }
    }
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      best = trial;
    }
    if (penalty === 0) break;
  }
  return best;
}

function rankCandidates(items) {
  return [...items].sort((a, b) => {
    const ratingDiff = (state.rating.get(b.id) || 1000) - (state.rating.get(a.id) || 1000);
    if (Math.abs(ratingDiff) > 0.0000001) return ratingDiff;
    const winsDiff = (state.wins.get(b.id) || 0) - (state.wins.get(a.id) || 0);
    if (winsDiff) return winsDiff;
    return (state.seedOrder.get(a.id) || 0) - (state.seedOrder.get(b.id) || 0);
  });
}

function startQuiz() {
  state.all = characters.map((c, id) => ({...c, id}));
  state.phase = "screening";
  state.screeningRound = 0;
  state.groups = [];
  state.groupIndex = 0;
  state.currentGroup = null;
  state.pool = [];
  state.stageChoices = 0;
  state.stageAppearances = new Map();
  state.pairCounts = new Map();
  state.rating = new Map(state.all.map(c => [c.id, 1000]));
  state.wins = new Map(state.all.map(c => [c.id, 0]));
  state.appearances = new Map(state.all.map(c => [c.id, 0]));
  state.seedOrder = new Map(shuffle(state.all).map((c, i) => [c.id, i]));
  state.answered = 0;
  state.totalEstimated = groupSizes(state.all.length).length * SCREENING_ROUNDS
    + SEMIFINAL_CHOICES + FINAL_CHOICES;
  state.result = [];
  beginScreeningRound();
  show("quiz");
}

function beginScreeningRound() {
  state.screeningRound += 1;
  state.groups = makeScreeningGroups();
  state.groupIndex = 0;
  renderGroup();
}

function beginFocusedStage(phase, count) {
  state.phase = phase;
  state.pool = rankCandidates(phase === "semifinal" ? state.all : state.pool).slice(0, count);
  state.stageChoices = 0;
  state.stageAppearances = new Map(state.pool.map(c => [c.id, 0]));
  renderGroup();
}

// Every remaining contender receives similar numbers of comparisons.
// Within that restriction, prefer closely matched photos and fresh opponents.
function chooseFocusedGroup() {
  const pool = state.pool;
  const minPlayed = Math.min(...pool.map(c => state.stageAppearances.get(c.id) || 0));
  const underShown = pool.filter(c => (state.stageAppearances.get(c.id) || 0) === minPlayed);
  const currentRank = rankCandidates(pool);
  const rankOf = new Map(currentRank.map((c, i) => [c.id, i]));

  const anchor = shuffle(underShown).sort((a, b) => {
    const da = Math.abs((rankOf.get(a.id) || 0) - 8);
    const db = Math.abs((rankOf.get(b.id) || 0) - 8);
    return da - db;
  })[0];

  const selected = [anchor];
  while (selected.length < Math.min(4, pool.length)) {
    const next = shuffle(pool.filter(c => !selected.some(s => s.id === c.id)))
      .sort((a, b) => {
        const ratingA = state.rating.get(a.id) || 1000;
        const ratingB = state.rating.get(b.id) || 1000;
        const target = selected.reduce((sum, c) => sum + (state.rating.get(c.id) || 1000), 0) / selected.length;
        const cost = c => (state.stageAppearances.get(c.id) || 0) * 1000
          + Math.abs((state.rating.get(c.id) || 1000) - target) * 1.7
          + selected.reduce((sum, s) => sum + previousMeetings(c, s) * 75, 0);
        return cost(a) - cost(b);
      })[0];
    selected.push(next);
  }
  return shuffle(selected);
}

function updateProgress() {
  const pct = Math.min(100, Math.round(state.answered / state.totalEstimated * 100));
  $("percent").textContent = `${pct}%`;
  $("bar").style.width = `${pct}%`;
}

function renderGroup() {
  updateProgress();
  if (state.phase === "screening") {
    if (state.groupIndex >= state.groups.length) {
      if (state.screeningRound < SCREENING_ROUNDS) {
        beginScreeningRound();
      } else {
        beginFocusedStage("semifinal", CONTENDER_COUNT);
      }
      return;
    }
    state.currentGroup = state.groups[state.groupIndex];
  } else {
    if (state.stageChoices >= (state.phase === "semifinal" ? SEMIFINAL_CHOICES : FINAL_CHOICES)) {
      if (state.phase === "semifinal") {
        beginFocusedStage("final", FINALIST_COUNT);
      } else {
        buildFinalRanking();
      }
      return;
    }
    state.currentGroup = chooseFocusedGroup();
  }

  const group = state.currentGroup;
  const wrap = $("choices");
  wrap.innerHTML = "";
  wrap.dataset.count = String(group.length);

  group.forEach(c => {
    const card = document.createElement("article");
    card.className = "choice";
    const work = c.work ? `<div class="choice-work">${escapeHtml(c.work)}</div>` : "";
    card.innerHTML = `<div class="choice-media">${imageMarkup(c)}</div>
      <div class="choice-body"><div class="choice-name">${escapeHtml(c.name)}</div>${work}</div>`;
    card.addEventListener("click", () => selectCharacter(c));
    wrap.appendChild(card);
  });
}

function selectCharacter(winner) {
  const group = state.currentGroup;
  const winnerRating = state.rating.get(winner.id) || 1000;
  const changes = new Map();
  const k = state.phase === "screening" ? 20 : state.phase === "semifinal" ? 24 : 28;
  const multiplier = 1 / Math.sqrt(Math.max(1, group.length - 1));

  // Elo-like pairwise evidence from the single 4-way choice.
  group.forEach(c => {
    state.appearances.set(c.id, (state.appearances.get(c.id) || 0) + 1);
    if (state.phase !== "screening") {
      state.stageAppearances.set(c.id, (state.stageAppearances.get(c.id) || 0) + 1);
    }
    if (c.id === winner.id) return;
    const otherRating = state.rating.get(c.id) || 1000;
    const expected = 1 / (1 + Math.pow(10, (otherRating - winnerRating) / 400));
    const delta = k * multiplier * (1 - expected);
    changes.set(winner.id, (changes.get(winner.id) || 0) + delta);
    changes.set(c.id, (changes.get(c.id) || 0) - delta);
  });

  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const key = pairKey(group[i].id, group[j].id);
      state.pairCounts.set(key, (state.pairCounts.get(key) || 0) + 1);
    }
  }
  changes.forEach((delta, id) => state.rating.set(id, (state.rating.get(id) || 1000) + delta));
  state.wins.set(winner.id, (state.wins.get(winner.id) || 0) + 1);
  state.answered += 1;

  if (state.phase === "screening") state.groupIndex += 1;
  else state.stageChoices += 1;
  renderGroup();
}

function buildFinalRanking() {
  state.result = rankCandidates(state.pool).slice(0, 9);
  renderResult();
}

function renderResult() {
  const box = $("ranking");
  box.innerHTML = "";
  const displayOrder = [3, 4, 5, 1, 0, 2, 6, 7, 8];

  displayOrder.forEach(resultIndex => {
    const c = state.result[resultIndex];
    if (!c) return;
    const rank = resultIndex + 1;
    const el = document.createElement("article");
    el.className = `rank rank-${rank}`;
    el.dataset.rank = String(rank);
    const work = c.work ? `<div class="rank-work">${escapeHtml(c.work)}</div>` : "";
    el.innerHTML = `<div class="rank-badge">${rank}位</div>
      <div class="rank-media">${imageMarkup(c)}</div>
      <div class="rank-body"><div class="rank-name">${escapeHtml(c.name)}</div>${work}</div>`;
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
  const shareText = `私のDT好き顔9選👑

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
