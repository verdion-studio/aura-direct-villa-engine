export interface CalendarBlock {
  id: string;
  channel: 'Airbnb' | 'Booking.com' | 'Direct';
  channelIcon: string;
  guestName: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  nights: number;
  status: 'Confirmed' | 'Blocked' | 'Pending';
  colorBadge: string;
}

// Kalender mock feed untuk simulasi 2-way sync
export const INITIAL_SYNCED_BOOKINGS: CalendarBlock[] = [
  {
    id: "AB-882194",
    channel: "Airbnb",
    channelIcon: "airbnb",
    guestName: "Julian Vance (Airbnb Superhost Guest)",
    checkIn: "2026-10-12",
    checkOut: "2026-10-15",
    nights: 3,
    status: "Confirmed",
    colorBadge: "bg-rose-500/10 border-rose-500/30 text-rose-300",
  },
  {
    id: "BK-440192",
    channel: "Booking.com",
    channelIcon: "booking",
    guestName: "Elena Rostova (Genius Level 3)",
    checkIn: "2026-10-18",
    checkOut: "2026-10-22",
    nights: 4,
    status: "Confirmed",
    colorBadge: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  },
  {
    id: "DIR-009182",
    channel: "Direct",
    channelIcon: "direct",
    guestName: "Marcus Sterling (Aura Direct VIP)",
    checkIn: "2026-10-25",
    checkOut: "2026-10-28",
    nights: 3,
    status: "Confirmed",
    colorBadge: "bg-amber-500/10 border-amber-500/30 text-amber-300",
  },
];

export const ICAL_FEEDS_CONFIG = [
  {
    name: "Airbnb iCal Export Feed",
    url: "https://www.airbnb.com/calendar/ical/91823901.ics?s=c867201fa8b",
    lastSynced: "5 menit lalu",
    status: "Active (2-Way)",
    platform: "Airbnb",
  },
  {
    name: "Booking.com iCal Channel Feed",
    url: "https://admin.booking.com/hotel/hoteladmin/ical.html?t=617283b0-29c",
    lastSynced: "12 menit lalu",
    status: "Active (2-Way)",
    platform: "Booking.com",
  },
  {
    name: "Aura Direct Master Outgoing Feed",
    url: "https://auradirect.veridionstudio.com/api/calendar/master-villa.ics",
    lastSynced: "Real-time Broadcast",
    status: "Broadcasting to OTAs",
    platform: "Direct Engine",
  },
];
