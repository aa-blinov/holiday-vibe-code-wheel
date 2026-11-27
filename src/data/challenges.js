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
    { kind: 'saas', short: 'Runway Calc', title: 'Startup Runway Calculator', desc: 'Cash-on-hand, monthly burn, and growth sliders that plot months until zero' },
    { kind: 'saas', short: 'Churn Sim', title: 'MRR & Churn Simulator', desc: 'Model new customers, monthly churn rate, and expansion MRR over 12 months' },
    { kind: 'doc', short: 'Press Kit', title: 'Indie Press Kit Builder', desc: 'Assemble product bio, founder headshots, logo links, and fact sheet into one clean page' },
    { kind: 'saas', short: 'Feature Vote', title: 'Ice-Score Prioritizer', desc: 'Rank backlog features by Impact, Confidence, and Effort with automatic score sorting' },
    { kind: 'saas', short: 'Split Test', title: 'A/B Significance Calc', desc: 'Enter visitor and conversion counts for A and B to check statistical confidence live' },
    { kind: 'doc', short: 'Bug Report', title: 'Clean Bug Report Form', desc: 'Guided form for repro steps, expected vs actual, and environment that copies Markdown' },
    { kind: 'saas', short: 'Sub Tracker', title: 'SaaS Spend Audit', desc: 'Log recurring tool subscriptions, billing cycle, and total annual cost at a glance' },
    { kind: 'saas', short: 'Time Audit', title: 'Deep Work Log', desc: 'Track focused vs fragmented hours per day and compute your weekly maker-time ratio' },
    { kind: 'doc', short: 'Postmortem', title: 'Incident Postmortem Doc', desc: 'Blameless outage template with timeline, root cause, and action items export' },
    { kind: 'saas', short: 'Cold Email', title: 'Outreach Snippet Tester', desc: 'Check cold email length, reading grade, and spammy words with live personalization tags' },
    { kind: 'visual', short: 'App Store', title: 'App Screenshot Framer', desc: 'Drop a phone or browser screenshot into a clean device frame with headline copy' },
    { kind: 'saas', short: 'CRM Lite', title: 'Warm Network CRM', desc: 'Simple contact list with last-spoken date and gentle 30-day follow-up reminders' },
    { kind: 'doc', short: 'SOP Builder', title: 'Step-by-Step SOP Maker', desc: 'Turn numbered checklists and warnings into a clean printable team procedure doc' },
    { kind: 'saas', short: 'Quota Calc', title: 'Freelance Day-Rate Calc', desc: 'Factor taxes, unpaid vacation weeks, and expenses to find your real minimum day rate' },
    { kind: 'saas', short: 'Domain Watch', title: 'Side-Project Domain List', desc: 'Organize domain ideas, renewal dates, and registrar notes in one searchable table' },
    { kind: 'doc', short: 'Launch Post', title: 'HN / Show HN Drafter', desc: 'Character-counted Show HN title and plain-text intro builder with anti-hype checks' },
    { kind: 'saas', short: 'Retro Board', title: '3-Column Team Retro', desc: 'Went Well, To Improve, and Action Items board with dot-voting and Markdown export' },
    { kind: 'visual', short: 'Badge Wall', title: 'Milestone Trophy Shelf', desc: 'Generate a clean visual strip of product milestones (First $1, 100 Users, 1k Stars)' },
    { kind: 'saas', short: 'Cohort Sim', title: 'Retention Curve Plotter', desc: 'Paste weekly retention percentages to draw a clean cohort decay chart' },
    { kind: 'doc', short: 'Brief Maker', title: 'Client Creative Brief', desc: 'Structured intake form for goals, audience, and non-goals that exports a clean PDF' },
    { kind: 'saas', short: 'PTO Planner', title: 'Team Leave Calendar', desc: 'Visual month strip showing overlapping team vacations and coverage gaps' },
    { kind: 'saas', short: 'Micro-CRM', title: 'Sponsor Pipeline Board', desc: 'Track outreach, pitch sent, booked, and paid sponsors for a newsletter or podcast' },
    { kind: 'doc', short: 'Privacy Gen', title: 'Plain-English Privacy', desc: 'Questionnaire for local-only or analytics-free apps that outputs a readable privacy page' },
    { kind: 'saas', short: 'Water Goal', title: 'Daily Hydration Tracker', desc: 'Click 8 glass tiles to fill a visual daily bottle and track weekly streaks' },
    { kind: 'saas', short: 'Scope Tri', title: 'Good-Cheap-Fast Toggle', desc: 'Interactive 3-switch project triangle where turning on the third forces a trade-off' },
    { kind: 'doc', short: 'Release Email', title: 'Customer Update Drafter', desc: 'Turn 3 bullet points into a clean, hype-free monthly product update email' },
    { kind: 'saas', short: 'NPS Calc', title: 'NPS & CSAT Calculator', desc: 'Enter Promoter, Passive, and Detractor counts to compute NPS with a breakdown bar' },
    { kind: 'visual', short: 'Compare UI', title: 'Before/After Wipe Slider', desc: 'Drop two product screenshots and drag a vertical split handle to compare changes' },
    { kind: 'doc', short: 'SLA Sheet', title: 'Support SLA Estimator', desc: 'Pick response tiers and business hours to generate a clean client support table' },
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
    { kind: 'dev', short: 'Chmod Calc', title: 'Unix Chmod & Octal', desc: 'Toggle owner/group/public read-write-exec boxes and copy the chmod command' },
    { kind: 'dev', short: 'Flexbox Lab', title: 'CSS Flexbox Sandbox', desc: 'Interactive container and item controls for justify, align, wrap, and gap with CSS copy' },
    { kind: 'dev', short: 'CORS Tester', title: 'HTTP Header Inspector', desc: 'Paste raw response headers to audit CORS, caching, and security header rules' },
    { kind: 'dev', short: 'YAML to JSON', title: 'YAML / TOML / JSON', desc: 'Convert config files between YAML, JSON, and env-var format cleanly in-browser' },
    { kind: 'dev', short: 'URL Parser', title: 'Query String Workbench', desc: 'Break any long URL into protocol, path, and editable key-value query parameters' },
    { kind: 'dev', short: 'ASCII Table', title: 'Unicode & ASCII Lookup', desc: 'Instant search for ASCII codes, HTML entities, and common Unicode symbols' },
    { kind: 'dev', short: 'Timestamp', title: 'Epoch & ISO Converter', desc: 'Convert Unix seconds/ms, ISO-8601, and relative time strings across timezones' },
    { kind: 'dev', short: 'SemVer Lab', title: 'SemVer Range Tester', desc: 'Test ^1.2.3 and ~2.0.0 version ranges against a list of release tags' },
    { kind: 'dev', short: 'CSS Clamp', title: 'Fluid Type Clamp Calc', desc: 'Enter min/max font sizes and viewport widths to generate CSS clamp() formulas' },
    { kind: 'dev', short: 'Shadow Lab', title: 'Layered Shadow Builder', desc: 'Tune multi-layer CSS box-shadow offsets, blur, and spread with clean token output' },
    { kind: 'dev', short: 'CSP Builder', title: 'CSP Policy Generator', desc: 'Assemble Content-Security-Policy directives visually and check for unsafe-inline' },
    { kind: 'dev', short: 'Robots.txt', title: 'Robots & Sitemap Gen', desc: 'Configure crawler allow/disallow rules and preview the final robots.txt file' },
    { kind: 'dev', short: 'Cubic Bezier', title: 'Easing Curve Editor', desc: 'Drag two control points on Canvas to test CSS cubic-bezier motion live' },
    { kind: 'dev', short: 'Mock JSON', title: 'Realistic Seed Data Gen', desc: 'Define a schema of names, dates, UUIDs, and prices to generate 50 mock JSON rows' },
    { kind: 'dev', short: 'Byte Size', title: 'Bundle & Gzip Estimator', desc: 'Paste any JS or CSS snippet to measure raw, minified, and approximate gzipped size' },
    { kind: 'dev', short: 'AST Explorer', title: 'Tiny Expression AST', desc: 'Tokenize and parse arithmetic or boolean expressions into an interactive syntax tree' },
    { kind: 'dev', short: 'LRU Cache', title: 'Visual LRU Cache', desc: 'Step through get/put operations on a fixed-capacity LRU cache and watch evictions' },
    { kind: 'dev', short: 'Rate Limiter', title: 'Token Bucket Simulator', desc: 'Fire burst requests at a token-bucket or sliding-window limiter and watch 429s' },
    { kind: 'dev', short: 'State Machine', title: 'Finite State Visualizer', desc: 'Define states and transitions in JSON and click events to step through the machine' },
    { kind: 'dev', short: 'A11y Audit', title: 'Heading & Aria Checker', desc: 'Paste HTML markup to flag skipped heading levels, missing alt text, and unlabeled inputs' },
    { kind: 'dev', short: 'Gitignore Gen', title: '.gitignore Composer', desc: 'Combine Node, Python, macOS, and IDE presets into a clean deduplicated .gitignore' },
    { kind: 'visual', short: 'Diff Image', title: 'Pixel-Diff Overlay', desc: 'Drop two UI screenshots and slide a wipe or highlight differing pixels in red' },
    { kind: 'dev', short: 'Cron Matrix', title: '24h Job Overlap View', desc: 'Plot multiple cron schedules on a 24-hour timeline to spot thundering-herd spikes' },
    { kind: 'dev', short: 'Speech API', title: 'Voice Synthesis Tester', desc: 'Test browser SpeechSynthesis voices with pitch, rate, and sample script presets' },
    { kind: 'dev', short: 'Cheat Code', title: 'Key Sequence Listener', desc: 'Record custom multi-key combos like Konami code and trigger visual callbacks' },
    { kind: 'dev', short: 'Live Filter', title: 'Instant Type-Ahead Search', desc: 'Filter 1,000+ city or package records on every keystroke with highlighted matches' },
    { kind: 'dev', short: 'Video Speed', title: 'Custom Video Scrubber', desc: 'HTML5 video player with 0.25x-4x speed bar, frame-step buttons, and A/B loop' },
    { kind: 'dev', short: 'Storage Spy', title: 'LocalStorage Inspector', desc: 'View, edit, search, and export all key-value pairs in the current origin storage' },
    { kind: 'dev', short: 'Sticky Nav', title: 'Scrollspy & Sticky TOC', desc: 'Long-article layout with intersection-observer section highlighting and progress bar' },
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
    { kind: 'play', short: 'Game of Life', title: 'Conway Game of Life', desc: 'Interactive cellular grid with Glider/Pulsar presets, speed slider, and step mode' },
    { kind: 'play', short: 'Maze Solver', title: 'Maze Gen & Pathfind', desc: 'Generate random mazes and watch BFS, DFS, or A* trace the shortest path live' },
    { kind: 'play', short: 'Sorting Viz', title: 'Algorithm Sort Race', desc: 'Compare Quicksort, Mergesort, and Insertion sort side-by-side on random arrays' },
    { kind: 'play', short: 'Chord Finder', title: 'Guitar & Piano Chords', desc: 'Pick a root and chord quality to highlight notes on a clean fretboard and keyboard' },
    { kind: 'play', short: 'Metronome', title: 'Tap-Tempo Metronome', desc: 'WebAudio click track with accent beat toggle, subdivisions, and tap-tempo detection' },
    { kind: 'play', short: 'Whiteboard', title: 'Infinite Dot-Grid Pad', desc: 'Minimal pan-and-draw vector sketchpad with undo and SVG export' },
    { kind: 'play', short: 'Breathing', title: '4-7-8 Breathing Guide', desc: 'Calm visual cadence timer for box breathing or 4-7-8 focus resets' },
    { kind: 'visual', short: 'Favicon Lab', title: 'SVG Favicon Designer', desc: 'Draw or pick a monogram and preview it at 16px, 32px, and browser-tab scale' },
    { kind: 'play', short: 'Morse Code', title: 'Morse Audio Trainer', desc: 'Type text to hear WebAudio Morse dits and dahs or tap a key to decode signals' },
    { kind: 'visual', short: 'Noise Gen', title: 'Perlin Noise Terrain', desc: 'Adjust octaves and seed to render topographic contour lines or heightmaps on Canvas' },
    { kind: 'play', short: 'Synth Pad', title: 'FM Polyphonic Synth', desc: 'Playable QWERTY keyboard synthesizer with attack/decay sliders and waveform scope' },
    { kind: 'play', short: 'Reaction Test', title: 'Millisecond Reflex Test', desc: '5-round reaction speed benchmark with average, best, and consistency score' },
    { kind: 'visual', short: 'QR Art', title: 'Styled QR Code Maker', desc: 'Generate crisp square or rounded-module QR codes with custom foreground hex' },
    { kind: 'play', short: 'Tile Puzzle', title: '15-Puzzle Slide Game', desc: 'Classic 4x4 sliding number puzzle guaranteed solvable with move counter' },
    { kind: 'play', short: 'Minesweeper', title: 'Minimal Minesweeper', desc: 'Clean 9x9 or 16x16 minefield with chord-click, flags, and first-click safety' },
    { kind: 'visual', short: 'Sprite Sheet', title: 'Animation Frame Tester', desc: 'Drop a sprite sheet, set frame width/height and FPS, and preview the loop live' },
    { kind: 'play', short: 'Ear Trainer', title: 'Interval Ear Trainer', desc: 'Play two random WebAudio notes and guess the musical interval to build ear accuracy' },
    { kind: 'saas', short: 'Workout Log', title: '3-Lift Session Tracker', desc: 'Fast gym log for sets, reps, and weight with automatic 1RM estimate' },
    { kind: 'play', short: 'Orbit Sim', title: '2-Body Gravity Sandbox', desc: 'Click and drag to launch planets around a star and watch elliptical orbits form' },
    { kind: 'visual', short: 'Halftone', title: 'Photo Halftone Filter', desc: 'Turn any uploaded photo into a crisp dot-matrix halftone pattern and export PNG' },
    { kind: 'play', short: 'Word Chain', title: 'Daily Word Ladder', desc: 'Transform one 4-letter word into another by changing a single letter per step' },
    { kind: 'doc', short: 'Recipe Card', title: 'Clean Recipe Formatter', desc: 'Paste messy blog recipe text and strip it into a tidy two-column ingredient/step card' },
    { kind: 'play', short: 'Pendulum', title: 'Double Pendulum Chaos', desc: 'Simulate two linked pendulums on Canvas with fading trail paths' },
    { kind: 'play', short: 'Hoverboard', title: 'Neon Trail Grid', desc: '20x20 interactive tile grid where pointer movement leaves smooth fading color trails' },
    { kind: 'play', short: 'Whack-a-Bug', title: '30-Second Bug Smasher', desc: 'Fast-paced Canvas/DOM arcade where you squash popping bugs for combo multipliers' },
    { kind: 'visual', short: 'Webcam Lab', title: 'Live Webcam Filter Booth', desc: 'Apply pixelate, RGB split, or monochrome filters to your camera feed and snap PNGs' },
    { kind: 'play', short: 'Dictaphone', title: 'Voice-to-Note Pad', desc: 'Use the browser SpeechRecognition API to dictate quick notes with punctuation commands' },
    { kind: 'visual', short: '3D Boxes', title: '3D CSS Perspective Grid', desc: 'Split an image into a 4x4 grid of 3D-rotating CSS tiles that toggle on click' },
    { kind: 'play', short: 'Drum Kit', title: 'QWERTY Drum Kit', desc: 'Map 9 keys to synthesized kick, snare, clap, and hi-hat hits with key-press animation' },
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
    { kind: 'play', short: 'Gift Catcher', title: '20-Second Sleigh Catch', desc: 'Move left/right to catch falling presents and dodge coal in a quick Canvas arcade' },
    { kind: 'visual', short: 'Sweater Art', title: 'Pixel Sweater Pattern', desc: 'Paint a repeating Nordic knit grid on Canvas and tile it as a seamless pattern' },
    { kind: 'play', short: 'Bell Choir', title: 'Handbell Chord Toy', desc: 'Ring 8 tuned holiday bells with QWERTY keys and lingering WebAudio resonance' },
    { kind: 'saas', short: 'Dinner Plan', title: 'Holiday Dinner Timeline', desc: 'Work backward from serving time to schedule oven, prep, and resting steps' },
    { kind: 'doc', short: 'Menu Print', title: 'Holiday Feast Menu', desc: 'Format starters, mains, and drinks into a classic centered dinner menu ready to print' },
    { kind: 'play', short: 'Ice Physics', title: 'Slippery Puck Mini-Game', desc: 'Flick a puck across low-friction ice targets in a 5-hole tabletop Canvas game' },
    { kind: 'visual', short: 'Snowman Lab', title: 'Modular Snowman Builder', desc: 'Mix hats, scarves, noses, and backgrounds to export a crisp SVG winter avatar' },
    { kind: 'saas', short: 'Movie Bracket', title: 'Holiday Film Tournament', desc: 'Pit 8 or 16 classic winter movies in a clickable single-elimination bracket' },
    { kind: 'play', short: 'Fireworks', title: 'Midnight Fireworks Canvas', desc: 'Click anywhere in the night sky to launch particle bursts with gravity and trails' },
    { kind: 'doc', short: 'Year Review', title: 'Annual Check-In Prompts', desc: '10 thoughtful end-of-year reflection questions that export as a clean Markdown journal' },
    { kind: 'saas', short: 'Travel Pack', title: 'Winter Trip Pack List', desc: 'Smart packing checklist adjusted by trip days and cold-weather layers' },
    { kind: 'play', short: 'Candle Timer', title: 'Melting Candle Pomodoro', desc: 'A 25-minute focus timer visualized as a slowly burning wax candle' },
    { kind: 'visual', short: 'Gift Receipt', title: 'Year-in-Code Receipt', desc: 'Turn your annual GitHub commits, PRs, and top language into a thermal receipt PNG' },
    { kind: 'play', short: 'Sled Runner', title: 'Endless Slope Dodger', desc: 'Steer a sled down a procedural pine slope dodging trees with increasing speed' },
    { kind: 'saas', short: 'Toast Gen', title: 'New Year Toast Builder', desc: 'Pick tone, audience, and 2 memories to draft a short 30-second dinner toast' },
    { kind: 'play', short: 'Snowball Aim', title: 'Wind-Aware Target Toss', desc: 'Adjust angle, power, and wind compensation to hit winter targets on Canvas' },
    { kind: 'doc', short: 'Book List', title: 'Top 5 Books of the Year', desc: 'Build a clean shareable reading list card with short one-line takeaways' },
    { kind: 'visual', short: 'Origami Star', title: 'Geometric Star Creator', desc: 'Adjust points, inner radius, and rotation to craft crisp vector holiday stars' },
    { kind: 'play', short: 'Carols Quiz', title: 'Name That 8-Bit Tune', desc: 'Play 3-second WebAudio snippets of holiday melodies and guess the title fast' },
    { kind: 'saas', short: 'Potluck List', title: 'Party Dish Coordinator', desc: 'Track who is bringing mains, sides, and drinks without duplicate desserts' },
    { kind: 'play', short: 'Frost Window', title: 'Draw on Frosted Glass', desc: 'Wipe clear paths through a frosted Canvas window while ice crystals slowly regrow' },
    { kind: 'doc', short: 'Thank You', title: 'Gift Thank-You Tracker', desc: 'Log who gave what gift and draft short personal thank-you notes' },
    { kind: 'play', short: 'Tree Decorator', title: 'Interactive Pine Tree', desc: 'Drag baubles, tinsel, and a star onto a clean vector pine tree and save as PNG' },
    { kind: 'play', short: 'Analog Clock', title: 'Sweep-Hand Wall Clock', desc: 'Minimalist analog clock with smooth sweeping second hand and city timezone switch' },
    { kind: 'visual', short: 'Split Slider', title: 'Dual Vertical Showcase', desc: 'Opposing left-and-right vertical panels that slide in opposite directions on scroll' },
    { kind: 'play', short: 'Snow Maze', title: 'Winter Sokoban Puzzle', desc: '5-level box-pushing puzzle on ice tiles with undo move and step counter' },
    { kind: 'saas', short: 'Gift Swap', title: 'White Elephant Rules', desc: 'Turn-by-turn party gift-steal tracker with steal limit counter and current holder log' },
    { kind: 'doc', short: 'Year Letter', title: 'Future-Self Letter', desc: 'Guided 5-minute year-end letter template with clean print-and-fold formatting' },
    { kind: 'play', short: 'Bell Pattern', title: 'Simon Memory Chimes', desc: 'Repeat an increasingly long sequence of glowing holiday chimes and WebAudio notes' },
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
