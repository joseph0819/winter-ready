<script>
    import { showModal } from "../stores/itemStore.js";
    export let currentPage;
  </script>
  
  <nav class="nav-bar">
  
    <!-- BRAND -->
    <div class="brand" on:click={() => currentPage = "home"}>
      ❄️ WinterReady
    </div>
  
    <!-- CENTER LINKS -->
    <div class="links">
      <button 
        class:selected={currentPage === "home"} 
        on:click={() => currentPage = "home"}
      >
        Home
      </button>
  
      <button 
        class:selected={currentPage === "about"} 
        on:click={() => currentPage = "about"}
      >
        About
      </button>
    </div>
  
    <!-- ADD ITEM BUTTON -->
    <button class="post-btn" on:click={() => showModal.set(true)}>
      + Add Item
    </button>
  
  </nav>
  
  <style>
    .nav-bar {
      height: 70px;                     /* consistent height */
      background: #ffffff;
      border-bottom: 1px solid #E5E7EB;
      padding: 0 40px;
  
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      font-family: Inter, sans-serif;
      position: sticky;                 /* stays consistent on About + Home */
      top: 0;
      z-index: 900;
  
      box-sizing: border-box;
    }
  
    /* BRAND ------------------------------ */
    .brand {
      font-size: 22px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
      color: #1f2937;
    }
  
    /* LINKS ------------------------------ */
    .links {
      display: flex;
      gap: 30px;
      align-items: center;
    }
  
    .links button {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #374151;
      padding: 6px 4px;
      transition: 0.2s ease;
      position: relative;
    }
  
    .links button:hover {
      color: #4CAF50;
    }
  
    .links .selected {
      color: #4CAF50;
      font-weight: 600;
    }
  
    .links .selected::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: #4CAF50;
      border-radius: 10px;
    }
  
    /* ADD ITEM BUTTON ------------------------------ */
    .post-btn {
      background: #4CAF50;
      color: white;
      padding: 9px 18px;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: 0.2s ease;
    }
  
    .post-btn:hover {
      background: #45A049;
    }
  </style>
  