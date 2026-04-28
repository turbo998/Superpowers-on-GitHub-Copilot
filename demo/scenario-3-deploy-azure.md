# Scenario 3: Deploy to Azure (5 min)

> Security review → Deploy → Verify

## Prerequisites
- Azure CLI logged in (`az login`)
- Sample app tests passing

## Step 1: Security Review (2 min)

Prompt:
```
@security Review the sample-app before we deploy to production.
```

**Expected behavior:** Security agent checks:
- Input validation on all endpoints
- No hardcoded secrets
- Error handling (no stack traces leaked)
- Dependency vulnerabilities (`npm audit`)

Produces a security assessment with risk level and findings.

## Step 2: Deploy (2 min)

Prompt:
```
@deployer Deploy the sample-app to Azure Container Apps in East Asia region.
```

**Expected behavior:** Deployer agent:
1. Checks prerequisites (Dockerfile exists, tests pass)
2. Creates resource group
3. Runs `az containerapp up`
4. Verifies health check
5. Produces deployment report with URL

## Step 3: Smoke Test (1 min)

Prompt:
```
Run a smoke test against the deployed app.
```

**Expected behavior:**
- Hits `/health` → 200
- Creates a ticket → 201
- Lists tickets → 200
- Reports all green

## What to Show the Audience

1. **Security gate before deploy** — not an afterthought
2. **One-command deploy** — but with verification
3. **End-to-end pipeline** — from code to cloud in minutes

## Cleanup

```bash
az group delete --name superpowers-demo-rg --yes --no-wait
```
