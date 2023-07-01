$commit= $(git rev-parse --verify HEAD)
docker image build  . \
  -t “Customer:latest” \
  -t “Customer:${COMMIT}"