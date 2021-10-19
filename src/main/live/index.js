function createMachine(config) {
  const machine = {
    value: config.initialState,
    transition(currentState, event) {
      const currentStateDefinition = config[currentState];
      const destinationTransition = currentStateDefinition.transitions[event];

      if (!destinationTransition) {
        return machine.value;
      }

      const destinationState = destinationTransition.target;
      const destinationStateDefinition = config[destinationState];

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
          console.log("transition action for 'switch' in 'off' state");
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
          console.log("transition action for 'switch' in 'on' state");
        },
      },
    },
  },
});

// What we want to do with our state machine
let state = machine.value;
console.log(`current state: ${state}`); // current state: off

state = machine.transition(state, "switch");
console.log(`current state: ${state}`); // current state: on

state = machine.transition(state, "switch");
console.log(`current state: ${state}`); // current state: off
