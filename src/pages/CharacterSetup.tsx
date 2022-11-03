import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Styles } from '../src/assets/styles/Styles';
import Button from '../components/Button';

export default function CharacterSetup() {
  const [nameType, setNameType] = useState('input');
  const [nameTable, setNameTable] = useState(null);
  const [name, setName] = useState('');
  const [surnameType, setSurnameType] = useState('input');
  const [surnameTable, setSurnameTable] = useState(null);
  const [surname, setSurname] = useState('');

  return (
    <View style={Styles.container}>
      <Button label="Click to choose name generator" onPress={() => null} />
      {nameType === 'input' ? (
        <TextInput
          style={Styles.input}
          onChangeText={setName}
          value={name}
        ></TextInput>
      ) : (
        <Button class="secondary" onPress={() => null} />
      )}
      <Button label="Click to choose surname generator" onPress={() => null} />
      {surnameType === 'input' ? (
        <TextInput
          style={Styles.input}
          onChangeText={setSurname}
          value={name}
        ></TextInput>
      ) : (
        <Button class="secondary" onPress={() => null} />
      )}
    </View>
  );
}
