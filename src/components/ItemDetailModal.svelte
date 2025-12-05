<script>
    import { selectedItem, focusCoords, MAIN_LOCATION } from "../stores/itemStore.js";
  
    function closeModal() {
      selectedItem.set(null);
    }
  
    function centerOnMap() {
      focusCoords.set(MAIN_LOCATION.coords);
      closeModal();
    }
  
    function openGoogleMaps() {
      const [lat, lng] = MAIN_LOCATION.coords;
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
        "_blank"
      );
    }
  </script>
  
  {#if $selectedItem}
  <div class="overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
      
      <!-- CLOSE BUTTON -->
      <button class="close-btn" on:click={closeModal}>✕</button>
  
      <!-- ICON + TITLE -->
      <div class="header">
        <div class="icon">{$selectedItem.icon}</div>
        <h2>{$selectedItem.title}</h2>
      </div>
  
      <!-- DESCRIPTION -->
      <p class="description">
        {$selectedItem.description}
      </p>
  
      <!-- QUANTITY -->
      <div class="quantity-box">
        <span class="label">Available:</span>
        <span class="qty">{$selectedItem.quantity}</span>
      </div>
  
      <!-- LOCATION -->
      <div class="location-box">
        <span class="label">Location:</span>
        <span>Bearcats Pantry – Stratford Ave</span>
      </div>
  
      <!-- ACTION BUTTONS -->
      <div class="actions">
        <button class="map-btn" on:click={centerOnMap}>📍 Show on Map</button>
        <button class="directions-btn" on:click={openGoogleMaps}>🧭 Get Directions</button>
      </div>
  
    </div>
  </div>
  {/if}
  
  <style>
    /* FULL SCREEN GLASS OVERLAY */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.35);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      animation: fadeIn 0.2s ease-out;
    }
  
    /* MODAL CARD */
    .modal {
      width: 420px;
      background: #fff;
      border-radius: 14px;
      padding: 28px;
      position: relative;
      animation: slideUp 0.25s ease-out;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
  
    /* CLOSE BUTTON */
    .close-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  
    /* HEADER */
    .header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 10px;
    }
  
    .icon {
      font-size: 32px;
    }
  
    h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }
  
    .description {
      margin: 10px 0 18px;
      color: #444;
      line-height: 1.4;
    }
  
    /* QUANTITY BOX */
    .quantity-box,
    .location-box {
      margin-bottom: 14px;
      font-size: 15px;
    }
  
    .label {
      font-weight: 600;
      margin-right: 6px;
    }
  
    .qty {
      color: #2563EB;
      font-weight: 700;
    }
  
    /* ACTION BUTTONS */
    .actions {
      display: flex;
      gap: 14px;
      margin-top: 20px;
    }
  
    .map-btn,
    .directions-btn {
      flex: 1;
      padding: 12px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      border: none;
    }
  
    .map-btn {
      background: #2563EB;
      color: white;
    }
  
    .map-btn:hover {
      background: #1e4fbb;
    }
  
    .directions-btn {
      background: #374151;
      color: white;
    }
  
    .directions-btn:hover {
      background: #2f3743;
    }
  
    /* ANIMATIONS */
    @keyframes fadeIn {
      from { opacity: 0 }
      to { opacity: 1 }
    }
  
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0 }
      to { transform: translateY(0); opacity: 1 }
    }
  </style>
  