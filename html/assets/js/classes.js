export class PostInfo {

    title = undefined;
    author = undefined;
    description = undefined;
    imgURL = undefined;

    constructor(title, author, description, imgURL = "") {
        this.title = title;
        this.author = author;
        this.description = description;
        this.imgURL = imgURL;
    }

    body() {
        let body = document.createElement('div');
        body.className = "post-info";
        let section = document.createElement('section');
        let img = document.createElement('img');
        img.src = this.imgURL;
        img.alt = "Imágen del post";
        section.appendChild(img);
        let h4 = document.createElement('h4');
        h4.innerText = this.title;
        section.appendChild(h4);
        let small = document.createElement('small');
        small.innerHTML = this.author;
        section.appendChild(small);
        body.appendChild(section);
        return body;
    }

}