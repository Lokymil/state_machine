package fr.lokymil.talk.state;

import fr.lokymil.talk.player.Player;

public abstract class State {
    protected Player player;
    protected String stateName = "ABSTRACT";

    public State(Player player) {
        this.player = player;
    }

    public abstract void handleInput(String input);

    public String toString() {
        return this.stateName;
    }

    public abstract String getActions();
}