up-all:
	docker-compose -f docker-compose.app.yml -f docker-compose.queue.yml up --build

up-queue:
	docker-compose -f docker-compose.queue.yml up --build

up-app:
	docker-compose -f docker-compose.app.yml up --build
