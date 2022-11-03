import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Styles } from '../assets/styles/Styles';
import Button from '../components/Button';

export default function CharacterSetup() {
  const [nameType, setNameType] = useState('input');
  const [nameTable, setNameTable] = useState(null);
  const [name, setName] = useState('');

  return (
    <View style={Styles.container}>
      <View style={Styles.hFlex}>
        <Button label="Set Name" onPress={() => null} />
        {nameType === 'input' ? (
          <View style={{ flex: 1 }}>
            <TextInput
              style={Styles.input}
              onChangeText={setName}
              value={name}
            ></TextInput>
          </View>
        ) : (
          <Button class="secondary" onPress={() => null} />
        )}
      </View>
    </View>
  );
}
