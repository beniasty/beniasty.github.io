# Portfolio

Personal portfolio of Paweł Bęben, published at https://beniasty.github.io.

Plain HTML, CSS and JavaScript, no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Add a project

Edit `projects.js` and add an entry to the `PROJECTS` list:

```js
{
  name: "Project name",
  description: "One or two sentences about the project.",
  status: "in-progress", // "done", "in-progress" or "idea"
  year: 2026,
  tech: ["HTML", "CSS"],
  links: [
    { label: "Demo", url: "https://..." },
    { label: "Kod", url: "https://github.com/beniasty/..." }
  ]
}
```

Commit and push; GitHub Pages updates the site within a minute or two.

## Files

- `index.html` – page structure and text
- `style.css` – styles
- `projects.js` – project list (data)
- `main.js` – renders the project register
