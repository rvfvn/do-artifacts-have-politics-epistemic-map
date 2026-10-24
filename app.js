(() => {
  const data = window.MAP_DATA;
  const graphCanvas = document.querySelector("#graph-canvas");
  const graphNodes = document.querySelector("#graph-nodes");
  const graphEdges = document.querySelector("#graph-edges");
  const detailEmpty = document.querySelector("#detail-empty");
  const detailContent = document.querySelector("#detail-content");
  const breadcrumbCurrent = document.querySelector("#breadcrumb-current");
  const breadcrumbHome = document.querySelector("#breadcrumb-home");
  const searchInput = document.querySelector("#map-search");
  const searchResults = document.querySelector("#search-results");

  const sectionById = new Map(data.sections.map(section => [section.id, section]));
  const nodeById = new Map();
  data.sections.forEach(section => section.nodes.forEach(node => nodeById.set(node.id, { node, section })));

  const state = {
    sectionId: null,
    selectedId: "root",
    positions: new Map()
  };

  const overviewPositions = [
    [50, 11], [78, 22], [86, 50], [78, 78],
    [50, 89], [22, 78], [14, 50], [22, 22]
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function makeNode({ id, title, eyebrow, summary, x, y, accent, classes = "", onClick }) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `graph-node ${classes}`.trim();
    button.dataset.nodeId = id;
    button.style.left = `${x}%`;
    button.style.top = `${y}%`;
    button.style.setProperty("--node-accent", accent);
    button.innerHTML = `
      <span class="node-index">${escapeHtml(eyebrow)}</span>
      <span class="node-title">${escapeHtml(title)}</span>
      ${summary ? `<span class="node-summary">${escapeHtml(summary)}</span>` : ""}
    `;
    button.addEventListener("click", onClick);
    graphNodes.append(button);
    state.positions.set(id, { x, y });
    return button;
  }

  function edgePath(from, to, bend = 0) {
    const rect = graphCanvas.getBoundingClientRect();
    const x1 = from.x / 100 * rect.width;
    const y1 = from.y / 100 * rect.height;
    const x2 = to.x / 100 * rect.width;
    const y2 = to.y / 100 * rect.height;
    const middleX = (x1 + x2) / 2 + bend;
    return `M ${x1} ${y1} C ${middleX} ${y1}, ${middleX} ${y2}, ${x2} ${y2}`;
  }

  function addEdge(fromId, toId, classes = "edge-line", bend = 0) {
    const from = state.positions.get(fromId);
    const to = state.positions.get(toId);
    if (!from || !to) return;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", edgePath(from, to, bend));
    path.setAttribute("class", classes);
    path.dataset.from = fromId;
    path.dataset.to = toId;
    graphEdges.append(path);
  }

  function resetGraph() {
    graphNodes.replaceChildren();
    graphEdges.replaceChildren();
    state.positions.clear();
    graphEdges.setAttribute("viewBox", `0 0 ${graphCanvas.clientWidth || 900} ${graphCanvas.clientHeight || 720}`);
  }

  function childrenMap(section) {
    const children = new Map();
    section.nodes.forEach(node => {
      const key = node.parent || "__root__";
      if (!children.has(key)) children.set(key, []);
      children.get(key).push(node);
    });
    return children;
  }

  function treeLayout(section) {
    const children = childrenMap(section);
    const depths = new Map();
    const yPositions = new Map();
    const roots = children.get("__root__") || [];
    const leaves = [];

    function setDepth(item, depth) {
      depths.set(item.id, depth);
      const descendants = children.get(item.id) || [];
      if (!descendants.length) leaves.push(item);
      descendants.forEach(child => setDepth(child, depth + 1));
    }
    roots.forEach(root => setDepth(root, 0));

    const denominator = Math.max(1, leaves.length - 1);
    leaves.forEach((leaf, index) => yPositions.set(leaf.id, leaves.length === 1 ? 50 : 6 + index * 88 / denominator));

    function setParentY(item) {
      const descendants = children.get(item.id) || [];
      if (!descendants.length) return yPositions.get(item.id);
      const values = descendants.map(setParentY);
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      yPositions.set(item.id, average);
      return average;
    }
    roots.forEach(setParentY);

    const maxDepth = Math.max(0, ...depths.values());
    const xForDepth = depth => maxDepth === 0 ? 59 : 35 + depth * (51 / maxDepth);
    const positions = new Map(section.nodes.map(item => [item.id, {
      x: xForDepth(depths.get(item.id)),
      y: yPositions.get(item.id),
      depth: depths.get(item.id)
    }]));

    return { positions, leaves: leaves.length, maxDepth };
  }

  function rootDetail() {
    showDetail({
      title: data.title,
      eyebrow: "System thesis",
      summary: data.centralClaim,
      bullets: [
        "Path 1: chosen designs settle social conflicts and become material order.",
        "Path 2: technical systems require or strongly favor forms of authority.",
        "Lock-in converts an initially flexible choice into apparent necessity.",
        "Democratic scrutiny has the most leverage before adoption and infrastructure."
      ],
      evidence: "Winner's framework asks us to evaluate artifacts as arrangements of access, work, expertise, security, authority, and long-term public order—not solely as useful or efficient objects.",
      accent: "#8ba7c9",
      bridges: data.sections.map(section => ({ label: section.short, sectionId: section.id }))
    }, "root");
  }

  function renderOverview({ preserveDetail = false } = {}) {
    state.sectionId = null;
    graphCanvas.classList.remove("branch-view");
    graphCanvas.style.minHeight = `${Math.max(640, window.innerHeight - 160)}px`;
    breadcrumbCurrent.textContent = "All domains";
    resetGraph();

    makeNode({
      id: "root",
      title: "The Political Life of Artifacts",
      eyebrow: "Root question",
      summary: "design · authority · distribution · lock-in",
      x: 50,
      y: 50,
      accent: "#8ba7c9",
      classes: "root-node",
      onClick: rootDetail
    });

    data.sections.forEach((section, index) => {
      const [x, y] = overviewPositions[index];
      makeNode({
        id: section.id,
        title: section.short,
        eyebrow: `${section.number} / domain`,
        summary: section.title,
        x,
        y,
        accent: section.accent,
        classes: "domain-node",
        onClick: () => openSection(section.id)
      });
    });

    data.sections.forEach(section => addEdge("root", section.id));
    if (!preserveDetail) rootDetail();
    markSelected(state.selectedId);
  }

  function renderSection(section, { selectedId = null, preserveScroll = false } = {}) {
    const priorScroll = window.scrollY;
    state.sectionId = section.id;
    graphCanvas.classList.add("branch-view");
    const layout = treeLayout(section);
    const graphHeight = Math.max(640, window.innerHeight - 160, layout.leaves * 82 + 140);
    graphCanvas.style.minHeight = `${graphHeight}px`;
    breadcrumbCurrent.textContent = section.short;
    resetGraph();

    makeNode({
      id: section.id,
      title: section.short,
      eyebrow: `${section.number} / domain`,
      summary: section.thesis,
      x: 18,
      y: 50,
      accent: section.accent,
      classes: "hub-node",
      onClick: () => showSectionDetail(section)
    });

    section.nodes.forEach(item => {
      const position = layout.positions.get(item.id);
      makeNode({
        id: item.id,
        title: item.title,
        eyebrow: item.eyebrow,
        x: position.x,
        y: position.y,
        accent: section.accent,
        classes: `detail-node depth-${position.depth}`,
        onClick: () => showNodeDetail(item, section)
      });
    });

    section.nodes.forEach((item, index) => {
      addEdge(item.parent || section.id, item.id, `edge-line ${item.parent ? "is-soft" : ""}`, index % 2 ? 10 : -10);
    });

    if (section.special === "sequence") {
      section.sequence.slice(0, -1).forEach((id, index) => addEdge(id, section.sequence[index + 1], "edge-pulse", 54));
    }
    if (section.special === "feedback") {
      const ids = section.nodes.map(item => item.id);
      ids.forEach((id, index) => addEdge(id, ids[(index + 1) % ids.length], "edge-pulse feedback-edge", index === ids.length - 1 ? -90 : 48));
    }

    if (selectedId && nodeById.has(selectedId)) {
      const { node: selected } = nodeById.get(selectedId);
      showNodeDetail(selected, section, false);
    } else {
      showSectionDetail(section, false);
    }
    markSelected(selectedId || section.id);
    if (preserveScroll) window.scrollTo({ top: priorScroll });
  }

  function openSection(sectionId, { scroll = false, selectedId = null } = {}) {
    const section = sectionById.get(sectionId);
    if (!section) return;
    renderSection(section, { selectedId });
    if (scroll) document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function lineageIds(id) {
    const ids = new Set([id]);
    let current = nodeById.get(id)?.node;
    while (current?.parent) {
      ids.add(current.parent);
      current = nodeById.get(current.parent)?.node;
    }
    if (state.sectionId) ids.add(state.sectionId);
    return ids;
  }

  function markSelected(id) {
    state.selectedId = id;
    const lineage = lineageIds(id);
    document.querySelectorAll(".graph-node").forEach(element => {
      element.classList.toggle("is-selected", element.dataset.nodeId === id);
      element.classList.toggle("is-lineage", lineage.has(element.dataset.nodeId) && element.dataset.nodeId !== id);
    });
    document.querySelectorAll(".graph-edges path").forEach(path => {
      const connected = lineage.has(path.dataset.from) && lineage.has(path.dataset.to);
      const adjacent = path.dataset.from === id || path.dataset.to === id;
      path.classList.toggle("is-active", connected || adjacent);
    });
  }

  function argumentRelations(item, section) {
    const relations = [];
    if (item.parent) {
      const parent = nodeById.get(item.parent)?.node;
      if (parent) relations.push({ label: `Up to ${parent.title}`, nodeId: parent.id });
    }
    section.nodes.filter(candidate => candidate.parent === item.id).slice(0, 3).forEach(child => {
      relations.push({ label: `Open ${child.title}`, nodeId: child.id });
    });
    return relations;
  }

  function relatedBridges(itemId, section) {
    const structural = argumentRelations(nodeById.get(itemId)?.node || {}, section);
    const exact = data.crossLinks.flatMap(link => {
      if (link.from === itemId) return [{ label: link.label, nodeId: link.to }];
      if (link.to === itemId) return [{ label: link.label, nodeId: link.from }];
      return [];
    });
    const domains = (section.bridges || []).map(sectionId => ({ label: `Continue to ${sectionById.get(sectionId).short}`, sectionId }));
    return [...structural, ...exact, ...domains].slice(0, 7);
  }

  function sectionTrail(item, section) {
    const parts = [section.short];
    const ancestors = [];
    let current = item;
    while (current?.parent) {
      current = nodeById.get(current.parent)?.node;
      if (current) ancestors.unshift(current.title);
    }
    return [...parts, ...ancestors, item.title].join(" / ");
  }

  function showSectionDetail(section, focus = true) {
    breadcrumbCurrent.textContent = section.short;
    showDetail({
      title: section.title,
      eyebrow: `${section.number} / ${section.short}`,
      summary: section.thesis,
      bullets: section.nodes.filter(item => !item.parent).map(item => item.title),
      evidence: `This domain contains ${section.nodes.length} explorable concepts. Follow its hierarchy to see how Winner connects material form, institutional setting, and political consequence.`,
      accent: section.accent,
      bridges: section.bridges.map(sectionId => ({ label: `Continue to ${sectionById.get(sectionId).short}`, sectionId }))
    }, section.id, focus);
  }

  function showNodeDetail(item, section, focus = true) {
    breadcrumbCurrent.textContent = sectionTrail(item, section);
    showDetail({
      ...item,
      accent: section.accent,
      bridges: relatedBridges(item.id, section)
    }, item.id, focus);
  }

  function showDetail(item, selectedId, focus = true) {
    detailEmpty.hidden = true;
    detailContent.hidden = false;
    detailContent.style.setProperty("--detail-accent", item.accent || "#8ba7c9");
    const bridgeButtons = (item.bridges || []).map(bridge => `
      <button class="bridge-button" type="button"
        ${bridge.sectionId ? `data-bridge-section="${escapeHtml(bridge.sectionId)}"` : ""}
        ${bridge.nodeId ? `data-bridge-node="${escapeHtml(bridge.nodeId)}"` : ""}>
        ${escapeHtml(bridge.label)} <span aria-hidden="true">→</span>
      </button>
    `).join("");

    detailContent.innerHTML = `
      <p class="detail-kicker">${escapeHtml(item.eyebrow || "Study note")}</p>
      <h2 id="detail-title">${escapeHtml(item.title)}</h2>
      <p class="detail-summary">${escapeHtml(item.summary)}</p>
      ${(item.bullets || []).length ? `<ul>${item.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}
      <details open>
        <summary>Why this matters</summary>
        <p>${escapeHtml(item.evidence || "This concept identifies how technical form and political order become connected.")}</p>
      </details>
      ${bridgeButtons ? `<details><summary>Conceptual bridges</summary><div class="bridge-list">${bridgeButtons}</div></details>` : ""}
      <p class="citation">Source: <cite>${escapeHtml(data.source.title)}</cite>, ${escapeHtml(data.source.author)}.</p>
    `;

    detailContent.querySelectorAll("[data-bridge-section]").forEach(button => {
      button.addEventListener("click", () => openSection(button.dataset.bridgeSection));
    });
    detailContent.querySelectorAll("[data-bridge-node]").forEach(button => {
      button.addEventListener("click", () => openNode(button.dataset.bridgeNode));
    });
    markSelected(selectedId);
    if (focus && window.matchMedia("(max-width: 920px)").matches) {
      detailContent.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function openNode(nodeId, { scroll = false } = {}) {
    const record = nodeById.get(nodeId);
    if (!record) return;
    if (state.sectionId === record.section.id) {
      showNodeDetail(record.node, record.section);
    } else {
      openSection(record.section.id, { selectedId: nodeId, scroll });
    }
  }

  function searchIndex() {
    return data.sections.flatMap(section => [
      { type: "section", id: section.id, section, title: section.short, subtitle: section.title, text: `${section.short} ${section.title} ${section.thesis}` },
      ...section.nodes.map(item => ({
        type: "node",
        id: item.id,
        section,
        node: item,
        title: item.title,
        subtitle: section.short,
        text: `${item.title} ${item.eyebrow} ${item.summary} ${(item.bullets || []).join(" ")} ${item.evidence} ${section.short}`
      }))
    ]);
  }

  const searchable = searchIndex();

  function renderSearchResults(query) {
    const clean = query.trim().toLowerCase();
    if (clean.length < 2) {
      searchResults.hidden = true;
      searchResults.replaceChildren();
      return;
    }
    const terms = clean.split(/\s+/).filter(Boolean);
    const matches = searchable
      .map(item => ({ item, score: terms.reduce((score, term) => score + (item.title.toLowerCase().includes(term) ? 4 : item.text.toLowerCase().includes(term) ? 1 : 0), 0) }))
      .filter(result => result.score >= terms.length)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    searchResults.innerHTML = matches.length
      ? matches.map(({ item }) => `<button class="search-result" type="button" role="option" data-result-type="${item.type}" data-result-id="${item.id}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span></button>`).join("")
      : `<p class="search-none">No concept matches “${escapeHtml(query)}”. Try authority, exclusion, lock-in, nuclear, or design.</p>`;
    searchResults.hidden = false;
    searchResults.querySelectorAll(".search-result").forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.resultType === "section") openSection(button.dataset.resultId);
        else openNode(button.dataset.resultId);
        searchResults.hidden = true;
        searchInput.value = "";
      });
    });
  }

  breadcrumbHome.addEventListener("click", () => renderOverview());
  searchInput.addEventListener("input", event => renderSearchResults(event.target.value));
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      searchResults.hidden = true;
      searchInput.blur();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      searchResults.querySelector(".search-result")?.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".search-wrap")) searchResults.hidden = true;
  });

  let resizeTimer;
  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (state.sectionId) renderSection(sectionById.get(state.sectionId), { selectedId: state.selectedId, preserveScroll: true });
      else renderOverview({ preserveDetail: true });
    }, 140);
  });
  resizeObserver.observe(graphCanvas);

  renderOverview();
})();
