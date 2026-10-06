import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>•••</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MC</Text>
          </View>

          <Text style={styles.name}>Mark Christian</Text>
          <Text style={styles.username}>@markchristian</Text>

          <Text style={styles.bio}>
            BSIT Student • Developer • Creative Designer
          </Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

        </View>

        {/* Statistics */}
        <View style={styles.statsContainer}>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>356</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>

        </View>

        {/* Dashboard */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Dashboard</Text>

          <View style={styles.dashboardGrid}>

            <TouchableOpacity style={styles.dashboardCard}>
              <Text style={styles.cardIcon}>📊</Text>
              <Text style={styles.cardTitle}>Activity</Text>
              <Text style={styles.cardSubtitle}>
                View your activity
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardCard}>
              <Text style={styles.cardIcon}>❤️</Text>
              <Text style={styles.cardTitle}>Favorites</Text>
              <Text style={styles.cardSubtitle}>
                Saved content
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardCard}>
              <Text style={styles.cardIcon}>📁</Text>
              <Text style={styles.cardTitle}>Projects</Text>
              <Text style={styles.cardSubtitle}>
                Your projects
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardCard}>
              <Text style={styles.cardIcon}>⚙️</Text>
              <Text style={styles.cardTitle}>Settings</Text>
              <Text style={styles.cardSubtitle}>
                Manage account
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Recent Activity */}
        <View style={styles.section}>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>

            <Text style={styles.viewAll}>View All</Text>
          </View>

          <View style={styles.activityCard}>

            <View style={styles.activityIcon}>
              <Text>✓</Text>
            </View>

            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>
                Completed a project
              </Text>

              <Text style={styles.activityTime}>
                2 hours ago
              </Text>
            </View>

          </View>

          <View style={styles.activityCard}>

            <View style={styles.activityIcon}>
              <Text>★</Text>
            </View>

            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>
                Added a new skill
              </Text>

              <Text style={styles.activityTime}>
                Yesterday
              </Text>
            </View>

          </View>

          <View style={styles.activityCard}>

            <View style={styles.activityIcon}>
              <Text>♥</Text>
            </View>

            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>
                Updated profile
              </Text>

              <Text style={styles.activityTime}>
                3 days ago
              </Text>
            </View>

          </View>

        </View>

        {/* Skills */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Skills & Interests</Text>

          <View style={styles.tagsContainer}>

            <View style={styles.tag}>
              <Text style={styles.tagText}>JavaScript</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>React Native</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>UI Design</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Programming</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Photography</Text>
            </View>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


// ========================================
// STYLES
// ========================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#151515",
  },

  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
  },

  menuText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 8,
  },

  profileSection: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#151515",
  },

  username: {
    fontSize: 14,
    color: "#777777",
    marginTop: 3,
  },

  bio: {
    textAlign: "center",
    fontSize: 14,
    color: "#555555",
    marginTop: 12,
    lineHeight: 21,
  },

  editButton: {
    marginTop: 18,
    backgroundColor: "#6C63FF",
    paddingHorizontal: 35,
    paddingVertical: 11,
    borderRadius: 22,
  },

  editButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  statsContainer: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  stat: {
    alignItems: "center",
    flex: 1,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#151515",
  },

  statLabel: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#E5E5E5",
  },

  section: {
    paddingHorizontal: 18,
    paddingTop: 22,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#151515",
    marginBottom: 14,
  },

  dashboardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  dashboardCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },

  cardIcon: {
    fontSize: 25,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#151515",
  },

  cardSubtitle: {
    fontSize: 12,
    color: "#888888",
    marginTop: 5,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewAll: {
    fontSize: 13,
    color: "#6C63FF",
    fontWeight: "600",
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEEEFF",
    justifyContent: "center",
    alignItems: "center",
  },

  activityContent: {
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222222",
  },

  activityTime: {
    fontSize: 12,
    color: "#888888",
    marginTop: 4,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 30,
  },

  tag: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555555",
  },

});