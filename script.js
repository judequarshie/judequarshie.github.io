import { profile } from './data.js';

let liveOrcidWorks = [];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHero();
  renderAbout();
  renderResearch();
  renderPublications();
  renderConferences();
  renderGrants();
  renderExperience();
  renderContact();
  initNavScroll();
  initModal();
  
  // Kick off background ORCID Live Sync
  syncOrcidWorks();
});

/* --- Theme Management --- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('academic_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('academic_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

/* --- Hero Section Rendering --- */
function renderHero() {
  const heroContainer = document.getElementById('heroContainer');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="hero-grid">
      <div class="hero-content">
        <div class="hero-badge-list">
          <span class="badge primary"><i class="fa-solid fa-graduation-cap"></i> Ph.D. Candidate</span>
          <span class="badge secondary"><i class="fa-solid fa-dna"></i> NIH T32 CBI Fellow</span>
          <span class="badge"><i class="fa-solid fa-award"></i> Ross-Lynn Scholar</span>
        </div>
        <h1 class="hero-title">Hello, I'm <span class="gradient-text">${profile.name}</span></h1>
        <h2 class="hero-subtitle">${profile.title} at <span style="color: var(--accent-emerald)">${profile.institution}</span></h2>
        <p class="hero-description">
          Conducting cutting-edge research in <strong>Epigenetics</strong>, <strong>SWI/SNF Chromatin Remodeling</strong>, and <strong>Computer-Aided Drug Discovery (CADD)</strong> in the Borch Department of Medicinal Chemistry & Molecular Pharmacology under the direction of <strong>${profile.advisor}</strong>.
        </p>

        <div class="hero-ctas">
          <a href="#research" class="btn btn-primary"><i class="fa-solid fa-flask"></i> Explore Research</a>
          <a href="#publications" class="btn btn-outline"><i class="fa-solid fa-book-open"></i> Publications</a>
          <a href="${profile.socials.orcid}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fa-brands fa-orcid" style="color: #a6ce39"></i> ORCID Profile</a>
          <a href="${profile.socials.github}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>

        <div class="metrics-row">
          ${profile.metrics.map(m => `
            <div class="metric-card">
              <div class="metric-value">${m.prefix || ''}${m.value}${m.suffix}</div>
              <div class="metric-label">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="hero-visual">
        <div class="profile-card">
          <div class="avatar-wrapper">
            <div class="avatar-inner">JTQ</div>
          </div>
          <div class="profile-info">
            <h3 class="profile-name">${profile.name}</h3>
            <p class="profile-affiliation">${profile.department}<br>Purdue University</p>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-emerald)"></i> West Lafayette, IN, USA
            </div>

            <!-- Direct LinkedIn link badge -->
            <div style="margin-top: 12px;">
              <a href="${profile.socials.linkedIn}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #0a66c2; font-weight: 600; background: rgba(10, 102, 194, 0.1); padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid rgba(10, 102, 194, 0.2);">
                <i class="fa-brands fa-linkedin"></i> linkedin.com/in/judequarshie
              </a>
            </div>

            <div class="social-links">
              <a href="${profile.socials.orcid}" target="_blank" rel="noopener" class="social-icon-btn" title="ORCID Profile">
                <i class="fa-brands fa-orcid" style="color:#a6ce39"></i>
              </a>
              <a href="${profile.socials.github}" target="_blank" rel="noopener" class="social-icon-btn" title="GitHub Profile">
                <i class="fa-brands fa-github" style="color:var(--text-primary)"></i>
              </a>
              <a href="${profile.socials.researchGate}" target="_blank" rel="noopener" class="social-icon-btn" title="ResearchGate">
                <i class="fa-brands fa-researchgate" style="color:#00ccbb"></i>
              </a>
              <a href="${profile.socials.googleScholar}" target="_blank" rel="noopener" class="social-icon-btn" title="Google Scholar">
                <i class="fa-solid fa-graduation-cap" style="color:#4285f4"></i>
              </a>
              <a href="${profile.socials.linkedIn}" target="_blank" rel="noopener" class="social-icon-btn" title="LinkedIn Profile">
                <i class="fa-brands fa-linkedin" style="color:#0a66c2"></i>
              </a>
              <a href="${profile.socials.email}" class="social-icon-btn" title="Email Jude">
                <i class="fa-solid fa-envelope" style="color:var(--accent-emerald)"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --- About & Education Rendering --- */
function renderAbout() {
  const aboutContainer = document.getElementById('aboutContainer');
  if (!aboutContainer) return;

  aboutContainer.innerHTML = `
    <div class="about-grid">
      <div class="about-card">
        <h3><i class="fa-solid fa-user-doctor" style="color: var(--accent-emerald)"></i> Biography & Research Philosophy</h3>
        <p class="about-bio-p">${profile.bio.replace(/\n\n/g, '</p><p class="about-bio-p">')}</p>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-color)">
          <strong style="color: var(--text-heading)">Primary Research Mentors:</strong>
          <ul style="margin-top: 8px; list-style: none; color: var(--text-secondary); font-size: 0.925rem;">
            <li style="margin-bottom: 6px;"><i class="fa-solid fa-chevron-right" style="color: var(--accent-emerald); font-size: 0.75rem;"></i> <strong>Dr. Emily C. Dykhuizen</strong> (Purdue University)</li>
            <li style="margin-bottom: 6px;"><i class="fa-solid fa-chevron-right" style="color: var(--accent-emerald); font-size: 0.75rem;"></i> <strong>Dr. Anastasia Rosebud Aikins</strong> (University of Ghana)</li>
            <li><i class="fa-solid fa-chevron-right" style="color: var(--accent-emerald); font-size: 0.75rem;"></i> <strong>Prof. Osbourne Quaye</strong> (University of Ghana)</li>
          </ul>
        </div>
      </div>

      <div class="about-card">
        <h3><i class="fa-solid fa-building-columns" style="color: var(--accent-cyan)"></i> Education & Academic Degrees</h3>
        <div class="timeline">
          ${profile.education.map(edu => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <span class="timeline-period">${edu.period}</span>
              <h4 class="timeline-degree">${edu.degree}</h4>
              <p class="timeline-institution">${edu.institution}</p>
              ${edu.specialization ? `<p style="font-size:0.85rem; color: var(--accent-cyan); font-weight: 500;">${edu.specialization}</p>` : ''}
              <p class="timeline-details">${edu.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* --- Research Pillars Rendering --- */
function renderResearch() {
  const researchContainer = document.getElementById('researchContainer');
  if (!researchContainer) return;

  researchContainer.innerHTML = profile.researchPillars.map(pillar => `
    <div class="research-card" id="${pillar.id}">
      <div class="research-icon">${pillar.icon}</div>
      <h3 class="research-title">${pillar.title}</h3>
      <p class="research-summary">${pillar.details}</p>
      <div class="tag-cloud">
        ${pillar.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Publications Rendering with Filter & Search --- */
let activeCategory = 'All';
let searchQuery = '';

function renderPublications() {
  const pubControls = document.getElementById('pubControls');
  if (!pubControls) return;

  const categories = ['All', 'Epigenetics & Therapeutics', 'CADD & Drug Discovery', 'Multi-omics & Genetics', 'Clinical & Oncology', 'Clinical & Public Health'];

  pubControls.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
      <div style="font-size: 0.85rem; color: #a6ce39; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; background: rgba(166, 206, 57, 0.1); padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid rgba(166, 206, 57, 0.2);">
        <i class="fa-brands fa-orcid"></i> ORCID Auto-Sync Active (${profile.socials.orcidId})
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted)">
        Showing ${getCombinedPublications().length} peer-reviewed publications & preprints
      </div>
    </div>
    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" id="pubSearch" class="search-input" placeholder="Search publications by keyword, author, or journal..." value="${searchQuery}">
    </div>
    <div class="filter-pills">
      ${categories.map(cat => `
        <button class="filter-pill ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
      `).join('')}
    </div>
  `;

  // Bind filter pills
  pubControls.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = e.target.getAttribute('data-cat');
      renderPublications();
    });
  });

  // Bind search input
  const searchInput = document.getElementById('pubSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      filterAndDisplayPubs();
    });
  }

  filterAndDisplayPubs();
}

function getCombinedPublications() {
  const combined = [...profile.publications];
  // Add live fetched ORCID works if not already present
  liveOrcidWorks.forEach(work => {
    const exists = combined.some(p => p.title.toLowerCase().trim() === work.title.toLowerCase().trim());
    if (!exists) {
      combined.unshift(work);
    }
  });
  return combined;
}

function filterAndDisplayPubs() {
  const pubContainer = document.getElementById('pubContainer');
  if (!pubContainer) return;

  const allPubs = getCombinedPublications();

  const filtered = allPubs.filter(pub => {
    const matchesCat = activeCategory === 'All' || pub.category.includes(activeCategory) || (activeCategory === 'Epigenetics & Therapeutics' && pub.category.includes('Epigenetics'));
    const matchesSearch = !searchQuery || 
      pub.title.toLowerCase().includes(searchQuery) ||
      pub.authors.toLowerCase().includes(searchQuery) ||
      pub.journal.toLowerCase().includes(searchQuery) ||
      pub.year.toString().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    pubContainer.innerHTML = `
      <div style="text-align: center; padding: 48px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
        <p>No publications found matching your search criteria.</p>
      </div>
    `;
    return;
  }

  pubContainer.innerHTML = filtered.map(pub => {
    const highlightedAuthors = pub.authors ? pub.authors.replace(/Quarshie JT/g, '<strong>Quarshie JT</strong>') : 'Jude Tetteh Quarshie et al.';
    return `
      <div class="pub-card">
        <div class="pub-header">
          <span class="pub-category">${pub.category}</span>
          <span class="pub-year"><i class="fa-regular fa-calendar"></i> ${pub.year}</span>
          ${pub.isLiveOrcid ? `<span class="badge secondary" style="font-size:0.75rem; padding: 2px 8px;"><i class="fa-brands fa-orcid"></i> Live from ORCID</span>` : ''}
          ${pub.highlight ? `<span class="badge primary" style="font-size:0.75rem; padding: 2px 8px;">Featured</span>` : ''}
        </div>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-authors">${highlightedAuthors}</p>
        <p class="pub-journal">${pub.journal} (${pub.year}). ${pub.volume || ''}</p>
        
        <div class="pub-actions">
          ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Read Article</a>` : ''}
          <button class="btn btn-outline btn-sm copy-citation-btn" data-title="${pub.title}" data-authors="${pub.authors || 'Quarshie JT'}" data-journal="${pub.journal}" data-year="${pub.year}"><i class="fa-regular fa-copy"></i> Copy Citation</button>
          ${pub.bibtex ? `<button class="btn btn-outline btn-sm open-bibtex-btn" data-pubid="${pub.id}"><i class="fa-solid fa-quote-right"></i> BibTeX</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Bind citation copy buttons
  pubContainer.querySelectorAll('.copy-citation-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const citation = `${target.getAttribute('data-authors')}. ${target.getAttribute('data-title')}. ${target.getAttribute('data-journal')} (${target.getAttribute('data-year')}).`;
      navigator.clipboard.writeText(citation);
      const originalText = target.innerHTML;
      target.innerHTML = `<i class="fa-solid fa-check" style="color:var(--accent-emerald)"></i> Copied!`;
      setTimeout(() => target.innerHTML = originalText, 2000);
    });
  });

  // Bind BibTeX modal open
  pubContainer.querySelectorAll('.open-bibtex-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pubId = e.currentTarget.getAttribute('data-pubid');
      const pubObj = allPubs.find(p => p.id === pubId);
      if (pubObj && pubObj.bibtex) {
        showBibtexModal(pubObj.title, pubObj.bibtex);
      }
    });
  });
}

/* --- ORCID Live Sync Engine --- */
async function syncOrcidWorks() {
  try {
    const res = await fetch(`https://pub.orcid.org/v3.0/${profile.socials.orcidId}/works`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) return;

    const data = await res.json();
    const groups = data.group || [];
    
    const fetched = [];
    groups.forEach((g, idx) => {
      const summary = g['work-summary'] ? g['work-summary'][0] : null;
      if (!summary) return;

      const title = summary.title?.title?.value;
      if (!title) return;

      const year = summary['publication-date']?.year?.value || '2025';
      const journal = summary['journal-title']?.value || 'Peer-Reviewed Journal';
      
      let doi = null;
      const extIds = summary['external-ids']?.['external-id'] || [];
      extIds.forEach(eid => {
        if (eid['external-id-type'] === 'doi') {
          doi = eid['external-id-value'];
          if (!doi.startsWith('http')) {
            doi = `https://doi.org/${doi}`;
          }
        }
      });

      fetched.push({
        id: `orcid-live-${idx}`,
        title: title,
        authors: "Quarshie JT, et al.",
        journal: journal,
        year: parseInt(year),
        volume: "",
        category: "Epigenetics & Therapeutics",
        doi: doi,
        highlight: false,
        isLiveOrcid: true,
        bibtex: `@article{quarshie_orcid_${idx},
  title={${title}},
  author={Quarshie, JT and others},
  journal={${journal}},
  year={${year}}
}`
      });
    });

    if (fetched.length > 0) {
      liveOrcidWorks = fetched;
      renderPublications();
    }
  } catch (err) {
    console.log('ORCID Live fetch status: Offline/Fallback mode active.');
  }
}

/* --- Conferences & Presentations Rendering --- */
function renderConferences() {
  const presContainer = document.getElementById('presContainer');
  if (!presContainer) return;

  presContainer.innerHTML = profile.presentations.map(pres => `
    <div class="pres-card">
      <div class="pres-type"><i class="fa-solid fa-microphone"></i> ${pres.type} • ${pres.date}</div>
      <h4 class="pres-title">${pres.title}</h4>
      <p class="pres-event"><strong>${pres.event}</strong></p>
      <p class="pres-location"><i class="fa-solid fa-location-dot"></i> ${pres.location}</p>
    </div>
  `).join('');
}

/* --- Grants & Awards Rendering --- */
function renderGrants() {
  const awardsContainer = document.getElementById('awardsContainer');
  if (!awardsContainer) return;

  awardsContainer.innerHTML = profile.grantsAndAwards.map(award => `
    <div class="award-card">
      <span class="award-year">${award.year}</span>
      <h3 class="award-title">${award.title}</h3>
      <div class="award-org">${award.organization}</div>
      <div class="award-amount">${award.amount}</div>
      <p class="award-desc">${award.description}</p>
    </div>
  `).join('');
}

/* --- Experience & Service Rendering --- */
function renderExperience() {
  const expContainer = document.getElementById('expContainer');
  if (!expContainer) return;

  expContainer.innerHTML = `
    <div class="exp-grid">
      <div class="exp-box">
        <h3><i class="fa-solid fa-chalkboard-user" style="color: var(--accent-emerald)"></i> Teaching Assistantships</h3>
        ${profile.teachingExperience.map(t => `
          <div class="exp-item">
            <div class="exp-role">${t.role}</div>
            <div class="exp-course">${t.course}</div>
            <div class="exp-meta"><i class="fa-regular fa-calendar"></i> ${t.period} • ${t.institution}</div>
            <p class="exp-desc">${t.details}</p>
          </div>
        `).join('')}
      </div>

      <div class="exp-box">
        <h3><i class="fa-solid fa-vial-virus" style="color: var(--accent-cyan)"></i> Diagnostic Pathology & Service</h3>
        ${profile.clinicalExperience.map(c => `
          <div class="exp-item">
            <div class="exp-role">${c.role}</div>
            <div class="exp-course" style="color: var(--text-heading); font-weight: 500;">${c.institution}</div>
            <div class="exp-meta"><i class="fa-regular fa-calendar"></i> ${c.period}</div>
            <p class="exp-desc">${c.details}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* --- Contact Section Rendering --- */
function renderContact() {
  const contactContainer = document.getElementById('contactContainer');
  if (!contactContainer) return;

  contactContainer.innerHTML = `
    <div class="contact-card">
      <h2 class="contact-title">Get in Touch</h2>
      <p class="contact-text">
        Interested in potential research collaborations, epigenetics inquiries, or academic networking? Feel free to reach out via email or connect on scholarly platforms.
      </p>

      <div class="contact-details-grid">
        <div class="contact-detail-item">
          <div class="contact-detail-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-detail-text">
            <h4>Email Address</h4>
            <p><a href="mailto:${profile.email}">${profile.email}</a></p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-detail-icon"><i class="fa-brands fa-linkedin" style="color: #0a66c2"></i></div>
          <div class="contact-detail-text">
            <h4>LinkedIn Profile</h4>
            <p><a href="${profile.socials.linkedIn}" target="_blank" rel="noopener">linkedin.com/in/judequarshie</a></p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-detail-icon"><i class="fa-brands fa-github" style="color: var(--text-primary)"></i></div>
          <div class="contact-detail-text">
            <h4>GitHub Profile</h4>
            <p><a href="${profile.socials.github}" target="_blank" rel="noopener">github.com/judequarshie</a></p>
          </div>
        </div>

        <div class="contact-detail-item">
          <div class="contact-detail-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="contact-detail-text">
            <h4>Research Office</h4>
            <p>Hansen Life Sciences Building, Room 439C<br>Purdue University, West Lafayette, IN</p>
          </div>
        </div>
      </div>

      <a href="mailto:${profile.email}" class="btn btn-primary" style="font-size: 1.1rem;"><i class="fa-solid fa-paper-plane"></i> Send Email Message</a>
    </div>
  `;
}

/* --- Navigation & Smooth Scroll --- */
function initNavScroll() {
  const links = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- BibTeX Modal Logic --- */
function initModal() {
  const modalOverlay = document.getElementById('bibtexModal');
  const closeBtn = document.getElementById('closeModal');
  const copyBtn = document.getElementById('copyBibtexBtn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeElem = document.getElementById('modalBibtexCode');
      if (codeElem) {
        navigator.clipboard.writeText(codeElem.innerText);
        copyBtn.innerText = 'Copied!';
        setTimeout(() => copyBtn.innerText = 'Copy BibTeX', 2000);
      }
    });
  }
}

function showBibtexModal(title, bibtexStr) {
  const modalOverlay = document.getElementById('bibtexModal');
  const modalTitle = document.getElementById('modalPubTitle');
  const modalCode = document.getElementById('modalBibtexCode');

  if (modalOverlay && modalTitle && modalCode) {
    modalTitle.innerText = title;
    modalCode.innerText = bibtexStr;
    modalOverlay.classList.add('active');
  }
}
