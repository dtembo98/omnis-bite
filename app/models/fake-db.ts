export type RestraurantType = {
  id: 1
  name?: string
  status: "Close" | "Open"
  rating?: number
  time?: string
}

export const Restraurants: RestraurantType[] = [
  {
    id: 1,
    name: "Kat’s Delicatessen",
    rating: 4.8,
    status: "Close",
    time: "05.45 PM",
  },
  {
    id: 1,
    name: "Veselka",
    rating: 4.5,
    status: "Close",
    time: "10.45 PM",
  },
  {
    id: 1,
    name: "Clinton St. Bankin",
    rating: 4.9,
    status: "Close",
    time: "05 00 PM",
  },
]
