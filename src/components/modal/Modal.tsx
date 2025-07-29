import type { ReactNode } from "react"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export function Modal({ isOpen, onClose, children, title }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="max-w-400 bg-white rounded-md p-8">
        <div className="flex justify-between mb-3">
          <h3 className="text-3xl font-bold">{title}</h3>
          <button onClick={() => onClose()}>
            <img src="/close.svg" alt="Close" width={25} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
