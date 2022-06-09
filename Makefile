run:
	docker stop test-apm || exit 0
	docker rm -f test-apm || exit 0
	docker build -f .dockerfile -t test-apm-img .
	docker run --name test-apm \
	-p 80:80 \
	-d test-apm-img
	docker logs -f test-apm
