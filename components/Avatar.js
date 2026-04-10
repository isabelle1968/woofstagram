import { Image, StyleSheet } from 'react-native';

export default function Avatar({ source, size = 64 }) {
  return (
    <Image
      source={{ uri: source }}
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#ddd',
  },
});