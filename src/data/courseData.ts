interface ICourse {
  code: number;
  subject: string;
  repository: string[];
}

export const courseData = [
  {
    code: 2110101,
    subject: "Computer Programming",
    repository: ["2110101"],
  },
  {
    code: 2301108,
    subject: "Calculus II",
    repository: ["2301108"],
  },
  {
    code: 2110211,
    subject: "Intro to Data Structure",
    repository: ["2110211"],
  },
  {
    code: 2110479,
    subject: "Computer Graphics",
    repository: ["2110479", "Delaunay-Triangulation", "Simple-Rasterization"],
  },
  {
    code: 2110581,
    subject: "Bioinformatics I",
    repository: ["2110581"],
  },
  {
    code: 2110327,
    subject: "Algorithm Design",
    repository: ["2110327"],
  },
  {
    code: 2110363,
    subject: "Hardware Synthesis Laboratory I",
    repository: ["2110363"],
  },
  {
    code: 2110514,
    subject: "Realtime Computer Graphics and Physics Simulation",
    repository: ["2110514", "SPH-FluidSimulation"],
  },
  {
    code: 2110366,
    subject: "Embedded System Laboratory I",
    repository: ["2110366"],
  },
] as ICourse[];
