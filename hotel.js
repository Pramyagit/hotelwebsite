const nav=document.querySelector('.menuTab');
const List=document.querySelector('.menu-bar');
const close=document.querySelector('.close');
List.addEventListener("click",()=>{
    nav.classList.add('show');
    // console.log('hi');
})
close.addEventListener('click',()=>{
    nav.classList.remove('show');
    // console.log('close');
})
// auto counts -rooms
    // const counters = document.querySelector(".counts");
    // const speed = 1;
    // window.addEventListener('load', (event) => {
    //     setInterval(counter,2000);
    //     function counter(){
    //     let counter = 1;
    //     while (counter <= 30) {
    //       console.log(counter);
    //     counters.innerHTML=counter;
    //       counter++;
    //     }
    // }
    // });


const counters = document.querySelectorAll(".counts");
const speed = 30;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    // console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});



// slider images

var slider = document.querySelector(".slider");
var slideFull=document.querySelector('.image-full');
var slidediv=document.querySelectorAll('.image-slide');
var slideItem=document.querySelector('.imgs');
var prev=document.querySelector('#left');
var next=document.querySelector('#right')
next.addEventListener('click',Next);
prev.addEventListener('click',Prev);

function updateSlide(){
  slidediv.forEach(slide=>{
    slide.classList.remove('Active')
   })
slidediv[slidePosition].classList.add('Active');
// dot
dot.forEach(Boxes=>{
  Boxes.classList.remove('box-active');
  
     })
  dot[slidePosition].classList.add('box-active');
}
function Next(){
  var el=slider.children[0];
  var item=el.getElementsByClassName('image-slide');
  // console.log(item)
  el.append(item[0]);
  if(slidePosition==length-1)
  {
      slidePosition=0;
  }else{
      slidePosition++
  }
updateSlide();
}

function Prev(e){
  var el=slider.children[0];
  var item=el.getElementsByClassName('image-slide');
  el.prepend(item[item.length-1]);
  if(slidePosition==0)
  {
      slidePosition=length-1;
  }else{
      slidePosition--
  }
 updateSlide();
}
setInterval(Next,5000);


// manual button
const dots=document.querySelector('.dots');

const dot=document.querySelectorAll('.box');
let index=0;
let slidePosition=0;
let length=slidediv.length;
let boxChild=slideFull;
let boxActive=boxChild.children[index];
// console.log(boxActive)
dot.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
    slidePosition=index;
  // console.log(slidePosition,index)
  updateSlide();
  })

})
// bending||above

// slider leftside
const Contain=document.querySelector('.Experience');
const slid=document.querySelector('.tour');
const tourSlid=document.querySelectorAll('.tour-slide');
const leftslide=document.querySelector('#arrow-left')
const rightslide=document.querySelector('#arrow-right')
let totLen=tourSlid.length;
// console.log(len);
let slideIndex=0;
let i;
leftslide.addEventListener('click',leftSide);
rightslide.addEventListener('click',rightSide);

function slideShow(){
  tourSlid.forEach(slider=>{
    slider.classList.remove('S-active');
    slider.classList.add('S-hidden');
   })
tourSlid[slideIndex].classList.add('S-active');

dott.forEach(Boxes=>{
  Boxes.classList.remove('box-act');
  
     })
  dott[slideIndex].classList.add('box-act');
  
}

function leftSide(){
if(slideIndex==0)
{
  slideIndex=totLen-1;
}else{
slideIndex--;
}
slideShow();
}
function rightSide(){
  if(slideIndex==totLen-1)
{
  slideIndex=0;
}else{
slideIndex++;
}
slideShow();
}



setInterval(()=>{
  if(slideIndex==totLen-1)
  {
      slideIndex=0;
  }else{
      slideIndex++
  }
  slideShow();
},5000);

// dot create
const dotT=document.querySelector('.tour-dot');
tourSlid.forEach(boxs=>{
    const box=document.createElement('div');
    box.classList.add('boxx');
 dotT.appendChild(box);
   })
   const dott=document.querySelectorAll('.boxx');
   dott[slideIndex].classList.add('box-act');

// dot click event
dott.forEach((Dot,index)=>{
    Dot.addEventListener('click',()=>{
      slideIndex=index;
              slideShow();
    })
   
   })








//gallery
const modal=document.createElement('div')
modal.id='mode';
document.body.appendChild(modal);
// modal.classList.add('active');
const images=document.querySelectorAll('.images')
// console.log(images);
images.forEach(image=>{
image.addEventListener('click',()=>{
    modal.classList.add('G-active');
    const img=document.createElement('img');
    img.id='img';
    img.src=image.src;
    
while(modal.firstChild){
    modal.removeChild(modal.firstChild);
}
    modal.append(img);
  
});
});
modal.addEventListener('click',()=>{
    modal.classList.remove('G-active');

})

