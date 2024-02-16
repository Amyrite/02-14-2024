function getData() {
    xml = document.getElementById("xmldata");
    songs = xml.getElementsByTagName("song");

    // Initialize output variable with table structure
    output = "<table border= '1' class='zebra-table'>" +
                 "<tr>" +
                 "<th>Title</th>" +
                 "<th>Genre</th>" +
                 "<th>Abum</th>" +
                 "<th>Singers</th>" +
                 "<th>Singers</th>" +
                 "<th>Action</th>" +
                 "</tr>";

    for (song of songs) {
        title = song.getElementsByTagName("title")[0].textContent;
        genre = song.getElementsByTagName("genre")[0].textContent;
        album = song.getElementsByTagName("album")[0].textContent;
        singers1 = song.getElementsByTagName("singers1")[0].textContent;
        singers2 = song.getElementsByTagName("singers2")[0].textContent;
        imagePath = song.getElementsByTagName("imagePath")[0].getAttribute("src");
        console.log(title);

        // Append table row for each song
        output += "<tr class='zebra-row'>" +
                  "<td>" + title + "</td>" +
                  "<td>" + genre + "</td>" +
                  "<td>" + album + "</td>" +
                  "<td>" + singers1 + "</td>" +
                  "<td>" + singers2 + "</td>" +
                  "<td><button onclick='showModal(\"" + imagePath + "\")'>View Image</button></td>" +
                  "</tr>";
    }

    // Close the table structure
    output += "</table>";

    // Display the generated table
    document.getElementById("output").innerHTML = output;
}


function search(str) {
    
    xml = document.getElementById("xmldata");
    songs = xml.getElementsByTagName("song");    
    output = "<table border= '1' class='zebra-table'>" +
                 "<tr>" +
                 "<th>Title</th>" +
                 "<th>Genre</th>" +
                 "<th>Album</th>" +
                 "<th>Singer</th>" +
                 "<th>Signer</th>" +
                 "<th>Action</th>" +
                 "</tr>";

    for (song of songs) {
        title = song.getElementsByTagName("title")[0].textContent;
        genre = song.getElementsByTagName("genre")[0].textContent;
        album = song.getElementsByTagName("album")[0].textContent;
        singers1 = song.getElementsByTagName("singers1")[0].textContent;
        singers2 = song.getElementsByTagName("singers2")[0].textContent;
        imagePath = song.getElementsByTagName("imagePath")[0].getAttribute("src");

        if (title.toLowerCase().includes(str.toLowerCase()) || genre.toLowerCase().includes(str.toLowerCase()) || album.toLowerCase().includes(str.toLowerCase()) || singers1.toLowerCase().includes(str.toLowerCase()) || singers2.toLowerCase().includes(str.toLowerCase())) {
            console.log(imagePath);
            output += "<tr class='zebra-row'>" +
                      "<td>" + title + "</td>" +
                      "<td>" + genre + "</td>" +
                      "<td>" + album + "</td>" +
                      "<td>" + singers1 + "</td>" +
                      "<td>" + singers2 + "</td>" +
                      "<td><button onclick='showModal(\"" + imagePath + "\")'>View Image</button></td>" +
                      "</tr>";
        }
    }
    
    document.getElementById("output").innerHTML = output;
}




/*function showModal(songCode, singers, title, genre, album, imageSrc) {
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "<p><b>Song Code:</b> " + songCode + "</p>" +
        "<p><img src='" + imageSrc + "></p>" +
        "<p><b>Song Title:</b> " + title + "</p>" +
        "<p><b>Singers:</b> " + singers + "</p>" +
        "<p><b>Genre:</b> " + genre + "</p>" +
        "<p><b>Album:</b> " + album + "</p>" 
       ;

    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function showImage(imageSrc) {
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "<img src='" + imageSrc + "' style='max-width: 100%; max-height: 100%;'>";

    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}*/

