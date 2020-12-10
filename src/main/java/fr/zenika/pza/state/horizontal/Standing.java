package fr.zenika.pza.state.horizontal;

import fr.zenika.pza.player.Player;

public class Standing extends HorizontalState {
    public Standing(Player player) {
        super(player);
        this.stateName = "STANDING";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "X":
                this.player.setState(new WalkLeft(player));
                break;
            case "B":
                this.player.setState(new WalkRight(player));
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "X: Go left\nB: Go right\n";
    }
}