import * as winston from 'winston'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const formatConfigs = {
  date: winston.format.timestamp({ format: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo', hour12: false }) }),
  colorize: winston.format.colorize({ all: true }),
  print: winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
}

const format: winston.Logform.Format = winston.format.combine(
  formatConfigs.date,
  formatConfigs.colorize,
  formatConfigs.print
)

const options: winston.LoggerOptions = {
  level: 'debug',
  levels,
  format,
  transports: [new winston.transports.Console()]
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

export const customLogger = winston.createLogger(options)