interface ServiceA {
    action(): void;
}

interface ServiceB {
    action(): void;
}

class SystemFacade {
    private static instance: SystemFacade;
    private constructor(
        private serviceA: ServiceA,
        private serviceB: ServiceB
    ) {}

    static getInstance(serviceA: ServiceA, serviceB: ServiceB): SystemFacade {
        if (!SystemFacade.instance) {
            SystemFacade.instance = new SystemFacade(serviceA, serviceB);
        }
        return SystemFacade.instance;
    }

    performComplexOperation(): void {
        this.serviceA.action();
        this.serviceB.action();
        // Additional coordinated actions...
    }
}
class ConcreteServiceA implements ServiceA {
    action(): void {
        console.log('ConcreteServiceA action');
    }
}
class ConcreteServiceB implements ServiceA {
    action(): void {
        console.log('ConcreteServiceB action');
    }
}
// Usage
const facade = SystemFacade.getInstance(new ConcreteServiceA(), new ConcreteServiceB());
facade.performComplexOperation();