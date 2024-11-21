export class Producer {
    constructor(private storage: Storage) {}

    public async updateData(newData: any): Promise<void> {
        await this.storage.save(newData);
        this.notifyConsumers();
    }

    private notifyConsumers(): void {
        // Notify consumers with the endpoint to pull data
        console.log("Data updated. Consumers can pull from /data-endpoint");
    }
}

export class Consumer {
    constructor(private collector: Collector) {}

    public async pullData(): Promise<void> {
        const data = await this.collector.pullData();
        console.log("Data received:", data);
    }
}

export class Storage {
    private data: any[] = [];

    public async save(newData: any): Promise<void> {
        // Simulate asynchronous saving of data
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data.push(newData);
                resolve();
            }, 100); // Simulate a delay
        });
    }

    public async getData(): Promise<any[]> {
        // Simulate asynchronous retrieval of data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 100); // Simulate a delay
        });
    }
}

export class Collector {
    constructor(private storage: Storage) {}

    public async pullData(): Promise<any[]> {
        return await this.storage.getData();
    }
}

// Example usage
(async () => {
    const storage = new Storage();
    const producer = new Producer(storage);
    const collector = new Collector(storage);
    const consumer = new Consumer(collector);

    // push data
    await producer.updateData({ id: 1, value: "New Data" });

    // pull data
    await consumer.pullData();
})();
