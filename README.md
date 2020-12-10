# Talk sur les machines à état

Talk de 30 min effectué pour présenter le principe des machines à état.

Le but n'est pas de faire du code de qualité ni d'utiliser les design patterns mais de saisir le principe.

Pour plus d'informations, vous pouvez consulter cette [documentation](https://en.wikipedia.org/wiki/State_pattern).

## Visuel (javascript)

Cette partie à pour vocation de présenter les différences d'implémentation entre une machine à état
et un programme uniquement fait de `if`.

Les deux parties ont le même comportement seul l'implémentation est différente. La réprésentation
visuelle diffère également afin de mettre en évidence l'écart d'implémentation.

Lancer le projet :

```
npm install --prefix src/main/js
npm start --prefix src/main/js
```

## Livecode (java)

Cette partie à pour vocation d'être utilisé en livecode lors de la présentation. Il manque
donc certaines parties par rapport au programme visuel.

Outre la partie "manquante", le comportement et l'implémentation sont similaires avec la partie
machine à état du programme visuel. L'objectif du live code est d'implémenté la partie manquante
afin que les deux programmes aient le même comportement.

:warning: La différence majeure entre ce livecode et la partie visuelle se trouve sur l'utilisation
ou non de l'héritage. Cependant, le principe est le même et l'implémentation reste très proche.

Lancer le projet :

```
mvn clean install
java -jar ./target/state-machine-{version}.jar
```