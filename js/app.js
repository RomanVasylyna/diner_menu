
//Adding Event To Btns
function addEvent() {
  let btns = document.querySelectorAll('.btn-gold');
  btns.forEach(btn => {
  btn.addEventListener('click', function() {
  getBtn(btn);
  })
  })
  loadMainContent();
}


//Change Menu Content Depending on Btn text
function getBtn(btn) {

switch(btn.innerHTML) {

case 'Breakfast' :
$('#menu').empty();
breakfast();
break;

case 'Lunch' :
$('#menu').empty();
lunch();
break;

case 'Shakes' :
$('#menu').empty();
shakes();
break;

case 'Dinner' :
$('#menu').empty();
$.each(menuObj(), (i, menu) => {
if(menu.category == 'dinner') {
  $('#menu').html(`
    <div class="col-lg-3 mt-3 mb-3">
      <img src="${menu.img}" alt="" class="img-fluid menu-item mr-3">
    </div>
    <div class="col-lg-3">
      <p><strong>${menu.name}</strong>
  <span class="price ml-2"><strong>${menu.price}</strong></span></p>
      <hr>
        <p>${menu.description}</p>
    </div>

    `);
}
})


break;


case 'All' :
$('#menu').empty();
loadMainContent();
break;


}
}



function menuObj() {
let obj = [

{
id : 1,
name : 'Buttermilk Pancakes',
price : '$15.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-1.jpeg',
category : 'breakfast'
},

{
id : 2,
name : 'Diner Double',
price : '$13.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-2.jpeg',
category : 'lunch'
},

{
id : 3,
name : 'Caramel Milkshake',
price : '$6.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/3.png',
category : 'shakes'
},

{
id : 4,
name : 'Country Delight',
price : '$20.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-4.jpeg',
category : 'breakfast'
},

{
id : 5,
name : 'Egg Attack',
price : '$22.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-5.jpeg',
category : 'lunch'
},

{
id : 6,
name : 'Oreo Dream',
price : '$18.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-6.jpeg',
category : 'shakes'
},

{
id : 7,
name : 'Bacon Overflow',
price : '$8.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-7.jpeg',
category : 'breakfast'
},

{
id : 8,
name : 'American Classis',
price : '$12.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-8.jpeg',
category : 'lunch'
},

{
id : 9,
name : 'Quarantine Buddy',
price : '$16.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-9.jpeg',
category : 'shakes'
},

{
id : 10,
name : 'Steak Dinner',
price : '$39.99',
description : 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed' ,
img : 'img/item-10.jpeg',
category : 'dinner'
},


];
return obj;
}


//Creating Content for the page
function loadMainContent() {
let arr = menuObj();
let output = '';
$.each(arr, (i, menu) => {
output += `

  <div class="col-lg-3 mt-3 mb-3">
    <img src="${menu.img}" alt="" class="img-fluid menu-item mr-3">
  </div>
  <div class="col-lg-3">
    <p><strong>${menu.name}</strong>
<span class="price ml-2"><strong>${menu.price}</strong></span></p>
    <hr>
      <p>${menu.description}</p>
  </div>

`
})
$('#menu').html(output);
}


//Load Only Items by category
function breakfast() {

  let arr = menuObj();
  let output = '';

  $.each(arr, (i, menu) => {

  if(menu.category == 'breakfast') {
    output += `
      <div class="col-lg-3 mt-3 mb-3">
        <img src="${menu.img}" alt="" class="img-fluid menu-item mr-3">
      </div>
      <div class="col-lg-3">
        <p><strong>${menu.name}</strong>
    <span class="price ml-2"><strong>${menu.price}</strong></span></p>
        <hr>
          <p>${menu.description}</p>
      </div>

    `;
    $('#menu').html(output);
  }
})
}


function lunch() {

  let arr = menuObj();
  let output = '';

  $.each(arr, (i, menu) => {

  if(menu.category == 'lunch') {
    output += `
      <div class="col-lg-3 mt-3 mb-3">
        <img src="${menu.img}" alt="" class="img-fluid menu-item mr-3">
      </div>
      <div class="col-lg-3">
        <p><strong>${menu.name}</strong>
    <span class="price ml-2"><strong>${menu.price}</strong></span></p>
        <hr>
          <p>${menu.description}</p>
      </div>

    `;
    $('#menu').html(output);
  }
})
}

function shakes() {

  let arr = menuObj();
  let output = '';

  $.each(arr, (i, menu) => {

  if(menu.category == 'shakes') {
    output += `
      <div class="col-lg-3 mt-3 mb-3">
        <img src="${menu.img}" alt="" class="img-fluid menu-item mr-3">
      </div>
      <div class="col-lg-3">
        <p><strong>${menu.name}</strong>
    <span class="price ml-2"><strong>${menu.price}</strong></span></p>
        <hr>
          <p>${menu.description}</p>
      </div>

    `;
    $('#menu').html(output);
  }
})
}




//Array with images
function getImages() {
let images = new Array();
for(let i = 1; i <= 10; i++) {
images.push(`img/item-${i}.jpeg`);
}
return images;
}
