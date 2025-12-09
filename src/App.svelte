<script>
  import Nav from "./components/Nav.svelte";
  import Filters from "./components/Filters.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import MapView from "./components/MapView.svelte";
  import PostItemModal from "./components/PostItemModal.svelte";
  import ItemDetailsModal from "./components/ItemDetailModal.svelte";
  import Footer from "./components/Footer.svelte";
  import Toast from "./components/Toast.svelte";

  import About from "./routes/About.svelte";

  import { showModal, selectedItem } from "./stores/itemStore.js";

  let currentPage = "home";
</script>

<div class="app">

  <!-- 🔹 NAV ALWAYS AT TOP -->
  <Nav bind:currentPage />

  <!-- 🔹 MAIN CONTENT AREA -->
  <div class="content">

    <!-- ⭐ HOME PAGE -->
    {#if currentPage === "home"}

      <!-- FILTERS ABOVE GRID ALWAYS -->
      <div class="filters-wrapper">
        <Filters />
      </div>

      <!-- SIDEBAR + MAP GRID -->
      <div class="main-grid">
        <Sidebar />
        <MapView />
      </div>

    {/if}

    <!-- ⭐ ABOUT PAGE -->
    {#if currentPage === "about"}
      <About />
    {/if}

  </div>

  <!-- FOOTER ALWAYS AT BOTTOM -->
  <Footer />

  <!-- MODALS -->
  {#if $showModal}
    <PostItemModal />
  {/if}

  {#if $selectedItem}
    <ItemDetailsModal />
  {/if}

  <!-- GLOBAL TOAST SYSTEM -->
  <Toast />

</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Inter, sans-serif;
  }

  /* MAIN CONTENT: fills space between Nav and Footer */
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Filters Wrapper ensures it never collapses or moves under map */
  .filters-wrapper {
    flex-shrink: 0;
    background: #fff;
    border-bottom: 1px solid #E5E7EB;
    z-index: 10;
  }

  /* GRID for Sidebar + Map */
  .main-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 350px 1fr;
    overflow: hidden;
    position: relative;
  }
</style>
