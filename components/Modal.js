import React, { useEffect, useState } from 'react';
import { View, Button, Modal, StyleSheet } from 'react-native';

const PopupModal = ({ Child, setModalFalse, showModal, setCalling, setAck, timer, currentIndex, activeUser, setOffline, astroId }) => {
  const [visible, setVisible] = useState(showModal);


  useEffect(() => {
    console
    setVisible(showModal);
  }, [showModal])

  const toggleModal = () => {
    setModalFalse();
    setVisible(!visible);
  };



  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        transparent
        onRequestClose={toggleModal}
        animationType="fade"
      >
        <View style={styles.modal}>
          <Child astroId={astroId} setAck={setAck} toggleModal={toggleModal} setCalling={setCalling} timer={timer} currentIndex={currentIndex} activeUser={activeUser} setOffline={setOffline} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgba(102, 101, 97, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-end",
    paddingBottom: 50
  },
  modalText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default PopupModal;
