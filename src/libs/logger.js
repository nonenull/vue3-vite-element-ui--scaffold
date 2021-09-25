import moment from 'moment'

window.LogLevel = import.meta.env.VITE_APP_LOG_LEVEL ? import.meta.env.VITE_APP_LOG_LEVEL : 1

const LogLevelEnum = {
  'debug': 0,
  'info': 1,
  'warn': 2,
  'error': 3,
  'trace': 4
}

const LogLevelColorEnum = {
  'debug': '#2b85e4',
  'info': '#19be6b',
  'warn': '#ff9900',
  'error': '#ed4014',
  'trace': '#ed4014'
}

class Logger {
  constructor (prefix) {
    this.prefix = prefix
  }

  log (level, ...data) {
    let func = console[level]
    if (!func) func = console.log
    let color = LogLevelColorEnum[level]
    if (LogLevelEnum[level] >= window.LogLevel) {
      func(`%c[${level}][${moment().format('YYYY-MM-DD HH:mm:ss.SSSS')}][${this.prefix}]`, `color:${color};`, ...data)
    }
  }

  debug (...data) {
    this.log('debug', ...data)
  }

  info (...data) {
    this.log('info', ...data)
  }

  warn (...data) {
    this.log('warn', ...data)
  }

  error (...data) {
    this.log('error', ...data)
  }

  trace (...data) {
    this.log('error', ...data)
  }
}

export const getLogger = (name) => {
  return new Logger(name)
}
