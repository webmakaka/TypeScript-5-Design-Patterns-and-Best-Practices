export interface Vehicle {
  startEngine(): void
  stopEngine(): void
}
export class Car implements Vehicle {
  startEngine(): void {
    console.log("Starting car engine...")
  }
  stopEngine(): void {
    console.log("Stopping car engine...")
  }
}

export class Truck implements Vehicle {
  startEngine(): void {
    console.log("Starting truck engine...")
  }
  stopEngine(): void {
    console.log("Stopping truck engine...")
  }
}

export interface VehicleFactory {
  createVehicle(): Vehicle
}

export class CarFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Car()
  }
}

export class TruckFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Truck()
  }
}

const carFactory = new CarFactory()
const truckFactory = new TruckFactory()

const factories: VehicleFactory[] = [carFactory, truckFactory, carFactory]

factories.forEach((factory: VehicleFactory) => {
  const vehicle = factory.createVehicle()
  vehicle.startEngine()
  vehicle.stopEngine()
})

// Output:
// Starting car engine...
// Starting truck engine...
// Starting car engine...

enum VehicleType {
  CAR,
  TRUCK,
}

class VehicleCreator {
  create(vehicleType: VehicleType): Vehicle {
    switch (vehicleType) {
      case VehicleType.CAR:
        return new Car()
      case VehicleType.TRUCK:
        return new Truck()
      default:
        throw new Error("Invalid vehicle type")
    }
  }
}
