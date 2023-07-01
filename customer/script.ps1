kubectl create namespace customer
kubectl config set-context --current  --namespace=customer
kubectl apply -f secret.yaml
kubectl apply -f config_map.yaml
kubectl apply -f db_deployment.yaml
Start-Sleep -Seconds 10
kubectl apply -f web_deployment.yaml
Start-Sleep -Seconds 10
kubectl get all