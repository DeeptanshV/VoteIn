document.onload = getContainer();

function getContainer() {
   const container1 = document.querySelector('.container1');
   console.log(container1);
   for (let i = 0; i < 3; i++) {
      const card = 
         `<div class="card" style="width: 18rem;height: 35rem">
            <img src="voting pic.jpg" class="card-img-top" alt="p1" />
            <div class="card-body">
               <h5 class="card-title">Participant 1</h5>
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

function btnListener(){
   for(let i=0;i<3;i++){
      let voteButton = document.querySelector(`#vote${i}`);
      console.log(voteButton);
      voteButton.addEventListener("click",function(){
         window.location.href = 'thanks.html';
      });
   }
}




const url = window.location.href;
const urlParams = new URLSearchParams(url);
console.log(urlParams.get('name'));
console.log(urlParams.get('email'));
console.log(document.getElementsByClassName('name'));
document.getElementsByClassName('name')[0].innerText = urlParams.get('name');
document.getElementsByClassName('email')[0].innerText = urlParams.get('email');