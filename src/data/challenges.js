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

// Kinds: 'doc' | 'saas' | 'dev' | 'visual' | 'play'
const BASE_IDEAS = {
  saas: [
    { kind: 'saas', short: 'Meeting Ticker', title: 'Meeting Cost Ticker', desc: 'Live counter that multiplies attendees by hourly rate to show what a call costs per second' },
    { kind: 'saas', short: 'TZ Heatmap', title: 'Timezone Overlap Heatmap', desc: 'Visual grid showing overlapping work hours across 3 to 6 remote team cities' },
    { kind: 'visual', short: 'OG Studio', title: 'OG Social Image Studio', desc: 'Customize title, frame, and author handle to export crisp 1200x630 PNG cards' },
    { kind: 'doc', short: 'Invoice PDF', title: 'Client Invoice Builder', desc: 'Line-item invoice editor with tax toggles, saved sender info, and clean print layout' },
    { kind: 'saas', short: 'Waitlist UI', title: 'Viral Referral Waitlist', desc: 'Launch signup form that assigns queue positions and generates referral links to jump spots' },
    { kind: 'doc', short: 'Changelog', title: 'Release Notes Feed', desc: 'Product changelog grouped by date with Added, Fixed, and Improved filters' },
    { kind: 'saas', short: 'Pricing Calc', title: 'SaaS Pricing Estimator', desc: 'Seat and usage slider calculator with monthly/yearly toggle and shareable plan URL' },
    { kind: 'saas', short: 'Status Page', title: 'Uptime Status Board', desc: '30-day service uptime bars with an interactive outage simulator and incident log' },
    { kind: 'visual', short: 'Quote Card', title: 'Testimonial Beautifier', desc: 'Turn raw customer quotes or tweets into clean framed cards ready for landing pages' },
    { kind: 'saas', short: 'Sponsor Cal', title: 'Newsletter Sponsor Slots', desc: 'Interactive booking calendar for newsletter ad slots with live pricing and availability' },
    { kind: 'saas', short: 'Tab Digest', title: 'Tab Hoarder Rehab', desc: 'Paste 30 messy browser URLs, group them by domain/topic, and export a clean reading list' },
    { kind: 'doc', short: 'Launch List', title: 'Product Hunt Checklist', desc: 'Pre-launch interactive checklist covering assets, copy, timing, and first-comment prep' },
    { kind: 'saas', short: 'Slot Picker', title: '15-Min Call Scheduler', desc: 'Timezone-aware booking slot picker that downloads a valid .ics calendar invite' },
    { kind: 'saas', short: 'Roadmap', title: 'Upvotable Feature Board', desc: 'Public-style feedback board where users submit ideas, vote, and filter by status' },
    { kind: 'doc', short: 'Rate Card', title: 'Creator Rate Calculator', desc: 'Sponsorship and deliverable pricing sheet with package bundles and discount math' },
    { kind: 'saas', short: 'Trip Split', title: 'Group Expense Splitter', desc: 'Shared bill tracker that settles debts across friends in the fewest possible transfers' },
    { kind: 'visual', short: 'Wave Clip', title: 'Podcast Audio Card', desc: 'Drop an audio clip and quote to render an animated waveform preview for social posts' },
    { kind: 'doc', short: 'NDA Filler', title: 'Quick Contract Filler', desc: 'Fill in party names, scope, and dates to generate a clean printable freelance agreement' },
    { kind: 'saas', short: 'Link-in-Bio', title: 'JSON Bio Page Editor', desc: 'Minimal creator link hub driven by a live JSON config with instant layout switching' },
    { kind: 'saas', short: 'Standup Log', title: 'Async Standup Digest', desc: 'Daily Yesterday/Today/Blockers form that formats team updates for Slack or Linear' },
    { kind: 'doc', short: 'Onboarding', title: 'Client Onboarding Portal', desc: 'Shareable milestone checklist with deliverable sign-off boxes and progress bar' },
    { kind: 'saas', short: 'Quick Poll', title: 'Zero-Login Poll Link', desc: 'Create a 5-option poll in seconds with live bar results encoded in the URL' },
    { kind: 'doc', short: 'QR Menu', title: 'Pop-Up Event Menu', desc: 'Menu or schedule builder with dietary tags and a printable QR code poster' },
    { kind: 'saas', short: 'Retainer', title: 'Freelance Retainer Tracker', desc: 'Monthly hours log with burn-rate bar and remaining retainer balance alerts' },
    { kind: 'saas', short: 'Habit Grid', title: '30-Day Streak Matrix', desc: 'Contribution-style habit tracker with streak freeze and CSV export' },
  ],
  devtools: [
    { kind: 'dev', short: 'Curl to Code', title: 'Curl to Fetch & Python', desc: 'Paste any curl command and convert headers, body, and auth into clean fetch, Axios, or Python' },
    { kind: 'dev', short: 'API Mock SW', title: 'Service Worker API Mock', desc: 'Define JSON endpoints and latency rules in the browser to intercept and mock fetch calls' },
    { kind: 'dev', short: 'Grid Studio', title: 'CSS Grid Visual Builder', desc: 'Click and drag grid areas to generate clean responsive CSS Grid and HTML markup' },
    { kind: 'doc', short: 'README Gen', title: 'GitHub README Studio', desc: 'Compose project sections, shields badges, and install blocks with live Markdown preview' },
    { kind: 'dev', short: 'JSONPath', title: 'JSONPath Live Sandbox', desc: 'Paste nested JSON and test dot/bracket queries with matched nodes highlighted live' },
    { kind: 'visual', short: 'Type Scale', title: 'Font Pairing & Scale Lab', desc: 'Test Google Font pairings, modular type ratios, and line-heights on real UI copy' },
    { kind: 'visual', short: 'SVG Waves', title: 'SVG Pattern & Wave Gen', desc: 'Tweak seed, complexity, and layers to generate lightweight copyable SVG backgrounds' },
    { kind: 'dev', short: 'Git Helper', title: 'Commit & Branch Helper', desc: 'Interactive Conventional Commits builder and branch namer with ticket ID presets' },
    { kind: 'dev', short: 'JSON to TS', title: 'JSON to TypeScript & Zod', desc: 'Paste any JSON payload to infer nested TypeScript interfaces and Zod validation schemas' },
    { kind: 'dev', short: 'Cron Builder', title: 'Cron Expression Helper', desc: 'Visual cron editor that explains schedules in plain English and lists the next 5 runs' },
    { kind: 'dev', short: 'Webhook Mock', title: 'Webhook HMAC Signer', desc: 'Craft a JSON webhook payload, sign it with SHA-256 HMAC, and copy the curl command' },
    { kind: 'dev', short: 'JWT Decoder', title: 'Offline JWT Inspector', desc: 'Decode JWT header, payload, and expiry timestamps locally without sending tokens anywhere' },
    { kind: 'dev', short: 'Regex Lab', title: 'Live Regex & Groups Lab', desc: 'Test regular expressions with inline match highlights, capture group table, and presets' },
    { kind: 'dev', short: 'Diff Viewer', title: 'Side-by-Side Diff Tool', desc: 'Compare two text or code blocks with line numbers and added/removed highlights' },
    { kind: 'dev', short: 'SVG to JSX', title: 'SVG Cleaner & JSX', desc: 'Strip editor bloat from raw SVGs and convert attributes to camelCase React components' },
    { kind: 'dev', short: 'WCAG Audit', title: 'Contrast Ratio Auditor', desc: 'Check foreground/background hex pairs for WCAG AA/AAA and nudge shades until they pass' },
    { kind: 'dev', short: 'OG Preview', title: 'Social Card Previewer', desc: 'Preview how a link looks on X, LinkedIn, and Slack, then copy the meta tags' },
    { kind: 'dev', short: 'SQL Format', title: 'SQL Query Beautifier', desc: 'Indent SELECT, JOIN, and WHERE clauses cleanly with keyword casing toggles' },
    { kind: 'dev', short: '.env Linter', title: 'Env File Validator', desc: 'Diff .env against .env.example to catch missing keys, duplicates, and unquoted spaces' },
    { kind: 'dev', short: 'Regex Engine', title: 'Mini Regex Engine', desc: 'Write a toy regex matcher from scratch supporting literals, dots, stars, and anchors' },
    { kind: 'dev', short: 'Virtual DOM', title: 'Tiny Virtual DOM', desc: 'Build a minimal hyperscript and diff/patch DOM renderer in roughly 120 lines' },
    { kind: 'dev', short: 'Mini Shell', title: 'Browser Mini Shell', desc: 'In-browser command interpreter with pipes, command history, and a virtual filesystem' },
    { kind: 'dev', short: 'Mini KV DB', title: 'In-Memory KV Store', desc: 'Toy key-value database with TTL expiration, prefix scan, and an interactive console' },
    { kind: 'dev', short: 'CSV SQL Pad', title: 'CSV Query Scratchpad', desc: 'Drop a CSV file and run simple filter, sort, and group-by queries in the browser' },
    { kind: 'doc', short: 'Shortcut Map', title: 'Hotkey Poster Maker', desc: 'Build a clean printable keyboard shortcut cheat-sheet for your favorite app or IDE' },
  ],
  apps: [
    { kind: 'play', short: 'Receipt Todo', title: 'Thermal Receipt To-Do', desc: 'A task list styled like a paper cash-register receipt that prints and tears off completed items' },
    { kind: 'play', short: 'Lo-Fi Room', title: 'Lo-Fi Ambient Mixer', desc: 'Layer synthesized rain, fireplace crackle, and brown noise with individual volume faders' },
    { kind: 'play', short: 'Pomo Pet', title: 'Pomodoro Tamagotchi', desc: 'A tiny pixel companion that levels up when you finish 25-minute focus sprints' },
    { kind: 'play', short: 'Typing RPG', title: 'Bug-Slayer Typing Game', desc: 'Defeat incoming bugs by typing real JavaScript/Python snippets before they reach prod' },
    { kind: 'visual', short: '1-Bit Pixel', title: '1-Bit Pixel Sprite Pad', desc: 'Crisp black-and-white pixel art editor with symmetry mirror and PNG/SVG export' },
    { kind: 'play', short: 'Falling Sand', title: 'Falling Sand Physics', desc: 'Cellular automata Canvas sandbox with sand, water, fire, and stone interactions' },
    { kind: 'play', short: 'Boids Sim', title: 'Boids Flocking Toy', desc: 'Interactive particle flock where separation, alignment, and cohesion sliders shape motion' },
    { kind: 'play', short: 'Drum Grid', title: 'Euclidean Drum Machine', desc: 'Synthesize kick, snare, and hi-hat rhythms using Euclidean step distribution' },
    { kind: 'play', short: 'Win95 Notes', title: 'Retro Desktop Notes', desc: 'Classic 90s windowed sticky-notes desktop with draggable cards and pixel borders' },
    { kind: 'visual', short: 'ASCII Cam', title: 'Image to Braille Art', desc: 'Drop any image and convert it into crisp Unicode Braille or ASCII art to copy' },
    { kind: 'play', short: 'Decision Coin', title: 'Physics Decision Flip', desc: 'Add two tough choices and flip a weighted Canvas coin with bounce physics' },
    { kind: 'saas', short: 'Flashcards', title: 'Spaced Study Deck', desc: 'Flip-card learning deck with Easy/Hard scheduling stored locally in the browser' },
    { kind: 'dev', short: 'Formula Pad', title: 'Live Math Scratchpad', desc: 'Notepad calculator where lines evaluate variables like rate = 85 and total = rate * 12' },
    { kind: 'saas', short: 'Kanban', title: 'Keyboard Kanban Board', desc: 'Three-column Todo, Doing, Done board with single-key shortcuts and local save' },
    { kind: 'play', short: 'Typing Test', title: '60-Second Code Typer', desc: 'Measure WPM and accuracy on real code punctuation rather than plain prose' },
    { kind: 'visual', short: 'Color Scale', title: '10-Step Tint Generator', desc: 'Pick one brand hex and generate a balanced 50-to-950 Tailwind-style shade ramp' },
    { kind: 'play', short: 'Memory Match', title: 'Icon Memory Grid', desc: '4x4 card matching game with move counter, timer, and personal best tracking' },
    { kind: 'visual', short: 'Image Crop', title: 'Quick Aspect Cropper', desc: 'Drop an image, lock 16:9 or 1:1 crop ratios, and export as WebP or PNG' },
    { kind: 'saas', short: 'Quiz Maker', title: 'JSON Quiz Runner', desc: 'Load a simple JSON question bank and run a timed quiz with score breakdown' },
    { kind: 'doc', short: 'Markdown Tbl', title: 'Visual Markdown Table', desc: 'Spreadsheet-style grid editor that outputs cleanly aligned Markdown tables' },
    { kind: 'visual', short: 'Mood Board', title: 'Local Inspiration Wall', desc: 'Pin images, hex swatches, and short notes onto a clean zoomable canvas' },
    { kind: 'play', short: 'Sound Pad', title: 'WebAudio Chord Pad', desc: 'Playable 8-pad chord progression toy with scale lock so every note sounds good' },
    { kind: 'doc', short: 'QR Contact', title: 'Printable QR Badge', desc: 'Encode a vCard or portfolio link into a clean conference badge ready to print' },
    { kind: 'saas', short: 'Reading Timer', title: 'Book Pace Calculator', desc: 'Enter total pages and daily reading speed to map out your finish date' },
    { kind: 'dev', short: 'Cipher Lab', title: 'Interactive Cipher Toy', desc: 'Encode and decode secret notes using Caesar, Vigenere, or custom substitution keys' },
  ],
  holiday: [
    { kind: 'saas', short: 'Secret Santa', title: 'Secret Santa Matcher', desc: 'Exclusion-aware gift draw that creates private reveal links for every participant' },
    { kind: 'visual', short: 'Year Card', title: 'Year-in-Review Poster', desc: 'Enter 5 personal stats (commits, books, trips, song, win) to export a 2x PNG card' },
    { kind: 'saas', short: 'Gift Budget', title: 'Holiday Gift Planner', desc: 'Recipient list with target budget, actual spend, and Bought/Wrapped status toggles' },
    { kind: 'play', short: 'Snow Globe', title: 'Canvas Snow Globe', desc: 'Shake or drag the globe to send snowflakes swirling with gravity and settling' },
    { kind: 'play', short: '8-Bit Jingle', title: 'Holiday Step Sequencer', desc: '8-step WebAudio melody grid preloaded with Jingle Bells and tempo control' },
    { kind: 'play', short: 'ASCII Pine', title: 'Twinkling ASCII Tree', desc: 'Terminal-ready Christmas tree generator with height and ornament density sliders' },
    { kind: 'play', short: 'Scratch Card', title: 'Scratch-Off Fortune', desc: 'Canvas foil card that reveals a New Year developer fortune as you rub across it' },
    { kind: 'saas', short: 'Time Capsule', title: '2027 Local Note Vault', desc: 'Seal 3 goals for next year until a chosen unlock date with JSON backup export' },
    { kind: 'saas', short: 'New Year Clk', title: 'Multi-City Countdown', desc: 'Live Jan 1 countdown across Tokyo, London, New York, and local time with tabular digits' },
    { kind: 'play', short: 'Cocoa Click', title: 'Hot Cocoa Idle Game', desc: '2-minute clicker where brewing cocoa unlocks Cinnamon, Cream, and Espresso upgrades' },
    { kind: 'visual', short: 'Snowflake Lab', title: 'Symmetry Snowflake SVG', desc: '6-fold symmetrical Canvas drawing toy that exports crisp vector snowflakes' },
    { kind: 'play', short: 'Xmas Lights', title: 'Programmable Light String', desc: 'Holiday bulb string with speed, brightness, and custom chase wave patterns' },
    { kind: 'saas', short: 'Wish List', title: 'URL-Shared Wish List', desc: 'Ranked gift list with price tags encoded directly in the URL hash for sharing' },
    { kind: 'doc', short: 'Recipe Scale', title: 'Holiday Baking Scaler', desc: 'Scale cookie or mulled-wine ingredients from 2 to 24 servings with clean fractions' },
    { kind: 'doc', short: 'Year Bingo', title: 'Year-End 5x5 Bingo', desc: 'Custom 5x5 bingo board generator for annual recaps with clickable stamp markers' },
    { kind: 'visual', short: 'Postcard', title: 'Digital Holiday Postcard', desc: 'Design a winter postcard with custom stamp, message, and PNG download' },
    { kind: 'saas', short: 'Anti-Goals', title: 'Anti-Resolution Board', desc: 'Pick 3 small weekly habits instead of vague resolutions and track January weeks' },
    { kind: 'doc', short: 'Gift Tag', title: 'Printable Gift Tags', desc: 'Generate a sheet of custom To/From holiday gift tags ready to print and cut' },
    { kind: 'saas', short: 'Party Queue', title: 'Holiday Queue DJ', desc: 'Simple party song voting queue where guests upvote the next track' },
    { kind: 'play', short: 'Snow Typer', title: 'Winter Zen Writing Pad', desc: 'Calm writing pad with live WPM, session timer, and subtle snowfall on keystrokes' },
    { kind: 'play', short: 'Fireplace', title: 'Pixel Hearth & Embers', desc: 'Looping pixel-art fireplace on Canvas with rising sparks and WebAudio crackle' },
    { kind: 'play', short: 'Trivia Night', title: 'Year-in-Tech Trivia', desc: 'Fast-paced 10-question party trivia runner with team scorekeeper' },
    { kind: 'visual', short: 'Photo Strip', title: '4-Frame Photo Booth', desc: 'Drop 4 photos into a classic vertical photo-booth strip with date stamp and PNG save' },
    { kind: 'doc', short: 'Gratitude Log', title: '3-Line Year Highlights', desc: 'Minimalist card deck for recording one good memory per month of the year' },
    { kind: 'saas', short: 'Wrap Calc', title: 'Gift Box Wrap Estimator', desc: 'Enter box dimensions to calculate exact wrapping paper sheet size and ribbon length' },
  ],
};

const TWISTS = [
  { forKinds: ['doc', 'saas', 'play'], tag: 'Thermal Receipt UI', addDesc: 'styled like a crisp paper cash-register receipt.', rule: 'Monospace type, dashed dividers, and a serrated bottom edge.' },
  { forKinds: ['saas', 'dev', 'play'], tag: 'Win95 Desktop', addDesc: 'dressed up in classic 90s grey beveled windows.', rule: 'Use crisp 2px bevel borders and a retro title bar.' },
  { forKinds: ['visual', 'play', 'doc'], tag: '1-Bit Monochrome', addDesc: 'rendered strictly in pure black and off-white.', rule: 'Avoid grays or gradients; rely on dithering or solid contrast.' },
  { forKinds: ['saas', 'dev'], tag: 'Raycast-Style HUD', addDesc: 'built around a fast Cmd+K command palette.', rule: 'Every feature must be reachable from the command bar.' },
  { forKinds: ['saas', 'dev'], tag: 'Chrome Extension UI', addDesc: 'sized as a compact 380px browser popup.', rule: 'Everything must fit cleanly inside 380x540px.' },
  { forKinds: ['doc', 'saas', 'dev', 'visual', 'play'], tag: 'Single-HTML File', addDesc: 'packed into one self-contained HTML file.', rule: 'Put HTML, CSS, and JS in one file with no build step.' },
  { forKinds: ['saas', 'dev', 'doc'], tag: 'URL-Hash Shared', addDesc: 'storing the entire state in the URL hash.', rule: 'Copying and opening the URL restores the exact state.' },
  { forKinds: ['play', 'visual'], tag: 'WebAudio Feedback', addDesc: 'paired with subtle synthesized WebAudio clicks and chimes.', rule: 'Generate all sounds with OscillatorNode instead of MP3 files.' },
  { forKinds: ['visual', 'doc'], tag: '2x PNG Export', addDesc: 'rendering the output to Canvas for crisp 2x PNG download.', rule: 'The exported image must look sharp on Retina screens.' },
  { forKinds: ['dev', 'saas', 'play'], tag: 'Keyboard-Only', addDesc: 'navigable from start to finish without a mouse.', rule: 'Support Tab, Enter, Escape, and arrow-key shortcuts.' },
  { forKinds: ['saas', 'dev'], tag: 'Embeddable Widget', addDesc: 'with a clean ?embed=1 mode and copyable iframe tag.', rule: 'Hide outer navigation chrome when embed=1 is active.' },
  { forKinds: ['saas', 'doc'], tag: 'For Solo Founders', addDesc: 'tailored for indie makers shipping fast.', rule: 'Include 3 realistic indie-hacker starter presets.' },
  { forKinds: ['saas', 'doc'], tag: 'For Remote Teams', addDesc: 'built for async distributed teammates.', rule: 'Make sharing or copying a Slack-ready summary one click.' },
  { forKinds: ['saas', 'visual'], tag: 'For Creators', addDesc: 'designed for newsletter writers and podcasters.', rule: 'Focus on clean visual output ready to post.' },
  { forKinds: ['doc'], tag: 'Print-to-PDF Ready', addDesc: 'with a dedicated @media print stylesheet.', rule: 'Hide all buttons and controls when printing.' },
  { forKinds: ['dev', 'saas', 'visual'], tag: 'Live JSON Config', addDesc: 'driven by an editable JSON pane on the side.', rule: 'Changes in the JSON must update the UI immediately.' },
  { forKinds: ['play', 'visual'], tag: '60fps Physics', addDesc: 'adding subtle gravity, bounce, or spring motion.', rule: 'Keep animation smooth and respect prefers-reduced-motion.' },
  { forKinds: ['saas', 'doc', 'play'], tag: 'Local-First Vault', addDesc: 'with localStorage auto-save and JSON import/export.', rule: 'Keep all user data in the browser with no backend calls.' },
  { forKinds: ['visual', 'dev', 'doc'], tag: 'Undo/Redo Stack', addDesc: 'supporting a 20-step Cmd+Z undo/redo history.', rule: 'Track state snapshots cleanly on every edit.' },
  { forKinds: ['dev', 'doc', 'visual'], tag: 'Split-Pane Live', addDesc: 'using a side-by-side input and live preview layout.', rule: 'Never require a Submit button to see changes.' },
  { forKinds: ['dev', 'play', 'saas'], tag: 'Zero Dependencies', addDesc: 'written in plain vanilla JS or React without extra packages.', rule: 'No third-party UI, icon, or helper libraries.' },
  { forKinds: ['saas', 'play'], tag: 'Mobile-Thumb UI', addDesc: 'ergonomically laid out for 375px phone screens.', rule: 'Place primary actions within easy thumb reach at the bottom.' },
  { forKinds: ['dev', 'play', 'saas'], tag: 'High-Contrast Dark', addDesc: 'with a crisp terminal-inspired dark palette.', rule: 'Verify at least 4.5:1 contrast on every label.' },
  { forKinds: ['saas', 'dev'], tag: 'CSV & Markdown Out', addDesc: 'with one-click CSV and Markdown export.', rule: 'Properly escape quotes and commas in CSV output.' },
  { forKinds: ['dev', 'saas', 'play'], tag: '15-Min Sprint Mode', addDesc: 'paired with a built-in corner focus timer.', rule: 'Keep the timer quiet and optional.' },
  { forKinds: ['doc', 'dev', 'saas', 'visual'], tag: 'Template Presets', addDesc: 'shipping with 5 ready-to-tweak starter templates.', rule: 'Never greet the user with a blank empty screen.' },
  { forKinds: ['dev', 'visual', 'doc'], tag: 'Snapshot Compare', addDesc: 'letting users save and switch between named versions.', rule: 'Make comparing two saved states effortless.' },
  { forKinds: ['doc', 'saas', 'visual'], tag: 'Minimal Editorial', addDesc: 'using newspaper-like hairlines and tabular numbers.', rule: 'Rely on spacing and typography instead of heavy cards.' },
  { forKinds: ['visual', 'saas', 'dev'], tag: 'Drag-and-Drop', addDesc: 'supporting drag-and-drop file drop or item sorting.', rule: 'Include a keyboard or button fallback for every drag action.' },
  { forKinds: ['dev', 'saas', 'play'], tag: 'One-Screen HUD', addDesc: 'fitting the entire experience above the fold.', rule: 'Zero vertical page scrolling on desktop.' },
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

// Precompute compatible twist indices for each base idea so every pairing makes sense
const COMPATIBLE_PAIRS_BY_DECK = {};
let totalValidCount = 0;

for (const deckKey of Object.keys(BASE_IDEAS)) {
  const pairs = [];
  BASE_IDEAS[deckKey].forEach((base, baseIdx) => {
    TWISTS.forEach((twist, twistIdx) => {
      if (twist.forKinds.includes(base.kind)) {
        pairs.push([baseIdx, twistIdx]);
      }
    });
  });
  COMPATIBLE_PAIRS_BY_DECK[deckKey] = pairs;
  totalValidCount += pairs.length;
}

export const TOTAL_IDEA_COUNT = totalValidCount;

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

  while (picked.length < count && guard < 600) {
    guard++;
    const deckKey = deckKeys[Math.floor(Math.random() * deckKeys.length)];
    const pairs = COMPATIBLE_PAIRS_BY_DECK[deckKey];
    const [baseIdx, twistIdx] = pairs[Math.floor(Math.random() * pairs.length)];
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
      for (const [b, t] of COMPATIBLE_PAIRS_BY_DECK[dk]) {
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
    return matches;
  }

  return drawWheelIdeas(deckId, count);
}
