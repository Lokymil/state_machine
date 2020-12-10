package fr.zenika.pza;

import fr.zenika.pza.player.Player;

import java.util.Scanner;

public class App {
    public static void main(String[] args ) {
        Player player = new Player();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Démarrage du jeu :");

        String input;
        do {
            System.out.println("----------------------------------------------------------");
            System.out.println(player.getActions());
            System.out.println("0: Quit");
            input = scanner.next();

            player.handleInput(input);
            if (input.contains("0")) {
                break;
            }
        } while(true);
    }
}

// TODO Use design pattern State
