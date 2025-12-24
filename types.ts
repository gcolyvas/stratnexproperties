export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse' | 'Condo' | 'Land' | 'Commercial';
  imageUrl: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export interface FilterState {
  query: string;
  minPrice: number;
  maxPrice: number;
  type: 'all' | Property['type'];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}