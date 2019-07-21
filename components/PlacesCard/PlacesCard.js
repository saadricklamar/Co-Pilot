import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { weatherIcons } from "../../assets/weatherIcons";
import { Icon } from "react-native-elements";

export default class PlacesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  hoursToNextPlace = hours => {
    var sign = hours < 0 ? "-" : "";
    var hour = Math.floor(Math.abs(hours));
    var min = Math.floor((Math.abs(hours) * 60) % 60);
    return (
      sign + (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min
    );
  };

  static navigationOptions = {
    title: "Current Trip",
    headerStyle: {
      backgroundColor: "#278DC3",
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Marker Felt",
      fontSize: 20
    }
  };

  render() {
    const { navigation } = this.props;
    const trip = navigation.getParam("trip", "loading");
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../../assets/roadtrip1.jpeg")}
      >
        <View style={styles.legend}>
          <Icon name="stop" size={30} color="green" />
          <Text style={styles.legendText}>Good</Text>
          <Icon name="stop" size={30} color="yellow" />
          <Text style={styles.legendText}>Fair</Text>
          <Icon name="stop" size={30} color="red" />
          <Text style={styles.legendText}>Danger</Text>
        </View>
        <ScrollView>
          {trip.places.map((place, index) => {
            let weather = place.weather.icon;
            if (
              trip.legs[index] &&
              (place.weather === "tornado" ||
                place.weather === "hail" ||
                place.weather === "sleet")
            ) {
              return (
                <View key={place.id} style={styles.view}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                    key={place.name}
                    style={styles.image}
                    backgroundColor="red"
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Place", {
                          placeData: place
                        })
                      }
                      style={styles.cardContent}
                    >
                      <Text style={styles.name}>{place.name}</Text>
                      <Image
                        source={{ uri: weatherIcons[weather] }}
                        style={styles.summary}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={styles.legs}>
                    <Text style={styles.arrow}>{"\u2193"}</Text>
                    <Text style={styles.distance}>
                      {trip.legs[index].distance}
                    </Text>
                    <Text style={styles.hours}>
                      {this.hoursToNextPlace(
                        trip.legs[index].duration_in_hours
                      ) + "hrs"}
                    </Text>
                  </View>
                </View>
              );
            }
            if (
              trip.legs[index] &&
              (place.weather === "snow" || place.weather === "thunderstorm")
            ) {
              return (
                <View key={place.id} style={styles.view}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                    key={place.name}
                    style={styles.image}
                    backgroundColor="yellow"
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Place", {
                          placeData: place
                        })
                      }
                      style={styles.cardContent}
                    >
                      <Text style={styles.name}>{place.name}</Text>
                      <Image
                        source={{ uri: weatherIcons[weather] }}
                        style={styles.summary}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={styles.legs}>
                    <Text style={styles.arrow}>{"\u2193"}</Text>
                    <Text style={styles.distance}>
                      {trip.legs[index].distance}
                    </Text>
                    <Text style={styles.hours}>
                      {this.hoursToNextPlace(
                        trip.legs[index].duration_in_hours
                      ) + "hrs"}
                    </Text>
                  </View>
                </View>
              );
            } else if (trip.legs[index]) {
              return (
                <View key={place.id} style={styles.view}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                    key={place.name}
                    style={styles.image}
                    backgroundColor="green"
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Place", {
                          placeData: place
                        })
                      }
                      style={styles.cardContent}
                    >
                      <Text style={styles.name}>{place.name}</Text>
                      <Image
                        source={{ uri: weatherIcons[weather] }}
                        style={styles.summary}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={styles.legs}>
                    <Text style={styles.arrow}>{"\u2193"}</Text>
                    <Text style={styles.distance}>
                      {trip.legs[index].distance}
                    </Text>
                    <Text style={styles.hours}>
                      {this.hoursToNextPlace(
                        trip.legs[index].duration_in_hours
                      ) + "hrs"}
                    </Text>
                  </View>
                </View>
              );
            } else {
              if (
                place.weather === "tornado" ||
                place.weather === "hail" ||
                place.weather === "sleet"
              ) {
                return (
                  <View key={Math.random()} style={{ marginBottom: 30 }}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                      key={place.name}
                      style={styles.image}
                      backgroundColor="red"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Place", {
                            placeData: place
                          })
                        }
                        style={styles.cardContent}
                      >
                        <Text style={styles.name}>{place.name}</Text>
                        <Image
                          source={{ uri: weatherIcons[weather] }}
                          style={styles.summary}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                );
              }
              if (
                place.weather === "snow" ||
                place.weather === "thunderstorm"
              ) {
                return (
                  <View key={Math.random()} style={{ marginBottom: 30 }}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                      key={place.name}
                      style={styles.image}
                      backgroundColor="yellow"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Place", {
                            placeData: place
                          })
                        }
                        style={styles.cardContent}
                      >
                        <Text style={styles.name}>{place.name}</Text>
                        <Image
                          source={{ uri: weatherIcons[weather] }}
                          style={styles.summary}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                );
              } else {
                return (
                  <View key={Math.random()} style={{ marginBottom: 30 }}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 10, opacity: 0.7 }}
                      key={place.name}
                      style={styles.image}
                      backgroundColor="green"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Place", {
                            placeData: place
                          })
                        }
                        style={styles.cardContent}
                      >
                        <Text style={styles.name}>{place.name}</Text>
                        <Image
                          source={{ uri: weatherIcons[weather] }}
                          style={styles.summary}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                );
              }
            }
          })}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 37,
    fontFamily: "Optima",
    fontWeight: "bold",
    opacity: 5
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10
  },
  summary: {
    height: 55,
    width: 55
  },
  image: {
    width: "99.5%",
    height: 100,
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  legs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  arrow: {
    fontSize: 40
  },
  distance: {
    fontSize: 40
  },
  hours: {
    fontSize: 40
  },
  view: {
    alignItems: "center"
  },
  legend: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 60,
    backgroundColor: "#278DC3"
  },
  legendText: {
    paddingRight: 25,
    fontSize: 20,
    paddingTop: 2,
    color: "white"
  },
  backGround: {
    height: "100%",
    width: "100%"
  }
});
