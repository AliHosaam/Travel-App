import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const height = Dimensions.get("window").height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-left"
            size={40}
            color={colors.white}
            style={styles.goBackIcon}
          />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}> /person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATINGS</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}> /5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert("You booked a trip!")}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  goBackIcon: {
    paddingHorizontal: 15,
    paddingVertical: 70,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    color: colors.white,
    fontSize: 40,
    marginBottom: 8,
  },
  locationWrapper: {
    flexDirection: "row",
  },
  locationText: {
    alignSelf: "center",
    color: colors.white,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  descriptionTitle: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  descriptionText: {
    color: colors.gray,
    fontWeight: "bold",
    fontSize: 16,
  },
  infoWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  infoItem: {},
  infoTitle: {
    color: colors.gray,
    fontSize: 12,
    fontWeight: "bold",
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  infoText: {
    color: colors.orange,
    fontSize: 24,
    fontWeight: "bold",
  },
  infoSubText: {
    color: colors.gray,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
