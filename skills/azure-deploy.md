# Azure Deploy Skill

## When to Use
When deploying the application to Azure, or setting up CI/CD.

## Prerequisites
- Azure CLI installed and logged in (`az login`)
- Resource group created
- Application tests passing

## Quick Deploy — Container Apps

```bash
# 1. Set variables
RG="superpowers-demo-rg"
APP="ticket-service"
LOCATION="eastasia"

# 2. Create resource group
az group create --name $RG --location $LOCATION

# 3. Deploy (auto-detects Dockerfile)
az containerapp up \
  --name $APP \
  --resource-group $RG \
  --source . \
  --ingress external \
  --target-port 3000 \
  --env-vars "NODE_ENV=production"

# 4. Verify
az containerapp show --name $APP --resource-group $RG \
  --query "properties.configuration.ingress.fqdn" -o tsv
```

## Quick Deploy — App Service

```bash
# For simpler deployments without containers
az webapp up \
  --name $APP \
  --resource-group $RG \
  --runtime "NODE:20-lts" \
  --sku B1
```

## Post-Deploy Verification

```bash
# Health check
APP_URL=$(az containerapp show --name $APP --resource-group $RG \
  --query "properties.configuration.ingress.fqdn" -o tsv)
curl -s https://$APP_URL/health | jq .

# Smoke test
curl -s https://$APP_URL/api/tickets | jq .

# View logs
az containerapp logs show --name $APP --resource-group $RG --follow
```

## Rollback

```bash
# List revisions
az containerapp revision list --name $APP --resource-group $RG -o table

# Activate previous revision
az containerapp revision activate --name $APP --resource-group $RG \
  --revision <previous-revision-name>
```

## Cleanup

```bash
az group delete --name $RG --yes --no-wait
```
