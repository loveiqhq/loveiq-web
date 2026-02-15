# API Reference

All API routes are under `/api/`. Mutation endpoints require a CSRF token sent as the `x-csrf-token` header, matching the `__csrf` cookie set by the middleware.

## POST /api/waitlist

Add an email to the waitlist.

**Rate limit:** 5 requests/minute per IP + 1 minute cooldown per email.

**Request body:**

```json
{
  "email": "user@example.com",
  "source": "landing-modal",
  "firstName": "Jane",
  "website": ""
}
```

| Field       | Type   | Required | Notes                                   |
| ----------- | ------ | -------- | --------------------------------------- |
| `email`     | string | Yes      | Valid email, max 320 chars              |
| `source`    | string | No       | Signup source identifier, max 120 chars |
| `firstName` | string | No       | Max 80 chars                            |
| `website`   | string | No       | Honeypot field — must be empty          |

**Responses:**

| Status | Body                                        | Meaning                                   |
| ------ | ------------------------------------------- | ----------------------------------------- |
| 200    | `{ "success": true }`                       | Signup successful                         |
| 200    | `{ "success": true, "already": true }`      | Email already on waitlist (idempotent)    |
| 400    | `{ "error": "Invalid input" }`              | Validation failed or honeypot triggered   |
| 403    | `{ "error": "Invalid request." }`           | CSRF token missing or invalid             |
| 429    | `{ "error": "Please try again later." }`    | Rate limited (check `Retry-After` header) |
| 503    | `{ "error": "Service unavailable." }`       | Backend configuration issue               |
| 500    | `{ "error": "Unable to process request." }` | Server error                              |

## POST /api/contact

Submit a contact form inquiry.

**Rate limit:** 5 requests/minute per IP. Requires reCAPTCHA v2.

**Request body:**

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "phone": "+1234567890",
  "email": "user@example.com",
  "message": "I'd like to learn more about LoveIQ.",
  "captcha": "reCAPTCHA-response-token"
}
```

| Field       | Type   | Required | Notes                       |
| ----------- | ------ | -------- | --------------------------- |
| `firstName` | string | Yes      | 1-120 chars                 |
| `lastName`  | string | Yes      | 1-120 chars                 |
| `phone`     | string | Yes      | 4-40 chars                  |
| `email`     | string | Yes      | Valid email, max 320 chars  |
| `message`   | string | Yes      | 10-1000 chars               |
| `captcha`   | string | Yes      | reCAPTCHA v2 response token |

**Responses:**

| Status | Body                                                       | Meaning                       |
| ------ | ---------------------------------------------------------- | ----------------------------- |
| 200    | `{ "success": true }`                                      | Message sent                  |
| 400    | `{ "error": "Invalid input." }`                            | Validation failed             |
| 400    | `{ "error": "Captcha failed. Please try again." }`         | reCAPTCHA verification failed |
| 403    | `{ "error": "Invalid request." }`                          | CSRF token missing or invalid |
| 429    | `{ "error": "Please try again later." }`                   | Rate limited                  |
| 500    | `{ "error": "Unable to send message. Please try later." }` | Server error                  |
| 503    | `{ "error": "Service unavailable." }`                      | Missing configuration         |

## GET /api/health

Health check endpoint.

**Response:**

```json
{ "ok": true }
```
