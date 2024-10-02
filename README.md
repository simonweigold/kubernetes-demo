# kubernetes-demo
demo full-stack-app to test kubernetes

# commands to run kubernetes
docker build -t backend:latest ./backend
docker build -t frontend:latest ./frontend
kubectl apply -f ./k8s/config.yaml
minikube service backend-service
minikube service frontend-service


kubectl delete deployment frontend-deployment backend-deployment
kubectl delete service frontend-service backend-service
