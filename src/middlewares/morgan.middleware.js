import morgan from 'morgan';
import {logger} from '../utils/logger.js';

const stream = {
  // Tomamos los valores de severidad definidos en winston
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

export const morganMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);
