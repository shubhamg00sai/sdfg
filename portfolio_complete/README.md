# Shubham Gosai — Advanced Portfolio (Single Page)

This project is a single-page scroll portfolio built with React + TypeScript + Vite + Tailwind + Framer Motion and integrates Firebase Firestore to store contact messages.

## Setup
1. Copy `.env.example` to `.env` and fill your Firebase config values.
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

## Environment variables (Vite `.env`)

Create a `.env` file at project root with:

```
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

The contact form will write messages to a Firestore collection named `messages`.
