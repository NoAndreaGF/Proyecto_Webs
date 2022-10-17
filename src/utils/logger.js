import winston from 'winston';

// Niveles de severidad de los errores
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


//Añadimos colores a los niveles de winston
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);


const format = winston.format.combine(
  // Formato de hora que se estará utilizando
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // TColor de los mensajes en consola
  winston.format.colorize({ all: true }),
  // Formato
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Como se muestran las acciones
const transports = [
  // Mostrar mensaje en la consola
  new winston.transports.Console(),
  // Guardar marca de error en el archivo errores
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Guardar todas las acciones
  new winston.transports.File({ filename: 'logs/all.log' }),
];

// Instancia que será utilizada en el middleware de morgan
export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});
