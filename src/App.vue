<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import projects from './data/projects.js';

const siteUrl = 'https://jeyamohanme.vercel.app';
const officialEmail = 'jeyamohan98@gmail.com';
const isPrivacyPage = ref(window.location.pathname.replace(/\/+$/, '') === '/privacy-policy');
const darkMode = ref(true);
const menuOpen = ref(false);
const searchQuery = ref('');
const toastMessage = ref('');
const downloadDocument = ref(null);
const downloadDialog = ref(null);
const downloadDetails = ref({ email: '', jobRole: '', contact: '' });
const downloadError = ref('');
const downloading = ref(false);
const previewDocument = ref(null);
const previewDialog = ref(null);
const projectNumbers = new Map(projects.map((project, index) => [project.id, index + 1]));
let toastTimer;
let downloadController = null;

const navItems = [
  { label: 'About', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

const workExperience = [
  {
    title: 'Business Analyst',
    company: 'IYKONS',
    date: 'Sep 2024 – Feb 2025 · 6 months',
    location: 'Hybrid',
    description: 'Reviewed business systems and found ways to improve them.',
    skills: ['Process Optimization', 'Data Analysis', 'Requirements Gathering', 'Stakeholder Communication'],
  },
  {
    title: 'Junior Business Analyst',
    company: 'IYKONS',
    date: 'Feb 2024 – Sep 2024 · 8 months',
    location: 'Remote',
    description: 'Helped teams plan projects and design products for users.',
    skills: ['User-centered Design', 'Jira', 'Requirements Analysis', 'Technical Project Management'],
  },
  {
    title: 'Internship Trainee Business Analyst',
    company: 'IYKONS',
    date: 'Dec 2023 – Feb 2024 · 3 months',
    location: 'Remote',
    description: 'Wrote user stories and made wireframes to help improve a product.',
    skills: ['User Story Development', 'User Story Mapping', 'Wireframing', 'User Experience (UX)'],
  },
  {
    title: 'Intern Trainee Software Engineer',
    company: 'IYKONS',
    date: 'Jul 2023 – Nov 2023 · 5 months',
    location: 'London, England, United Kingdom · Remote',
    description: 'Contributed to web development projects using React JS, TypeScript, and Web API.',
    skills: ['React JS', 'TypeScript', 'Web API', 'C#', 'Git & GitHub', 'OOP', 'Linux', 'DBMS', 'Web Development'],
  },
];

const journeyItems = [
  { title: 'WordPress Website Review', details: ['Reviewed the site and its plugins.', 'Checked how easy the site was to use.', 'Suggested ways to improve it.'] },
  { title: 'IYKONS Website Rebuild', details: ['Fixed problems on the WordPress site.', 'Built a new site with React, HTML, and CSS.', 'Fixed layout and design issues.'] },
  { title: 'IYCONNECT Web Product', details: ['Built website features with React and TypeScript.', 'Used Jira to plan work with the team.', 'Helped run Scrum meetings and track tasks.'] },
  { title: 'UK Business Profile', details: ['Met with people to learn what the business needed.'] },
  { title: 'Business Analysis Training', details: ['Made wireframes and user flow diagrams.', 'Wrote down product needs and system plans.', 'Kept in touch with clients by email.'] },
  { title: 'Job Recruitment Platform', details: ['Connected the product to backend APIs.', 'Reviewed API needs and system documents.', 'Planned how data and backend features should work.'] },
  { title: 'Stat Scout System', details: ['Wrote business and system documents.', 'Planned system features and team tasks.', 'Designed cloud workflows with MVC.'] },
  { title: 'Blood Bank System', details: ['Met with clients to learn what they needed.', 'Wrote down the needs and mapped the steps.', 'Shared project plans with clients.'] },
  { title: 'IYCONNECT Financial App', details: ['Made wireframes for phone and web screens.', 'Reviewed how the system worked.', 'Kept project documents up to date.'] },
  { title: 'Allie Bhavan Online Store', details: ['Connected the store to Shopify and Flutter.', 'Wrote test notes and tracked issues.', 'Helped build the front end.'] },
  { title: 'IYCONNECT Financial Web App', details: ['Helped design a clear finance dashboard.', 'Tracked work and team tasks.', 'Helped the team follow Scrum.'] },
  { title: 'IYCONNECT Mobile App Updates', details: ['Improved app screens with Flutter.', 'Fixed layout and ease-of-use issues.', 'Kept notes on the changes.'] },
  { title: 'Bridge Park Hotel System', details: ['Built React pages and connected Stripe payments.', 'Added SiteMinder and booking features.', 'Planned work in Jira and helped the team.'] },
  { title: 'Smart Money Exchange', details: ['Reviewed app and website steps.', 'Found gaps and suggested fixes.'] },
  { title: 'IYConnect Feature Documents', details: ['Wrote feature notes in Jira.', 'Collected needs from the team and clients.', 'Kept teams in sync.'] },
  { title: 'PMI Project Management System', details: ['Wrote system plans and drew process charts.', 'Planned work in Jira.', 'Reviewed the system and helped the team follow Scrum.'] },
  { title: 'Jura Online Store', details: ['Researched a WhatsApp link for the store.', 'Collected project needs and shared updates with clients.'] },
  { title: 'Pizza Da Valter App and Website', details: ['Worked with Flutter, React, and .NET.', 'Connected the app to APIs.', 'Planned team tasks in Jira and helped run Scrum.'] },
  { title: 'HMRC UK Tax Portal', details: ['Connected APIs for tax data.', 'Tested the system and checked its features.', 'Wrote simple notes about how users and systems work together.'] },
  { title: 'OCR Invoice System', details: ['Used OCR and AI to read invoice details.', 'Built React screens.', 'Reviewed the system and wrote project notes.'] },
  { title: 'FAT CHEF System Design Update', details: ['Made wireframes for the new design.', 'Reviewed the system and its screens.', 'Worked with the team and client.'] },
  { title: 'FatChef POS System', details: ['Built features with React and Flutter.', 'Connected the system to outside services.', 'Wrote project notes and worked with the team.'] },
  { title: 'Water Billing System', details: ['Made process maps and wireframes.', 'Wrote feature ideas and project plans.', 'Collected needs from clients and the team.'] },
];

const hardSkills = [
  'Business Analysis', 'Requirements Gathering', 'System Analysis', 'Process Mapping',
  'User Stories', 'Wireframing', 'Workflow Design', 'User Testing', 'Project Coordination',
  'React', 'TypeScript', 'JavaScript', '.NET', 'C#', 'SQL', 'Flutter', 'WordPress',
  'API Integration', 'OCR', 'Figma', 'Balsamiq', 'Jira', 'Git',
];

const softSkills = [
  'Clear Communication', 'Teamwork', 'Listening', 'Problem Solving',
  'Planning', 'Research', 'Presenting Ideas', 'Working with Clients',
  'Helping Teams', 'Managing Risks',
];

const documents = [
  {
    key: 'cv',
    title: 'Curriculum Vitae (CV)',
    file: '/assets/documents/manoharan%20jeyamohan%20cv.pdf',
    description: 'Updated CV with latest experience and skills.',
  },
  {
    key: 'service',
    title: 'Service Letter',
    file: '/assets/documents/Service%20Letter%20-JM.pdf',
    description: 'Official letter from prior organization.',
  },
  {
    key: 'internship',
    title: 'Internship Completion Letter',
    file: '/assets/documents/INTERNSHIP.pdf',
    description: 'Proof of completed internship.',
  },
];

const socialLinks = [
  { name: 'LinkedIn', label: 'linkedin.com/in/career4jm', href: 'https://linkedin.com/in/career4jm' },
  { name: 'WhatsApp', label: '+94 754 977 449', href: 'https://wa.me/94754977449' },
  { name: 'Email', label: officialEmail, href: `mailto:${officialEmail}` },
];

const policySections = [
  {
    title: 'What this site shows',
    items: [
      'This site shares my work history, projects, and contact details.',
      'Some project details and links belong to other people or companies.',
    ],
  },
  {
    title: 'Messages and downloads',
    items: [
      'The contact form opens your email app. This site does not send or save your message.',
      'The download form checks your details in your browser. This site does not send or save them.',
    ],
  },
  {
    title: 'Other websites',
    items: [
      'Project, social, and email links can take you to other websites or apps.',
      'Those services have their own privacy rules.',
    ],
  },
  {
    title: 'Questions or changes',
    items: [
      'To ask a question or request a change, use the contact details below.',
      'The company that hosts this site may handle basic website request data.',
    ],
  },
];

const projectFieldLabels = {
  country: 'Location',
  sector: 'Sector',
  client: 'Client',
  role: 'Role',
  purpose: 'Purpose',
  technologies: 'Technologies',
  tools: 'Tools',
  experience: 'Experience',
  document: 'Documentation',
  scope: 'Scope',
  cloudDeployment: 'Deployment',
};

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return projects;
  return projects.filter((project) => JSON.stringify(project).toLowerCase().includes(query));
});

function showToast(message) {
  toastMessage.value = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage.value = '';
  }, 4200);
}

function updateRoute() {
  isPrivacyPage.value = window.location.pathname.replace(/\/+$/, '') === '/privacy-policy';
  menuOpen.value = false;
  updatePageMetadata();
}

function updatePageMetadata() {
  const title = isPrivacyPage.value
    ? 'Privacy Notice | Jeyamohan Manoharan'
    : 'Jeyamohan Manoharan | Business Analyst Portfolio';
  const description = isPrivacyPage.value
    ? 'Read how this portfolio handles messages, document downloads, public project details, and links to other websites.'
    : 'Jeyamohan Manoharan is a Business Analyst and Software Project Coordinator. Explore his skills, software projects, and experience.';
  const pageUrl = `${siteUrl}${isPrivacyPage.value ? '/privacy-policy' : '/'}`;

  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  updateThemeChrome();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode.value ? '#080a0d' : '#fbfaf6');
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
}

function updateThemeChrome() {
  const colorScheme = darkMode.value ? 'dark' : 'light';
  const isLight = !darkMode.value;
  document.documentElement.classList.toggle('theme-light', isLight);
  document.body.classList.toggle('theme-light', isLight);
  document.documentElement.style.colorScheme = colorScheme;
}

function toggleTheme() {
  darkMode.value = !darkMode.value;
  updateThemeChrome();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode.value ? '#080a0d' : '#fbfaf6');
}

function openPreview(document) {
  previewDocument.value = document;
  previewDialog.value?.showModal();
}

function closePreview() {
  previewDialog.value?.close();
  previewDocument.value = null;
}

function handlePreviewClose() {
  previewDocument.value = null;
}

async function openDownload(document) {
  downloadDocument.value = document;
  downloadDetails.value = { email: '', jobRole: '', contact: '' };
  downloadError.value = '';
  await nextTick();
  downloadDialog.value?.showModal();
}

function closeDownload() {
  downloadController?.abort();
  downloadController = null;
  downloadDialog.value?.close();
  downloadDocument.value = null;
  downloadError.value = '';
}

function handleDownloadClose() {
  if (!downloadDocument.value) return;
  downloadController?.abort();
  downloadController = null;
  downloadDocument.value = null;
  downloadError.value = '';
}

async function submitDownload() {
  if (!downloadDocument.value || downloading.value) return;
  const requestedDocument = downloadDocument.value;
  const controller = new AbortController();
  downloadController = controller;
  downloading.value = true;
  downloadError.value = '';

  try {
    const response = await fetch(requestedDocument.file, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`The document could not be loaded (HTTP ${response.status}).`);
    }

    const blob = await response.blob();
    if (controller.signal.aborted) return;
    const objectUrl = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = objectUrl;
    link.download = `${requestedDocument.key}.pdf`;
    window.document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    showToast(`${requestedDocument.title} download started.`);
    closeDownload();
  } catch (error) {
    if (controller.signal.aborted || (error instanceof Error && error.name === 'AbortError')) return;
    downloadError.value = error instanceof Error ? error.message : 'The document could not be downloaded.';
  } finally {
    if (downloadController === controller) downloadController = null;
    downloading.value = false;
  }
}

function submitContact(event) {
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const occupation = String(formData.get('occupation') || '').trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(
    [`Name: ${name}`, `Email: ${email}`, occupation ? `Occupation: ${occupation}` : '', '', message]
      .filter(Boolean)
      .join('\n'),
  );
  window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`;
  showToast('Your email app will open with the message ready to send.');
}

onMounted(() => {
  updatePageMetadata();
  window.addEventListener('popstate', updateRoute);
  if (!isPrivacyPage.value && window.location.hash) {
    requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    });
  }
});

onUnmounted(() => {
  downloadController?.abort();
  window.removeEventListener('popstate', updateRoute);
  window.clearTimeout(toastTimer);
});
</script>

<template>
  <div
    class="site-shell"
    :class="{ 'theme-dark': darkMode, 'theme-light': !darkMode, 'privacy-page': isPrivacyPage }"
  >
    <template v-if="isPrivacyPage">
      <main class="policy-page">
        <a class="brand-mark policy-brand" href="/">JM<span>.</span></a>
        <a class="back-link" href="/">← Back to portfolio</a>
        <p class="eyebrow">SIMPLE AND CLEAR</p>
        <h1>Privacy notice</h1>
        <p class="policy-lead">
          This page explains what happens when you use this website.
        </p>

        <section v-for="section in policySections" :key="section.title" class="policy-section">
          <h2>{{ section.title }}</h2>
          <ul>
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>Contact details</h2>
          <ul>
            <li>Email: <a :href="`mailto:${officialEmail}`">{{ officialEmail }}</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/career4jm" target="_blank" rel="noopener noreferrer">linkedin.com/in/career4jm ↗</a></li>
          </ul>
        </section>
      </main>
      <footer class="policy-footer">© {{ new Date().getFullYear() }} Jeyamohan Manoharan</footer>
    </template>

    <template v-else>
      <header class="site-header">
        <a class="brand-mark" href="#home" aria-label="Jeyamohan Manoharan home">JM<span>.</span></a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <div class="header-actions">
          <a class="header-contact" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
          <button
            class="theme-toggle"
            type="button"
            :aria-label="darkMode ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            {{ darkMode ? '☼' : '◐' }}
          </button>
          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="menuOpen"
            aria-label="Toggle navigation"
            @click="menuOpen = !menuOpen"
          >
            {{ menuOpen ? '×' : '☰' }}
          </button>
        </div>
        <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
          <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
        </nav>
      </header>

      <main>
        <section id="home" class="hero section-wrap">
          <div class="hero-copy">
            <p class="eyebrow"><span class="status-dot"></span> BUSINESS ANALYSIS · PRODUCT DELIVERY</p>
            <blockquote class="hero-quote">
              <h1>Making complex<br />ideas <span>work better.</span></h1>
            </blockquote>
            <p class="hero-intro">
              I'm <strong>Jeyamohan Manoharan</strong>. I help teams turn user needs into clear plans and useful software.
            </p>
            <p class="hero-degree">
              BSc. (Hons) in Information and Communication Technology · University of Jaffna · 2019–2023
            </p>
            <p class="hero-research">
              <em>Research:</em> Body Shaming Phrase Detection System using AI for OTT Platforms.
            </p>
            <div class="hero-actions">
              <a class="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a class="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <div class="hero-focus">
              <span>FOCUS AREAS</span>
              <p>Business analysis <i>·</i> Product delivery <i>·</i> UX workflows</p>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image-frame">
              <img src="/assets/images/4.jpg" alt="Jeyamohan Manoharan" fetchpriority="high" />
              <span class="image-index">PROFILE · JM</span>
            </div>
            <div class="hero-note">
              <span class="note-mark">◆</span>
              <p>Clear thinking.<br /><strong>Meaningful outcomes.</strong></p>
            </div>
            <div class="geometry-stack" aria-hidden="true">
              <span class="geometry-square"></span>
              <span class="geometry-triangle"></span>
              <span class="geometry-pyramid"><i></i><b></b></span>
              <span class="geometry-trail"></span>
            </div>
          </div>
          <a class="scroll-cue" href="#experience"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section class="about-section section-wrap">
          <div class="about-label">
            <p class="eyebrow">ABOUT ME</p>
            <h2>A clear thinker.<br /><span>A hands-on teammate.</span></h2>
          </div>
          <div class="about-copy">
            <p class="eyebrow">WHAT I DO</p>
            <h3>Business Analyst · Software Project Coordinator</h3>
            <p>
              I learn what people need, plan the work, and help teams build useful software. I write clear requirements,
              map user steps, make wireframes, and help teams test and deliver products. I work with clients, designers,
              and developers from the first idea to the finished product.
            </p>
          </div>
        </section>

        <section class="research-section section-wrap" aria-labelledby="research-title">
          <div class="research-card">
            <p class="eyebrow">RESEARCH PRESENTATION &amp; AWARD · RCBS 2025</p>
            <h2 id="research-title">Project management tools across sectors</h2>
            <p class="research-summary">
              I presented this research at the 6th Research Conference on Business Studies (RCBS 2025).
            </p>
            <p class="research-description">The award recognizes the sector-based evaluation of project management tools for:</p>
            <ul class="research-sectors">
              <li>International non-governmental organizations</li>
              <li>Software companies</li>
            </ul>
            <p class="research-location">
              <strong>Conference venue</strong>
              <span>Faculty of Business Studies, University of Vavuniya, Sri Lanka</span>
            </p>
          </div>
        </section>

        <section id="experience" class="section-block section-wrap">
          <div class="section-heading">
            <p class="eyebrow">A GROWING PRACTICE</p>
            <h2>Work experience<span>.</span></h2>
            <p class="section-description">Building perspective across business analysis, delivery, and software.</p>
          </div>
          <hr class="content-divider" />
          <div class="experience-list">
            <article v-for="(item, index) in workExperience" :key="item.title" class="experience-card">
              <div class="experience-marker"><span>0{{ workExperience.length - index }}</span><i></i></div>
              <div class="experience-content">
                <div class="experience-topline">
                  <div>
                    <p class="experience-company">{{ item.company }}</p>
                    <h3>{{ item.title }}</h3>
                  </div>
                  <span class="experience-date">{{ item.date }}</span>
                </div>
                <p class="experience-meta">⌖ {{ item.location }}</p>
                <p class="experience-description">{{ item.description }}</p>
                <div class="chip-list">
                  <span v-for="skill in item.skills" :key="skill" class="chip">{{ skill }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="journey" class="section-block journey-section">
          <div class="section-wrap">
            <div class="section-heading section-heading-row">
              <div>
                <p class="eyebrow">THE WORK BEHIND THE WORK</p>
                <h2>My journey<span>.</span></h2>
              </div>
              <p class="section-description">A look at projects I worked on and what I did.</p>
            </div>
            <ol class="journey-grid">
              <li v-for="(item, index) in journeyItems" :key="item.title" class="journey-card">
                <span class="journey-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3>{{ item.title }}</h3>
                <ul>
                  <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section id="skills" class="section-block section-wrap">
          <div class="section-heading">
            <p class="eyebrow">TOOLS, METHODS & MINDSET</p>
            <h2>Skills I bring<span>.</span></h2>
            <p class="section-description">A practical blend of technical understanding and people-first delivery.</p>
          </div>
          <div class="skills-layout">
            <article class="skill-panel">
              <div class="panel-heading"><span class="panel-icon">⌘</span><h3>Technical skills</h3></div>
              <div class="chip-list">
                <span v-for="skill in hardSkills" :key="skill" class="chip">{{ skill }}</span>
              </div>
            </article>
            <article class="skill-panel soft-panel">
              <div class="panel-heading"><span class="panel-icon">✳</span><h3>Ways of working</h3></div>
              <div class="chip-list">
                <span v-for="skill in softSkills" :key="skill" class="chip">{{ skill }}</span>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" class="section-block projects-section">
          <div class="section-wrap">
            <div class="section-heading section-heading-row">
              <div>
                <p class="eyebrow">SELECTED WORK · {{ projects.length }} PROJECTS</p>
                <h2>Projects with purpose<span>.</span></h2>
              </div>
              <label class="project-search">
                <span class="sr-only">Search projects</span>
                <span aria-hidden="true">⌕</span>
                <input v-model="searchQuery" type="search" placeholder="Find a project" />
                <span class="search-count">{{ filteredProjects.length }}</span>
              </label>
            </div>
            <p class="section-description project-intro">
              From business workflows to mobile products, each project holds a different lesson in making technology useful.
            </p>
            <div v-if="filteredProjects.length" class="project-list">
              <details v-for="project in filteredProjects" :key="project.id" class="project-item">
                <summary>
                  <span class="project-id">{{ String(projectNumbers.get(project.id)).padStart(2, '0') }}</span>
                  <span class="project-summary">
                    <strong>{{ project.name }}</strong>
                    <small>{{ project.sector }}<template v-if="project.country"> · {{ project.country }}</template></small>
                  </span>
                  <span class="project-open" aria-hidden="true">+</span>
                </summary>
                <div class="project-details">
                  <div class="project-fields">
                    <div v-for="(value, key) in project" :key="key" class="project-field">
                      <template v-if="key in projectFieldLabels && value !== '' && value != null">
                        <h4>{{ projectFieldLabels[key] }}</h4>
                        <ul>
                          <li v-for="(entry, entryIndex) in (Array.isArray(value) ? value : [value])" :key="entryIndex">
                            <code v-if="key === 'technologies' || key === 'tools'" class="inline-code">{{ entry }}</code>
                            <template v-else>{{ entry }}</template>
                          </li>
                        </ul>
                      </template>
                    </div>
                  </div>
                  <div v-if="project.urls?.length" class="project-subsection">
                    <h4>Project links</h4>
                    <ul>
                      <li v-for="url in project.urls" :key="url">
                        <a v-if="url.startsWith('http')" :href="url" target="_blank" rel="noopener noreferrer">{{ url }} ↗</a>
                        <span v-else>{{ url }}</span>
                      </li>
                    </ul>
                  </div>
                  <div v-if="project.teamMembers?.length" class="project-subsection">
                    <h4>Team &amp; collaborators</h4>
                    <div class="team-grid">
                      <article v-for="member in project.teamMembers" :key="`${member.name}-${member.role}`" class="team-card">
                        <p class="team-name"><span>{{ member.icon || '•' }}</span>{{ member.name }}</p>
                        <p>{{ member.role }}</p>
                        <p v-if="member.technology">{{ member.technology }}</p>
                        <a v-if="member.email && member.email !== 'N/A'" :href="`mailto:${member.email}`">{{ member.email }}</a>
                        <a v-if="member.linkedin && member.linkedin !== 'N/A'" :href="member.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                      </article>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <p v-else class="empty-state">No projects match “{{ searchQuery }}”. Try another search.</p>
          </div>
        </section>

        <section id="documents" class="section-block section-wrap">
          <div class="section-heading">
            <p class="eyebrow">BACKGROUND & CREDENTIALS</p>
            <h2>Documents<span>.</span></h2>
            <p class="section-description">View or download my CV and work letters.</p>
          </div>
          <div class="document-grid">
            <article v-for="document in documents" :key="document.key" class="document-card">
              <div class="document-icon">PDF</div>
              <div>
                <h3>{{ document.title }}</h3>
                <p>{{ document.description }}</p>
              </div>
              <div class="document-actions">
                <button class="text-link" type="button" @click="openPreview(document)">Preview ↗</button>
                <button class="text-link" type="button" @click="openDownload(document)">Download ↓</button>
              </div>
            </article>
          </div>
          <p class="document-note">Your details are checked in your browser and are not sent or saved by this site.</p>
        </section>

        <section id="contact" class="contact-section">
          <div class="section-wrap contact-layout">
            <div class="contact-copy">
              <p class="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let's make<br />something <span>meaningful.</span></h2>
              <p>Have an opportunity, a question, or an idea worth exploring? I'd be glad to hear from you.</p>
              <div class="contact-links">
                <a v-for="(link, index) in socialLinks" :key="`${link.name}-${index}`" :href="link.href" :target="link.href.startsWith('http') ? '_blank' : undefined" :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined">
                  <span>{{ link.name }}</span><strong>{{ link.label }} <i aria-hidden="true">↗</i></strong>
                </a>
              </div>
              <a class="qr-link" href="https://wa.me/94754977449" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/images/WhatsApp%20QR.jpg"
                  alt="Scan to contact Jeyamohan on WhatsApp"
                  loading="lazy"
                  decoding="async"
                />
                <span>Scan to start a WhatsApp conversation</span>
              </a>
            </div>
            <form class="contact-form" @submit.prevent="submitContact">
              <p class="form-kicker">SEND A NOTE</p>
              <label>Your name<input name="name" type="text" autocomplete="name" placeholder="How should I address you?" required /></label>
              <label>Your email<input name="email" type="email" autocomplete="email" placeholder="you@company.com" required /></label>
              <label>Occupation <span class="optional">(optional)</span><input name="occupation" type="text" placeholder="Your role or field" /></label>
              <label>Your message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required></textarea></label>
              <button class="button button-lime" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
              <p class="form-hint">This opens your email app with your message ready to send.</p>
            </form>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <a class="brand-mark" href="#home">JM<span>.</span></a>
        <p>“Keep learning. Keep building. Good ideas grow through steady work.”</p>
        <div class="footer-links">
          <a href="https://jeyamohanme.vercel.app/" target="_blank" rel="noopener noreferrer">jeyamohanme.vercel.app ↗</a>
          <a href="/privacy-policy">Privacy policy</a>
        </div>
        <small>© {{ new Date().getFullYear() }} Jeyamohan Manoharan. All rights reserved.</small>
      </footer>

      <dialog
        ref="previewDialog"
        class="preview-dialog"
        @click.self="closePreview"
        @cancel.prevent="closePreview"
        @close="handlePreviewClose"
      >
        <div v-if="previewDocument" class="dialog-shell">
          <div class="dialog-header">
            <div><p class="eyebrow">DOCUMENT PREVIEW</p><h2>{{ previewDocument.title }}</h2></div>
            <button type="button" class="dialog-close" aria-label="Close preview" @click="closePreview">×</button>
          </div>
          <iframe :src="previewDocument.file" :title="`${previewDocument.title} preview`"></iframe>
        </div>
      </dialog>

      <dialog
        v-if="downloadDocument"
        ref="downloadDialog"
        class="download-dialog"
        @click.self="closeDownload"
        @cancel.prevent="closeDownload"
        @close="handleDownloadClose"
      >
        <form class="download-form" @submit.prevent="submitDownload">
          <button type="button" class="dialog-close" aria-label="Close download form" @click="closeDownload">×</button>
          <p class="eyebrow">A QUICK DOWNLOAD REQUEST</p>
          <h2>{{ downloadDocument.title }}</h2>
          <p class="download-intro">Add your details to download. They stay in your browser.</p>
          <label>Email<input v-model.trim="downloadDetails.email" type="email" autocomplete="email" placeholder="you@company.com" required /></label>
          <label>Job role<input v-model.trim="downloadDetails.jobRole" type="text" placeholder="e.g. Product Analyst" required /></label>
          <label>Contact number<input v-model.trim="downloadDetails.contact" type="tel" inputmode="numeric" pattern="[0-9]{10,15}" placeholder="10–15 digits" required /></label>
          <p v-if="downloadError" class="form-error" role="alert">{{ downloadError }}</p>
          <button class="button button-dark download-submit" type="submit" :disabled="downloading">
            {{ downloading ? 'Preparing…' : 'Download document ↓' }}
          </button>
        </form>
      </dialog>
    </template>

    <Transition name="toast">
      <div v-if="toastMessage" class="toast-message" role="status">{{ toastMessage }}</div>
    </Transition>
  </div>
</template>
