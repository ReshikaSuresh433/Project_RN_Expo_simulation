import { View, FlatList, StyleSheet, Text } from "react-native";
import { products } from "../Components/product";
import { useRoute } from "@react-navigation/native";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const route = useRoute<any>();
  const category = route.params?.category;

  const filteredProducts = products.filter((item) => item.category === category);

  if (!filteredProducts.length) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#777" }}>
          No products found in this category
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f6f6", padding: 12 },
});
