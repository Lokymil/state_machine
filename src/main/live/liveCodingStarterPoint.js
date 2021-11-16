/*
The event is checked against the current state's transitions.
If a transition matches the event, that transition “happens”.
By virtue of a transition “happening”, states are exited, and entered and the relevant actions are performed
The machine immediately is in the new state, ready to process the next event.
*/

/*
One state is defined as the initial state. When a machine starts to execute, it automatically enters this state.
Each state can define actions that occur when a machine enters or exits that state. Actions will typically have side effects.
Each state can define events that trigger a transition.
A transition defines how a machine would react to the event, by exiting one state and entering another state.
A transition can define actions that occur when the transition happens. Actions will typically have side effects.
*/

// What we want to do with our state machine
let state = machine.value;
console.log(`\nCurrent state: ${state}\n`); // Current state: off

console.log("--- Trigger switch ---");
state = machine.transition("switch");
console.log(`\nCurrent state: ${state}\n`); // Current state: on

console.log("--- Trigger switch ---");
state = machine.transition("switch");
console.log(`\nCurrent state: ${state}\n`); // Current state: off
