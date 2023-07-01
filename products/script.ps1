kubectl create namespace product
kubectl config set-context --current  --namespace=product
kubectl apply -f secret.yaml
kubectl apply -f config_map.yaml
kubectl apply -f db_deployment.yaml
Start-Sleep -Seconds 5
kubectl apply -f web_deployment.yaml
Start-Sleep -Seconds 5
kubectl get all