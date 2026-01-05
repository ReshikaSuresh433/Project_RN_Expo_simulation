import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "./Redux/cartSlice";

export default function CartScreen() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (Platform.OS === "web") {
      window.alert("Order Placed, Your Order has been placed");
      dispatch(clearCart());
    } else {
      Alert.alert("Order Placed ✅", "Your order has been accepted", [
        {
          text: "OK",
          onPress: () => dispatch(clearCart()),
        },
      ]);
    }
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id: number, qty: number) => {
    if (qty === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decreaseQty(id));
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      {/* Product Image */}
      <Image source={item.img} style={styles.image} />

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>

        <View style={styles.qtyContainer}>
          <Pressable
            style={styles.qtyBtn}
            onPress={() => handleDecrease(item.id, item.quantity)}
          >
            <Text style={styles.qtyText}>-</Text>
          </Pressable>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <Pressable
            style={styles.qtyBtn}
            onPress={() => handleIncrease(item.id)}
          >
            <Text style={styles.qtyText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f6f6" }}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 12, paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            Your cart is empty 🛒
          </Text>
        }
      />

      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.orderBtn} onPress={handlePlaceOrder}>
          <Text style={styles.orderText}>
            Place Order • ₹{totalAmount}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },

  details: {
    flex: 1,
  },

  name: {
    fontWeight: "600",
    fontSize: 15,
  },

  price: {
    fontSize: 14,
    color: "#2f7e79",
    marginVertical: 4,
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  qtyBtn: {
    backgroundColor: "#2f7e79",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  qtyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  orderBtn: {
    backgroundColor: "#2f7e79",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 12,
    right: 12,
  },

  orderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
