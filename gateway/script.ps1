kubectl config set-context --current  --namespace=default
kubectl apply -f config_map.yaml
kubectl apply -f web_deployment.yaml
Start-Sleep -Seconds 5
kubectl get all