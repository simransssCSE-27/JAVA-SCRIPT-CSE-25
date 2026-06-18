function playSong()
{
    alert("Playing Music...");
}

function searchSong()
{
    let input =
    document.getElementById("searchBox").value.toLowerCase();

    let songs =
    document.querySelectorAll(".song");

    songs.forEach(function(song){

        let title =
        song.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input))
        {
            song.style.display = "block";
        }
        else
        {
            song.style.display = "none";
        }

    });
}