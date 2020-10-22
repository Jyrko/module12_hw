//Global varibles
let glbConsumption = 0;

//Parent Class 'ElectricianAppliance'
function ElectricianAppliance(status = false, consumption = 0) {
  this.consumption = consumption;
  this.isTurnOn = status;
}

ElectricianAppliance.prototype.turnOn = function() {
	glbConsumption += this.consumption;
  this.isTurnOn = true;
}

ElectricianAppliance.prototype.turnOff = function() {
	glbConsumption -= this.consumption;
  this.isTurnOn = false;
}

//Subclass 'Computer'
function Computer(status = false, consumption = 0, type = 'desktop', opSys = 'Windows 10') {
  this.category = 'MicroComputer';
  this.opSys = opSys;
  this.isTurnOn = status;
  this.consumption = consumption;
  this.computerType = type;
}

Computer.prototype = new ElectricianAppliance();
Computer.prototype.getInfo = function() {
  return `You have a(n) ${this.computerType} running ${this.opSys}, turn on - ${this.isTurnOn}`
}

//Subclass 'Lamp'
function Lamp(status = false, consumption = 0, color = 'warm', type = 'LED') {
  this.isTurnOn = status;
  this.consumption = consumption;
  this.lightColor = color;
  this.lampType = type;
}

Lamp.prototype = new ElectricianAppliance();

Lamp.prototype.getInfo = function() {
  return `You have a(n) ${this.lightColor} ${this.lampType} lamp, turn on - ${this.isTurnOn}`
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
