package fr.zenika.pza.state;

import fr.zenika.pza.player.Player;

public class Standing extends State {
    public Standing(Player player) {
        super(player);
        this.stateName = "STANDING";
    }

    @Override
    public void handleInput(String input) {
        switch(input) {
            case "1":
                System.out.println("LEFT");
                break;
            case "2":
                System.out.println("RIGHT");
                break;
            case "3":
                System.out.println("ATTACK");
                break;
            default:
        }
    }

    @Override
    public String getActions() {
        return "1: Go left\n2: Go right\n3: Attack";
    }
}