export interface VillaDetails {
  name: string;
  tagline: string;
  location: string;
  capacity: {
    guests: number;
    bedrooms: number;
    bathrooms: number;
    sqm: number;
  };
  pricing: {
    baseRateWeekday: number; // IDR per night
    weekendRate: number;     // IDR per night (Fri-Sun)
    cleaningFee: number;     // IDR flat
    taxRate: number;         // 10% PB1 Daerah
    minNights: number;
  };
  highlights: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  gallery: {
    url: string;
    caption: string;
    isPrimary?: boolean;
  }[];
}

export const VILLA_DATA: VillaDetails = {
  name: "The Maya Sanctuary & Ocean Cliff Villa",
  tagline: "Ultra-Private 3-Bedroom Cliffside Sanctuary in Uluwatu, Bali",
  location: "Pecatu, Uluwatu, Bali — Indonesia",
  capacity: {
    guests: 6,
    bedrooms: 3,
    bathrooms: 4,
    sqm: 480,
  },
  pricing: {
    baseRateWeekday: 6500000, // Rp 6.500.000 / night
    weekendRate: 7800000,     // Rp 7.800.000 / night
    cleaningFee: 750000,      // Rp 750.000
    taxRate: 0.10,            // 10% PB1
    minNights: 1,
  },
  highlights: [
    "3 King Master Suites with Panoramic Ocean View",
    "18-Meter Infinity Heated Pool & Heated Jacuzzi",
    "Private Butler & Dedicated Chef on Demand",
    "Exclusive Floating Breakfast & Afternoon Tea",
    "High-Speed Starlink WiFi (250+ Mbps)",
    "Bespoke Sonos Sound System & Smart Keyless Entry",
  ],
  features: [
    {
      title: "Private Infinity Pool & Jacuzzi",
      description: "Kolam renang infinity 18m menghadap langsung samudera Hindia dengan jacuzzi air hangat bersuhu presisi.",
      icon: "waves",
    },
    {
      title: "Chef on Demand & Floating Breakfast",
      description: "Layanan koki pribadi untuk hidangan gourmet multi-course dan pengalaman floating breakfast ikonik di kolam renang.",
      icon: "utensils",
    },
    {
      title: "Dedicated 24/7 Villa Butler",
      description: "Pelayanan butler personal untuk reservasi beach club, concierge transportasi VIP, hingga housekeeping terjadwal.",
      icon: "user-check",
    },
    {
      title: "Starlink High-Speed WiFi & Sonos",
      description: "Koneksi internet satelit Starlink ultra-cepat stabil untuk remote work eksekutif dengan multi-room sound Sonos.",
      icon: "wifi",
    },
    {
      title: "Smart Keyless Entry & Security",
      description: "Akses digital pin code terenkripsi yang disesuaikan khusus untuk tiap tamu dengan keamanan 24 jam.",
      icon: "shield-check",
    },
    {
      title: "Wellness & Sunset Yoga Deck",
      description: "Dek terbuka kayu ulin menghadap tebing barat Uluwatu dengan pemandangan golden hour sunset tanpa halangan.",
      icon: "sun",
    },
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      caption: "Exterior Villa & Cliffside Infinity Pool",
      isPrimary: true,
    },
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      caption: "Master Bedroom dengan Ocean Horizon View",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Open-Concept Sunken Living & Dining Lounge",
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Bespoke Marble Ensuite Bathroom & Stone Tub",
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      caption: "Sunset Yoga Pavilion & Cliffside Daybed",
    },
  ],
};
