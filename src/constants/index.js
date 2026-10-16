import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  Java,
  reactjs,
  tailwind,
  docker,
  git,
  MySQL,
  Springboot,
  python,
  opencv,
  pytorch,
  nvidia,
  yolo,
  tensorrt,
  linux,
  mialo,
  scaler,
  kunal,
  rajveer,
  Shubham,
  footfall,
  edge_analytics,
  rest_api,
} from "../assets";

export const personalInfo = {
  name: "Ritvik Tak",
  title: "AI Engineer | Computer Vision & Edge AI",
  email: "thakur.ritvik9440@gmail.com",
  phone: "+91 80001 83583",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/ritvik-tak-14bb84251",
  github: "https://github.com/thakur-ritvik",
  summary:
    "AI Engineer building real-time computer vision systems for retail analytics, from object detection and multi-object tracking to edge deployment on NVIDIA Jetson. Delivered footfall counting, dwell-time and zone-based analytics at 90–95% accuracy using Python, OpenCV and YOLO with ByteTrack and centroid tracking. Optimized models with ONNX and TensorRT and containerized with Docker for reliable inference on live RTSP camera streams.",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Vision & Tracking",
    description:
      "YOLO detection, ByteTrack & centroid tracking, footfall counting, and zone analytics at 90-95% accuracy.",
    icon: web,
  },
  {
    title: "Edge AI & Deployment",
    description:
      "NVIDIA Jetson (AGX, Nano) deployment, TensorRT & ONNX engine conversion, Docker containerization, and RTSP streaming.",
    icon: mobile,
  },
  {
    title: "Model Training & Optimization",
    description:
      "PyTorch custom model training, dataset annotation with Makesense, latency tuning, and accuracy validation.",
    icon: creator,
  },
  {
    title: "Backend & Systems",
    description:
      "REST API design, Spring Boot, Flask, normalized MySQL schemas, Linux/SSH administration, and remote.it.",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    category: "Languages & ML",
    categories: ["Computer Vision", "ML & Vision", "Languages & Tools"],
  },
  {
    name: "PyTorch",
    icon: pytorch,
    category: "ML & Vision",
    categories: ["Computer Vision", "ML & Vision"],
  },
  {
    name: "OpenCV",
    icon: opencv,
    category: "Computer Vision",
    categories: ["Computer Vision", "ML & Vision"],
  },
  {
    name: "YOLO",
    icon: yolo,
    category: "Computer Vision",
    categories: ["Computer Vision", "ML & Vision"],
  },
  {
    name: "TensorRT",
    icon: tensorrt,
    category: "Edge & Optimization",
    categories: ["Computer Vision", "Edge & Hardware"],
  },
  {
    name: "NVIDIA Jetson",
    icon: nvidia,
    category: "Edge & Hardware",
    categories: ["Edge & Hardware"],
  },
  {
    name: "Docker",
    icon: docker,
    category: "Deployment",
    categories: ["Edge & Hardware", "Backend", "Languages & Tools"],
  },
  {
    name: "Linux / SSH",
    icon: linux,
    category: "Tools & OS",
    categories: ["Edge & Hardware", "Languages & Tools", "Backend"],
  },
  {
    name: "Core Java",
    icon: Java,
    category: "Languages & Systems",
    categories: ["Backend", "Languages & Tools"],
  },
  {
    name: "Spring Boot",
    icon: Springboot,
    category: "Backend",
    categories: ["Backend"],
  },
  {
    name: "MySQL",
    icon: MySQL,
    category: "Databases",
    categories: ["Backend"],
  },
  {
    name: "Git",
    icon: git,
    category: "Tools",
    categories: ["Languages & Tools"],
  },
  {
    name: "React.js",
    icon: reactjs,
    category: "Frontend",
    categories: ["Languages & Tools"],
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages",
    categories: ["Languages & Tools"],
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Mialo Technology",
    location: "Bangalore, India",
    icon: mialo,
    iconBg: "#111827",
    date: "July 2026 – Present",
    points: [
      "Develop and test real-time retail analytics pipelines (RetailSense) in Python and OpenCV, delivering footfall counting, dwell-time and zone-based analytics across multi-zone deployments, with camera counts configured to each site’s requirements.",
      "Deploy YOLO detection models on NVIDIA Jetson AGX and Nano edge devices, converting PyTorch weights to ONNX and TensorRT engines to run low-latency inference on live RTSP streams.",
      "Integrate ByteTrack and centroid tracking to keep object IDs consistent across frames, reducing duplicate counts and achieving 90–95% event and counting accuracy on live and recorded video.",
      "Troubleshoot RTSP connectivity and stream-path issues for Hikvision IP cameras using OpenCV and FFmpeg, keeping concurrent streams stable across sites with different camera counts.",
      "Containerize CV workloads with Docker and manage remote access to edge devices through remote.it for deployment, monitoring and debugging.",
      "Annotate datasets with Makesense, train custom detection models and validate accuracy on live and recorded video; expose results via REST APIs for downstream systems.",
    ],
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Scaler by InterviewBit",
    location: "Online / Remote",
    icon: scaler,
    iconBg: "#0f172a",
    date: "Jan 2023 – Present",
    points: [
      "Completed 1000+ hours across Data Structures & Algorithms, Low-Level and High-Level Design, Core Java, SQL and React.js.",
      "Engineered clean, modular code with strict adherence to Object-Oriented Programming (OOP) and system design best practices.",
      "Practiced robust Git workflows, CI/CD fundamentals, and collaborative peer code reviews.",
      "Earned certifications in Core Java & OOP (Besant Technologies) and Database Management & SQL (Scaler).",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "MDS University",
    location: "Ajmer, Rajasthan",
    date: "2019 – 2023",
    description:
      "Core coursework in Computer Science, Database Management Systems, Software Engineering, and Mathematics.",
  },
  {
    degree: "Software Engineering Program (1000+ Hours)",
    institution: "Scaler by InterviewBit",
    location: "Bangalore / Remote",
    date: "Jan 2023 – Present",
    description:
      "Comprehensive training in Data Structures & Algorithms, Low-Level Design (LLD), High-Level Design (HLD), Java, SQL, and System Architecture.",
  },
];

const certifications = [
  {
    title: "Core Java & OOP",
    issuer: "Besant Technologies",
    year: "2023",
  },
  {
    title: "Database Management & SQL",
    issuer: "Scaler",
    year: "2023",
  },
];

const testimonials = [
  {
    testimonial:
      "Ritvik's expertise in deploying computer vision models on NVIDIA Jetson edge devices reduced inference latency drastically and maintained 95% counting accuracy.",
    name: "Founder",
    designation: "Founder",
    company: "musical.ly / ByteDance",
    image: kunal,
  },
  {
    testimonial:
      "Outstanding understanding of ByteTrack, centroid tracking, and RTSP stream stabilization under real-world multi-camera constraints.",
    name: "Senior Executive",
    designation: "Senior Executive",
    company: "Mirco Coal Ltd",
    image: rajveer,
  },
  {
    testimonial:
      "Ritvik combines solid DSA fundamentals with practical edge AI engineering. His clean code and layered architecture reflect strong software craftsmanship.",
    name: "Scaler Evaluator",
    designation: "Manager",
    company: "Arram Hotal",
    image: Shubham,
  },
];

const projects = [
  {
    name: "Real-Time Footfall Counting System",
    description:
      "A high-accuracy people-counting system using YOLO on live and recorded video streams. Implemented centroid tracking with NumPy to maintain consistent identities and prevent duplicate counts across frames, logging in/out timestamps and hourly analytics to Pandas with CSV exports.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "YOLO",
        color: "pink-text-gradient",
      },
      {
        name: "NumPy",
        color: "orange-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
    ],
    highlights: [
      "Line-crossing detection algorithm on live camera feed",
      "Centroid tracking preventing duplicate identities",
      "Tuned confidence thresholds and frame-skip intervals for real-time edge performance",
    ],
    image: footfall,
    source_code_link: "https://github.com/thakur-ritvik",
  },
  {
    name: "RetailSense: Edge CV Analytics Pipeline",
    description:
      "Real-time retail analytics pipeline deployed on NVIDIA Jetson AGX and Nano devices. Converts PyTorch weights to ONNX and TensorRT engines to deliver low-latency inference on live Hikvision RTSP streams, providing footfall counting, dwell-time, and zone-based analytics at 90–95% accuracy.",
    tags: [
      {
        name: "NVIDIA Jetson",
        color: "green-text-gradient",
      },
      {
        name: "TensorRT",
        color: "blue-text-gradient",
      },
      {
        name: "ONNX",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
      {
        name: "ByteTrack",
        color: "green-text-gradient",
      },
    ],
    highlights: [
      "Sub-millisecond inference via FP16 TensorRT engines",
      "ByteTrack integration for robust occlusion recovery",
      "Dockerized container with remote.it tunnel for zero-downtime edge maintenance",
    ],
    image: edge_analytics,
    source_code_link: "https://github.com/thakur-ritvik",
  },
  {
    name: "User-Specific CRUD REST API",
    description:
      "A production-grade RESTful CRUD API architected using a clean layered Controller–Service–Repository design pattern. Built with Java and Spring Boot with a normalized MySQL relational database schema, secured endpoints, and end-to-end Postman verification.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "orange-text-gradient",
      },
    ],
    highlights: [
      "Layered Controller-Service-Repository architecture",
      "Normalized MySQL relational schema with indexing",
      "Comprehensive Postman test collection with status verification",
    ],
    image: rest_api,
    source_code_link: "https://github.com/thakur-ritvik",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  certifications,
  testimonials,
  projects,
};
