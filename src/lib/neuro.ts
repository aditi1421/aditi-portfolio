import { projects, type Project } from "@/lib/projects";

const strokeLesion = projects.find((p) => p.id === "stroke-lesion-location")!;

export const neuroProjects: Project[] = [
  { ...strokeLesion, index: "01" },
  {
    id: "bci-stress-lab",
    index: "02",
    title: "BCI Stress Lab",
    tagline: "How do frozen motor imagery decoders behave when the EEG signal degrades?",
    description:
      "Offline, CPU only motor imagery decoding experiments on OpenNeuro ds004362. A fixed CSP + LDA decoder and a channel bandpower decoder are trained once, then frozen and tested under Gaussian noise and channel flatlining, with the protocol and severity grid locked before any stressed score was generated.",
    highlights: [
      "Clean baseline: 60.71% balanced accuracy for CSP + LDA and 46.43% for bandpower + LDA on held out trials",
      "At Gaussian noise of 0.5x training RMS and above, both decoders collapse to a single class across all ten seeds",
      "110 recording conditions, 220 decoder rows and 3,300 predictions, all reproduced exactly on a second run",
      "Frozen protocol and adversarial review before execution, backed by 116 tests",
    ],
    techTags: ["Python", "EEG", "BCI", "MNE", "Robustness"],
    github: "https://github.com/aditi1421/BCI-Stress-Lab",
    metric: { label: "CSP + LDA balanced accuracy", value: "60.71%" },
  },
  {
    id: "neural-forager",
    index: "03",
    title: "Neural Forager",
    tagline: "A spiking neural agent that learns, forgets and remembers in changing mazes",
    description:
      "A Nengo project studying learning and memory with real LIF neurons and PES plasticity, running locally on CPU with no LLM. A spiking value learner forages in mazes where food moves and passages close, and a controlled experiment tests whether diagnosing position errors before writing observations protects valid neural memories.",
    highlights: [
      "Browser dashboard showing the maze, spikes, action values and live learning traces",
      "Selective memory experiment over 480 episodes on held out mazes with paired confidence intervals",
      "Spiking advantage audit with matched rate controls: 1,024 memory assays and 384 navigation episodes",
      "Honest finding: no navigation advantage from spikes, with the unfavorable results reported in full",
    ],
    techTags: ["Python", "Nengo", "Spiking Neural Networks", "Computational Neuroscience"],
    github: "https://github.com/aditi1421/Neural-Forager",
  },
];
