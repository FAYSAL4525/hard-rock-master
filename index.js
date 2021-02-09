const searchSong = async () => {
    const searchText1 = document.getElementById("searchText").value;
    const url = `https://api.lyrics.ovh/suggest/:${searchText1}`
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>songDisplay(data.data))

    try {
        const res = await fetch(url)
        const data = await res.json()
        songDisplay(data.data);
    }
    catch {
        console.log("can not load data");
    }

}

const songDisplay = songName => {
    console.log(songName);
    const songName1 = document.getElementById("songName");
    songName1.innerHTML = "";
    songName.forEach(song => {
        console.log(song.title);
        songDiv = document.createElement("div")
        songDiv.className = "single-result  row align-items-center my-3 p-3"
        songDiv.innerHTML = `<div   class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                        <source src="${song.preview}" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getliric('${song.artist.name}','${song.title}')"class="btn btn-success">Get Lyrics</button>
                    </div>`
        songName1.appendChild(songDiv);

    });

}
const getliric = (artist, title) => {
    url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => lirics(data.lyrics))
        .catch(error => console.log(error))
    // const res = await fetch(url)
    // const data = await res.json()
    // lirics(data.lyrics)
}
const lirics = liric => {
    console.log(liric);
    const singleLiric = document.getElementById("singleLiric");
    singleLiric.innerText = "";
    singleLiric.innerText = liric;


}
