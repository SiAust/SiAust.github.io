let dropButton = document.querySelector(".dropdown");
let dropBar = document.querySelector(".dropBar");

dropButton.onmouseover = function () {
    dropBar.style.display = "block";
};

dropButton.onmouseleave = function () {
    dropBar.style.display = "none";
};

var typed = new Typed("#typed-code", {
    strings: [
        "Java",
        "Springboot",
        "HTML",
        "Javascript",
        "Github",
        "Postman",
        "SQL",
        "Git",
        "CSS",
    ],
    loop: true,
    loopCount: Infinity,
    typeSpeed: 100,
    backSpeed: 120,
    backDelay: 2000,
});

/* Handle the projects slider */
const articlesCollection = document.getElementsByClassName("card-article");
let articlesArr = [...articlesCollection];
/* class list strings */
const prevSlideOffset = "card-article prevSlide offset";
const prevSlide = "card-article prevSlide";
const activeSlide = "card-article activeSlide";
const nextSlide = "card-article nextSlide";
const nextSlideOffset = "card-article nextSlide offset";

const slider = (isForward) => {
    console.log(isForward);
    console.log({ ...articlesArr });

    /* find the current acive article index */
    let currentActiveIndex = -1;
    articlesArr.forEach((article, index) => {
        if (article.className.includes("activeSlide")) {
            currentActiveIndex = index;
            return;
        }
    });
    console.log({ currentActiveIndex });

    /* reassign the articles positions by css class depending on if left/right chevron clicked */

    /* move the last item to the front, or vice-versa */
    if (isForward) {
        // console.log({ articlesArr });
        const lastElement = articlesArr.pop();
        articlesArr.unshift(lastElement);
        // console.log({ articlesArr });
    } else {
        // console.log({ articlesArr });
        const firstElement = articlesArr.shift();
        articlesArr.push(firstElement);
        // console.log({ articlesArr });
    }

    /* assign class names */
    const middle = Math.floor(articlesArr.length / 2);
    articlesArr.map((article, index) => {
        if (index < middle - 1) {
            //   article.classList.remove("prevSlide offset");
            //   article.classList.add("prevSlide");
            article.className = prevSlideOffset;
        }
        if (index == middle - 1) {
            article.className = prevSlide;
        }
        if (index == middle) {
            article.className = activeSlide;
        }
        if (index == middle + 1) {
            article.className = nextSlide;
        }
        if (index > middle + 1) {
            article.className = nextSlideOffset;
        }
    });

    console.log({ middle });
    console.log({ articlesArr });
};

/* Populationg the blog div, pulling articles from Dev.to */
const BLOG_DIV = document.getElementById("blog-container");

let request = new XMLHttpRequest();
request.open("GET", "https://dev.to/api/articles?username=siaust");
request.onload = function () {
    //   console.log(request.response);
    let response = JSON.parse(request.response);
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i].title);

        /* Create wrapper link element */
        let linkWrapper = document.createElement("a");
        linkWrapper.href = response[i].url;
        linkWrapper.target = "_blank";
        linkWrapper.rel = "noopener";

        /* Create a new card */
        let card = document.createElement("div");
        card.className = "blog-card";

        /* Create the title, description, background and date element */
        let title = document.createElement("h4");
        title.innerHTML = response[i].title;

        let desc = document.createElement("p");
        desc.innerHTML = response[i].description;

        /* Date */
        let date = document.createElement("p");
        let formattedDate = new Date(response[i].published_timestamp);
        // console.log(formattedDate.toLocaleString());
        date.innerHTML = formattedDate.toLocaleString();

        /* Blog-card header image */
        let headerImg = document.createElement("div");
        headerImg.className = "blog-card-img";
        headerImg.style.backgroundImage =
            'url("' + response[i].cover_image + '")';

        /* Blog tags */
        let tagDiv = document.createElement("div");
        tagDiv.className = "blog-tags";
        let tags = response[i].tag_list;
        for (let i = 0; i < tags.length; i++) {
            let tag = document.createElement("div");
            tag.className = "tag";
            tag.innerHTML = tags[i];
            tagDiv.append(tag);
        }
        headerImg.append(date, tagDiv);

        card.append(headerImg, title, desc);
        linkWrapper.append(card);
        BLOG_DIV.appendChild(linkWrapper);
    }
};
request.send();
