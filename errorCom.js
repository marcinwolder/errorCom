class ErrorCom {
  constructor(message) {
    this.errorElement = this.createError();
    this.message = message;
    this.ids = [];
  }
  lunch = (text, isProvided = false, pos) => {
    Array(...this.ids).forEach((x)=>{
      clearTimeout(x);
    });
    this.ids.splice(0, this.ids.length);
    const el = this.errorElement;
    if (text) this.message = text;
    if (isProvided) this.setPosition(pos);
    el.style.left = this.x;
    el.style.top = this.y;
    el.style.transform = `translate(${this.left}, ${this.top})`;
    document.body.appendChild(el);
    
    this.animate();
  };
  setPosition = (pos = { x: "50%", y: "50%", left: "-50%", top: "-50%" }) => {
    const { x, y, left, top } = pos;
    this.x = x;
    this.y = y;
    this.left = left;
    this.top = top;
  };
  createError = () => {
    this.setPosition();
    const div = document.createElement("div");
    div.style.position = "absolute";
    const span = document.createElement("span");
    span.innerText = this.message;
    div.appendChild(span);
    return div;
  };
  animate = () => {
    const el = this.errorElement;
    el.style.overflow = "hidden";
    el.firstChild.style.transition =
      "all 2s cubic-bezier(0.82, 0.02, 0.36, 1.02)";
    el.style.transition = "all 2s cubic-bezier(0.82, 0.02, 0.36, 1.02)";

    el.style.opacity = "0";
    el.firstChild.style.transform = "translate(0, 50px)";
    this.ids.push(setTimeout(() => {
      el.style.opacity = "1";
    }, 400));
    this.ids.push(setTimeout(() => {
      el.firstChild.style.transform = "translate(0, 0)";
    }, 10));
    this.ids.push(setTimeout(() => {
      el.style.opacity = "0";
    }, 4000));
    this.ids.push(setTimeout(() => {
      el.firstChild.style.transform = "translate(0, 50px)";
      this.running = false;
    }, 4400));
  };
  addClass = (div, text) => {
    if (div) this.errorElement.classList.add(...div);
    if (text) this.errorElement.firstChild.classList.add(...text);
  };
  set message(value) {
    this.errorElement.firstChild.innerText = value;
  }
}