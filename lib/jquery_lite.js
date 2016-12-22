/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

	window.$l = arg => {
	  if (typeof(arg) === "string") {
	    let node = document.querySelectorAll(arg);
	    let nodeArray = Array.from(node);
	    return new DOMNodeCollection (nodeArray);
	  }
	  else if (arg instanceof HTMLElement) {
	    return DOMNodeCollection.new([arg]);
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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

	  addClass(className) {
	    this.elArray.forEach(el => el.classList.add(className));
	  }
	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);