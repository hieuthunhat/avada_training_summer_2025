import React from 'react';
import { Modal, Text, Box } from '@shopify/polaris';
import { usePopup } from '../../context/PopUpContext';

/**
 * Component hiển thị popup modal sử dụng Polaris Modal
 * Sử dụng PopUpContext để quản lý trạng thái mở/đóng
 * @returns {JSX.Element} PopUp modal component
 */
export const PopUp = () => {
  const { isOpen, closePopup } = usePopup();

  return (
    <Modal
      open={isOpen}
      onClose={closePopup}
      title="Popup Modal"
      primaryAction={{
        content: 'Close',
        onAction: closePopup,
      }}
    >
      <Modal.Section>
        <Box>
          <Text variant="bodyMd" as="p">
          </Text>
        </Box>
      </Modal.Section>
    </Modal>
  );
};
