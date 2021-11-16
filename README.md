# Talk sur les machines à état

Talk pour présenter le principe des machines à état.

Le but n'est pas de faire du code de qualité ni d'utiliser les design patterns mais de saisir le principe.

Pour plus d'informations, vous pouvez consulter cette [documentation](https://en.wikipedia.org/wiki/State_pattern).

Ce repo est constitué de 3 projets :

- LIVE : résultat de l'exécutable JS fait en live coding
- UI : interface graphique en JS
- POO : CLI en Java

## Installation

### Général

Les scripts pour installer les dépendances, build les applications et lancer les applications
utilise tous `Make`. Il est donc nécéssaire d'installer `Make`.

### Visuel

Pour exécuter l'application visuel, il est nécessaire d'installer :

- [Node](https://nodejs.org/en/download/) >= 14.

### POO

Pour exécuter l'application en Programmation Orientée Objet, il est nécessaire d'installer :

- [Java 8](https://adoptopenjdk.net/?variant=openjdk8&jvmVariant=hotspot)
- [Maven 3](https://maven.apache.org/download.cgi)

## LIVE

### Technos

Le code se trouve dans le dossier `src/main/live`.

Etant un exécutable Node, **il faut que Node 14 (ou plus) soit installé.**

### Contenu

Ce programme a pour vocation de proposer une implémentation basique mais complète d'une machine à 2 états et de la fonction génératrice.
Il représente le code final qui devrait avoir été atteint lors du live coding.

Ici, la machine à état est créée à partir d'une configuration fixe pour généré un objet capable de réagir aux événements et de ne transitionner d'état quand lorsque l'événement reçu est reconnu.

Y est également présent le fichier "starter" contenant le point de départ du live code.

Cette partie est largement inspirée de la [vidéo](https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript) faite par Kent C. Dodds.

### Lancer l'application

Exécuter la commande :

```sh
make live
```

## UI

### Technos

Le code se trouve dans le dossier `src/main/ui`.

Etant une application React, **il faut que Node 14 (ou plus) soit installé.**

### Contenu

Ce programme a pour vocation de présenter de manière graphique le comportement d'une machine à état basique tel qu'on pourrait le retrouver dans un jeu vidéo
pour gérer les inputs utilisateur au travers d'une manette.

Ici, le code représente un version "simplifiée" de la machine à état. Les transitions n'ont pas de `onEnter`, de `onExit` ou d'action spécifique. Aussi, on se base sur des `Object` (au sens JS du terme) que l'on crée à la volée pour passer d'un état à un autre plutot de change de valeur.

L'implémentation du système est ici fait de deux manières différentes :

- Sous la forme d'un enchainement de `if`, dans le dossier `src/main/ui/src/ifs`
- Sous la forme d'une machine à état, dans le dossier `src/main/ui/src/states`

Les deux parties ont le même comportement seul l'implémentation est différente. La réprésentation
visuelle diffère également afin de mettre en évidence l'impact de l'écart d'implémentation.
L'objectif de ces deux "versions" est de mettre en évidence la modularité et la légèreté qu'apporte la machine à état.

### Lancer l'application

Exécuter la commande :

```sh
# Première fois
make ui

#

# Fois suivantes (pour aller plus vite)
make ui-start
```

## POO

### Technos

Le code se trouve dans le dossier `src/main/java`.

Etant une application Java, **il faut que Java 8 et Maven 3 soit installé.**

### Contenu

Ce programme a pour vocation de présenter sous la forme d'une CLI le comportement d'une machine à état basique tel qu'on pourrait le retrouver dans un jeu vidéo
pour gérer les inputs utilisateur au travers d'une manette.

Dans ce programme, le code représente un version "simplifiée" de la machine à état. Les transitions n'ont pas de `onEnter`, de `onExit` ou d'action spécifique. Aussi, on se base sur des `Class` que l'on instantie à la volée pour passer d'un état à un autre plutot de change de valeur.

Ici, la même machine est développée en Programmation Orientée Objet pour rendre le code accessible au plus grand nombre.

### Lancer l'application

Exécuter la commande :

```sh
make poo
```

## Scripts

### `make live`

Lance l'exécutable LIVE.

### `make poo-install`

Installe et build l'application POO.

### `make poo-start`

Démarre l'application POO. `make poo-install` doit être fait avant pour le premier lancement ou pour prendre en compte les dernières modifications.

### `make poo`

Installe et build l'application POO puis la démarre.

### `make poo-clean`

Supprime l'ensemble des fichiers générés par l'application POO.

### `make ui-install`

Installe les dépendances pour l'application UI.

### `make ui-start`

Démarre l'application UI.
`make ui-install` doit être fait avant pour le premier lancement.

### `make ui`

Installe les dépendances pour l'application UI et la démarre.

### `make ui-clean`

Supprime les fichiers par l'application UI.

### `make clean`

Supprime l'ensemble des fichiers générés.

## Sources

- [Wikipedia, state pattern](https://en.wikipedia.org/wiki/State_pattern)
- [Kent C. Dodds](https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript)
