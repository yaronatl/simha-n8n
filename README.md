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
1. Host this folder in a public GitHub repository, then replace `YOUR_GITHUB_USER/YOUR_REPO` in the `simha_studio_info` node with your own raw URL.
2. In n8n, use Import from File for both JSON files.
3. Create the credentials (Google Gemini, Airtable token, Brevo API key) and select them on the Gemini, Airtable and Brevo nodes. Set the Airtable base/table IDs and the verified Brevo sender.
4. Activate the workflows and copy the chat Production URL into `N8N_CHAT_WEBHOOK_URL` in `chat-embed/app.js`.
5. Serve `chat-embed/` with a local web server to try the chat.
