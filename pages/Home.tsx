import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Pressable, Text } from 'react-native';
import { Styles } from '../assets/styles/Styles';
import Button from '../components/Button';
import { StackProps } from '../model';

export default function Home({
  navigation
}: NativeStackScreenProps<StackProps>) {
  return (
    <View style={Styles.container}>
      <View style={Styles.primaryBtn}>
        <Pressable
          android_ripple={{ color: '#001b3e' }}
          onPress={() => navigation.navigate('CharacterSetup')}
        >
          <Text style={Styles.primaryText}>Generate Character</Text>
        </Pressable>
      </View>
      <Button label="Generate Children" onPress={() => null} />
      <View style={Styles.primaryBtn}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={Styles.primaryText}>View Saved Characters</Text>
        </Pressable>
      </View>
      <View style={Styles.primaryBtn}>
        <Pressable android_ripple={{ color: '#001b3e' }}>
          <Text style={Styles.primaryText}>View/Edit Tables</Text>
        </Pressable>
      </View>
    </View>
  );
}
