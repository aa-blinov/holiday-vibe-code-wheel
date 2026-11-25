export const DECKS = [
  { id: 'mix', label: 'All Ideas' },
  { id: 'saas', label: 'Micro-SaaS' },
  { id: 'devtools', label: 'Dev Tools & Engines' },
  { id: 'apps', label: 'Creative Apps' },
  { id: 'holiday', label: 'Holiday & Play' },
];

const SLICE_PALETTE = [
  '#9e2a2b',
  '#1b4332',
  '#1d3557',
  '#b5651d',
  '#2b2d42',
  '#0f4c5c',
];

const BASE_IDEAS = {
  saas: [
    { short: 'Meeting Ticker', title: 'Meeting Cost Ticker', desc: 'Live counter that multiplies attendees by hourly rate to show what a call costs per second' },
    { short: 'TZ Heatmap', title: 'Timezone Overlap Heatmap', desc: 'Visual grid showing overlapping work hours across 3 to 6 remote team cities' },
    { short: 'OG Studio', title: 'OG Social Image Studio', desc: 'Customize title, gradient-free frame, and author handle to export crisp 1200x630 PNG cards' },
    { short: 'Invoice PDF', title: 'Client Invoice Builder', desc: 'Line-item invoice editor with tax toggles, saved sender info, and clean print-to-PDF layout' },
    { short: 'Waitlist UI', title: 'Viral Referral Waitlist', desc: 'Launch signup form that assigns queue positions and generates referral links to jump spots' },
    { short: 'Changelog', title: 'Release Notes Feed', desc: 'Product changelog grouped by date with Added, Fixed, and Improved filters' },
    { short: 'Pricing Calc', title: 'SaaS Pricing Estimator', desc: 'Seat and usage slider calculator with monthly/yearly toggle and shareable plan URL' },
    { short: 'Status Page', title: 'Uptime Status Board', desc: '30-day service uptime bars with an interactive outage simulator and incident log' },
    { short: 'Quote Card', title: 'Testimonial Beautifier', desc: 'Turn raw customer quotes or tweets into clean framed cards ready for landing pages' },
    { short: 'Sponsor Cal', title: 'Newsletter Sponsor Slots', desc: 'Interactive booking calendar for newsletter ad slots with live pricing and availability' },
    { short: 'Tab Digest', title: 'Tab Hoarder Rehab', desc: 'Paste 30 messy browser URLs, group them by domain/topic, and export a clean reading list' },
    { short: 'Launch List', title: 'Product Hunt Checklist', desc: 'Pre-launch interactive checklist covering assets, copy, timing, and first-comment prep' },
    { short: 'Slot Picker', title: '15-Min Call Scheduler', desc: 'Timezone-aware booking slot picker that downloads a valid .ics calendar invite' },
    { short: 'Roadmap', title: 'Upvotable Feature Board', desc: 'Public-style feedback board where users submit ideas, vote, and filter by status' },
    { short: 'Rate Card', title: 'Creator Rate Calculator', desc: 'Sponsorship and deliverable pricing sheet with package bundles and discount math' },
    { short: 'Trip Split', title: 'Group Expense Splitter', desc: 'Shared bill tracker that settles debts across friends in the fewest possible transfers' },
    { short: 'Wave Clip', title: 'Podcast Audio Card', desc: 'Drop an audio clip and quote to render an animated waveform preview for social posts' },
    { short: 'NDA Filler', title: 'Quick Contract Filler', desc: 'Fill in party names, scope, and dates to generate a clean printable freelance agreement' },
    { short: 'Link-in-Bio', title: 'JSON Bio Page Editor', desc: 'Minimal creator link hub driven by a live JSON config with instant layout switching' },
    { short: 'Standup Log', title: 'Async Standup Digest', desc: 'Daily Yesterday/Today/Blockers form that formats team updates for Slack or Linear' },
    { short: 'Onboarding', title: 'Client Onboarding Portal', desc: 'Shareable milestone checklist with deliverable sign-off boxes and progress bar' },
    { short: 'Quick Poll', title: 'Zero-Login Poll Link', desc: 'Create a 5-option poll in seconds with live bar results encoded in the URL' },
    { short: 'QR Menu', title: 'Pop-Up Event Menu', desc: 'Menu or schedule builder with dietary tags and a printable QR code poster' },
    { short: 'Retainer', title: 'Freelance Retainer Tracker', desc: 'Monthly hours log with burn-rate bar and remaining retainer balance alerts' },
    { short: 'Habit Grid', title: '30-Day Streak Matrix', desc: 'Contribution-style habit tracker with streak freeze and CSV export' },
  ],
  devtools: [
    { short: 'Curl to Code', title: 'Curl to Fetch & Python', desc: 'Paste any curl command and convert headers, body, and auth into clean fetch, Axios, or Python' },
    { short: 'API Mock SW', title: 'Service Worker API Mock', desc: 'Define JSON endpoints and latency rules in the browser to intercept and mock fetch calls' },
    { short: 'Grid Studio', title: 'CSS Grid Visual Builder', desc: 'Click and drag grid areas to generate clean responsive CSS Grid and HTML markup' },
    { short: 'README Gen', title: 'GitHub README Studio', desc: 'Compose project sections, shields badges, and install blocks with live Markdown preview' },
    { short: 'JSONPath', title: 'JSONPath Live Sandbox', desc: 'Paste nested JSON and test dot/bracket queries with matched nodes highlighted live' },
    { short: 'Type Scale', title: 'Font Pairing & Scale Lab', desc: 'Test Google Font pairings, modular type ratios, and line-heights on real UI copy' },
    { short: 'SVG Waves', title: 'SVG Pattern & Wave Gen', desc: 'Tweak seed, complexity, and layers to generate lightweight copyable SVG backgrounds' },
    { short: 'Git Helper', title: 'Commit & Branch Helper', desc: 'Interactive Conventional Commits builder and branch namer with ticket ID presets' },
    { short: 'JSON to TS', title: 'JSON to TypeScript & Zod', desc: 'Paste any JSON payload to infer nested TypeScript interfaces and Zod validation schemas' },
    { short: 'Cron Builder', title: 'Cron Expression Helper', desc: 'Visual cron editor that explains schedules in plain English and lists the next 5 runs' },
    { short: 'Webhook Mock', title: 'Webhook HMAC Signer', desc: 'Craft a JSON webhook payload, sign it with SHA-256 HMAC, and copy the curl command' },
    { short: 'JWT Decoder', title: 'Offline JWT Inspector', desc: 'Decode JWT header, payload, and expiry timestamps locally without sending tokens anywhere' },
    { short: 'Regex Lab', title: 'Live Regex & Groups Lab', desc: 'Test regular expressions with inline match highlights, capture group table, and presets' },
    { short: 'Diff Viewer', title: 'Side-by-Side Diff Tool', desc: 'Compare two text or code blocks with line numbers and added/removed highlights' },
    { short: 'SVG to JSX', title: 'SVG Cleaner & JSX', desc: 'Strip editor bloat from raw SVGs and convert attributes to camelCase React components' },
    { short: 'WCAG Audit', title: 'Contrast Ratio Auditor', desc: 'Check foreground/background hex pairs for WCAG AA/AAA and nudge shades until they pass' },
    { short: 'OG Preview', title: 'Social Card Previewer', desc: 'Preview how a link looks on X, LinkedIn, and Slack, then copy the meta tags' },
    { short: 'SQL Format', title: 'SQL Query Beautifier', desc: 'Indent SELECT, JOIN, and WHERE clauses cleanly with keyword casing toggles' },
    { short: '.env Linter', title: 'Env File Validator', desc: 'Diff .env against .env.example to catch missing keys, duplicates, and unquoted spaces' },
    { short: 'Regex Engine', title: 'Mini Regex Engine', desc: 'Write a toy regex matcher from scratch supporting literals, dots, stars, and anchors' },
    { short: 'Virtual DOM', title: 'Tiny Virtual DOM', desc: 'Build a minimal hyperscript and diff/patch DOM renderer in roughly 120 lines' },
    { short: 'Mini Shell', title: 'Browser Mini Shell', desc: 'In-browser command interpreter with pipes, command history, and a virtual filesystem' },
    { short: 'Mini KV DB', title: 'In-Memory KV Store', desc: 'Toy key-value database with TTL expiration, prefix scan, and an interactive console' },
    { short: 'CSV SQL Pad', title: 'CSV Query Scratchpad', desc: 'Drop a CSV file and run simple filter, sort, and group-by queries in the browser' },
    { short: 'Shortcut Map', title: 'Hotkey Poster Maker', desc: 'Build a clean printable keyboard shortcut cheat-sheet for your favorite app or IDE' },
  ],
  apps: [
    { short: 'Receipt Todo', title: 'Thermal Receipt To-Do', desc: 'A task list styled like a paper cash-register receipt that prints and tears off completed items' },
    { short: 'Lo-Fi Room', title: 'Lo-Fi Ambient Mixer', desc: 'Layer synthesized rain, fireplace crackle, and brown noise with individual volume faders' },
    { short: 'Pomo Pet', title: 'Pomodoro Tamagotchi', desc: 'A tiny pixel companion that levels up when you finish 25-minute focus sprints' },
    { short: 'Typing RPG', title: 'Bug-Slayer Typing Game', desc: 'Defeat incoming bugs by typing real JavaScript/Python snippets before they reach prod' },
    { short: '1-Bit Pixel', title: '1-Bit Pixel Sprite Pad', desc: 'Crisp black-and-white pixel art editor with symmetry mirror and PNG/SVG export' },
    { short: 'Falling Sand', title: 'Falling Sand Physics', desc: 'Cellular automata Canvas sandbox with sand, water, fire, and stone interactions' },
    { short: 'Boids Sim', title: 'Boids Flocking Toy', desc: 'Interactive particle flock where separation, alignment, and cohesion sliders shape motion' },
    { short: 'Drum Grid', title: 'Euclidean Drum Machine', desc: 'Synthesize kick, snare, and hi-hat rhythms using Euclidean step distribution' },
    { short: 'Win95 Notes', title: 'Retro Desktop Notes', desc: 'Classic 90s windowed sticky-notes desktop with draggable cards and pixel borders' },
    { short: 'ASCII Cam', title: 'Image to Braille Art', desc: 'Drop any image and convert it into crisp Unicode Braille or ASCII art to copy' },
    { short: 'Decision Coin', title: 'Physics Decision Flip', desc: 'Add two tough choices and flip a weighted Canvas coin with bounce physics' },
    { short: 'Flashcards', title: 'Spaced Study Deck', desc: 'Flip-card learning deck with Easy/Hard scheduling stored locally in the browser' },
    { short: 'Formula Pad', title: 'Live Math Scratchpad', desc: 'Notepad calculator where lines evaluate variables like rate = 85 and total = rate * 12' },
    { short: 'Kanban', title: 'Keyboard Kanban Board', desc: 'Three-column Todo, Doing, Done board with single-key shortcuts and local save' },
    { short: 'Typing Test', title: '60-Second Code Typer', desc: 'Measure WPM and accuracy on real code punctuation rather than plain prose' },
    { short: 'Color Scale', title: '10-Step Tint Generator', desc: 'Pick one brand hex and generate a balanced 50-to-950 Tailwind-style shade ramp' },
    { short: 'Memory Match', title: 'Icon Memory Grid', desc: '4x4 card matching game with move counter, timer, and personal best tracking' },
    { short: 'Image Crop', title: 'Quick Aspect Cropper', desc: 'Drop an image, lock 16:9 or 1:1 crop ratios, and export as WebP or PNG' },
    { short: 'Quiz Maker', title: 'JSON Quiz Runner', desc: 'Load a simple JSON question bank and run a timed quiz with score breakdown' },
    { short: 'Markdown Tbl', title: 'Visual Markdown Table', desc: 'Spreadsheet-style grid editor that outputs cleanly aligned Markdown tables' },
    { short: 'Mood Board', title: 'Local Inspiration Wall', desc: 'Pin images, hex swatches, and short notes onto a clean zoomable canvas' },
    { short: 'Sound Pad', title: 'WebAudio Chord Pad', desc: 'Playable 8-pad chord progression toy with scale lock so every note sounds good' },
    { short: 'QR Contact', title: 'Printable QR Badge', desc: 'Encode a vCard or portfolio link into a clean conference badge ready to print' },
    { short: 'Reading Timer', title: 'Book Pace Calculator', desc: 'Enter total pages and daily reading speed to map out your finish date' },
    { short: 'Cipher Lab', title: 'Interactive Cipher Toy', desc: 'Encode and decode secret notes using Caesar, Vigenere, or custom substitution keys' },
  ],
  holiday: [
    { short: 'Secret Santa', title: 'Secret Santa Matcher', desc: 'Exclusion-aware gift draw that creates private reveal links for every participant' },
    { short: 'Year Card', title: 'Year-in-Review Poster', desc: 'Enter 5 personal stats (commits, books, trips, song, win) to export a 2x PNG card' },
    { short: 'Gift Budget', title: 'Holiday Gift Planner', desc: 'Recipient list with target budget, actual spend, and Bought/Wrapped status toggles' },
    { short: 'Snow Globe', title: 'Canvas Snow Globe', desc: 'Shake or drag the globe to send snowflakes swirling with gravity and settling' },
    { short: '8-Bit Jingle', title: 'Holiday Step Sequencer', desc: '8-step WebAudio melody grid preloaded with Jingle Bells and tempo control' },
    { short: 'ASCII Pine', title: 'Twinkling ASCII Tree', desc: 'Terminal-ready Christmas tree generator with height and ornament density sliders' },
    { short: 'Scratch Card', title: 'Scratch-Off Fortune', desc: 'Canvas foil card that reveals a New Year developer fortune as you rub across it' },
    { short: 'Time Capsule', title: '2027 Local Note Vault', desc: 'Seal 3 goals for next year until a chosen unlock date with JSON backup export' },
    { short: 'New Year Clk', title: 'Multi-City Countdown', desc: 'Live Jan 1 countdown across Tokyo, London, New York, and local time with tabular digits' },
    { short: 'Cocoa Click', title: 'Hot Cocoa Idle Game', desc: '2-minute clicker where brewing cocoa unlocks Cinnamon, Cream, and Espresso upgrades' },
    { short: 'Snowflake Lab', title: 'Symmetry Snowflake SVG', desc: '6-fold symmetrical Canvas drawing toy that exports crisp vector snowflakes' },
    { short: 'Xmas Lights', title: 'Programmable Light String', desc: 'Holiday bulb string with speed, brightness, and custom chase wave patterns' },
    { short: 'Wish List', title: 'URL-Shared Wish List', desc: 'Ranked gift list with price tags encoded directly in the URL hash for sharing' },
    { short: 'Recipe Scale', title: 'Holiday Baking Scaler', desc: 'Scale cookie or mulled-wine ingredients from 2 to 24 servings with clean fractions' },
    { short: 'Year Bingo', title: 'Year-End 5x5 Bingo', desc: 'Custom 5x5 bingo board generator for annual recaps with clickable stamp markers' },
    { short: 'Postcard', title: 'Digital Holiday Postcard', desc: 'Design a winter postcard with custom stamp, message, and PNG download' },
    { short: 'Anti-Goals', title: 'Anti-Resolution Board', desc: 'Pick 3 small weekly habits instead of vague resolutions and track January weeks' },
    { short: 'Gift Tag', title: 'Printable Gift Tags', desc: 'Generate a sheet of custom To/From holiday gift tags ready to print and cut' },
    { short: 'Party Queue', title: 'Holiday Queue DJ', desc: 'Simple party song voting queue where guests upvote the next track' },
    { short: 'Snow Typer', title: 'Winter Zen Writing Pad', desc: 'Calm writing pad with live WPM, session timer, and subtle snowfall on keystrokes' },
    { short: 'Fireplace', title: 'Pixel Hearth & Embers', desc: 'Looping pixel-art fireplace on Canvas with rising sparks and WebAudio crackle' },
    { short: 'Trivia Night', title: 'Year-in-Tech Trivia', desc: 'Fast-paced 10-question party trivia runner with team scorekeeper' },
    { short: 'Photo Strip', title: '4-Frame Photo Booth', desc: 'Drop 4 photos into a classic vertical photo-booth strip with date stamp and PNG save' },
    { short: 'Gratitude Log', title: '3-Line Year Highlights', desc: 'Minimalist card deck for recording one good memory per month of the year' },
    { short: 'Wrap Calc', title: 'Gift Box Wrap Estimator', desc: 'Enter box dimensions to calculate exact wrapping paper sheet size and ribbon length' },
  ],
};

const TWISTS = [
  { tag: 'Thermal Receipt UI', addDesc: 'styled like a crisp paper cash-register receipt.', rule: 'Monospace type, dashed dividers, and a serrated bottom edge.' },
  { tag: 'Win95 Desktop', addDesc: 'dressed up in classic 90s grey beveled windows.', rule: 'Use crisp 2px bevel borders and a retro title bar.' },
  { tag: '1-Bit Monochrome', addDesc: 'rendered strictly in pure black and off-white.', rule: 'Avoid grays or gradients; rely on dithering or solid contrast.' },
  { tag: 'Raycast-Style HUD', addDesc: 'built around a fast Cmd+K command palette.', rule: 'Every feature must be reachable from the command bar.' },
  { tag: 'Chrome Extension UI', addDesc: 'sized as a compact 380px browser popup.', rule: 'Everything must fit cleanly inside 380x540px.' },
  { tag: 'Single-HTML File', addDesc: 'packed into one self-contained HTML file.', rule: 'Put HTML, CSS, and JS in one file with no build step.' },
  { tag: 'URL-Hash Shared', addDesc: 'storing the entire state in the URL hash.', rule: 'Copying and opening the URL restores the exact state.' },
  { tag: 'WebAudio Feedback', addDesc: 'paired with subtle synthesized WebAudio clicks and chimes.', rule: 'Generate all sounds with OscillatorNode instead of MP3 files.' },
  { tag: '2x PNG Export', addDesc: 'rendering the output to Canvas for crisp 2x PNG download.', rule: 'The exported image must look sharp on Retina screens.' },
  { tag: 'Keyboard-Only', addDesc: 'navigable from start to finish without a mouse.', rule: 'Support Tab, Enter, Escape, and arrow-key shortcuts.' },
  { tag: 'Embeddable Widget', addDesc: 'with a clean ?embed=1 mode and copyable iframe tag.', rule: 'Hide outer navigation chrome when embed=1 is active.' },
  { tag: 'For Solo Founders', addDesc: 'tailored for indie makers shipping fast.', rule: 'Include 3 realistic indie-hacker starter presets.' },
  { tag: 'For Remote Teams', addDesc: 'built for async distributed teammates.', rule: 'Make sharing or copying a Slack-ready summary one click.' },
  { tag: 'For Creators', addDesc: 'designed for newsletter writers and podcasters.', rule: 'Focus on clean visual output ready to post.' },
  { tag: 'Print-to-PDF Ready', addDesc: 'with a dedicated @media print stylesheet.', rule: 'Hide all buttons and controls when printing.' },
  { tag: 'Live JSON Config', addDesc: 'driven by an editable JSON pane on the side.', rule: 'Changes in the JSON must update the UI immediately.' },
  { tag: '60fps Physics', addDesc: 'adding subtle gravity, bounce, or spring motion.', rule: 'Keep animation smooth and respect prefers-reduced-motion.' },
  { tag: 'Local-First Vault', addDesc: 'with localStorage auto-save and JSON import/export.', rule: 'Keep all user data in the browser with no backend calls.' },
  { tag: 'Undo/Redo Stack', addDesc: 'supporting a 20-step Cmd+Z undo/redo history.', rule: 'Track state snapshots cleanly on every edit.' },
  { tag: 'Split-Pane Live', addDesc: 'using a side-by-side input and live preview layout.', rule: 'Never require a Submit button to see changes.' },
  { tag: 'Zero Dependencies', addDesc: 'written in plain vanilla JS or React without extra packages.', rule: 'No third-party UI, icon, or helper libraries.' },
  { tag: 'Mobile-Thumb UI', addDesc: 'ergonomically laid out for 375px phone screens.', rule: 'Place primary actions within easy thumb reach at the bottom.' },
  { tag: 'High-Contrast Dark', addDesc: 'with a crisp terminal-inspired dark palette.', rule: 'Verify at least 4.5:1 contrast on every label.' },
  { tag: 'CSV & Markdown Out', addDesc: 'with one-click CSV and Markdown export.', rule: 'Properly escape quotes and commas in CSV output.' },
  { tag: '15-Min Sprint Mode', addDesc: 'paired with a built-in corner focus timer.', rule: 'Keep the timer quiet and optional.' },
  { tag: 'Template Presets', addDesc: 'shipping with 5 ready-to-tweak starter templates.', rule: 'Never greet the user with a blank empty screen.' },
  { tag: 'Snapshot Compare', addDesc: 'letting users save and switch between named versions.', rule: 'Make comparing two saved states effortless.' },
  { tag: 'Minimal Editorial', addDesc: 'using newspaper-like hairlines and tabular numbers.', rule: 'Rely on spacing and typography instead of heavy cards.' },
  { tag: 'Drag-and-Drop', addDesc: 'supporting drag-and-drop file drop or item sorting.', rule: 'Include a keyboard or button fallback for every drag action.' },
  { tag: 'One-Screen HUD', addDesc: 'fitting the entire experience above the fold.', rule: 'Zero vertical page scrolling on desktop.' },
];

const TIME_ESTIMATES = ['15 min', '20 min', '25 min', '30 min'];

const CATEGORY_LABELS = {
  saas: 'Micro-SaaS',
  devtools: 'Dev Tool',
  apps: 'Creative App',
  holiday: 'Holiday & Play',
};

function buildIdea(deckKey, baseIdx, twistIdx) {
  const bases = BASE_IDEAS[deckKey];
  const base = bases[baseIdx];
  const twist = TWISTS[twistIdx];
  const id = `${deckKey}-${baseIdx}-${twistIdx}`;
  const timeEstimate = TIME_ESTIMATES[(baseIdx + twistIdx) % TIME_ESTIMATES.length];

  return {
    id,
    deck: deckKey,
    shortLabel: base.short,
    title: `${base.title} (${twist.tag})`,
    category: CATEGORY_LABELS[deckKey],
    timeEstimate,
    prompt: `${base.desc}, ${twist.addDesc}`,
    vibeRule: twist.rule,
  };
}

export const TOTAL_IDEA_COUNT = Object.values(BASE_IDEAS).reduce(
  (sum, list) => sum + list.length * TWISTS.length,
  0
);

export function findIdeaById(id) {
  if (!id || typeof id !== 'string') return null;
  const parts = id.split('-');
  if (parts.length !== 3) return null;
  const [deckKey, bStr, tStr] = parts;
  const baseIdx = Number(bStr);
  const twistIdx = Number(tStr);
  if (
    !BASE_IDEAS[deckKey] ||
    Number.isNaN(baseIdx) ||
    Number.isNaN(twistIdx) ||
    baseIdx < 0 ||
    baseIdx >= BASE_IDEAS[deckKey].length ||
    twistIdx < 0 ||
    twistIdx >= TWISTS.length
  ) {
    return null;
  }
  return buildIdea(deckKey, baseIdx, twistIdx);
}

export function drawWheelIdeas(deckId, count = 12) {
  const deckKeys =
    deckId === 'mix' ? Object.keys(BASE_IDEAS) : [deckId];

  const picked = [];
  const usedShortLabels = new Set();
  const usedIds = new Set();
  let guard = 0;

  while (picked.length < count && guard < 500) {
    guard++;
    const deckKey = deckKeys[Math.floor(Math.random() * deckKeys.length)];
    const baseIdx = Math.floor(Math.random() * BASE_IDEAS[deckKey].length);
    const twistIdx = Math.floor(Math.random() * TWISTS.length);
    const idea = buildIdea(deckKey, baseIdx, twistIdx);

    if (usedIds.has(idea.id) || usedShortLabels.has(idea.shortLabel)) {
      continue;
    }

    usedIds.add(idea.id);
    usedShortLabels.add(idea.shortLabel);
    picked.push({
      ...idea,
      color: SLICE_PALETTE[picked.length % SLICE_PALETTE.length],
    });
  }

  return picked;
}

export function sampleCatalogIdeas(deckId, count = 18, searchQuery = '') {
  const deckKeys = deckId === 'mix' ? Object.keys(BASE_IDEAS) : [deckId];
  const q = searchQuery.trim().toLowerCase();

  if (q) {
    const matches = [];
    for (const dk of deckKeys) {
      for (let b = 0; b < BASE_IDEAS[dk].length; b++) {
        for (let t = 0; t < TWISTS.length; t++) {
          const idea = buildIdea(dk, b, t);
          if (
            idea.title.toLowerCase().includes(q) ||
            idea.prompt.toLowerCase().includes(q) ||
            idea.category.toLowerCase().includes(q)
          ) {
            matches.push(idea);
            if (matches.length >= 24) return matches;
          }
        }
      }
    }
    return matches;
  }

  return drawWheelIdeas(deckId, count);
}
