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
      id : 1,
      "text": "The Biju Janata Dal  is an Indian regional political party with great influence in the state of Odisha. It was founded by the former minister of mines and minerals of the Republic of India Naveen Patnaik on 26 December 1997 as a breakaway faction from the Janata Dal.[8] The BJD is led by its founder as president of the party. The headquarters of the party is located in Forest Park, Bhubaneswar."
   },
   {
      name: "AAP",
      id: 2,
      "text" : "The Aam Aadmi Party  is a political party in India. It was founded in November 2012 by Arvind Kejriwal and his then-companions,[25] following the 2011 Indian anti-corruption movement. AAP is currently the governing party in the Indian state of Punjab and the union territory of Delhi. On 10 April 2023, AAP was officially granted the status of National party by ECI.The party's election symbol is a broom."
   },
   {
      name: "BJP",
      id: 3,
      "text" : "The Bharatiya Janata Party  is a political party in India, and one of the two major Indian political parties alongside the Indian National Congress.[38] Since 2014, it has been the ruling political party in India under Narendra Modi, the incumbent Indian prime minister.[39] The BJP is aligned with right-wing politics, and its policies adhere to Hindutva, a Hindu nationalist ideology.[40][41] It has close ideological and organisational links to the Rashtriya Swayamsevak Sangh (RSS).[42] As of March 2023, it is the country's biggest political party in terms of representation in the Parliament of India as well as state legislatures."
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
      <h2>${participants[i].text}</h2>
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
               "username" : email,
               "participant_id": id
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
