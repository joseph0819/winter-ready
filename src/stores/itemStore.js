import { writable } from "svelte/store";

/* ---------------------------------------------
   UI STATE
---------------------------------------------- */
export const showModal = writable(false);
export const activeFilter = writable("All");
export const focusCoords = writable(null);
export const selectedItem = writable(null);


/* ---------------------------------------------
   SINGLE PICKUP LOCATION (REALISTIC)
---------------------------------------------- */

export const MAIN_LOCATION = {
  name: "Bearcats Pantry – Stratford Ave",
  coords: [39.13123, -84.52191] // ← NEW COORDINATE
};


/* ---------------------------------------------
   SINGLE INVENTORY LIST (GROUPED ITEMS)
---------------------------------------------- */
export const itemList = writable([
  {
    id: "boots-male",
    title: "Male Boots",
    category: "Boots",
    icon: "🥾",
    quantity: 45,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Insulated male winter boots."
  },
  {
    id: "boots-female",
    title: "Female Boots",
    category: "Boots",
    icon: "🥾",
    quantity: 67,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Insulated female winter boots."
  },
  {
    id: "scarves",
    title: "Scarves",
    category: "Accessories",
    icon: "🧣",
    quantity: 89,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Warm knitted scarves."
  },
  {
    id: "gloves",
    title: "Gloves",
    category: "Accessories",
    icon: "🧤",
    quantity: 33,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Thick insulated gloves."
  },
  {
    id: "blankets",
    title: "Blankets",
    category: "Blankets",
    icon: "🛏️",
    quantity: 12,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Soft fleece blankets."
  },
  {
    id: "jackets",
    title: "Jackets",
    category: "Jackets",
    icon: "🧥",
    quantity: 56,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Winter thermal jackets."
  },
  {
    id: "foodpacks",
    title: "Food Packs",
    category: "Food Packs",
    icon: "🥫",
    quantity: 103,
    location: MAIN_LOCATION.name,
    coords: MAIN_LOCATION.coords,
    description: "Canned meals, snacks, and essentials."
  }
]);
