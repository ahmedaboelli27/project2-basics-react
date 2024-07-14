import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'


interface IProps {
    isOpen:boolean,
    close: ()=> void,
    title?:string,
    children: ReactNode,
    description?: string
    
    

}

const Modal = ({isOpen, close, title, children}: IProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} >
        <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm' />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                {title && 
                        <DialogTitle className="text-lg font-bold">
                            {title}
                        </DialogTitle>
                }
              <div className="max-w-full">
                <Button onClick={close} />
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
export default Modal   