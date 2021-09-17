let cards = document.querySelector(".card-list");
document
  .querySelector(".header__input")
  .addEventListener("input", filteredResult);
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
    let random = Math.floor(Math.random() * 200) + 100;
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

/* FILTER DATA */

function filteredResult(event) {
  let input = event.target.value;
  let filteredData = newData.filter(
    (item) => item.title.includes(input) || item.body.includes(input)
  );
  // Cleaned body just to suppress search results
  cards.innerHTML = "";
  getCard(filteredData);
}

/* MODAL BOX */

var modal = document.getElementById("formModal");
var sendBtn = document.getElementById("sendButton");
var span = document.getElementsByClassName("modal__close")[0];
var form = document.querySelector("form");

function formSubmit() {  
  const data = document.querySelector(".company").value;
  const data2 = document.querySelector(".firstName").value;
  const data3 = document.querySelector(".lastName").value;
  const data4 = document.querySelector(".email").value;
  const data5 = document.querySelector(".title").value;
  const data6 = document.querySelector(".phone").value;
  const data7 = document.querySelector(".dietary-requirements").value;
  const data8 = document.querySelector(".expectations").value;
  const rad = document.querySelector('input[name="radio"]:checked')?document.querySelector('input[name="radio"]:checked').value:alert("A form field cannot be left blank");
  console.log(data);
  console.log(data2);
  console.log(data3);
  console.log(data4);
  console.log(data5);
  console.log(data6);
  console.log(rad);
  console.log(data7);
  console.log(data8);
}
sendBtn.onclick = function () {
  modal.style.display = "block";  
  formSubmit();
};

span.onclick = function () {
  modal.style.display = "none";
  form.reset();
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* SENDING FORM VALUES TO MODAL */

