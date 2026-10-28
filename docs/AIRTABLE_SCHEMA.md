# Airtable table: `birthday_wishes`

Base: `Simha Birthday Wishes`. Table: `birthday_wishes`.
Create the fields with exactly these names (the workflow fills them by name):

| # | Field | Airtable type | Value sent by the workflow |
|---|---|---|---|
| 1 | `recipient_name` | Single line text | `$('Webhook').item.json.body.recipient_name` |
| 2 | `sender_name` | Single line text | `...body.sender_name` |
| 3 | `recipient_gender` | Single line text (`זכר` / `נקבה`) | `...body.recipient_gender` |
| 4 | `favorite_topics` | Long text | `...body.favorite_topics` |
| 5 | `ai_greeting` | Long text | `$('Basic LLM Chain').item.json.text` |
| 6 | `recipient_email` | Email (or single line text) | `...body.recipient_email` |

- The primary field (first column) can be `recipient_name`. The Airtable record ID is automatic and is not one of the six fields.
- Do not add other required fields.
- Personal Access Token scopes: `data.records:write` and `schema.bases:read`, limited to this base.
- In the Airtable node, set base and table by ID (`appXXXXXXXXXXXXXX`, `tblXXXXXXXXXXXXXX`) or pick them from the list.
