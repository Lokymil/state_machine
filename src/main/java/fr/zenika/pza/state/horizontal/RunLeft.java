package fr.zenika.pza.state.horizontal;

import fr.zenika.pza.player.Player;

public class RunLeft extends HorizontalState{
    public RunLeft(Player player) {
        super(player);
        this.stateName = "RUN_LEFT";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "X":
                break;
            case "B":
                this.player.setState(new WalkLeft(player));
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "X: Run left\nB: Walk left\n";
    }
}
