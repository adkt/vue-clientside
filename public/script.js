async function init(){
  var response = await fetch("/getResponse");  
  var data = await response.json();
  console.log(data);
}

init();

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

import utils from './utils.js';
console.log(utils.minusAB(9, 8));