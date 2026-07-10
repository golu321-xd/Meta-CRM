window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('premium-splash');
        if (splash) {
            splash.classList.add('hidden');
        }
    }, 1500); // 1.5 सेकंड तक लोडिंग दिखेगी, आप चाहें तो इसे कम/ज़्यादा कर सकते हैं
});

    /* ---------- INLINE SVG ICON LIBRARY (mirrors static HTML icons; used for all JS-rendered markup) ---------- */
    const ICON_LIB = {
      "fa-solid fa-vr-cardboard": `<path d="M4 9h16a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3h-2.2a2 2 0 0 1-1.8-1.1L13.6 15a2 2 0 0 0-3.2 0l-1.4 2.9A2 2 0 0 1 7.2 19H5a3 3 0 0 1-3-3v-5a2 2 0 0 1 2-2Z"/><circle cx="8" cy="13" r="1.5"/><circle cx="16" cy="13" r="1.5"/>`,
      "fa-solid fa-chart-pie": `<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>`,
      "fa-solid fa-users": `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
      "fa-solid fa-table-columns": `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>`,
      "fa-solid fa-bell": `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
      "fa-solid fa-shield-halved": `<path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3Z"/><path d="M12 2v19"/>`,
      "fa-solid fa-arrow-right-from-bracket": `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>`,
      "fa-solid fa-moon": `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>`,
      "fa-solid fa-sun": `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>`,
      "fa-solid fa-magnifying-glass": `<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>`,
      "fa-solid fa-search": `<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>`,
      "fa-solid fa-check": `<path d="M20 6 9 17l-5-5"/>`,
      "fa-solid fa-check-circle": `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`,
      "fa-solid fa-check-double": `<path d="M18 6 7 17l-5-5"/><path d="M22 10 12.5 19.5 10 17"/>`,
      "fa-solid fa-circle-check": `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`,
      "fa-solid fa-circle-info": `<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`,
      "fa-solid fa-circle-xmark": `<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>`,
      "fa-solid fa-xmark": `<path d="M18 6 6 18"/><path d="M6 6l12 12"/>`,
      "fa-solid fa-spinner": `<path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>`,
      "fa-solid fa-plus": `<path d="M12 5v14"/><path d="M5 12h14"/>`,
      "fa-solid fa-save": `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>`,
      "fa-solid fa-list-check": `<path d="m3 7 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>`,
      "fa-solid fa-phone": `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>`,
      "fa-solid fa-pen": `<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>`,
      "fa-solid fa-inbox": `<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/>`,
      "fa-solid fa-triangle-exclamation": `<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>`,
      "fa-regular fa-clock": `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
      "fa-regular fa-calendar-check": `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>`,
      "fa-solid fa-calendar-day": `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><rect x="10" y="14" width="4" height="4"/>`,
      "fa-solid fa-server": `<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01"/><path d="M6 17h.01"/>`,
      "fa-solid fa-download": `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><path d="M12 15V3"/>`,
      "fa-solid fa-database": `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>`,
      "fa-solid fa-lock": `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
      "fa-solid fa-unlock": `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.5-2.2"/>`,
      "fa-solid fa-key": `<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>`,
      "fa-solid fa-users-gear": `<path d="M11 21H3v-2a4 4 0 0 1 4-4h3"/><circle cx="8" cy="7" r="4"/><circle cx="17.5" cy="14.5" r="2.5"/><path d="M17.5 10v1.3"/><path d="M17.5 17.7V19"/><path d="m14.85 12.25 1.13.65"/><path d="m19 15.6 1.13.65"/><path d="m14.85 16.75 1.13-.65"/><path d="m19 13.4 1.13-.65"/>`,
      "fa-solid fa-globe": `<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>`,
      "fa-solid fa-eye": `<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
      "fa-solid fa-medal": `<circle cx="12" cy="15" r="6"/><path d="m9 10-4.5-7"/><path d="m15 10 4.5-7"/><path d="M12 12v6"/>`,
      "fa-solid fa-file-csv": `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/>`,
      "fa-solid fa-id-card": `<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M15 9h4"/><path d="M15 13h4"/><path d="M5 17c.6-1.5 1.9-2.5 3.5-2.5S11.4 15.5 12 17"/>`,
      "fa-solid fa-timeline": `<path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h16"/><circle cx="18" cy="12" r="2"/>`,
      "fa-solid fa-trash": `<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
      "fa-solid fa-clock-rotate-left": `<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/>`,
      "fa-solid fa-trophy": `<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0Z"/><path d="M17 5h3a2 2 0 0 1-2 4h-1"/><path d="M7 5H4a2 2 0 0 0 2 4h1"/>`,
      "fa-solid fa-file-invoice": `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h5"/><path d="M8 17h8"/>`,
      "fa-solid fa-filter-circle-dollar": `<path d="M4 4h16l-6 8v6l-4 2v-8Z"/>`,
      "fa-solid fa-chart-column": `<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="13" y="8" width="3" height="10"/><rect x="19" y="5" width="0" height="13"/>`,
      "fa-solid fa-layer-group": `<polygon points="12 2 22 8 12 14 2 8"/><polyline points="2 14 12 20 22 14"/><polyline points="2 11 12 17 22 11"/>`,
      "fa-solid fa-right-to-bracket": `<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><path d="M15 12H3"/>`,
      "fa-solid fa-user-plus": `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>`,
      "fa-solid fa-paper-plane": `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
      "fa-solid fa-power-off": `<path d="M12 2v10"/><path d="M18.36 6.64a9 9 0 1 1-12.72 0"/>`,
    };
    function ic(key, extraAttrs) {
      const inner = ICON_LIB[key] || '<circle cx="12" cy="12" r="9"/>';
      return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extraAttrs || ''}>${inner}</svg>`;
    }

        /* ==========================================================
       STATE
    ========================================================== */
    const API_BASE_URL = "https://meta-crm.onrender.com/api";
    let users = {}; 
    let allLeads = []; // Ab data cloud se aayega
    let currentUser = localStorage.getItem('activeSessionUser') || null;
    let currentUserId = localStorage.getItem('activeSessionUserId') || null;
    let isAdminAuthenticated = false; 
    let activeActionLeadId = null;
    let activeDetailLeadId = null;
    let statusFilter = 'All';
    let leadSortKey = 'followUpTime';
    let leadSortDir = 'asc';
    let cmdkSelectedIndex = 0;
    let cmdkItems = [];

    const ADMIN_KEY = "324866"; 
    const defaultPfp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

    /* ==========================================================
       BOOT (Loading Screen Fix & Cloud Sync)
    ========================================================== */
    window.onload = async function() {
      const savedTheme = localStorage.getItem('crmTheme') || 'light';
      if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-switch').checked = true;
      }

      setupRippleListeners();
      buildStatusChips();

      if (currentUser) {
        if(typeof loadUserProfile === "function") loadUserProfile();
        
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        
        // Cloud se background mein saara data layega
        await fetchAllLeadsFromDatabase();
        
        switchTab('dashboard');
        let displayId = (typeof currentUserId !== 'undefined' && currentUserId) ? currentUserId : '0000';
    let welcomeMsg = `<span class="toast-id-badge">ID: ${displayId}</span> You have signed in successfully.`;
    showToast('success', `Welcome, ${currentUser}!`, welcomeMsg);

        document.getElementById('premium-splash')?.classList.add('hidden');
      } else {
        document.getElementById('premium-splash')?.classList.add('hidden');
        document.getElementById('auth-screen').classList.remove('hidden');
      }

      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (currentUser) openCmdk();
        }
        if (e.key === 'Escape') { closeCmdk(); closeModals(); closeConfirm(); }
      });
    };

    // ==========================================================
    // 1. SMART FETCH FUNCTION (सिर्फ बदलाव होने पर स्क्रीन अपडेट करेगा)
    // ==========================================================
    async function fetchAllLeadsFromDatabase() {
      try {
        let response = await fetch(`${API_BASE_URL}/leads?owner=${currentUser}`);
        if(response.ok) {
          let newData = await response.json();
          
          newData.forEach(l => {
              if(typeof l.history === 'string') {
                  try { l.history = JSON.parse(l.history); } catch(e){}
              }
              if(!l.tags) l.tags = [];
          });

          let oldDataString = JSON.stringify(allLeads);
          let newDataString = JSON.stringify(newData);

          if (oldDataString !== newDataString) {
              allLeads = newData; 
              if(typeof refreshAllData === "function") refreshAllData(); 
          }
        }
      } catch(err) {
        // Background error ignore karega
      }
    }

    // ==========================================================
    // 2. REAL-TIME ENGINE (हर 3 सेकंड में क्लाउड से सिंक करेगा)
    // ==========================================================
    setInterval(() => {
        if (currentUser) {
            fetchAllLeadsFromDatabase();
        }
    }, 3000);

    // Helper functions (Keeping them so code doesn't break)
    function buildLegacyHistory(lead) { return []; } 
    function saveUsers() { } 
    function saveLeads() { } 
    function getMyLeads() { return allLeads.filter(lead => lead.owner === currentUser); }

    function generateUniqueId() {
      return Math.floor(10000000 + Math.random() * 90000000).toString();
    }
    function findUserKey(input) { return null; }

    /* ==========================================================
       TOASTS
    ========================================================== */
    // ==========================================
    // 🚀 PREMIUM TOAST (WITH YOUR ORIGINAL LOGIC)
    // ==========================================
    function showToast(type, title, msg, icon) {
      const stack = document.getElementById('toast-stack');
      if (!stack) return;
      
      const el = document.createElement('div');
      el.className = `premium-toast ${type}`; // 👈 यहाँ नया क्लास लगा दिया
      
      const icons = { success: 'fa-solid fa-circle-check', error: 'fa-solid fa-circle-xmark', warning: 'fa-solid fa-triangle-exclamation', info: 'fa-solid fa-circle-info' };
      
      // आपके ic() वाले लॉजिक के साथ नया HTML
      el.innerHTML = `
        <div class="toast-icon-box">
            ${ic(icon || icons[type] || icons.info)}
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${msg || ''}</div>
        </div>
        <button class="toast-close" onclick="dismissToast(this.parentElement)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
        </button>
        <div class="toast-progress"></div>
      `;
      
      stack.appendChild(el);
      
      // आपका ओरिजिनल टाइमर लॉजिक
      const timer = setTimeout(() => dismissToast(el), 3200);
      el._timer = timer;
    }

    function dismissToast(el) {
      if (!el || el.classList.contains('leaving')) return;
      clearTimeout(el._timer);
      el.classList.add('leaving');
      setTimeout(() => el.remove(), 300); // 👈 एनीमेशन के हिसाब से टाइमिंग सेट कर दी
    }


    /* ==========================================================
       RIPPLE EFFECT ON EVERY CLICK
    ========================================================== */
    function setupRippleListeners() {
      document.addEventListener('click', function(e) {
        const target = e.target.closest('button, .clickable, .stat-card, .chip, .cmdk-item');
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const span = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        span.className = 'ripple-span';
        span.style.width = span.style.height = size + 'px';
        span.style.left = (e.clientX - rect.left - size / 2) + 'px';
        span.style.top = (e.clientY - rect.top - size / 2) + 'px';
        const computedStyle = getComputedStyle(target);
        if (computedStyle.position === 'static') target.style.position = 'relative';
        target.appendChild(span);
        setTimeout(() => span.remove(), 650);
      });
    }

    function confettiBurst() {
      const colors = ['#4f46e5', '#7c3aed', '#10b981', '#f59e0b', '#ef4444', '#0ea5e9'];
      const holder = document.getElementById('confetti-holder');
      for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const size = 6 + Math.random() * 6;
        piece.style.width = size + 'px';
        piece.style.height = (size * 0.4) + 'px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.animationDuration = (1.8 + Math.random() * 1.4) + 's';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        holder.appendChild(piece);
        setTimeout(() => piece.remove(), 3400);
      }
    }

    /* ==========================================================
       THEME
    ========================================================== */
    function toggleTheme() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('crmTheme', 'light');
        document.getElementById('theme-switch').checked = false;
        const mi = document.getElementById('mobile-theme-icon'); if (mi) mi.innerHTML = ic('fa-solid fa-moon');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('crmTheme', 'dark');
        document.getElementById('theme-switch').checked = true;
        const mi = document.getElementById('mobile-theme-icon'); if (mi) mi.innerHTML = ic('fa-solid fa-sun');
      }
    }

    /* ==========================================================
       AUTH
    ========================================================== */
    function toggleAuth(type) {
      document.querySelectorAll('.auth-box').forEach(box => box.classList.add('hidden'));
      document.getElementById(`${type}-card`).classList.remove('hidden');
    }

    function togglePw(id, iconEl) {
      const field = document.getElementById(id);
      if (field.type === 'password') { field.type = 'text'; iconEl.classList.replace('fa-eye', 'fa-eye-slash'); }
      else { field.type = 'password'; iconEl.classList.replace('fa-eye-slash', 'fa-eye'); }
    }

    function checkPwStrength() {
      const val = document.getElementById('reg-pass').value;
      const bar = document.getElementById('pw-strength-bar');
      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 10) score++;
      if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const pct = (score / 4) * 100;
      const colors = ['#ef4444', '#ef4444', '#f59e0b', '#10b981', '#10b981'];
      bar.style.width = pct + '%';
      bar.style.background = colors[score];
    }

    async function register() {
      const user = document.getElementById('reg-user').value.trim();
      const pass = document.getElementById('reg-pass').value;
      if (!user || !pass) { showToast('warning', 'Missing details', 'Please fill in a username and password.'); return; }
      if (pass.length < 4) { showToast('warning', 'Weak password', 'Use at least 4 characters.'); return; }

      const newId = generateUniqueId();
      
      try {
        let response = await fetch(`${API_BASE_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass, userId: newId })
        });
        
        let data = await response.json();
        
        if (response.ok) {
          showToast('success', 'Account created', `Your login ID is ${newId}. Please sign in.`);
          toggleAuth('login');
          document.getElementById('reg-user').value = '';
          document.getElementById('reg-pass').value = '';
          document.getElementById('pw-strength-bar').style.width = '0%';
        } else {
          showToast('error', 'Registration failed', data.error || 'Username already exists.');
        }
      } catch (err) {
        showToast('error', 'Network Error', 'Server se connect nahi ho paaya.');
      }
    }

    async function login() {
      const input = document.getElementById('login-user').value.trim();
      const pass = document.getElementById('login-pass').value;
      if (!input || !pass) { showToast('warning', 'Enter credentials', 'Both fields are required.'); return; }

      try {
        let response = await fetch(`${API_BASE_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: input, password: pass })
        });
        
        let data = await response.json();
        
        if (response.ok) {
          currentUser = data.user.username;
          currentUserId = data.user.user_id; // Data cloud se layega
          
          localStorage.setItem('activeSessionUser', currentUser); 
          localStorage.setItem('activeSessionUserId', currentUserId); 
          
          if(typeof loadUserProfile === "function") loadUserProfile();
          
          document.getElementById('login-user').value = "";
          document.getElementById('login-pass').value = "";
          document.getElementById('auth-screen').classList.add('hidden');
          document.getElementById('app-screen').classList.remove('hidden');
          
          await fetchAllLeadsFromDatabase();
          
          switchTab('dashboard');
          showToast('success', `Welcome, ${currentUser}!`, 'You have signed in successfully.');
        } else {
          showToast('error', 'Sign-in failed', data.error || 'Invalid username or password.');
          const card = document.getElementById('login-card');
          card.classList.add('shake');
          setTimeout(() => card.classList.remove('shake'), 500);
        }
      } catch (err) {
        showToast('error', 'Network Error', 'Server se connect nahi ho paaya.');
      }
    }

            

    function loadUserProfile() {
      document.getElementById('current-user-display').innerText = currentUser;
      document.getElementById('current-userid-display').innerText = currentUserId || '00000000';
      document.querySelectorAll('img[id*="pfp"]').forEach(img => {
          img.src = 'static/meta.png'; 
      });
      
      const mobUser = document.getElementById('mobile-user-display');
      const mobId = document.getElementById('mobile-userid-display');
      if(mobUser) mobUser.innerText = currentUser;
      if(mobId) mobId.innerText = currentUserId || '00000000';
      
      // सिर्फ MASTER ADMIN को एडमिन पैनल का बटन दिखेगा (Strict Hide Logic)
      if (currentUser === 'admin') {
          document.getElementById('tab-btn-admin').style.setProperty('display', 'flex', 'important');
          document.getElementById('mob-btn-admin').style.setProperty('display', 'flex', 'important');
          isAdminAuthenticated = true; // अब किसी PIN की ज़रूरत नहीं
      } else {
          // नार्मल यूजर से एडमिन बटन हमेशा के लिए छुपा दो
          document.getElementById('tab-btn-admin').style.setProperty('display', 'none', 'important');
          document.getElementById('mob-btn-admin').style.setProperty('display', 'none', 'important');
          isAdminAuthenticated = false;
      }
    }

     // ==========================================
// LUXURY ROLLING NUMBER COUNTER LOGIC
// ==========================================
function animateLuxuryCounters() {
  const counters = document.querySelectorAll('.stat-card h1, .stat-card .text-3xl, [id*="-count"]');
  
  counters.forEach(counter => {
    // अगर नंबर में % या ₹ है तो उसे अलग करें
    const targetText = counter.innerText.trim();
    const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));
    
    if (isNaN(targetNumber) || targetNumber === 0) return;
    
    const suffix = targetText.includes('%') ? '%' : '';
    const prefix = targetText.includes('₹') ? '₹ ' : '';
    
    let startTimestamp = null;
    const duration = 1200; // 1.2 सेकंड तक नंबर घूमेगा (Perfect Smoothness)

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing Function: शुरू में तेज़, अंत में धीरे (Apple Style)
      const easeOutQuad = progress * (2 - progress);
      const currentNumber = Math.floor(easeOutQuad * targetNumber);
      
      counter.innerText = prefix + currentNumber.toLocaleString() + suffix;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        counter.innerText = targetText; // अंत में ओरिजिनल टेक्स्ट सेट करें
      }
    };
    
    window.requestAnimationFrame(step);
  });
}                                                                

    function confirmLogout() {
      openConfirm({
        title: 'Log out?',
        msg: 'You will need to sign in again to access your dashboard.',
        icon: 'fa-solid fa-arrow-right-from-bracket',
        okLabel: 'Log Out',
        onOk: logout
      });
    }

    function logout() {
      currentUser = null;
      isAdminAuthenticated = false;
      localStorage.removeItem('activeSessionUser');
      lockAdminView();
      document.getElementById('auth-screen').classList.remove('hidden');
      document.getElementById('app-screen').classList.add('hidden');
      toggleAuth('login');
      showToast('info', 'Signed out', 'Come back soon!');
    }

    async function requestPasswordReset() {
      const input = document.getElementById('forgot-user').value.trim();
      if (!input) { showToast('warning', 'Missing Details', 'Please enter your Username or ID.'); return; }

      // रिक्वेस्ट को एडमिन के लिए सेव करेगा
      let requests = JSON.parse(localStorage.getItem('resetRequests') || '[]');
      if (!requests.includes(input)) {
          requests.push(input);
          localStorage.setItem('resetRequests', JSON.stringify(requests));
      }

      showToast('success', 'Request sent', 'Admin will process your reset shortly.');
      toggleAuth('login');
      document.getElementById('forgot-user').value = '';
    }

    function uploadProfilePicture(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        if (e.target.result.length > 500000) { showToast('warning', 'Image too large', 'Please pick an image under 500KB.'); return; }
        users[currentUser].profilePic = e.target.result;
        saveUsers();
        loadUserProfile();
        showToast('success', 'Profile updated', 'Your new picture has been saved.');
      };
      reader.readAsDataURL(file);
    }

    // ==========================================
    // INDESTRUCTIBLE TAB SWITCHER (BLACK SCREEN FIX)
    // ==========================================
    function switchTab(tabName) {
        const tabs = ['dashboard', 'leads', 'pipeline', 'alerts', 'admin', 'offers'];
        
        try {
            if(tabName === 'offers' && typeof fetchGlobalBanner === 'function') { fetchGlobalBanner(); fetchOffers(); }
        } catch(e) {}

        // 1. सबको सुरक्षित तरीके से छुपाओ (अगर कोई कोड डिलीट भी हो गया हो, तो लूप क्रैश नहीं होगा)
        tabs.forEach(t => {
            try {
                let viewEl = document.getElementById(`view-${t}`);
                if (viewEl) viewEl.classList.add('hidden');
                
                let tabBtn = document.getElementById(`tab-btn-${t}`);
                if (tabBtn) tabBtn.classList.remove('active');
                
                let mobBtn = document.getElementById(`mob-btn-${t}`);
                if (mobBtn) mobBtn.classList.remove('active');
            } catch(e) {}
        });
        
        // 2. नए टैब को सुरक्षित तरीके से दिखाओ
        try {
            const targetTab = document.getElementById(`view-${tabName}`);
            if (targetTab) {
                targetTab.classList.remove('hidden');
                
                // Animation Reset (मक्खन वाला स्लाइड)
                targetTab.classList.remove('tab-content-view');
                void targetTab.offsetWidth; 
                targetTab.classList.add('tab-content-view');
                
                // 🛑 SAFETY FIX: अगर पुराने स्वाइप इंजन ने स्क्रीन काली की थी, तो उसे जबरदस्ती दिखाओ
                targetTab.style.display = '';
                targetTab.style.opacity = '1';
                targetTab.style.transform = 'none';
            }
        } catch(e) {}
        
        // 3. बटन हाईलाइट करो
        try {
            let activeTabBtn = document.getElementById(`tab-btn-${tabName}`);
            if (activeTabBtn) activeTabBtn.classList.add('active');
            
            let activeMobBtn = document.getElementById(`mob-btn-${tabName}`);
            if (activeMobBtn) activeMobBtn.classList.add('active');
        } catch(e) {}
        
        try { refreshAllData(); } catch(e) {}
        try { document.querySelector('.main-content').scrollTop = 0; } catch(e) {}

        // जादुई रोलिंग नंबर्स
        if (tabName === 'dashboard' || tabName === 'home') {
            setTimeout(() => {
                if (typeof animateLuxuryCounters === 'function') animateLuxuryCounters();
            }, 200);
        }
    }


    /* ==========================================================
       VALIDATION HELPERS
    ========================================================== */
    function isValidPhone(v) { return /^[0-9+\-\s()]{7,15}$/.test(v.trim()); }

    /* ==========================================================
   SECURITY HELPER (XSS PROTECTION)
========================================================== */
function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, function(tag) {
        const charsToReplace = {
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        };
        return charsToReplace[tag] || tag;
    });
    }
    

/* ==========================================================
   LEAD CRUD (100% FINAL - ULTRA SPAM PROTECTED)
========================================================== */
async function addLead(event) {
    // 1. ULTRA-LOCK (JavaScript Hard Lock)
    // event.currentTarget use kiya taaki icon par click ho toh bhi button hi pakda jaye
    const saveBtn = event ? event.currentTarget : null; 
    
    // Agar pehle se process chal raha hai, toh turant ruk jao (Strict block)
    if (saveBtn && saveBtn.dataset.isSaving === "true") {
        console.log("Spam blocked!");
        return; 
    }
    
    // Lock laga do
    if (saveBtn) {
        saveBtn.dataset.isSaving = "true";
        saveBtn.classList.add('loading');
    }

    try {
        const name = document.getElementById('customerName').value.trim();
        const contact = document.getElementById('customerContact').value.trim();
        const model = document.getElementById('model').value;
        const source = document.getElementById('leadSource').value;
        const priority = document.getElementById('leadPriority').value;
        const time = document.getElementById('followUpTime').value;
        const notes = document.getElementById('leadNotes').value.trim();
        const tagsRaw = document.getElementById('leadTags').value.trim();

        const errEl = document.getElementById('err-contact');
        const contactField = document.getElementById('customerContact');
        errEl.style.display = 'none';
        contactField.classList.remove('invalid');

        // VALIDATION CHECKS
        if (!name || !contact || !model || !time) {
            showToast('warning', 'Missing required fields', 'Please fill in name, contact, model and follow-up date.');
            return; // Finally block isko automatically unlock kar dega
        }
        if (!isValidPhone(contact)) {
            errEl.style.display = 'block';
            contactField.classList.add('invalid');
            showToast('warning', 'Invalid phone number', 'Please check the contact number format.');
            return;
        }

        // DUPLICATE CHECK LOGIC
        try {
            let checkRes = await fetch(`${API_BASE_URL}/leads?owner=admin`);
            if (checkRes.ok) {
                let globalLeads = await checkRes.json();
                let isDuplicate = globalLeads.find(l => l.customerContact === contact);

                if (isDuplicate) {
                    errEl.innerText = `Assigned to ${isDuplicate.owner} (Status: ${isDuplicate.status})`;
                    errEl.style.display = 'block';
                    contactField.classList.add('invalid');

                    let msg = isDuplicate.owner === currentUser
                        ? `You already saved this number earlier.`
                        : `Lead blocked! This number is already assigned to ${isDuplicate.owner}.`;

                    showToast('error', 'Duplicate Entry', msg);
                    contactField.focus();
                    return;
                }
            }
        } catch (err) {
            console.log("Global duplicate check failed", err);
        }

        // NEW LEAD OBJECT CREATION
        const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
        const now = new Date().toISOString();

        const newLead = {
            id: 'L-' + Date.now().toString().slice(-6),
            owner: currentUser,
            customerName: name,
            customerContact: contact,
            model: model,
            source: source,
            priority: priority,
            notes: notes,
            status: 'Open',
            followUpTime: time,
            createdAt: now,
            tags: tags,
            lostReason: "", wonSerial: "", wonInvoice: "", wonDate: "", wonArticle: "", wonModel: "", wonAmount: "",
            history: JSON.stringify([{ type: 'created', title: 'Lead created', time: now, body: `Added via ${source}. Priority: ${priority}` }])
        };

        // SAVE DATA TO DATABASE (API POST)
        try {
            let response = await fetch(`${API_BASE_URL}/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newLead)
            });

            if (response.ok) {
                showToast('success', 'Lead saved', 'Cloud par successfully save ho gaya!');
                
                // Form Clear karna
                document.getElementById('customerName').value = "";
                document.getElementById('customerContact').value = "";
                document.getElementById('model').value = "";
                document.getElementById('followUpTime').value = "";
                document.getElementById('leadNotes').value = "";
                document.getElementById('leadTags').value = "";

                // UI update karna
                if (typeof fetchAllLeadsFromDatabase === "function") {
                    await fetchAllLeadsFromDatabase();
                }
            } else {
                showToast('error', 'Save failed', 'Database me save nahi ho paya.');
            }
        } catch (err) {
            showToast('error', 'Network Error', 'Server se connect nahi ho paaya.');
        }

    } catch (error) {
        console.log("Main Execution Error:", error);
    } finally {
        // 2. UNLOCK PROCESS (Har haal me chalega)
        if (saveBtn) {
            saveBtn.dataset.isSaving = "false";
            saveBtn.classList.remove('loading');
        }
    }
}
    
    function promptActionModal(leadId, actionType) {
      activeActionLeadId = leadId;
      const lead = allLeads.find(l => l.id === leadId);
      if (actionType === 'Lost') {
        document.getElementById('lost-reason-select').value = "";
        document.getElementById('lost-reason-input').value = "";
        document.getElementById('lost-reason-input').classList.add('hidden');
        document.getElementById('modal-lost').classList.remove('hidden');
      } else if (actionType === 'Closed') {
        document.getElementById('won-serial').value = ""; document.getElementById('won-invoice').value = "";
        document.getElementById('won-date').value = new Date().toISOString().split('T')[0];
        document.getElementById('won-article').value = ""; document.getElementById('won-model').value = lead.model;
        document.getElementById('won-amount').value = "";
        document.getElementById('modal-won').classList.remove('hidden');
      }
    }

    function toggleLostOther() {
      const sel = document.getElementById('lost-reason-select').value;
      const box = document.getElementById('lost-reason-input');
      if (sel === 'Other') { box.classList.remove('hidden'); box.placeholder = 'Please specify the reason...'; }
      else { box.classList.add('hidden'); }
    }

    function closeModals() {
      document.getElementById('modal-lost').classList.add('hidden');
      document.getElementById('modal-won').classList.add('hidden');
      document.getElementById('modal-detail').classList.add('hidden');
      document.getElementById('modal-edit').classList.add('hidden');
      activeActionLeadId = null;
    }

    async function confirmLost() {
      const select = document.getElementById('lost-reason-select').value;
      const other = document.getElementById('lost-reason-input').value.trim();
      if (!select) { showToast('warning', 'Reason required', 'Please select why this deal was lost.'); return; }
      if (select === 'Other' && !other) { showToast('warning', 'Add detail', 'Please specify the reason.'); return; }
      const reason = select === 'Other' ? other : select;

      const lead = allLeads.find(l => l.id === activeActionLeadId);
      if (lead) {
        let currentHistory = typeof lead.history === 'string' ? JSON.parse(lead.history) : (lead.history || []);
        currentHistory.push({ type: 'loss', title: 'Deal marked as Lost', time: new Date().toISOString(), body: `Reason: ${reason}` });
        
        const updateData = { status: 'Lost', lostReason: reason, history: JSON.stringify(currentHistory) };

        try {
          let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updateData)
          });
          if(response.ok) {
            closeModals(); 
            await fetchAllLeadsFromDatabase(); // Cloud se naya data refresh karo
            showToast('info', 'Deal marked as lost', 'Full details synced to cloud.');
          }
        } catch(e) { showToast('error', 'Sync Error', 'Cloud par update nahi ho paaya.'); }
      }
    }


    async function confirmWon() {
      const serial = document.getElementById('won-serial').value.trim();
      const invoice = document.getElementById('won-invoice').value.trim();
      const date = document.getElementById('won-date').value.trim();
      const article = document.getElementById('won-article').value.trim();
      const model = document.getElementById('won-model').value.trim();
      const amount = document.getElementById('won-amount').value.trim();

      if (!serial || !invoice || !date || !article || !model) { showToast('warning', 'Missing details', 'Please fill all closing details.'); return; }

      const lead = allLeads.find(l => l.id === activeActionLeadId);
      if (lead) {
        let currentHistory = typeof lead.history === 'string' ? JSON.parse(lead.history) : (lead.history || []);
        currentHistory.push({ type: 'win', title: 'Deal marked as Won 🎉', time: new Date().toISOString(), body: `Model: ${model} · Serial: ${serial} · Invoice: ${invoice} · Article: ${article}${amount ? ' · ₹' + amount : ''}` });
        
        const updateData = {
          status: 'Closed', wonSerial: serial, wonInvoice: invoice, wonDate: date, 
          wonArticle: article, wonModel: model, wonAmount: amount, history: JSON.stringify(currentHistory)
        };

        try {
          let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updateData)
          });
          if(response.ok) {
            closeModals(); 
            await fetchAllLeadsFromDatabase(); // Cloud se refresh karo
            showToast('success', 'Deal closed!', 'Invoice details saved to cloud.');
            confettiBurst();
          }
        } catch(e) { showToast('error', 'Sync Error', 'Cloud par update nahi ho paaya.'); }
      }
    }


    /* ---- Lead detail / history modal ---- */
    function openLeadDetail(leadId) {
      const lead = allLeads.find(l => l.id === leadId);
      if (!lead) return;
      activeDetailLeadId = leadId;

      document.getElementById('detail-title').innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M15 9h4"/><path d="M15 13h4"/><path d="M5 17c.6-1.5 1.9-2.5 3.5-2.5S11.4 15.5 12 17"/></svg> ${lead.customerName}`;

      const bannerColors = { Open: 'var(--primary-soft)', Closed: 'var(--success-soft)', Lost: 'var(--danger-soft)' };
      const bannerText = { Open: 'This lead is currently active and in progress.', Closed: 'This deal was won — invoice details below.', Lost: 'This deal was lost — reason recorded below.' };
      document.getElementById('detail-status-banner').innerHTML = `
        <div style="background:${bannerColors[lead.status]}; padding:10px 14px; border-radius:10px; margin-bottom:16px; font-size:0.85rem; display:flex; align-items:center; gap:8px;">
          <span class="badge badge-${lead.status.toLowerCase()}">${lead.status}</span> ${bannerText[lead.status]}
        </div>`;

      document.getElementById('detail-grid').innerHTML = `
        <div class="d-item"><span class="d-label">Phone</span><span class="d-val">${lead.customerContact}</span></div>
        <div class="d-item"><span class="d-label">Model Requested</span><span class="d-val">${lead.model}</span></div>
        <div class="d-item"><span class="d-label">Source</span><span class="d-val">${lead.source}</span></div>
        <div class="d-item"><span class="d-label">Priority</span><span class="d-val">${lead.priority || 'Medium'}</span></div>
        <div class="d-item"><span class="d-label">Owner</span><span class="d-val">${lead.owner}</span></div>
        <div class="d-item"><span class="d-label">Created</span><span class="d-val">${new Date(lead.createdAt).toLocaleString()}</span></div>
        <div class="d-item" style="grid-column:1/-1;"><span class="d-label">Tags</span><span class="d-val">${(lead.tags && lead.tags.length) ? lead.tags.map(t => `<span class="tag-pill">${t}</span>`).join(' ') : '—'}</span></div>
        <div class="d-item" style="grid-column:1/-1;"><span class="d-label">Original Notes</span><span class="d-val" style="font-weight:400;">${lead.notes || '—'}</span></div>
      `;

      let outcomeHtml = '';
      if (lead.status === 'Closed') {
        outcomeHtml = `
          <h2 style="font-size:0.95rem; margin-bottom:12px;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--success);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h5"/><path d="M8 17h8"/></svg> Won Deal — Invoice Details</h2>
          <div class="detail-grid" style="margin-bottom:0;">
            <div class="d-item"><span class="d-label">Serial Number</span><span class="d-val">${lead.wonSerial}</span></div>
            <div class="d-item"><span class="d-label">Invoice Number</span><span class="d-val">${lead.wonInvoice}</span></div>
            <div class="d-item"><span class="d-label">Purchase Date</span><span class="d-val">${lead.wonDate}</span></div>
            <div class="d-item"><span class="d-label">Article Code</span><span class="d-val">${lead.wonArticle}</span></div>
            <div class="d-item"><span class="d-label">Model Sold</span><span class="d-val">${lead.wonModel}</span></div>
            <div class="d-item"><span class="d-label">Sale Amount</span><span class="d-val">${lead.wonAmount ? '₹' + lead.wonAmount : '—'}</span></div>
          </div>`;
      } else if (lead.status === 'Lost') {
        outcomeHtml = `
          <h2 style="font-size:0.95rem; margin-bottom:12px;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--danger);"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> Lost Deal — Reason</h2>
          <p style="margin:0; font-size:0.9rem;">${lead.lostReason || 'No reason recorded.'}</p>`;
      } else {
        outcomeHtml = `<p style="margin:0; color:var(--text-muted); font-size:0.88rem;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> No outcome yet — this lead is still open. Mark it Won or Lost from the Lead Manager to record final details here.</p>`;
      }
      document.getElementById('detail-outcome-block').innerHTML = outcomeHtml;

      const tl = document.getElementById('detail-timeline');
      tl.innerHTML = '';
      [...lead.history].reverse().forEach(h => {
        const cls = h.type === 'win' ? 'win' : h.type === 'loss' ? 'loss' : h.type === 'note' ? 'note' : '';
        tl.innerHTML += `
          <li class="${cls}">
            <span class="dot"></span>
            <div class="tl-title">${h.title}</div>
            <div class="tl-time">${new Date(h.time).toLocaleString()}</div>
            <div class="tl-body">${h.body}</div>
          </li>`;
      });

      document.getElementById('detail-new-note').value = '';
      document.getElementById('modal-detail').classList.remove('hidden');
    }

    async function addLeadNote() {
      const noteText = document.getElementById('detail-new-note').value.trim();
      if (!noteText) { showToast('warning', 'Empty note', 'Type something before adding.'); return; }
      const lead = allLeads.find(l => l.id === activeDetailLeadId);
      if (lead) {
        let currentHistory = typeof lead.history === 'string' ? JSON.parse(lead.history) : (lead.history || []);
        currentHistory.push({ type: 'note', title: 'Follow-up note added', time: new Date().toISOString(), body: noteText });
        
        try {
          let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ history: JSON.stringify(currentHistory) })
          });
          if(response.ok) {
            await fetchAllLeadsFromDatabase();
            openLeadDetail(activeDetailLeadId); // Modal wapas naye data se kholo
            showToast('success', 'Note added', 'Saved to cloud timeline.');
          }
        } catch(e) { showToast('error', 'Sync Error', 'Cloud par note save nahi hua.'); }
      }
    }


    function deleteLeadFromDetail() {
      const lead = allLeads.find(l => l.id === activeDetailLeadId);
      if (!lead) return;
      openConfirm({
        title: 'Delete this lead record?',
        msg: `This permanently removes ${lead.customerName}'s entire history from the cloud. This cannot be undone.`,
        okLabel: 'Delete Permanently',
        onOk: async () => {
          try {
            let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, { method: 'DELETE' });
            if(response.ok) {
              closeModals();
              await fetchAllLeadsFromDatabase();
              showToast('info', 'Record deleted', 'Lead has been permanently removed from cloud.');
            }
          } catch(e) { showToast('error', 'Sync Error', 'Failed to delete from cloud.'); }
        }
      });
    }


    /* ---- Edit lead ---- */
    function openEditLead(leadId) {
      const lead = allLeads.find(l => l.id === leadId);
      if (!lead) return;
      activeActionLeadId = leadId;
      document.getElementById('edit-name').value = lead.customerName;
      document.getElementById('edit-contact').value = lead.customerContact;
      document.getElementById('edit-model').value = lead.model;
      document.getElementById('edit-priority').value = lead.priority || 'Medium';
      document.getElementById('edit-followup').value = lead.followUpTime;
      document.getElementById('edit-notes').value = lead.notes || '';
      document.getElementById('modal-edit').classList.remove('hidden');
    }

    async function saveLeadEdit() {
      const name = document.getElementById('edit-name').value.trim();
      const contact = document.getElementById('edit-contact').value.trim();
      if (!name || !contact) { showToast('warning', 'Missing details', 'Name and contact cannot be empty.'); return; }

      // Jo lead edit ho rahi hai usko dhundho
      const lead = allLeads.find(l => l.id === activeActionLeadId);
      if (lead) {
        // History mein "Edit" ka note add karo
        let currentHistory = typeof lead.history === 'string' ? JSON.parse(lead.history) : (lead.history || []);
        currentHistory.push({ type: 'note', title: 'Lead details edited', time: new Date().toISOString(), body: 'Contact info or scheduling was updated.' });

        // Naya data jo Cloud par jayega (Names SQL columns se match hone chahiye)
        const updateData = {
          customerName: name, 
          customerContact: contact,
          model: document.getElementById('edit-model').value,
          priority: document.getElementById('edit-priority').value,
          followUpTime: document.getElementById('edit-followup').value,
          notes: document.getElementById('edit-notes').value.trim(),
          history: JSON.stringify(currentHistory)
        };

        try {
          // Cloud par PUT request bhejo
          let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(updateData)
          });
          
          if(response.ok) {
            closeModals(); 
            // Cloud se wapas fresh data mangwao
            if(typeof fetchAllLeadsFromDatabase === "function") {
                await fetchAllLeadsFromDatabase(); 
            } else {
                refreshAllData();
            }
            showToast('success', 'Lead updated', 'Changes synced to cloud successfully.');
          } else {
            showToast('error', 'Update failed', 'Cloud par update nahi ho paaya.');
          }
        } catch(e) { 
            showToast('error', 'Sync Error', 'Network error, cloud update failed.'); 
        }
      }
    }

    /* ==========================================================
       GENERIC CONFIRM DIALOG
    ========================================================== */
    let confirmCallback = null;
    function openConfirm({ title, msg, okLabel, onOk, icon }) {
      document.getElementById('confirm-title').innerText = title;
      document.getElementById('confirm-msg').innerText = msg;
      document.getElementById('confirm-ok-btn').innerText = okLabel || 'Yes, Continue';
      document.getElementById('confirm-icon').innerHTML = ic(icon || 'fa-solid fa-triangle-exclamation');
      confirmCallback = onOk;
      document.getElementById('confirm-ok-btn').onclick = function() {
        if (confirmCallback) confirmCallback();
        closeConfirm();
      };
      document.getElementById('modal-confirm').classList.remove('hidden');
    }
    function closeConfirm() { document.getElementById('modal-confirm').classList.add('hidden'); confirmCallback = null; }

    /* ==========================================================
       FILTER / SORT
    ========================================================== */
    function buildStatusChips() {
      const wrap = document.getElementById('status-filter-chips');
      const options = [
        { key: 'All', label: 'All', icon: 'fa-solid fa-layer-group' }, 
        { key: 'Open', label: 'Open', icon: 'fa-solid fa-spinner' }, 
        { key: 'Closed', label: 'Won', icon: 'fa-solid fa-check' }, 
        { key: 'Lost', label: 'Lost', icon: 'fa-solid fa-xmark' },
        { key: 'Junk', label: 'Junk', icon: 'fa-solid fa-trash' } // Naya Junk Chip
      ];
      wrap.innerHTML = options.map(o => `<div class="chip clickable" data-key="${o.key}" onclick="setStatusFilter('${o.key}')">${ic(o.icon)} ${o.label} <span class="cnt" id="chip-cnt-${o.key}">0</span></div>`).join('');
    }
    
    function setStatusFilter(key) { statusFilter = key; renderLeadsTable(); }
    function setSortLeads(key) {
      if (leadSortKey === key) leadSortDir = leadSortDir === 'asc' ? 'desc' : 'asc';
      else { leadSortKey = key; leadSortDir = 'asc'; }
      renderLeadsTable();
    }

    /* ==========================================================
       RENDERERS
    ========================================================== */
    function refreshAllData() {
      if (!currentUser) return;
      const myLeads = getMyLeads();

      const total = myLeads.length;
      const open = myLeads.filter(l => l.status === 'Open').length;
      const closed = myLeads.filter(l => l.status === 'Closed').length;
      const lost = myLeads.filter(l => l.status === 'Lost').length;
      const junk = myLeads.filter(l => l.status === 'Junk').length;

      // ==========================================
      // SAFE DOM UPDATES 
      // ==========================================
      if (document.getElementById('stat-total')) document.getElementById('stat-total').innerText = total;
      if (document.getElementById('stat-open')) document.getElementById('stat-open').innerText = open;
      if (document.getElementById('stat-closed')) document.getElementById('stat-closed').innerText = closed;
      if (document.getElementById('stat-lost')) document.getElementById('stat-lost').innerText = lost;
      
      // JUNK LOGIC
      const validTotalForConversion = total - junk;
      const convRate = validTotalForConversion > 0 ? ((closed / validTotalForConversion) * 100).toFixed(1) + '%' : '0%';
      
      if (document.getElementById('stat-conversion')) document.getElementById('stat-conversion').innerText = convRate;
      
      // Avatar & Name Logic 
      if (document.getElementById('welcome-name')) {
        let uName = currentUser.split('_')[0];
        document.getElementById('welcome-name').innerText = uName;
        
        if (document.getElementById('user-avatar')) {
            document.getElementById('user-avatar').innerText = uName.charAt(0).toUpperCase();
        }
      }

      // CHIPS LOGIC
      ['All', 'Open', 'Closed', 'Lost', 'Junk'].forEach(k => {
        const el = document.getElementById('chip-cnt-' + k);
        if (el) el.innerText = k === 'All' ? total : myLeads.filter(l => l.status === k).length;
        const chipEl = document.querySelector(`.chip[data-key="${k}"]`);
        if (chipEl) chipEl.classList.toggle('active', statusFilter === k);
      });

      // ==========================================
      // 🛡️ THE BULLETPROOF RENDERER (CRASH ISOLATION)
      // ==========================================
      // अब अगर कोई एक चीज़ खराब होगी, तो वो बाकी ऐप को नहीं रोकेगी!
      try { renderWeekChart(myLeads); } catch(e) { console.error('Week Chart Error:', e); }
      try { renderFunnel(myLeads); } catch(e) { console.error('Funnel Error:', e); }
      try { renderGlobalLeaderboard(); } catch(e) { console.error('Leaderboard Error:', e); }
      try { renderLeadsTable(); } catch(e) { console.error('Leads Table Error:', e); }
      try { renderPipelineBoard(myLeads); } catch(e) { console.error('Pipeline Error:', e); }
      try { renderAlerts(myLeads); } catch(e) { console.error('Alerts Error:', e); }
      
      try { 
          if (typeof isAdminAuthenticated !== 'undefined' && isAdminAuthenticated) showAdminPanel(); 
      } catch(e) { 
          console.error('Admin Panel Error:', e); 
      }
    }

    
    function renderWeekChart(myLeads) {
      const days = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        days.push({ label: d.toLocaleDateString(undefined, { weekday: 'short' }), key: d.toDateString(), count: 0 });
      }
      myLeads.forEach(l => {
        const created = new Date(l.createdAt).toDateString();
        const day = days.find(d => d.key === created);
        if (day) day.count++;
      });
      const max = Math.max(...days.map(d => d.count), 1);
      const chart = document.getElementById('week-bar-chart');
      chart.innerHTML = days.map(d => `
        <div class="bar-col">
          <div class="bar" style="height:${(d.count / max) * 100}%;" title="${d.count} leads"></div>
          <div class="bar-label">${d.label}</div>
        </div>`).join('');
    }

    function renderFunnel(myLeads) {
      const total = myLeads.length || 1;
      const stages = [
        { label: 'Total', count: myLeads.length, color: 'linear-gradient(90deg, var(--primary), var(--primary-2))' },
        { label: 'Open', count: myLeads.filter(l => l.status === 'Open').length, color: 'linear-gradient(90deg, #f59e0b, #d97706)' },
        { label: 'Won', count: myLeads.filter(l => l.status === 'Closed').length, color: 'linear-gradient(90deg, #10b981, #059669)' },
        { label: 'Lost', count: myLeads.filter(l => l.status === 'Lost').length, color: 'linear-gradient(90deg, #ef4444, #dc2626)' }
      ];
      const maxCount = Math.max(...stages.map(s => s.count), 1);
      document.getElementById('funnel-chart').innerHTML = stages.map(s => `
        <div class="funnel-step">
          <div class="funnel-label">${s.label}</div>
          <div class="funnel-track"><div class="funnel-fill" style="width:${(s.count / maxCount) * 100}%; background:${s.color};">${s.count}</div></div>
        </div>`).join('');
    }

    function renderLeaderboard() {
      const box = document.getElementById('leaderboard-container');
      const stats = {};
      allLeads.forEach(l => {
        if (!stats[l.owner]) stats[l.owner] = { total: 0, won: 0 };
        stats[l.owner].total++;
        if (l.status === 'Closed') stats[l.owner].won++;
      });
      const rows = Object.entries(stats).map(([owner, s]) => ({ owner, ...s, rate: s.total ? (s.won / s.total * 100) : 0 }))
        .sort((a, b) => b.won - a.won).slice(0, 5);
      if (!rows.length) { box.innerHTML = `<div class="empty-state"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="6"/><path d="m9 10-4.5-7"/><path d="m15 10 4.5-7"/><path d="M12 12v6"/></svg><p>No sales activity yet.</p></div>`; return; }
      box.innerHTML = rows.map((r, i) => `
        <div style="display:flex; align-items:center; gap:14px; padding:10px 0; ${i < rows.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}">
          <div class="avatar-chip">${r.owner.slice(0, 2).toUpperCase()}</div>
          <div style="flex:1;">
            <div style="font-weight:700; font-size:0.88rem;">${r.owner} ${r.owner === currentUser ? '<span style="color:var(--primary); font-size:0.72rem;">(you)</span>' : ''}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${r.won} won of ${r.total} leads · ${r.rate.toFixed(0)}% rate</div>
          </div>
          <div style="font-weight:800; font-family:var(--font-display); color:var(--primary);">#${i + 1}</div>
        </div>`).join('');
    }

    /* ==========================================================
   PERFORMANCE HELPER (SEARCH DEBOUNCE)
========================================================== */
let searchTimeout;
function debouncedSearch() {
    clearTimeout(searchTimeout);
    
    // User ke type karna band karne ke 300ms baad hi search chalega
    searchTimeout = setTimeout(() => {
        renderLeadsTable(); 
    }, 300);
    }
    

    function renderLeadsTable() { 
      const myLeads = getMyLeads();
      const filterText = (document.getElementById('searchLeadInput').value || '').toLowerCase();
      const dateFilter = document.getElementById('dateLeadFilter') ? document.getElementById('dateLeadFilter').value : 'all';

      let rows = myLeads.filter(l => statusFilter === 'All' || l.status === statusFilter);

      // DATE FILTER LOGIC
      const today = new Date();
      const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
      
      if (dateFilter === 'today') {
          rows = rows.filter(l => new Date(l.createdAt).toDateString() === today.toDateString());
      } else if (dateFilter === 'yesterday') {
          rows = rows.filter(l => new Date(l.createdAt).toDateString() === yesterday.toDateString());
      } else if (dateFilter === 'this_month') {
          rows = rows.filter(l => {
              let d = new Date(l.createdAt);
              return d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
          });
      }

      if (filterText) { rows = rows.filter(l => (l.customerName + l.customerContact + l.model).toLowerCase().includes(filterText)); }
      
      rows.sort((a, b) => {
        let av = a[leadSortKey], bv = b[leadSortKey];
        if (leadSortKey === 'followUpTime') { av = new Date(av).getTime(); bv = new Date(bv).getTime(); }
        if (typeof av === 'string') { av = av.toLowerCase(); bv = bv.toLowerCase(); }
        if (av < bv) return leadSortDir === 'asc' ? -1 : 1;
        if (av > bv) return leadSortDir === 'asc' ? 1 : -1;
        return 0;
      });

      ['customerName', 'model', 'priority', 'followUpTime'].forEach(k => { 
          let el = document.getElementById('sort-' + k);
          if(el) el.innerText = leadSortKey === k ? (leadSortDir === 'asc' ? '▲' : '▼') : ''; 
      });

      const tbody = document.getElementById('leadsContainer');
      tbody.innerHTML = "";
      if (rows.length === 0) {
    tbody.innerHTML = `
    <tr>
        <td colspan="5" style="border: none;">
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                <h3>No Records Found</h3>
                <p>Abhi yahan dikhane ke liye koi data nahi hai.</p>
            </div>
        </td>
    </tr>`;
    return; // यहीं से कोड रुक जाएगा, आगे का खाली लूप नहीं चलेगा
}
          
      rows.forEach(lead => {
        let sBadge = lead.status === 'Closed' ? 'badge-closed' : (lead.status === 'Lost' ? 'badge-lost' : (lead.status === 'Junk' ? 'badge-junk' : 'badge-open'));
        const overdue = lead.status === 'Open' && new Date(lead.followUpTime) < new Date();
        tbody.innerHTML += `
          <tr>
            <td>
              <div class="clickable" style="cursor:pointer;" onclick="openLeadDetail('${lead.id}')">
                <strong>${lead.customerName}</strong><br>
                <small style='color:var(--text-muted)'>${lead.customerContact}</small>
              </div>
            </td>
            <td>${lead.model}</td>
            <td>
              <span class='badge ${sBadge}' style="margin-bottom:6px;">${lead.status}</span><br>
              <span class='tag-pill'>${lead.priority || 'Medium'} Priority</span>
            </td>
            <td>
              <small style="font-weight:600; ${overdue ? 'color:var(--danger);' : ''}">${new Date(lead.followUpTime).toLocaleString()}</small>
            </td>
            <td>
              <div class='flex-group'>
                ${lead.status === 'Open' ? `
                  <button class='btn btn-success btn-sm clickable' title="Won" onclick="promptActionModal('${lead.id}', 'Closed')">${ic('fa-solid fa-check')}</button>
                  <button class='btn btn-danger btn-sm clickable' title="Drop" onclick="promptActionModal('${lead.id}', 'Lost')">${ic('fa-solid fa-xmark')}</button>
                  <button class='btn btn-secondary btn-sm clickable' title="Mark as Junk/Invalid" onclick="markLeadAsJunk('${lead.id}')"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                  <button class='btn btn-secondary btn-sm clickable' title="Edit" onclick="openEditLead('${lead.id}')">${ic('fa-solid fa-pen')}</button>
                ` : `<button class='btn btn-secondary btn-sm clickable' onclick="openLeadDetail('${lead.id}')">View History</button>`}
              </div>
            </td>
          </tr>
        `;
      });
    }

        // NAYA FUNCTION: Mark Lead as Junk
    function markLeadAsJunk(leadId) {
        openConfirm({
            title: 'Mark as Junk?',
            msg: 'If this number is invalid or spam, mark it as Junk. It will be removed from your active conversion rate calculation.',
            icon: 'fa-solid fa-trash',
            okLabel: 'Yes, Mark as Junk',
            onOk: async () => {
                const lead = allLeads.find(l => l.id === leadId);
                if (lead) {
                    let currentHistory = typeof lead.history === 'string' ? JSON.parse(lead.history) : (lead.history || []);
                    currentHistory.push({ type: 'loss', title: 'Marked as Junk / Invalid', time: new Date().toISOString(), body: 'Lead moved to Junk.' });
                    const updateData = { status: 'Junk', history: JSON.stringify(currentHistory) };
                    try {
                        let response = await fetch(`${API_BASE_URL}/leads/${lead.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updateData) });
                        if(response.ok) { 
                            await fetchAllLeadsFromDatabase(); 
                            showToast('info', 'Moved to Junk', 'Lead removed from active metrics.'); 
                        }
                    } catch(e) { showToast('error', 'Sync Error', 'Failed to update cloud.'); }
                }
            }
        });
    }

        // ==========================================
    // PASSWORD EYE ANIMATION LOGIC
    // ==========================================
    function togglePasswordAnim() {
      const passInput = document.getElementById('login-pass');
      const iconBox = document.getElementById('eye-icon-box');
      
      if (passInput.type === 'password') {
        // पासवर्ड दिखाओ (बिना लाइन वाली आँख)
        passInput.type = 'text';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>`;
      } else {
        // पासवर्ड छिपाओ (लाइन वाली आँख)
        passInput.type = 'password';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>`;
      }
    }

    function toggleRegPasswordAnim() {
      const passInput = document.getElementById('reg-pass');
      const iconBox = document.getElementById('reg-eye-icon-box');
      
      if (passInput.type === 'password') {
        passInput.type = 'text';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>`;
      } else {
        passInput.type = 'password';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>`;
      }
        }

        // ==========================================
    // ADMIN EYE ANIMATION LOGIC
    // ==========================================
    function toggleAdminPwAnim() {
      const passInput = document.getElementById('admin-pass-key');
      const iconBox = document.getElementById('admin-eye-icon-box');
      
      if (passInput.type === 'password') {
        passInput.type = 'text';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>`;
      } else {
        passInput.type = 'password';
        iconBox.innerHTML = `
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>`;
      }
    }
    
    

    function renderPipelineBoard(myLeads) {
      const board = document.getElementById('pipeline-board');
      const stages = [
        { key: 'Open', title: 'In Progress', icon: 'fa-solid fa-spinner', color: 'var(--primary)' },
        { key: 'Closed', title: 'Won', icon: 'fa-solid fa-trophy', color: 'var(--success)' },
        { key: 'Lost', title: 'Lost', icon: 'fa-solid fa-circle-xmark', color: 'var(--danger)' }
      ];
      board.innerHTML = stages.map(s => {
        const items = myLeads.filter(l => l.status === s.key).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        return `
        <div class="card tight" style="min-height:200px;">
          <h2 style="font-size:0.95rem; display:flex; align-items:center; gap:8px; color:${s.color};">${ic(s.icon)} ${s.title} <span class="tag-pill" style="margin-left:auto;">${items.length}</span></h2>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${items.length ? items.map(l => `
              <div class="card tight clickable" style="margin-bottom:0; cursor:pointer; border-left:3px solid ${s.color};" onclick="openLeadDetail('${l.id}')">
                <div style="font-weight:700; font-size:0.85rem;">${l.customerName}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${l.model}</div>
                <div style="font-size:0.7rem; color:var(--text-muted); margin-top:6px;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${new Date(l.followUpTime).toLocaleDateString()}</div>
              </div>`).join('') : `<div class="empty-state" style="padding:20px;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="font-size:1.6rem;"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg><p style="font-size:0.8rem;">Nothing here yet.</p></div>`}
          </div>
        </div>`;
      }).join('');
    }

    function renderAlerts(myLeads) {
      const alertsBox = document.getElementById('alertsContainer');
      const upcomingBox = document.getElementById('upcomingContainer');
      alertsBox.innerHTML = ""; upcomingBox.innerHTML = "";
      let alertsCount = 0, upcomingCount = 0;
      const now = new Date();
      const in48h = new Date(now.getTime() + 48 * 60 * 60 * 1000);

      myLeads.forEach(lead => {
        if (lead.status !== 'Open') return;
        const fu = new Date(lead.followUpTime);
        if (fu < now) {
          alertsCount++;
          alertsBox.innerHTML += `
            <div class="clickable" style='background:var(--danger-soft); border-left:4px solid var(--danger); padding:16px; margin-bottom:12px; border-radius:10px; display:flex; align-items:center; gap:12px; cursor:pointer;' onclick="openLeadDetail('${lead.id}')">
              ${ic('fa-solid fa-triangle-exclamation', 'style="color:var(--danger); font-size:1.4rem;"')}
              <div>
                <strong style='color:var(--danger);'>OVERDUE: ${lead.customerName}</strong><br>
                <span style='font-size:0.85rem; color:var(--text-muted);'>Follow up for ${lead.model} was due at ${fu.toLocaleString()}</span>
              </div>
            </div>`;
        } else if (fu <= in48h) {
          upcomingCount++;
          upcomingBox.innerHTML += `
            <div class="clickable" style='background:var(--info-soft); border-left:4px solid var(--info); padding:14px 16px; margin-bottom:10px; border-radius:10px; display:flex; align-items:center; gap:12px; cursor:pointer;' onclick="openLeadDetail('${lead.id}')">
              ${ic('fa-regular fa-clock', 'style="color:var(--info); font-size:1.2rem;"')}
              <div>
                <strong>${lead.customerName}</strong><br>
                <span style='font-size:0.82rem; color:var(--text-muted);'>${lead.model} — due ${fu.toLocaleString()}</span>
              </div>
            </div>`;
        }
      });

      if (alertsCount === 0) alertsBox.innerHTML = `<div class='empty-state'>${ic('fa-solid fa-check-circle')}<p>All caught up! No pending critical alerts.</p></div>`;
      if (upcomingCount === 0) upcomingBox.innerHTML = `<div class='empty-state' style='padding:24px;'>${ic('fa-regular fa-calendar-check', 'style="font-size:1.8rem;"')}<p style='font-size:0.85rem;'>Nothing scheduled in the next 48 hours.</p></div>`;

      const navBadge = document.getElementById('alert-nav-badge');
      if (alertsCount > 0) { navBadge.innerText = alertsCount; navBadge.classList.remove('hidden'); }
      else { navBadge.classList.add('hidden'); }
    }

    /* ==========================================================
       CSV EXPORTS
    ========================================================== */
    function downloadCsv(filename, csvData) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([csvData], { type: 'text/csv' }));
      link.download = filename;
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
      showToast('success', 'Export ready', `${filename} has been downloaded.`);
    }

    function exportMyLeadsCsv() {
      const rows = getMyLeads();
      if (!rows.length) { showToast('warning', 'Nothing to export', 'You have no leads yet.'); return; }
      let csv = "ID,Customer,Contact,Model,Source,Priority,Status,FollowUp,Created,LostReason,WonSerial,WonInvoice,WonDate,WonArticle,WonModel,WonAmount,Tags\n";
      rows.forEach(l => {
        csv += `${l.id},"${l.customerName}",${l.customerContact},"${l.model}",${l.source},${l.priority},${l.status},${l.followUpTime},${l.createdAt},"${l.lostReason||''}",${l.wonSerial||''},${l.wonInvoice||''},${l.wonDate||''},${l.wonArticle||''},"${l.wonModel||''}",${l.wonAmount||''},"${(l.tags||[]).join('|')}"\n`;
      });
      downloadCsv('My_Leads_Export.csv', csv);
    }

// --- NORMAL USER EXPORT ---
function exportMyDeals(type) {
    const myLeads = getMyLeads();
    const data = myLeads.filter(l => l.status === type);

    if (data.length === 0) { 
        showToast('warning', 'Nothing to export', 'You have no ' + type + ' deals.'); 
        return; 
    }

    let csvData = "";
    
    if (type === 'Closed' || type === 'won') {
        csvData = "ID,Customer,Contact,Source,Model,Serial,Invoice,Date,Article,Amount\n";
        data.forEach(l => {
            csvData += l.id + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + (l.wonSerial || '') + "," + (l.wonInvoice || '') + "," + (l.wonDate || '') + "," + (l.wonArticle || '') + "," + (l.wonAmount || '') + "\n";
        });
    } 
    else if (type === 'Lost' || type === 'lost') {
        csvData = "ID,Customer,Contact,Source,Model,Reason\n";
        data.forEach(l => {
            csvData += l.id + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + (l.lostReason || '') + "\n";
        });
    } 
    else {
        // Open Leads ke liye
        csvData = "ID,Customer,Contact,Source,Model,Status\n";
        data.forEach(l => {
            csvData += l.id + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + l.status + "\n";
        });
    }

    downloadCsv('My_' + type + '_Deals_Export.csv', csvData);
}


// --- ADMIN EXPORT ---
function exportDeals(type) {
    const data = allLeads.filter(l => l.status === type);
    
    if (data.length === 0) { 
        showToast('warning', 'Nothing to export', 'No ' + type + ' deals found.'); 
        return; 
    }

    let csvData = "";
    
    if (type === 'Closed' || type === 'won') {
        csvData = "ID,Agent,Customer,Contact,Source,Model,Serial,Invoice,Date,Article,Amount\n";
        data.forEach(l => {
            csvData += l.id + "," + l.owner + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + (l.wonSerial || '') + "," + (l.wonInvoice || '') + "," + (l.wonDate || '') + "," + (l.wonArticle || '') + "," + (l.wonAmount || '') + "\n";
        });
    } 
    else if (type === 'Lost' || type === 'lost') {
        csvData = "ID,Agent,Customer,Contact,Source,Model,Reason\n";
        data.forEach(l => {
            csvData += l.id + "," + l.owner + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + (l.lostReason || '') + "\n";
        });
    } 
    else {
        // Open Leads ke liye
        csvData = "ID,Agent,Customer,Contact,Source,Model,Status\n";
        data.forEach(l => {
            csvData += l.id + "," + l.owner + "," + l.customerName + "," + l.customerContact + "," + l.source + "," + l.model + "," + l.status + "\n";
        });
    }

    downloadCsv('Admin_' + type + '_Deals_Export.csv', csvData);
}


    function exportFullBackup() {
      const backup = { users, allLeads, exportedAt: new Date().toISOString() };
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
      link.download = `Meta_CRM_Backup_${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
      showToast('success', 'Backup downloaded', 'Full system data exported as JSON.');
    }

    /* ==========================================================
       ADMIN
    ========================================================== */
    function verifyAdminKey() {
      const keyInput = document.getElementById('admin-pass-key').value;
      if (keyInput === ADMIN_KEY) {
        isAdminAuthenticated = true;
        showAdminPanel();
        showToast('success', 'Access granted', 'Welcome to the Admin Panel.');
        document.getElementById('admin-pass-key').value = '';
      } else {
        showToast('error', 'Invalid key', 'The master admin code you entered is incorrect.');
        const lockCard = document.getElementById('admin-auth-lock');
        lockCard.classList.add('shake');
        setTimeout(() => lockCard.classList.remove('shake'), 500);
      }
    }

    async function showAdminPanel() {
      // PIN wala lock hata kar seedha admin panel dikhao
      document.getElementById('admin-auth-lock').classList.add('hidden');
      document.getElementById('admin-panel-content').classList.remove('hidden');

      try {
        // Cloud API se saare registered users ki list laao
        let userRes = await fetch(`${API_BASE_URL}/users?owner=${currentUser}`);
        let dbUsers = [];
        if(userRes.ok) {
            dbUsers = await userRes.json();
        }

        // Dashboard Stats update karo (allLeads mein master admin ke paas cloud se saari leads aa chuki hain)
        document.getElementById('admin-stat-users').innerText = dbUsers.length;
        document.getElementById('admin-stat-leads').innerText = allLeads.length;
        
        const totalValue = allLeads.filter(l => l.status === 'Closed').reduce((sum, l) => sum + (parseFloat(l.wonAmount) || 0), 0);
        document.getElementById('admin-stat-value').innerText = '₹' + totalValue.toLocaleString();
        
        const overdue = allLeads.filter(l => l.status === 'Open' && new Date(l.followUpTime) < new Date()).length;
        document.getElementById('admin-stat-overdue').innerText = overdue;

        // Reset Requests (अब टेबल में रिक्वेस्ट शो होगी)
        const resetContainer = document.getElementById('adminResetContainer');
        let resetReqs = JSON.parse(localStorage.getItem('resetRequests') || '[]');
        
        if (resetReqs.length === 0) {
            resetContainer.innerHTML = `<tr><td colspan="3"><div class="empty-state" style="padding:20px;"><p style="font-size:0.85rem;">No pending password reset requests.</p></div></td></tr>`;
        } else {
            resetContainer.innerHTML = resetReqs.map(user => `
              <tr>
                <td><strong>${user}</strong></td>
                <td><input type="password" id="reset-pass-${user}" placeholder="New Password" style="margin:0; padding:8px 12px; border-radius:8px; border:1px solid var(--border); background:rgba(0,0,0,0.1);"></td>
                <td><button class="btn btn-warning btn-sm clickable" onclick="adminChangePassword('${user}')">Mark Resolved</button></td>
              </tr>
            `).join('');
        }
        
        // 1. User Directory Table Update (Seedha Supabase database ke data se)
        const usersContainer = document.getElementById('adminUsersContainer');
        usersContainer.innerHTML = dbUsers.map(u => `
          <tr>
            <td><div style="display:flex; align-items:center; gap:8px;"><div class="avatar-chip">${u.username.slice(0,2).toUpperCase()}</div>${u.username}</div></td>
            <td><small>${u.user_id}</small></td>
            <td>${allLeads.filter(l => l.owner === u.username).length}</td>
            <td><small>${new Date(u.signup_time).toLocaleDateString()}</small></td>
          </tr>`).join('');

        // 2. Master Audit Log (Global Leads Table) Update
        const searchVal = (document.getElementById('adminSearchInput').value || '').toLowerCase();
        const gLeads = document.getElementById('adminGlobalLeadsContainer');
        
        let filtered = allLeads.filter(l => (l.owner + l.customerName + l.customerContact + l.model).toLowerCase().includes(searchVal));
        
        if (!filtered.length) {
          gLeads.innerHTML = `<tr><td colspan="5"><div class="empty-state"><p>No matching records.</p></div></td></tr>`;
        } else {
          gLeads.innerHTML = filtered.map(l => {
            let badge = l.status === 'Closed' ? 'badge-closed' : (l.status === 'Lost' ? 'badge-lost' : 'badge-open');
            return `
              <tr>
                <td><strong>${l.owner}</strong></td>
                <td>${l.customerName}<br><small>${l.source}</small></td>
                <td><span class='badge ${badge}'>${l.status}</span></td>
                <td>${new Date(l.createdAt).toLocaleDateString()}</td>
                <td><button class="btn btn-secondary btn-sm clickable" onclick="openLeadDetail('${l.id}')">View</button></td>
              </tr>`;
          }).join('');
        }
      } catch(err) {
        console.error("Admin panel loading error:", err);
        showToast('error', 'Admin Error', 'Failed to load cloud data.');
      }
    }

    function lockAdminView() {
      isAdminAuthenticated = false;
      document.getElementById('admin-auth-lock').classList.remove('hidden');
      document.getElementById('admin-panel-content').classList.add('hidden');
      document.getElementById('admin-pass-key').value = "";
    }

    async function adminChangePassword(username) {
      const newPassword = document.getElementById('reset-pass-' + username).value.trim();
      if (!newPassword) { 
          showToast('warning', 'Enter password', 'Please type a new password first.'); 
          return; 
      }
      
      try {
        // 1. Cloud Backend (Render API) ko naya password update karne ki request bhejna
        let response = await fetch(`${API_BASE_URL}/reset-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: username, newPassword: newPassword })
        });
        
        if(response.ok) {
            // 2. Agar database mein password sach mein badal gaya, toh request list se hatao
            let requests = JSON.parse(localStorage.getItem('resetRequests') || '[]');
            requests = requests.filter(u => u !== username);
            localStorage.setItem('resetRequests', JSON.stringify(requests));
            
            showToast('success', 'Password Updated!', `${username} ka naya password database mein set ho gaya hai!`);
            showAdminPanel(); // Table refresh karega
        } else {
            let data = await response.json();
            showToast('error', 'Update Failed', data.error || 'Backend par password reset nahi ho paaya.');
        }
      } catch (err) {
        showToast('error', 'Network Error', 'Server (Render) se connect nahi ho paaya.');
      }
    }



    /* ==========================================================
       COMMAND PALETTE (Ctrl+K quick search)
    ========================================================== */
    function openCmdk() {
      document.getElementById('cmdk-overlay').classList.remove('hidden');
      document.getElementById('cmdk-input').value = '';
      document.getElementById('cmdk-input').focus();
      cmdkSearch();
    }
    function closeCmdk() { document.getElementById('cmdk-overlay').classList.add('hidden'); }

    function cmdkSearch() {
      const q = document.getElementById('cmdk-input').value.toLowerCase().trim();
      const nav = [
        { label: 'Go to Dashboard', icon: 'fa-solid fa-chart-pie', action: () => switchTab('dashboard') },
        { label: 'Go to Lead Manager', icon: 'fa-solid fa-users', action: () => switchTab('leads') },
        { label: 'Go to Pipeline Board', icon: 'fa-solid fa-table-columns', action: () => switchTab('pipeline') },
        { label: 'Go to Alerts & Tasks', icon: 'fa-solid fa-bell', action: () => switchTab('alerts') },
        { label: 'Go to Admin Panel', icon: 'fa-solid fa-shield-halved', action: () => switchTab('admin') },
        { label: 'Toggle Dark Mode', icon: 'fa-solid fa-moon', action: () => toggleTheme() },
      ];
      let items = [];
      if (!q) items = nav;
      else {
        items = nav.filter(n => n.label.toLowerCase().includes(q));
        const leadMatches = getMyLeads().filter(l => (l.customerName + l.customerContact + l.model).toLowerCase().includes(q)).slice(0, 8)
          .map(l => ({ label: `${l.customerName} — ${l.model} (${l.status})`, icon: 'fa-solid fa-id-card', action: () => { closeCmdk(); switchTab('leads'); openLeadDetail(l.id); } }));
        items = items.concat(leadMatches);
      }
      cmdkItems = items;
      cmdkSelectedIndex = 0;
      renderCmdkResults();
    }

    function renderCmdkResults() {
      const box = document.getElementById('cmdk-results');
      if (!cmdkItems.length) { box.innerHTML = `<div class="empty-state" style="padding:24px;"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><p>No matches found.</p></div>`; return; }
      box.innerHTML = cmdkItems.map((item, i) => `<div class="cmdk-item ${i === cmdkSelectedIndex ? 'sel' : ''}" onclick="cmdkRun(${i})">${ic(item.icon)} ${item.label}</div>`).join('');
    }

    function cmdkRun(i) { if (cmdkItems[i]) { cmdkItems[i].action(); closeCmdk(); } }

    function cmdkKeydown(e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); cmdkSelectedIndex = Math.min(cmdkSelectedIndex + 1, cmdkItems.length - 1); renderCmdkResults(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); cmdkSelectedIndex = Math.max(cmdkSelectedIndex - 1, 0); renderCmdkResults(); }
      else if (e.key === 'Enter') { e.preventDefault(); cmdkRun(cmdkSelectedIndex); }
      else if (e.key === 'Escape') { closeCmdk(); }
    }

      // ==========================================================
    // RAY-BAN META OFFERS LOGIC
    // ==========================================================
    const offerImages = {
        1: "/static/clear.jpg",
        2: "/static/polarise.jpg",
        3: "/static/clear.jpg",
        4: "/static/polarise.jpg",
        5: "/static/transition.jpg",
        6: "/static/transition.jpg",
        7: "/static/clear.jpg",
        8: "/static/polarise.jpg",
        9: "/static/polarise.jpg",
        10: "/static/transition.jpg",
        11: "/static/transition.jpg",
        12: "/static/transition.jpg",
        13: "/static/sapphire.jpg"
    };

    async function fetchGlobalBanner() {
        try {
            let res = await fetch(`${API_BASE_URL}/global-banner`);
            if(res.ok) {
                let banner = await res.json();
                
                // Agar data khali hai toh kuch mat dikhao
                if(!banner.croma_price) return; 

                document.getElementById('globalOfferContainer').innerHTML = `
                <div class="premium-banner-wrapper">
                    <div class="premium-banner-header">
                        <span class="wow-badge">WOW DEAL</span>
                        <span>Apply offers for maximum savings</span>
                    </div>
                    <div class="premium-banner-body">
                        <div class="banner-half banner-left">
                            <div class="banner-price">${banner.croma_price}</div>
                            <div class="banner-subtext" style="color:#f9df9f; font-weight:700;">${banner.croma_heading}</div>
                            <div class="banner-subtext">${banner.croma_subtext}</div>
                        </div>
                        
                        <div class="banner-or">OR</div>
                        
                        <div class="banner-half">
                            <div class="banner-card-badge">${banner.card_highlight}</div>
                            <div class="banner-bank-name">${banner.card_heading}</div>
                            <div class="banner-subtext">${banner.card_subtext}</div>
                            <button class="btn-gold">Apply Now</button>
                        </div>
                    </div>
                </div>`;

            }
        } catch(e) {
            console.error("Failed to load global banner", e);
        }
        }
    
     async function fetchOffers() {
        try {
            document.getElementById('offersGrid').innerHTML = `<div class="empty-state" style="grid-column: 1/-1;"><div class="boot-ring" style="margin: 0 auto 16px; border-top-color: var(--primary);"></div><p>Syncing live offers from Supabase...</p></div>`;
            
            let res = await fetch(`${API_BASE_URL}/offers`);
            if(res.ok) {
                let offersData = await res.json();
                const grid = document.getElementById('offersGrid');
                
                grid.innerHTML = offersData.map(offer => {
                    let imgUrl = offerImages[offer.id] && offerImages[offer.id] !== `YOUR_IMAGE_LINK_HERE_${offer.id}` 
                                 ? offerImages[offer.id] 
                                 : `https://via.placeholder.com/600x400/111c34/ffffff?text=${encodeURIComponent(offer.model_name.split(' ')[3] || 'Ray-Ban')}`;
                    
                    let isDiscounted = offer.offer_price < offer.mrp;
                    let offerTag = isDiscounted ? 'SPECIAL OFFER' : 'BEST PRICE';
                    let offerColor = isDiscounted ? 'var(--success)' : 'var(--primary)';

                    return `
                    <div class="offer-card">
                        <img src="${imgUrl}" alt="${offer.model_name}" class="offer-banner">
                        <div class="offer-details">
                            <div class="offer-title">${offer.model_name}</div>
                            <div class="price-box">
                                <div class="price-mrp">
                                    <span>MRP</span>
                                    <del>₹${offer.mrp.toLocaleString()}</del>
                                </div>
                                <div class="price-offer">
                                    <span style="color: ${offerColor};">${offerTag}</span>
                                    <strong>₹${offer.offer_price.toLocaleString()}</strong>
                                </div>
                            </div>
                            <button class="btn-apply-offer" onclick="applyOfferToLead('${offer.model_name.replace(/'/g, "\\'")}', ${offer.offer_price})">
                                Apply Offer <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                            </button>
                        </div>
                    </div>`;
                }).join('');
            }
        } catch(e) {
            document.getElementById('offersGrid').innerHTML = `<div class="empty-state" style="grid-column: 1/-1; color: var(--danger);"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="font-size:3rem; margin-bottom:10px;"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><p>Failed to load offers from server.</p></div>`;
        }
    }


      /* ==========================================================
       APPLY OFFER TO LEAD LOGIC
    ========================================================== */
    function applyOfferToLead(modelName, price) {
        // 1. सीधा Leads वाले टैब पर ले जाओ
        switchTab('leads');
        
        // 2. Notes वाले बॉक्स में ऑफर की डिटेल ऑटो-फिल कर दो
        const notesField = document.getElementById('leadNotes');
        notesField.value = `Interested in: ${modelName}\nQuoted Special Price: ₹${price.toLocaleString()}`;
        
        // 3. यूज़र को टोस्ट मैसेज दिखाओ
        showToast('success', 'Offer Applied!', 'Customer detail daalkar lead save karein.');
        
        // 4. नाम वाले बॉक्स पर कर्सर (Focus) ले आओ ताकि तुरंत टाइप कर सकें
        setTimeout(() => {
            document.getElementById('customerName').focus();
        }, 300);
    }

  

  // ================= BULK CSV IMPORT LOGIC =================

// 1. Template Download Karne Ka Function
function downloadCSVTemplate() {
    // Ye template user ko batayega ki file ka format kaisa hona chahiye
    const templateData = "CustomerName,Contact,Source,Model,Status,Owner\nJohn Doe,9876543210,Instagram,Ray-Ban Meta Gen2,open,admin\nJane Smith,9123456789,WhatsApp,Transition Clear,open,Golu";
    downloadCsv("Lead_Import_Template.csv", templateData);
    showToast('info', 'Template Downloaded', 'Isi format mein apna data daal kar upload karein.');
}

// 2. CSV File ko Database me daalne ka Function
async function handleCSVImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    showToast('info', 'Importing...', 'Data upload ho raha hai, kripya pratiksha karein.');

    const reader = new FileReader();
    reader.onload = async function(e) {
        const text = e.target.result;
        // File ko line-by-line todna
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        const leadsToInsert = [];
        
        // Loop chalayenge line 2 se (kyunki line 1 me headings hoti hain)
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            
            if (values.length >= 4) { // Kam se kam 4 details honi chahiye
                leadsToInsert.push({
                    customerName: values[0] || 'Unknown',
                    customerContact: values[1] || '',
                    source: values[2] || 'Direct',
                    model: values[3] || 'Unknown',
                    status: (values[4] && values[4].toLowerCase()) || 'open',
                    owner: values[5] || currentUser // Agar owner nahi likha, to jo upload kar raha hai uske naam pe jayegi
                });
            }
        }

        if (leadsToInsert.length === 0) {
            showToast('error', 'Import Failed', 'CSV file khali hai ya format galat hai.');
            document.getElementById('csv-import-file').value = '';
            return;
        }

        try {
            // Supabase me ek sath poora array insert karna
            const { data, error } = await supabase.from('leads').insert(leadsToInsert);
            if (error) throw error;

            showToast('success', 'Import Successful!', `${leadsToInsert.length} leads database me add ho gayi hain!`);
            document.getElementById('csv-import-file').value = ''; // File input reset karein
            
            // Naya data aane ke baad table refresh karein
            await fetchAllLeadsFromDatabase(); 
        } catch (err) {
            showToast('error', 'Database Error', err.message);
        }
    };
    
    // File padhna shuru karo
    reader.readAsText(file);
}

        // ==========================================
    // SAFE & SIMPLE SWIPE ENGINE (NO BLACK SCREEN)
    // ==========================================
    (function() {
        let startX = 0;
        let startY = 0;
        const appTabs = ['dashboard', 'leads', 'pipeline', 'alerts', 'admin', 'offers'];

        function isSwipeBlocked(e) {
            let el = e.target;
            if (!el) return false;
            // फॉर्म, इनपुट या कानबन बोर्ड पर स्वाइप ब्लॉक करें
            if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(el.tagName)) return true;
            if (el.closest('.kanban-board') || el.closest('.modal-content') || el.closest('table') || el.closest('.btn')) return true;
            
            // टेबल स्क्रॉलिंग फिक्स
            let parent = el;
            while (parent && parent !== document.body) {
                if (parent.scrollWidth > parent.clientWidth) {
                    let style = window.getComputedStyle(parent);
                    if (style.overflowX === 'auto' || style.overflowX === 'scroll') return true;
                }
                parent = parent.parentElement;
            }
            return false;
        }

        document.addEventListener('touchstart', e => {
            if (isSwipeBlocked(e)) return;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchend', e => {
            if (isSwipeBlocked(e)) return;
            
            let diffX = e.changedTouches[0].clientX - startX;
            let diffY = e.changedTouches[0].clientY - startY;

            // अगर स्वाइप लेफ्ट-राइट है (थोड़ा सा 30px का टच भी काम करेगा)
            if (Math.abs(diffX) > 30 && Math.abs(diffY) < 60) {
                let availableTabs = appTabs;
                if (typeof currentUser !== 'undefined' && currentUser !== 'admin') {
                    availableTabs = appTabs.filter(t => t !== 'admin');
                }

                let currentTabName = availableTabs.find(t => {
                    let view = document.getElementById(`view-${t}`);
                    return view && !view.classList.contains('hidden');
                });

                if (!currentTabName) return;
                let currentIndex = availableTabs.indexOf(currentTabName);
                let nextIndex = currentIndex;
                
                if (diffX < 0 && currentIndex < availableTabs.length - 1) nextIndex++;
                else if (diffX > 0 && currentIndex > 0) nextIndex--;

                if (nextIndex !== currentIndex) {
                    switchTab(availableTabs[nextIndex]); // सीधा सेफ टैब स्विचर कॉल करेगा
                }
            }
        }, { passive: true });
    })();


    // ==========================================
    // 🚀 SUPABASE GLOBAL LEADERBOARD (MINIMALIST UI)
    // ==========================================
    async function renderGlobalLeaderboard() {
        const filterDropdown = document.getElementById('leaderboard-time-filter');
        const container = document.getElementById('global-leaderboard-container');
        if (!filterDropdown || !container) return;

        const filter = filterDropdown.value;

        container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--primary);">
            <div style="font-size: 1.5rem; animation: modalPop 0.8s infinite alternate;">⏳</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-top: 8px;">Fetching...</div>
        </div>`;

        try {
            // 🛑 APNI URL AUR KEY DAALNA MAT BHOOLNA
            const dbUrl = 'https://tujafnsplixbaxynxmdt.supabase.co'; 
            const dbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1amFmbnNwbGl4YmF4eW54bWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMDAzMzAsImV4cCI6MjA5ODg3NjMzMH0.HsTdbO-9qPb0yXHEJJK2bS2xIoZYYH3IO2g3Qo24U4k';

            const response = await fetch(`${dbUrl}/rest/v1/leads?select=*`, {
                method: 'GET',
                headers: {
                    'apikey': dbKey,
                    'Authorization': `Bearer ${dbKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Fetch failed.');
            const allLeads = await response.json();

            let userStats = {};
            const now = new Date();

            function isWithinFilter(dateString, filterType) {
                if (filterType === 'all') return true;
                if (!dateString) return true;

                try {
                    let targetDate;
                    if (String(dateString).includes('/')) {
                        let parts = String(dateString).split(',')[0].trim().split('/');
                        targetDate = new Date(parts[2], parts[1] - 1, parts[0]);
                    } else {
                        targetDate = new Date(dateString); 
                    }
                    if (isNaN(targetDate)) return true;

                    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    let yesterday = new Date(today);
                    yesterday.setDate(yesterday.getDate() - 1);

                    if (filterType === 'today') return targetDate.getTime() === today.getTime();
                    if (filterType === 'yesterday') return targetDate.getTime() === yesterday.getTime();
                    if (filterType === 'week') {
                        let firstDayOfWeek = new Date(today);
                        firstDayOfWeek.setDate(today.getDate() - today.getDay());
                        return targetDate >= firstDayOfWeek;
                    }
                    if (filterType === 'month') return targetDate.getMonth() === today.getMonth() && targetDate.getFullYear() === today.getFullYear();
                    if (filterType === 'year') return targetDate.getFullYear() === today.getFullYear();
                } catch(e) { return true; }
                return true;
            }

            if (allLeads && allLeads.length > 0) {
                allLeads.forEach(lead => {
                    let owner = lead.owner || lead.assignedTo || lead.user || lead.addedBy || 'Unknown';
                    if (!userStats[owner]) userStats[owner] = { name: owner, total: 0, won: 0 };

                    let leadDate = lead.created_at || lead.created || lead.date || ""; 
                    if (isWithinFilter(leadDate, filter)) {
                        userStats[owner].total++;
                        if (lead.status === 'Won' || lead.status === 'Closed' || lead.stage === 'Won' || lead.stage === 'Closed') {
                            userStats[owner].won++;
                        }
                    }
                });
            }

            let leaderboard = Object.values(userStats).filter(u => u.total > 0);

            leaderboard.forEach(u => {
                u.rate = Math.round((u.won / u.total) * 100);
            });

            leaderboard.sort((a, b) => b.won - a.won || b.rate - a.rate || b.total - a.total);

            if (leaderboard.length === 0) {
                container.innerHTML = `<div style="text-align:center; padding: 30px 10px; color: var(--text-muted); background: rgba(0,0,0,0.1); border-radius: 12px;">
                    <div style="font-size: 0.85rem; font-weight: 600;">No activity found.</div>
                </div>`;
                return;
            }

            // 🏆 PREMIUM COMPACT UI RENDER
            container.innerHTML = '';
            leaderboard.forEach((user, index) => {
                let isMe = typeof currentUser !== 'undefined' && user.name === currentUser;
                
                // Emoji ki jagah sleek gradient circles
                let rankBadge = '';
                if (index === 0) rankBadge = `<div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #F59E0B, #D97706); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.75rem; font-weight: 900; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);">1</div>`;
                else if (index === 1) rankBadge = `<div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #94A3B8, #64748B); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.75rem; font-weight: 900;">2</div>`;
                else if (index === 2) rankBadge = `<div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #B45309, #78350F); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.75rem; font-weight: 900;">3</div>`;
                else rankBadge = `<div style="width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.8rem; font-weight: bold;">${index + 1}</div>`;

                container.innerHTML += `
                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
                    <div style="margin-right: 12px;">${rankBadge}</div>
                    
                    <div style="width: 36px; height: 36px; border-radius: 12px; background: rgba(99, 102, 241, 0.1); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; color: var(--primary); margin-right: 12px; text-transform: uppercase;">
                        ${user.name.substring(0,2)}
                    </div>
                    
                    <div style="flex: 1;">
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                            ${user.name}
                            ${isMe ? '<span style="font-size: 0.6rem; color: var(--bg-main); background: var(--success); padding: 2px 6px; border-radius: 6px; font-weight: 900; text-transform: uppercase;">YOU</span>' : ''}
                        </div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 3px; font-weight: 500;">
                            ${user.won} Won / ${user.total} Leads • <span style="color: var(--primary); font-weight: 700;">${user.rate}% Rate</span>
                        </div>
                    </div>
                    
                    <div style="text-align: right;">
                        <div style="font-size: 1.2rem; font-weight: 800; color: var(--success); line-height: 1;">${user.won}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px; letter-spacing: 0.5px;">Won</div>
                    </div>
                </div>`;
            });

        } catch (error) {
            console.error("Fetch Error:", error);
            container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--danger); background: rgba(239, 68, 68, 0.1); border-radius: 12px;">
                <div style="font-weight: bold;">⚠️ Error</div>
                <div style="font-size: 0.8rem; margin-top: 4px;">${error.message}</div>
            </div>`;
        }
    }



/* ==================================================
   3-DOTS MENU, ACTIVITY LOGGER & LOGIC (CRASH-PROOF FIXED)
   ================================================== */

function toggleSidebar() {
  const overlay = document.getElementById('sidebarOverlay');
  const sidebar = document.getElementById('appSidebar');
  
  if (overlay) overlay.classList.toggle('active');
  if (sidebar) sidebar.classList.toggle('active');
  
  if (sidebar && sidebar.classList.contains('active')) {
    updateSidebarProfile();
  }
}

// ग्लोबल वेरिएबल ताकि डुप्लीकेट डिक्लेरेशन से क्रैश न हो
window.isSidebarPasswordVisible = false;

function updateSidebarProfile() {
  // Supabase से डाटा उठाना
  const name = (typeof currentUser !== 'undefined' && currentUser.username) ? currentUser.username : "User";
  const id = (typeof currentUser !== 'undefined' && currentUser.userid) ? currentUser.userid : "----";
  
  const nameEl = document.getElementById('sidebarUserName');
  const idEl = document.getElementById('sidebarUserId');
  const avatarEl = document.getElementById('sidebarAvatar');
  const passEl = document.getElementById('sidebarUserPass');
  
  if (nameEl) nameEl.innerText = name;
  if (idEl) idEl.innerText = "ID: " + id;
  if (avatarEl) avatarEl.innerText = name.charAt(0).toUpperCase();

  // पासवर्ड हाईड करो
  window.isSidebarPasswordVisible = false;
  if (passEl) {
    passEl.innerText = "••••••••";
    passEl.style.letterSpacing = "3px";
  }
  
    // Theme Toggle सिंक करो
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const themeToggle = document.getElementById('sidebarThemeToggle');
  if (themeToggle) themeToggle.checked = isDark;
  updateThemeText(isDark);
}

function toggleSidebarPassword() {
  const passElement = document.getElementById('sidebarUserPass');
  const eyeIcon = document.getElementById('sidebarEyeIcon');
  const realPass = (typeof currentUser !== 'undefined' && currentUser.password) ? currentUser.password : "No Data";

  if (!window.isSidebarPasswordVisible) {
    passElement.innerText = realPass; 
    passElement.style.letterSpacing = "1px"; 
    eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
    window.isSidebarPasswordVisible = true;
  } else {
    passElement.innerText = "••••••••"; 
    passElement.style.letterSpacing = "3px";
    eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
    window.isSidebarPasswordVisible = false;
  }
}

// ==========================================
// 3. Dark/Light Mode Fix (100% Working)
// ==========================================

function updateThemeText(isDark) {
  const textSpan = document.getElementById('sidebar-theme-text');
  if (!textSpan) return;
  if (isDark) {
    textSpan.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> Light Mode`;
  } else {
    textSpan.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> Dark Mode`;
  }
}

function toggleThemeFromSidebar(checkbox) {
  const isDark = checkbox.checked;
  updateThemeText(isDark);
  
  // यहीं गड़बड़ थी! body की जगह documentElement (html) का इस्तेमाल करना था
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('crmTheme', 'dark'); // पुरानी वाली Storage Key
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('crmTheme', 'light');
  }
  
  const mainSwitch = document.getElementById('theme-switch');
  if (mainSwitch) mainSwitch.checked = isDark;
}



// PWA Install Logic - Crash Proof
window.deferredAppPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredAppPrompt = e;
});

function triggerAppInstall() {
  if (window.deferredAppPrompt) {
    window.deferredAppPrompt.prompt();
    window.deferredAppPrompt.userChoice.then(() => { window.deferredAppPrompt = null; });
  } else {
    alert("App is already installed or browser does not support it.");
  }
}

function sidebarLogout() {
  toggleSidebar();
  setTimeout(() => { if (typeof confirmLogout === 'function') confirmLogout(); }, 300);
}

// Action Tracker for Supabase Activity Logs
async function logActivity(actionDetail) {
  if (typeof currentUser === 'undefined' || !currentUser) return;
  if (typeof supabase === 'undefined') return; // क्रैश से बचने के लिए
  try {
    await supabase.from('activity_logs').insert([{
      user_id: currentUser.userid,
      user_name: currentUser.username,
      action: actionDetail
    }]);
  } catch (err) { console.error("Logging error", err); }
}

function openHistoryModal() {
  toggleSidebar();
  const modal = document.getElementById('modal-history');
  if (modal) {
    modal.classList.remove('hidden');
    fetchAndRenderHistory();
  }
}

function closeHistoryModal() {
  const modal = document.getElementById('modal-history');
  if (modal) modal.classList.add('hidden');
}

async function fetchAndRenderHistory() {
  const container = document.getElementById('history-logs-container');
  if (!container) return;
  container.innerHTML = `<p style="text-align:center; color:var(--text-muted);">Fetching live logs...</p>`;
  
  if (typeof supabase === 'undefined') {
    container.innerHTML = `<p style="text-align:center; color:var(--danger);">Supabase is not connected yet.</p>`;
    return;
  }
  
  try {
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);
      
    if (error) throw error;
    if (!data || data.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:var(--text-muted);">No activity recorded yet.</p>`;
      return;
    }
    
    let html = "";
    data.forEach(log => {
       const time = new Date(log.created_at).toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' });
       html += `
        <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 10px; border: 1px solid var(--border);">
           <strong style="color:var(--primary); font-size:1.05rem;">@${log.user_name}</strong> <span style="color:var(--text-main);">${log.action}</span><br>
           <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px; display:flex; align-items:center; gap:5px;">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${time}
           </div>
        </div>`;
    });
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p style="text-align:center; color:var(--danger);">Error fetching logs.</p>`;
  }
}
