
build: docker-build up
	@echo Running anchor build inside the development container
	@docker-compose run build anchor build

test: docker-build up
	@echo Running anchor test inside the development container
	@docker-compose run build anchor test

ssh:
	@docker-compose run build bash

docker-build:
	@echo Build docker development environment
	@docker-compose build

up: docker-build
	@echo Starting docker development environment
	@docker-compose up -d

down:
	@echo Stopping docker development environment
	@docker-compose down

ps:
	@echo Showing docker services of this project
	@docker-compose ps
