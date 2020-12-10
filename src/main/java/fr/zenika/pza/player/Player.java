package fr.zenika.pza.player;

import fr.zenika.pza.state.attack.AttackState;
import fr.zenika.pza.state.attack.NotAttacking;
import fr.zenika.pza.state.horizontal.HorizontalState;
import fr.zenika.pza.state.horizontal.Standing;

public class Player {
    private HorizontalState hState;
    private AttackState aState;

    public Player() {
        this.hState = new Standing(this);
        this.aState = new NotAttacking(this);
    }

    public void setState(HorizontalState hState) {
        this.hState = hState;
    }

    public void setState(AttackState aState) {
        this.aState = aState;
    }

    public void handleInput(String input) {
        hState.handleInput(input);
        aState.handleInput(input);
    }

    public String getActions() {
        return "While " + hState + ", "+ aState +", you can:\n" + aState.getActions() + hState.getActions() ;
    }
}