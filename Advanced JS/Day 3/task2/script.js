function Vehicle(speed, color) {
  if (typeof speed !== "number") throw "speed datatype must be number";
  if (typeof color !== "string") throw "color datatype must be string";
  var spd = speed;
  var clr = color;

  Object.defineProperties(this, {
    setSpeed: {
      value: function (val) {
        spd = val;
      },
    },
    setColor: {
      value: function (val) {
        clr = val;
      },
    },
    getSpeed: {
      value: function () {
        return spd;
      },
    },
    getColor: {
      value: function () {
        return clr;
      },
    },
    turnLeft: {
      value: function () {
        console.log(`turned left`);
      },
    },
    turnRight: {
      value: function () {
        console.log(`turned right`);
      },
    },
    start: {
      value: function () {
        console.log(`started`);
        return true;
      },
    },
    stop: {
      value: function () {
        console.log(`stopped`);
        return true;
      },
    },
    goBackward: {
      value: function () {
        console.log(`backward`);
      },
    },
    goForward: {
      value: function () {
        console.log(`forward`);
      },
    },
    valueOf: {
      value: function () {
        return spd;
      },
    },
    toString: {
      value: function () {
        return `speed is: ${spd}, color is: ${clr}`;
      },
    },
  });
}
function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
  Object.defineProperty(this, "ringBell", {
    value: function () {
      console.log(`bell rang`);
    },
  });
}
function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  if (typeof sizeOfEngine !== "number")
    throw "sizeOfEngine datatype must be number";
  if (typeof licensePlate !== "string")
    throw "licensePlate datatype must be string";
  let size = sizeOfEngine;
  let plate = licensePlate;
  Vehicle.call(this, speed, color);
  Object.defineProperties(this, {
    getSizeOfEngine: {
      value: function () {
        return size;
      },
    },
    getLicensePlate: {
      value: function () {
        return plate;
      },
    },
  });
}
function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  weight
) {
  if (typeof loadCapacity !== "number")
    throw `loadCapacity datatype must be number`;
  if (typeof numWheels !== "number") throw `numWheels datatype must be number`;
  if (typeof weight !== "number") throw `weight datatype must be number`;
  let loadcpc = loadCapacity;
  let wheels = numWheels;
  let wgt = weight;

  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  Object.defineProperties(this, {
    lowerLoad: {
      value: function () {
        console.log(`load is lowered`);
      },
    },
    raiseLoad: {
      value: function () {
        console.log(`load is raised`);
      },
    },
  });
}
function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  weight
) {
  if (typeof numOfDoors !== "number")
    throw `numOfDoors datatype must be number`;
  if (typeof numWheels !== "number") throw `numWheels datatype must be number`;
  if (typeof weight !== "number") throw `weight datatype must be number`;
  let doors = numOfDoors;
  let wheels = numWheels;
  let wgt = weight;
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  Object.defineProperties(this, {
    switchOnAirCon: {
      value: function () {
        console.log(`Air Conditioning is turned on`);
      },
    },
    getNumOfDoors: {
      value: function () {
        console.log(`no. of doors is: ${doors}`);
      },
    },
  });
}
