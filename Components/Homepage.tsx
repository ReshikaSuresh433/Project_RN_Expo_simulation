import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Image
          source={require('../assets/home.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.head_text}>
            Shopping And{'\n'}Department Store.
          </Text>

          <Text style={styles.inner_text}>
            Shopping is a bit of a relaxing hobby for me, which{'\n'}
            is sometimes troubling for the bank balance.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
  },

  heroImage: {
    width: '100%',
    height: '68%',          
    marginTop: 8,
  },

  textContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#cfe9ef', 
  },

  head_text: {
    fontSize: 34,
    fontWeight: '800',
    color: '#003222',
    lineHeight: 42,
  },

  inner_text: {
    fontSize: 15,
    color: '#65777d',
    marginTop: 10,
    lineHeight: 22,
  },
});
