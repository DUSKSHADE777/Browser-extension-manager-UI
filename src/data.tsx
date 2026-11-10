import devlens from "./assets/images/logo-devlens.svg"
import style_spy from "./assets/images/logo-style-spy.svg"
import speed_boost from "./assets/images/logo-speed-boost.svg"
import json_wizard from "./assets/images/logo-json-wizard.svg"
import tab_master from "./assets/images/logo-tab-master-pro.svg"
import viewport_buddy from "./assets/images/logo-viewport-buddy.svg"
import markup_notes from "./assets/images/logo-markup-notes.svg"
import grid_guides from "./assets/images/logo-grid-guides.svg"
import palette_picker from "./assets/images/logo-palette-picker.svg"
import link_checker from "./assets/images/logo-link-checker.svg"
import dom_snapshot from "./assets/images/logo-dom-snapshot.svg"
import console_plus from "./assets/images/logo-console-plus.svg"




type Extensions = {
  img: string;
  name: string;
  description: string;
  Remove: boolean;
  off_on: boolean;
};
export let ExtensionsArray: Extensions[] = [
  { img: devlens, name: "DevLens", description: "Quickly inspect page layouts and visualize element boundaries.", Remove: false, off_on: false },
  { img: style_spy, name: "StyleSpy", description: "Instantly analyze and copy CSS from any webpage element.", Remove: false, off_on: false },
  { img: speed_boost, name: "SpeedBoost", description: "Optimizes browser resource usage to accelerate page loading.", Remove: false, off_on: false },
  { img: json_wizard, name: "JSONWizard", description: "Formats, validates, and prettifies JSON responses in-browser.", Remove: false, off_on: false },
  { img: tab_master, name: "TabMaster Pro", description: "Organizes browser tabs into groups and sessions.", Remove: false, off_on: false },
  { img: viewport_buddy, name: "ViewportBuddy", description: "Simulates various screen resolutions directly within the browser.", Remove: false, off_on: false },
  { img: markup_notes, name: "Markup Notes", description: "Enables annotation and notes directly onto webpages for collaborative debugging.", Remove: false, off_on: false },
  { img: grid_guides, name: "GridGuides", description: "Overlay customizable grids and alignment guides on any webpage.", Remove: false, off_on: false },
  { img: palette_picker, name: "Palette Picker", description: "Instantly extracts color palettes from any webpage.", Remove: false, off_on: false },
  { img: link_checker, name: "LinkChecker", description: "Scans and highlights broken links on any page.", Remove: false, off_on: false },
  { img: dom_snapshot, name: "DOM Snapshot", description: "Capture and export DOM structures quickly.", Remove: false, off_on: false },
  { img:console_plus , name: "ConsolePlus", description: "Enhanced developer console with advanced filtering and logging.", Remove: false, off_on: false },
];

  
  