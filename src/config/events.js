const IGNORED_REASONS = [
  'invalid ENS name'
]

const configureGlobalErrorHandler = () => {
  if ('onunhandledrejection' in window)
    window.onunhandledrejection = e => { 
      if (IGNORED_REASONS.includes(e?.reason?.reason))
        return;

      console.log('Unhandled Error', e)
    }
}

const configureEvents = () => {
  configureGlobalErrorHandler();
}

export default configureEvents;