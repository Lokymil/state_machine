package fr.lokymil.talk.state.horizontal;

import fr.lokymil.talk.player.Player;

public class RunRight extends HorizontalState {
    public RunRight(Player player) {
        super(player);
        this.stateName = "RUN_RIGHT";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "X":
                this.player.setState(new WalkRight(player));
                break;
            case "B":
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "X: Walk right\nB: Run right\n";
    }
}
