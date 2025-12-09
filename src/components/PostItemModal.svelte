<script>
  import { itemList, showModal, MAIN_LOCATION } from "../stores/itemStore.js";
  import { showToast } from "../stores/toastStore.js";

  const ITEM_TYPES = [
    { id: "jackets", title: "Jackets", icon: "🧥", category: "Jackets" },
    { id: "boots-male", title: "Male Boots", icon: "🥾", category: "Boots" },
    { id: "boots-female", title: "Female Boots", icon: "🥾", category: "Boots" },
    { id: "scarves", title: "Scarves", icon: "🧣", category: "Accessories" },
    { id: "gloves", title: "Gloves", icon: "🧤", category: "Accessories" },
    { id: "blankets", title: "Blankets", icon: "🛏️", category: "Blankets" },
    { id: "foodpacks", title: "Food Packs", icon: "🥫", category: "Food Packs" }
  ];

  let selectedType = "";
  let quantity = 1;

  function close() {
    showModal.set(false);
  }

  function submitItem() {
    if (!selectedType) {
      showToast("Please select an item type.", "error");
      return;
    }

    const chosen = ITEM_TYPES.find(t => t.id === selectedType);

    itemList.update(items => {
      const existing = items.find(i => i.id === selectedType);

      if (existing) {
        existing.quantity += Number(quantity);

        return [...items];
      }

      // (Failsafe — normally unreachable)
      return [
        ...items,
        {
          id: chosen.id,
          title: chosen.title,
          category: chosen.category,
          icon: chosen.icon,
          quantity: Number(quantity),
          location: MAIN_LOCATION.name,
          coords: MAIN_LOCATION.coords,
          description: ""
        }
      ];
    });

    showToast(`${chosen.title} updated successfully!`, "success");

    close();
  }
</script>

<!-- BACKDROP -->
<div class="overlay" on:click={close}></div>

<!-- MODAL -->
<div class="modal">
  <h2>Add Inventory</h2>
  <p class="subtitle">Increase the quantity of existing items at Bearcats Pantry.</p>

  <!-- ITEM TYPE -->
  <div class="field">
    <label>Item Type *</label>
    <select bind:value={selectedType}>
      <option value="">— Select an Item —</option>
      {#each ITEM_TYPES as item}
        <option value={item.id}>{item.icon} {item.title}</option>
      {/each}
    </select>
  </div>

  <!-- QUANTITY -->
  <div class="field">
    <label>Quantity *</label>
    <input type="number" min="1" bind:value={quantity} />
  </div>

  <!-- ACTIONS -->
  <div class="actions">
    <button class="cancel" on:click={close}>Cancel</button>
    <button 
      class="submit" 
      on:click={submitItem}
      disabled={!selectedType || quantity < 1}
    >
      Add Item
    </button>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(3px);
    z-index: 9998;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    background: #fff;
    padding: 36px 30px;
    border-radius: 16px;
    z-index: 9999;
    font-family: Inter, sans-serif;
    box-shadow: 0 18px 40px rgba(0,0,0,0.18);
    animation: slideUp 0.25s ease-out;
  }

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }

  .subtitle {
    margin-bottom: 18px;
    margin-top: 6px;
    font-size: 14px;
    color: #555;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  select, input {
    padding: 10px;
    border-radius: 10px;
    background: #F9FAFB;
    border: 1px solid #D1D5DB;
    font-size: 14px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 10px;
  }

  .cancel {
    padding: 9px 16px;
    background: #e5e7eb;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  .submit {
    padding: 9px 16px;
    background: #4CAF50;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }

  .submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translate(-50%, -40%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
  }
</style>
