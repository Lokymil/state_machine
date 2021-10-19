package fr.lokymil.talk.state.jump;

import fr.lokymil.talk.player.Player;

public class Fly2 extends VerticalState {
    public Fly2(Player player) {
        super(player);
        this.stateName = "FLY_2";
    }

    @Override
    public void handleInput(String input) {
        if (input.equals("A")) {
            this.player.setState(new Ground(this.player));
        }
    }

    @Override
    public String getActions() {
        return "A: Go to ground\n";
    }
}
