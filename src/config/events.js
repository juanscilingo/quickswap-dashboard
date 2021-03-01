const IGNORED_REASONS = [
  'invalid ENS name'
]

const IGNORED_ERROR_CODES = [
  -32603
]

const configureGlobalErrorHandler = () => {
  if ('onunhandledrejection' in window)
    window.onunhandledrejection = e => { 
      if (IGNORED_REASONS.includes(e?.reason?.reason) || IGNORED_ERROR_CODES.includes(e?.reason?.code ?? e.code))
        return;

      console.log('Unhandled Error', e)
    }
}

const configureEvents = () => {
  configureGlobalErrorHandler();
}

export default configureEvents;