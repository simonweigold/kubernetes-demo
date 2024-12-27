# How did I deploy the full stack app while ensuring working communication?

## Commands

To apply the Kubernetes configurations:
```
kubectl apply -f ./k8s
```

To apply changes when containers have been updated:
```
kubectl rollout restart deployment/backend-deployment \
kubectl rollout restart deployment/frontend-deployment
```
