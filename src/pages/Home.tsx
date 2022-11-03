import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Styles } from '../assets/styles/Styles';
import Button from '../components/Button';
import { StackProps } from '../model';

export default function Home({
  navigation
}: NativeStackScreenProps<StackProps>) {
  return (
    <View style={Styles.container}>
      <Button
        label="Generate Character"
        onPress={() => navigation.navigate('CharacterSetup')}
      />
      <Button label="Generate Children" onPress={() => null} />
      <Button label="View Saved Characters" onPress={() => null} />
      <Button label="View/Edit Tables" onPress={() => null} />
    </View>
  );
}
