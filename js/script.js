let cards = document.querySelector(".card-list");
document.querySelector(".header__input").addEventListener("input",filteredResult);
let newData = [];

fetch("https://jsonplaceholder.typicode.com/posts#")
  .then((response) => response.json())
  .catch((err) => console.log(err))
  .then((data) => {
    newData = data.slice(0, 10);
    getCard(newData);
  });

const getCard = (cardsArray) => {
  cardsArray.forEach((element) => {
    console.log(element);
    let random = Math.floor(Math.random() * 200) + 100;
    console.log(random);
    const card = `
        
        <div class="card-list-item">
          <img src="https://picsum.photos/id/${random}/450/300" alt="404 Not Found" class="card-img">
          <h3>${element.title}</h3>
          <p>${element.body}</p>
          <button class="form-button">Read More</button>
        </div>
        
        `;
    cards.innerHTML += card;
  });
};

/* SIDEBAR NAVGIATION */

function sidebarNav(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sidebarTab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(animName).style.display = "grid";
  evt.currentTarget.className += " active";
}

function filteredResult(event) {
    let input= event.target.value;
    let filteredData = newData.filter(item => item.title.includes(input) || item.body.includes(input))
    cards.innerHTML = "";
    getCard(filteredData);
}
