class DOMNodeCollection {
  constructor(el) {
    this.elArray = el;
  }

  html(str) {
    if (typeof str === "string") {
      this.elArray.forEach(el => (el.innerHTML = str));
    } else {
      if (this.elArray.length !== 0) {
        return this.elArray[0].innerHTML;
      }
    }
  }

  empty() {
    this.html("");
  }

  append (children) {
    // if (typeof children === "object" && !(children instanceof DOMNodeCollection)) {
    //   children = $l(children);
    // }

    if (typeof children === "string") {
      this.elArray.forEach(el => (el.innerHTML += children));
    } else if (children instanceof DOMNodeCollection) {
      this.elArray.forEach(el => {
        children.elArray.forEach(childEl => {
          el.appendChild(childEl.cloneNode(true));
        });
      });
    }
  }

  attr(key, val) {
    if (typeof val === "string") {
      this.elArray.forEach(el => { el.setAttribute(key, val); });
    } else {
      return this.elArray[0].getAttribute(key);
    }
  }
}

module.exports = DOMNodeCollection;
