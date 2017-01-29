import keypress from 'keypress';

const EventEmitter = require('events');

/**
 * The ConsoleWriter class object.
 * @author Rubens Mariuzzo <rubens@mariuzzo.com>
 */
class ConsoleWriter extends EventEmitter {
  /**
   * Construct a new ConsoleWriter object.
   * @type {Object}
   */
  constructor(options = {}) {
    super();
    this.width = options.width || 32;
    this.height = options.height || 8;
    this.border = options.border || false;
    this.separator = options.separator || '\n';
    this.in = process.stdin;
    this.out = process.stdout;
    // Enable keypress event on console.
    this.in.setRawMode(true);
    this.in.resume();
    keypress(this.in);
    this.in.on('keypress', this.keypressHandler.bind(this));
  }
  /**
   * Clear the console.
   */
  clear() {
    this.out.write('\x1Bc');
  }

  /**
   * Hide the cursor on the terminal.
   */
  hideCursor() {
    this.out.write('\x1B[?25l');
  }

  /**
   * Show the cursor on the terminal.
   */
  showCursor() {
    this.out.write('\x1B[?25h');
  }

  /**
   * Handle keypress event on the terminal.
   * @param {String} character - The character pressed.
   * @param {Object} key - The key pressed.
   */
  keypressHandler(character, key) {
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
  write(contents) {
    if (typeof contents !== 'string') return;
    let lines = contents.split(this.separator);
    lines = lines.splice(0, this.height);
    lines = lines.map(line => line.substr(0, this.width));
    this.out.write(lines.join(this.separator));
  }
}

export default ConsoleWriter;
