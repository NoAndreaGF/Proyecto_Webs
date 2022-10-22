import winston from 'winston';

// Levels of the logs
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
};

// We select colors to shown the messages on console
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);


const format = winston.format.combine(
  // Format date
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // TColor messages on console
  winston.format.colorize({ all: true }),
  // Format of the information of the logs 
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  // Show message on console
  new winston.transports.Console(),
  // Save of logs in the file all.log that is located in the folder logs
  new winston.transports.File({ filename: 'src/middlewares/logs/all.log' }),
];

export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});
