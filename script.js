myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 90) {
        myID.className = "content show"
    } else {
        myID.className = "content hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

document.documentElement.classList.add("js");
jQuery(document).ready(function($) { 
	setTimeout(() => {  $('#preloader').fadeOut('slow',function(){$(this).remove();}); }, 1000);
	
	});

let announce = "https://sheetsu.com/tables/55b8e8d4ba"
fetch (announce)
.then(x => x.text())
.then(y => {let ann_content = y.substring(y.search('tbody')+6,y.search('/tbody')-1);
rows = ann_content.match(/<tr[^>]*>(.*?)<\/tr>/g);

rows.forEach(element => {
  var td = element.match(/<td[^>]*>(.*?)<\/td>/g);
  const ann = document.getElementById('announcements');
  ann.innerHTML += 
  '<div class="card bg-dark text-white" style="margin-top:1%;"><div class="card-body"><h5 class="card-title">'+td[1]+'</h5><p class="card-text">'+td[2]+'</p><p class="card-text"><small class="text-muted">'+td[0]+'</small></p></div></div>'


});

});

var now = new Date;
const day = now.getDate();
const mounth = now.getMonth()+1;
const year = now.getFullYear();
let today;
if(mounth<10){
  today = year+'-0'+mounth+'-'+day;
}else{
  today = year+'-'+mounth+'-'+day;
}

let czytania = document.getElementById('czyt');
czytania.innerHTML += '<div style="padding-bottom:56.25%; position:relative; display:block; width: 80%; margin-left: 10%; height: 100%;"><iframe width="100%" height="100%" src="https://niezbednik.niedziela.pl/liturgia/'+today+'#collapseMsza0Nowy1" frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0;"></iframe></div>'

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "1000px";
    } 
  });
}

