package fr.zenika.pza.player;

import fr.zenika.pza.state.Standing;
import fr.zenika.pza.state.State;

public class Player {
    private State state;

    public Player() {
        this.state = new Standing(this);
    }

    public void setState(State state) {
        this.state = state;
    }

    public void handleInput(String input) {
        state.handleInput(input);
    }

    public String getActions() {
        return "While " + state + ", you can:\n" + state.getActions();
    }
}