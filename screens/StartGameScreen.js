import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#4e0329',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    gap: 5,
  },
  btnContainer: {
    flex: 1,
  },
});
