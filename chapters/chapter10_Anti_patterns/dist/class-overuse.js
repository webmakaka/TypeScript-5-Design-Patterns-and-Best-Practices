"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CSV {
    constructor(csvFilePath) {
        Object.defineProperty(this, "csvFilePath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: csvFilePath
        });
    }
    read() {
        // Logic to read CSV
        return ["data1", "data2"];
    }
    write(input) {
        // Logic to write to CSV
    }
}
class ExcelToCSV extends CSV {
    constructor(csvFilePath, excelFilePath) {
        super(csvFilePath);
        Object.defineProperty(this, "excelFilePath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: excelFilePath
        });
    }
    read() {
        // Logic to read from Excel file
        return ["excelData1", "excelData2"];
    }
}
class ExcelToPDF extends ExcelToCSV {
    constructor(csvFilePath, excelFilePath, pdfFilePath) {
        super(csvFilePath, excelFilePath);
        Object.defineProperty(this, "pdfFilePath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: pdfFilePath
        });
    }
    write(input) {
        // Logic to write to PDF
    }
}
class CSVReader {
    constructor(csvFilePath) {
        Object.defineProperty(this, "csvFilePath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: csvFilePath
        });
    }
    read() {
        // Logic to read CSV
        return ["data1", "data2"];
    }
}
class CSVWriter {
    write(input) {
        // Logic to write to CSV
    }
}
class ExcelReader {
    constructor(excelFilePath) {
        Object.defineProperty(this, "excelFilePath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: excelFilePath
        });
    }
    read() {
        // Logic to read from Excel file
        return ["excelData1", "excelData2"];
    }
}
class PDFWriter {
    write(input) {
        // Logic to write to PDF
    }
}
class ReaderToWriters {
    constructor(reader, writers) {
        Object.defineProperty(this, "reader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: reader
        });
        Object.defineProperty(this, "writers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: writers
        });
    }
    perform() {
        const lines = this.reader.read();
        this.writers.forEach((writer) => writer.write(lines));
    }
}
const applicationConfig = {
    paths: {
        apiBase: "/v1",
        login: "/login",
    },
};
