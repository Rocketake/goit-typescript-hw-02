import Modal from 'react-modal';
import { Styles } from 'react-modal';

const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};





// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

import React, { FC } from 'react'

type ImageModalProps = {
  closeModal: () => void,
  isOpen: boolean,
modalImage: string,
}

const ImageModal: FC<ImageModalProps> = ({closeModal, isOpen, modalImage}) => {


  return (
    <div>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <img src={modalImage} alt=""/>
      </Modal>
    </div>
  );
  
}

export default ImageModal