package fr.zenika.pza.state.horizontal;

import fr.zenika.pza.player.Player;

public class WalkRight extends HorizontalState {
    public WalkRight(Player player) {
        super(player);
        this.stateName = "WALK_RIGHT";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "X":
                this.player.setState(new Standing(player));
                break;
            case "B":
                this.player.setState(new RunRight(player));
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "X: Stop\nB: Run right\n";
    }
}
