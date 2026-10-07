
const characters = [
  {
    "name": "Alec Hardy",
    "work": "Broadchurch",
    "image": "images/alec-hardy.jpg"
  },
  {
    "name": "Crowley",
    "work": "Good Omens",
    "image": "images/crowley.jpg"
  },
  {
    "name": "Tenth Doctor",
    "work": "Doctor Who",
    "image": "images/tenth-doctor.jpg"
  },
  {
    "name": "Fourteenth Doctor",
    "work": "Doctor Who",
    "image": "images/fourteenth-doctor.jpg"
  },
  {
    "name": "Kilgrave",
    "work": "Jessica Jones",
    "image": "images/kilgrave.jpg"
  },
  {
    "name": "Phileas Fogg",
    "work": "Around the World in 80 Days",
    "image": "images/phileas-fogg.jpg"
  },
  {
    "name": "Tony Baddingham",
    "work": "Rivals",
    "image": "images/tony-baddingham.jpg"
  },
  {
    "name": "Macbeth",
    "work": "Macbeth",
    "image": "images/macbeth.jpg"
  },
  {
    "name": "Richard II",
    "work": "Richard II",
    "image": "images/richard-ii.jpg"
  },
  {
    "name": "Casanova",
    "work": "Casanova",
    "image": "images/casanova.jpg"
  },
  {
    "name": "Campbell Bain",
    "work": "Takin' Over the Asylum",
    "image": "images/campbell-bain.jpg"
  },
  {
    "name": "Brendan Block",
    "work": "Secret Smile",
    "image": "images/brendan-block.jpg"
  },
  {
    "name": "Peter Carlisle",
    "work": "Blackpool",
    "image": "images/peter-carlisle.jpg"
  },
  {
    "name": "Peter Vincent",
    "work": "Fright Night",
    "image": "images/peter-vincent.jpg"
  },
  {
    "name": "James Arber",
    "work": "The Decoy Bride",
    "image": "images/james-arber.jpg"
  },
  {
    "name": "Arthur Eddington",
    "work": "Einstein and Eddington",
    "image": "images/eddington.jpg"
  },
  {
    "name": "Dave Tiler",
    "work": "Single Father",
    "image": "images/dave-tiler.jpg"
  },
  {
    "name": "Aiden Hoynes",
    "work": "The Politician's Husband",
    "image": "images/aiden-hoynes.jpg"
  },
  {
    "name": "Emmett Carver",
    "work": "Gracepoint",
    "image": "images/emmett-carver.jpg"
  },
  {
    "name": "Harry Watling",
    "work": "Inside Man",
    "image": "images/harry-watling.jpg"
  },
  {
    "name": "Dennis Nilsen",
    "work": "Des",
    "image": "images/dennis-nilsen.jpg"
  },
  {
    "name": "Simon Yates",
    "work": "There She Goes",
    "image": "images/simon-yates.jpg"
  },
  {
    "name": "Hamlet",
    "work": "Hamlet",
    "image": "images/hamlet.jpg"
  },
  {
    "name": "Don Juan",
    "work": "Don Juan in Soho",
    "image": "images/don-juan.jpg"
  },
  {
    "name": "Giacomo Casanova",
    "work": "Casanova",
    "image": "images/giacomo-casanova.jpg"
  },
  {
    "name": "Tom Kendrick",
    "work": "Deadwater Fell",
    "image": "images/tom-kendrick.jpg"
  },
  {
    "name": "R.D. Laing",
    "work": "Mad to Be Normal",
    "image": "images/rd-laing.jpg"
  },
  {
    "name": "John Knox",
    "work": "Mary Queen of Scots",
    "image": "images/john-knox.jpg"
  },
  {
    "name": "Barty Crouch Jr.",
    "work": "Harry Potter and the Goblet of Fire",
    "image": "images/barty-crouch-jr.jpg"
  },
  {
    "name": "Ginger Littlejohn",
    "work": "Bright Young Things",
    "image": "images/ginger-littlejohn.jpg"
  },
  {
    "name": "Will Burton",
    "work": "The Escape Artist",
    "image": "images/will-burton.jpg"
  },
  {
    "name": "Tommy",
    "work": "Recovery",
    "image": "images/tommy-recovery.jpg"
  }
];

const state = {
  mode: "favorite",
  round: 1,
  pool: [],
  groups: [],
  groupIndex: 0,
  survivors: [],
  selectedIds: [],
  unknown: new Set(),
  scores: new Map(),
  finalCandidates: []
};

const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function initials(name) {
  return name.split(/\s+/).map(x => x[0]).join("").slice(0,3).toUpperCase();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

function buildGroups(list, size = 4) {
  const shuffled = shuffle(list);
  const groups = [];
  for (let i = 0; i < shuffled.length; i += size) {
    groups.push(shuffled.slice(i, i + size));
  }
  return groups;
}

function startSort() {
  state.mode = $("mode").value;
  state.round = 1;
  state.pool = characters.map((c, i) => ({...c, id:i}));
  state.groups = buildGroups(state.pool);
  state.groupIndex = 0;
  state.survivors = [];
  state.selectedIds = [];
  state.unknown = new Set();
  state.scores = new Map(state.pool.map(c => [c.id, 0]));
  showScreen("sort-screen");
  renderGroup();
}

function questionForMode() {
  const map = {
    favorite:"この中から好きな2人を選んでください",
    date:"この中から付き合いたい2人を選んでください",
    face:"この中から顔が好きな2人を選んでください",
    danger:"この中から危険でも惹かれる2人を選んでください"
  };
  return map[state.mode];
}

function renderGroup() {
  const group = state.groups[state.groupIndex];
  if (!group) return advanceRound();

  $("round-number").textContent = state.round;
  $("question").textContent = questionForMode();
  $("progress-text").textContent = `${state.groupIndex + 1} / ${state.groups.length}`;
  $("progress-bar").style.width = `${((state.groupIndex + 1)/state.groups.length)*100}%`;

  state.selectedIds = [];
  $("next-btn").disabled = true;

  const grid = $("character-grid");
  grid.innerHTML = "";

  group.forEach(char => {
    const card = document.createElement("article");
    card.className = "character-card";
    card.dataset.id = char.id;

    const media = document.createElement("div");
    media.innerHTML = `
      <img class="character-image" src="${char.image}" alt="${char.name}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="fallback" style="display:none">${initials(char.name)}</div>
    `;

    const info = document.createElement("div");
    info.className = "character-info";
    info.innerHTML = `
      <div class="character-name">${char.name}</div>
      <div class="character-work">${char.work}</div>
    `;

    const tools = document.createElement("div");
    tools.className = "card-tools";
    const unknownBtn = document.createElement("button");
    unknownBtn.className = "mini-btn";
    unknownBtn.textContent = "知らない";
    unknownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleUnknown(char.id, card);
    });
    tools.appendChild(unknownBtn);

    card.appendChild(media);
    card.appendChild(info);
    card.appendChild(tools);

    card.addEventListener("click", () => toggleSelect(char.id, card));
    grid.appendChild(card);
  });
}

function toggleUnknown(id, card) {
  if (state.unknown.has(id)) {
    state.unknown.delete(id);
    card.classList.remove("unknown");
  } else {
    state.unknown.add(id);
    card.classList.add("unknown");
    state.selectedIds = state.selectedIds.filter(x => x !== id);
    card.classList.remove("selected");
  }
  updateNext();
}

function toggleSelect(id, card) {
  if (state.unknown.has(id)) return;

  if (state.selectedIds.includes(id)) {
    state.selectedIds = state.selectedIds.filter(x => x !== id);
    card.classList.remove("selected");
  } else {
    if (state.selectedIds.length >= 2) return;
    state.selectedIds.push(id);
    card.classList.add("selected");
  }
  updateNext();
}

function updateNext() {
  const knownInGroup = state.groups[state.groupIndex].filter(c => !state.unknown.has(c.id)).length;
  const needed = Math.min(2, knownInGroup);
  $("next-btn").disabled = state.selectedIds.length !== needed;
}

function confirmSelection() {
  const group = state.groups[state.groupIndex];
  state.selectedIds.forEach(id => {
    const char = group.find(c => c.id === id);
    if (char) {
      state.survivors.push(char);
      state.scores.set(id, (state.scores.get(id) || 0) + 10 + state.round);
    }
  });
  state.groupIndex++;
  renderGroup();
}

function holdGroup() {
  const group = state.groups[state.groupIndex];
  const known = group.filter(c => !state.unknown.has(c.id));
  known.forEach(c => {
    state.scores.set(c.id, (state.scores.get(c.id) || 0) + 1);
  });
  state.groupIndex++;
  renderGroup();
}

function advanceRound() {
  const unique = Array.from(new Map(state.survivors.map(c => [c.id,c])).values());

  if (unique.length <= 12 || state.round >= 4) {
    state.finalCandidates = unique.length ? unique : state.pool.filter(c => !state.unknown.has(c.id));
    return finishRanking();
  }

  state.round++;
  state.pool = unique;
  state.groups = buildGroups(state.pool);
  state.groupIndex = 0;
  state.survivors = [];
  renderGroup();
}

function finishRanking() {
  const candidates = state.finalCandidates.length
    ? state.finalCandidates
    : state.pool.filter(c => !state.unknown.has(c.id));

  const ranked = [...candidates]
    .sort((a,b) => (state.scores.get(b.id)||0) - (state.scores.get(a.id)||0))
    .slice(0,9);

  // 足りない場合は、これまでの得点上位から補完
  if (ranked.length < 9) {
    const ids = new Set(ranked.map(c => c.id));
    const extra = characters
      .map((c,i)=>({...c,id:i}))
      .filter(c => !ids.has(c.id) && !state.unknown.has(c.id))
      .sort((a,b)=>(state.scores.get(b.id)||0)-(state.scores.get(a.id)||0))
      .slice(0,9-ranked.length);
    ranked.push(...extra);
  }

  const label = {
    favorite:"一番好きなキャラ",
    date:"付き合いたいキャラ",
    face:"顔が好きなキャラ",
    danger:"危険でも惹かれるキャラ"
  }[state.mode];

  $("result-subtitle").textContent = `${label}ランキング`;
  const grid = $("ranking-grid");
  grid.innerHTML = "";

  ranked.forEach((char, index) => {
    const card = document.createElement("article");
    card.className = "rank-card";
    card.innerHTML = `
      <div class="rank-number">${index+1}</div>
      <img class="character-image" src="${char.image}" alt="${char.name}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="fallback" style="display:none">${initials(char.name)}</div>
      <div class="character-info">
        <div class="character-name">${char.name}</div>
        <div class="character-work">${char.work}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  showScreen("final-screen");
}

$("start-btn").addEventListener("click", startSort);
$("next-btn").addEventListener("click", confirmSelection);
$("skip-btn").addEventListener("click", holdGroup);
$("restart-btn").addEventListener("click", () => showScreen("start-screen"));
