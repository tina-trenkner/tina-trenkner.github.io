const greetings = [
  "Kia Ora!", "Que pasa?", "Howdy!", "Oh Hai!"
]

function showGreeting() {
  for (const msg of greetings) {
      document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("greeting").innerHTML =
      greetings[Math.floor(Math.random()*greetings.length)]
    });
  }
}
showGreeting();



// Spotify footer

const artistReq = new XMLHttpRequest();

artistReq.addEventListener("load", showSpotify);
getArtist();
setInterval(getArtist, 30000);

function getArtist() {
  artistReq.open("GET", "https://api.spotify.com/v1/me/player/currently-playing");
  artistReq.setRequestHeader('Authorization', 'Bearer BQAx8zIj4E45Qz0GxkfC2rNcNG3xpVhE2pOOyoEx1Eo9CtGsVtMR9t2eHzMIVZgnr1hH4eV2Fa2csfmGsnEQFXJc8LSz1euGNT2br1CaZO3VGT_ya6nocLXs02xJ9AZIudQ1kyjAKkcWZHQDndUwC8mAIQ' )
  artistReq.send();
}

function showSpotify() {
  const trackListing = JSON.parse(artistReq.responseText)
    document.getElementById("spotify").innerHTML = "I'm currently listening to " + trackListing.item.album.artists[0].name + " on Spotify."
}

// for Spotify backend, use Webtask and Sendgrid for Spotify. Maybe Last.fm?

const tinaFacts = ["I'm a Ravenclaw", "I'm an ISFJ", "I'm a damn Yankee", "I'm a Met fan", "I'm Latina", "I'm a Capricorn"]
