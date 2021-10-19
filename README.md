# Talk sur les machines à état

Talk de 30 min effectué pour présenter le principe des machines à état.

Le but n'est pas de faire du code de qualité ni d'utiliser les design patterns mais de saisir le principe.

Pour plus d'informations, vous pouvez consulter cette [documentation](https://en.wikipedia.org/wiki/State_pattern).

---

## Visuel

### Technos

Le code se trouve dans le dossier `src/main/ui`.

Etant une application React, **il faut que Node 14 (ou plus) soit installé.**

### Contenu

Cette partie a pour vocation de présenter de manière graphique le comportement d'une machine à état basique tel qu'on pourrait le retrouver dans un jeu vidéo
pour gérer les inputs utilisateur au travers d'une manette.

Ici, le code représente un version "simplifiée" de la machine à état. Les transitions n'ont pas de `onEnter`, de `onExit` ou d'action spécifique. Aussi, on se base sur des `Object` (au sens JS du terme) que l'on crée à la volée pour passer d'un état à un autre plutot de change de valeur.

L'implémentation du système est ici fait de deux manières différentes :

- Sous la forme d'un enchainement de `if`, dans le dossier `src/main/ui/src/ifs`
- Sous la forme d'une machine à état, dans le dossier `src/main/ui/src/states`

Les deux parties ont le même comportement seul l'implémentation est différente. La réprésentation
visuelle diffère également afin de mettre en évidence l'impact de l'écart d'implémentation.
L'objectif de ces deux "versions" est de mettre en évidence la modularité et la légèreté qu'apporte la machine à état.

### Lancer l'application

Exécuter les commandes :

```
npm install --prefix src/main/ui
npm start --prefix src/main/ui
```

---

## POO

### Technos

Le code se trouve dans le dossier `src/main/java`.

Etant une application Java, **il faut que Java 8 et Maven 3 soit installé.**

### Contenu

Cette partie a pour vocation de présenter sous la forme d'une CLI le comportement d'une machine à état basique tel qu'on pourrait le retrouver dans un jeu vidéo
pour gérer les inputs utilisateur au travers d'une manette.

Dans cette partie, le code représente un version "simplifiée" de la machine à état. Les transitions n'ont pas de `onEnter`, de `onExit` ou d'action spécifique. Aussi, on se base sur des `Class` que l'on instantie à la volée pour passer d'un état à un autre plutot de change de valeur.

Cette partie à pour vocation de présenter la même machine en utilisant de la Programmation Orientée Objet.
L'objectif est de rendre le code accessible au plus grand nombre.

### Lancer l'application

Exécuter les commandes :

```
mvn clean install
java -jar ./target/state-machine-{version}.jar
```
