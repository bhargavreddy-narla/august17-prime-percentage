"use strict";

document.write(`<h1>Percentage of my Marks</h1>`);

document.write(`<h4>Number of subjects: 7 </h4>`);

var SolidMechanics = parseInt(prompt("Enter SolidMechanics marks"));

var FluidMechanics = parseInt(prompt("Enter FluidMechanics marks"));

var Thermodynamics = parseInt(prompt("Enter Thermodynamics marks"));

var Aerodynamics = parseInt(prompt("Enter Aerodynamics marks"));

var Avionics = parseInt(prompt("Enter Avionics marks"));

var FlightDynamics = parseInt(prompt("Enter FlightDynamics marks"));

var CAR = parseInt(prompt("Enter CAR marks"));

function percentage() {
  var x =
    SolidMechanics +
    FluidMechanics +
    Thermodynamics +
    Aerodynamics +
    Avionics +
    FlightDynamics +
    CAR;

  var z = (x / 700) * 100;

  return z;
}

var total = percentage(
  SolidMechanics,
  FluidMechanics,
  Thermodynamics,
  Aerodynamics,
  Avionics,
  FlightDynamics,
  CAR
);

document.write("The total percentage : " + total + "</br>");

/*document.write(`<h1>Percentage of my Marks</h1>`);

document.write(`<h4>Number of subjects: 7 </h4>`);

var SolidMechanics = 80;

var FluidMechanics = 95;

var Thermodynamics = 70;

var Aerodynamics = 80;

var Avionics = 90;

var FlightDynamics = 90;

var CAR = 65;

document.write(`SolidMechanics Marks : ` + SolidMechanics + `<br>`);

document.write(`FluidMechanics Marks : ` + FluidMechanics + `<br>`);

document.write(`Thermodynamics Marks : ` + Thermodynamics + `<br>`);

document.write(`Aerodynamics Marks : ` + Aerodynamics + `<br>`);

document.write(`Avionics Marks : ` + Avionics + `<br>`);

document.write(`FlightDynamics Marks : ` + FlightDynamics + `<br>`);

document.write(`CAR Marks : ` + CAR + `<br>`);

function percentage() {
  var x =
    SolidMechanics +
    FluidMechanics +
    Thermodynamics +
    Aerodynamics +
    Avionics +
    FlightDynamics +
    CAR;

  var z = (x / 700) * 100;

  return z;
}

var total = percentage(
  SolidMechanics,
  FluidMechanics,
  Thermodynamics,
  Aerodynamics,
  Avionics,
  FlightDynamics,
  CAR
);

document.write("The total percentage : " + total + "</br>");*/
