import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  button: { alignSelf: 'stretch' },
  centeringBox: {
    alignSelf: 'stretch',
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
    alignSelf: 'stretch',
    backgroundColor: '#44474e',
    borderRadius: 16,
    color: '#c4c6d0',
    elevation: 16,
    margin: 8,
    padding: 12
  },
  primaryBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#aac7ff',
    borderRadius: 16,
    elevation: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    margin: 8
  },
  primaryText: {
    color: '#003064',
    fontSize: 14,
    lineHeight: 20,
    padding: 12
  },
  secondaryBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#d6e3ff',
    borderRadius: 8,
    elevation: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    margin: 8
  },
  secondaryText: {
    color: '#001b3e',
    lineHeight: 18,
    padding: 12
  }
});
