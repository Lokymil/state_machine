package fr.zenika.pza.state;

import fr.zenika.pza.player.Player;

public class WalkLeft extends State {
    public WalkLeft(Player player) {
        super(player);
        this.stateName = "WALK_LEFT";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "1":
                this.player.setState(new Standing(player));
                break;
            case "2":
                System.out.println("ATTACK");
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "1: Stop\n2: Attack";
    }
}
