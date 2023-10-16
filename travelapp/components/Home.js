import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../assets/colors/colors";
import Feathers from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../assets/data/activitiesData";
import discoverData from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";
import profile from "../assets/images/person.png";

const Home = ({ navigation }) => {
  const renderDiscoverCategoryItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItems = ({ item }) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={item.image}
          style={[
            styles.learnMoreItem,
            { marginLeft: item.id === "learnMore-1" ? 20 : 0 },
          ]}
          imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.learnMoreItemText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Headers */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        removeClippedSubviews={true}
      >
        <SafeAreaView style={styles.menuWrapper}>
          <Feathers
            name="menu"
            size={32}
            color={colors.black}
            style={styles.menuIcon}
          />
          <Image source={profile} style={styles.profileImage} />
        </SafeAreaView>

        {/* Headers */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverCategoryItems}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItems}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreText}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItems}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  profileImage: {
    borderRadius: 10,
    marginTop: 20,
  },
  menuWrapper: {
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  menuIcon: {
    marginTop: 30,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontSize: 16,
    color: colors.gray,
    fontWeight: "bold",
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
    marginTop: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    color: colors.white,
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  activitiesWrapper: {
    marginTop: 35,
  },
  activitiesTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 20,
    color: colors.black,
  },
  activitiesItemsWrapper: {},
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage: {
    marginLeft: 25,
    marginTop: 20,
  },
  activityItemText: {
    color: colors.gray,
    marginLeft: 22,
    marginTop: 8,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreText: {
    fontWeight: "bold",
    marginHorizontal: 20,
    fontSize: 24,
    color: colors.black,
    paddingHorizontal: 1,
    paddingVertical: 20,
  },
  learnMoreItemsWrapper: {},
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
    paddingLeft: 12,
    paddingBottom: 20,
  },
});
