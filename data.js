(() => {
  const node = (id, parent, title, eyebrow, summary, bullets, evidence) => ({
    id, parent, title, eyebrow, summary, bullets, evidence
  });

  window.MAP_DATA = {
    title: "Do Artifacts Have Politics?",
    subtitle: "How technical arrangements become arrangements of power",
    centralClaim: "Artifacts are not neutral tools. Their material design, operational requirements, and institutional setting can embody, distribute, require, and stabilize particular forms of power and social order.",
    source: {
      title: "Do Artifacts Have Politics?",
      author: "Langdon Winner"
    },
    crossLinks: [
      { from: "moses-exclusion", to: "rel-excludes", label: "physical design excludes" },
      { from: "mccormick-purpose", to: "intention-consequence", label: "political intention becomes machinery" },
      { from: "tomato-distribution", to: "rel-benefits", label: "benefits are distributed unevenly" },
      { from: "tomato-labor", to: "rel-displaces", label: "mechanization displaces labor" },
      { from: "first-flexibility", to: "decision-before", label: "choice is widest before adoption" },
      { from: "difficult-reversal", to: "rel-reversal", label: "infrastructure narrows later choice" },
      { from: "strict-definition", to: "rel-requires", label: "strong version claims necessity" },
      { from: "compatibility-definition", to: "rel-compatible", label: "weaker version claims affinity" },
      { from: "nuclear-security", to: "technical-necessity", label: "security becomes political justification" },
      { from: "renewable-context", to: "rel-context", label: "institutions mediate technical potential" },
      { from: "loop-naturalization", to: "rel-justified", label: "politics comes to look natural" },
      { from: "loop-authority", to: "concentrated-authority", label: "authority reinforces the system" },
      { from: "final-answer", to: "decision-before", label: "democratic debate must arrive early" }
    ],
    sections: [
      {
        id: "question",
        number: "01",
        short: "Central question",
        title: "Can an artifact contain a politics?",
        thesis: "Winner rejects the idea that technologies become political only when people use them well or badly. Political qualities can be present in design and in the forms of authority a system needs or favors.",
        accent: "#8ba7c9",
        bridges: ["path1", "path2", "distinctions"],
        nodes: [
          node("political-quality", null, "Machines can embody power", "Opening claim", "Machines, structures, and technical systems can embody particular forms of power and authority.", ["Politics can be built into arrangements, not merely added through policy.", "Material form can organize access, conduct, and obedience before any individual use."], "The question is not whether every object has a partisan position. It is whether technical arrangements help establish durable patterns of social order."),
          node("central-answer", null, "Two pathways to political qualities", "Central answer", "Technologies become political through chosen designs or through structural compatibility with particular forms of authority.", ["Path 1: a flexible artifact is arranged to settle a political issue.", "Path 2: adopting a system brings requirements or affinities for a kind of governance."], "Winner's framework separates two claims that are often blurred together: politics in a design choice and politics in the operating character of a whole technical system."),
          node("design-arrangement", "central-answer", "Politics through design and arrangement", "Path 1 preview", "Specific dimensions, layouts, costs, access rules, or technical features can settle a social conflict in material form.", ["The artifact could have been configured differently.", "Once built, the chosen arrangement persists beyond the original dispute."], "Low bridges, factory machinery, and agricultural equipment show how design can act like legislation."),
          node("authority-compatibility", "central-answer", "Politics through authority requirements", "Path 2 preview", "Some technical systems require or strongly favor centralized, hierarchical, decentralized, or otherwise distinctive political relationships.", ["The strongest claim is strict operational requirement.", "The weaker claim is powerful structural compatibility."], "Here the primary political decision may be whether to adopt the system at all, not simply how to adjust its design.")
        ]
      },
      {
        id: "path1",
        number: "02",
        short: "Path 1 · social order",
        title: "Design choices settle political issues",
        thesis: "Path 1 begins with technical flexibility. A chosen design then distributes access, labor, advantage, and authority before becoming fixed in equipment, investment, routines, and habits.",
        accent: "#78b39f",
        bridges: ["decisions", "relationships", "feedback"],
        nodes: [
          node("design-settles", null, "Design choices settle political issues", "Path 1A", "A technical arrangement can resolve a social conflict by making one pattern of access or authority materially easier than another.", ["Consequences can precede the artifact's professed use.", "The design functions as a durable allocation of opportunity and constraint."], "Winner's cases move from deliberate exclusion to labor conflict and then to systemic institutional bias."),
          node("moses", "design-settles", "Robert Moses's low overpasses", "Infrastructure", "Winner presents unusually low Long Island parkway bridges as a design that restricted bus access and therefore restricted who could reach public amenities.", ["The road still carried automobiles efficiently.", "Its dimensions simultaneously selected which travelers could participate."], "The case demonstrates how an ordinary engineering specification can operate as social legislation."),
          node("moses-clearance", "moses", "Clearance built remarkably low", "Design", "Some overpasses were described as roughly nine feet high—adequate for cars but too low for standard buses.", ["Clearance is a material parameter.", "The political effect did not depend on a sign announcing exclusion."], "Winner uses the clearance itself to show that consequences can be embedded in physical form."),
          node("moses-exclusion", "moses", "Buses kept off the parkways", "Mechanism", "The height restriction prevented public buses from using routes available to private automobiles.", ["Automobile owners retained mobility.", "Bus-dependent residents faced a physical barrier rather than a formally stated prohibition."], "The bridge performed exclusion continuously, without repeated administrative enforcement."),
          node("moses-impact", "moses", "Access to Jones Beach narrowed", "Distribution", "The arrangement disproportionately burdened poor residents and racial minorities who depended on public transportation.", ["A public amenity was not equally reachable.", "Infrastructure converted social prejudice into a durable geography of access."], "Winner's analytical point is that design distributes practical citizenship: who can move, arrive, and enjoy supposedly public goods."),
          node("mccormick", "design-settles", "Cyrus McCormick's molding machines", "Industrial machinery", "Pneumatic molding machines were introduced during a labor conflict, changing who possessed skill and bargaining power on the factory floor.", ["The machinery was expensive and largely untested.", "Its significance cannot be understood through efficiency alone."], "The case makes political intention unusually visible because the technical change was bound to an active struggle with organized labor."),
          node("mccormick-adoption", "mccormick", "Pneumatic machines enter the foundry", "Adoption", "McCormick committed major capital to machinery that allowed less-skilled workers to perform molding work.", ["Capital equipment reorganized the labor process.", "Technical substitution altered the dependence of management on skilled molders."], "Adoption itself became an intervention in the balance of shop-floor power."),
          node("mccormick-context", "mccormick", "A battle with the molders' union", "Conflict", "The machines appeared amid a direct conflict with the National Union of Iron Molders.", ["The surrounding labor struggle explains the choice.", "A machine cannot be interpreted apart from the institution and conflict into which it enters."], "Context reveals a political purpose concealed by the language of modernization."),
          node("mccormick-purpose", "mccormick", "Technical failure, political success", "Purpose", "The machines reportedly produced inferior castings at higher cost, yet helped remove skilled union workers and weaken labor organization.", ["They were later discarded.", "Their failure as production tools did not erase their success as instruments of authority."], "The case sharply separates technical efficiency from political effectiveness."),
          node("tomato", "design-settles", "The mechanical tomato harvester", "Agricultural system", "The harvester joined machinery, crop breeding, public research, capital requirements, and labor displacement into a single sociotechnical order.", ["The machine did not merely replace a hand tool.", "It reorganized the crop, the farm, the labor force, and the research agenda."], "Winner uses this case to show political effects without requiring a secret plot by one designer."),
          node("tomato-innovation", "tomato", "Single-pass mechanical harvesting", "Innovation", "The machine harvested tomatoes in one pass and later incorporated electronic sorting.", ["Speed and lower per-ton harvesting costs were real technical gains.", "The relevant question is how those gains and their costs were distributed."], "Efficiency is evidence, but it is not a complete political evaluation."),
          node("tomato-crop", "tomato", "The tomato was redesigned", "Co-design", "Agricultural scientists bred harder, sturdier, and less flavorful tomatoes able to survive mechanical handling.", ["The organism adapted to the machine.", "Consumer qualities were subordinated to the requirements of automated production."], "The boundary of the artifact expands: machinery and crop variety form one operating arrangement."),
          node("tomato-distribution", "tomato", "Advantages flowed to large growers", "Economic distribution", "High purchase costs and economies of scale favored large agricultural producers while the number of tomato growers sharply declined.", ["Productivity gains were not socially neutral.", "Scale requirements concentrated ownership and economic advantage."], "The artifact embodied an agricultural order that rewarded actors already able to finance large machinery."),
          node("tomato-labor", "tomato", "Thousands of workers displaced", "Labor impact", "Mechanical harvesting removed a vast amount of hand-picking labor, displacing tens of thousands of farmworkers in Winner's account.", ["Lower labor costs were benefits to owners and losses to workers.", "The same outcome appears differently from different social positions."], "Political analysis asks who bears the cost hidden inside an efficiency claim."),
          node("tomato-institution", "tomato", "Public research favored agribusiness", "Institution", "Publicly supported agricultural research prioritized machines and crop varieties suited to large-scale production.", ["Institutional priorities helped shape which innovations existed.", "Systemic bias does not require a conscious conspiracy by every participant."], "Research agendas, funding, and technical design reinforced one another in favor of powerful agricultural interests."),
          node("lock-in", null, "Technological lock-in and fixation", "Path 1B", "A political choice can begin as one option among many and end as an apparently unavoidable feature of material and institutional life.", ["Flexibility is highest at introduction.", "Commitment accumulates through equipment, money, routines, and expectations."], "Path 1 is temporal: what is easily contestable before construction becomes costly and difficult to reverse afterward."),
          node("first-flexibility", "lock-in", "Initial flexibility", "Decision window", "The widest latitude of choice exists when a system is first proposed and alternative designs remain feasible.", ["Dimensions, access rules, scale, and operating arrangements are still negotiable.", "Democratic scrutiny has its greatest leverage here."], "Early technical choices deserve political attention precisely because they have not yet hardened into necessity."),
          node("material-equipment", "lock-in", "Choices fixed in material equipment", "Material fixation", "Once constructed, a political arrangement persists in concrete, steel, machinery, or code.", ["The artifact repeatedly enforces the selected arrangement.", "Later users inherit the decision rather than confronting an open choice."], "Material durability gives past political choices power over future conduct."),
          node("capital-infrastructure", "lock-in", "Capital and infrastructure accumulate", "Investment", "Large investments create financial, legal, and organizational incentives to preserve the selected technical path.", ["Replacement becomes expensive.", "Supporting networks grow around the original commitment."], "Sunk costs convert a revisable decision into an entrenched system."),
          node("routines-habits", "lock-in", "Routines and habits adapt", "Institutional adaptation", "Organizations train workers, write rules, build schedules, and normalize expectations around the technology.", ["Institutions begin fitting themselves to the artifact.", "The arrangement comes to feel ordinary rather than chosen."], "Social adaptation is part of lock-in, not merely a reaction outside the technology."),
          node("difficult-reversal", "lock-in", "The original choice becomes difficult to reverse", "Consequence", "After widespread adoption, changing direction threatens investments, routines, and identities attached to the system.", ["Objections are recast as impractical or antitechnological.", "A once-flexible decision now appears technically inevitable."], "Lock-in is the passage from political possibility to apparent necessity.")
        ]
      },
      {
        id: "path2",
        number: "03",
        short: "Path 2 · inherent politics",
        title: "Technologies that require or favor authority",
        thesis: "Path 2 asks whether a technical system's operating properties require a particular organization of authority or make one political arrangement far more compatible than its alternatives.",
        accent: "#9a91c7",
        bridges: ["distinctions", "decisions", "relationships"],
        nodes: [
          node("strong-version", null, "Strong version", "Strict requirement", "Some systems practically require a specific organization of command in order to operate at all.", ["The authority claim arises from operational coordination.", "Adoption carries the authority structure with it."], "This is Winner's strongest and most controversial form of inherent politics."),
          node("strict-definition", "strong-version", "Technology requires an authority structure", "Definition", "A strict requirement means the system cannot function safely or effectively without a particular pattern of command and obedience.", ["This is stronger than saying a hierarchy is merely convenient.", "The relevant political choice may be whether the system should exist."], "The word “requires” must be reserved for claims of practical necessity, not loose association."),
          node("engels-authority", "strong-version", "Engels and the authority of industry", "Industry", "Engels argued that factory machinery and coordinated production impose timing and discipline on workers regardless of the owners' ideology.", ["Individual wills are subordinated to the production process.", "Material coordination becomes an argument for workplace authority."], "Winner uses Engels to show that even a critic of domination could defend authority as technically unavoidable."),
          node("ship-command", "strong-version", "The ship at sea", "Maritime example", "A ship in dangerous conditions appears to require unified, immediate command rather than deliberation over every maneuver.", ["Coordination is time-sensitive.", "The captain becomes the emblem of technically mandated authority."], "The example tests whether democracy can be suspended in specific operational settings without becoming irrelevant everywhere."),
          node("large-systems", "strong-version", "Large systems and managerial hierarchy", "Administration", "Railroads, communication networks, and other large systems have been interpreted as demanding centralized administration and layered management.", ["Geographic scale increases coordination demands.", "Technical throughput can privilege formal hierarchy."], "The analytical challenge is deciding whether hierarchy is genuinely required or historically selected and defended."),
          node("weaker-version", null, "Weaker version", "Strong compatibility", "Other technologies do not absolutely require one regime but strongly align with and reinforce particular institutional forms.", ["Compatibility is a tendency, not a logical inevitability.", "Material properties still make some political arrangements easier to sustain than others."], "This version preserves attention to technical structure without claiming that artifacts mechanically determine society."),
          node("compatibility-definition", "weaker-version", "Strongly compatible with specific politics", "Definition", "A technology can favor centralized or decentralized authority even when alternative arrangements remain conceivable.", ["Compatibility can be powerful without being absolute.", "Institutional context still matters."], "The weaker version describes structural affinity: the system and a form of governance stabilize one another."),
          node("nuclear", "weaker-version", "Nuclear power and plutonium", "Centralizing affinity", "Winner treats plutonium-based nuclear systems as strongly compatible with centralized expertise, security institutions, surveillance, and concentrated authority.", ["Risk management is inseparable from governance.", "The fuel cycle creates political demands beyond electricity production."], "Choosing the energy system means choosing an enduring security and administrative apparatus."),
          node("nuclear-expertise", "nuclear", "Centralized technical expertise", "Expertise", "Complex operation and risk concentrate knowledge in specialized institutions with limited public accessibility.", ["Technical specialists gain decision authority.", "Citizens become dependent on expert assurances."], "Expertise is necessary, but its concentration changes who can participate meaningfully in governance."),
          node("nuclear-security", "nuclear", "Extraordinary security requirements", "Security", "Preventing theft, sabotage, proliferation, and contamination generates extensive protective requirements.", ["Security becomes continuous rather than exceptional.", "The system's hazards justify a permanent apparatus of control."], "Political restrictions are defended as consequences of operating the technology safely."),
          node("plutonium", "nuclear", "Plutonium management", "Material hazard", "Plutonium's toxicity and weapons potential create long-lived problems of custody, transport, storage, and monitoring.", ["The danger persists across generations.", "Material properties constrain institutional possibilities."], "This is the material basis for Winner's compatibility claim, not a generalized fear of technology."),
          node("surveillance", "nuclear", "Surveillance and restrictions", "Civil liberties", "Background checks, monitoring, wiretapping, informants, and emergency powers can be presented as necessary safeguards.", ["Security reaches beyond the plant itself.", "Protected liberties become conditional on system requirements."], "Winner's concern is that technical risk can make extraordinary political control appear self-justifying."),
          node("concentrated-authority", "nuclear", "Concentrated administrative authority", "Governance", "Responsibility for security and continuity accumulates in executive agencies and centralized management.", ["Checks on authority may weaken under emergency reasoning.", "Centralization then reinforces continued dependence on the technical system."], "Technology and authority form a mutually stabilizing arrangement."),
          node("renewable", "weaker-version", "Renewable and solar systems", "Decentralizing affinity", "Dispersed energy sources can be more compatible with local control, community self-reliance, and plural forms of organization.", ["Generation need not be concentrated in a few massive sites.", "Physical dispersion opens political possibilities unavailable to a centralized fuel cycle."], "Winner presents a compatibility, not a guarantee of democratic outcomes."),
          node("decentralized-potential", "renewable", "Potential for decentralization and local control", "Political potential", "Small-scale, distributed generation can allow towns, households, and communities to exercise greater control over energy provision.", ["Authority can move closer to users.", "Dependence on centralized administrators can be reduced."], "The hardware creates an opening for democratic arrangements but does not build the institutions by itself."),
          node("renewable-context", "weaker-version", "Institutions can redirect the outcome", "Winner's caveat", "A nominally decentralized technology can still be captured by centralized utilities, ownership structures, and access rules.", ["Hardware and institutions must be analyzed together.", "A democratic technical potential can be organized undemocratically."], "Winner rejects both technological determinism and the claim that material design is politically irrelevant.")
        ]
      },
      {
        id: "distinctions",
        number: "04",
        short: "Analytical distinctions",
        title: "How to analyze without simplifying",
        thesis: "Winner's framework depends on distinctions that separate kinds of causal and political claims. They keep analysis from treating every consequence as intentional or every technical constraint as destiny.",
        accent: "#80a8b7",
        bridges: ["path1", "path2", "relationships"],
        nodes: [
          node("intention-consequence", null, "Intention from consequence", "Distinction", "A political effect may be deliberately planned, but political analysis does not require proof of a conspiracy.", ["Moses and McCormick illustrate alleged or explicit intention.", "The tomato harvester illustrates structural consequences emerging from institutional priorities."], "Ask what the arrangement does and how it was produced without assuming every participant shared one motive."),
          node("use-design", null, "Use from physical design", "Distinction", "An artifact's politics may arise before anyone chooses a good or bad use because dimensions and architecture already organize possible action.", ["A low bridge excludes by existing.", "Use-based analysis alone misses constraints built into form."], "Political evaluation must examine what the design permits, obstructs, and normalizes."),
          node("purpose-effect", null, "Purpose from political effect", "Distinction", "A device can be designed for a stated technical purpose while producing wider political effects that exceed that purpose.", ["Harvesting tomatoes is a function.", "Consolidating growers and displacing workers are distributive consequences."], "Nominal purpose does not exhaust an artifact's political meaning."),
          node("requirement-compatibility", null, "Strict requirement from strong compatibility", "Distinction", "A technology may mandate an authority structure, or it may merely make that structure unusually stable and attractive.", ["Requires is the stronger claim.", "Compatible with leaves greater room for institutional variation."], "Confusing the two makes Winner's argument sound more deterministic than it is."),
          node("technical-necessity", null, "Technical necessity from political choice", "Distinction", "Political restrictions are often presented as unavoidable technical requirements after a system has already been adopted.", ["Operational claims may be genuine and still politically consequential.", "The earlier adoption decision must not disappear from view."], "Ask which necessities arise from nature and which arise because society selected a particular system."),
          node("flexibility-lockin", null, "Initial flexibility from later lock-in", "Distinction", "A choice that was open during design can look unavoidable after investment, infrastructure, and habit accumulate.", ["The timing of analysis changes what alternatives are visible.", "Late-stage necessity may be the product of early-stage politics."], "Historical reconstruction reopens the moment when the path was not yet fixed."),
          node("artifact-context", null, "Artifact from social context", "Distinction", "Material properties and institutional context must be analyzed together rather than treating either one as the sole cause.", ["Artifacts are not blank slates.", "Artifacts also do not operate outside ownership, law, culture, and organizations."], "Winner's strongest analytical position is neither crude determinism nor pure social construction, but attention to their interaction.")
        ]
      },
      {
        id: "decisions",
        number: "05",
        short: "Political decision points",
        title: "Where democratic choice still has leverage",
        thesis: "Political freedom is greatest before adoption and during early design. It contracts as investment, infrastructure, institutional adaptation, and claims of necessity accumulate.",
        accent: "#d1a45f",
        bridges: ["path1", "path2", "synthesis"],
        special: "sequence",
        sequence: ["decision-before", "decision-design", "decision-investment", "decision-adaptation", "decision-necessity", "decision-distribution"],
        nodes: [
          node("decision-before", null, "Before a technology is adopted", "Decision 1", "The most basic political choice is whether society should accept the technical system at all.", ["This is crucial for systems with intractable authority requirements.", "Alternatives are still genuinely available."], "A yes-or-no adoption decision can be as politically important as formal legislation."),
          node("decision-design", null, "While design remains flexible", "Decision 2", "Dimensions, scale, access, defaults, and operating rules can still be contested and redesigned.", ["Path 1 politics is most visible here.", "Public values can be translated into technical requirements."], "Design review is political deliberation when design allocates power and access."),
          node("decision-investment", null, "As infrastructure locks choices in", "Decision 3", "Capital spending, construction, standards, and supporting networks begin narrowing the practical alternatives.", ["Changing course becomes expensive.", "Organizations acquire a stake in continuity."], "This is the threshold between a revisable proposal and an entrenched material commitment."),
          node("decision-adaptation", null, "As institutions adapt", "Decision 4", "Rules, jobs, training, and administrative structures are reorganized around the new system.", ["The institution begins serving the technology's continued operation.", "Social life is adjusted to technical form."], "Institutional adaptation can silently transform an artifact into a governing framework."),
          node("decision-necessity", null, "When requirements justify authority", "Decision 5", "Security, continuity, efficiency, or stability are invoked to defend hierarchy and restrictions.", ["Technical arguments can eclipse moral arguments.", "Critics may be dismissed as impractical or antitechnological."], "Democratic analysis must ask whether the necessity is inherent or inherited from an earlier political choice."),
          node("decision-distribution", null, "When benefits and costs are evaluated", "Decision 6", "A complete assessment identifies who receives efficiency, access, profit, safety, risk, displacement, or surveillance.", ["Aggregate benefit can hide unequal distribution.", "Different groups encounter the same artifact differently."], "Political judgment concerns distribution, not merely whether the technology works.")
        ]
      },
      {
        id: "relationships",
        number: "06",
        short: "Required relationships",
        title: "The vocabulary of technological politics",
        thesis: "These verbs turn vague claims that a technology is political into testable statements about design, authority, distribution, persistence, and context.",
        accent: "#b48aa8",
        bridges: ["distinctions", "feedback", "synthesis"],
        nodes: [
          node("rel-embodies", null, "embodies", "Relation", "The artifact gives a social arrangement durable material form.", ["Use when power is expressed in architecture, scale, or layout.", "Example: an exclusionary access pattern embodied in infrastructure."], "This verb connects social order to the artifact's concrete arrangement."),
          node("rel-requires", null, "requires", "Relation", "The system practically cannot operate without a specified authority relationship.", ["Reserve for the strong Path 2 claim.", "It demands stronger evidence than convenience or historical habit."], "Requires identifies a claimed technical mandate."),
          node("rel-compatible", null, "is compatible with", "Relation", "The system strongly favors an arrangement without making it logically unavoidable.", ["Use for the weaker Path 2 claim.", "Institutions can strengthen, redirect, or resist the affinity."], "Compatibility preserves both structural tendency and political contingency."),
          node("rel-distributes", null, "distributes authority to", "Relation", "The arrangement relocates decision power among owners, experts, administrators, workers, and publics.", ["Ask who can decide and who must comply.", "Authority can move toward or away from affected communities."], "Technology changes governance by changing who possesses effective control."),
          node("rel-excludes", null, "excludes", "Relation", "A design prevents or burdens participation by particular people or groups.", ["Exclusion may be physical, financial, informational, or administrative.", "It need not be written as a formal ban."], "This relation makes access a central political property of design."),
          node("rel-benefits", null, "benefits", "Relation", "Productivity, convenience, mobility, profit, or security flow disproportionately toward particular actors.", ["Benefits must be identified by recipient.", "An aggregate gain may coexist with concentrated advantage."], "Political analysis follows gains to the groups positioned to capture them."),
          node("rel-displaces", null, "displaces", "Relation", "The artifact removes workers, practices, communities, or alternatives from an established system.", ["Displacement is a social cost, not an accidental footnote.", "It can also weaken the political power attached to a skill or role."], "Mechanization often reorganizes authority by reorganizing who is needed."),
          node("rel-locks", null, "locks in", "Relation", "A technical commitment makes one future path easier and competing paths progressively harder.", ["Infrastructure and investment create persistence.", "Institutions and habits deepen the commitment."], "Lock-in connects an early design decision to long-term political order."),
          node("rel-justified", null, "appears justified by", "Relation", "Authority or restriction is defended through the apparent demands of the technical system.", ["Necessity can be real, exaggerated, or produced by adoption itself.", "The relation asks how legitimacy is constructed."], "Technical language can naturalize a political settlement."),
          node("rel-context", null, "depends on context", "Relation", "The artifact's consequences vary with ownership, law, culture, institutions, and surrounding infrastructure.", ["Context prevents simplistic determinism.", "Material properties still constrain which contexts are plausible."], "The same hardware can support different outcomes without becoming politically blank."),
          node("rel-reversal", null, "makes difficult to reverse", "Relation", "Material and social commitments raise the cost of returning to an earlier choice or choosing another path.", ["The constraint grows over time.", "Reversal can threaten investments and routines."], "Irreversibility is one of the most important political properties of infrastructure."),
          node("rel-transforms", null, "transforms into technical necessity", "Relation", "A chosen political arrangement becomes redescribed as an unavoidable requirement of system operation.", ["The history of choice disappears.", "Governance becomes framed as engineering."], "This transformation explains why democratic debate must precede lock-in.")
        ]
      },
      {
        id: "feedback",
        number: "07",
        short: "Feedback loops",
        title: "How technical politics reinforces itself",
        thesis: "Artifacts do not merely preserve an initial decision. They can generate material, administrative, and economic feedback that makes the selected order increasingly powerful and apparently natural.",
        accent: "#c47c72",
        bridges: ["path1", "path2", "relationships"],
        special: "feedback",
        nodes: [
          node("loop-naturalization", null, "Choice → design → infrastructure → nature", "Naturalization loop", "A political choice shapes design; design becomes infrastructure; infrastructure makes the original choice look like an ordinary fact of the world.", ["The decision disappears into the landscape.", "Later generations encounter an inherited constraint rather than an open debate."], "This loop explains how material durability can depoliticize the very order it enforces."),
          node("loop-authority", null, "Technology → security → authority → entrenchment", "Authority loop", "A centralized or hazardous technology creates administrative requirements that justify stronger centralized authority, which then protects continued reliance on the technology.", ["The governing apparatus and the system validate one another.", "Emergency reasoning can become permanent."], "Nuclear security is Winner's clearest illustration of a mutually reinforcing technical and political system."),
          node("loop-advantage", null, "Benefit → influence → adoption → greater benefit", "Economic loop", "Powerful groups capture a technology's gains, use their greater resources to support continued adoption, and receive still more advantage as the system expands.", ["Institutional research can follow the winners' priorities.", "Alternatives serving weaker groups receive less support."], "The tomato harvester shows how technical development and economic concentration can compound over time.")
        ]
      },
      {
        id: "synthesis",
        number: "08",
        short: "Conclusion & synthesis",
        title: "Democracy must arrive before necessity",
        thesis: "The political evaluation of technology belongs at the beginning of design and adoption, while alternatives remain visible—not after material and institutional commitments have made one social order appear inevitable.",
        accent: "#a9ab8c",
        bridges: ["question", "decisions", "feedback"],
        nodes: [
          node("overall-argument", null, "Artifacts are not neutral tools", "Overall argument", "Material design and structural arrangement can embody, require, and reinforce power, authority, privilege, and exclusion.", ["Efficiency and utility are incomplete criteria.", "Technical order is often also social order."], "Winner asks political theory to take things seriously: bridges, machines, energy systems, and infrastructures participate in governance."),
          node("category-difference", null, "Where the two paths differ", "Key distinction", "Path 1 locates politics in a selected design among alternatives; Path 2 locates politics in a system's strict requirements or strong structural affinities.", ["Path 1 emphasizes configuration.", "Path 2 emphasizes adoption and operational character."], "Both paths reject neutrality, but they make different causal claims and require different evidence."),
          node("unresolved-tension", null, "The unresolved boundary", "Tension", "It is often disputed whether an authority structure is technically mandated, merely compatible, or historically convenient.", ["Overstatement risks technological determinism.", "Understatement can ignore genuine material constraints."], "The boundary between flexible design and inherent politics is itself a field of political argument."),
          node("three-questions", null, "Three questions for any technology", "Study framework", "Evaluate distribution, authority, and reversibility before accepting claims that a system is merely efficient or inevitable.", ["Who benefits, and who bears the costs?", "What authority does the system require or encourage?", "Can the choice be reversed if it concentrates power unjustly?"], "These questions convert Winner's theory into a practical method for examining new technical systems."),
          node("final-answer", null, "Debate before technological lock-in", "Final answer", "Democratic debate should occur before adoption and while design remains flexible, not after infrastructure and technical imperatives have fixed social arrangements in place.", ["Treat adoption like a political founding.", "Make alternatives and affected groups visible early.", "Do not allow technical necessity to erase the history of choice."], "Winner's deepest warning is temporal: politics delayed until after lock-in is politics with much of its effective freedom already lost.")
        ]
      }
    ]
  };
})();
