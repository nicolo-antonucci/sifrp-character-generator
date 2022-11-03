import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  button: { alignSelf: 'stretch', },
  centeringBox: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#1a1b1e',
    flex: 1,
    padding: 24
  },
  hFlex: { flexDirection: 'row', alignItems: 'center' },
  input: {
    backgroundColor: '#44474e',
    borderRadius: 8,
    color: '#c4c6d0',
    elevation: 8,
    margin: 8,
    padding: 12
  },
  primaryBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#aac7ff',
    borderRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    margin: 8
  },
  primaryText: {
    color: '#003064',
    padding: 12
  },
  secondaryBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#d6e3ff',
    borderRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    margin: 8
  },
  secondaryText: {
    color: '#001b3e',
    padding: 12
  }
});
