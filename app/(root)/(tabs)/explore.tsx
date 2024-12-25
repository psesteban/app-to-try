import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput, Card, Text, Chip, useTheme, IconButton } from "react-native-paper";

const categories = [
  { id: "1", name: "Technology" },
  { id: "2", name: "Health" },
  { id: "3", name: "Science" },
  { id: "4", name: "Art" },
];

const items = [
  {
    id: "1",
    title: "The Rise of AI",
    category: "Technology",
    image: "https://via.placeholder.com/150",
    description: "Explore how artificial intelligence is shaping the future.",
  },
  {
    id: "2",
    title: "Mental Health Tips",
    category: "Health",
    image: "https://via.placeholder.com/150",
    description: "Simple ways to improve your mental health every day.",
  },
  {
    id: "3",
    title: "Space Exploration",
    category: "Science",
    image: "https://via.placeholder.com/150",
    description: "A journey through the cosmos and our quest to explore it.",
  },
  {
    id: "4",
    title: "Masterpieces of Modern Art",
    category: "Art",
    image: "https://via.placeholder.com/150",
    description: "Discover some of the most inspiring art of the 21st century.",
  },
];

const Explore: React.FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Search Bar */}
      <TextInput
        mode="outlined"
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        left={<TextInput.Icon icon="magnify" />}
        style={styles.searchBar}
      />

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text variant="titleMedium" style={styles.categoryTitle}>
          Categories
        </Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Chip
              selected={selectedCategory === item.name}
              onPress={() =>
                setSelectedCategory(selectedCategory === item.name ? null : item.name)
              }
              style={styles.chip}
            >
              {item.name}
            </Chip>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Item List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Text variant="titleLarge" style={styles.cardTitle}>
                {item.title}
              </Text>
              <Text variant="bodyMedium" style={styles.cardDescription}>
                {item.description}
              </Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="heart-outline"
                onPress={() => console.log("Liked:", item.title)}
              />
              <IconButton
                icon="share-variant"
                onPress={() => console.log("Shared:", item.title)}
              />
            </Card.Actions>
          </Card>
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    marginBottom: 8,
  },
  chip: {
    marginRight: 8,
  },
  list: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 8,
  },
  cardDescription: {
    color: "#6b6b6b",
  },
});

export default Explore;
