let sliders = document.querySelectorAll('.slider');


for (let i = 0; i <= sliders.length; i++) {
 
  init_slider(sliders[i]);
}

function init_slider() {
 
  let slide = document.querySelectorAll('.slide');
  let next = document.getElementById('sliderForward');
  let back = document.getElementById('sliderBack');

  let i = 0;

  next.addEventListener('click', function() {
    slide[i].classList.remove('block');

    i = (i + 1) % slide.length; 
    
    slide[i].classList.add('block');
   
  });  

  
  back.addEventListener('click', function() {
    slide[i].classList.remove('block');

    i = (i - 1 + slide.length) % slide.length ; 
    
    slide[i].classList.add('block');

  });  
}

let inputName = document.getElementById('NameInput')
let inputMail = document.getElementById('MailInput')
let sendButton = document.getElementById('SendButton')

const SendForm = function () {

    

  if (inputMail.value.length > 0 & inputName.value.length > 0 & inputMail.value.includes('@') == true){
     alert("Ваша заявка принята!")

  
  } else if (inputMail.value.includes('@') == false & (inputMail.value.length > 0 & inputName.value.length > 0) ){
      alert("Введите правильный адрес эл.почты")

  } else{
      alert("Заполните все поля перед отправкой")

       }


inputName.value = ""
inputMail.value = ""

  

};


sendButton.addEventListener("click", SendForm);



// Скроллер


$(function() {
  $('a[href^="#"').on('click', function() {

      let href = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      });
      return false;
  });


});