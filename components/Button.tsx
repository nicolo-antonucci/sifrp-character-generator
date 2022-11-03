import { Pressable, PressableProps, Text, View } from 'react-native';
import { Styles } from '../assets/styles/Styles';

export default function Button(props: ButtonProps) {
  return (
    <View
      style={[
        props.class && props.class === 'secondary'
          ? Styles.secondaryBtn
          : Styles.primaryBtn,
        Styles.centeringBox
      ]}
    >
      <Pressable
        onPress={props.onPress}
        style={Styles.button}
        android_ripple={{
          color:
            props.class && props.class === 'secondary' ? '215ead' : '#5d91e3'
        }}
      >
        <Text
          style={
            props.class && props.class === 'secondary'
              ? Styles.secondaryText
              : Styles.primaryText
          }
        >
          {props.label}
        </Text>
      </Pressable>
    </View>
  );
}

export interface ButtonProps extends PressableProps {
  class?: 'primary' | 'secondary';
  icon?: string;
  label?: string;
  onPress: () => void;
}
