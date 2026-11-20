const albums = [
  { title: "The Star Chapter: SANCTUARY", year: "2024", theme: "Silver Sanctuary", image: "https://i.ytimg.com/vi/9P-XtON44UA/maxresdefault.jpg", tracks: [
    ["1", "We’ll Never Change", "Alternative Rock"], ["2", "Over The Moon", "Pop Rock"], ["3", "Danger", "Dance Pop"], ["4", "Resist (Not Gonna Run Away)", "Pop Punk"], ["5", "Forty One Winks", "R&B"], ["6", "Higher Than Heaven", "Pop Rock"]
  ]},
  { title: "minisode 3: TOMORROW", year: "2024", theme: "Dream & Memory", image: "https://i.ytimg.com/vi/C0EYKxF1oTI/maxresdefault.jpg", tracks: [
    ["1", "I'll See You There Tomorrow", "Synth Pop"], ["2", "- ― --- --- (Deja Vu)", "Dance Pop"], ["3", "Miracle", "Pop Rock"], ["4", "The Killa (I Belong to You)", "R&B"], ["5", "Quarter Life", "Alternative Pop"], ["6", "Deja Vu (Anemoia Remix)", "Electronic"], ["7", "Deja Vu (Funk Remix)", "Funk"]
  ]},
  { title: "The Name Chapter: FREEFALL", year: "2023", theme: "Freefall", image: "https://i.ytimg.com/vi/Ur3Yx5I4nF4/maxresdefault.jpg", tracks: [
    ["1", "Growing Pain", "Alt Pop"], ["2", "Chasing That Feeling", "Pop Rock"], ["3", "Back for More", "Dance Pop"], ["4", "Dreamer", "Pop"], ["5", "Deep Down", "R&B"], ["6", "Happily Ever After", "Pop Rock"], ["7", "Skipping Stones", "R&B"], ["8", "Blue Spring", "Pop Ballad"], ["9", "Do It Like That", "Pop Rock"]
  ]},
  { title: "The Name Chapter: TEMPTATION", year: "2023", theme: "Neverland", image: "https://i.ytimg.com/vi/d5Hj2vQ5mN4/maxresdefault.jpg", tracks: [
    ["1", "Devil by the Window", "Synth Pop"], ["2", "Sugar Rush Ride", "Pop"], ["3", "Happy Fools", "Pop Rap"], ["4", "Tinnitus (Wanna be a flea)", "Alt Pop"], ["5", "네버랜드를 떠나며", "Pop Ballad"]
  ]},
  { title: "minisode 2: Thursday's Child", year: "2022", theme: "Thursday", image: "https://i.ytimg.com/vi/kX_Qk5pM2fM/maxresdefault.jpg", tracks: [
    ["1", "Opening Sequence", "Pop Rock"], ["2", "Good Boy Gone Bad", "Hip-hop"], ["3", "Trust Fund Baby", "Pop Rock"], ["4", "Lonely Boy", "Alt Rock"], ["5", "Thursday's Child Has Far to Go", "Alt Pop"]
  ]}
];

const videos = [
  { title: "Beautiful Strangers", category: "Official MV · 2024", id: "9P-XtON44UA" },
  { title: "Deja Vu", category: "Official MV · 2024", id: "C0EYKxF1oTI" },
  { title: "Chasing That Feeling", category: "Official MV · 2023", id: "ISnyONG1dNc" },
  { title: "Back for More", category: "Official MV · 2023", id: "Ur3Yx5I4nF4" },
  { title: "Sugar Rush Ride", category: "Official MV · 2023", id: "d5Hj2vQ5mN4" },
  { title: "Good Boy Gone Bad", category: "Official MV · 2022", id: "kX_Qk5pM2fM" }
];

const albumRail = document.querySelector("#albumRail");
albums.forEach((album, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "album-card";
  card.dataset.album = index;
  card.innerHTML = `<img src="${album.image}" alt="${album.title}" loading="lazy"><div class="album-card-info"><h3>${album.title}</h3><p>${album.year} · ${album.theme}</p></div>`;
  card.addEventListener("click", () => openAlbum(index));
  albumRail.appendChild(card);
});

const videoRail = document.querySelector("#videoRail");
videos.forEach((video) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "video-card";
  card.innerHTML = `<img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" loading="lazy"><div class="video-card-info"><h3>${video.title}</h3><p>${video.category}</p></div>`;
  card.addEventListener("click", () => openPlayer(video.id));
  videoRail.appendChild(card);
});

const chapters = [
  ["The Dream Chapter", "꿈과 현실"], ["The Chaos Chapter", "혼란과 성장"],
  ["The Name Chapter", "자아와 관계"], ["The Star Chapter", "서로를 향한 별"]
];
document.querySelector("#chapters").innerHTML = chapters.map(([title, copy]) => `<div class="chapter"><strong>${title}</strong><span>${copy}</span></div>`).join("");

const detailsModal = document.querySelector("#detailsModal");
const playerModal = document.querySelector("#playerModal");
const trackList = document.querySelector("#trackList");

function openAlbum(index) {
  const album = albums[index];
  document.querySelector("#modalTitle").textContent = index === 0 ? "Beautiful Strangers" : album.title;
  document.querySelector("#detailsBanner").style.backgroundImage = `url('${album.image}')`;
  document.querySelector(".details-info").innerHTML = `<p><span class="match">98% 일치</span> <strong>${album.year}</strong> ALBUM</p><p><b>앨범</b> ${album.title}</p><p><b>출연</b> 수빈, 연준, 범규, 태현, 휴닝카이</p><p><b>장르</b> K-pop, Pop Rock, R&B</p>`;
  trackList.innerHTML = album.tracks.map((track) => `<div class="track"><span class="track-number">${track[0]}</span><div class="track-title"><strong>${track[1]}</strong><span>TXT · Official audio</span></div><span class="track-genre">${track[2]}</span><a class="track-link" href="https://www.youtube.com/results?search_query=TXT+${encodeURIComponent(track[1])}+official+audio" target="_blank" rel="noopener" aria-label="Official audio search">▶</a></div>`).join("");
  detailsModal.classList.add("open");
  detailsModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetails() {
  detailsModal.classList.remove("open");
  detailsModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openPlayer(videoId) {
  document.querySelector("#videoFrame").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="Official TXT video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  playerModal.classList.add("open");
  playerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  document.querySelector("#videoFrame").innerHTML = "";
  playerModal.classList.remove("open");
  playerModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const sanctuaryTrackNames = [
  ["1", "We'll Never Change", "Alternative Rock"], ["2", "Over The Moon", "Pop Rock"], ["3", "Danger", "Dance Pop"], ["4", "Resist (Not Gonna Run Away)", "Pop Punk"], ["5", "Forty One Winks", "R&B"], ["6", "Higher Than Heaven", "Pop Rock"]
];
trackList.innerHTML = sanctuaryTrackNames.map((track) => `<div class="track"><span class="track-number">${track[0]}</span><div class="track-title"><strong>${track[1]}</strong><span>TXT · Official audio</span></div><span class="track-genre">${track[2]}</span><a class="track-link" href="https://www.youtube.com/results?search_query=TXT+${encodeURIComponent(track[1])}+official+audio" target="_blank" rel="noopener" aria-label="Official audio search">▶</a></div>`).join("");

document.querySelector("#openDetails").addEventListener("click", () => openAlbum(0));
document.querySelector("#closeModal").addEventListener("click", closeDetails);
document.querySelector("#playHero").addEventListener("click", () => openPlayer("9P-XtON44UA"));
document.querySelector("#playModal").addEventListener("click", () => openPlayer("9P-XtON44UA"));
document.querySelector("#closePlayer").addEventListener("click", closePlayer);

detailsModal.addEventListener("click", (event) => { if (event.target === detailsModal) closeDetails(); });
playerModal.addEventListener("click", (event) => { if (event.target === playerModal) closePlayer(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeDetails(); closePlayer(); } });

window.addEventListener("scroll", () => document.querySelector("#topbar").classList.toggle("scrolled", window.scrollY > 20));
document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(`#${button.dataset.scroll}`).scrollBy({ left: 500, behavior: "smooth" });
}));
