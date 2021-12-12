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
elChessDesk.addEventListener('click',(e)=>{
  let allItem = document.querySelectorAll(".chess-box");
  for(let item of allItem){
    item.style = ""
  }
  let cordination = e.srcElement.attributes.id.value;
  let x = cordination.slice(0,1);
  let y = cordination.slice(-1);

  for(let i=x, n=y; i<=8, n<=8; i++ ,n++){
    document.getElementById(`${i}-${n}`).style.background = "red"
  }
  for(m=x, b=y; m>=1, b>=1; m--, b--){
    document.getElementById(`${m}-${b}`).style.background = "red"
  }
})