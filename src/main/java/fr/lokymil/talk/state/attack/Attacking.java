package fr.lokymil.talk.state.attack;

import fr.lokymil.talk.player.Player;

public class Attacking extends AttackState {
    public Attacking(Player player) {
        super(player);
        this.stateName = "ATTACKING";
    }

    @Override
    public void handleInput(String input) {
        if(input.equals("Y")) {
            this.player.setState(new NotAttacking(player));
        }
    }

    @Override
    public String getActions() {
        return "Y: Stop attack\n";
    }
}
