<script>
    export let year = new Date().getFullYear();
  </script>
  
  <footer class="footer">
    <div class="footer-left">
      <h3>Bearcats Winter Support</h3>
      <p>Helping UC students access essential winter gear & supplies when they need it most.</p>
    </div>
  
    <div class="footer-right">
      <a href="mailto:support@bearcatshelp.org">Support</a>
      <a href="#">Privacy</a>
      <a href="#">About</a>
    </div>
  
    <div class="footer-bottom">
      © {year} Bearcats Winter Support • University of Cincinnati
    </div>
  </footer>
  
  <style>
    .footer {
      width: 100%;
      background: #f5f5f5;
      padding: 20px 30px;
      border-top: 1px solid #e2e2e2;
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-family: Inter, sans-serif;
    }
  
    .footer-left h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: #222;
    }
  
    .footer-left p {
      margin: 4px 0 0;
      font-size: 14px;
      max-width: 400px;
      color: #555;
      line-height: 1.4;
    }
  
    .footer-right {
      display: flex;
      gap: 20px;
      font-size: 14px;
    }
  
    .footer-right a {
      color: #2563EB;
      text-decoration: none;
      font-weight: 500;
    }
  
    .footer-right a:hover {
      text-decoration: underline;
    }
  
    .footer-bottom {
      font-size: 12px;
      color: #777;
      margin-top: 6px;
    }
  </style>
  