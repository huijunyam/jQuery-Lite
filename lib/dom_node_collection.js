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

  remove() {
    this.elArray.forEach(el => el.parentNode.removeChild(el));
  }
  
  append (children) {
    if (typeof children === "object" && !(children instanceof DOMNodeCollection)) {
      children = window.$l(children);
    }
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

  addClass(className) {
    this.elArray.forEach(el => el.classList.add(className));
  }

  removeClass(className) {
    this.elArray.forEach(el => el.classList.remove(className));
  }

  children() {
    let childrenArray = [];
    this.elArray.forEach(el => {
      const childList = el.children;
       childrenArray = childrenArray.concat(Array.from(childList));
    });

    return new DOMNodeCollection(childrenArray);
  }

  parent() {
    let parentArray = [];
    this.elArray.forEach(el => { parentArray.push(el.parentNode); });
    return new DOMNodeCollection(parentArray);
  }

  find(arg) {
    let foundElement = [];
    this.elArray.forEach(el => {
      const elList = el.querySelectorAll(arg);
      foundElement = foundElement.concat(Array.from(elList));
    });
    return new DOMNodeCollection(foundElement);
  }
}

module.exports = DOMNodeCollection;
