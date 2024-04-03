install: #requered npm modules and local package install
	npm ci
	npm link
brain-games: #start game with "make brain-games"
	node bin/brain-games.js
publish: #просмотр данных о публикации без её фактического выполнения?!
	npm publish --dry-run
make lint:
	npx eslint .