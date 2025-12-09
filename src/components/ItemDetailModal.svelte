<script>
    import { selectedItem, itemList, focusCoords, MAIN_LOCATION } from "../stores/itemStore.js";
    import { showToast } from "../stores/toastStore.js";

    function closeModal() {
      selectedItem.set(null);
    }
  
    function centerOnMap() {
      focusCoords.set(MAIN_LOCATION.coords);
      closeModal();
    }
  
    function openGoogleMaps() {
      const [lat, lng] = MAIN_LOCATION.coords;
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
    }
  
    function claimItem(item) {
  itemList.update(list => {
    return list.map(i => {
      if (i.id === item.id && i.quantity > 0) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
  });

  showToast("Item claimed successfully!", "success");

  if (item.quantity - 1 <= 0) {
    showToast("This item is now out of stock.", "info");
    selectedItem.set(null);
  } else {
    selectedItem.set({ ...item, quantity: item.quantity - 1 });
  }
}

  </script>
  
  {#if $selectedItem}
  <div class="overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
  
      <!-- CLOSE BUTTON -->
      <button class="close-btn" on:click={closeModal}>✕</button>
  
      <!-- HEADER -->
      <div class="header">
        <div class="icon">{$selectedItem.icon}</div>
        <h2>{$selectedItem.title}</h2>
      </div>
  
      <!-- LOW STOCK WARNING -->
      {#if $selectedItem.quantity < 10}
        <div class="warning">⚠️ Low Supply — only {$selectedItem.quantity} left!</div>
      {/if}
  
      <!-- STRUCTURED DETAILS -->
      <div class="details">
  
        <p><span class="label">Category:</span> {$selectedItem.category}</p>
  
        {#if $selectedItem.gender}
          <p><span class="label">Gender:</span> {$selectedItem.gender}</p>
        {/if}
  
        {#if $selectedItem.size}
          <p><span class="label">Size:</span> {$selectedItem.size}</p>
        {/if}
  
        <p><span class="label">Available:</span> {$selectedItem.quantity}</p>
  
        <p>
          <span class="label">Location:</span>  
          Bearcats Pantry – Stratford Heights Pavilion
        </p>
  
        <p>
          <span class="label">Pickup Hours:</span>  
          Mon–Fri, 10AM–4PM
        </p>
      </div>
  
      <!-- ACTION BUTTONS -->
      <div class="actions">
        <button class="map-btn" on:click={centerOnMap}>📍 Show on Map</button>
        <button class="directions-btn" on:click={openGoogleMaps}>🧭 Directions</button>
      </div>
  
      <!-- CLAIM ITEM BUTTON -->
      <button 
        class="claim-btn"
        on:click={() => claimItem($selectedItem)}
        disabled={$selectedItem.quantity === 0}
      >
        🎁 Claim Item
      </button>
  
    </div>
  </div>
  {/if}
  
  <style>
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.35);
      backdrop-filter: blur(6px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      animation: fadeIn 0.2s ease-out;
    }
  
    .modal {
      width: 420px;
      background: #fff;
      border-radius: 14px;
      padding: 28px;
      position: relative;
      animation: slideUp 0.25s ease-out;
      box-shadow: 0 10px 30px rgba(0,0,0,0.17);
    }
  
    .close-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  
    .header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
    }
  
    .icon {
      font-size: 36px;
    }
  
    h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }
  
    /* WARNING */
    .warning {
      background: #FEE2E2;
      color: #B91C1C;
      padding: 10px;
      border-radius: 8px;
      font-size: 14px;
      margin-bottom: 16px;
      text-align: center;
      font-weight: 600;
    }
  
    /* DETAILS */
    .details {
      font-size: 15px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: 700;
      color: #374151;
    }
  
    .actions {
      display: flex;
      gap: 14px;
      margin-bottom: 16px;
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
  
    /* CLAIM BUTTON */
    .claim-btn {
      width: 100%;
      padding: 12px;
      background: #10B981;
      color: white;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 8px;
    }
  
    .claim-btn:hover {
      background: #0e9e70;
    }
  
    .claim-btn:disabled {
      background: #D1D5DB;
      cursor: not-allowed;
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
  