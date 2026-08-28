import crateExplorerImg from "../assets/crate-explorer.png";
import componentLabImg from "../assets/component-lab.png";
import libraryLedgerImg from "../assets/library-ledger.png";
import logicLabImg from "../assets/logic-lab.png";

export const data = [
  {
    id: 1,
    name: "Crate Explorer",
    image: crateExplorerImg,
    description:
      "High-performance virtualized React 19 table for 12,000+ rows — debounced search, sorting, filtering, useTransition, and testable business logic.",
    stack: ["React 19", "TypeScript", "TanStack Virtual", "Vitest"],
    status: null,
    github: "https://github.com/Natyraa/crate-explorer",
    liveUrl: "https://natyraa.github.io/crate-explorer/",
  },
  {
    id: 2,
    name: "Component Lab",
    image: componentLabImg,
    description:
      "Accessible UI kit built from scratch — Modal, Dropdown, Tabs, Tooltip, and a generic DataTable — with ARIA, keyboard nav, and 32 RTL tests.",
    stack: ["React 19", "TypeScript", "A11y", "Vitest"],
    status: null,
    github: "https://github.com/Natyraa/component-lab",
    liveUrl: "https://natyraa.github.io/component-lab/",
  },
  {
    id: 3,
    name: "Logic Lab",
    image: logicLabImg,
    description:
      "Lights Out puzzle with pure game logic, generic undo/redo hooks, difficulty levels, and 59 Jest + React Testing Library tests.",
    stack: ["React", "TypeScript", "Custom Hooks", "Jest"],
    status: null,
    github: "https://github.com/Natyraa/logic-lab",
    liveUrl: "https://natyraa.github.io/logic-lab/",
  },
  {
    id: 4,
    name: "Library Ledger",
    image: libraryLedgerImg,
    description:
      "Vanilla JS CRUD reading list — search, genre filter, sort, read/unread toggles, and localStorage persistence, with 40 Vitest tests.",
    stack: ["Vanilla JS", "Vite", "Vitest", "localStorage"],
    status: null,
    github: "https://github.com/Natyraa/library-ledger",
    liveUrl: "https://natyraa.github.io/library-ledger/",
  },
];
