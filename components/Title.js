import { StyleSheet, Text } from 'react-native';

export default function Title({ children, centered = false }) {
  return (
    <Text style={[styles.title, centered && styles.centered]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5a3d8a',
    marginTop: 8,
  },
  centered: {
    textAlign: 'center',
  },
});