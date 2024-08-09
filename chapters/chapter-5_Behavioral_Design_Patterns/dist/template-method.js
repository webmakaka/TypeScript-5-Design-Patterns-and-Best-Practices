"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordProcessor = exports.PDFProcessor = exports.DocumentProcessor = void 0;
var tslib_1 = require("tslib");
var DocumentProcessor = /** @class */ (function () {
    function DocumentProcessor() {
    }
    Object.defineProperty(DocumentProcessor.prototype, "processDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.openDocument();
            this.extractContent();
            this.analyzeContent();
            this.saveDocument();
        }
    });
    Object.defineProperty(DocumentProcessor.prototype, "openDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Opening document");
        }
    });
    Object.defineProperty(DocumentProcessor.prototype, "saveDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Saving processed document");
        }
    });
    return DocumentProcessor;
}());
exports.DocumentProcessor = DocumentProcessor;
var PDFProcessor = /** @class */ (function (_super) {
    tslib_1.__extends(PDFProcessor, _super);
    function PDFProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PDFProcessor.prototype, "extractContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Extracting content from PDF");
        }
    });
    Object.defineProperty(PDFProcessor.prototype, "analyzeContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Analyzing PDF content");
        }
    });
    return PDFProcessor;
}(DocumentProcessor));
exports.PDFProcessor = PDFProcessor;
var WordProcessor = /** @class */ (function (_super) {
    tslib_1.__extends(WordProcessor, _super);
    function WordProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WordProcessor.prototype, "extractContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Extracting content from Word document");
        }
    });
    Object.defineProperty(WordProcessor.prototype, "analyzeContent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Analyzing Word document content");
        }
    });
    return WordProcessor;
}(DocumentProcessor));
exports.WordProcessor = WordProcessor;
// class WelcomeHome extends React.Component<{name: string},{}> {
//   componentDidMount() {
//     console.log("Just loaded");
//   }
//   componentWillUnmount() {
//     console.log("Goodbye!");
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
