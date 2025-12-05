<script>
  import Nav from "./components/Nav.svelte";
  import Filters from "./components/Filters.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import MapView from "./components/MapView.svelte";
  import PostFoodModal from "./components/PostItemModal.svelte";
  import About from "./routes/About.svelte";
  import Footer from "./components/Footer.svelte";

  import { showModal } from "./stores/itemStore.js";

  let currentPage = "home";
</script>

<div class="app-container">

  <!-- NAVIGATION ALWAYS CONSISTENT -->
  <Nav bind:currentPage />

  <!-- HOME PAGE ONLY -->
  {#if currentPage === "home"}
    <Filters />

    <div class="main-grid">
      <Sidebar />
      <MapView />
    </div>
  {/if}

  <!-- ABOUT PAGE WRAPPED PROPERLY -->
  {#if currentPage === "about"}
    <div class="page-wrapper">
      <About />
    </div>
  {/if}

  <!-- MODAL -->
  {#if $showModal}
    <PostFoodModal />
  {/if}

  <Footer />

</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Inter, sans-serif;
  }

  /* HOME GRID LAYOUT */
  .main-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 350px 1fr;
    overflow: hidden;
  }

  /* PAGE WRAPPER FIXES NAV SHRINKING ISSUE */
  .page-wrapper {
    flex: 1;               /* <— THIS IS THE FIX */
    overflow-y: auto;
    padding: 30px 40px;
  }
</style>
