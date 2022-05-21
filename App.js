import { Pressable, StyleSheet, Text, View } from 'react-native';

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
    <View style={{ flex: 1,  flexDirection: 'row', flexWrap: 'wrap' }}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} /> 
      <View style={styles.view4} /> 
      <View style={styles.view5} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  view2: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    alignSelf: 'flex-start', // align self is the most priority
  },
  view3: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  },
  view4: {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  },
  view5: {
    height: 100,
    width: 100,
    backgroundColor: 'black'
  },
});
