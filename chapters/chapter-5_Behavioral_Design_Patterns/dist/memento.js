"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorCaretaker = exports.TextEditor = exports.EditorMemento = void 0;
var tslib_1 = require("tslib");
// Memento.ts
var EditorMemento = /** @class */ (function () {
    function EditorMemento(state) {
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: state
        });
    }
    Object.defineProperty(EditorMemento.prototype, "getState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.state;
        }
    });
    return EditorMemento;
}());
exports.EditorMemento = EditorMemento;
var TextEditor = /** @class */ (function () {
    function TextEditor(initialContent) {
        if (initialContent === void 0) { initialContent = ""; }
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.state = { content: initialContent, cursorPosition: 0 };
    }
    Object.defineProperty(TextEditor.prototype, "type", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            var _a = this.state, content = _a.content, cursorPosition = _a.cursorPosition;
            this.state.content = content.slice(0, cursorPosition) + text + content.slice(cursorPosition);
            this.state.cursorPosition += text.length;
        }
    });
    Object.defineProperty(TextEditor.prototype, "moveCursor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (position) {
            this.state.cursorPosition = Math.max(0, Math.min(position, this.state.content.length));
        }
    });
    Object.defineProperty(TextEditor.prototype, "getContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.state.content;
        }
    });
    Object.defineProperty(TextEditor.prototype, "getCursorPosition", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.state.cursorPosition;
        }
    });
    Object.defineProperty(TextEditor.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new EditorMemento(tslib_1.__assign({}, this.state));
        }
    });
    Object.defineProperty(TextEditor.prototype, "restore", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (memento) {
            this.state = tslib_1.__assign({}, memento.getState());
        }
    });
    return TextEditor;
}());
exports.TextEditor = TextEditor;
var EditorCaretaker = /** @class */ (function () {
    function EditorCaretaker(editor) {
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: editor
        });
        Object.defineProperty(this, "mementos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "currentIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
    }
    Object.defineProperty(EditorCaretaker.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.currentIndex < this.mementos.length - 1) {
                this.mementos = this.mementos.slice(0, this.currentIndex + 1);
            }
            this.mementos.push(this.editor.save());
            this.currentIndex++;
        }
    });
    Object.defineProperty(EditorCaretaker.prototype, "undo", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.editor.restore(this.mementos[this.currentIndex]);
            }
        }
    });
    Object.defineProperty(EditorCaretaker.prototype, "redo", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.currentIndex < this.mementos.length - 1) {
                this.currentIndex++;
                this.editor.restore(this.mementos[this.currentIndex]);
            }
        }
    });
    return EditorCaretaker;
}());
exports.EditorCaretaker = EditorCaretaker;
// Usage example
var editor = new TextEditor();
var caretaker = new EditorCaretaker(editor);
editor.type("Hello, ");
caretaker.save();
editor.type("world!");
caretaker.save();
editor.moveCursor(7);
editor.type("beautiful ");
caretaker.save();
console.log(editor.getContent()); // Output: Hello, beautiful world!
caretaker.undo();
console.log(editor.getContent()); // Output: Hello, world!
caretaker.undo();
console.log(editor.getContent()); // Output: Hello,
caretaker.redo();
console.log(editor.getContent()); // Output: Hello, world!
