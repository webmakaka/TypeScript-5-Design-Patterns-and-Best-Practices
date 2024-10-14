interface Reader {
  read(): string[]
}

interface Writer {
  write(input: string[]): void
}

class CSV implements Reader, Writer {
  constructor(private csvFilePath: string) {}

  read(): string[] {
    // Logic to read CSV
    return ["data1", "data2"]
  }

  write(input: string[]): void {
    // Logic to write to CSV
  }
}

class ExcelToCSV extends CSV {
  constructor(
    csvFilePath: string,
    private excelFilePath: string,
  ) {
    super(csvFilePath)
  }

  read(): string[] {
    // Logic to read from Excel file
    return ["excelData1", "excelData2"]
  }
}

class ExcelToPDF extends ExcelToCSV {
  constructor(
    csvFilePath: string,
    excelFilePath: string,
    private pdfFilePath: string,
  ) {
    super(csvFilePath, excelFilePath)
  }

  write(input: string[]): void {
    // Logic to write to PDF
  }
}

class CSVReader implements Reader {
  constructor(private csvFilePath: string) {}

  read(): string[] {
    // Logic to read CSV
    return ["data1", "data2"]
  }
}

class CSVWriter implements Writer {
  write(input: string[]): void {
    // Logic to write to CSV
  }
}

class ExcelReader implements Reader {
  constructor(private excelFilePath: string) {}

  read(): string[] {
    // Logic to read from Excel file
    return ["excelData1", "excelData2"]
  }
}

class PDFWriter implements Writer {
  write(input: string[]): void {
    // Logic to write to PDF
  }
}

class ReaderToWriters {
  constructor(
    private reader: Reader,
    private writers: Writer[],
  ) {}

  perform() {
    const lines = this.reader.read()
    this.writers.forEach((writer) => writer.write(lines))
  }
}

interface Configuration {
  paths: {
    apiBase: string
    login: string
  }
}

const applicationConfig: Configuration = {
  paths: {
    apiBase: "/v1",
    login: "/login",
  },
}
