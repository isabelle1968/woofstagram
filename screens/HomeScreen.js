import { ScrollView, StyleSheet, View } from 'react-native';
import Heading from '../components/Heading';
import WoofCard from '../components/WoofCard';
import WoofPost from '../components/WoofPost';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Heading>Trending Woofs</Heading>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <WoofCard
          name="Rex"
          avatar="https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
        />
        <WoofCard
          name="Bali-R"
          avatar="https://images.unsplash.com/photo-1525253086316-d0c936c814f8"
        />
        <WoofCard
          name="Happy"
          avatar="https://images.unsplash.com/photo-1507146426996-ef05306b995a"
        />
        <WoofCard
          name="Floof"
          avatar="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        />
      </ScrollView>

      <Heading>New Woof Posts</Heading>

      <View>
        <WoofPost
          title="HAPPY WOOFS"
          description="How to keep your Woof happy and healthy."
          image="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        />
        <WoofPost
          title="WOOFS & FRIENDS"
          description="Best friends are important for humans, but also for dogs."
          image="https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
        />
        <WoofPost
          title="GOOD WOOFS"
          description="When they behave right, they are not a danger to society."
          image="https://images.unsplash.com/photo-1507146426996-ef05306b995a"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f7f1ff',
  },
  horizontalScroll: {
    marginBottom: 28,
  },
});