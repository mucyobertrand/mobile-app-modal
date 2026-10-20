import { useState } from 'react';
import { Button, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <Button title="Open" onPress={() => setVisible(true)} />

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)}>
          {/* stops taps on the card from closing the modal */}
          <Pressable style={styles.card}>
            <Text style={styles.title}>React logo</Text>
            <Image
              source={require('@/assets/images/react-logo.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Button title="Close" onPress={() => setVisible(false)} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    gap: 16,
    padding: 24,
    borderRadius: 16,
    backgroundColor: 'white',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: 200,
    height: 200,
  },
});
