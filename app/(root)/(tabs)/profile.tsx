import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Button, Avatar, useTheme, Divider } from "react-native-paper";

const Profile: React.FC = () => {
  const theme = useTheme();

  const handleEditProfile = () => {
    console.log("Edit Profile");
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Avatar.Image
          size={120}
          source={{
            uri: "https://via.placeholder.com/120",
          }}
        />
        <Text variant="headlineMedium" style={styles.name}>
          John Doe
        </Text>
        <Text variant="bodyMedium" style={styles.email}>
          john.doe@example.com
        </Text>
      </View>

      <Divider style={styles.divider} />

      {/* Details Section */}
      <View style={styles.details}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Personal Information
        </Text>
        <View style={styles.detailRow}>
          <Text variant="bodyMedium" style={styles.detailLabel}>
            Username:
          </Text>
          <Text variant="bodyMedium" style={styles.detailValue}>
            johndoe123
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="bodyMedium" style={styles.detailLabel}>
            Phone:
          </Text>
          <Text variant="bodyMedium" style={styles.detailValue}>
            +1 234 567 890
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="bodyMedium" style={styles.detailLabel}>
            Address:
          </Text>
          <Text variant="bodyMedium" style={styles.detailValue}>
            123 Main Street, Springfield
          </Text>
        </View>
      </View>

      <Divider style={styles.divider} />

      {/* Actions */}
      <View style={styles.actions}>
        <Button
          mode="contained"
          onPress={handleEditProfile}
          style={styles.actionButton}
        >
          Edit Profile
        </Button>
        <Button
          mode="outlined"
          onPress={handleLogout}
          style={styles.actionButton}
        >
          Logout
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    marginTop: 16,
    fontWeight: "bold",
  },
  email: {
    color: "#6b6b6b",
  },
  divider: {
    marginVertical: 16,
  },
  details: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    color: "#6b6b6b",
  },
  detailValue: {
    fontWeight: "bold",
  },
  actions: {
    alignItems: "center",
  },
  actionButton: {
    marginBottom: 12,
    width: "100%",
  },
});

export default Profile;
