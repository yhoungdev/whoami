import { Modal, ModalBody, ModalContent , ModalCloseButton} from "@chakra-ui/react";

const ModalLayout = ({ isOpen , onClose , children } : any ) => {
    return (
        < >

         <Modal isOpen={isOpen}  onClose={onClose} >
            <ModalContent  borderRadius={'0.5em'}>
            <ModalCloseButton/>
                <ModalBody bg={'#242424'}>
                    {children}
                </ModalBody>
            </ModalContent>
         </Modal>

        </>
    )
}

export default ModalLayout;