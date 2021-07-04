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
const articlesArr = [...articlesCollection];
const slider = (isForward) => {
  console.log(isForward);
  console.log({ ...articlesArr });
  let currentActiveIndex = -1;
  articlesArr.forEach((article, index) => {
    if (article.className.includes("activeSlide")) {
      currentActiveIndex = index;
      return;
    }
  });
  console.log({ currentActiveIndex });
  if (isForward) {
  } else {
  }
};

/* Populationg the blog div, pulling articles from Dev.to */
const BLOG_DIV = document.getElementById("blog-container");

let request = new XMLHttpRequest();
request.open("GET", "https://dev.to/api/articles?username=siaust");
request.onload = function () {
  console.log(request.response);
  let response = JSON.parse(request.response);
  for (let i = 0; i < response.length; i++) {
    console.log(response[i].title);

    /* Create wrapper link element */
    let linkWrapper = document.createElement("a");
    linkWrapper.href = response[i].url;
    linkWrapper.target = "_blank";

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
    console.log(formattedDate.toLocaleString());
    date.innerHTML = formattedDate.toLocaleString();

    /* Blog-card header image */
    let headerImg = document.createElement("div");
    headerImg.className = "blog-card-img";
    headerImg.style.backgroundImage = 'url("' + response[i].cover_image + '")';

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
