import { Property } from './types';

export const APP_NAME = "StratNex Properties";

// Brand Identity
// Primary (Dark Navy): #142c40
// Accent (Grey): #A6A8AB

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Masaki Executive Villa',
    price: 850000,
    location: 'Masaki, Dar es Salaam',
    beds: 5,
    baths: 6,
    sqft: 5200,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop',
    description: 'Fully verified executive villa in the heart of Masaki. Features high security, swimming pool, and servant quarters. Title deed verified.',
    features: ['Swimming Pool', 'Electric Fence', 'Backup Generator', 'Servant Quarters', 'Verified Title Deed'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Zanzibar Beachfront Resort Plot',
    price: 450000,
    location: 'Nungwi, Zanzibar',
    beds: 0,
    baths: 0,
    sqft: 15000,
    type: 'Land',
    imageUrl: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=2573&auto=format&fit=crop',
    description: 'Prime beachfront investment land in Nungwi. Perfect for boutique hotel. Ownership verified with local authorities and ZIPA.',
    features: ['Direct Beach Access', 'ZIPA Approved', 'Water & Electricity', 'Road Access', 'Clear Ownership'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Oysterbay Luxury Apartment',
    price: 320000,
    location: 'Oysterbay, Dar es Salaam',
    beds: 3,
    baths: 3,
    sqft: 2100,
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop',
    description: 'Modern 3-bedroom apartment with ocean views. Secure compound, gym, and reliable utilities. Legal due diligence complete.',
    features: ['Ocean View', 'Gym', '24/7 Security', 'Elevator', 'Modern Kitchen'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Arusha Safari Estate',
    price: 650000,
    location: 'Njiro, Arusha',
    beds: 4,
    baths: 4,
    sqft: 3800,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    description: 'Tranquil estate with Kilimanjaro views. expansive gardens and modern amenities. Survey map and boundaries confirmed.',
    features: ['Mountain View', 'Large Garden', 'Borehole', 'Solar Power', 'Paved Access'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d622ca?q=80&w=2670&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    title: 'CBD Commercial Tower Floor',
    price: 1200000,
    location: 'City Centre, Dar es Salaam',
    beds: 0,
    baths: 4,
    sqft: 4000,
    type: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    description: 'Premium office space in iconic tower. High yield potential for investors. Full regulatory compliance verified.',
    features: ['Grade A Office', 'City Views', 'Parking', 'Fiber Internet', 'Reception'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    title: 'Kigamboni Gated Community',
    price: 150000,
    location: 'Kigamboni, Dar es Salaam',
    beds: 3,
    baths: 2,
    sqft: 1500,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2574&auto=format&fit=crop',
    description: 'Affordable modern living in a planned community. Perfect for young families or diaspora investment.',
    features: ['Community Park', 'Security', 'Tarmac Roads', 'Clean Water', 'Flexible Payment'],
    agent: {
      name: 'StratNex Advisor',
      phone: '+255 700 000 000',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop'
    }
  }
];