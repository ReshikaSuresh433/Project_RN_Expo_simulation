import { ImageSourcePropType } from "react-native";


export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  instock: boolean;
  comments: string[];
  img: ImageSourcePropType;
}


const categoryImages: Record<string, ImageSourcePropType> = {
  mobile:require("../assets/images/mobile.png"),
  laptop:require("../assets/images/laptop.png"),
  beauty:require("../assets/images/beauty.png"),
  clothing: require("../assets/images/clothing.png"),
  home_appliances: require("../assets/images/home_appliances.png"),
  electronic_gadget:require("../assets/images/electronic_gadgets.png"),
  fashion_acessories: require("../assets/images/fashion_acessories.png"),
  books: require("../assets/images/books.png"),
  sports: require("../assets/images/sports.png"),
  furniture: require("../assets/images/furniture.png"),
  tech_gadget: require("../assets/images/tech_gadgets.png"),
  travel: require("../assets/images/travel.png"),
  footwear:require("../assets/images/footwear.png"),
  headphones:require("../assets/images/headphones.png")
};

export const products: Product[] = [
  
  { id: 1, name: "iPhone 15 Pro", brand: "Apple", category: "electronics", price: 129999, rating: 4.8, instock: true, comments: ["Amazing camera!", "Worth every rupee", "Super fast"], img: categoryImages["mobile"] },
  { id: 2, name: "Samsung Galaxy S24", brand: "Samsung", category: "electronics", price: 114999, rating: 4.7, instock: true, comments: ["Vibrant display", "Battery lasts long"], img: categoryImages["mobile"] },
  { id: 3, name: "OnePlus 12", brand: "OnePlus", category: "electronics", price: 74999, rating: 4.5, instock: true, comments: ["Smooth UI", "Great value"], img: categoryImages["mobile"] },
  { id: 4, name: "Google Pixel 8", brand: "Google", category: "electronics", price: 79999, rating: 4.6, instock: false, comments: ["Fantastic camera", "Clean software"], img: categoryImages["mobile"] },
  { id: 5, name: "Xiaomi Redmi Note 13", brand: "Xiaomi", category: "electronics", price: 21999, rating: 4.3, instock: true, comments: ["Great budget phone", "Decent battery"], img: categoryImages["mobile"] },
  { id: 6, name: "Vivo V30", brand: "Vivo", category: "electronics", price: 28999, rating: 4.2, instock: true, comments: ["Good selfie cam", "Stylish"], img: categoryImages["mobile"] },
  { id: 7, name: "Realme GT 3", brand: "Realme", category: "electronics", price: 26999, rating: 4.4, instock: true, comments: ["Fast charging!", "Nice performance"], img: categoryImages["mobile"] },
  { id: 8, name: "Sony Xperia 1 V", brand: "Sony", category: "electronics", price: 99999, rating: 4.1, instock: false, comments: ["Great audio", "Expensive though"], img: categoryImages["mobile"] },
  { id: 9, name: "Nokia G400", brand: "Nokia", category: "electronics", price: 18999, rating: 4.0, instock: true, comments: ["Solid build", "Good battery"], img: categoryImages["mobile"] },
  { id: 10, name: "Motorola Moto G54", brand: "Motorola", category: "electronics", price: 19999, rating: 4.1, instock: true, comments: ["Clean UI", "Good display"], img: categoryImages["mobile"] },

  
  { id: 11, name: "MacBook Air M2", brand: "Apple", category: "electronics", price: 119999, rating: 4.9, instock: true, comments: ["Blazing fast!", "Light & sleek"], img: categoryImages["laptop"] },
  { id: 12, name: "Dell XPS 13", brand: "Dell", category: "electronics", price: 99999, rating: 4.7, instock: true, comments: ["Beautiful screen", "Great performance"], img: categoryImages["laptop"] },
  { id: 13, name: "HP Spectre x360", brand: "HP", category: "electronics", price: 109999, rating: 4.6, instock: false, comments: ["2‑in‑1 is cool", "Battery good"], img: categoryImages["laptop"] },
  { id: 14, name: "Lenovo ThinkPad X1", brand: "Lenovo", category: "electronics", price: 129999, rating: 4.8, instock: true, comments: ["Business classic", "Tough build"], img: categoryImages["laptop"] },
  { id: 15, name: "ASUS ROG Strix", brand: "ASUS", category: "electronics", price: 139999, rating: 4.7, instock: true, comments: ["Gaming beast", "RGB vibes"], img: categoryImages["laptop"] },
  { id: 16, name: "Acer Swift 3", brand: "Acer", category: "electronics", price: 64999, rating: 4.4, instock: true, comments: ["Great everyday laptop"], img: categoryImages["laptop"] },
  { id: 17, name: "MSI GF63", brand: "MSI", category: "electronics", price: 79999, rating: 4.3, instock: true, comments: ["Good gaming on budget"], img: categoryImages["laptop"] },
  { id: 18, name: "Microsoft Surface", brand: "Microsoft", category: "electronics", price: 119999, rating: 4.5, instock: false, comments: ["Premium feel", "Great display"], img: categoryImages["laptop"] },
  { id: 19, name: "HP Pavilion", brand: "HP", category: "electronics", price: 54999, rating: 4.2, instock: true, comments: ["Good value"], img: categoryImages["laptop"] },
  { id: 20, name: "Dell Inspiron", brand: "Dell", category: "electronics", price: 52999, rating: 4.1, instock: true, comments: ["Decent everyday use"], img: categoryImages["laptop"] },

  
  { id: 21, name: "Sony WH‑1000XM5", brand: "Sony", category: "electronics", price: 25999, rating: 4.7, instock: true, comments: ["Best noise cancel"], img: categoryImages["headphones"] },
  { id: 22, name: "Apple AirPods Pro 2", brand: "Apple", category: "electronics", price: 24999, rating: 4.8, instock: true, comments: ["Perfect fit", "Great ANC"], img: categoryImages["headphones"] },
  { id: 23, name: "Bose QuietComfort 45", brand: "Bose", category: "electronics", price: 23999, rating: 4.6, instock: true, comments: ["Super comfy", "Rich sound"], img: categoryImages["headphones"] },
  { id: 24, name: "JBL Flip 6", brand: "JBL", category: "electronics", price: 9999, rating: 4.5, instock: true, comments: ["Loud & punchy"], img: categoryImages["headphones"] },
  { id: 25, name: "Beats Studio³", brand: "Beats", category: "electronics", price: 21999, rating: 4.4, instock: false, comments: ["Bass heavy!", "Stylish"], img: categoryImages["headphones"] },

  
  { id: 26, name: "Nike Air Max 270", brand: "Nike", category: "footwear", price: 12000, rating: 4.5, instock: true, comments: ["Super comfy", "Trendy design"], img: categoryImages["footwear"] },
  { id: 27, name: "Adidas Ultraboost", brand: "Adidas", category: "footwear", price: 15000, rating: 4.6, instock: true, comments: ["Great running shoes", "High quality"], img: categoryImages["footwear"] },
  { id: 28, name: "Puma RS-X", brand: "Puma", category: "footwear", price: 8000, rating: 4.2, instock: true, comments: ["Stylish sneakers", "Good grip"], img: categoryImages["footwear"] },
  { id: 29, name: "Reebok Classic", brand: "Reebok", category: "footwear", price: 7500, rating: 4.1, instock: true, comments: ["Comfortable daily wear", "Lightweight"], img: categoryImages["footwear"] },
  { id: 30, name: "Skechers Go Walk", brand: "Skechers", category: "footwear", price: 7000, rating: 4.3, instock: true, comments: ["Perfect for walking", "Very light"], img: categoryImages["footwear"] },

  
  { id: 31, name: "Levi's 501 Jeans", brand: "Levi's", category: "clothing", price: 4500, rating: 4.5, instock: true, comments: ["Perfect fit", "Classic style"], img: categoryImages["clothing"] },
  { id: 32, name: "Zara Casual Shirt", brand: "Zara", category: "clothing", price: 2999, rating: 4.2, instock: true, comments: ["Good material", "Trendy look"], img: categoryImages["clothing"] },
  { id: 33, name: "H&M Hoodie", brand: "H&M", category: "clothing", price: 1999, rating: 4.0, instock: true, comments: ["Cozy & warm", "Nice color"], img: categoryImages["clothing"] },
  { id: 34, name: "Uniqlo T-Shirt", brand: "Uniqlo", category: "clothing", price: 999, rating: 4.1, instock: true, comments: ["Soft fabric", "Good daily wear"], img: categoryImages["clothing"] },
  { id: 35, name: "Tommy Hilfiger Polo", brand: "Tommy Hilfiger", category: "clothing", price: 3499, rating: 4.3, instock: true, comments: ["Stylish & comfy", "Good quality"], img: categoryImages["clothing"] },

  
  { id: 36, name: "Philips Air Fryer", brand: "Philips", category: "home appliances", price: 7999, rating: 4.5, instock: true, comments: ["Healthy cooking", "Easy to use"], img: categoryImages["home_appliances"] },
  { id: 37, name: "Samsung Microwave Oven", brand: "Samsung", category: "home appliances", price: 6999, rating: 4.3, instock: true, comments: ["Heats evenly", "Compact design"], img: categoryImages["home_appliances"] },
  { id: 38, name: "LG Refrigerator 260L", brand: "LG", category: "home appliances", price: 28999, rating: 4.6, instock: false, comments: ["Spacious", "Energy efficient"], img: categoryImages["home_appliances"] },
  { id: 39, name: "Bajaj Mixer Grinder", brand: "Bajaj", category: "home appliances", price: 2999, rating: 4.2, instock: true, comments: ["Good performance", "Compact size"], img: categoryImages["home_appliances"] },
  { id: 40, name: "Dyson Vacuum Cleaner", brand: "Dyson", category: "home appliances", price: 39999, rating: 4.7, instock: true, comments: ["Powerful suction", "Easy to clean"], img: categoryImages["home_appliances"] },

 
  { id: 41, name: "Atomic Habits", brand: "Penguin", category: "books", price: 499, rating: 4.9, instock: true, comments: ["Life-changing", "Excellent read"], img: categoryImages["books"] },
  { id: 42, name: "The Alchemist", brand: "HarperCollins", category: "books", price: 399, rating: 4.8, instock: true, comments: ["Inspirational", "Beautiful story"], img: categoryImages["books"] },
  { id: 43, name: "Think and Grow Rich", brand: "Rupa Publications", category: "books", price: 299, rating: 4.7, instock: true, comments: ["Motivating", "Classic"], img: categoryImages["books"] },
  { id: 44, name: "Rich Dad Poor Dad", brand: "Hachette", category: "books", price: 349, rating: 4.6, instock: true, comments: ["Eye-opening", "Great advice"], img: categoryImages["books"] },
  { id: 45, name: "The Power of Now", brand: "New World Library", category: "books", price: 399, rating: 4.5, instock: true, comments: ["Mindful reading", "Spiritual"], img: categoryImages["books"] },


  
  { id: 46, name: "Nike Revolution 6", brand: "Nike", category: "footwear", price: 6500, rating: 4.3, instock: true, comments: ["Lightweight", "Good for running"], img: categoryImages["footwear"] },
  { id: 47, name: "Adidas Samba", brand: "Adidas", category: "footwear", price: 7000, rating: 4.4, instock: true, comments: ["Classic look", "Comfortable"], img: categoryImages["footwear"] },
  { id: 48, name: "Puma Future Rider", brand: "Puma", category: "footwear", price: 6000, rating: 4.2, instock: true, comments: ["Stylish colors", "Nice cushioning"], img: categoryImages["footwear"] },
  { id: 49, name: "Reebok Zig Kinetica", brand: "Reebok", category: "footwear", price: 7200, rating: 4.3, instock: true, comments: ["Good support", "Trendy"], img: categoryImages["footwear"] },
  { id: 50, name: "Skechers D'Lites", brand: "Skechers", category: "footwear", price: 6800, rating: 4.1, instock: true, comments: ["Comfortable", "Perfect for casual wear"], img: categoryImages["footwear"] },

  
  { id: 51, name: "Levi's Skinny Jeans", brand: "Levi's", category: "clothing", price: 4700, rating: 4.5, instock: true, comments: ["Great fit", "Durable material"], img: categoryImages["clothing"] },
  { id: 52, name: "Zara Formal Shirt", brand: "Zara", category: "clothing", price: 3200, rating: 4.3, instock: true, comments: ["Sharp look", "Comfortable"], img: categoryImages["clothing"] },
  { id: 53, name: "H&M Sweatshirt", brand: "H&M", category: "clothing", price: 2200, rating: 4.0, instock: true, comments: ["Cozy", "Soft fabric"], img: categoryImages["clothing"] },
  { id: 54, name: "Uniqlo Linen Shirt", brand: "Uniqlo", category: "clothing", price: 1400, rating: 4.1, instock: true, comments: ["Light & breathable", "Summer perfect"], img: categoryImages["clothing"] },
  { id: 55, name: "Tommy Hilfiger Jeans", brand: "Tommy Hilfiger", category: "clothing", price: 3900, rating: 4.4, instock: true, comments: ["Stylish", "Premium quality"], img: categoryImages["clothing"] },

  
  { id: 56, name: "Panasonic Rice Cooker", brand: "Panasonic", category: "home_appliances", price: 3999, rating: 4.3, instock: true, comments: ["Cook perfect rice", "Easy cleaning"], img: categoryImages["home_appliances"] },
  { id: 57, name: "IFB Washing Machine", brand: "IFB", category: "home_appliances", price: 21999, rating: 4.5, instock: true, comments: ["Efficient cleaning", "Good capacity"], img: categoryImages["home_appliances"] },
  { id: 58, name: "Prestige Pressure Cooker", brand: "Prestige", category: "home_appliances", price: 2999, rating: 4.4, instock: true, comments: ["Safe & sturdy", "Quick cooking"], img: categoryImages["home_appliances"] },
  { id: 59, name: "Havells Water Heater", brand: "Havells", category: "home_appliances", price: 7499, rating: 4.2, instock: true, comments: ["Quick heating", "Reliable"], img: categoryImages["home_appliances"] },
  { id: 60, name: "BlueStar AC 1.5 Ton", brand: "BlueStar", category: "home_appliances", price: 34999, rating: 4.6, instock: false, comments: ["Powerful cooling", "Low noise"], img: categoryImages["home_appliances"] },

  
  { id: 61, name: "Men are from Mars ,and Women are from Venus", brand: "HarperOne", category: "books", price: 499, rating: 4.5, instock: true, comments: ["Refreshing perspective", "Funny & wise"], img: categoryImages["books"] },
  { id: 62, name: "Deep Work", brand: "Grand Central", category: "books", price: 599, rating: 4.6, instock: true, comments: ["Focus tips", "Highly practical"], img: categoryImages["books"] },
  { id: 63, name: "Sapiens", brand: "Harper", category: "books", price: 699, rating: 4.8, instock: true, comments: ["Mind-blowing history", "Engaging read"], img: categoryImages["books"] },
  { id: 64, name: "Homo Deus", brand: "Harper", category: "books", price: 799, rating: 4.7, instock: true, comments: ["Fascinating future insights"], img: categoryImages["books"] },
  { id: 65, name: "Grit", brand: "Penguin", category: "books", price: 399, rating: 4.5, instock: true, comments: ["Motivational", "Inspiring stories"], img: categoryImages["books"] },

  
  { id: 66, name: "Yonex Badminton Racket", brand: "Yonex", category: "sports", price: 6999, rating: 4.6, instock: true, comments: ["Lightweight", "Good control"], img: categoryImages["sports"] },
  { id: 67, name: "Nike Football", brand: "Nike", category: "sports", price: 2499, rating: 4.5, instock: true, comments: ["Perfect grip", "Durable"], img: categoryImages["sports"] },
  { id: 68, name: "Adidas Cricket Bat", brand: "Adidas", category: "sports", price: 7999, rating: 4.4, instock: true, comments: ["Balanced", "Great for practice"], img: categoryImages["sports"] },
  { id: 69, name: "Reebok Dumbbells Set", brand: "Reebok", category: "sports", price: 3499, rating: 4.3, instock: true, comments: ["Solid build", "Great for workouts"], img: categoryImages["sports"] },
  { id: 70, name: "Cosco Volleyball", brand: "Cosco", category: "sports", price: 1499, rating: 4.2, instock: true, comments: ["Good bounce", "Durable material"], img: categoryImages["sports"] },

  
  { id: 71, name: "Ray-Ban Aviators", brand: "Ray-Ban", category: "fashion", price: 8999, rating: 4.7, instock: true, comments: ["Classic style", "UV protection"], img: categoryImages["fashion_acessories"] },
  { id: 72, name: "Fossil Leather Wallet", brand: "Fossil", category: "fashion", price: 3499, rating: 4.5, instock: true, comments: ["Premium leather", "Spacious"], img: categoryImages["fashion_acessories"] },
  { id: 73, name: "Michael Kors Handbag", brand: "Michael Kors", category: "fashion", price: 12999, rating: 4.6, instock: true, comments: ["Elegant design", "Quality material"], img: categoryImages["fashion_acessories"] },
  { id: 74, name: "Titan Analog Watch", brand: "Titan", category: "fashion", price: 5999, rating: 4.4, instock: true, comments: ["Sleek look", "Durable"], img: categoryImages["fashion_acessories"] },
  { id: 75, name: "Casio Digital Watch", brand: "Casio", category: "fashion", price: 1999, rating: 4.3, instock: true, comments: ["Classic digital style", "Reliable"], img: categoryImages["fashion_acessories"] },

  
  { id: 76, name: "Ikea Study Table", brand: "Ikea", category: "furniture", price: 10999, rating: 4.4, instock: true, comments: ["Spacious", "Sturdy"], img: categoryImages["furniture"] },
  { id: 77, name: "HomeTown Office Chair", brand: "HomeTown", category: "furniture", price: 6999, rating: 4.3, instock: true, comments: ["Comfortable", "Ergonomic"], img: categoryImages["furniture"] },
  { id: 78, name: "Urban Ladder Sofa", brand: "Urban Ladder", category: "furniture", price: 34999, rating: 4.5, instock: true, comments: ["Soft cushions", "Elegant look"], img: categoryImages["furniture"] },
  { id: 79, name: "Godrej Wardrobe", brand: "Godrej", category: "furniture", price: 25999, rating: 4.4, instock: true, comments: ["Spacious", "Good finish"], img: categoryImages["furniture"] },
  { id: 80, name: "Ikea Bookshelf", brand: "Ikea", category: "furniture", price: 7999, rating: 4.3, instock: true, comments: ["Stylish & sturdy"], img: categoryImages["furniture"] },

  
  { id: 81, name: "Apple Watch Series 9", brand: "Apple", category: "tech", price: 39999, rating: 4.8, instock: true, comments: ["Tracks health perfectly"], img: categoryImages["tech_gadget"] },
  { id: 82, name: "Fitbit Charge 7", brand: "Fitbit", category: "tech", price: 14999, rating: 4.5, instock: true, comments: ["Great for workouts"], img: categoryImages["tech_gadget"] },
  { id: 83, name: "Kindle Paperwhite", brand: "Amazon", category: "tech", price: 9999, rating: 4.6, instock: true, comments: ["Read anywhere", "E-ink display"], img: categoryImages["tech_gadget"] },
  { id: 84, name: "GoPro Hero 12", brand: "GoPro", category: "tech", price: 44999, rating: 4.7, instock: true, comments: ["Adventure ready", "Excellent video"], img: categoryImages["tech_gadget"] },
  { id: 85, name: "DJI Mini 3 Pro", brand: "DJI", category: "tech", price: 89999, rating: 4.8, instock: true, comments: ["Compact drone", "Amazing shots"], img: categoryImages["tech_gadget"] },

  
  { id: 86, name: "American Tourister Luggage", brand: "American Tourister", category: "travel", price: 10999, rating: 4.5, instock: true, comments: ["Durable", "Good capacity"], img: categoryImages["travel"] },
  { id: 87, name: "Samsonite Backpack", brand: "Samsonite", category: "travel", price: 7999, rating: 4.4, instock: true, comments: ["Lightweight", "Strong"], img: categoryImages["travel"] },
  { id: 88, name: "Wildcraft Hiking Bag", brand: "Wildcraft", category: "travel", price: 6999, rating: 4.3, instock: true, comments: ["Comfortable straps", "Spacious"], img: categoryImages["travel"] },
  { id: 89, name: "Skybags Trolley", brand: "Skybags", category: "travel", price: 8999, rating: 4.4, instock: true, comments: ["Smooth wheels", "Strong handle"], img: categoryImages["travel"] },
  { id: 90, name: "Puma Travel Duffel", brand: "Puma", category: "travel", price: 5999, rating: 4.2, instock: true, comments: ["Good for short trips"], img: categoryImages["travel"] },

  
  { id: 91, name: "L'Oreal Hair Serum", brand: "L'Oreal", category: "beauty", price: 1299, rating: 4.5, instock: true, comments: ["Smooth & shiny hair"], img: categoryImages["beauty"] },
  { id: 92, name: "Maybelline Lipstick", brand: "Maybelline", category: "beauty", price: 499, rating: 4.4, instock: true, comments: ["Long-lasting", "Bright colors"], img: categoryImages["beauty"] },
  { id: 93, name: "Nivea Face Cream", brand: "Nivea", category: "beauty", price: 699, rating: 4.3, instock: true, comments: ["Soft skin", "Good moisturizer"], img: categoryImages["beauty"] },
  { id: 94, name: "Revlon Nail Polish", brand: "Revlon", category: "beauty", price: 299, rating: 4.2, instock: true, comments: ["Vibrant colors", "Smooth application"], img: categoryImages["beauty"] },
  { id: 95, name: "Lakme Foundation", brand: "Lakme", category: "beauty", price: 799, rating: 4.3, instock: true, comments: ["Good coverage", "Lightweight"], img: categoryImages["beauty"] },

  
  { id: 96, name: "Samsung Galaxy Buds 3", brand: "Samsung", category: "electronics", price: 9999, rating: 4.5, instock: true, comments: ["Good sound quality"], img: categoryImages["electronic_gadget"] },
  { id: 97, name: "Apple HomePod Mini", brand: "Apple", category: "electronics", price: 11999, rating: 4.6, instock: true, comments: ["Compact & clear sound"], img: categoryImages["electronic_gadget"] },
  { id: 98, name: "Logitech MX Master 3", brand: "Logitech", category: "electronics", price: 7999, rating: 4.7, instock: true, comments: ["Ergonomic & precise"], img: categoryImages["electronic_gadget"] },
  { id: 99, name: "Canon EOS M50", brand: "Canon", category: "electronics", price: 54999, rating: 4.8, instock: true, comments: ["Great beginner camera"], img: categoryImages["electronic_gadget"] },
  { id: 100, name: "Sony Alpha 7 IV", brand: "Sony", category: "electronics", price: 149999, rating: 4.9, instock: false, comments: ["Professional quality", "Amazing sensor"], img: categoryImages["electronic_gadget"] },

];
