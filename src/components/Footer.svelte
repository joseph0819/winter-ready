<footer class="footer">
    <div class="container">
  
      <!-- LEFT: BRAND -->
      <div class="brand">
        <div class="brand-title">
          ❄️ WinterReady
        </div>
        <p class="brand-text">
          Helping UC students stay warm, safe, and supported during the winter season.
        </p>
      </div>
  
      <!-- CENTER: QUICK LINKS -->
      <div class="links">
        <h4>Navigate</h4>
        <a on:click={() => currentPage = "home"}>Home</a>
        <a on:click={() => currentPage = "about"}>About</a>
        <a href="https://www.uc.edu/campus-life/dean-of-students/bearcat-pantry.html" target="_blank">
          Bearcats Pantry
        </a>
      </div>
  
      <!-- RIGHT: CONTACT -->
      <div class="contact">
        <h4>Contact</h4>
        <p>Email: <a href="mailto:help@winterready.com">help@winterready.com</a></p>
        <p>Location: Stratford Heights Pavilion</p>
        <p>Hours: Mon–Fri · 10AM–4PM</p>
      </div>
  
    </div>
  
    <div class="bottom-bar">
      © {new Date().getFullYear()} WinterReady · Built for UC Students
    </div>
  </footer>
  
  <style>
    .footer {
      background: #F8FAFC;
      border-top: 1px solid #E2E8F0;
      margin-top: 10px;
      font-family: Inter, sans-serif;
    }
  
    .container {
      max-width: 1300px;
      margin: auto;
      padding: 25px 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
  
    /* BRAND SECTION */
    .brand-title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 6px;
    }
  
    .brand-text {
      font-size: 14px;
      color: #475569;
      max-width: 260px;
      margin-top: 4px;
    }
  
    /* LINKS */
    .links h4,
    .contact h4 {
      margin: 0 0 12px 0;
      font-size: 15px;
      font-weight: 600;
    }
  
    .links a {
      display: block;
      font-size: 14px;
      color: #475569;
      text-decoration: none;
      margin-bottom: 6px;
      cursor: pointer;
      transition: 0.2s;
    }
  
    .links a:hover {
      color: #4CAF50;
    }
  
    /* CONTACT */
    .contact p {
      margin: 4px 0;
      font-size: 14px;
      color: #475569;
    }
  
    .contact a {
      color: #2563EB;
      text-decoration: none;
    }
  
    /* COPYRIGHT BAR */
    .bottom-bar {
      text-align: center;
      padding: 14px;
      font-size: 13px;
      background: #F1F5F9;
      color: #64748B;
      border-top: 1px solid #E2E8F0;
    }
  </style>
  