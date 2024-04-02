export class UserCardInfo {
    name;
    description;
    imgURL;

    constructor(name = "Anónimo", description = "", imgURL = 'https://picsum.photos/200/200') {
        this.name = name;
        this.description = description;
        this.imgURL = imgURL;
    }

    body() {
        let container = document.createElement('div');
        container.className = "card";
        container.appendChild(this.userPhoto());
        container.appendChild(this.header());
        container.appendChild(this.userInfo());
        return container;
    }

    userPhoto() {
        let container = document.createElement('div');
        container.className = "card-img";
        let img = document.createElement('img');
        img.src = this.imgURL;
        img.alt = "Foto de perfil";
        container.appendChild(img);
        return container;
    }

    header() {
        let h4 = document.createElement('h4');
        h4.className = "card-header";
        h4.innerText = this.name;
        return h4;
    }

    userInfo() {
        let p = document.createElement('p');
        p.innerText = this.description;
        return p;
    }

}