document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (token) {
    loadDocuments();
    loadApplications();
    loadExports();
  }

  async function loadDocuments() {
    try {
      const res = await fetch("http://localhost:3000/api/documents", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await res.json();

      if (result.success && result.data.length > 0) {
        const container = document.querySelector("#documents .card-grid");
        if (!container) return;

        const docsHTML = result.data.map(doc => `
          <article class="card document-card">
              <figure class="document-icon">📄</figure>
              <h3>${doc.title}</h3>
              <p>Last edited ${new Date(doc.updated_at).toLocaleDateString()}</p>
              <nav class="document-actions">
                  <button class="btn btn-outline">Edit</button>
                  <button class="btn btn-primary">Open</button>
              </nav>
          </article>
        `).join("");

        const addCardHTML = `
          <article class="card document-card add-document">
              <figure class="add-icon">+</figure>
              <h3>Create New Resume</h3>
              <p>Start building a new resume.</p>
              <button class="btn btn-primary" id="btn-create-doc">+ Create Resume</button>
          </article>
        `;

        container.innerHTML = docsHTML + addCardHTML;
      }
    } catch (err) {
      console.error("Error loading documents:", err);
    }
  }

  async function loadApplications() {
    try {
      const res = await fetch("http://localhost:3000/api/applications", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await res.json();

      if (result.success && result.data.length > 0) {
        const table = document.querySelector(".application-table");
        if (!table) return;

        const header = `
          <h2>Recent Applications</h2>
          <header class="application-row header-row">
              <strong>Company</strong>
              <strong>Position</strong>
              <strong>Status</strong>
              <strong>Date</strong>
          </header>
        `;

        const rows = result.data.map(app => `
          <article class="application-row">
              <p>${app.company}</p>
              <p>${app.position}</p>
              <mark class="status ${app.status.toLowerCase()}">${app.status}</mark>
              <time datetime="${app.applied_date}">${new Date(app.applied_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
          </article>
        `).join("");

        table.innerHTML = header + rows;
      }
    } catch (err) {
      console.error("Error loading applications:", err);
    }
  }

  async function loadExports() {
    try {
      const res = await fetch("http://localhost:3000/api/exports", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await res.json();

      if (result.success && result.data.length > 0) {
        const container = document.querySelector("#exports .page-container");
        if (!container) return;

        const header = `<h1>Exports</h1><p class="section-subtext">Download and manage your exported resumes.</p>`;
        const exportsHTML = result.data.map(exp => `
          <article class="card export-card">
              <figure class="export-icon">📄</figure>
              <section class="export-info">
                  <h3>${exp.file_name}</h3>
                  <p>${exp.file_format} • Exported ${new Date(exp.exported_at).toLocaleDateString()}</p>
              </section>
              <button class="btn btn-primary">Download</button>
          </article>
        `).join("");

        container.innerHTML = header + exportsHTML;
      }
    } catch (err) {
      console.error("Error loading exports:", err);
    }
  }
});