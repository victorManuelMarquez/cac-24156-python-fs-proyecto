export class PostCard {

    category = undefined;
    title = undefined;
    author = undefined;
    imgURL = undefined;

    constructor(title, author, category = "General", imgURL = "") {
        this.title = title;
        this.author = author;
        this.category = category;
        this.imgURL = imgURL;
    }

    body() {
        let body = document.createElement('div');
        body.className = "card";
        let section = document.createElement('section');
        let img = document.createElement('img');
        img.src = this.imgURL;
        img.alt = "Imágen del post";
        section.appendChild(img);
        let anchor = document.createElement('a');
        anchor.href = "#";
        anchor.className = "post-category";
        anchor.innerText = this.category;
        section.appendChild(anchor);
        let anchorTitle = document.createElement('a');
        anchorTitle.href = "#";
        let h4 = document.createElement('h4');
        h4.innerText = this.title;
        anchorTitle.appendChild(h4);
        section.appendChild(anchorTitle);
        let small = document.createElement('small');
        small.innerHTML = this.author;
        section.appendChild(small);
        body.appendChild(section);
        return body;
    }

}

export class PostInfo extends PostCard {
    date = undefined;
    description = undefined;

    constructor(title, author, category, description, imgURL = "", date = new Date()) {
        super(title, author, category, imgURL);
        this.date = date;
        this.description = description;
    }

    body() {
        let body = document.createElement('div');
        body.className = "post-wrapper";
        let article = document.createElement('article');
        let anchor = document.createElement('a');
        anchor.href = "#";
        anchor.innerText = this.category;
        article.appendChild(anchor);
        let anchorTitle = document.createElement('a');
        anchorTitle.href = "#";
        let h3 = document.createElement('h3');
        h3.innerHTML = this.title;
        anchorTitle.appendChild(h3);
        article.appendChild(anchorTitle);
        let div1 = document.createElement('div');
        let small = document.createElement('small');
        small.innerHTML = this.author;
        div1.appendChild(small);
        let p = document.createElement('p');
        p.className = "text-muted";
        p.innerHTML = this.date;
        div1.appendChild(p);
        article.appendChild(div1);
        let div2 = document.createElement('div');
        let linkImg = document.createElement('a');
        linkImg.href = "#";
        let img = document.createElement('img');
        img.src = this.imgURL;
        img.alt = "Imágen del post";
        linkImg.appendChild(img);
        div2.appendChild(linkImg);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = this.description;
        div2.appendChild(paragraph);
        article.appendChild(div2);
        body.appendChild(article);
        return body;
    }
}