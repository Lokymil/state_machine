live:
	@echo "Starting valid LIVE script"
	node src/main/live/liveCodingStarterPoint.js

live-valid:
	@echo "Starting valid LIVE script"
	node src/main/live/index.js

poo-install:
	@echo "Installing and building POO app"
	mvn clean install

poo-start: poo-install
	@echo "Starting POO app"
	java -jar ./target/state-machine-1.jar

poo: poo-install poo-start

poo-clean:
	@echo "POO: cleaning ..."
	mvn clean
	rm -r ./target
	@echo "POO: cleaned !"

ui-install:
	@echo "Installing UI app"
	npm install --prefix src/main/ui

ui-start: ui-install
	@echo "Starting UI app"
	npm start --prefix src/main/ui

ui: ui-install ui-start

ui-clean:
	@echo "UI: cleaning ..."
	rm -r ./src/main/ui/node_modules
	@echo "UI: cleaned !"

clean: poo-clean ui-clean