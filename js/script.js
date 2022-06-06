let expanded = false;
const MENU = document.querySelector('.burger__menu')

function showCheckboxes(num) {
  let checkboxes = document.querySelector(`.boxes${num}`);
 
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function openMenu(){
    
    
    MENU.style.cssText=`
       
        transform: translateX(0px);
         opacity: 1;
        

    `
}
function closeMenu(){
    
    MENU.style.cssText=`
   
    transform: translateX(-500px);
     opacity: 0.1;
    

`
}



function clickColor(color){
    let colorClick = document.querySelector(`.${color}`)
    let closeColor=colorClick.nextElementSibling
   if(closeColor.classList.contains('close__color')){
    closeColor.style.color='#7E838C'
   colorClick.classList.remove('filter__color-active')   
    closeColor.classList.remove('close__color')
   }else{ closeColor.classList.add('close__color')
   closeColor.style.color='black'
   colorClick.classList.add('filter__color-active')
}}
   
let open = false
function openFilter(){
   if(innerWidth<415){
    let btn = document.querySelector('.filter__buttons')
    let card =  document.querySelectorAll('.filter__card')
if(open===true){
    open=false
    
    btn.style.display='none'
    
card.forEach(el=>{
    el.style.display='none'
})}else{
    open=true
    btn.style.display='flex'
        card.forEach(el=>{
            el.style.display='block'
        })}
   }

   
}


document.addEventListener("DOMContentLoaded", () => {

    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [3000, 25000],
        step:1000,
        tooltips:true, 
        connect: true,
        format:{
         
            to: function (value) {
                return value + ' ₽';
            },
            from: function (value) {
                return Number(value.replace(' ₽', ''));
            }
        },
        range: {
            'min': 3000,
            'max': 50000
        }
    });
 
});