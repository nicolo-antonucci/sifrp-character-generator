import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonBox}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={styles.text}>Generate Character</Text>
        </Pressable>
      </View>
      <View style={styles.buttonBox}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={styles.text}>Generate Children</Text>
        </Pressable>
      </View>
      <View style={styles.buttonBox}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={styles.text}>View Saved Characters</Text>
        </Pressable>
      </View>
      <View style={styles.buttonBox}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={styles.text}>View/Edit Tables</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#1a1b1e',
    padding: 48,
    flex: 1,
    alignItems: 'center'
  },
  buttonBox: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#aac7ff',
    elevation: 8,
    marginTop: 16,
    marginBottom: 16
  },
  text: {
    padding: 24,
    color: '#003064',
    textAlign: 'center'
  }
});
