import toast from '../src/components/Toast'

export const displayToast = (message: string, type: 'success' | 'info' | 'error' | 'warning') =>
  toast({ type, message })

