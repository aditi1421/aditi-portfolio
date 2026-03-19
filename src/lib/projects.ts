export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techTags: string[];
  github: string;
  metric?: { label: string; value: string };
}

export const projects: Project[] = [
  {
    id: "clinical-ml",
    index: "01",
    title: "Clinical ML Explorations",
    tagline: "Autonomous research loop for LLM training optimization",
    description:
      "An autonomous system that explores data-centric and uncertainty-aware techniques for small language model training. Runs continuous experiments on Apple Silicon, evaluates novel training strategies, and tracks which research directions produce the most consistent gains — all without human intervention.",
    highlights: [
      "23+ automated experiments with systematic tracking",
      "Discovered stochastic depth as the single most effective regularizer",
      "Built on MLX for native Apple Silicon acceleration",
      "Inspired by van der Schaar Lab's data-centric AI pillars",
    ],
    techTags: ["Python", "MLX", "LLM Training", "Uncertainty Quantification"],
    github: "https://github.com/aditi1421/clinical-ml-explorations",
    metric: { label: "val_bpb improvement", value: "−26.6%" },
  },
  {
    id: "legal-auto-research",
    index: "02",
    title: "Legal Auto Research",
    tagline: "AI-powered legal research automation",
    description:
      "Intelligent system that automates legal research workflows — ingesting case documents, extracting key arguments, and surfacing relevant precedents. Built from real-world experience at a legal tech startup serving lawyers across India.",
    highlights: [
      "End-to-end pipeline: document ingestion → research output",
      "NLP-driven extraction of arguments and citations",
      "Designed for Indian legal system workflows",
      "Production experience from Bangalore legal tech startup",
    ],
    techTags: ["Python", "NLP", "Legal Tech", "RAG"],
    github: "https://github.com/aditi1421/legal-auto-research",
  },
  {
    id: "transformer",
    index: "03",
    title: "Transformer from Scratch",
    tagline: "\"Attention Is All You Need\" — first principles",
    description:
      "Clean implementation of the original Transformer architecture from the 2017 paper. Every component — multi-head attention, positional encoding, encoder-decoder stacks — built from scratch for deep architectural understanding.",
    highlights: [
      "Complete encoder-decoder with multi-head self-attention",
      "Scaled dot-product attention + positional encoding",
      "Layer normalization and residual connections",
      "Heavily commented for educational clarity",
    ],
    techTags: ["Python", "PyTorch", "Deep Learning", "NLP"],
    github: "https://github.com/aditi1421/Transformer",
  },
  {
    id: "game-of-life",
    index: "04",
    title: "Game of Life CLI",
    tagline: "Conway's cellular automaton in your terminal",
    description:
      "Terminal-based Game of Life with smooth rendering and configurable patterns. Complex emergent behavior from simple rules — rendered at 60fps in your shell.",
    highlights: [
      "Real-time terminal rendering with smooth animation",
      "Configurable grid dimensions and seed patterns",
      "Emergent complexity from three simple rules",
      "Zero-dependency Python CLI",
    ],
    techTags: ["Python", "CLI", "Simulation", "Algorithms"],
    github: "https://github.com/aditi1421/game-of-life-cli",
  },
  {
    id: "autoharness",
    index: "05",
    title: "Autoharness Code",
    tagline: "Automated test harness generation",
    description:
      "Developer tooling for automated code harnessing — analyzing source, generating test harnesses, and streamlining instrumentation. Reduces boilerplate and accelerates testing workflows.",
    highlights: [
      "Automated harness generation from source analysis",
      "Pattern-aware code structure parsing",
      "Developer-focused testing workflow tooling",
      "Reduces manual test setup boilerplate",
    ],
    techTags: ["Python", "Dev Tools", "Testing", "Code Analysis"],
    github: "https://github.com/aditi1421/autoharness-code",
  },
];
