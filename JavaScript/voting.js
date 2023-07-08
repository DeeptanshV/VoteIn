const url = window.location.href;
const urlParams = new URLSearchParams(url);
const email = urlParams.get('email');
const name = urlParams.get('name');
console.log(urlParams.get('name'));
console.log(urlParams.get('email'));
console.log(document.getElementsByClassName('name'));
document.getElementsByClassName('name')[0].innerText = urlParams.get('name');
document.getElementsByClassName('email')[0].innerText = urlParams.get('email');
const participants = [
   {
      name: "BJD",
      id: "1"
   },
   {
      name: "AAP",
      id: "08"
   },
   {
      name: "BJP",
      id: "ytgfv"
   }
]

getContainer();

function getContainer() {

   const container1 = document.querySelector('.container1');
   console.log(container1);
   for (let i = 0; i < participants.length; i++) {
      const card =
         `<div class="card" style="width: 18rem;height: 35rem">
      <img src="voting pic.jpg" class="card-img-top" alt="p1" />
      <div class="card-body">
      <h5 class="card-title">${participants[i].name}</h5>
      <p class="card-text"></p>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate totam dolor tempora esse excepturi
      doloribus odio atque repellendus ad, recusandae earum laborum tempore nostrum, voluptatum ea veritatis magnam
                  odit!</h2>
                  <button type="button" class="button-primary" id="vote${i}">Vote for Me</button>
                  </div>
                  </div>`;

      container1.innerHTML += card;
   }
   btnListener();
}

const baseURL = "https://voting-register-function.azurewebsites.net/api/"
function btnListener() {
   for (let i = 0; i < participants.length; i++) {
      let voteButton = document.querySelector(`#vote${i}`);
      console.log(voteButton);
      voteButton.addEventListener("click", async () => {
         
         await fetch(baseURL + "vote_function", {
            method: "POST",
            body: JSON.stringify({
               username: email,
               id: i+1
            }),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
         }).then(response => response.json()).then(json => {
            console.log(json);
            if (json["Message"] == "Thank you, Your vote has been registered") {
               console.log(json);
               window.location.href = 'thanks.html?votedTo=' + participants[i].name;
            } else {
               alert("Some Error Occured");
            }
         }).catch(err => console.log(err));
         
      });
   }
}
