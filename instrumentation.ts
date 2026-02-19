/**
 * OpenTelemetry instrumentation for distributed tracing.
 *
 * Automatically instruments Next.js route handlers, fetch calls (Supabase,
 * Resend, Slack, reCAPTCHA), and cold-start timing.
 *
 * To send traces to a backend, set these environment variables in Vercel:
 *
 *   OTEL_EXPORTER_OTLP_ENDPOINT  e.g. https://api.axiom.co/v1/traces
 *   OTEL_EXPORTER_OTLP_HEADERS   e.g. Authorization=Bearer <token>,X-Axiom-Dataset=loveiq
 *
 * Free backends:
 *   - Axiom:         https://axiom.co  (500MB/day free, Vercel native integration)
 *   - Grafana Cloud: https://grafana.com/products/cloud  (50GB traces/month free)
 *   - Highlight.io:  https://highlight.io  (500 sessions/month free)
 *
 * Without OTEL_EXPORTER_OTLP_ENDPOINT, traces are emitted to stdout and will
 * appear in Vercel's function logs (visible via any configured log drain).
 */

import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({ serviceName: "loveiq-web" });
}
