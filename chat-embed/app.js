import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

// Production URL of the "When chat message received" trigger (ends with /chat)
const N8N_CHAT_WEBHOOK_URL = 'https://YOUR-N8N-INSTANCE/webhook/YOUR-CHAT-WEBHOOK-ID/chat';

const init = () => {
  createChat({
    webhookUrl: N8N_CHAT_WEBHOOK_URL,
    webhookConfig: {
      method: 'POST',
      headers: {},
    },
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    loadPreviousSession: true,
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: 'en',
    initialMessages: [
      'שלום! אני שמחה, העוזרת הווירטואלית של Simha Studio 👋',
      'אפשר לשאול אותי על ההזמנות הדיגיטליות, החבילות והמחירים, התהליך ואיך מזמינים.',
    ],
    i18n: {
      en: {
        title: 'Simha Studio – הזמנות דיגיטליות',
        subtitle: 'שאלו אותי כל דבר על ההזמנות שלנו',
        footer: '',
        getStarted: 'שיחה חדשה',
        inputPlaceholder: 'כתבו את השאלה שלכם...',
        closeButtonTooltip: 'סגירה',
      },
    },
    enableStreaming: false,
  });
};

init();
