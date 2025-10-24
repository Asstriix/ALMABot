
# ALMA · Psicoanalista virtual (frontend)
Express + Handlebars + Tailwind. UI de conversación que llama al Webhook de n8n (POST).

## Local
cp .env.example .env
npm i
npm run dev

## Build CSS
npm run build:css

## Vercel
Definí `N8N_WEBHOOK_URL` en el proyecto. El runtime es `nodejs`.
