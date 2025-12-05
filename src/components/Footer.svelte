<footer>
    <div class="footer-container">
  
      <!-- LEFT: BRAND -->
      <div class="footer-brand">
        ❄️ <span>WinterReady</span>
        <p>Your campus guide to winter essentials & safety.</p>
      </div>
  
      <!-- CENTER: LINKS -->
      <div class="footer-links">
        <a on:click={() => currentPage = "home"}>Home</a>
        <a on:click={() => currentPage = "about"}>About</a>
        <a href="https://www.uc.edu/campus-life/dean-of-students/bearcat-pantry.html" 
           target="_blank">
           Bearcats Pantry
        </a>
      </div>
  
      <!-- RIGHT: SUPPORT INFO -->
      <div class="footer-info">
        <p>Need help?</p>
        <p>Email: <a href="mailto:help@winterready.com">help@winterready.com</a></p>
        <p>Location: Stratford Heights Pavilion</p>
      </div>
  
    </div>
  
    <div class="bottom-bar">
      © {new Date().getFullYear()} WinterReady. All rights reserved.
    </div>
  </footer>
  
  <style>
    footer {
      background: #FAFAFA;
      border-top: 1px solid #E5E7EB;
      padding-top: 30px;
      font-family: Inter, sans-serif;
    }
  
    /* FULL FOOTER GRID */
    .footer-container {
      max-width: 1300px;
      margin: auto;
      padding: 0 40px 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
  
    /* BRAND */
    .footer-brand span {
      font-weight: 700;
      font-size: 20px;
      margin-left: 6px;
    }
  
    .footer-brand p {
      margin-top: 6px;
      color: #6B7280;
      font-size: 14px;
      max-width: 250px;
    }
  
    /* LINKS */
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .footer-links a {
      color: #374151;
      font-size: 15px;
      text-decoration: none;
      cursor: pointer;
      transition: 0.2s ease;
    }
  
    .footer-links a:hover {
      color: #4CAF50;
    }
  
    /* RIGHT INFO */
    .footer-info p {
      margin: 4px 0;
      color: #4B5563;
      font-size: 14px;
    }
  
    .footer-info a {
      color: #2563EB;
      text-decoration: none;
    }
  
    /* BOTTOM COPYRIGHT BAR */
    .bottom-bar {
      text-align: center;
      padding: 12px;
      font-size: 13px;
      color: #6B7280;
      border-top: 1px solid #E5E7EB;
      background: #F9FAFB;
      margin-top: 10px;
    }
  </style>
  