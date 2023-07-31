// Lyrics Function
const url =
"https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=7076626";
const options = {
method: "GET",
headers: {
"X-RapidAPI-Key": "de643c7ed2mshba9121c2cd13ef1p1bcb81jsn06ee3d80cdc7",
"X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
},
};

const lyricsContainer = document.getElementById("songlyrics");

displayLyrics();
async function displayLyrics() {
try {
const response = await fetch(url, options);
const result = await response.json();
console.log(result);
const lyrics = result["lyrics"]["lyrics"]["body"]["html"];
lyricsContainer.innerHTML = lyrics;
} catch (error) {
console.error(error);
}
}



// Other albums function

const albumsEndpoint =
  "https://spotify23.p.rapidapi.com/search/?q=taylor%20swift&type=multi&offset=0&limit=10&numberOfTopResults=5";
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "de643c7ed2mshba9121c2cd13ef1p1bcb81jsn06ee3d80cdc7",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

const albumsContainer = document.querySelector(".album-container");

getAlbums();
async function getAlbums() {
  try {
    const response = await fetch(albumsEndpoint, options2);
    const result = await response.json();

    let album = result.albums.items;

    album.forEach((item) => {
      console.log(result);
      albumsContainer.innerHTML += `
       <div class="albumdesign">
       <img src="${item.data.coverArt.sources[0].url}" alt="">
       <p>${item.data.name}</p>
       <p>Release Date: ${item.data.date.year}</p>
     </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}


// Related Artists function

const artistsEndpoint = 'https://spotify23.p.rapidapi.com/artist_related/?id=2w9zwq3AktTeYYMuhMjju8';
const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de643c7ed2mshba9121c2cd13ef1p1bcb81jsn06ee3d80cdc7',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const artistsContainer = document.querySelector('.artists-container')


relatedArtists();
async function relatedArtists() {
  try {
    const response = await fetch(artistsEndpoint, options3);
    const result = await response.json();

    let artist = result.artists;
    // console.log(result.artists[0].images[0]);
    artist.forEach((item) => {
      artistsContainer.innerHTML += 
      `
      <div class="artistsdesign">
        <img src="${item.images[0].url}" alt="">
        <p>${item.name}</p>
      </div>
      `;
    })

      
  } catch (error) {
    console.error(error);
  }
}





























// TAB FUNCTION
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// play function
const circlePlayButton = document.querySelector("#circle-play");
const circlePauseButton = document.querySelector("#circle-pause");
const audioElement = document.querySelector("audio");

function toggleAudio() {
  if (audioElement.paused) {
    audioElement.play();
    circlePlayButton.style.display = "none";
    circlePauseButton.style.display = "inline";
  } else {
    audioElement.pause();
    circlePauseButton.style.display = "none";
    circlePlayButton.style.display = "inline";
  }
}

circlePlayButton.addEventListener("click", toggleAudio);
circlePauseButton.addEventListener("click", toggleAudio);
