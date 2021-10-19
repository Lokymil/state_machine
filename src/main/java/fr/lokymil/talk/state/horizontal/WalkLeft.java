package fr.lokymil.talk.state.horizontal;

import fr.lokymil.talk.player.Player;

public class WalkLeft extends HorizontalState {
    public WalkLeft(Player player) {
        super(player);
        this.stateName = "WALK_LEFT";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "X":
                this.player.setState(new RunLeft(player));
                break;
            case "B":
                this.player.setState(new Standing(player));
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "X: Run left\nB: Stop\n";
    }
}
