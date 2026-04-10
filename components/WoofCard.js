import { StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

export default function WoofCard({ name, avatar }) {
  return (
    <View style={styles.card}>
      <Avatar source={avatar} size={72} />
      <Title centered>{name}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e7ddf7',
    borderRadius: 18,
    padding: 16,
    marginRight: 14,
    alignItems: 'center',
    width: 120,
  },
});