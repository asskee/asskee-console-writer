(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("events"), require("string_decoder"));
	else if(typeof define === 'function' && define.amd)
		define(["events", "string_decoder"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("events"), require("string_decoder")) : factory(root["events"], root["string_decoder"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _console = __webpack_require__(/*! asskee/writer/console */ 1);
	
	var _console2 = _interopRequireDefault(_console);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _console2.default;

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/writer/console.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _keypress = __webpack_require__(/*! keypress */ 2);
	
	var _keypress2 = _interopRequireDefault(_keypress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventEmitter = __webpack_require__(/*! events */ 3);
	
	/**
	 * The ConsoleWriter class object.
	 * @author Rubens Mariuzzo <rubens@mariuzzo.com>
	 */
	
	var ConsoleWriter = function (_EventEmitter) {
	  _inherits(ConsoleWriter, _EventEmitter);
	
	  /**
	   * Construct a new ConsoleWriter object.
	   * @type {Object}
	   */
	  function ConsoleWriter() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ConsoleWriter);
	
	    var _this = _possibleConstructorReturn(this, (ConsoleWriter.__proto__ || Object.getPrototypeOf(ConsoleWriter)).call(this));
	
	    _this.width = options.width || 32;
	    _this.height = options.height || 8;
	    _this.border = options.border || false;
	    _this.separator = options.separator || '\n';
	    _this.in = process.stdin;
	    _this.out = process.stdout;
	    // Enable keypress event on console.
	    _this.in.setRawMode(true);
	    _this.in.resume();
	    (0, _keypress2.default)(_this.in);
	    _this.in.on('keypress', _this.keypressHandler.bind(_this));
	    return _this;
	  }
	  /**
	   * Clear the console.
	   */
	
	
	  _createClass(ConsoleWriter, [{
	    key: 'clear',
	    value: function clear() {
	      this.out.write('\x1Bc');
	    }
	
	    /**
	     * Hide the cursor on the terminal.
	     */
	
	  }, {
	    key: 'hideCursor',
	    value: function hideCursor() {
	      this.out.write('\x1B[?25l');
	    }
	
	    /**
	     * Show the cursor on the terminal.
	     */
	
	  }, {
	    key: 'showCursor',
	    value: function showCursor() {
	      this.out.write('\x1B[?25h');
	    }
	
	    /**
	     * Handle keypress event on the terminal.
	     * @param {String} character - The character pressed.
	     * @param {Object} key - The key pressed.
	     */
	
	  }, {
	    key: 'keypressHandler',
	    value: function keypressHandler(character, key) {
	      // Support CTRL+C to exit.
	      if (key && key.ctrl && key.name === 'c') {
	        this.clear();
	        this.showCursor();
	        this.in.pause();
	      }
	      this.emit('keypress', character, key);
	    }
	
	    /**
	     * Write text contents to the console output.
	     * @param {String} contents - The text contents.
	     */
	
	  }, {
	    key: 'write',
	    value: function write(contents) {
	      var _this2 = this;
	
	      if (typeof contents !== 'string') return;
	      var lines = contents.split(this.separator);
	      lines = lines.splice(0, this.height);
	      lines = lines.map(function (line) {
	        return line.substr(0, _this2.width);
	      });
	      this.out.write(lines.join(this.separator));
	    }
	  }]);
	
	  return ConsoleWriter;
	}(EventEmitter);
	
	exports.default = ConsoleWriter;

/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./~/keypress/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter;
	
	/**
	 * Module exports.
	 */
	
	var exports = module.exports = keypress;
	
	/**
	 * This module offers the internal "keypress" functionality from node-core's
	 * `readline` module, for your own programs and modules to use.
	 *
	 * The `keypress` function accepts a readable Stream instance and makes it
	 * emit "keypress" events.
	 *
	 * Usage:
	 *
	 * ``` js
	 * require('keypress')(process.stdin);
	 *
	 * process.stdin.on('keypress', function (ch, key) {
	 *   console.log(ch, key);
	 *   if (key.ctrl && key.name == 'c') {
	 *     process.stdin.pause();
	 *   }
	 * });
	 * proces.stdin.resume();
	 * ```
	 *
	 * @param {Stream} stream
	 * @api public
	 */
	
	function keypress(stream) {
	  if (isEmittingKeypress(stream)) return;
	
	  var StringDecoder = __webpack_require__(/*! string_decoder */ 4).StringDecoder; // lazy load
	  stream._keypressDecoder = new StringDecoder('utf8');
	
	  function onData(b) {
	    if (listenerCount(stream, 'keypress') > 0) {
	      var r = stream._keypressDecoder.write(b);
	      if (r) emitKey(stream, r);
	    } else {
	      // Nobody's watching anyway
	      stream.removeListener('data', onData);
	      stream.on('newListener', onNewListener);
	    }
	  }
	
	  function onNewListener(event) {
	    if (event == 'keypress') {
	      stream.on('data', onData);
	      stream.removeListener('newListener', onNewListener);
	    }
	  }
	
	  if (listenerCount(stream, 'keypress') > 0) {
	    stream.on('data', onData);
	  } else {
	    stream.on('newListener', onNewListener);
	  }
	}
	
	/**
	 * Returns `true` if the stream is already emitting "keypress" events.
	 * `false` otherwise.
	 *
	 * @param {Stream} stream readable stream
	 * @return {Boolean} `true` if the stream is emitting "keypress" events
	 * @api private
	 */
	
	function isEmittingKeypress(stream) {
	  var rtn = !!stream._keypressDecoder;
	  if (!rtn) {
	    // XXX: for older versions of node (v0.6.x, v0.8.x) we want to remove the
	    // existing "data" and "newListener" keypress events since they won't include
	    // this `keypress` module extensions (like "mousepress" events).
	    stream.listeners('data').slice(0).forEach(function(l) {
	      if (l.name == 'onData' && /emitKey/.test(l.toString())) {
	        stream.removeListener('data', l);
	      }
	    });
	    stream.listeners('newListener').slice(0).forEach(function(l) {
	      if (l.name == 'onNewListener' && /keypress/.test(l.toString())) {
	        stream.removeListener('newListener', l);
	      }
	    });
	  }
	  return rtn;
	}
	
	/**
	 * Enables "mousepress" events on the *input* stream. Note that `stream` must be
	 * an *output* stream (i.e. a Writable Stream instance), usually `process.stdout`.
	 *
	 * @param {Stream} stream writable stream instance
	 * @api public
	 */
	
	exports.enableMouse = function (stream) {
	  stream.write('\x1b[?1000h');
	};
	
	/**
	 * Disables "mousepress" events from being sent to the *input* stream.
	 * Note that `stream` must be an *output* stream (i.e. a Writable Stream instance),
	 * usually `process.stdout`.
	 *
	 * @param {Stream} stream writable stream instance
	 * @api public
	 */
	
	exports.disableMouse = function (stream) {
	  stream.write('\x1b[?1000l');
	};
	
	/**
	 * `EventEmitter.listenerCount()` polyfill, for backwards compat.
	 *
	 * @param {Emitter} emitter event emitter instance
	 * @param {String} event event name
	 * @return {Number} number of listeners for `event`
	 * @api public
	 */
	
	var listenerCount = EventEmitter.listenerCount;
	if (!listenerCount) {
	  listenerCount = function(emitter, event) {
	    return emitter.listeners(event).length;
	  };
	}
	
	
	///////////////////////////////////////////////////////////////////////
	// Below this function is code from node-core's `readline.js` module //
	///////////////////////////////////////////////////////////////////////
	
	
	/*
	  Some patterns seen in terminal key escape codes, derived from combos seen
	  at http://www.midnight-commander.org/browser/lib/tty/key.c
	
	  ESC letter
	  ESC [ letter
	  ESC [ modifier letter
	  ESC [ 1 ; modifier letter
	  ESC [ num char
	  ESC [ num ; modifier char
	  ESC O letter
	  ESC O modifier letter
	  ESC O 1 ; modifier letter
	  ESC N letter
	  ESC [ [ num ; modifier char
	  ESC [ [ 1 ; modifier letter
	  ESC ESC [ num char
	  ESC ESC O letter
	
	  - char is usually ~ but $ and ^ also happen with rxvt
	  - modifier is 1 +
	                (shift     * 1) +
	                (left_alt  * 2) +
	                (ctrl      * 4) +
	                (right_alt * 8)
	  - two leading ESCs apparently mean the same as one leading ESC
	*/
	
	// Regexes used for ansi escape code splitting
	var metaKeyCodeRe = /^(?:\x1b)([a-zA-Z0-9])$/;
	var functionKeyCodeRe =
	    /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;
	
	function emitKey(stream, s) {
	  var ch,
	      key = {
	        name: undefined,
	        ctrl: false,
	        meta: false,
	        shift: false
	      },
	      parts;
	
	  if (Buffer.isBuffer(s)) {
	    if (s[0] > 127 && s[1] === undefined) {
	      s[0] -= 128;
	      s = '\x1b' + s.toString(stream.encoding || 'utf-8');
	    } else {
	      s = s.toString(stream.encoding || 'utf-8');
	    }
	  }
	
	  key.sequence = s;
	
	  if (s === '\r') {
	    // carriage return
	    key.name = 'return';
	
	  } else if (s === '\n') {
	    // enter, should have been called linefeed
	    key.name = 'enter';
	
	  } else if (s === '\t') {
	    // tab
	    key.name = 'tab';
	
	  } else if (s === '\b' || s === '\x7f' ||
	             s === '\x1b\x7f' || s === '\x1b\b') {
	    // backspace or ctrl+h
	    key.name = 'backspace';
	    key.meta = (s.charAt(0) === '\x1b');
	
	  } else if (s === '\x1b' || s === '\x1b\x1b') {
	    // escape key
	    key.name = 'escape';
	    key.meta = (s.length === 2);
	
	  } else if (s === ' ' || s === '\x1b ') {
	    key.name = 'space';
	    key.meta = (s.length === 2);
	
	  } else if (s <= '\x1a') {
	    // ctrl+letter
	    key.name = String.fromCharCode(s.charCodeAt(0) + 'a'.charCodeAt(0) - 1);
	    key.ctrl = true;
	
	  } else if (s.length === 1 && s >= 'a' && s <= 'z') {
	    // lowercase letter
	    key.name = s;
	
	  } else if (s.length === 1 && s >= 'A' && s <= 'Z') {
	    // shift+letter
	    key.name = s.toLowerCase();
	    key.shift = true;
	
	  } else if (parts = metaKeyCodeRe.exec(s)) {
	    // meta+character key
	    key.name = parts[1].toLowerCase();
	    key.meta = true;
	    key.shift = /^[A-Z]$/.test(parts[1]);
	
	  } else if (parts = functionKeyCodeRe.exec(s)) {
	    // ansi escape sequence
	
	    // reassemble the key code leaving out leading \x1b's,
	    // the modifier key bitflag and any meaningless "1;" sequence
	    var code = (parts[1] || '') + (parts[2] || '') +
	               (parts[4] || '') + (parts[6] || ''),
	        modifier = (parts[3] || parts[5] || 1) - 1;
	
	    // Parse the key modifier
	    key.ctrl = !!(modifier & 4);
	    key.meta = !!(modifier & 10);
	    key.shift = !!(modifier & 1);
	    key.code = code;
	
	    // Parse the key itself
	    switch (code) {
	      /* xterm/gnome ESC O letter */
	      case 'OP': key.name = 'f1'; break;
	      case 'OQ': key.name = 'f2'; break;
	      case 'OR': key.name = 'f3'; break;
	      case 'OS': key.name = 'f4'; break;
	
	      /* xterm/rxvt ESC [ number ~ */
	      case '[11~': key.name = 'f1'; break;
	      case '[12~': key.name = 'f2'; break;
	      case '[13~': key.name = 'f3'; break;
	      case '[14~': key.name = 'f4'; break;
	
	      /* from Cygwin and used in libuv */
	      case '[[A': key.name = 'f1'; break;
	      case '[[B': key.name = 'f2'; break;
	      case '[[C': key.name = 'f3'; break;
	      case '[[D': key.name = 'f4'; break;
	      case '[[E': key.name = 'f5'; break;
	
	      /* common */
	      case '[15~': key.name = 'f5'; break;
	      case '[17~': key.name = 'f6'; break;
	      case '[18~': key.name = 'f7'; break;
	      case '[19~': key.name = 'f8'; break;
	      case '[20~': key.name = 'f9'; break;
	      case '[21~': key.name = 'f10'; break;
	      case '[23~': key.name = 'f11'; break;
	      case '[24~': key.name = 'f12'; break;
	
	      /* xterm ESC [ letter */
	      case '[A': key.name = 'up'; break;
	      case '[B': key.name = 'down'; break;
	      case '[C': key.name = 'right'; break;
	      case '[D': key.name = 'left'; break;
	      case '[E': key.name = 'clear'; break;
	      case '[F': key.name = 'end'; break;
	      case '[H': key.name = 'home'; break;
	
	      /* xterm/gnome ESC O letter */
	      case 'OA': key.name = 'up'; break;
	      case 'OB': key.name = 'down'; break;
	      case 'OC': key.name = 'right'; break;
	      case 'OD': key.name = 'left'; break;
	      case 'OE': key.name = 'clear'; break;
	      case 'OF': key.name = 'end'; break;
	      case 'OH': key.name = 'home'; break;
	
	      /* xterm/rxvt ESC [ number ~ */
	      case '[1~': key.name = 'home'; break;
	      case '[2~': key.name = 'insert'; break;
	      case '[3~': key.name = 'delete'; break;
	      case '[4~': key.name = 'end'; break;
	      case '[5~': key.name = 'pageup'; break;
	      case '[6~': key.name = 'pagedown'; break;
	
	      /* putty */
	      case '[[5~': key.name = 'pageup'; break;
	      case '[[6~': key.name = 'pagedown'; break;
	
	      /* rxvt */
	      case '[7~': key.name = 'home'; break;
	      case '[8~': key.name = 'end'; break;
	
	      /* rxvt keys with modifiers */
	      case '[a': key.name = 'up'; key.shift = true; break;
	      case '[b': key.name = 'down'; key.shift = true; break;
	      case '[c': key.name = 'right'; key.shift = true; break;
	      case '[d': key.name = 'left'; key.shift = true; break;
	      case '[e': key.name = 'clear'; key.shift = true; break;
	
	      case '[2$': key.name = 'insert'; key.shift = true; break;
	      case '[3$': key.name = 'delete'; key.shift = true; break;
	      case '[5$': key.name = 'pageup'; key.shift = true; break;
	      case '[6$': key.name = 'pagedown'; key.shift = true; break;
	      case '[7$': key.name = 'home'; key.shift = true; break;
	      case '[8$': key.name = 'end'; key.shift = true; break;
	
	      case 'Oa': key.name = 'up'; key.ctrl = true; break;
	      case 'Ob': key.name = 'down'; key.ctrl = true; break;
	      case 'Oc': key.name = 'right'; key.ctrl = true; break;
	      case 'Od': key.name = 'left'; key.ctrl = true; break;
	      case 'Oe': key.name = 'clear'; key.ctrl = true; break;
	
	      case '[2^': key.name = 'insert'; key.ctrl = true; break;
	      case '[3^': key.name = 'delete'; key.ctrl = true; break;
	      case '[5^': key.name = 'pageup'; key.ctrl = true; break;
	      case '[6^': key.name = 'pagedown'; key.ctrl = true; break;
	      case '[7^': key.name = 'home'; key.ctrl = true; break;
	      case '[8^': key.name = 'end'; key.ctrl = true; break;
	
	      /* misc. */
	      case '[Z': key.name = 'tab'; key.shift = true; break;
	      default: key.name = 'undefined'; break;
	
	    }
	  } else if (s.length > 1 && s[0] !== '\x1b') {
	    // Got a longer-than-one string of characters.
	    // Probably a paste, since it wasn't a control sequence.
	    Array.prototype.forEach.call(s, function(c) {
	      emitKey(stream, c);
	    });
	    return;
	  }
	
	  // XXX: this "mouse" parsing code is NOT part of the node-core standard
	  // `readline.js` module, and is a `keypress` module non-standard extension.
	  if (key.code == '[M') {
	    key.name = 'mouse';
	    var s = key.sequence;
	    var b = s.charCodeAt(3);
	    key.x = s.charCodeAt(4) - 040;
	    key.y = s.charCodeAt(5) - 040;
	
	    key.scroll = 0;
	
	    key.ctrl  = !!(1<<4 & b);
	    key.meta  = !!(1<<3 & b);
	    key.shift = !!(1<<2 & b);
	
	    key.release = (3 & b) === 3;
	
	    if (1<<6 & b) { //scroll
	      key.scroll = 1 & b ? 1 : -1;
	    }
	
	    if (!key.release && !key.scroll) {
	      key.button = b & 3;
	    }
	  }
	
	  // Don't emit a key if no name was found
	  if (key.name === undefined) {
	    key = undefined;
	  }
	
	  if (s.length === 1) {
	    ch = s;
	  }
	
	  if (key && key.name == 'mouse') {
	    stream.emit('mousepress', key);
	  } else if (key || ch) {
	    stream.emit('keypress', ch, key);
	  }
	}


/***/ },
/* 3 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 4 */
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = require("string_decoder");

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMzBmNDdiODJjMjU2ZDU1MzJmMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dyaXRlci9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL34va2V5cHJlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nX2RlY29kZXJcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSIsIkNvbnNvbGVXcml0ZXIiLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJzZXBhcmF0b3IiLCJpbiIsInByb2Nlc3MiLCJzdGRpbiIsIm91dCIsInN0ZG91dCIsInNldFJhd01vZGUiLCJyZXN1bWUiLCJvbiIsImtleXByZXNzSGFuZGxlciIsImJpbmQiLCJ3cml0ZSIsImNoYXJhY3RlciIsImtleSIsImN0cmwiLCJuYW1lIiwiY2xlYXIiLCJzaG93Q3Vyc29yIiwicGF1c2UiLCJlbWl0IiwiY29udGVudHMiLCJsaW5lcyIsInNwbGl0Iiwic3BsaWNlIiwibWFwIiwibGluZSIsInN1YnN0ciIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUMsZUFBZSxtQkFBQUMsQ0FBUSxlQUFSLENBQXJCOztBQUVBOzs7OztLQUlNQyxhOzs7QUFDSjs7OztBQUlBLDRCQUEwQjtBQUFBLFNBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFFeEIsV0FBS0MsS0FBTCxHQUFhRCxRQUFRQyxLQUFSLElBQWlCLEVBQTlCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjRixRQUFRRSxNQUFSLElBQWtCLENBQWhDO0FBQ0EsV0FBS0MsTUFBTCxHQUFjSCxRQUFRRyxNQUFSLElBQWtCLEtBQWhDO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQkosUUFBUUksU0FBUixJQUFxQixJQUF0QztBQUNBLFdBQUtDLEVBQUwsR0FBVUMsUUFBUUMsS0FBbEI7QUFDQSxXQUFLQyxHQUFMLEdBQVdGLFFBQVFHLE1BQW5CO0FBQ0E7QUFDQSxXQUFLSixFQUFMLENBQVFLLFVBQVIsQ0FBbUIsSUFBbkI7QUFDQSxXQUFLTCxFQUFMLENBQVFNLE1BQVI7QUFDQSw2QkFBUyxNQUFLTixFQUFkO0FBQ0EsV0FBS0EsRUFBTCxDQUFRTyxFQUFSLENBQVcsVUFBWCxFQUF1QixNQUFLQyxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQVp3QjtBQWF6QjtBQUNEOzs7Ozs7OzZCQUdRO0FBQ04sWUFBS04sR0FBTCxDQUFTTyxLQUFULENBQWUsT0FBZjtBQUNEOztBQUVEOzs7Ozs7a0NBR2E7QUFDWCxZQUFLUCxHQUFMLENBQVNPLEtBQVQsQ0FBZSxXQUFmO0FBQ0Q7O0FBRUQ7Ozs7OztrQ0FHYTtBQUNYLFlBQUtQLEdBQUwsQ0FBU08sS0FBVCxDQUFlLFdBQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7cUNBS2dCQyxTLEVBQVdDLEcsRUFBSztBQUM5QjtBQUNBLFdBQUlBLE9BQU9BLElBQUlDLElBQVgsSUFBbUJELElBQUlFLElBQUosS0FBYSxHQUFwQyxFQUF5QztBQUN2QyxjQUFLQyxLQUFMO0FBQ0EsY0FBS0MsVUFBTDtBQUNBLGNBQUtoQixFQUFMLENBQVFpQixLQUFSO0FBQ0Q7QUFDRCxZQUFLQyxJQUFMLENBQVUsVUFBVixFQUFzQlAsU0FBdEIsRUFBaUNDLEdBQWpDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MkJBSU1PLFEsRUFBVTtBQUFBOztBQUNkLFdBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNsQyxXQUFJQyxRQUFRRCxTQUFTRSxLQUFULENBQWUsS0FBS3RCLFNBQXBCLENBQVo7QUFDQXFCLGVBQVFBLE1BQU1FLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLEtBQUt6QixNQUFyQixDQUFSO0FBQ0F1QixlQUFRQSxNQUFNRyxHQUFOLENBQVU7QUFBQSxnQkFBUUMsS0FBS0MsTUFBTCxDQUFZLENBQVosRUFBZSxPQUFLN0IsS0FBcEIsQ0FBUjtBQUFBLFFBQVYsQ0FBUjtBQUNBLFlBQUtPLEdBQUwsQ0FBU08sS0FBVCxDQUFlVSxNQUFNTSxJQUFOLENBQVcsS0FBSzNCLFNBQWhCLENBQWY7QUFDRDs7OztHQWpFeUJQLFk7O21CQW9FYkUsYTs7Ozs7Ozs7OztBQzNFZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrRkFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLFlBQVcsT0FBTztBQUNsQixhQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsZ0JBQWU7QUFDZixjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QyxvQkFBb0I7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSx3REFBdUQ7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLGtDQUFpQztBQUNqQyxrQ0FBaUM7QUFDakMsa0NBQWlDOztBQUVqQztBQUNBLG9DQUFtQztBQUNuQyxvQ0FBbUM7QUFDbkMsb0NBQW1DO0FBQ25DLG9DQUFtQzs7QUFFbkM7QUFDQSxtQ0FBa0M7QUFDbEMsbUNBQWtDO0FBQ2xDLG1DQUFrQztBQUNsQyxtQ0FBa0M7QUFDbEMsbUNBQWtDOztBQUVsQztBQUNBLG9DQUFtQztBQUNuQyxvQ0FBbUM7QUFDbkMsb0NBQW1DO0FBQ25DLG9DQUFtQztBQUNuQyxvQ0FBbUM7QUFDbkMscUNBQW9DO0FBQ3BDLHFDQUFvQztBQUNwQyxxQ0FBb0M7O0FBRXBDO0FBQ0Esa0NBQWlDO0FBQ2pDLG9DQUFtQztBQUNuQyxxQ0FBb0M7QUFDcEMsb0NBQW1DO0FBQ25DLHFDQUFvQztBQUNwQyxtQ0FBa0M7QUFDbEMsb0NBQW1DOztBQUVuQztBQUNBLGtDQUFpQztBQUNqQyxvQ0FBbUM7QUFDbkMscUNBQW9DO0FBQ3BDLG9DQUFtQztBQUNuQyxxQ0FBb0M7QUFDcEMsbUNBQWtDO0FBQ2xDLG9DQUFtQzs7QUFFbkM7QUFDQSxxQ0FBb0M7QUFDcEMsdUNBQXNDO0FBQ3RDLHVDQUFzQztBQUN0QyxvQ0FBbUM7QUFDbkMsdUNBQXNDO0FBQ3RDLHlDQUF3Qzs7QUFFeEM7QUFDQSx3Q0FBdUM7QUFDdkMsMENBQXlDOztBQUV6QztBQUNBLHFDQUFvQztBQUNwQyxvQ0FBbUM7O0FBRW5DO0FBQ0Esa0NBQWlDLGtCQUFrQjtBQUNuRCxvQ0FBbUMsa0JBQWtCO0FBQ3JELHFDQUFvQyxrQkFBa0I7QUFDdEQsb0NBQW1DLGtCQUFrQjtBQUNyRCxxQ0FBb0Msa0JBQWtCOztBQUV0RCx1Q0FBc0Msa0JBQWtCO0FBQ3hELHVDQUFzQyxrQkFBa0I7QUFDeEQsdUNBQXNDLGtCQUFrQjtBQUN4RCx5Q0FBd0Msa0JBQWtCO0FBQzFELHFDQUFvQyxrQkFBa0I7QUFDdEQsb0NBQW1DLGtCQUFrQjs7QUFFckQsa0NBQWlDLGlCQUFpQjtBQUNsRCxvQ0FBbUMsaUJBQWlCO0FBQ3BELHFDQUFvQyxpQkFBaUI7QUFDckQsb0NBQW1DLGlCQUFpQjtBQUNwRCxxQ0FBb0MsaUJBQWlCOztBQUVyRCx1Q0FBc0MsaUJBQWlCO0FBQ3ZELHVDQUFzQyxpQkFBaUI7QUFDdkQsdUNBQXNDLGlCQUFpQjtBQUN2RCx5Q0FBd0MsaUJBQWlCO0FBQ3pELHFDQUFvQyxpQkFBaUI7QUFDckQsb0NBQW1DLGlCQUFpQjs7QUFFcEQ7QUFDQSxtQ0FBa0Msa0JBQWtCO0FBQ3BELHVDQUFzQzs7QUFFdEM7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2WkEsb0M7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6ImFzc2tlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImV2ZW50c1wiKSwgcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImV2ZW50c1wiLCBcInN0cmluZ19kZWNvZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJldmVudHNcIiksIHJlcXVpcmUoXCJzdHJpbmdfZGVjb2RlclwiKSkgOiBmYWN0b3J5KHJvb3RbXCJldmVudHNcIl0sIHJvb3RbXCJzdHJpbmdfZGVjb2RlclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDMwZjQ3YjgyYzI1NmQ1NTMyZjMiLCJpbXBvcnQgQ29uc29sZVdyaXRlciBmcm9tICdhc3NrZWUvd3JpdGVyL2NvbnNvbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnNvbGVXcml0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQga2V5cHJlc3MgZnJvbSAna2V5cHJlc3MnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcblxuLyoqXG4gKiBUaGUgQ29uc29sZVdyaXRlciBjbGFzcyBvYmplY3QuXG4gKiBAYXV0aG9yIFJ1YmVucyBNYXJpdXp6byA8cnViZW5zQG1hcml1enpvLmNvbT5cbiAqL1xuY2xhc3MgQ29uc29sZVdyaXRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgQ29uc29sZVdyaXRlciBvYmplY3QuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgODtcbiAgICB0aGlzLmJvcmRlciA9IG9wdGlvbnMuYm9yZGVyIHx8IGZhbHNlO1xuICAgIHRoaXMuc2VwYXJhdG9yID0gb3B0aW9ucy5zZXBhcmF0b3IgfHwgJ1xcbic7XG4gICAgdGhpcy5pbiA9IHByb2Nlc3Muc3RkaW47XG4gICAgdGhpcy5vdXQgPSBwcm9jZXNzLnN0ZG91dDtcbiAgICAvLyBFbmFibGUga2V5cHJlc3MgZXZlbnQgb24gY29uc29sZS5cbiAgICB0aGlzLmluLnNldFJhd01vZGUodHJ1ZSk7XG4gICAgdGhpcy5pbi5yZXN1bWUoKTtcbiAgICBrZXlwcmVzcyh0aGlzLmluKTtcbiAgICB0aGlzLmluLm9uKCdrZXlwcmVzcycsIHRoaXMua2V5cHJlc3NIYW5kbGVyLmJpbmQodGhpcykpO1xuICB9XG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29uc29sZS5cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMub3V0LndyaXRlKCdcXHgxQmMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjdXJzb3Igb24gdGhlIHRlcm1pbmFsLlxuICAgKi9cbiAgaGlkZUN1cnNvcigpIHtcbiAgICB0aGlzLm91dC53cml0ZSgnXFx4MUJbPzI1bCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGN1cnNvciBvbiB0aGUgdGVybWluYWwuXG4gICAqL1xuICBzaG93Q3Vyc29yKCkge1xuICAgIHRoaXMub3V0LndyaXRlKCdcXHgxQls/MjVoJyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleXByZXNzIGV2ZW50IG9uIHRoZSB0ZXJtaW5hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNoYXJhY3RlciAtIFRoZSBjaGFyYWN0ZXIgcHJlc3NlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGtleSAtIFRoZSBrZXkgcHJlc3NlZC5cbiAgICovXG4gIGtleXByZXNzSGFuZGxlcihjaGFyYWN0ZXIsIGtleSkge1xuICAgIC8vIFN1cHBvcnQgQ1RSTCtDIHRvIGV4aXQuXG4gICAgaWYgKGtleSAmJiBrZXkuY3RybCAmJiBrZXkubmFtZSA9PT0gJ2MnKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLnNob3dDdXJzb3IoKTtcbiAgICAgIHRoaXMuaW4ucGF1c2UoKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdrZXlwcmVzcycsIGNoYXJhY3Rlciwga2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0ZXh0IGNvbnRlbnRzIHRvIHRoZSBjb25zb2xlIG91dHB1dC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRzIC0gVGhlIHRleHQgY29udGVudHMuXG4gICAqL1xuICB3cml0ZShjb250ZW50cykge1xuICAgIGlmICh0eXBlb2YgY29udGVudHMgIT09ICdzdHJpbmcnKSByZXR1cm47XG4gICAgbGV0IGxpbmVzID0gY29udGVudHMuc3BsaXQodGhpcy5zZXBhcmF0b3IpO1xuICAgIGxpbmVzID0gbGluZXMuc3BsaWNlKDAsIHRoaXMuaGVpZ2h0KTtcbiAgICBsaW5lcyA9IGxpbmVzLm1hcChsaW5lID0+IGxpbmUuc3Vic3RyKDAsIHRoaXMud2lkdGgpKTtcbiAgICB0aGlzLm91dC53cml0ZShsaW5lcy5qb2luKHRoaXMuc2VwYXJhdG9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZVdyaXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93cml0ZXIvY29uc29sZS5qcyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGtleXByZXNzO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG9mZmVycyB0aGUgaW50ZXJuYWwgXCJrZXlwcmVzc1wiIGZ1bmN0aW9uYWxpdHkgZnJvbSBub2RlLWNvcmUnc1xuICogYHJlYWRsaW5lYCBtb2R1bGUsIGZvciB5b3VyIG93biBwcm9ncmFtcyBhbmQgbW9kdWxlcyB0byB1c2UuXG4gKlxuICogVGhlIGBrZXlwcmVzc2AgZnVuY3Rpb24gYWNjZXB0cyBhIHJlYWRhYmxlIFN0cmVhbSBpbnN0YW5jZSBhbmQgbWFrZXMgaXRcbiAqIGVtaXQgXCJrZXlwcmVzc1wiIGV2ZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBgYGAganNcbiAqIHJlcXVpcmUoJ2tleXByZXNzJykocHJvY2Vzcy5zdGRpbik7XG4gKlxuICogcHJvY2Vzcy5zdGRpbi5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoY2gsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhjaCwga2V5KTtcbiAqICAgaWYgKGtleS5jdHJsICYmIGtleS5uYW1lID09ICdjJykge1xuICogICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcbiAqICAgfVxuICogfSk7XG4gKiBwcm9jZXMuc3RkaW4ucmVzdW1lKCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGtleXByZXNzKHN0cmVhbSkge1xuICBpZiAoaXNFbWl0dGluZ0tleXByZXNzKHN0cmVhbSkpIHJldHVybjtcblxuICB2YXIgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJykuU3RyaW5nRGVjb2RlcjsgLy8gbGF6eSBsb2FkXG4gIHN0cmVhbS5fa2V5cHJlc3NEZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoJ3V0ZjgnKTtcblxuICBmdW5jdGlvbiBvbkRhdGEoYikge1xuICAgIGlmIChsaXN0ZW5lckNvdW50KHN0cmVhbSwgJ2tleXByZXNzJykgPiAwKSB7XG4gICAgICB2YXIgciA9IHN0cmVhbS5fa2V5cHJlc3NEZWNvZGVyLndyaXRlKGIpO1xuICAgICAgaWYgKHIpIGVtaXRLZXkoc3RyZWFtLCByKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ib2R5J3Mgd2F0Y2hpbmcgYW55d2F5XG4gICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbkRhdGEpO1xuICAgICAgc3RyZWFtLm9uKCduZXdMaXN0ZW5lcicsIG9uTmV3TGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTmV3TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgPT0gJ2tleXByZXNzJykge1xuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignbmV3TGlzdGVuZXInLCBvbk5ld0xpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBpZiAobGlzdGVuZXJDb3VudChzdHJlYW0sICdrZXlwcmVzcycpID4gMCkge1xuICAgIHN0cmVhbS5vbignZGF0YScsIG9uRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgc3RyZWFtLm9uKCduZXdMaXN0ZW5lcicsIG9uTmV3TGlzdGVuZXIpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHN0cmVhbSBpcyBhbHJlYWR5IGVtaXR0aW5nIFwia2V5cHJlc3NcIiBldmVudHMuXG4gKiBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHJlYWRhYmxlIHN0cmVhbVxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBzdHJlYW0gaXMgZW1pdHRpbmcgXCJrZXlwcmVzc1wiIGV2ZW50c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNFbWl0dGluZ0tleXByZXNzKHN0cmVhbSkge1xuICB2YXIgcnRuID0gISFzdHJlYW0uX2tleXByZXNzRGVjb2RlcjtcbiAgaWYgKCFydG4pIHtcbiAgICAvLyBYWFg6IGZvciBvbGRlciB2ZXJzaW9ucyBvZiBub2RlICh2MC42LngsIHYwLjgueCkgd2Ugd2FudCB0byByZW1vdmUgdGhlXG4gICAgLy8gZXhpc3RpbmcgXCJkYXRhXCIgYW5kIFwibmV3TGlzdGVuZXJcIiBrZXlwcmVzcyBldmVudHMgc2luY2UgdGhleSB3b24ndCBpbmNsdWRlXG4gICAgLy8gdGhpcyBga2V5cHJlc3NgIG1vZHVsZSBleHRlbnNpb25zIChsaWtlIFwibW91c2VwcmVzc1wiIGV2ZW50cykuXG4gICAgc3RyZWFtLmxpc3RlbmVycygnZGF0YScpLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24obCkge1xuICAgICAgaWYgKGwubmFtZSA9PSAnb25EYXRhJyAmJiAvZW1pdEtleS8udGVzdChsLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZGF0YScsIGwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0cmVhbS5saXN0ZW5lcnMoJ25ld0xpc3RlbmVyJykuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgICBpZiAobC5uYW1lID09ICdvbk5ld0xpc3RlbmVyJyAmJiAva2V5cHJlc3MvLnRlc3QobC50b1N0cmluZygpKSkge1xuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ25ld0xpc3RlbmVyJywgbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJ0bjtcbn1cblxuLyoqXG4gKiBFbmFibGVzIFwibW91c2VwcmVzc1wiIGV2ZW50cyBvbiB0aGUgKmlucHV0KiBzdHJlYW0uIE5vdGUgdGhhdCBgc3RyZWFtYCBtdXN0IGJlXG4gKiBhbiAqb3V0cHV0KiBzdHJlYW0gKGkuZS4gYSBXcml0YWJsZSBTdHJlYW0gaW5zdGFuY2UpLCB1c3VhbGx5IGBwcm9jZXNzLnN0ZG91dGAuXG4gKlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB3cml0YWJsZSBzdHJlYW0gaW5zdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5lbmFibGVNb3VzZSA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgc3RyZWFtLndyaXRlKCdcXHgxYls/MTAwMGgnKTtcbn07XG5cbi8qKlxuICogRGlzYWJsZXMgXCJtb3VzZXByZXNzXCIgZXZlbnRzIGZyb20gYmVpbmcgc2VudCB0byB0aGUgKmlucHV0KiBzdHJlYW0uXG4gKiBOb3RlIHRoYXQgYHN0cmVhbWAgbXVzdCBiZSBhbiAqb3V0cHV0KiBzdHJlYW0gKGkuZS4gYSBXcml0YWJsZSBTdHJlYW0gaW5zdGFuY2UpLFxuICogdXN1YWxseSBgcHJvY2Vzcy5zdGRvdXRgLlxuICpcbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gd3JpdGFibGUgc3RyZWFtIGluc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGlzYWJsZU1vdXNlID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICBzdHJlYW0ud3JpdGUoJ1xceDFiWz8xMDAwbCcpO1xufTtcblxuLyoqXG4gKiBgRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoKWAgcG9seWZpbGwsIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuICpcbiAqIEBwYXJhbSB7RW1pdHRlcn0gZW1pdHRlciBldmVudCBlbWl0dGVyIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgZXZlbnQgbmFtZVxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgbGlzdGVuZXJzIGZvciBgZXZlbnRgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnZhciBsaXN0ZW5lckNvdW50ID0gRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQ7XG5pZiAoIWxpc3RlbmVyQ291bnQpIHtcbiAgbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIGV2ZW50KSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEJlbG93IHRoaXMgZnVuY3Rpb24gaXMgY29kZSBmcm9tIG5vZGUtY29yZSdzIGByZWFkbGluZS5qc2AgbW9kdWxlIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qXG4gIFNvbWUgcGF0dGVybnMgc2VlbiBpbiB0ZXJtaW5hbCBrZXkgZXNjYXBlIGNvZGVzLCBkZXJpdmVkIGZyb20gY29tYm9zIHNlZW5cbiAgYXQgaHR0cDovL3d3dy5taWRuaWdodC1jb21tYW5kZXIub3JnL2Jyb3dzZXIvbGliL3R0eS9rZXkuY1xuXG4gIEVTQyBsZXR0ZXJcbiAgRVNDIFsgbGV0dGVyXG4gIEVTQyBbIG1vZGlmaWVyIGxldHRlclxuICBFU0MgWyAxIDsgbW9kaWZpZXIgbGV0dGVyXG4gIEVTQyBbIG51bSBjaGFyXG4gIEVTQyBbIG51bSA7IG1vZGlmaWVyIGNoYXJcbiAgRVNDIE8gbGV0dGVyXG4gIEVTQyBPIG1vZGlmaWVyIGxldHRlclxuICBFU0MgTyAxIDsgbW9kaWZpZXIgbGV0dGVyXG4gIEVTQyBOIGxldHRlclxuICBFU0MgWyBbIG51bSA7IG1vZGlmaWVyIGNoYXJcbiAgRVNDIFsgWyAxIDsgbW9kaWZpZXIgbGV0dGVyXG4gIEVTQyBFU0MgWyBudW0gY2hhclxuICBFU0MgRVNDIE8gbGV0dGVyXG5cbiAgLSBjaGFyIGlzIHVzdWFsbHkgfiBidXQgJCBhbmQgXiBhbHNvIGhhcHBlbiB3aXRoIHJ4dnRcbiAgLSBtb2RpZmllciBpcyAxICtcbiAgICAgICAgICAgICAgICAoc2hpZnQgICAgICogMSkgK1xuICAgICAgICAgICAgICAgIChsZWZ0X2FsdCAgKiAyKSArXG4gICAgICAgICAgICAgICAgKGN0cmwgICAgICAqIDQpICtcbiAgICAgICAgICAgICAgICAocmlnaHRfYWx0ICogOClcbiAgLSB0d28gbGVhZGluZyBFU0NzIGFwcGFyZW50bHkgbWVhbiB0aGUgc2FtZSBhcyBvbmUgbGVhZGluZyBFU0NcbiovXG5cbi8vIFJlZ2V4ZXMgdXNlZCBmb3IgYW5zaSBlc2NhcGUgY29kZSBzcGxpdHRpbmdcbnZhciBtZXRhS2V5Q29kZVJlID0gL14oPzpcXHgxYikoW2EtekEtWjAtOV0pJC87XG52YXIgZnVuY3Rpb25LZXlDb2RlUmUgPVxuICAgIC9eKD86XFx4MWIrKShPfE58XFxbfFxcW1xcWykoPzooXFxkKykoPzo7KFxcZCspKT8oW35eJF0pfCg/OjE7KT8oXFxkKyk/KFthLXpBLVpdKSkvO1xuXG5mdW5jdGlvbiBlbWl0S2V5KHN0cmVhbSwgcykge1xuICB2YXIgY2gsXG4gICAgICBrZXkgPSB7XG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RybDogZmFsc2UsXG4gICAgICAgIG1ldGE6IGZhbHNlLFxuICAgICAgICBzaGlmdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwYXJ0cztcblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHMpKSB7XG4gICAgaWYgKHNbMF0gPiAxMjcgJiYgc1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzWzBdIC09IDEyODtcbiAgICAgIHMgPSAnXFx4MWInICsgcy50b1N0cmluZyhzdHJlYW0uZW5jb2RpbmcgfHwgJ3V0Zi04Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgPSBzLnRvU3RyaW5nKHN0cmVhbS5lbmNvZGluZyB8fCAndXRmLTgnKTtcbiAgICB9XG4gIH1cblxuICBrZXkuc2VxdWVuY2UgPSBzO1xuXG4gIGlmIChzID09PSAnXFxyJykge1xuICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgIGtleS5uYW1lID0gJ3JldHVybic7XG5cbiAgfSBlbHNlIGlmIChzID09PSAnXFxuJykge1xuICAgIC8vIGVudGVyLCBzaG91bGQgaGF2ZSBiZWVuIGNhbGxlZCBsaW5lZmVlZFxuICAgIGtleS5uYW1lID0gJ2VudGVyJztcblxuICB9IGVsc2UgaWYgKHMgPT09ICdcXHQnKSB7XG4gICAgLy8gdGFiXG4gICAga2V5Lm5hbWUgPSAndGFiJztcblxuICB9IGVsc2UgaWYgKHMgPT09ICdcXGInIHx8IHMgPT09ICdcXHg3ZicgfHxcbiAgICAgICAgICAgICBzID09PSAnXFx4MWJcXHg3ZicgfHwgcyA9PT0gJ1xceDFiXFxiJykge1xuICAgIC8vIGJhY2tzcGFjZSBvciBjdHJsK2hcbiAgICBrZXkubmFtZSA9ICdiYWNrc3BhY2UnO1xuICAgIGtleS5tZXRhID0gKHMuY2hhckF0KDApID09PSAnXFx4MWInKTtcblxuICB9IGVsc2UgaWYgKHMgPT09ICdcXHgxYicgfHwgcyA9PT0gJ1xceDFiXFx4MWInKSB7XG4gICAgLy8gZXNjYXBlIGtleVxuICAgIGtleS5uYW1lID0gJ2VzY2FwZSc7XG4gICAga2V5Lm1ldGEgPSAocy5sZW5ndGggPT09IDIpO1xuXG4gIH0gZWxzZSBpZiAocyA9PT0gJyAnIHx8IHMgPT09ICdcXHgxYiAnKSB7XG4gICAga2V5Lm5hbWUgPSAnc3BhY2UnO1xuICAgIGtleS5tZXRhID0gKHMubGVuZ3RoID09PSAyKTtcblxuICB9IGVsc2UgaWYgKHMgPD0gJ1xceDFhJykge1xuICAgIC8vIGN0cmwrbGV0dGVyXG4gICAga2V5Lm5hbWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSArICdhJy5jaGFyQ29kZUF0KDApIC0gMSk7XG4gICAga2V5LmN0cmwgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocy5sZW5ndGggPT09IDEgJiYgcyA+PSAnYScgJiYgcyA8PSAneicpIHtcbiAgICAvLyBsb3dlcmNhc2UgbGV0dGVyXG4gICAga2V5Lm5hbWUgPSBzO1xuXG4gIH0gZWxzZSBpZiAocy5sZW5ndGggPT09IDEgJiYgcyA+PSAnQScgJiYgcyA8PSAnWicpIHtcbiAgICAvLyBzaGlmdCtsZXR0ZXJcbiAgICBrZXkubmFtZSA9IHMudG9Mb3dlckNhc2UoKTtcbiAgICBrZXkuc2hpZnQgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAocGFydHMgPSBtZXRhS2V5Q29kZVJlLmV4ZWMocykpIHtcbiAgICAvLyBtZXRhK2NoYXJhY3RlciBrZXlcbiAgICBrZXkubmFtZSA9IHBhcnRzWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAga2V5Lm1ldGEgPSB0cnVlO1xuICAgIGtleS5zaGlmdCA9IC9eW0EtWl0kLy50ZXN0KHBhcnRzWzFdKTtcblxuICB9IGVsc2UgaWYgKHBhcnRzID0gZnVuY3Rpb25LZXlDb2RlUmUuZXhlYyhzKSkge1xuICAgIC8vIGFuc2kgZXNjYXBlIHNlcXVlbmNlXG5cbiAgICAvLyByZWFzc2VtYmxlIHRoZSBrZXkgY29kZSBsZWF2aW5nIG91dCBsZWFkaW5nIFxceDFiJ3MsXG4gICAgLy8gdGhlIG1vZGlmaWVyIGtleSBiaXRmbGFnIGFuZCBhbnkgbWVhbmluZ2xlc3MgXCIxO1wiIHNlcXVlbmNlXG4gICAgdmFyIGNvZGUgPSAocGFydHNbMV0gfHwgJycpICsgKHBhcnRzWzJdIHx8ICcnKSArXG4gICAgICAgICAgICAgICAocGFydHNbNF0gfHwgJycpICsgKHBhcnRzWzZdIHx8ICcnKSxcbiAgICAgICAgbW9kaWZpZXIgPSAocGFydHNbM10gfHwgcGFydHNbNV0gfHwgMSkgLSAxO1xuXG4gICAgLy8gUGFyc2UgdGhlIGtleSBtb2RpZmllclxuICAgIGtleS5jdHJsID0gISEobW9kaWZpZXIgJiA0KTtcbiAgICBrZXkubWV0YSA9ICEhKG1vZGlmaWVyICYgMTApO1xuICAgIGtleS5zaGlmdCA9ICEhKG1vZGlmaWVyICYgMSk7XG4gICAga2V5LmNvZGUgPSBjb2RlO1xuXG4gICAgLy8gUGFyc2UgdGhlIGtleSBpdHNlbGZcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIC8qIHh0ZXJtL2dub21lIEVTQyBPIGxldHRlciAqL1xuICAgICAgY2FzZSAnT1AnOiBrZXkubmFtZSA9ICdmMSc7IGJyZWFrO1xuICAgICAgY2FzZSAnT1EnOiBrZXkubmFtZSA9ICdmMic7IGJyZWFrO1xuICAgICAgY2FzZSAnT1InOiBrZXkubmFtZSA9ICdmMyc7IGJyZWFrO1xuICAgICAgY2FzZSAnT1MnOiBrZXkubmFtZSA9ICdmNCc7IGJyZWFrO1xuXG4gICAgICAvKiB4dGVybS9yeHZ0IEVTQyBbIG51bWJlciB+ICovXG4gICAgICBjYXNlICdbMTF+Jzoga2V5Lm5hbWUgPSAnZjEnOyBicmVhaztcbiAgICAgIGNhc2UgJ1sxMn4nOiBrZXkubmFtZSA9ICdmMic7IGJyZWFrO1xuICAgICAgY2FzZSAnWzEzfic6IGtleS5uYW1lID0gJ2YzJzsgYnJlYWs7XG4gICAgICBjYXNlICdbMTR+Jzoga2V5Lm5hbWUgPSAnZjQnOyBicmVhaztcblxuICAgICAgLyogZnJvbSBDeWd3aW4gYW5kIHVzZWQgaW4gbGlidXYgKi9cbiAgICAgIGNhc2UgJ1tbQSc6IGtleS5uYW1lID0gJ2YxJzsgYnJlYWs7XG4gICAgICBjYXNlICdbW0InOiBrZXkubmFtZSA9ICdmMic7IGJyZWFrO1xuICAgICAgY2FzZSAnW1tDJzoga2V5Lm5hbWUgPSAnZjMnOyBicmVhaztcbiAgICAgIGNhc2UgJ1tbRCc6IGtleS5uYW1lID0gJ2Y0JzsgYnJlYWs7XG4gICAgICBjYXNlICdbW0UnOiBrZXkubmFtZSA9ICdmNSc7IGJyZWFrO1xuXG4gICAgICAvKiBjb21tb24gKi9cbiAgICAgIGNhc2UgJ1sxNX4nOiBrZXkubmFtZSA9ICdmNSc7IGJyZWFrO1xuICAgICAgY2FzZSAnWzE3fic6IGtleS5uYW1lID0gJ2Y2JzsgYnJlYWs7XG4gICAgICBjYXNlICdbMTh+Jzoga2V5Lm5hbWUgPSAnZjcnOyBicmVhaztcbiAgICAgIGNhc2UgJ1sxOX4nOiBrZXkubmFtZSA9ICdmOCc7IGJyZWFrO1xuICAgICAgY2FzZSAnWzIwfic6IGtleS5uYW1lID0gJ2Y5JzsgYnJlYWs7XG4gICAgICBjYXNlICdbMjF+Jzoga2V5Lm5hbWUgPSAnZjEwJzsgYnJlYWs7XG4gICAgICBjYXNlICdbMjN+Jzoga2V5Lm5hbWUgPSAnZjExJzsgYnJlYWs7XG4gICAgICBjYXNlICdbMjR+Jzoga2V5Lm5hbWUgPSAnZjEyJzsgYnJlYWs7XG5cbiAgICAgIC8qIHh0ZXJtIEVTQyBbIGxldHRlciAqL1xuICAgICAgY2FzZSAnW0EnOiBrZXkubmFtZSA9ICd1cCc7IGJyZWFrO1xuICAgICAgY2FzZSAnW0InOiBrZXkubmFtZSA9ICdkb3duJzsgYnJlYWs7XG4gICAgICBjYXNlICdbQyc6IGtleS5uYW1lID0gJ3JpZ2h0JzsgYnJlYWs7XG4gICAgICBjYXNlICdbRCc6IGtleS5uYW1lID0gJ2xlZnQnOyBicmVhaztcbiAgICAgIGNhc2UgJ1tFJzoga2V5Lm5hbWUgPSAnY2xlYXInOyBicmVhaztcbiAgICAgIGNhc2UgJ1tGJzoga2V5Lm5hbWUgPSAnZW5kJzsgYnJlYWs7XG4gICAgICBjYXNlICdbSCc6IGtleS5uYW1lID0gJ2hvbWUnOyBicmVhaztcblxuICAgICAgLyogeHRlcm0vZ25vbWUgRVNDIE8gbGV0dGVyICovXG4gICAgICBjYXNlICdPQSc6IGtleS5uYW1lID0gJ3VwJzsgYnJlYWs7XG4gICAgICBjYXNlICdPQic6IGtleS5uYW1lID0gJ2Rvd24nOyBicmVhaztcbiAgICAgIGNhc2UgJ09DJzoga2V5Lm5hbWUgPSAncmlnaHQnOyBicmVhaztcbiAgICAgIGNhc2UgJ09EJzoga2V5Lm5hbWUgPSAnbGVmdCc7IGJyZWFrO1xuICAgICAgY2FzZSAnT0UnOiBrZXkubmFtZSA9ICdjbGVhcic7IGJyZWFrO1xuICAgICAgY2FzZSAnT0YnOiBrZXkubmFtZSA9ICdlbmQnOyBicmVhaztcbiAgICAgIGNhc2UgJ09IJzoga2V5Lm5hbWUgPSAnaG9tZSc7IGJyZWFrO1xuXG4gICAgICAvKiB4dGVybS9yeHZ0IEVTQyBbIG51bWJlciB+ICovXG4gICAgICBjYXNlICdbMX4nOiBrZXkubmFtZSA9ICdob21lJzsgYnJlYWs7XG4gICAgICBjYXNlICdbMn4nOiBrZXkubmFtZSA9ICdpbnNlcnQnOyBicmVhaztcbiAgICAgIGNhc2UgJ1szfic6IGtleS5uYW1lID0gJ2RlbGV0ZSc7IGJyZWFrO1xuICAgICAgY2FzZSAnWzR+Jzoga2V5Lm5hbWUgPSAnZW5kJzsgYnJlYWs7XG4gICAgICBjYXNlICdbNX4nOiBrZXkubmFtZSA9ICdwYWdldXAnOyBicmVhaztcbiAgICAgIGNhc2UgJ1s2fic6IGtleS5uYW1lID0gJ3BhZ2Vkb3duJzsgYnJlYWs7XG5cbiAgICAgIC8qIHB1dHR5ICovXG4gICAgICBjYXNlICdbWzV+Jzoga2V5Lm5hbWUgPSAncGFnZXVwJzsgYnJlYWs7XG4gICAgICBjYXNlICdbWzZ+Jzoga2V5Lm5hbWUgPSAncGFnZWRvd24nOyBicmVhaztcblxuICAgICAgLyogcnh2dCAqL1xuICAgICAgY2FzZSAnWzd+Jzoga2V5Lm5hbWUgPSAnaG9tZSc7IGJyZWFrO1xuICAgICAgY2FzZSAnWzh+Jzoga2V5Lm5hbWUgPSAnZW5kJzsgYnJlYWs7XG5cbiAgICAgIC8qIHJ4dnQga2V5cyB3aXRoIG1vZGlmaWVycyAqL1xuICAgICAgY2FzZSAnW2EnOiBrZXkubmFtZSA9ICd1cCc7IGtleS5zaGlmdCA9IHRydWU7IGJyZWFrO1xuICAgICAgY2FzZSAnW2InOiBrZXkubmFtZSA9ICdkb3duJzsga2V5LnNoaWZ0ID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdbYyc6IGtleS5uYW1lID0gJ3JpZ2h0Jzsga2V5LnNoaWZ0ID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdbZCc6IGtleS5uYW1lID0gJ2xlZnQnOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ1tlJzoga2V5Lm5hbWUgPSAnY2xlYXInOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcblxuICAgICAgY2FzZSAnWzIkJzoga2V5Lm5hbWUgPSAnaW5zZXJ0Jzsga2V5LnNoaWZ0ID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdbMyQnOiBrZXkubmFtZSA9ICdkZWxldGUnOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ1s1JCc6IGtleS5uYW1lID0gJ3BhZ2V1cCc7IGtleS5zaGlmdCA9IHRydWU7IGJyZWFrO1xuICAgICAgY2FzZSAnWzYkJzoga2V5Lm5hbWUgPSAncGFnZWRvd24nOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ1s3JCc6IGtleS5uYW1lID0gJ2hvbWUnOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ1s4JCc6IGtleS5uYW1lID0gJ2VuZCc7IGtleS5zaGlmdCA9IHRydWU7IGJyZWFrO1xuXG4gICAgICBjYXNlICdPYSc6IGtleS5uYW1lID0gJ3VwJzsga2V5LmN0cmwgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ09iJzoga2V5Lm5hbWUgPSAnZG93bic7IGtleS5jdHJsID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdPYyc6IGtleS5uYW1lID0gJ3JpZ2h0Jzsga2V5LmN0cmwgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ09kJzoga2V5Lm5hbWUgPSAnbGVmdCc7IGtleS5jdHJsID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdPZSc6IGtleS5uYW1lID0gJ2NsZWFyJzsga2V5LmN0cmwgPSB0cnVlOyBicmVhaztcblxuICAgICAgY2FzZSAnWzJeJzoga2V5Lm5hbWUgPSAnaW5zZXJ0Jzsga2V5LmN0cmwgPSB0cnVlOyBicmVhaztcbiAgICAgIGNhc2UgJ1szXic6IGtleS5uYW1lID0gJ2RlbGV0ZSc7IGtleS5jdHJsID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdbNV4nOiBrZXkubmFtZSA9ICdwYWdldXAnOyBrZXkuY3RybCA9IHRydWU7IGJyZWFrO1xuICAgICAgY2FzZSAnWzZeJzoga2V5Lm5hbWUgPSAncGFnZWRvd24nOyBrZXkuY3RybCA9IHRydWU7IGJyZWFrO1xuICAgICAgY2FzZSAnWzdeJzoga2V5Lm5hbWUgPSAnaG9tZSc7IGtleS5jdHJsID0gdHJ1ZTsgYnJlYWs7XG4gICAgICBjYXNlICdbOF4nOiBrZXkubmFtZSA9ICdlbmQnOyBrZXkuY3RybCA9IHRydWU7IGJyZWFrO1xuXG4gICAgICAvKiBtaXNjLiAqL1xuICAgICAgY2FzZSAnW1onOiBrZXkubmFtZSA9ICd0YWInOyBrZXkuc2hpZnQgPSB0cnVlOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGtleS5uYW1lID0gJ3VuZGVmaW5lZCc7IGJyZWFrO1xuXG4gICAgfVxuICB9IGVsc2UgaWYgKHMubGVuZ3RoID4gMSAmJiBzWzBdICE9PSAnXFx4MWInKSB7XG4gICAgLy8gR290IGEgbG9uZ2VyLXRoYW4tb25lIHN0cmluZyBvZiBjaGFyYWN0ZXJzLlxuICAgIC8vIFByb2JhYmx5IGEgcGFzdGUsIHNpbmNlIGl0IHdhc24ndCBhIGNvbnRyb2wgc2VxdWVuY2UuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzLCBmdW5jdGlvbihjKSB7XG4gICAgICBlbWl0S2V5KHN0cmVhbSwgYyk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gWFhYOiB0aGlzIFwibW91c2VcIiBwYXJzaW5nIGNvZGUgaXMgTk9UIHBhcnQgb2YgdGhlIG5vZGUtY29yZSBzdGFuZGFyZFxuICAvLyBgcmVhZGxpbmUuanNgIG1vZHVsZSwgYW5kIGlzIGEgYGtleXByZXNzYCBtb2R1bGUgbm9uLXN0YW5kYXJkIGV4dGVuc2lvbi5cbiAgaWYgKGtleS5jb2RlID09ICdbTScpIHtcbiAgICBrZXkubmFtZSA9ICdtb3VzZSc7XG4gICAgdmFyIHMgPSBrZXkuc2VxdWVuY2U7XG4gICAgdmFyIGIgPSBzLmNoYXJDb2RlQXQoMyk7XG4gICAga2V5LnggPSBzLmNoYXJDb2RlQXQoNCkgLSAwNDA7XG4gICAga2V5LnkgPSBzLmNoYXJDb2RlQXQoNSkgLSAwNDA7XG5cbiAgICBrZXkuc2Nyb2xsID0gMDtcblxuICAgIGtleS5jdHJsICA9ICEhKDE8PDQgJiBiKTtcbiAgICBrZXkubWV0YSAgPSAhISgxPDwzICYgYik7XG4gICAga2V5LnNoaWZ0ID0gISEoMTw8MiAmIGIpO1xuXG4gICAga2V5LnJlbGVhc2UgPSAoMyAmIGIpID09PSAzO1xuXG4gICAgaWYgKDE8PDYgJiBiKSB7IC8vc2Nyb2xsXG4gICAgICBrZXkuc2Nyb2xsID0gMSAmIGIgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKCFrZXkucmVsZWFzZSAmJiAha2V5LnNjcm9sbCkge1xuICAgICAga2V5LmJ1dHRvbiA9IGIgJiAzO1xuICAgIH1cbiAgfVxuXG4gIC8vIERvbid0IGVtaXQgYSBrZXkgaWYgbm8gbmFtZSB3YXMgZm91bmRcbiAgaWYgKGtleS5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBrZXkgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAocy5sZW5ndGggPT09IDEpIHtcbiAgICBjaCA9IHM7XG4gIH1cblxuICBpZiAoa2V5ICYmIGtleS5uYW1lID09ICdtb3VzZScpIHtcbiAgICBzdHJlYW0uZW1pdCgnbW91c2VwcmVzcycsIGtleSk7XG4gIH0gZWxzZSBpZiAoa2V5IHx8IGNoKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2tleXByZXNzJywgY2gsIGtleSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9rZXlwcmVzcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmdfZGVjb2RlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ19kZWNvZGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==