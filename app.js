const weeks = [
  {
    title: "Diagnostic Writing and Goal Setting",
    focus: "Identify the student's current strengths, habits, and writing bottlenecks.",
    classA: "Read a short historical or social science passage and mark the main claim, evidence, and author's purpose.",
    classB: "Write a 500-700 word argumentative essay and complete a short reflection on the writing process.",
    homework: "Write a 250-word self-reflection: What feels strongest in my writing? What feels uncertain?",
    output: "Diagnostic essay, personal writing profile, and writing notebook.",
    tags: ["diagnostic", "reading", "argument"]
  },
  {
    title: "Thesis Training",
    focus: "Move from having an opinion to making an argument.",
    classA: "Distinguish topic, opinion, and thesis; practice literary, historical, and personal thesis statements.",
    classB: "Revise broad thesis statements into precise, arguable, well-scoped claims.",
    homework: "Write thesis statements for eight prompts, then expand two into introduction paragraphs.",
    output: "Thesis bank of 8-10 statements and two introduction paragraphs.",
    tags: ["thesis", "structure", "clarity"]
  },
  {
    title: "Paragraph Structure and Evidence",
    focus: "Make every paragraph move the argument forward.",
    classA: "Learn CEAE: Claim, Evidence, Analysis, Extension.",
    classB: "Practice writing three levels of analysis after the same piece of evidence.",
    homework: "Write three 180-220 word analytical paragraphs and revise one for deeper analysis.",
    output: "Three analytical paragraphs.",
    tags: ["paragraph", "evidence", "analysis"]
  },
  {
    title: "Reading Complex Texts",
    focus: "Strong writing begins with accurate reading.",
    classA: "Literary reading: character motive, theme, symbolism, and point of view.",
    classB: "Historical and social science reading: author position, evidence selection, and assumptions.",
    homework: "Read one literary passage and one historical/social science passage; write a 150-word summary and 150-word analysis for each.",
    output: "Two reading responses.",
    tags: ["close reading", "annotation", "analysis"]
  },
  {
    title: "APUSH SAQ Foundations",
    focus: "Answer briefly and precisely instead of writing a mini-essay.",
    classA: "Learn ACE: Answer, Cite, Explain; identify prompt verbs such as identify, describe, explain, and compare.",
    classB: "Complete two SAQ sets, three parts each, with 3-5 focused sentences per part.",
    homework: "Complete two additional SAQ sets and check for specific evidence and explanation.",
    output: "Four SAQ sets with revisions.",
    tags: ["SAQ", "ACE", "timed"]
  },
  {
    title: "APUSH SAQ Practice",
    focus: "Build consistency and avoid vague answers.",
    classA: "Practice source-based SAQ reading and non-source SAQ knowledge retrieval.",
    classB: "Complete one SAQ set in 12 minutes, then revise it immediately.",
    homework: "Complete three timed SAQ sets and write a reflection on the most difficult part.",
    output: "SAQ skill checklist and personal SAQ response frame.",
    tags: ["SAQ", "source", "precision"]
  },
  {
    title: "APUSH DBQ Breakdown",
    focus: "Break the DBQ into skills before writing full essays.",
    classA: "Read the prompt, identify the historical reasoning skill, and practice quick document reading.",
    classB: "Practice document grouping, thesis writing, and contextualization.",
    homework: "Complete one DBQ grouping chart and write a thesis, contextualization, and two body paragraph outlines.",
    output: "One DBQ analysis chart and one DBQ outline.",
    tags: ["DBQ", "documents", "context"]
  },
  {
    title: "APUSH DBQ Writing",
    focus: "Turn documents into an argument instead of summarizing them one by one.",
    classA: "Practice document evidence, analysis, and sourcing/HIPP.",
    classB: "Add outside evidence and complexity through exceptions, contradictions, or multiple causes.",
    homework: "Write one untimed DBQ and revise the thesis, evidence integration, and analysis.",
    output: "One full DBQ draft and revision.",
    tags: ["DBQ", "HIPP", "revision"]
  },
  {
    title: "APUSH LEQ Writing",
    focus: "Organize historical knowledge without documents.",
    classA: "Practice three reasoning patterns: causation, comparison, and continuity/change over time.",
    classB: "Write thesis statements and outlines for three LEQ prompts; expand one into an introduction and body paragraph.",
    homework: "Write one 40-50 minute LEQ and self-score it with the rubric.",
    output: "One LEQ and one historical evidence bank.",
    tags: ["LEQ", "reasoning", "evidence bank"]
  },
  {
    title: "Timed Writing Week",
    focus: "Use the skills under realistic time pressure.",
    classA: "Timed SAQ practice: about 12 minutes per set, followed by review.",
    classB: "Timed DBQ or LEQ practice with a five-minute planning routine.",
    homework: "Revise the timed writing and write a reflection on what breaks down under time pressure.",
    output: "One timed SAQ set and one timed DBQ or LEQ.",
    tags: ["timed writing", "APUSH", "stability"]
  },
  {
    title: "Cross-Disciplinary Academic Essay",
    focus: "Transfer APUSH argument skills to English and other junior-year classes.",
    classA: "Review the academic essay structure: introduction, body paragraphs, evidence, counterargument, and conclusion.",
    classB: "Compare the voice and structure of literary essays and history essays; revise for organization.",
    homework: "Write a 900-1200 word academic essay and revise it at least twice.",
    output: "One polished academic essay.",
    tags: ["academic essay", "counterargument", "style"]
  },
  {
    title: "Application Essay Preparation",
    focus: "Use the student's personal voice while avoiding generic application writing.",
    classA: "Compare UC PIQs and Common App essays: action/impact versus narrative voice and reflection.",
    classB: "Build a personal story bank with ten short life snapshots.",
    homework: "Write two 300-350 word UC PIQ drafts.",
    output: "Personal story bank and two UC PIQ drafts.",
    tags: ["UC PIQ", "Common App", "voice"]
  }
];

const apushPrompts = [
  {
    title: "SAQ: Progressive Era",
    text: "Identify one goal of Progressive reformers, cite one specific reform, and explain how that reform attempted to address a social or political problem."
  },
  {
    title: "SAQ: Reconstruction",
    text: "Describe one change created by Reconstruction, cite one piece of historical evidence, and explain one limitation of that change."
  },
  {
    title: "SAQ: New Deal",
    text: "Explain one way the New Deal changed the relationship between the federal government and citizens."
  },
  {
    title: "DBQ Mini Drill",
    text: "Given seven documents on westward expansion, group them by economic motives, political arguments, and effects on Native peoples. Write a thesis and one body paragraph."
  },
  {
    title: "DBQ Sourcing Drill",
    text: "Choose three documents from a DBQ set. For each, explain how point of view, purpose, audience, or historical situation affects its usefulness."
  },
  {
    title: "LEQ: Causation",
    text: "Evaluate the relative importance of causes of the American Revolution from 1754 to 1776."
  },
  {
    title: "LEQ: Comparison",
    text: "Compare the goals and strategies of two reform movements in the nineteenth century."
  },
  {
    title: "LEQ: CCOT",
    text: "Evaluate the extent to which the role of the federal government changed from 1865 to 1932."
  }
];

const trainingModules = [
  {
    title: "Week 1: Diagnostic Reading and Writing",
    source: "Declaration of Independence, National Archives",
    url: "https://www.archives.gov/founding-docs/declaration-transcript",
    lesson: "This module checks whether the student can identify a central claim, use evidence, and turn reading into a clear argument.",
    reading: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights. To secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.",
    tasks: [
      { label: "Reading Check", prompt: "In 3-4 sentences, explain the central claim of this passage. How does the writer define the source of government power?", rows: 5 },
      { label: "Evidence Note", prompt: "Choose the phrase that best supports the central claim. Explain why that phrase matters.", rows: 5 },
      { label: "Diagnostic Essay", prompt: "Write a 500-700 word essay: To what extent should individual rights limit government power? Use this passage as a starting point and include historical or contemporary examples.", rows: 12 }
    ],
    rubric: ["Clear thesis", "Specific textual evidence", "Meaningful explanation", "Organized paragraphs"]
  },
  {
    title: "Week 2: Thesis Strength",
    source: "Abraham Lincoln, Gettysburg Address, Library of Congress",
    url: "https://www.loc.gov/resource/rbpe.24404500/",
    lesson: "This module trains the student to turn a broad opinion into a precise, arguable thesis with a clear direction.",
    reading: "It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.",
    tasks: [
      { label: "Thesis Upgrade", prompt: "Revise this weak thesis into a strong thesis: Lincoln thinks the Civil War was important.", rows: 4 },
      { label: "Three Versions", prompt: "Write one literary thesis, one historical thesis, and one personal insight thesis. Each thesis must include a judgment and a reason.", rows: 8 },
      { label: "Introduction Practice", prompt: "Choose one thesis and write a 120-160 word introduction paragraph.", rows: 8 }
    ],
    rubric: ["Specific claim", "Arguable judgment", "Clear scope", "Preview of reasoning"]
  },
  {
    title: "Week 3: Paragraph and Evidence Analysis",
    source: "Frederick Douglass, Narrative of the Life of Frederick Douglass, Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/23",
    lesson: "This module trains CEAE paragraphing: Claim, Evidence, Analysis, Extension. The main goal is to explain evidence instead of simply placing it in the paragraph.",
    reading: "I would at times feel that learning to read had been a curse rather than a blessing. It had given me a view of my wretched condition, without the remedy.",
    tasks: [
      { label: "Claim", prompt: "Write a claim about the complexity of Douglass's view of literacy in this passage.", rows: 4 },
      { label: "Analysis", prompt: "Do not summarize the plot. In 4-5 sentences, explain why learning to read feels both like a blessing and a curse.", rows: 6 },
      { label: "CEAE Paragraph", prompt: "Write a 180-220 word analytical paragraph with a claim, short quotation, analysis, and extension.", rows: 9 }
    ],
    rubric: ["Direct claim", "Brief, useful quotation", "More analysis than summary", "Final sentence extends the idea"]
  },
  {
    title: "Week 4: Close Reading of Complex Text",
    source: "Charlotte Perkins Gilman, The Yellow Wallpaper, Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/1952",
    lesson: "This module trains literary reading: narrator, tone, contradiction, and psychological tension. The student practices moving from literal meaning to inference.",
    reading: "John laughs at me, of course, but one expects that in marriage. John is practical in the extreme. He has no patience with faith, an intense horror of superstition, and he scoffs openly at any talk of things not to be felt and seen and put down in figures.",
    tasks: [
      { label: "Tone", prompt: "What is the tone of this passage? Point to at least two words or phrases as evidence.", rows: 5 },
      { label: "Inference", prompt: "Is the narrator's attitude toward John simple or conflicted? Write 5-6 sentences explaining the tension.", rows: 6 },
      { label: "Reading Response", prompt: "Write a 300-word response: How does the narrator's voice reveal a conflict between authority and self-trust?", rows: 10 }
    ],
    rubric: ["Textual detail", "Tone awareness", "Explanation of tension", "More inference than plot summary"]
  },
  {
    title: "Week 5: APUSH SAQ Foundations",
    source: "Original AP-style practice; official released questions are linked below",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module trains ACE: Answer, Cite, Explain. Each SAQ part should stay focused and concise.",
    reading: "SAQ Prompt: Progressive reformers sought to address problems created by industrialization, urbanization, and political corruption in the late nineteenth and early twentieth centuries.",
    tasks: [
      { label: "SAQ A", prompt: "Identify one problem Progressive reformers tried to solve.", rows: 4 },
      { label: "SAQ B", prompt: "Describe one specific reform or law connected to that problem.", rows: 4 },
      { label: "SAQ C", prompt: "Explain how that reform changed the role of government or citizens.", rows: 4 }
    ],
    rubric: ["Direct answer", "Specific historical evidence", "Explanation rather than naming", "Controlled length"]
  },
  {
    title: "Week 6: APUSH SAQ Source Practice",
    source: "Original AP-style practice; use with official released SAQs",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module trains source-based SAQ responses. The student must use the stimulus and then bring in relevant course knowledge.",
    reading: "Stimulus summary: A historian argues that Reconstruction expanded constitutional rights but failed to create lasting equality in daily life.",
    tasks: [
      { label: "SAQ A", prompt: "Identify one constitutional change from Reconstruction that supports the historian's argument.", rows: 4 },
      { label: "SAQ B", prompt: "Describe one example showing the limits of Reconstruction.", rows: 4 },
      { label: "SAQ C", prompt: "Explain one reason Reconstruction's changes faced resistance.", rows: 4 }
    ],
    rubric: ["Uses the stimulus", "Includes outside knowledge", "Explains cause or limitation", "Avoids vague generalizations"]
  },
  {
    title: "Week 7: DBQ Breakdown",
    source: "Original DBQ mini-set; use official released DBQs for full practice",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module focuses on prompt reading, document grouping, thesis, and contextualization before writing a full DBQ.",
    reading: "Mini DBQ Topic: Westward expansion from 1800 to 1890. Document angles: land policy, economic opportunity, Native displacement, sectional conflict, and national identity.",
    tasks: [
      { label: "Grouping", prompt: "Organize the five document angles into 2-3 argument groups. Explain why you grouped them that way.", rows: 6 },
      { label: "Contextualization", prompt: "Write 3-4 sentences of historical context that place westward expansion from 1800 to 1890 into a broader historical setting.", rows: 5 },
      { label: "DBQ Thesis", prompt: "Write a defensible thesis for this prompt: Evaluate the extent to which westward expansion transformed the United States from 1800 to 1890.", rows: 5 }
    ],
    rubric: ["Groups serve an argument", "Context is broader than the prompt", "Thesis makes a degree judgment", "Avoids a list-like answer"]
  },
  {
    title: "Week 8: DBQ Body Paragraph",
    source: "Original DBQ paragraph drill",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module trains document evidence, analysis, and sourcing. The goal is to turn a document into a piece of reasoning.",
    reading: "Document idea: A political cartoon criticizes monopolies during the Gilded Age. The cartoon portrays corporate leaders as oversized figures towering over workers and lawmakers.",
    tasks: [
      { label: "Document Use", prompt: "In 2-3 sentences, explain what argument this document could support.", rows: 5 },
      { label: "Sourcing/HIPP", prompt: "Choose historical situation, intended audience, purpose, or point of view. Explain how that choice affects the document's meaning.", rows: 6 },
      { label: "DBQ Body Paragraph", prompt: "Write one DBQ body paragraph with a topic sentence, document evidence, analysis, sourcing, and outside evidence.", rows: 10 }
    ],
    rubric: ["Uses the document idea", "Includes sourcing", "Adds outside evidence", "Has a clear topic sentence"]
  },
  {
    title: "Week 9: LEQ Practice",
    source: "Original AP-style LEQ prompts",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module trains evidence banking and historical reasoning when no documents are provided.",
    reading: "LEQ Prompt: Evaluate the relative importance of economic causes of the American Revolution from 1754 to 1776.",
    tasks: [
      { label: "Evidence Bank", prompt: "List at least six pieces of evidence and organize them into economic, political, and ideological categories.", rows: 7 },
      { label: "LEQ Thesis", prompt: "Write a thesis that makes a relative importance judgment.", rows: 5 },
      { label: "LEQ Paragraph", prompt: "Write one body paragraph proving the importance of one cause and explaining its relationship to other causes.", rows: 10 }
    ],
    rubric: ["Specific evidence", "Relative importance judgment", "Causation explained", "Avoids chronological summary"]
  },
  {
    title: "Week 10: Timed Writing",
    source: "Original timed writing set",
    url: "https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions",
    lesson: "This module builds planning habits and steadiness under time pressure.",
    reading: "Timed Set: 12-minute SAQ plus 40-minute LEQ. Topic areas: New Deal, Civil Rights Movement, Cold War.",
    tasks: [
      { label: "Timed Plan", prompt: "Before writing, spend five minutes listing your thesis, evidence, and paragraph order. Put your plan here.", rows: 6 },
      { label: "Timed Writing", prompt: "Complete a timed SAQ set or LEQ, then paste the response here.", rows: 14 },
      { label: "Reflection", prompt: "Write 150 words: Which step was hardest under time pressure, and what will you adjust next time?", rows: 6 }
    ],
    rubric: ["Plans before writing", "Hits core scoring points", "Uses time wisely", "Reflection is specific"]
  },
  {
    title: "Week 11: Academic Essay Draft",
    source: "Virginia Woolf, A Room of One's Own, public-domain-compatible study excerpt",
    url: "https://gutenberg.net.au/ebooks02/0200791h.html",
    lesson: "This module transfers reading and argument skills into a 900-1200 word academic essay.",
    reading: "Study idea: A writer argues that intellectual freedom depends not only on talent, but also on material conditions, education, and social permission.",
    tasks: [
      { label: "Essay Question", prompt: "Turn the study idea into an arguable essay question.", rows: 4 },
      { label: "Outline", prompt: "Write an introduction plan, three body paragraph topic sentences, a counterargument, and a conclusion extension.", rows: 10 },
      { label: "Academic Essay Draft", prompt: "Write a 900-1200 word essay draft, or begin with the first 500 words.", rows: 16 }
    ],
    rubric: ["Question has tension", "Paragraphs build on one another", "Counterargument is genuine", "Language is clear"]
  },
  {
    title: "Week 12: Application Essay Preparation",
    source: "UC Personal Insight Questions and Common App prompts",
    url: "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
    lesson: "This module builds a personal story bank. The goal is not a final application essay yet; the goal is specific, honest, reflective material.",
    reading: "Personal writing principle: A strong application essay usually reveals a person through specific action, choice, tension, and reflection rather than listing achievements.",
    tasks: [
      { label: "Story Bank", prompt: "Write ten life snapshots. Each one should include an action, a conflict, a choice, or a change.", rows: 12 },
      { label: "UC PIQ Draft 1", prompt: "Choose one UC PIQ direction and write a 300-350 word draft. Focus on action and impact.", rows: 12 },
      { label: "UC PIQ Draft 2", prompt: "Choose a different direction and write a second 300-350 word draft. Focus on reflection.", rows: 12 }
    ],
    rubric: ["Specific details", "Clear action", "Reflection", "Avoids resume-style listing"]
  }
];

const essayPrompts = [
  {
    title: "Literary Analysis",
    text: "Choose a character who changes over the course of a story. Argue what causes the change and why it matters to the theme."
  },
  {
    title: "History/Social Science Essay",
    text: "To what extent should economic factors be considered the primary driver of social change? Use two historical examples."
  },
  {
    title: "Argumentative Essay",
    text: "Should schools value intellectual risk-taking as much as measurable achievement? Develop a nuanced argument."
  },
  {
    title: "UC PIQ: Academic Interest",
    text: "Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside the classroom."
  },
  {
    title: "UC PIQ: Community",
    text: "What have you done to make your school or your community a better place? Focus on your role, action, and impact."
  },
  {
    title: "Common App Seed",
    text: "Write about a small moment that reveals how you think, care, solve problems, or see the world differently."
  }
];

const rubric = [
  {
    score: "4",
    title: "Strong",
    text: "The thesis is clear and thoughtful; evidence is specific; analysis is developed; organization feels natural; language is accurate and controlled."
  },
  {
    score: "3",
    title: "Proficient",
    text: "The thesis is clear; evidence is present; analysis is mostly effective; organization is understandable; language errors do not block meaning."
  },
  {
    score: "2",
    title: "Developing",
    text: "The argument is present but broad; evidence may be thin or underexplained; paragraphs may feel loose; parts may read like summary."
  },
  {
    score: "1",
    title: "Beginning",
    text: "The thesis is unclear; evidence is missing or vague; logic is hard to follow; language may interfere with meaning."
  }
];

const portfolio = [
  "1 diagnostic essay",
  "6-8 SAQ sets",
  "1 revised DBQ",
  "1 LEQ",
  "1 polished academic essay",
  "2 UC PIQ drafts",
  "1 personal story bank",
  "1 writing growth profile"
];

const state = {
  doneWeeks: JSON.parse(localStorage.getItem("doneWeeks") || "[]"),
  portfolio: JSON.parse(localStorage.getItem("portfolio") || "{}"),
  responses: JSON.parse(localStorage.getItem("responses") || "{}")
};

function save() {
  localStorage.setItem("doneWeeks", JSON.stringify(state.doneWeeks));
  localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
  localStorage.setItem("responses", JSON.stringify(state.responses));
}

function setView(id) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === id));
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.view === id));
  document.getElementById("viewTitle").textContent = document.querySelector(`[data-view="${id}"]`).textContent;
}

function renderWeekSelect() {
  const select = document.getElementById("weekSelect");
  select.innerHTML = weeks.map((week, index) => `<option value="${index}">Week ${index + 1}: ${week.title}</option>`).join("");
}

function renderModuleSelect() {
  const select = document.getElementById("moduleSelect");
  select.innerHTML = trainingModules.map((module, index) => `<option value="${index}">${module.title}</option>`).join("");
}

function renderTrainingDetail(index = 0) {
  const module = trainingModules[index];
  const answers = state.responses[index] || {};
  const completed = module.tasks.filter((_, taskIndex) => (answers[taskIndex] || "").trim().length > 20).length;
  document.getElementById("trainingDetail").innerHTML = `
    <div class="training-layout">
      <div class="task-stack">
        <article class="panel">
          <p class="eyebrow">Training Module ${index + 1}</p>
          <h3>${module.title}</h3>
          <p>${module.lesson}</p>
          <div class="reading-box">
            <strong>Reading / Prompt Material</strong>
            <p>${module.reading}</p>
            <span>Source: ${module.source}</span>
            <br />
            <a class="source-link" href="${module.url}" target="_blank" rel="noreferrer">Open source or official practice page</a>
          </div>
        </article>
        ${module.tasks.map((task, taskIndex) => `
          <article class="task-card">
            <label for="response-${taskIndex}">${task.label}</label>
            <p>${task.prompt}</p>
            <textarea id="response-${taskIndex}" data-task="${taskIndex}" rows="${task.rows}" placeholder="Complete the exercise here. Your work is saved in this browser.">${answers[taskIndex] || ""}</textarea>
          </article>
        `).join("")}
      </div>
      <aside class="task-stack">
        <article class="panel">
          <h3>Student Self-Check</h3>
          <ul class="mini-rubric">
            ${module.rubric.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </article>
        <article class="panel">
          <h3>Parent Review</h3>
          <div class="review-list">
            <div class="review-item"><strong>Completion</strong><span>${completed}/${module.tasks.length} tasks have substantial responses</span></div>
            <div class="review-item"><strong>What to Look For</strong><span>Check thesis and evidence explanation before grammar.</span></div>
            <div class="review-item"><strong>Question</strong><span>Which section would you revise first, and why?</span></div>
          </div>
        </article>
      </aside>
    </div>
  `;
}

function renderWeekDetail(index = 0) {
  const week = weeks[index];
  const done = state.doneWeeks.includes(index);
  document.getElementById("weekDetail").innerHTML = `
    <article class="panel">
      <p class="eyebrow">Week ${index + 1}</p>
      <h3>${week.title}${done ? " · Complete" : ""}</h3>
      <p>${week.focus}</p>
      <div class="lesson-blocks">
        <div class="lesson-block"><h4>Lesson 1</h4><p>${week.classA}</p></div>
        <div class="lesson-block"><h4>Lesson 2</h4><p>${week.classB}</p></div>
        <div class="lesson-block"><h4>Homework</h4><p>${week.homework}</p></div>
        <div class="lesson-block"><h4>Weekly Output</h4><p>${week.output}</p></div>
      </div>
      <div class="tag-row">${week.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderWeekGrid() {
  document.getElementById("weekGrid").innerHTML = weeks.map((week, index) => `
    <article class="week-card ${state.doneWeeks.includes(index) ? "done" : ""}" data-week="${index}">
      <strong>Week ${index + 1}: ${week.title}</strong>
      <p>${week.focus}</p>
    </article>
  `).join("");
}

function renderPrompts() {
  document.getElementById("apushPrompts").innerHTML = apushPrompts.map(prompt => `
    <article class="prompt-card">
      <h4>${prompt.title}</h4>
      <p>${prompt.text}</p>
    </article>
  `).join("");

  document.getElementById("essayPrompts").innerHTML = essayPrompts.map(prompt => `
    <article class="prompt-card">
      <h4>${prompt.title}</h4>
      <p>${prompt.text}</p>
    </article>
  `).join("");
}

function renderRubric() {
  document.getElementById("rubricGrid").innerHTML = rubric.map(item => `
    <article class="rubric-card">
      <div class="score">${item.score}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderPortfolio() {
  document.getElementById("portfolioList").innerHTML = portfolio.map((item, index) => `
    <label class="portfolio-item">
      <input type="checkbox" data-portfolio="${index}" ${state.portfolio[index] ? "checked" : ""} />
      <span>${item}</span>
    </label>
  `).join("");
}

function buildProgressExport() {
  return {
    app: "Grade 11 Writing and APUSH Summer Studio",
    version: 1,
    exportedAt: new Date().toISOString(),
    doneWeeks: state.doneWeeks,
    portfolio: state.portfolio,
    responses: state.responses,
    readableSummary: trainingModules.map((module, moduleIndex) => ({
      module: module.title,
      tasks: module.tasks.map((task, taskIndex) => ({
        task: task.label,
        prompt: task.prompt,
        response: state.responses[moduleIndex]?.[taskIndex] || ""
      }))
    }))
  };
}

function downloadProgress() {
  const data = JSON.stringify(buildProgressExport(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const date = new Date().toISOString().slice(0, 10);
  const link = document.createElement("a");
  link.href = url;
  link.download = `writing-studio-progress-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || data.app !== "Grade 11 Writing and APUSH Summer Studio") {
        throw new Error("This file does not look like a Writing Studio progress file.");
      }
      state.doneWeeks = Array.isArray(data.doneWeeks) ? data.doneWeeks : [];
      state.portfolio = data.portfolio && typeof data.portfolio === "object" ? data.portfolio : {};
      state.responses = data.responses && typeof data.responses === "object" ? data.responses : {};
      save();
      renderWeekDetail(Number(document.getElementById("weekSelect").value));
      renderWeekGrid();
      renderPortfolio();
      renderTrainingDetail(Number(document.getElementById("moduleSelect").value));
      alert("Progress imported successfully.");
    } catch (error) {
      alert(error.message || "Progress import failed.");
    }
  });
  reader.readAsText(file);
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

document.getElementById("weekSelect").addEventListener("change", event => {
  renderWeekDetail(Number(event.target.value));
});

document.getElementById("moduleSelect").addEventListener("change", event => {
  renderTrainingDetail(Number(event.target.value));
});

document.getElementById("trainingDetail").addEventListener("input", event => {
  if (!event.target.matches("[data-task]")) return;
  const moduleIndex = document.getElementById("moduleSelect").value;
  const taskIndex = event.target.dataset.task;
  state.responses[moduleIndex] = state.responses[moduleIndex] || {};
  state.responses[moduleIndex][taskIndex] = event.target.value;
  save();
});

document.getElementById("saveModuleBtn").addEventListener("click", () => {
  const moduleIndex = Number(document.getElementById("moduleSelect").value);
  document.querySelectorAll("#trainingDetail [data-task]").forEach(textarea => {
    state.responses[moduleIndex] = state.responses[moduleIndex] || {};
    state.responses[moduleIndex][textarea.dataset.task] = textarea.value;
  });
  save();
  renderTrainingDetail(moduleIndex);
});

document.getElementById("markWeekBtn").addEventListener("click", () => {
  const index = Number(document.getElementById("weekSelect").value);
  state.doneWeeks = state.doneWeeks.includes(index)
    ? state.doneWeeks.filter(item => item !== index)
    : [...state.doneWeeks, index];
  save();
  renderWeekDetail(index);
  renderWeekGrid();
});

document.getElementById("weekGrid").addEventListener("click", event => {
  const card = event.target.closest(".week-card");
  if (!card) return;
  const index = Number(card.dataset.week);
  document.getElementById("weekSelect").value = String(index);
  renderWeekDetail(index);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("portfolioList").addEventListener("change", event => {
  if (!event.target.matches("[data-portfolio]")) return;
  state.portfolio[event.target.dataset.portfolio] = event.target.checked;
  save();
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

document.getElementById("exportBtn").addEventListener("click", downloadProgress);

document.getElementById("importFile").addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (file) importProgress(file);
  event.target.value = "";
});

document.getElementById("resetBtn").addEventListener("click", () => {
  state.doneWeeks = [];
  state.portfolio = {};
  state.responses = {};
  save();
  renderWeekDetail(Number(document.getElementById("weekSelect").value));
  renderWeekGrid();
  renderPortfolio();
  renderTrainingDetail(Number(document.getElementById("moduleSelect").value));
});

renderWeekSelect();
renderModuleSelect();
renderWeekDetail(0);
renderTrainingDetail(0);
renderWeekGrid();
renderPrompts();
renderRubric();
renderPortfolio();
