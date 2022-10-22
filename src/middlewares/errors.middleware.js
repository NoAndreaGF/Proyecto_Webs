import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// this variable help to no save success actions
const skipSuccess = (req, res)  => res.statusCode < 400;

// create a write stream (in append mode)
const errorLogStream = fs.createWriteStream(path.join(__dirname, '/logs/error.log'), { flags: 'a' });

export const errorsMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms", {
    skip: skipSuccess,
    stream: errorLogStream
});
