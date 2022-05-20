import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Button = ({ title }) => {
  return (
    <Pressable onPress={() => alert('Pressed')}>
        <View style={{backgroundColor: 'blue', padding: 10, alignItems: 'center', marginTop: 20}}>
          <Text style={{color: 'white'}}>{title}</Text>
        </View>
      </Pressable>
  )
}

export default function App() {
  return (
    <View>
      <ScrollView>
        <View style={{ height: 60, backgroundColor: 'blue' }}>
          <Text>This is a Text</Text>
        </View>

        <View style={{ height: 60, backgroundColor: 'green' }}>
          <Text 
            style={{ 
              fontSize: 24,
              color: 'white', 
              fontWeight: 'bold', 
              padding: 10, 
            }}
          >
              This is another Text
          </Text>
        </View>

        <View style={{marginTop: 50, marginLeft: 40}}>
          <Image 
            style={{height: 180, width: 200}} 
            source={require('./assets/favicon.png')} 
            resizeMode="contain"
          />
        </View>

        <View style={{marginTop: 50, marginLeft: 40}}>
          <Image 
            style={{height: 180, width: 200}} 
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }} 
            resizeMode="contain"
          />
        </View>

        <Button title="Press" />
        <Button title="2nd Title" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
