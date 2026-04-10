import { Image, StyleSheet, Text, View } from 'react-native';
import Title from './Title';

export default function WoofPost({ title, description, image }) {
  return (
    <View style={styles.post}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Title>{title}</Title>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 14,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  textContainer: {
    flex: 1,
  },
  description: {
    color: '#6d6287',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
});