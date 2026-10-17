// Project register. To add a project, copy one entry, paste it at the top
// of the list and change the values.
//
// status: "done" (Gotowe), "in-progress" (W toku) or "idea" (Pomysł)
// links: optional; each link has a label and a url

const PROJECTS = [
  {
    name: "Klimat Polski 1951–2025",
    description: "Interaktywna analiza klimatu miast wojewódzkich na danych dziennych z 75 lat: eksplorator z własnymi progami, mapa i ranking, porównanie okresów, kalendarz przyrody, rekordy i pogoda w Twoim dniu. Wersja PL/EN, tryb ciemny.",
    status: "done",
    year: 2026,
    tech: ["Python", "pandas", "React", "TypeScript", "Plotly", "GitHub Actions"],
    links: [
      { label: "Strona", url: "https://beniasty.github.io/klimat-polski/" },
      { label: "Kod", url: "https://github.com/beniasty/klimat-polski" }
    ]
  },
  {
    name: "Portfolio",
    description: "Ta strona. Mój pierwszy projekt zbudowany z Claude Code: od planu, przez kod i testy w przeglądarce, po publikację na GitHub Pages.",
    status: "done",
    year: 2026,
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [
      { label: "Kod", url: "https://github.com/beniasty/beniasty.github.io" }
    ]
  }
];
