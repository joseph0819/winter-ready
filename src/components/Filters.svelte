<script>
  import { activeFilter } from "../stores/itemStore.js";

  const categories = [
    { name: "All", icon: "📦" },
    { name: "Jackets", icon: "🧥" },
    { name: "Boots", icon: "🥾" },
    { name: "Accessories", icon: "🧤" },
    { name: "Blankets", icon: "🛏️" },
    { name: "Food Packs", icon: "🥫" }
  ];

  function selectCategory(cat) {
    activeFilter.set(cat);
  }
</script>

<div class="filters">
  {#each categories as c}
    <button
      class:selected={$activeFilter === c.name}
      on:click={() => selectCategory(c.name)}
    >
      <span class="emoji">{c.icon}</span>
      {c.name}
    </button>
  {/each}
</div>

<style>
  .filters {
    display: flex;
    gap: 12px;
    padding: 14px 20px;
    border-bottom: 1px solid #E5E7EB;
    background: #FFFFFF;
    position: sticky;
    top: 70px; /* stays under navbar */
    z-index: 20;
  }

  button {
    border: 1px solid #E5E7EB;
    background: #F9FAFB;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: 0.2s;
  }

  button:hover {
    background: #F3F4F6;
    color:black;
  }

  .selected {
    background: #4CAF50;
    color: white;
    
    border-color: #4CAF50;
  }

  .emoji {
    font-size: 16px;
  }
</style>
