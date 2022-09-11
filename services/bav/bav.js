

function SendMailToken()
{
var name11=$('#Name1').val();
var email11=$('#Email').val();
var message111=$('#Message1').val();
var select11=$('#select1').val();
var Body2='Name1: '+name11+'<br>Email: '+email11+'<br>I Want to be Volunteer IN Department : '+message111+'<br>'+select11;


Email.send({
  SecureToken:"62d4aaa0-b78e-46f2-a597-880d65aebf4e",
  To : 'khushalborse343@gmail.com',
  From : "anscharitabletrust@gmail.com",
  Subject : "New mail on contact form "+name11,
  Body:Body2
}).then(
message => {
  if(message=='OK') 
  {
    alert('Thank You!! Your Response Submitted Successfully!');
  }
  else{
    console.error(message);
    alert('error')
  }
}
);
}


const serviceItems = document.querySelector(".service-items");
  const popup = document.querySelector(".popup-box")
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       popup.querySelector("h3").innerHTML = h3;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }
