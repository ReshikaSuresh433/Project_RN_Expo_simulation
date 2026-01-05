import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={mystyle.back}>
      <Text style={mystyle.head_text}>Categories</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={mystyle.grid_container}>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "electronics" })
            }
          >
            <Image
              source={require("../assets/categories/electronics.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Electronics</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "footwear" })
            }
          >
            <Image
              source={require("../assets/categories/footwear.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Footwear</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "clothing" })
            }
          >
            <Image
              source={require("../assets/categories/clothing.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Clothing</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "home_appliances" })
            }
          >
            <Image
              source={require("../assets/categories/home_appliances.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Home Appliances</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "books" })
            }
          >
            <Image
              source={require("../assets/categories/books.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Books</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "sports" })
            }
          >
            <Image
              source={require("../assets/categories/sports.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Sports</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "beauty" })
            }
          >
            <Image
              source={require("../assets/categories/beauty.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Beauty</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "fashion" })
            }
          >
            <Image
              source={require("../assets/categories/fashion.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Fashion</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "furniture" })
            }
          >
            <Image
              source={require("../assets/categories/furniture.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Furniture</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "tech" })
            }
          >
            <Image
              source={require("../assets/categories/tech.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Tech</Text>
          </Pressable>

          
          <Pressable
            style={mystyle.card}
            onPress={() =>
              navigation.navigate("ProductList", { category: "travel" })
            }
          >
            <Image
              source={require("../assets/categories/travel.png")}
              style={mystyle.image}
            />
            <Text style={mystyle.label}>Travel</Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mystyle = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: "#f0f6f6",
    paddingHorizontal: 12,
  },
  head_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#547980",
    marginVertical: 12,
  },
  grid_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 14,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
