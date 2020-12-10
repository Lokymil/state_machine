package fr.zenika.pza.state.attack;

import fr.zenika.pza.player.Player;

public class NotAttacking extends AttackState{
    public NotAttacking(Player player) {
        super(player);
        this.stateName = "NOT_ATTACKING";
    }

    @Override
    public void handleInput(String input) {
        if(input.equals("Y")) {
            this.player.setState(new Attacking(player));
        }
    }

    @Override
    public String getActions() {
        return "Y: Attack\n";
    }
}
