package fr.lokymil.talk.state.jump;

import fr.lokymil.talk.player.Player;

public class Fly1 extends VerticalState {
    public Fly1(Player player) {
        super(player);
        this.stateName = "FLY_1";
    }

    @Override
    public void handleInput(String input) {
        if (input.equals("A")) {
            this.player.setState(new Fly2(player));
        }
    }

    @Override
    public String getActions() {
        return "A: Elevate 1 level\n";
    }
}
