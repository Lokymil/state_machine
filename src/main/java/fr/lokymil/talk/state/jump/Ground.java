package fr.lokymil.talk.state.jump;

import fr.lokymil.talk.player.Player;

public class Ground extends VerticalState {
    public Ground(Player player) {
        super(player);
        this.stateName = "GROUND";
    }

    @Override
    public void handleInput(String input) {
        if (input.equals("A")) {
            this.player.setState(new Fly1(player));
        }
    }

    @Override
    public String getActions() {
        return "A: Elevate 1 level\n";
    }
}
