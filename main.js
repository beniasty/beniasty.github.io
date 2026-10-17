// Renders the project register from PROJECTS (defined in projects.js).

const STATUS_LABELS = {
  "done": "Gotowe",
  "in-progress": "W toku",
  "idea": "Pomysł"
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderProject(project) {
  const row = el("article", "register__row");
  row.setAttribute("role", "listitem");

  const main = el("div", "register__main");
  main.append(el("h3", "register__name", project.name));
  main.append(el("p", "register__desc", project.description));

  if (project.links && project.links.length > 0) {
    const links = el("p", "register__links");
    for (const link of project.links) {
      const a = el("a", "text-link", link.label);
      a.href = link.url;
      links.append(a);
    }
    main.append(links);
  }

  const status = el("p", "register__status");
  const badge = el("span", "status status--" + project.status, STATUS_LABELS[project.status] || project.status);
  status.append(badge);

  const year = el("p", "register__year", String(project.year));

  const tech = el("ul", "register__tech");
  for (const item of project.tech || []) {
    tech.append(el("li", null, item));
  }

  row.append(main, status, year, tech);
  return row;
}

function renderSummary(projects) {
  const count = (status) => projects.filter((p) => p.status === status).length;
  return "Projekty w rejestrze: " + projects.length +
    ". Gotowe: " + count("done") +
    ", w toku: " + count("in-progress") +
    ", pomysły: " + count("idea") + ".";
}

const register = document.getElementById("register");
const header = el("div", "register__head");
header.setAttribute("aria-hidden", "true");
for (const label of ["Projekt", "Status", "Rok", "Technologie"]) {
  header.append(el("span", null, label));
}
register.append(header);

for (const project of PROJECTS) {
  register.append(renderProject(project));
}

document.getElementById("register-summary").textContent = renderSummary(PROJECTS);
document.getElementById("year").textContent = new Date().getFullYear();
