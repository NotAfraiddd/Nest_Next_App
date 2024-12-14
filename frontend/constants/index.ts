import { Order, OrderStatus, Restaurant, User } from "@/interface/common";

export const CUISINE_LIST = [
    "American",
    "BBQ",
    "Breakfast",
    "Burgers",
    "Cafe",
    "Chinese",
    "Desserts",
    "French",
    "Greek",
    "Healthy",
    "Indian",
    "Italian",
    "Japanese",
    "Mexican",
    "Noodles",
    "Organic",
    "Pasta",
    "Pizza",
    "Salads",
    "Seafood",
    "Spanish",
    "Steak",
    "Sushi",
    "Tacos",
    "Tapas",
    "Vegan",
  ];

export const SORT_OPTIONS = [
    {
      label: 'Best match',
      value: 'bestMatch',
    },
    {
      label: 'Delivery price',
      value: 'deliveryPrice',
    },
    {
      label: 'Estimated delivery time',
      value: 'estimatedDeliveryTime',
    },
];

export const restaurants: Restaurant[] = [
  {
    _id: "1",
    user: "user123",
    restaurantName: "The Gourmet Pizza",
    city: "London",
    country: "UK",
    deliveryPrice: 500,
    estimatedDeliveryTime: 30,
    cuisines: ["Italian", "Pizza", "Vegetarian"],
    menuItems: [
      { _id: "m1", name: "Margherita Pizza", price: 899 },
      { _id: "m2", name: "Pepperoni Pizza", price: 999 },
      { _id: "m3", name: "Vegetarian Pizza", price: 1099 },
    ],
    imageUrl: "https://cdn.pixabay.com/photo/2020/04/29/03/30/pizza-5107039_960_720.jpg",
    lastUpdated: "2024-12-14T10:00:00Z",
  },
  {
    _id: "2",
    user: "user456",
    restaurantName: "Sushi World",
    city: "Tokyo",
    country: "Japan",
    deliveryPrice: 400,
    estimatedDeliveryTime: 25,
    cuisines: ["Japanese", "Sushi", "Seafood"],
    menuItems: [
      { _id: "m4", name: "California Roll", price: 1200 },
      { _id: "m5", name: "Tuna Sashimi", price: 1500 },
      { _id: "m6", name: "Salmon Nigiri", price: 1300 },
    ],
    imageUrl: "https://image.tienphong.vn/w890/Uploaded/2024/rkznae/2019_11_14/goc_canh_bao_an_nhieu_sushi_de_bi_nhiem_khuan_0a0e6807_GDEF.jpg",
    lastUpdated: "2024-12-14T09:00:00Z",
  },
  {
    _id: "3",
    user: "user789",
    restaurantName: "Taco Fiesta",
    city: "Los Angeles",
    country: "USA",
    deliveryPrice: 300,
    estimatedDeliveryTime: 20,
    cuisines: ["Mexican", "Tacos", "Burritos"],
    menuItems: [
      { _id: "m7", name: "Beef Taco", price: 700 },
      { _id: "m8", name: "Chicken Burrito", price: 950 },
      { _id: "m9", name: "Veggie Quesadilla", price: 850 },
    ],
    imageUrl: "https://daylambanh.edu.vn/wp-content/uploads/2019/06/banh-tacos-cua-mexico.jpg",
    lastUpdated: "2024-12-14T08:30:00Z",
  },
  {
    _id: "4",
    user: "user321",
    restaurantName: "Pasta Delight",
    city: "Rome",
    country: "Italy",
    deliveryPrice: 600,
    estimatedDeliveryTime: 40,
    cuisines: ["Italian", "Pasta", "Traditional"],
    menuItems: [
      { _id: "m10", name: "Spaghetti Carbonara", price: 1100 },
      { _id: "m11", name: "Lasagna", price: 1300 },
      { _id: "m12", name: "Penne Arrabbiata", price: 1000 },
    ],
    imageUrl: "https://media.istockphoto.com/id/585769692/vi/anh/spaghetti-ngon-%C4%91%C6%B0%E1%BB%A3c-ph%E1%BB%A5c-v%E1%BB%A5-tr%C3%AAn-%C4%91%C4%A9a-%C4%91en.jpg?s=612x612&w=0&k=20&c=I-NLEeJj8VjGPoWcA2a36Q8vHyR6VEqVJI72TNOGnto=",
    lastUpdated: "2024-12-14T07:00:00Z",
  },
  {
    _id: "5",
    user: "user654",
    restaurantName: "Burgers & Fries",
    city: "New York",
    country: "USA",
    deliveryPrice: 500,
    estimatedDeliveryTime: 15,
    cuisines: ["American", "Burgers", "Fast Food"],
    menuItems: [
      { _id: "m13", name: "Cheeseburger", price: 950 },
      { _id: "m14", name: "Fries", price: 450 },
      { _id: "m15", name: "Chicken Nuggets", price: 650 },
    ],
    imageUrl: "https://media.istockphoto.com/id/2157436773/vi/anh/cafeteria-double-beef-burger-gourmet.jpg?s=2048x2048&w=is&k=20&c=OwaoXyF68_sfgMeAaHCxMniDG5PuAv0y2Lz34piKaZM=",
    lastUpdated: "2024-12-14T06:00:00Z",
  },
];

export const currentUser: User = {
  _id: "12345",
  email: "johndoe@example.com",
  name: "John Doe",
  addressLine1: "123 Main St",
  city: "Hanoi",
  country: "Vietnam",
};

export const orders: Order[] = [
  {
    _id: "order12345",
    restaurant: {
      _id: "5",
      user: "user654",
      restaurantName: "Burgers & Fries",
      city: "New York",
      country: "USA",
      deliveryPrice: 500,
      estimatedDeliveryTime: 15,
      cuisines: ["American", "Burgers", "Fast Food"],
      menuItems: [
        { _id: "m13", name: "Cheeseburger", price: 950 },
        { _id: "m14", name: "Fries", price: 450 },
        { _id: "m15", name: "Chicken Nuggets", price: 650 },
      ],
      imageUrl: "https://media.istockphoto.com/id/2157436773/vi/anh/cafeteria-double-beef-burger-gourmet.jpg?s=2048x2048&w=is&k=20&c=OwaoXyF68_sfgMeAaHCxMniDG5PuAv0y2Lz34piKaZM=",
      lastUpdated: "2024-12-14T06:00:00Z",
    },
    user: {
      _id: "user101",
      email: "john.doe@example.com",
      name: "John Doe",
      addressLine1: "123 Elm Street",
      city: "London",
      country: "UK",
    },
    cartItems: [
      {
        menuItemId: "menu123",
        name: "Spaghetti Carbonara",
        quantity: "2",
      },
      {
        menuItemId: "menu124",
        name: "Cappuccino",
        quantity: "1",
      },
    ],
    deliveryDetails: {
      name: "John Doe",
      addressLine1: "123 Elm Street",
      city: "London",
      email: "john.doe@example.com",
    },
    totalAmount: 2500,  // In pence (i.e., £25.00)
    status: "placed" as OrderStatus,  // Order is placed, not yet processed
    createdAt: "2024-12-14T12:00:00Z",
    restaurantId: "restaurant6789",
  },
  {
    _id: "order98765",
    restaurant: {
      _id: "4",
      user: "user321",
      restaurantName: "Pasta Delight",
      city: "Rome",
      country: "Italy",
      deliveryPrice: 600,
      estimatedDeliveryTime: 40,
      cuisines: ["Italian", "Pasta", "Traditional"],
      menuItems: [
        { _id: "m10", name: "Spaghetti Carbonara", price: 1100 },
        { _id: "m11", name: "Lasagna", price: 1300 },
        { _id: "m12", name: "Penne Arrabbiata", price: 1000 },
      ],
      imageUrl: "https://media.istockphoto.com/id/585769692/vi/anh/spaghetti-ngon-%C4%91%C6%B0%E1%BB%A3c-ph%E1%BB%A5c-v%E1%BB%A5-tr%C3%AAn-%C4%91%C4%A9a-%C4%91en.jpg?s=612x612&w=0&k=20&c=I-NLEeJj8VjGPoWcA2a36Q8vHyR6VEqVJI72TNOGnto=",
      lastUpdated: "2024-12-14T07:00:00Z",
    },
    user: {
      _id: "user202",
      email: "jane.doe@example.com",
      name: "Jane Doe",
      addressLine1: "456 Pine Street",
      city: "Tokyo",
      country: "Japan",
    },
    cartItems: [
      {
        menuItemId: "menu234",
        name: "California Roll",
        quantity: "1",
      },
      {
        menuItemId: "menu235",
        name: "Miso Soup",
        quantity: "2",
      },
    ],
    deliveryDetails: {
      name: "Jane Doe",
      addressLine1: "456 Pine Street",
      city: "Tokyo",
      email: "jane.doe@example.com",
    },
    totalAmount: 3500,  // In pence (i.e., ¥35.00)
    status: "delivered" as OrderStatus,  // Order has been delivered to the customer
    createdAt: "2024-12-13T15:30:00Z",
    restaurantId: "restaurant54321",
  },
];


  