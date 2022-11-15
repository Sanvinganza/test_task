import "./index.scss";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const button = document.getElementById("start");
const phone = document.getElementById("phone");

button.addEventListener('click', async() => {
  if(phone.value){
    await fetch('https://api.github.com/users/Sanvinganza')
      .then(response => response.json())
      .then(response => alert(response.login))
      .catch(err => console.error(err));
  } else {
    alert('Not valid');
  }
});

library.add(faCheck);
dom.watch();