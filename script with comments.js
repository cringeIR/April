

let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"

for (let i = 0; i <= sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider() {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = document.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  


  let next = document.getElementById('sliderForward');
  let back = document.getElementById('sliderBack');

  // Кнопка next внутри этого slider.
 

  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    slide[i].classList.remove('block');

    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    
    // slide[i] - следующий слайд. Показываем.
  });  

  
  back.addEventListener('click', function() {
    slide[i].classList.remove('block');

    // slide[i] - открытый слайд. Скрываем.
    
    i = (i - 1 + slide.length) % slide.length ; // (*1)
    
    slide[i].classList.add('block');
    
    // slide[i] - следующий слайд. Показываем.
  });  
}

let inputName = document.getElementById('NameInput')
let inputMail = document.getElementById('MailInput')
let sendButton = document.getElementById('SendButton')

const SendForm = function () {

    

  if (inputMail.value.length > 0 & inputName.value.length > 0 & inputMail.value.includes('@') == true){
     alert("Ваша заявка принята!")

      
      // sendButton.addEventListener("click", SendForm);        

  
  } else if (inputMail.value.includes('@') == false & (inputMail.value.length > 0 & inputName.value.length > 0) ){
      alert("Введите правильный адрес эл.почты")

      
      // sendButton.addEventListener("click", SendForm);        
  } else{
      alert("Заполните все поля перед отправкой")

      
      // sendButton.addEventListener("click", SendForm); 
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