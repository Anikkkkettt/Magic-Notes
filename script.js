let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  shownotes();
})

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="card my-2 mx-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${index+1}</h5>
        <p class = "card-text">${element}</p>
        <button class="btn btn-primary" >Delete note</button>
    </div>
</div>`
  });
  let notesElm = document.getElementById('notes');
  if(notesObj.length != 0){
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML = `No notes to show! Use "Add a notes" section to add your note`
  }
}