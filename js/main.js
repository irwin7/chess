let elChessDesk = document.querySelector(".chess-desk");
for(let i=1;i<=8;i++){
  for(let n=1;n<=8;n++){

    if(i % 2 == 0){

      if(n % 2 == 0){
        elChessDesk.innerHTML += (`
          <div class="chess-box white" id="${i}-${n}"></div>
        `)
      }
      else{
        elChessDesk.innerHTML += (`
          <div class="chess-box" id="${i}-${n}"></div>
        `)
      }

    }else{
      if(n % 2 == 0){
        elChessDesk.innerHTML += (`
          <div class="chess-box" id="${i}-${n}"></div>
        `)
      }
      else{
        elChessDesk.innerHTML += (`
          <div class="chess-box white" id="${i}-${n}"></div>
        `)
      }

    }
  }
}
document.querySelector(".eleph").addEventListener("click" , () => { clicked("eleph",`<i class="fas fa-chess-king-alt"></i>`) });
document.querySelector(".rook").addEventListener("click" , () => { clicked("rook",`<i class="fas fa-chess-rook-alt"></i>`) });
document.querySelector(".queen").addEventListener("click" , () => { clicked("queen",`<i class="fas fa-chess-queen"></i>`) });
function clicked(value,icon){
  elChessDesk.addEventListener('click',(e)=>{
    let allItem = document.querySelectorAll(".chess-box");
    let allClass = [];
    for(let item of allItem){
      item.style = "";
      item.innerHTML = "";
      allClass.push(item.id); 
    }
    let cordination = e.srcElement.attributes.id.value;
    let x = cordination.slice(0,1);
    let y = cordination.slice(-1);
    
    document.getElementById(`${cordination}`).innerHTML = icon;

    // eleph
    if(value == "eleph"){
      eleph();
    }
    // rook
    else if(value == "rook"){
      rook();
    }
    // queen
    else if(value == "queen"){
      eleph();
      rook();
    }
    // functions
    function rook(){
      for(let i=x+1, n=x+1; i<=8, n>=1; i++ ,n--){
        for(let item of allClass){
          if(item == `${i}-${y}`){
            document.getElementById(`${i}-${y}`).style.background = "red";
          }
          if(item == `${n}-${y}`){
            document.getElementById(`${n}-${y}`).style.background = "red";
          }
        }
      }
      for(let i=y+1, n=y+1; i<=8, n>=1; i++ ,n--){
        for(let item of allClass){
          if(item == `${x}-${i}`){
            document.getElementById(`${x}-${i}`).style.background = "red";
          }
          if(item == `${x}-${n}`){
            document.getElementById(`${x}-${n}`).style.background = "red";
          }
        }
      }
    }
    function eleph(){
      for(let i=x, n=y; i<=8, n<=8; i++ ,n++){
        for(let item of allClass){
          if(item == `${i}-${n}`){
            document.getElementById(`${i}-${n}`).style.background = "red";
          }
        }
      }
      for(let i=x, n=y; i<=8, n>=1; i++ ,n--){
        for(let item of allClass){
          if(item == `${i}-${n}`){
            document.getElementById(`${i}-${n}`).style.background = "red";
          }
        }
      }
      for(m=x, b=y; m>=1, b>=1; m--, b--){
        for(let item of allClass){
          if(item == `${m}-${b}`){
            document.getElementById(`${m}-${b}`).style.background = "red";
          }
        }
      }
      for(m=x, b=y; m>=1, b<=8; m--, b++){
        for(let item of allClass){
          if(item == `${m}-${b}`){
            document.getElementById(`${m}-${b}`).style.background = "red";
          }
        }
      }
    }
  })
}