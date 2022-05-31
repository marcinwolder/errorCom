const btn = document.querySelector("#btn");
const input = document.querySelector("#passwd");
const box = document.querySelector(".color");

const error = new ErrorCom();
error.setPosition({x: '1em', left: 0,y: '1em', top: 0 });
error.addClass(["errorDiv"], ["errorText"]);

const check = new Check(btn, input,{
  onValidate:(passwordLevel) => {
    box.classList.remove("-yellow", "-red", "-green", "-gray");
    switch (passwordLevel) {
      case 0:
        box.classList.add("-red");
        break;
      case 1:
        box.classList.add("-yellow");
        break;
      case 2:
        box.classList.add("-green");
        break;
      default:
        box.classList.add("-gray");
        break;
    }
  },
  onError:(errorLog)=>{
    const {noLow, noBig, noNumber, noSpecial, shorterThan4, shorterThan8} = errorLog;
    let errorText = ' ';
    errorText+= `${noLow ? 'Hasło nie zawiera małej litery \n':''}`;
    errorText+= `${noBig ? 'Hasło nie zawiera wielkiej litery \n':''}`; 
    errorText+= `${noNumber ? 'Hasło nie zawiera cyfry \n':''}`;
    errorText+= `${noSpecial ? 'Hasło nie zawiera znaku specjalnego \n':''}`;
    errorText+= `${shorterThan4 ? 'Hasło krótsze od 4 znaków \n' : shorterThan8 ? 'Hasło krótsze od 8 znaków \n' : ''}`;
    error.lunch(errorText);
    console.log(errorText);
  }
});


