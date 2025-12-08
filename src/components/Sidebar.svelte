<script>
    import { itemList, activeFilter, focusCoords, MAIN_LOCATION, selectedItem } from "../stores/itemStore.js";
  
    let isOpen = {
      Boots: true,
      Jackets: true,
      Accessories: true,
      Blankets: true,
      "Food Packs": true
    };
  
    function toggle(category) {
      isOpen[category] = !isOpen[category];
    }
  
    function goToPantry() {
      focusCoords.set(MAIN_LOCATION.coords);
    }
  
    function openItem(item) {
      selectedItem.set(item);
      goToPantry();
    }
  
    // CATEGORY GROUPS
    const groups = ["Boots", "Jackets", "Accessories", "Blankets", "Food Packs"];
  
    // SUMMARY
    $: summary = groups.map(category => {
      let total = $itemList
        .filter(i => i.category === category)
        .reduce((sum, i) => sum + i.quantity, 0);
      return { category, total };
    });
  
    $: totalItems = summary.reduce((sum, s) => sum + s.total, 0);
  </script>
  
  <div class="sidebar">
  
    <!-- HEADER -->
    <h2>Winter Inventory</h2>
  
    <!-- SUMMARY BOX -->
    <div class="summary-box">
      <h3>Total Items: {totalItems}</h3>
  
      {#each summary as s}
        <div class="summary-row">
          <span>{s.category}</span>
          <b>{s.total}</b>
        </div>
      {/each}
    </div>
  
    <!-- CATEGORY GROUPS -->
    <div class="groups">
  
      {#each groups as group}
  
        <!-- If filter is active, show only that group -->
        {#if $activeFilter === "All" || $activeFilter === group}
  
          <!-- GROUP HEADER -->
          <div class="group-header" on:click={() => toggle(group)}>
            <span>{group}</span>
  
            <span class="count">
              {$itemList
                .filter(i => i.category === group)
                .reduce((s, i) => s + i.quantity, 0)} items
            </span>
  
            <span class="arrow">{isOpen[group] ? "▲" : "▼"}</span>
          </div>
  
          <!-- GROUP ITEMS -->
          {#if isOpen[group]}
            {#each $itemList.filter(i => i.category === group) as item}
  
              <div class="item-card" on:click={() => openItem(item)}>
                <div class="icon">{item.icon}</div>
  
                <div class="info">
                  <h3>{item.title}</h3>
                  <p class="qty">{item.quantity} available</p>
  
                  {#if item.quantity < 10}
                    <span class="low">Low Supply</span>
                  {/if}
                </div>
              </div>
  
            {/each}
          {/if}
  
        {/if}
  
      {/each}
  
    </div>
  
    <!-- FOOTER -->
    <div class="side-footer">
      <p><b>Bearcats Pantry</b></p>
      <p>Stratford Heights Pavilion</p>
      <p class="hours">Mon–Fri • 10AM–4PM</p>
    </div>
  
  </div>
  
  <style>
    .sidebar {
      background: #F9FAFB;
      padding: 20px;
      border-right: 1px solid #E5E7EB;
      overflow-y: auto;
      font-family: Inter, sans-serif;
      display: flex;
      flex-direction: column;
    }
  
    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 18px;
    }
  
    /* SUMMARY BOX */
    .summary-box {
      background: #ffffff;
      padding: 14px;
      border-radius: 12px;
      margin-bottom: 16px;
      border: 1px solid #E5E7EB;
    }
  
    .summary-box h3 {
      margin: 0 0 12px 0;
      font-size: 16px;
    }
  
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 14px;
      color: #4B5563;
    }
  
    /* GROUP HEADER */
    .group-header {
      background: #E5E7EB;
      padding: 10px 12px;
      border-radius: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
    }
  
    .group-header:hover {
      background: #D1D5DB;
    }
  
    .count {
      color: #374151;
      font-size: 13px;
      margin-right: 10px;
    }
  
    .arrow {
      font-size: 12px;
    }
  
    /* ITEM CARD */
    .item-card {
      background: white;
      padding: 12px;
      border-radius: 12px;
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 8px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: 0.2s;
    }
  
    .item-card:hover {
      transform: scale(1.01);
      border-color: #4CAF50;
    }
  
    .icon {
      font-size: 28px;
    }
  
    .info h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
    }
  
    .qty {
      margin-top: 4px;
      font-size: 13px;
      color: #4B5563;
    }
  
    /* LOW SUPPLY TAG */
    .low {
      background: #FEE2E2;
      color: #B91C1C;
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 6px;
      margin-top: 4px;
      display: inline-block;
    }
  
    /* FOOTER SECTION */
    .side-footer {
      margin-top: 25px;
      padding-top: 12px;
      border-top: 1px solid #E5E7EB;
      font-size: 14px;
      color: #4B5563;
    }
  
    .hours {
      color: #6B7280;
      margin-top: 4px;
    }
  </style>
  