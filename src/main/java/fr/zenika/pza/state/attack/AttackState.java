package fr.zenika.pza.state.attack;

import fr.zenika.pza.player.Player;
import fr.zenika.pza.state.State;

public abstract class AttackState extends State {
    public AttackState(Player player) {
        super(player);
    }
}
