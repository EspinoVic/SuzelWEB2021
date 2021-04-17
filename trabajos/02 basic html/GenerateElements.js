 class GenerateElements {
    constructor(songsPacked,document){

        this.data = songsPacked;
        this.document = document;

    }

    getSongElements(){
        let genresArray = Object.keys(this.data);
        let genreElements =[];
        for(let currentGenre of genresArray){

           let newGenreELement = this.getGenreElement(currentGenre,this.data[currentGenre]);
           genreElements.push(newGenreELement);

        }
        return genreElements;
    }
/* Contains the N artist for that genre. */
    getGenreElement(genreStr,genreData){

        let genreContainer = document.createElement("div");
        let text = document.createTextNode(genreStr);
        genreContainer.appendChild(text);
        genreContainer.className =" dropdown-container ";

        let artistsForThatGenre = Object.keys(genreData);

        for(let curentArtist of artistsForThatGenre){

            let artistElement = this.getUlArtist(curentArtist,genreData[curentArtist]);
            genreContainer.appendChild(artistElement);
        }


        return genreContainer;
    }

    getUlArtist(artist,artistSongs){
    
        let ulArtists = this.document.createElement("ul");
        ulArtists.className =" __ul-artist ";


        let liArtist = this.document.createElement("li");
        liArtist.className =" __li-artist ";
        let text = this.document.createTextNode(artist);
        liArtist.appendChild(text);

       

        
        let olSongs = this.getOlsong(artistSongs);
        liArtist.appendChild(olSongs);

        ulArtists.appendChild(liArtist);

        return ulArtists;
    }

    getOlsong(songsArray){

        let olSongs = this.document.createElement("ol");
        olSongs.className = " __ol-songs";


        for(const currentSong of songsArray)
        {
             let liSong = this.document.createElement("li");
             liSong.className = " __li-song ";
             let songNameNode = this.document.createTextNode(currentSong);
            liSong.appendChild(songNameNode);

            olSongs.appendChild(liSong);
        }

        return olSongs;
    }
}