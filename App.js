import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.125,
  },
});
