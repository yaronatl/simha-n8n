# Simha Studio - n8n final project

Two n8n workflows for Simha Studio (custom digital invitations), plus the embedded chat page.

## Workflows
- `workflows/task1_company_chatbot.json`: company chatbot. Chat Trigger, AI Agent with Google Gemini, Simple Memory (15 messages) and an HTTP Request tool (`simha_studio_info`) that reads the knowledge file from GitHub.
- `workflows/task2_birthday_wishes.json`: birthday greetings. Webhook (POST), Basic LLM Chain with Gemini, Airtable record, Brevo email, JSON response with a `greeting` field.

## Folders
- `chat-embed/`: `index.html`, `style.css`, `app.js` - page with the n8n chat widget (orange header).
- `knowledge/simha_studio.txt`: the text the chatbot answers from (Hebrew, read as a raw GitHub file).
- `prompts/`: the two system prompts used in the workflows.
- `docs/AIRTABLE_SCHEMA.md`: the six Airtable fields.

## Setup
1. In n8n, use Import from File for both JSON files. The `simha_studio_info` node already reads `knowledge/simha_studio.txt` from this repository.
2. Create the credentials (Google Gemini, Airtable token, Brevo API key) and select them on the Gemini, Airtable and Brevo nodes. If you use your own Airtable base, change the base/table IDs; put your verified Brevo sender instead of `your-verified-sender@example.com`.
3. Activate the workflows. The chat Production URL goes into `N8N_CHAT_WEBHOOK_URL` in `chat-embed/app.js` (it currently points to my local n8n).
4. Serve `chat-embed/` with a local web server to try the chat: `python3 -m http.server 8080 --directory chat-embed`.

Test of the birthday webhook:
```bash
curl -X POST http://localhost:5678/webhook/simha-birthday-wishes \
  -H "Content-Type: application/json" \
  -d '{"recipient_name":"נועה","sender_name":"יארון","recipient_gender":"נקבה","favorite_topics":"ציור, חתולים ושוקולד","recipient_email":"someone@example.com"}'
```
