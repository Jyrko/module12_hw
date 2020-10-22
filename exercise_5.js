let glbConsumption = 0;

class ElectricianAppliance {
  constructor(status = false, consumption = 0) {
    this.consumption = consumption;
    this.isTurnOn = status;
  }

  turnOn() {
    glbConsumption += this.consumption;
    this.isTurnOn = true;
  }
  turnOff() {
    glbConsumption -= this.consumption;
    this.isTurnOn = false;
  }
}


class Computer extends ElectricianAppliance {
  constructor(status = false, consumption = 0, type = 'desktop', opSys = 'Windows 10') {
    super(status, consumption);
    this.type = type;
    this.opSys = opSys;
  }

  getInfo() {
    return `You have a(n) ${this.computerType} running ${this.opSys}, turn on - ${this.isTurnOn}`
  }
}

class Lamp extends ElectricianAppliance {
  constructor(status = false, consumption = 0, color = 'warm', type = 'LED') {
    super(status, consumption);
    this.lightColor = color;
    this.lampType = type;
  }

  getInfo() {
    return `You have a(n) ${this.lightColor} ${this.lampType} lamp, turn on - ${this.isTurnOn}`
  }
}

//End of the definition of the class and the subclasses
//Start of the test code
const lamp = new Lamp(false, 40);
const computer = new Computer(false, 300, undefined, "Linux");

//Consumption test start
console.log(glbConsumption);

lamp.turnOn();
computer.turnOn();

console.log(glbConsumption);
//Consumption test end

//Additional functionality
console.log(computer.getInfo());
console.log(lamp.getInfo());
