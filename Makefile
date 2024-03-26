install: #requered npm modules install
	npm ci
brain-games: #start game with "make brain-games"
	node bin/brain-games.js
publish: #просмотр данных о публикации без её фактического выполнения?!
	npm publish --dry-run