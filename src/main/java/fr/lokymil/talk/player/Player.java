package fr.lokymil.talk.player;

import fr.lokymil.talk.state.attack.AttackState;
import fr.lokymil.talk.state.attack.NotAttacking;
import fr.lokymil.talk.state.horizontal.HorizontalState;
import fr.lokymil.talk.state.horizontal.Standing;
import fr.lokymil.talk.state.jump.Ground;
import fr.lokymil.talk.state.jump.VerticalState;

public class Player {
    private HorizontalState hState;
    private AttackState aState;
    private VerticalState vState;

    public Player() {
        this.hState = new Standing(this);
        this.aState = new NotAttacking(this);
        this.vState = new Ground(this);
    }

    public void setState(HorizontalState hState) {
        this.hState = hState;
    }

    public void setState(AttackState aState) {
        this.aState = aState;
    }

    public void setState(VerticalState vState) {
        this.vState = vState;
    }

    public void handleInput(String input) {
        hState.handleInput(input);
        aState.handleInput(input);
        vState.handleInput(input);
    }

    public String getActions() {
        return "While " + hState + ", " + aState + ", " + vState + ", you can:\n" + aState.getActions() + hState.getActions() + vState.getActions() ;
    }
}