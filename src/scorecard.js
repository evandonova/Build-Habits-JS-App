import { showView } from './util.js';

const section = document.querySelector('#scorecard-page');

export function scoreCard() {
    showView(section);
}

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var content = this.nextElementSibling;
    
    if (content.style.display === "inline-block") {
      content.style.display = "none";
    } else {
      content.style.display = "inline-block";
    }
  });
}