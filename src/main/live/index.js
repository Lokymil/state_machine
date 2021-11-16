function createMachine(stateMachineDefinition) {
  const machine = {
    value: stateMachineDefinition.initialState,
    transition(event) {
      const currentStateDefinition = stateMachineDefinition[machine.value];
      const destinationTransition = currentStateDefinition.transitions[event];

      if (!destinationTransition) {
        return machine.value;
      }

      const destinationState = destinationTransition.target;
      const destinationStateDefinition =
        stateMachineDefinition[destinationState];

      destinationTransition.action();
      currentStateDefinition.actions.onExit();
      destinationStateDefinition.actions.onEnter();

      machine.value = destinationState;

      return machine.value;
    },
  };

  return machine;
}

const machine = createMachine({
  initialState: "off",
  off: {
    actions: {
      onEnter() {
        console.log("Entering 'off' state");
      },
      onExit() {
        console.log("Exiting 'off' state");
      },
    },
    transitions: {
      switch: {
        target: "on",
        action() {
          console.log("Transition action for 'switch' in 'off' state");
        },
      },
    },
  },
  on: {
    actions: {
      onEnter() {
        console.log("Entering 'on' state");
      },
      onExit() {
        console.log("Exiting 'on' state");
      },
    },
    transitions: {
      switch: {
        target: "off",
        action() {
          console.log("Transition action for 'switch' in 'on' state");
        },
      },
    },
  },
});

// What we want to do with our state machine
let state = machine.value;
console.log(`\nCurrent state: ${state}\n`); // Current state: off

console.log("--- Trigger switch ---");
state = machine.transition("switch");
console.log(`\nCurrent state: ${state}\n`); // Current state: on

console.log("--- Trigger switch ---");
state = machine.transition("switch");
console.log(`\nCurrent state: ${state}\n`); // Current state: off
