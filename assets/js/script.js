class Multimedia {
    #url;
    constructor(url) {
        this.#url = url + "?";
    }
    getUrl() {
        return this.#url;
    }

    setUrl(nuevaUrl) {
        this.#url = nuevaUrl;
    }
    setInicio() {
        return "Este metodo es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    #id;
    constructor(url, id) {
        super(url);
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    playMultimedia() {
        cargarVideo.cargar(this.getUrl(), this.getId());
    }

    setInicio(segundos = 0) {
        let nuevaUrl;
        if (this.getUrl().includes("autoplay=1")) {
            nuevaUrl = this.getUrl() + `&start=${segundos}`
        } else {
            nuevaUrl = this.getUrl() + `start=${segundos}`
        }

        this.setUrl(nuevaUrl);
    }
    autoPlay() {
        let nuevaUrl;
        if (this.getUrl().includes("start")) {
            nuevaUrl = this.getUrl() + "&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"
        } else {
            nuevaUrl = this.getUrl() + "rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"
        }

        this.setUrl(nuevaUrl);
    }
}


var cargarVideo = (function () {
    // parte privada
    let cargarPrivado = function (url, id) {
        console.log(url);
        console.log(id);
        document.getElementById(id).setAttribute("src", url);
    };
    // parte publica
    return {
        cargar: function (url, id) {
            cargarPrivado(url, id);
        }
    }
})()


let musica = new Reproductor('https://www.youtube.com/embed/rrGMENN1iaY', "musica");
musica.setInicio(30);
musica.playMultimedia();

let peliculas = new Reproductor("https://www.youtube.com/embed/tamqQAC696o", "peliculas");
peliculas.setInicio(30);
peliculas.playMultimedia();

let series = new Reproductor("https://www.youtube.com/embed/bJmX5DUkw2Q", "series");
series.setInicio(30);
series.playMultimedia();