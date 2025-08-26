import React, { createContext, useContext, useState } from 'react'

type Toast = { id: number, type: 'success'|'error'|'info', message: string }

const ToastContext = createContext(null as any)

export function useToast() {
  return useContext(ToastContext)
}

export default function ToastProvider({ children }:{children:React.ReactNode}) {
  const [toasts, setToasts] = useState<Toast[]>([])
  function show(message:string, type:'success'|'error'|'info'='info') {
    const id = Date.now()
    setToasts(t => [...t, { id, type, message }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4000)
  }
  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed right-6 bottom-6 flex flex-col gap-2 z-50">
        {toasts.map(t => (
          <div key={t.id} className={`px-4 py-2 rounded shadow ${t.type==='success'?'bg-green-600':'bg-red-600'}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
