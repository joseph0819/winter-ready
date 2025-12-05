<script>
    // no logic needed
  </script>
  
 
  <div class="page-wrapper">
  
    <div class="about-content">
      <h1>About WinterReady UC</h1>
  
      <p class="intro">
        WinterReady UC is a simple resource designed to help students who may be 
        experiencing their first winter in Cincinnati — especially those arriving 
        during the Spring semester or coming from warmer climates. We make it easy 
        to access essential winter gear and food supplies available at the 
        Bearcats Pantry on Stratford Ave.
      </p>
  
      <div class="section">
        <h2>Why Winter Gear Matters</h2>
        <p>
          Cincinnati winters can be tough, especially for students unfamiliar with 
          freezing temperatures, snow, and icy sidewalks. Winter clothing can also 
          be expensive. WinterReady UC helps reduce that burden by clearly showing 
          what items are currently available — jackets, boots, scarves, gloves, 
          blankets, and food packs.
        </p>
      </div>
  
      <div class="section grid">
        <div class="card">
          <div class="icon">🥾</div>
          <h3>Winter Boots</h3>
          <p>
            Durable insulated boots ideal for snow, rain, and long walks between 
            campus buildings.
          </p>
        </div>
  
        <div class="card">
          <div class="icon">🧥</div>
          <h3>Warm Jackets</h3>
          <p>
            Heavy thermal jackets that protect against freezing temperatures 
            and strong winds.
          </p>
        </div>
  
        <div class="card">
          <div class="icon">🧣</div>
          <h3>Accessories</h3>
          <p>
            Scarves, gloves, and other essentials to help you stay warm 
            throughout winter.
          </p>
        </div>
  
        <div class="card">
          <div class="icon">🥫</div>
          <h3>Food Packs</h3>
          <p>
            Pantry bundles containing soup, noodles, snacks, protein sources, 
            and other essentials.
          </p>
        </div>
      </div>
  
      <div class="section">
        <h2>How It Works</h2>
        <ul>
          <li><b>Browse Items:</b> View all available winter and food supplies.</li>
          <li><b>Check Quantities:</b> See live inventory numbers.</li>
          <li><b>Get Directions:</b> Navigate easily to the Bearcats Pantry.</li>
          <li><b>Pick Up:</b> Collect what you need — quick and stress-free.</li>
        </ul>
      </div>
  
      <div class="footer-note">
        WinterReady UC exists to make sure every Bearcat feels safe, warm, and 
        supported during the winter season.
      </div>
    </div>
  </div>
  
  <style>
    /* MATCHES HOME PAGE SPACING */
    .page-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
     
    }
  
    /* MATCH HOME MAX-WIDTH & PADDING WITHOUT SHRINKING THE NAV */
    .about-content {
      width: 100%;
      max-width: 900px;
      padding: 0 40px 60px 40px;
      font-family: Inter, sans-serif;
      color: #1F2937;
    }
  
    h1 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  
    .intro {
      font-size: 16px;
      margin-bottom: 28px;
      line-height: 1.6;
    }
  
    .section {
      margin-bottom: 40px;
    }
  
    h2 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 14px;
      border: 1px solid #E5E7EB;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      transition: 0.2s;
    }
  
    .card:hover {
      transform: scale(1.02);
      border-color: #4CAF50;
    }
  
    .icon {
      font-size: 36px;
      margin-bottom: 10px;
    }
  
    h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
      font-weight: 600;
    }
  
    ul {
      margin-top: 12px;
      list-style: disc;
      padding-left: 20px;
      line-height: 1.5;
    }
  
    .footer-note {
      margin-top: 30px;
      font-size: 16px;
      padding: 18px;
      background: #F3F4F6;
      border-radius: 12px;
      border-left: 4px solid #4CAF50;
      line-height: 1.6;
    }
  </style>
  