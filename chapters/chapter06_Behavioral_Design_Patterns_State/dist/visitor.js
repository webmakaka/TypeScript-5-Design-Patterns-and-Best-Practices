"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeDocument = exports.DocumentProcessingVisitor = exports.WordDocument = exports.PdfDocument = void 0;
var PdfDocument = /** @class */ (function () {
    function PdfDocument() {
    }
    Object.defineProperty(PdfDocument.prototype, "accept", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (visitor) {
            visitor.visitPdfDocument(this);
        }
    });
    return PdfDocument;
}());
exports.PdfDocument = PdfDocument;
var WordDocument = /** @class */ (function () {
    function WordDocument() {
    }
    Object.defineProperty(WordDocument.prototype, "accept", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (visitor) {
            visitor.visitWordDocument(this);
        }
    });
    return WordDocument;
}());
exports.WordDocument = WordDocument;
var DocumentProcessingVisitor = /** @class */ (function () {
    function DocumentProcessingVisitor() {
    }
    Object.defineProperty(DocumentProcessingVisitor.prototype, "visitPdfDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (pdfDocument) {
            console.log("Processing PDF document");
            // PDF-specific processing logic...
        }
    });
    Object.defineProperty(DocumentProcessingVisitor.prototype, "visitWordDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (wordDocument) {
            console.log("Processing Word document");
            // Word-specific processing logic...
        }
    });
    Object.defineProperty(DocumentProcessingVisitor.prototype, "visitCompositeDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (compositeDocument) {
            console.log("Processing Composite document");
            // Composite-specific processing logic...
        }
    });
    return DocumentProcessingVisitor;
}());
exports.DocumentProcessingVisitor = DocumentProcessingVisitor;
var CompositeDocument = /** @class */ (function () {
    function CompositeDocument() {
        Object.defineProperty(this, "documents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    Object.defineProperty(CompositeDocument.prototype, "addDocument", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (document) {
            this.documents.push(document);
        }
    });
    Object.defineProperty(CompositeDocument.prototype, "accept", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (visitor) {
            for (var _i = 0, _a = this.documents; _i < _a.length; _i++) {
                var document_1 = _a[_i];
                document_1.accept(visitor);
            }
            visitor.visitCompositeDocument(this);
        }
    });
    return CompositeDocument;
}());
exports.CompositeDocument = CompositeDocument;
