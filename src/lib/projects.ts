export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techTags: string[];
  github: string;
  liveUrl?: string;
  image?: string;
  metric?: { label: string; value: string };
}

export const projects: Project[] = [
  {
    id: "stroke-lesion-location",
    index: "01",
    title: "Stroke Lesion Location and Outcome",
    tagline: "Does where a stroke hits the brain predict disability at discharge?",
    description:
      "A study of whether stroke lesion location predicts disability at hospital discharge beyond age, NIHSS severity and lesion volume. Uses 620 patients from the open Stroke Outcome Optimization Project dataset, registers each lesion mask to standard brain atlases, and compares clinical only models against models that add lesion location features.",
    highlights: [
      "Adding corticospinal tract damage to clinical factors lifts AUROC from 0.80 to 0.83 in nested cross validation",
      "Location alone (0.78) does not beat age and severity, so location adds signal on top of clinical factors, not instead of them",
      "Lesion masks registered to Harvard Oxford and JHU white matter atlases, with registration run on Modal",
      "Interactive app that explains the findings in plain language for a non specialist reader",
    ],
    techTags: ["Python", "Neuroimaging", "Nilearn", "Machine Learning", "Stroke"],
    github: "https://github.com/aditi1421/Stroke-lesion-location",
    metric: { label: "AUROC gain", value: "+0.032" },
  },
  {
    id: "llm-wiki",
    index: "02",
    title: "LLM Wiki — AI Safety",
    tagline: "Living research wiki built by an LLM, on AI safety",
    description:
      "A personal research wiki on AI safety built using Andrej Karpathy's 'LLM Wiki' pattern. Claude Code incrementally reads papers, summarizes, cross-references, and maintains a structured, interlinked knowledge base with Concept, Entity, Source, Debate, Synthesis, and Map pages.",
    highlights: [
      "Covers Intelligence Curse, Gradual Disempowerment, Compute-Centric Takeoff",
      "Obsidian-compatible markdown with wikilinks for cross-referencing",
      "Auto-generated concept maps and debate synthesis pages",
      "Continuously updated by Claude Code as new papers are read",
    ],
    techTags: ["TypeScript", "Next.js", "AI Safety", "Claude Code"],
    github: "https://github.com/aditi1421/LLM-wiki-AI-Safety",
  },
  {
    id: "ai-safety",
    index: "03",
    title: "AI Moral Resilience Tester",
    tagline: "Stress-testing AI alignment under adversarial pressure",
    description:
      "A framework that stress-tests an AI's moral resilience under adversarial conditions. Presents 15 ethical dilemmas, applies 10 escalating attack tactics — gaslighting, incremental concession, identity manipulation — and scores responses across 5 dimensions.",
    highlights: [
      "Tested claude-sonnet-4-6: 8.79/10 resilience, broken on 1/16 dilemmas",
      "10 adversarial tactics including gaslighting and authority exploitation",
      "5-dimension scoring: consistency, reasoning, resistance, tone, boundaries",
      "Automated pipeline for benchmarking any LLM's moral alignment",
    ],
    techTags: ["Python", "AI Safety", "Adversarial ML", "LLM Evaluation"],
    github: "https://github.com/aditi1421/AI_Safety",
    metric: { label: "resilience score", value: "8.79/10" },
  },
  {
    id: "turboquant",
    index: "04",
    title: "TurboQuant for Notion Search",
    tagline: "Replacing RaBitQ with TurboQuant for vector search at scale",
    description:
      "Proof-of-concept replacing Turbopuffer's RaBitQ vector quantization with Google Research's TurboQuant (ICLR 2026) for Notion's semantic search. Benchmarked on real Notion workspace data to demonstrate dramatic recall improvements.",
    highlights: [
      "TurboQuant 4-bit achieves 93.8% Recall@1 vs Binary Quantization's 6.2%",
      "Benchmarked on real Notion workspace data with search index",
      "Interactive demo comparing quantization strategies head-to-head",
      "Based on Google Research paper from ICLR 2026",
    ],
    techTags: ["Python", "Vector Search", "Quantization", "Information Retrieval"],
    github: "https://github.com/aditi1421/Notion_TurboQuant",
    metric: { label: "Recall@1", value: "93.8%" },
  },
  {
    id: "clinical-ml",
    index: "05",
    title: "Clinical ML Explorations",
    tagline: "Autonomous research loop for LLM training optimization",
    description:
      "An autonomous system that explores data-centric and uncertainty-aware techniques for small language model training. Runs continuous experiments on Apple Silicon, evaluates novel training strategies, and tracks which research directions produce the most consistent gains.",
    highlights: [
      "23+ automated experiments with systematic tracking",
      "Discovered stochastic depth as the single most effective regularizer",
      "Built on MLX for native Apple Silicon acceleration",
      "Inspired by van der Schaar Lab's data-centric AI pillars",
    ],
    techTags: ["Python", "MLX", "LLM Training", "Uncertainty Quantification"],
    github: "https://github.com/aditi1421/clinical-ml-explorations",
    metric: { label: "val_bpb improvement", value: "-26.6%" },
  },
  {
    id: "hinglish-eval",
    index: "06",
    title: "Vak-Pariksha",
    tagline: "Benchmarking voice AI for India's 400M+ Hinglish speakers",
    description:
      "Indian code-switching (Hinglish) voice AI evaluation benchmark. Tests 130 cases across legal, healthcare, and professional domains, benchmarking 3 STT engines on real Hinglish speech to expose the gap in voice agent support for multilingual India.",
    highlights: [
      "130 Hinglish test cases across legal, healthcare, professional domains",
      "Benchmarks Cartesia ink-whisper, Deepgram Nova-3, OpenAI Whisper",
      "Addresses voice AI gap for 400M+ Hinglish speakers in India",
      "Domain-specific evaluation with code-switching metrics",
    ],
    techTags: ["Python", "Voice AI", "STT Evaluation", "Multilingual NLP"],
    github: "https://github.com/aditi1421/hinglish-voice-eval",
  },
];
