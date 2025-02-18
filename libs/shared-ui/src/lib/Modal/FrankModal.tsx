import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDraggable } from "@heroui/react"
import { ReactNode, RefObject, useRef } from 'react'
import FrankButtonBase, { FrankButtonBaseProps } from "../Button/FrankButtonBase";

type AppModalProps = {
    isOpen: boolean;
    onClose: () => void;
    header?: ReactNode;
    body: ReactNode;
    footerButtons?: FrankButtonBaseProps[];
    imageModal?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full",
    placement?: "center" | "top-center" | "auto" | "top" | "bottom" | "bottom-center",
    backdrop?: "transparent" | "opaque" | "blur",
    draggable?: boolean;
    hideCloseButton?: boolean;
}

// image modal is just show the original photo
export function FrankModal({ isOpen, onClose, header, body, footerButtons, imageModal, size, placement = 'top-center', backdrop = 'transparent', draggable = false, hideCloseButton = false }: AppModalProps) {
    // original close event has been covered by something else, we manually add one
    const handleClose = () => {
        setTimeout(() => onClose(), 10);
    }
    const targetRef = useRef<HTMLElement>(null) as RefObject<HTMLElement>;
    const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

    return (
        <Modal
            {...draggable && { ref: targetRef }}
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
            hideCloseButton={hideCloseButton}
        >
            <ModalContent>
                {
                    // show header if not image modal
                    !imageModal && <ModalHeader className='flex flex-col gap-1' {...moveProps}>{header}</ModalHeader>
                }
                <ModalBody>{body}</ModalBody>
                {
                    // show footer if not image modal
                    !imageModal &&
                    <ModalFooter>
                        {footerButtons && footerButtons.map((props: FrankButtonBaseProps, index) => (
                            <FrankButtonBase {...props} key={index} />
                        ))}
                    </ModalFooter>
                }
            </ModalContent>
        </Modal>
    )
}

export default FrankModal;