package fr.lokymil.talk.state.horizontal;

import fr.lokymil.talk.player.Player;
import fr.lokymil.talk.state.State;

public abstract class HorizontalState extends State {
    public HorizontalState(Player player) {
        super(player);
    }
}
