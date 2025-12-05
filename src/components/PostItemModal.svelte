<script>
  import { itemList, showModal, MAIN_LOCATION } from "../stores/itemStore.js";

  // Predefined item types matching the store layout
  const ITEM_TYPES = [
    { id: "jackets", title: "Jackets", icon: "🧥", category: "Jackets" },
    { id: "boots-male", title: "Male Boots", icon: "🥾", category: "Boots" },
    { id: "boots-female", title: "Female Boots", icon: "🥾", category: "Boots"},
    { id: "scarves", title: "Scarves", icon: "🧣", category: "Accessories" },
    { id: "gloves", title: "Gloves", icon: "🧤", category: "Accessories" },
    { id: "blankets", title: "Blankets", icon: "🛏️", category: "Blankets" },
    { id: "foodpacks", title: "Food Packs", icon: "🥫", category: "Food Packs" }
  ];

  let selectedType = "jackets";
  let quantity = 1;
  let description = "";

  function close() {
    showModal.set(false);
  }

  function submitItem() {
    const chosen = ITEM_TYPES.find(t => t.id === selectedType);

    itemList.update(items => {
      const existing = items.find(i => i.id === selectedType);

      if (existing) {
        existing.quantity += Number(quantity);
        if (description.trim().length > 0) {
          existing.description = description;
        }
        return [...items];
      }

      // (Should not happen because all items already exist in grouped mode)
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
          description: description || ""
        }
      ];
    });

    close();
  }
</script>

<!-- BACKDROP -->
<div class="overlay" on:click={close}></div>

<!-- MODAL -->
<div class="modal">
  <h2>Add Item</h2>
  <p class="subtitle">Increase inventory levels for items at Bearcats Pantry.</p>

  <!-- SELECT ITEM TYPE -->
  <div class="field">
    <label>Item Type *</label>
    <select bind:value={selectedType}>
      {#each ITEM_TYPES as item}
        <option value={item.id}>{item.title}</option>
      {/each}
    </select>
  </div>

  <div class="field">
    <label>Quantity *</label>
    <input type="number" min="1" bind:value={quantity} />
  </div>

  <div class="field">
    <label>Description (optional)</label>
    <textarea bind:value={description} placeholder="Add notes..."></textarea>
  </div>

  <div class="actions">
    <button class="cancel" on:click={close}>Cancel</button>
    <button class="submit" on:click={submitItem}>Add Item</button>
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
    padding: 24px;
    border-radius: 16px;
    z-index: 9999;
    font-family: Inter, sans-serif;
    box-shadow: 0 18px 40px rgba(0,0,0,0.18);
  }

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }

  .subtitle {
    margin-bottom: 16px;
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

  select, input, textarea {
    padding: 10px;
    border-radius: 10px;
    background: #F9FAFB;
    border: 1px solid #D1D5DB;
  }

  textarea {
    min-height: 70px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
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
</style>
