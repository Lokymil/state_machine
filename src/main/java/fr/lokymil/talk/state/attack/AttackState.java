package fr.lokymil.talk.state.attack;

import fr.lokymil.talk.player.Player;
import fr.lokymil.talk.state.State;

public abstract class AttackState extends State {
    public AttackState(Player player) {
        super(player);
    }
}
