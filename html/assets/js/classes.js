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
        anchorTitle.className = "post-title-link";
        anchorTitle.href = "#";
        anchorTitle.innerText = this.title;
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
        anchor.className = "post-category";
        anchor.href = "#";
        anchor.innerText = this.category;
        article.appendChild(anchor);
        let anchorTitle = document.createElement('a');
        anchorTitle.className = "post-title-link";
        anchorTitle.href = "#";
        anchorTitle.innerHTML = this.title;
        article.appendChild(anchorTitle);
        let div1 = document.createElement('div');
        div1.className = "post-info";
        let smallAuthor = document.createElement('small');
        smallAuthor.innerHTML = this.author;
        div1.appendChild(smallAuthor);
        let smallDate = document.createElement('small');
        smallDate.innerHTML = this.date;
        div1.appendChild(smallDate);
        article.appendChild(div1);
        let div2 = document.createElement('div');
        div2.className = "post-content";
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