import { type Location } from "../hooks/useUserLocation";

export interface IBusiness {
  id: string;
  name: string;
  category: string;
  logo: string;
  ownerName: string;
  phone: string;
  email?: string;
  address: string;
  description?: string;
  media?: string[]; // URLs of images/videos
  latitude?: number;
  longitude?: number;
}
export const dummyBusiness: IBusiness[] = [
  // Add latitude and longitude for map integration in all records below
  {
    id: "2",
    name: "Indy Decor",
    category: "Home Decor",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "Alice Johnson",
    phone: "(555) 123-4567",
    email: "alice@indydecor.com",
    address: "123 Main St, Indianapolis, IN",
    description: "Your one-stop shop for home decor and furnishings.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  {
    id: "3",
    name: "Taste of India",
    category: "Restaurant",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "Raj Patel",
    phone: "(555) 987-6543",
    email: "raj@tasteofindia.com",
    address: "789 Curry St, Indianapolis, IN",
    description: "Authentic Indian cuisine with a modern twist.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  {
    id: "4",
    name: "Bloom Beauty Studio",
    category: "Salon & Spa",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "Maya Singh",
    phone: "(555) 555-1212",
    email: "maya@bloombeautystudio.com",
    address: "456 Elm St, Indianapolis, IN",
    description: "A serene escape for all your beauty needs.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  {
    id: "5",
    name: "TechFix Mobile Repair",
    category: "Electronics Repair",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "David Lee",
    phone: "(555) 222-3333",
    email: "david@techfix.com",
    address: "321 Tech Ave, Indianapolis, IN",
    description: "Fast and reliable repair services for all your devices.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  {
    id: "6",
    name: "GreenLeaf Grocers",
    category: "Grocery",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "Sara Green",
    phone: "(555) 444-5555",
    email: "sara@greenleafgrocers.com",
    address: "654 Market St, Indianapolis, IN",
    description: "Fresh, organic, and locally sourced groceries.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  {
    id: "7",
    name: "Yoga Roots",
    category: "Fitness & Wellness",
    logo: "https://placehold.net/building-600x400.png",
    ownerName: "Lena Martinez",
    phone: "(555) 666-7777",
    email: "lena@yogaroots.com",
    address: "987 Zen Ln, Indianapolis, IN",
    description: "Find your balance with our yoga and wellness classes.",
    media: [
      "https://placehold.net/building-600x400.png",
      "https://placehold.net/building-600x400.png",
    ],
  },
  //   { id: 8, name: "Little Learners Preschool", category: "Education" },
  //   { id: 9, name: "Urban Tailors", category: "Clothing & Alterations" },
  //   { id: 10, name: "Café Chaiwala", category: "Restaurant" },
  //   { id: 11, name: "ShutterSoul Photography", category: "Photography" },
  //   { id: 12, name: "Pet Haven", category: "Pet Services" },
  //   { id: 13, name: "Akkshita Creations", category: "Event Accessories" },
  //   { id: 14, name: "Craft & Clay Studio", category: "Art & Hobby" },
  //   { id: 15, name: "The Book Nook", category: "Bookstore" },
  //   { id: 16, name: "Saree Sutra", category: "Clothing & Alterations" },
  //   { id: 17, name: "FixIt Plumbing Co.", category: "Home Services" },
  //   { id: 18, name: "Glow Dental", category: "Healthcare" },
  //   { id: 19, name: "RideOn Bikes", category: "Sports & Outdoors" },
  //   { id: 20, name: "Sweet Treats Bakery", category: "Bakery & Cafe" },
  //   { id: 21, name: "Zen Massage Therapy", category: "Salon & Spa" },
  //   { id: 22, name: "CodeWithApul", category: "Tech Services" },
  //   { id: 23, name: "Royal Events", category: "Event Planning" },
  //   { id: 24, name: "Desi Threads", category: "Clothing & Alterations" },
  //   { id: 25, name: "Eco Cleaners", category: "Laundry & Dry Cleaning" },
];

export const dummyLocations: Location[] = [
  {
    city: "Indianapolis",
    lat: 39.7684,
    lng: -86.1581,
    source: "manual",
  },
  {
    city: "Chicago",
    lat: 41.8781,
    lng: -87.6298,
    source: "manual",
  },
  {
    city: "New York",
    lat: 40.7128,
    lng: -74.006,
    source: "manual",
  },
  {
    city: "Los Angeles",
    lat: 34.0522,
    lng: -118.2437,
    source: "manual",
  },
  {
    city: "San Francisco",
    lat: 37.7749,
    lng: -122.4194,
    source: "manual",
  },
  {
    city: "Austin",
    lat: 30.2672,
    lng: -97.7431,
    source: "manual",
  },
  {
    city: "Seattle",
    lat: 47.6062,
    lng: -122.3321,
    source: "manual",
  },
  {
    city: "Denver",
    lat: 39.7392,
    lng: -104.9903,
    source: "manual",
  },
  {
    city: "Boston",
    lat: 42.3601,
    lng: -71.0589,
    source: "manual",
  },
  {
    city: "Atlanta",
    lat: 33.749,
    lng: -84.388,
    source: "manual",
  },
  {
    city: "Miami",
    lat: 25.7617,
    lng: -80.1918,
    source: "manual",
  },
  {
    city: "Phoenix",
    lat: 33.4484,
    lng: -112.074,
    source: "manual",
  },
  {
    city: "Dallas",
    lat: 32.7767,
    lng: -96.797,
    source: "manual",
  },
  {
    city: "Houston",
    lat: 29.7604,
    lng: -95.3698,
    source: "manual",
  },
  {
    city: "Minneapolis",
    lat: 44.9778,
    lng: -93.265,
    source: "manual",
  },
  {
    city: "Portland",
    lat: 45.5051,
    lng: -122.675,
    source: "manual",
  },
  {
    city: "San Diego",
    lat: 32.7157,
    lng: -117.1611,
    source: "manual",
  },
  {
    city: "Las Vegas",
    lat: 36.1699,
    lng: -115.1398,
    source: "manual",
  },
  {
    city: "Orlando",
    lat: 28.5383,
    lng: -81.3792,
    source: "manual",
  },
  {
    city: "Detroit",
    lat: 42.3314,
    lng: -83.0458,
    source: "manual",
  },
  {
    city: "Columbus",
    lat: 39.9612,
    lng: -82.9988,
    source: "manual",
  },
  {
    city: "Charlotte",
    lat: 35.2271,
    lng: -80.8431,
    source: "manual",
  },
  {
    city: "Nashville",
    lat: 36.1627,
    lng: -86.7816,
    source: "manual",
  },
  {
    city: "Toronto",
    lat: 43.651,
    lng: -79.347,
    source: "manual",
  },
  {
    city: "London",
    lat: 51.5074,
    lng: -0.1278,
    source: "manual",
  },
];

// State > District > Block > Village/Area

// Bihar > Gopalganj > Phuleria > Gularbaga

// Location Search .... > Gularbaga ---->
//  ----- Gularbaga, Phuleria, Gopalganj, Bihar
//  ------ Gularbaga, Block 2, Gopalganj, Bihar
//  ------- Gularbaga, Block 2, Gopalganj, Bihar
//  ------- Gularbaga, Bihar
// Data Migration -------------
// State ->* District ->* Block ->* Village
