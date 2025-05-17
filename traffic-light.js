"use strict";

// Returns the current traffic light color
function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

// Returns the next state index in the cycle
function getNextStateIndex(trafficLight) {
  return (trafficLight.stateIndex + 1) % trafficLight.possibleStates.length;
}

// Blocks execution for the given number of seconds
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // waiting
  }
}

// Main program logic
function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);
    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/*
the output of the program is:
0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red
*/
