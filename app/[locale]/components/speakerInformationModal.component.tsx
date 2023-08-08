'use client'
import { useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion";

interface Props {
    name: string
    information: string
    onClose: () => void
}

const header = (name: string) => {
    return <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-3xl font-semibold">
            "{name}"
        </h3>
    </div>
}

const body = (additionalInformation: string) => {
    return <>
        {additionalInformation}
    </>
}

const footer = (onClose: () => void) => {
    return <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={onClose}>
            Close
        </button>
    </div>
}

export default function SpeakerInformationModal({ name, information, onClose }: Props) {
    const modal = useRef<HTMLDivElement>();

    const handleKeyUp = useCallback(
        (e: KeyboardEvent) => {
            const keys: { [key: number]: () => void } = {
                27: () => {
                    e.preventDefault()
                    onClose()
                    window.removeEventListener("keyup", handleKeyUp, false)
                }
            };

            if (keys[e.keyCode]) {
                keys[e.keyCode]()
            }
        },
        [onClose]
    )

    const handleOutsideClick = useCallback(
        (e: MouseEvent) => {
            if (modal == null) return;
            if (!modal.current?.contains(e.target as Node)) {
                onClose();
                document.removeEventListener("click", handleOutsideClick, false);
            }
        },
        [onClose]
    );


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp, false)
        document.addEventListener("click", handleOutsideClick, false)

        return () => {
            window.removeEventListener("keyup", handleKeyUp, false)
            document.removeEventListener("click", handleOutsideClick, false)
        }
    }, [handleKeyUp, handleOutsideClick])

    return (
        <motion.div exit={{ opacity: 0 }}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}

                        ref={modal as React.RefObject<HTMLDivElement>}
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-[90vw] lg:w-[50vw] lg:h-full bg-white outline-none focus:outline-none"
                    >
                        {header(name)}
                        {body(information)}
                        {footer(onClose)}
                    </motion.div>

                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </motion.div>
    );
}