export const skills = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: 90, icon: "Code2" },
      { name: "C++", level: 85, icon: "Code2" },
      { name: "JavaScript", level: 95, icon: "Code2" },
      { name: "Python", level: 80, icon: "Code2" },
      { name: "SQL", level: 85, icon: "Database" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, icon: "Layout" },
      { name: "Next.js", level: 90, icon: "Globe" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "Framer Motion", level: 85, icon: "Zap" },
      { name: "Zustand", level: 80, icon: "Box" },
    ]
  },
  {
    category: "Backend & Core",
    items: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "Express", level: 90, icon: "Server" },
      { name: "Socket.io", level: 85, icon: "MessageSquare" },
      { name: "PostgreSQL", level: 80, icon: "Database" },
      { name: "Redis", level: 75, icon: "Cpu" },
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Docker", level: 80, icon: "Container" },
      { name: "Git", level: 90, icon: "GitBranch" },
      { name: "VS Code Ext", level: 85, icon: "Terminal" },
      { name: "Linux", level: 85, icon: "Terminal" },
    ]
  }
];

export const projects = [
  {
    id: "campusmesh",
    title: "CampusMesh",
    description: "A high-performance real-time communication infrastructure for university campuses. Features decentralized room architecture, instant messaging, and low-latency asset synchronization.",
    longDescription: "Built to solve the fragmented communication in local campus environments. Leveraging Socket.io for bi-directional real-time data flow and a custom load-balancing strategy to handle concurrent room states.",
    tech: ["React", "Express", "Socket.io", "Redis", "PostgreSQL"],
    links: { github: "#", live: "#" },
    featured: true,
    stats: ["1s Latency", "5k+ Users", "99.9% Uptime"]
  },
  {
    id: "hiretrace",
    title: "HireTrace",
    description: "Enterprise-grade recruitment tracking system with secure multi-tenant architecture and automated candidate workflow management.",
    longDescription: "A robust backend system featuring JWT-based authentication, role-based access control, and an automated email notification engine.",
    tech: ["Node.js", "Express", "JWT", "PostgreSQL", "Tailwind"],
    links: { github: "#", live: "#" },
    featured: true,
    stats: ["Secure Auth", "Role-based", "Automated"]
  },
  {
    id: "simplecodesnippet",
    title: "SimpleCodeSnippet",
    description: "A VS Code ecosystem enhancement that streamlines developer productivity through optimized snippet management and command palette integration.",
    longDescription: "Directly integrated into the VS Code API, this tool allows engineers to sync their local micro-patterns across multiple machines effortlessly.",
    tech: ["TypeScript", "VS Code API", "Node.js"],
    links: { github: "#", live: "#" },
    featured: false
  },
  {
    id: "wallscroll",
    title: "wallScroll",
    description: "Minimalist wallpaper discovery engine with focus on smooth transitions and persistent local-storage synchronization.",
    longDescription: "Uses hardware-accelerated animations and intelligent lazy-loading to provide a premium browsing experience for high-resolution assets.",
    tech: ["React", "Framer Motion", "Unsplash API"],
    links: { github: "#", live: "#" },
    featured: false
  }
];

export const experience = [
  {
    id: "recursion",
    role: "Technical Lead",
    company: "RECursion",
    period: "2024 - Present",
    description: "Leading technical initiatives, mentoring junior devs, and architecting systems for internal coding events.",
    points: [
      "Architected the RECode event platform handling 500+ simultaneous participants.",
      "Mentored a team of 10+ devs on modern React best practices.",
      "Optimized backend latency for real-time leaderboards by 40%."
    ]
  }
];

export const cpStats = [
  { platform: "Codeforces", rating: 1230, rank: "Specialist", color: "#03a89e" },
  { platform: "CodeChef", rating: 1620, rank: "3-star", color: "#bb8811" },
  { platform: "LeetCode", rating: 1667, rank: "Top 12%", color: "#ffa116" },
  { platform: "AtCoder", rating: 420, rank: "Brown", color: "#804000" }
];
