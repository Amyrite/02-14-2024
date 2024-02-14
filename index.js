function getData() {
    xml = document.getElementById("xmldata");
    songs = xml.getElementsByTagName("song");

    for (song of songs) {
        title = song.getElementsByTagName("title")[0].textContent;
        console.log(title);
    }
}

function search(str) {
    xml = document.getElementById("xmldata");
    songs = xml.getElementsByTagName("song");
    output = "";

    for (song of songs) {
        title = song.getElementsByTagName("title")[0].textContent;
        genre = song.getElementsByTagName("genre")[0].textContent;
        album = song.getElementsByTagName("album")[0].textContent;
        singers1 = song.getElementsByTagName("singers1")[0].textContent;
        singers2 = song.getElementsByTagName("singers2")[0].textContent;
        img = song.getElementsByTagName("img")[0].getAttribute("src");
        
        if (title.toLowerCase().includes(str.toLowerCase())) {
            console.log(img);
            output += `<title>`+ title + `</title>` + `<br>` +
                        `<img src = ` + img + `>`
        }
    }
    document.getElementById("output").innerHTML = output;
}
