import { Button, ButtonProps, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react"
import React, { ReactNode } from 'react'

type AppModalProps = {
    isOpen: boolean;
    onClose: () => void;
    header?: string;
    body: ReactNode;
    footerButtons?: ButtonProps[];
    imageModal?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full",
    placement?: "center" | "top-center" | "auto" | "top" | "bottom" | "bottom-center",
    backdrop?: "transparent" | "opaque" | "blur"
}

// image modal is just show the original photo
export function FrankModal({ isOpen, onClose, header, body, footerButtons, imageModal, size, placement = 'top-center', backdrop = 'transparent' }: AppModalProps) {
    // original close event has been covered by something else, we manually add one
    const handleClose = () => {
        setTimeout(() => onClose(), 10);
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            placement={placement}
            classNames={{
                base: `${imageModal ? 'border-2 border-white' : ''}`,
                body: `${imageModal ? 'p-0' : ''}`
            }}
            // animation
            motionProps={{
                variants: {
                    enter: { y: 0, opacity: 100, transition: { duration: 0.3 } },
                    exit: { y: 100, opacity: 0, transition: { duration: 0.3 } },
                }
            }}
            size={size}
            backdrop={backdrop}
        >
            <ModalContent>
                {
                    // show header if not image modal
                    !imageModal && <ModalHeader className='flex flex-col gap-1'>{header}</ModalHeader>
                }
                <ModalBody>{body}</ModalBody>
                {
                    // show footer if not image modal
                    !imageModal &&
                    <ModalFooter>
                        {footerButtons && footerButtons.map((props: ButtonProps, index) => (
                            <Button {...props} key={index}>
                                {props.children}
                            </Button>
                        ))}
                    </ModalFooter>
                }
            </ModalContent>
        </Modal>
    )
}

export default FrankModal;