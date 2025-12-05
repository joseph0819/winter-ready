<script>
    import { itemList, selectedItem, focusCoords, MAIN_LOCATION } from "../stores/itemStore.js";
  
    // When user clicks an item, open modal + center map
    function openItem(item) {
      selectedItem.set(item);
      focusCoords.set(MAIN_LOCATION.coords);
    }
  </script>
  
  <div class="sidebar">
    <h2>Available Items</h2>
  
    <div class="items">
      {#each $itemList as item}
        <div class="item" on:click={() => openItem(item)}>
          <div class="left">
            <div class="icon">{item.icon}</div>
            <div class="info">
              <div class="title">{item.title}</div>
              <div class="qty">{item.quantity} available</div>
            </div>
          </div>
  
          <div class="arrow">›</div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .sidebar {
      background: #fafafa;
      border-right: 1px solid #e5e5e5;
      height: 100%;
      padding: 20px 16px;
      overflow-y: auto;
      font-family: Inter, sans-serif;
    }
  
    h2 {
      margin-top: 0;
      font-size: 20px;
      font-weight: 700;
    }
  
    .items {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
  
    .item {
      background: white;
      border: 1px solid #e5e5e5;
      padding: 12px 14px;
      border-radius: 10px;
      cursor: pointer;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      transition: background 0.15s ease, transform 0.1s ease;
    }
  
    .item:hover {
      background: #f3faff;
      transform: translateY(-1px);
    }
  
    .left {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  
    .icon {
      font-size: 24px;
    }
  
    .title {
      font-weight: 600;
      font-size: 15px;
    }
  
    .qty {
      font-size: 13px;
      color: #4b5563;
    }
  
    .arrow {
      font-size: 20px;
      color: #9ca3af;
    }
  </style>
  