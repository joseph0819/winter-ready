<script>
    import { toast } from "../stores/toastStore.js";
  
    $: isVisible = $toast.visible;
    $: type = $toast.type;
  </script>
  
  {#if isVisible}
  <div class="toast {type}">
    {$toast.message}
  </div>
  {/if}
  
  <style>
    .toast {
      position: fixed;
      bottom: 25px;
      right: 25px;
      padding: 14px 18px;
      border-radius: 8px;
      color: white;
      font-size: 15px;
      font-weight: 600;
      z-index: 999999;
      animation: fadeIn 0.25s ease-out, fadeOut 0.3s ease-in calc(100% - 0.6s) forwards;
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
  
    /* COLORS */
    .success { background: #10B981; }
    .error { background: #DC2626; }
    .info { background: #2563EB; }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    @keyframes fadeOut {
      to { opacity: 0; transform: translateY(10px); }
    }
  </style>
  