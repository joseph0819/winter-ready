<script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "leaflet-routing-machine";
    import { itemList, focusCoords, MAIN_LOCATION } from "../stores/itemStore.js";
  
    let map;
    let pantryMarker;
    let userMarker = null;
    let routeControl = null;
  
    // Popup content (no image)
    function generatePopupHTML(items) {
      let html = `
        <b>Bearcats Pantry – Stratford Ave</b><br/>
        <small>2634 Stratford Ave, Cincinnati, OH 45220</small><br/><br/>
  
        <b>Hours:</b><br/>
        Mon–Fri: 10AM – 4PM<br/>
        Sat–Sun: Closed<br/><br/>
  
        <b>Available Items</b><br/>
      `;
  
      items.forEach(item => {
        html += `${item.icon} <b>${item.title}</b>: ${item.quantity} available<br/>`;
      });
  
      html += `
        <br/>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=${MAIN_LOCATION.coords[0]},${MAIN_LOCATION.coords[1]}"
          target="_blank"
          style="color:#2563EB; font-weight:600;"
        >
          Open in Google Maps
        </a>
      `;
  
      return html;
    }
  
    // Draw route user → pantry
    function drawRoute(userPos) {
      if (routeControl) routeControl.remove();
  
      routeControl = L.Routing.control({
        waypoints: [
          L.latLng(userPos.lat, userPos.lng),
          L.latLng(MAIN_LOCATION.coords[0], MAIN_LOCATION.coords[1])
        ],
        lineOptions: {
          styles: [{ color: "#d60000", weight: 4 }]
        },
        createMarker: () => null,
        addWaypoints: false,
        draggableWaypoints: false
      }).addTo(map);
    }
  
    // Show user location
    function showUserLocation() {
      map.locate({ setView: true, maxZoom: 16 });
  
      map.on("locationfound", e => {
        if (userMarker) userMarker.remove();
  
        userMarker = L.circleMarker(e.latlng, {
          radius: 8,
          color: "#2563EB",
          fillColor: "#2563EB",
          fillOpacity: 1
        }).addTo(map);
  
        drawRoute(e.latlng);
      });
  
      map.on("locationerror", () => {
        alert("Unable to detect your location.");
      });
    }
  
    // Sidebar → map focus
    $: if (map && $focusCoords) {
      map.setView($focusCoords, 16, { animate: true });
    }
  
    onMount(() => {
      map = L.map("map", {
        center: MAIN_LOCATION.coords,
        zoom: 16
      });
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
      }).addTo(map);
  
      // Default marker (unchanged)
      pantryMarker = L.marker(MAIN_LOCATION.coords).addTo(map);
      pantryMarker.bindPopup(generatePopupHTML($itemList));
  
      // Update popup when items change
      itemList.subscribe(items => {
        pantryMarker.bindPopup(generatePopupHTML(items));
      });
    });
  </script>
  
  <!-- MAP WRAPPER -->
  <div class="map-wrapper">
    <!-- MAP -->
    <div id="map"></div>
  
    <!-- SHOW MY LOCATION button INSIDE MAP -->
    <div class="map-button" on:click={showUserLocation}>
      📍 My Location
    </div>
  </div>
  
  <style>
    /* Wrapper ensures button is on the map */
    .map-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
  
    #map {
      width: 100%;
      height: 100%;
    }
  
    /* Button correctly positioned ON TOP OF MAP */
    .map-button {
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background: white;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }
  
    .map-button:hover {
      background: #f2f2f2;
    }
  </style>
  