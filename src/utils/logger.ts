import pino from "pino";
import PinoPretty from "pino-pretty";
import moment from "moment";

export const logger = pino(
  {
    base: {
      pid: false,
    },
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
    
    timestamp: () => `,"time":"${moment().format("YYYY-MM-DD HH:mm:ss")}"`,
  },
  PinoPretty()
)