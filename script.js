const error = new ErrorCom('Error');
error.setPosition({x: '1em', left: 0,y: '1em', top: 0 });

const btn = document.querySelector("#btn");
btn.addEventListener('click', ()=>{
  error.lunch('eo');
});
