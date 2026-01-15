// Corey's Achilles Protocol - App Logic

// Physio Exercises Data
const physioData = [
    {
        category: "Hip Strength",
        // Abstract: Grid/Structure
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
        </svg>`,
        exercises: [
            {
                id: 0,
                name: "Seated Straight Leg Raise",
                details: "2 × 10 reps, slow 3-second lift/lower",
                instructions: "Sit upright, knee slightly bent, lift the leg without leaning back",
                frequency: "2-3x per day"
            },
            {
                id: 1,
                name: "Side-Lying Hip Abduction",
                details: "2 × 10 reps, slow 3-second lift/lower",
                instructions: "Lie on your side, keep hips stacked, lift the top leg straight up",
                frequency: "2-3x per day"
            },
            {
                id: 2,
                name: "Prone Hip Extension",
                details: "2 × 10 reps, slow 3-second lift/lower",
                instructions: "Lie on your stomach, knee slightly bent, lift the leg without arching your back",
                frequency: "2-3x per day"
            }
        ]
    },
    {
        category: "Toe Control",
        // Abstract: Concentric (Focus)
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
        </svg>`,
        exercises: [
            {
                id: 3,
                name: "Toe Flexion & Extension",
                details: "1 × 15 reps, slow and controlled",
                instructions: "Curl toes down, then lift them up fully",
                frequency: "Multiple times throughout the day"
            },
            {
                id: 4,
                name: "Toe Abduction",
                details: "1 × 15 reps, slow and controlled",
                instructions: "Spread toes apart as best as you can",
                frequency: "Multiple times throughout the day"
            }
        ]
    },
    {
        category: "Knee Exercises",
        // Abstract: Wave (Flow/Motion)
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.2 0 1.8.5 2.5 1"></path>
        </svg>`,
        exercises: [
            {
                id: 5,
                name: "Quad Sets",
                details: "2 × 10 reps, slow 3-second hold",
                instructions: "Tighten the thigh to straighten the knee as tolerated",
                frequency: "2-3x per day"
            },
            {
                id: 6,
                name: "Heel Slides (on your back)",
                details: "2 × 10 reps",
                instructions: "Slowly slide heel toward your body, then back out",
                frequency: "2x per day"
            }
        ]
    }
];

// Phase Data (all original content preserved)
const phases = [
    {
        id: 1,
        name: "Phase I",
        timeline: "Surgery to 3 weeks",
        startWeek: 0,
        endWeek: 3,
        goals: [
            "Control inflammation and pain",
            "Full hip and knee motion",
            "Good quad control"
        ],
        precautions: {
            intro: "General guidelines immediately after surgery:",
            items: [
                "Non-weight bearing with crutches",
                "Short leg cast in plantar flexion"
            ]
        },
        exercises: [
            "Toe curls and toe spreads",
            "Hip and knee ROM and strengthening exercises"
        ],
        braceStatus: null,
        progressionCriteria: null,
        nextPreview: "Phase II: Walking boot, gentle dorsiflexion"
    },
    {
        id: 2,
        name: "Phase II",
        timeline: "3 to 6 weeks",
        startWeek: 3,
        endWeek: 6,
        goals: [
            "Restore normal gait"
        ],
        precautions: null,
        braceStatus: [
            "Walking boot in 30° plantar flexion, may be adjusted each week into dorsiflexion by 10° increments",
            "Start with toe-touch and increase to partial weight-bearing",
            "Wear boot for sleeping",
            "Continue with crutches"
        ],
        exercises: [
            "Start gentle active dorsiflexion until Achilles' stretch is felt",
            "Passive plantar flexion",
            "No active plantar flexion or passive dorsiflexion"
        ],
        progressionCriteria: [
            "Healed wound",
            "Active and passive dorsiflexion to -10 degrees rotation"
        ],
        nextPreview: "Phase III: Full weight bearing, regular shoes"
    },
    {
        id: 3,
        name: "Phase III",
        timeline: "6 to 10 weeks",
        startWeek: 6,
        endWeek: 10,
        goals: [
            "Establish normal gait",
            "Progress with strength, power, and proprioception",
            "Wean into regular shoe as tolerated"
        ],
        precautions: null,
        braceStatus: [
            "Progress to full weight bearing",
            "May switch to shoes with a heel (cowboy boots, heel lift of ½\")"
        ],
        exercises: [
            "Slowly progress with passive ROM and stretch on Achilles' tendon",
            "Advance active dorsiflexion to neutral",
            "Initiate active plantar flexion at 8 weeks",
            "Begin stationary bike with heel push only",
            "Gait training",
            "May progress to pool swimming and jogging at 8 weeks"
        ],
        progressionCriteria: [
            "Normal gait"
        ],
        nextPreview: "Phase IV: Cycling, swimming, resistive exercises"
    },
    {
        id: 4,
        name: "Phase IV",
        timeline: "10 to 14 weeks",
        startWeek: 10,
        endWeek: 14,
        goals: [
            "Advance with strengthening and proprioception"
        ],
        precautions: null,
        braceStatus: [
            "Wean into regular shoe as tolerated",
            "Full weightbearing"
        ],
        exercises: [
            "Progress to cycling in shoe",
            "Full active ROM in all planes",
            "Gentle full passive ROM in all planes",
            "Begin and gradually increase active/resistive exercises of the Achilles (i.e. submaximal isometrics, cautious isotonics, Theraband)",
            "Swimming"
        ],
        progressionCriteria: [
            "Enough strength and proprioception to advance to recreational activities"
        ],
        nextPreview: "Phase V: Squats, lunges, calf raises, plyometrics"
    },
    {
        id: 5,
        name: "Phase V",
        timeline: "14 weeks to 6 months",
        startWeek: 14,
        endWeek: 26,
        goals: [
            "Advance to recreational activities",
            "Transition to home PT program"
        ],
        precautions: null,
        braceStatus: null,
        exercises: [
            {
                text: "Closed chain exercises: controlled squats, lunges, bilateral calf raise (progress to unilateral), toe raises, controlled slow eccentrics vs. body weight"
            },
            {
                text: "Cycling, VersaClimber, elliptical trainer, rowing machine, Nordic Track (gradually)"
            },
            {
                text: "Plyometrics",
                subItems: ["Box Steps (6 and 12 inches)"]
            },
            {
                text: "Proprioception",
                subItems: [
                    "Balance on stable and unstable (BAPS) surface with eyes closed",
                    "Ball catching and throwing from stable and unstable surface"
                ]
            }
        ],
        progressionCriteria: [
            "Full ROM and strength"
        ],
        nextPreview: "Phase VI: Running, box jumps, sports-specific drills"
    },
    {
        id: 6,
        name: "Phase VI",
        timeline: "6 to 9 months",
        startWeek: 26,
        endWeek: 39,
        goals: [
            "Progress to all sports and physical demanding job"
        ],
        precautions: null,
        braceStatus: null,
        exercises: [
            {
                text: "Progress to jogging, then running"
            },
            {
                text: "Plyometrics",
                subItems: [
                    "Stair running",
                    "Box jumps (6 and 12 inches)",
                    "Progress with eccentric loading"
                ]
            },
            {
                text: "Proprioception",
                subItems: ["Mini-tramp bouncing"]
            },
            {
                text: "Sports-specific drills (cutting, pivoting, start at 25% of speed and progress as tolerated)"
            }
        ],
        progressionCriteria: null,
        nextPreview: null
    }
];

// State
let surgeryDate = localStorage.getItem('surgeryDate');
let currentTab = 'today';

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const headerPhase = document.getElementById('headerPhase');
const surgeryDateInput = document.getElementById('surgeryDateInput');
const saveSurgeryDateBtn = document.getElementById('saveSurgeryDate');

// Calculate current phase based on surgery date
function getCurrentPhase() {
    if (!surgeryDate) return null;
    
    const surgery = new Date(surgeryDate);
    const today = new Date();
    const diffTime = today - surgery;
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    for (let i = phases.length - 1; i >= 0; i--) {
        if (diffWeeks >= phases[i].startWeek) {
            return { phase: phases[i], weeksSinceSurgery: diffWeeks };
        }
    }
    return { phase: phases[0], weeksSinceSurgery: 0 };
}

// Get days since surgery
function getDaysSinceSurgery() {
    if (!surgeryDate) return 0;
    const surgery = new Date(surgeryDate);
    const today = new Date();
    return Math.floor((today - surgery) / (1000 * 60 * 60 * 24));
}

// Calculate progress percentage (9 months = ~270 days)
function getProgressPercent() {
    const days = getDaysSinceSurgery();
    const totalDays = 270; // 9 months
    return Math.min(Math.round((days / totalDays) * 100), 100);
}

// Render exercise list (handles both string and object formats)
function renderExercises(exercises) {
    return exercises.map(ex => {
        if (typeof ex === 'string') {
            return `<li class="list-item">${ex}</li>`;
        } else {
            let html = `<li class="list-item">${ex.text}`;
            if (ex.subItems) {
                html += '<ul>';
                ex.subItems.forEach(sub => {
                    html += `<li>${sub}</li>`;
                });
                html += '</ul>';
            }
            html += '</li>';
            return html;
        }
    }).join('');
}

// Calculate streak
function calculateStreak() {
    let streak = 0;
    const today = new Date();
    
    // Check up to 365 days back
    for (let i = 0; i < 365; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        // Use the Toronto-aware key generator
        const key = `physio-checkboxes-${getTodayKey(d)}`;
        const stored = localStorage.getItem(key);
        
        if (stored) {
            const data = JSON.parse(stored);
            // If any exercise was done that day, it counts
            if (data.some(Boolean)) {
                streak++;
            } else if (i === 0) {
                // If today has no exercises yet, don't break streak from yesterday
                continue; 
            } else {
                // Break streak
                break;
            }
        } else if (i > 0) {
            // No data for a past day -> break streak
            break;
        }
    }
    return streak;
}

// Render Today tab content - Context Dashboard
function renderTodayContent() {
    const result = getCurrentPhase();
    if (!result) return;

    const { phase, weeksSinceSurgery } = result;
    const days = getDaysSinceSurgery();
    const progress = getProgressPercent();
    const streak = calculateStreak();

    // Update Hero Content
    document.getElementById('dayCount').textContent = days;
    document.getElementById('heroWeek').textContent = `Week ${weeksSinceSurgery}`;
    document.getElementById('heroPhase').textContent = phase.name; // e.g. "Phase II"
    document.getElementById('streakCount').textContent = streak;
    document.getElementById('progressPercent').textContent = `${progress}%`;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Inject Focus Goal directly into Hero
    // Takes the first goal as the primary headline
    document.getElementById('heroFocus').textContent = phase.goals[0]; 

    // 1. Action Section (Physio Link) - MOVED TO TOP
    // Get completed count
    const state = loadCheckboxState();
    const completedCount = state.filter(Boolean).length;
    const totalCount = state.length;
    const isComplete = completedCount === totalCount && totalCount > 0;
    
    // Simple checkmark in circle icon for completion
    const completeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; color: var(--color-green);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    let actionHtml = `
        <div class="card action-card" onclick="switchTab('physio')">
            <div class="action-card-content">
                <div class="action-text">
                    <div class="action-title" style="display: flex; align-items: center;">
                        ${isComplete ? completeIcon : ''}
                        ${isComplete ? 'Physio Complete' : 'Daily Physio'}
                    </div>
                    <div class="action-subtitle">
                        ${isComplete ? 'Great work keeping the streak alive.' : `${completedCount}/${totalCount} Exercises Completed`}
                    </div>
                </div>
                <div class="action-btn">
                    ${isComplete ? 'Review' : 'Start'}
                </div>
            </div>
            <div class="progress-track">
                <div class="progress-fill-bar" style="width: ${(completedCount/totalCount)*100}%;"></div>
            </div>
        </div>
    `;

    // 2. Current Focus Section - SIMPLIFIED DESIGN (Removed, now in hero)
    /*
    let focusHtml = `
        <div class="focus-section">
            <div class="section-label">Current Focus</div>
            <div class="focus-content">
                ${phase.goals.map(g => `<div class="focus-item">${g}</div>`).join('')}
            </div>
        </div>
    `;
    */
    let focusHtml = ''; // Cleared as it's now in hero

    // 3. Safety & Constraints Section
    let constraintsHtml = '';
    const hasPrecautions = phase.precautions && phase.precautions.items.length > 0;
    const hasBrace = phase.braceStatus && phase.braceStatus.length > 0;

    if (hasPrecautions || hasBrace) {
        constraintsHtml += `<div class="card safety-card"><div class="safety-header">Safety & Constraints</div><ul class="list safety-list">`;
        
        if (hasPrecautions) {
            phase.precautions.items.forEach(p => {
                constraintsHtml += `<li class="list-item list-item-warning">${p}</li>`;
            });
        }
        
        if (hasBrace) {
            phase.braceStatus.forEach(b => {
                constraintsHtml += `<li class="list-item">${b}</li>`;
            });
        }
        
        constraintsHtml += `</ul></div>`;
    }

    // 4. Next Milestone Section
    let nextHtml = '';
    if (phase.progressionCriteria || phase.nextPreview) {
        nextHtml += `<div class="card next-card">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: var(--spacing-sm);">
                <div class="card-title card-title-green">Next Milestone</div>
                <button class="text-link" onclick="switchTab('protocol')">View Protocol →</button>
            </div>
        `;
        
        if (phase.progressionCriteria) {
            nextHtml += `<div style="font-size: 0.75rem; color: var(--color-gray); margin-bottom: var(--spacing-xs); text-transform: uppercase; letter-spacing: 0.05em;">Criteria to Advance:</div><ul class="list">`;
            phase.progressionCriteria.forEach(c => {
                nextHtml += `<li class="list-item">${c}</li>`;
            });
            nextHtml += `</ul>`;
        } else if (phase.nextPreview) {
             nextHtml += `<div class="next-preview-content" style="margin-top:0;">${phase.nextPreview}</div>`;
        }
        
        nextHtml += `</div>`;
    }

    // Combine all sections: Action -> Focus -> Safety -> Next
    document.getElementById('todayContent').innerHTML = actionHtml + focusHtml + constraintsHtml + nextHtml;
}

// Render Phase tab content (all phases as collapsibles)
function renderPhaseContent() {
    const result = getCurrentPhase();
    const currentPhaseId = result ? result.phase.id : 1;

    let html = '<h2 class="section-title">All Phases</h2><p class="section-subtitle">Tap to expand details</p>';

    phases.forEach(phase => {
        const isCurrent = phase.id === currentPhaseId;
        const isOpen = isCurrent;

        html += `
            <div class="collapsible ${isOpen ? 'open' : ''}" data-phase="${phase.id}">
                <button class="collapsible-header">
                    <div class="collapsible-title">
                        <span class="card-icon">
                            ${isCurrent 
                                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-blue)" stroke="none"><circle cx="12" cy="12" r="10"></circle></svg>` 
                                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-light)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`
                            }
                        </span>
                        <span>${phase.name}: ${phase.timeline}</span>
                    </div>
                    <span class="collapsible-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                </button>
                <div class="collapsible-content">
                    <div style="margin-bottom: var(--spacing-sm);">
                        <div class="card-title card-title-blue" style="margin-bottom: var(--spacing-xs);">Rehabilitation Goals</div>
                        <ul class="list">
                            ${phase.goals.map(g => `<li class="list-item">${g}</li>`).join('')}
                        </ul>
                    </div>
        `;

        if (phase.precautions) {
            html += `
                <div style="margin-bottom: var(--spacing-sm);">
                    <div class="card-title" style="color: #E8A87C; margin-bottom: var(--spacing-xs);">Precautions</div>
                    <p style="font-size: 0.85rem; color: var(--color-gray); margin-bottom: var(--spacing-xs);">${phase.precautions.intro}</p>
                    <ul class="list">
                        ${phase.precautions.items.map(p => `<li class="list-item list-item-warning">${p}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (phase.braceStatus) {
            html += `
                <div style="margin-bottom: var(--spacing-sm);">
                    <div class="card-title card-title-green" style="margin-bottom: var(--spacing-xs);">Brace & Weightbearing Status</div>
                    <ul class="list">
                        ${phase.braceStatus.map(b => `<li class="list-item">${b}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        html += `
            <div style="margin-bottom: var(--spacing-sm);">
                <div class="card-title card-title-blue" style="margin-bottom: var(--spacing-xs);">Suggested Therapeutic Exercises</div>
                <ul class="list">
                    ${renderExercises(phase.exercises)}
                </ul>
            </div>
        `;

        if (phase.progressionCriteria) {
            html += `
                <div>
                    <div class="card-title card-title-green" style="margin-bottom: var(--spacing-xs);">Progression Criteria</div>
                    <ul class="list">
                        ${phase.progressionCriteria.map(c => `<li class="list-item">${c}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;
    });

    document.getElementById('phaseContent').innerHTML = html;

    // Add collapsible event listeners
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const collapsible = header.parentElement;
            collapsible.classList.toggle('open');
        });
    });
}

// Render horizontal timeline (two-layer approach)
function renderJourneyTimeline() {
    const result = getCurrentPhase();
    const currentPhaseId = result ? result.phase.id : 0;
    const currentPhase = result ? result.phase : phases[0];

    // Update current phase banner
    const bannerEl = document.getElementById('currentPhaseBanner');
    if (bannerEl) {
        bannerEl.innerHTML = `
            <div class="phase-name">${currentPhase.name}</div>
            <div class="phase-time">${currentPhase.timeline}</div>
        `;
    }

    // Build all nodes including return to sport
    const allNodes = [
        ...phases.map(p => ({ id: p.id, label: p.id, name: p.name })),
        { id: 7, label: '★', name: 'Return' } // Simple star or check instead of runner
    ];

    // Calculate progress percentage for the line
    // Progress goes from first dot center to current dot center
    const totalSegments = allNodes.length - 1;
    const completedSegments = Math.max(0, currentPhaseId - 1);
    const progressPercent = (completedSegments / totalSegments) * 100;

    // Build HTML with track, progress, and nodes in a wrapper
    let html = `
        <div class="timeline-track"></div>
        <div class="timeline-progress" style="width: ${progressPercent}%;"></div>
        <div class="timeline-dots">
    `;

    allNodes.forEach((node) => {
        let status = 'future';
        if (node.id < currentPhaseId) status = 'completed';
        if (node.id === currentPhaseId) status = 'current';

        // Show full name for current phase, just number for others
        const displayLabel = status === 'current' ? node.name : node.label;

        html += `
            <div class="timeline-node ${status}">
                <div class="timeline-dot"></div>
                <div class="timeline-label">${displayLabel}</div>
            </div>
        `;
    });

    html += `</div>`; // Close timeline-dots

    document.getElementById('journeyTimeline').innerHTML = html;
}

// Physio Checkbox Management
const TOTAL_EXERCISES = 7;
let currentPhysioDate = new Date();

function getTodayKey(date = currentPhysioDate) {
    // Returns YYYY-MM-DD in Toronto time (America/Toronto)
    return date.toLocaleDateString('en-CA', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function loadCheckboxState() {
    const key = `physio-checkboxes-${getTodayKey()}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : Array(TOTAL_EXERCISES).fill(false);
}

function saveCheckboxState(state) {
    const key = `physio-checkboxes-${getTodayKey()}`;
    localStorage.setItem(key, JSON.stringify(state));
    // Trigger update to refresh UI
    renderPhysioContent();
}

function updateDateDisplay() {
    const display = document.getElementById('currentDateDisplay');
    if (!display) return;

    const today = new Date();
    const isToday = currentPhysioDate.toDateString() === today.toDateString();
    
    // Format: "Jan 15" or "Today"
    const options = { month: 'short', day: 'numeric' };
    const dateStr = currentPhysioDate.toLocaleDateString('en-US', options);
    
    display.textContent = isToday ? 'Today' : dateStr;
}

// Update Physio tab phase/week display dynamically
function updatePhysioPhaseWeek() {
    // Use currentPhysioDate for phase calculation? 
    // Ideally yes, to see what phase you WERE in.
    // But for now, let's keep it simple and just show current recovery status.
    const result = getCurrentPhase(); 
    if (!result) return;
    
    const { phase, weeksSinceSurgery } = result;
    const phaseWeekEl = document.getElementById('physioPhaseWeek');
    if (phaseWeekEl) {
        phaseWeekEl.textContent = `Phase ${phase.id} • Week ${weeksSinceSurgery}`;
    }
}

// Render Physio Content (Exercises + Groups)
function renderPhysioContent() {
    updateDateDisplay();
    
    const container = document.getElementById('prescriptionContent');
    if (!container) return;

    // Capture currently open groups before re-rendering
    const openGroups = new Set();
    container.querySelectorAll('.exercise-group.open').forEach(el => {
        openGroups.add(el.id);
    });

    const state = loadCheckboxState();
    let html = '';

    physioData.forEach((group, groupIndex) => {
        // Calculate progress
        const groupIds = group.exercises.map(e => e.id);
        const completedCount = groupIds.filter(id => state[id]).length;
        const totalCount = groupIds.length;
        const isComplete = completedCount === totalCount;
        
        // Progress badge style
        const progressClass = isComplete ? 'complete' : '';
        const progressText = isComplete ? '✓' : `${completedCount}/${totalCount}`;
        
        const groupId = `group-${groupIndex}`;
        const isOpen = openGroups.has(groupId); // Preserve state

        html += `
            <div class="exercise-group ${isOpen ? 'open' : ''}" id="${groupId}">
                <button class="exercise-group-header" data-group="${groupIndex}">
                    <div class="exercise-group-title-wrapper">
                        <span class="exercise-group-icon">${group.icon}</span>
                        <span class="exercise-group-title">${group.category}</span>
                    </div>
                    <div class="exercise-group-meta">
                        <span class="exercise-progress ${progressClass}">${progressText}</span>
                        <span class="exercise-group-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </div>
                </button>
                <div class="exercise-list">
                    ${group.exercises.map(ex => {
                        const isChecked = state[ex.id];
                        return `
                            <div class="exercise-item">
                                <div class="checkbox-wrapper">
                                    <div class="checkbox ${isChecked ? 'checked' : ''}" data-exercise="${ex.id}"></div>
                                </div>
                                <div class="exercise-content">
                                    <div class="exercise-name">${ex.name}</div>
                                    <div class="exercise-details">${ex.details}</div>
                                    <div class="exercise-instructions">${ex.instructions}</div>
                                    <span class="exercise-frequency">📅 ${ex.frequency}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    // Add Recovery Notes
    html += `
        <div class="recovery-notes">
            <div class="recovery-notes-title">
                <span class="card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </span>
                <span>Important Recovery Notes</span>
            </div>
            <div class="recovery-note-item">
                <div class="recovery-note-label">Pain & swelling control:</div>
                <div class="recovery-note-text">Ice and elevate for 20 minutes at a time, multiple times per day.</div>
            </div>
            <div class="recovery-note-item">
                <div class="recovery-note-label">Mobility matters:</div>
                <div class="recovery-note-text">Consistency is key to preventing stiffness.</div>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Re-attach listeners
    attachPhysioListeners();
}

function attachPhysioListeners() {
    // Accordion toggles
    document.querySelectorAll('.exercise-group-header').forEach(header => {
        header.addEventListener('click', (e) => {
            const group = header.parentElement;
            group.classList.toggle('open');
        });
    });

    // Checkboxes
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            const id = parseInt(checkbox.dataset.exercise);
            const state = loadCheckboxState();
            state[id] = !state[id];
            saveCheckboxState(state); // This re-renders
        });
    });
}

function initPhysioCheckboxes() {
    renderPhysioContent();
}

// Switch tabs
function switchTab(tabId) {
    currentTab = tabId;

    // Scroll to top
    window.scrollTo(0, 0);

    // Update nav items
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabId);
    });

    // Update tab content
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });

    // Render content
    if (tabId === 'today') renderTodayContent();
    if (tabId === 'protocol') {
        renderPhaseContent();
        renderJourneyTimeline();
    }
    if (tabId === 'physio') {
        initPhysioCheckboxes();
        updatePhysioPhaseWeek();
    }
}

// Initialize
function init() {
    if (surgeryDate) {
        // Show Today tab
        document.getElementById('setup').classList.remove('active');
        switchTab('today');
        initPhysioCheckboxes();
    } else {
        // Show setup
        document.getElementById('setup').classList.add('active');
        document.querySelector('.bottom-nav').style.display = 'none';
    }
}

// Event Listeners
navItems.forEach(item => {
    item.addEventListener('click', () => {
        switchTab(item.dataset.tab);
    });
});

saveSurgeryDateBtn.addEventListener('click', () => {
    const date = surgeryDateInput.value;
    if (date) {
        surgeryDate = date;
        localStorage.setItem('surgeryDate', date);
        document.getElementById('setup').classList.remove('active');
        document.querySelector('.bottom-nav').style.display = 'flex';
        switchTab('today');
    }
});

// Contact Modal
const contactModal = document.getElementById('contactModal');
const openContactModalBtn = document.getElementById('openContactModal');
const closeContactModalBtn = document.getElementById('closeContactModal');

if (openContactModalBtn) {
    openContactModalBtn.addEventListener('click', () => {
        contactModal.classList.add('open');
    });
}

if (closeContactModalBtn) {
    closeContactModalBtn.addEventListener('click', () => {
        contactModal.classList.remove('open');
    });
}

// Close modal on overlay click
if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('open');
        }
    });
}

// Date Navigation Listeners
document.getElementById('prevDayBtn').addEventListener('click', () => {
    currentPhysioDate.setDate(currentPhysioDate.getDate() - 1);
    renderPhysioContent();
});

document.getElementById('nextDayBtn').addEventListener('click', () => {
    currentPhysioDate.setDate(currentPhysioDate.getDate() + 1);
    renderPhysioContent();
});

// Initialize on load
init();

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

