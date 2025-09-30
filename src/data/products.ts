import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Plain Makhana',
    description: 'Premium quality plain fox nuts, perfectly popped and ready to eat. Rich in protein and fiber, low in calories. Perfect for healthy snacking.',
    price: 12.99,
    image_url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Plain',
    weight: '250g',
    stock: 100,
    featured: true
  },
  {
    id: '2',
    name: 'Roasted Salted Makhana',
    description: 'Crispy roasted makhana with a perfect hint of sea salt. A guilt-free snack that satisfies your cravings while keeping you healthy.',
    price: 14.99,
    image_url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Roasted',
    weight: '250g',
    stock: 85,
    featured: true
  },
  {
    id: '3',
    name: 'Masala Makhana',
    description: 'Spicy and flavorful masala makhana made with authentic Indian spices. Perfect for those who love a kick in their snacks.',
    price: 15.99,
    image_url: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flavored',
    weight: '200g',
    stock: 75,
    featured: true
  },
  {
    id: '4',
    name: 'Caramel Makhana',
    description: 'Sweet and crunchy caramel-coated makhana. A healthy alternative to traditional caramel popcorn, perfect for dessert cravings.',
    price: 16.99,
    image_url: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flavored',
    weight: '200g',
    stock: 60,
    featured: false
  },
  {
    id: '5',
    name: 'Peri Peri Makhana',
    description: 'Tangy and spicy peri peri flavored makhana. Bold flavors meet healthy snacking in this irresistible treat.',
    price: 15.99,
    image_url: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flavored',
    weight: '200g',
    stock: 70,
    featured: false
  },
  {
    id: '6',
    name: 'Cheese & Herbs Makhana',
    description: 'Savory cheese and herb flavored makhana. Rich, creamy taste without the guilt. Perfect for evening snacks.',
    price: 16.99,
    image_url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flavored',
    weight: '200g',
    stock: 65,
    featured: false
  },
  {
    id: '7',
    name: 'Bulk Plain Makhana',
    description: 'Economy pack of premium plain makhana. Perfect for families or regular consumers. Best value for money.',
    price: 39.99,
    image_url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Plain',
    weight: '1kg',
    stock: 50,
    featured: false
  },
  {
    id: '8',
    name: 'Chocolate Makhana',
    description: 'Delicious chocolate-coated makhana. Satisfy your sweet tooth while staying healthy. Kids love this!',
    price: 17.99,
    image_url: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Flavored',
    weight: '200g',
    stock: 55,
    featured: true
  }
];