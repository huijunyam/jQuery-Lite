class DOMNodeCollection {
  constructor(el) {
    this.elArray = el;
  }

  html(str) {
    if (typeof str === "string"){
      this.elArray.forEach(el => (el.innerHTML = str));
    } else {
      if (this.elArray.length !== 0){
        return this.elArray[0].innerHTML;
      }
    }
  }

  empty() {
    this.html("");
  }
}

module.exports = DOMNodeCollection;
