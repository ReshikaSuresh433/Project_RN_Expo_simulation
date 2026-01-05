import React from "react";
import {View, Text, Image, Pressable,Alert,StyleSheet,Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice";

export default function ProductItem({ item }: { item: any }) {
  const dispatch = useDispatch();

  const isOutOfStock = item.instock === false;

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
      })
    );

    if (Platform.OS === "web") {
      window.alert("Added to Cart 🛒 Continue shopping");
    } else {
      Alert.alert(
        "Added to Cart 🛒",
        `${item.name} has been added to your cart`,
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View
      style={[styles.card, isOutOfStock && styles.outCard]}
      pointerEvents={isOutOfStock ? "none" : "auto"}
    >

      <View style={styles.imageWrapper}>
        <Image
          source={item.img}
          style={[styles.image, isOutOfStock && styles.dimImage]}
          resizeMode="cover"
        />

        <Pressable style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={18} color="#2f7e79" />
        </Pressable>
      </View>


      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.brand}>{item.brand}</Text>


      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={12} color="#f5a623" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>


      <Text style={styles.price}>₹{item.price}</Text>


      <Pressable
        style={[styles.btn, isOutOfStock && styles.disabledBtn]}
        onPress={handleAddToCart}
        disabled={isOutOfStock}
      >
        <Text style={styles.btnText}>
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 16,
    padding: 10,
    marginBottom: 14,
    elevation: 3,
    alignItems: "center",
  },

  outCard: {
    backgroundColor: "#eee",
    opacity: 0.6,
  },

  imageWrapper: {
    width: "100%",
    position: "relative",
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  dimImage: {
    opacity: 0.5,
  },

  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    elevation: 3,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },

  brand: {
    fontSize: 12,
    color: "#777",
  },

  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 4,
  },

  ratingText: {
    fontSize: 11,
    marginLeft: 3,
    color: "#444",
  },

  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 6,
    color: "#2f7e79",
  },

  btn: {
    backgroundColor: "#2f7e79",
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  disabledBtn: {
    backgroundColor: "#bdbdbd",
  },

  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
