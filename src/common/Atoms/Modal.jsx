import React from 'react';
import { Modal as AntModal } from 'antd';
import './atoms.css';

export const Modal = ({ 
  title, 
  visible,
  onOk,
  onCancel,
  children,
  className = '',
  ...props 
}) => {
  return (
    <AntModal
      title={title}
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      className={`atom-modal ${className}`}
      {...props}
    >
      {children}
    </AntModal>
  );
};

export const ConfirmModal = ({ title, message, onOk, onCancel }) => (
  <Modal 
    title={title}
    onOk={onOk}
    onCancel={onCancel}
  >
    <p>{message}</p>
  </Modal>
);

export default Modal;
