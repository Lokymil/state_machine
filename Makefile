poo-install:
	echo "Installing and building POO app"
	mvn clean install

poo-start: poo-build
	echo "Starting POO app"
	java -jar ./target/state-machine-1.jar

poo: poo-build poo-start

poo-clean:
	echo "POO: cleaning ..."
	mvn clean
	rm -r ./target
	echo "POO: cleaned !"

ui-install:
	echo "Installing UI app"
	npm install --prefix src/main/ui

ui-start: ui-install
	echo "Starting UI app"
	npm start --prefix src/main/ui

ui: ui-install ui-start

ui-clean:
	echo "UI: cleaning ..."
	rm -r ./src/main/ui/node_modules
	echo "UI: cleaned !"

clean: poo-clean ui-clean