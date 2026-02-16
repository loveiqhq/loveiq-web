import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  redact: {
    paths: [
      "email",
      "*.email",
      "ip",
      "*.ip",
      "phone",
      "*.phone",
      "firstName",
      "*.firstName",
      "lastName",
      "*.lastName",
      "name",
      "*.name",
    ],
    censor: "[REDACTED]",
  },
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
