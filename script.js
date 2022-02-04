let addBtn = document.getElementById('addBtn');
let addTxt = document.getElementById('addTxt');

addBtn.addEventListener("click",function(){
    console.log("Clicked");
    html = "";
    i = 0;
    html += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${++i}</h5>
      <p class="card-text">${addTxt.value}</p>
      <button  class="btn btn-primary">Delete Note</button>
    </div>
  </div>`
  document.getElementById('notes').innerHTML = html;
  addTxt.value="";
})