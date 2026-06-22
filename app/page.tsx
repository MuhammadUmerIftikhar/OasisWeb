import Image from 'next/image'
import Link from 'next/link'

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About', 'Services', 'Team', 'Reviews', 'Contact']

const STATS = [
  { value: '5+', label: 'Years in the Industry' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '12', label: 'In-House Specialists' },
  { value: '100%', label: 'Client Satisfaction' },
]

const SERVICES = [
  {
    id: 's1',
    slug: 'game-development',
    icon: '🎮',
    title: 'Game Development',
    description:
      'End-to-end production for mobile, PC, and console. We cover the full lifecycle from concept and design to final build, using Unity and Unreal Engine.',
    tags: ['Unity', 'Unreal Engine', 'C#', 'Game Design'],
  },
  {
    id: 's2',
    slug: 'web-development',
    icon: '🌐',
    title: 'Web Development',
    description:
      'Full-stack web applications built for performance and scale using React, Next.js, Node.js, and PostgreSQL. Clean architecture, modern frameworks, and pixel-perfect interfaces that users love.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 's3',
    slug: 'app-development',
    icon: '📱',
    title: 'App Development',
    description:
      'Cross-platform mobile applications for iOS and Android. Native-feeling performance, smooth UX, and clean code across every target device.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    id: 's4',
    slug: 'ui-ux-design',
    icon: '🎨',
    title: 'UI / UX Design',
    description:
      'User-centered design systems, interactive wireframes, and high-fidelity prototypes that turn complex products into intuitive experiences.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Research'],
  },
  {
    id: 's5',
    slug: '3d-modeling',
    icon: '📦',
    title: '3D Modeling',
    description:
      'Game-ready characters, environments, and props with PBR textures and LODs. We also produce full 3D animations, cutscenes, and cinematic sequences.',
    tags: ['Blender', 'Maya', 'ZBrush', 'Substance 3D'],
  },
  {
    id: 's6',
    slug: '2d-art',
    icon: '✏️',
    title: '2D Art',
    description:
      'Concept art, character sheets, and production-ready sprite atlases. We also handle 2D animations including frame-by-frame and Spine-based rigs.',
    tags: ['Photoshop', 'Illustrator', 'Procreate', 'Spine'],
  },
  {
    id: 's7',
    slug: 'testing-qa',
    icon: '🔍',
    title: 'Testing & QA',
    description:
      'Rigorous quality assurance using automated and manual test suites. We cover every target platform and device profile so nothing ships broken.',
    tags: ['Automation', 'Manual QA', 'Performance Testing', 'Multi-Platform'],
  },
  {
    id: 's8',
    slug: 'video-editing',
    icon: '🎬',
    title: 'Video Editing',
    description:
      'Professional post-production for game trailers, promotional reels, social media content, and brand videos that capture attention.',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
  },
  {
    id: 's9',
    slug: 'ai-cloud-engineering',
    icon: '🤖',
    title: 'AI & Cloud Engineering',
    description:
      'Enterprise-grade architecture leveraging GenAI, AgenticAI, and MLOps. We design scalable cloud solutions using AWS, Docker, Kubernetes, and automated CI/CD pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'GenAI'],
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Concept & UI/UX',
    description:
      'Deep discovery sessions to align on your vision, define scope, and produce interactive wireframes and high-fidelity prototypes before a single line of code is written.',
  },
  {
    step: '02',
    title: 'Architecture & Prototyping',
    description:
      'Our engineers design the technical architecture and build a working prototype to validate the core experience early. This reduces risk and speeds up full production.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Agile two-week sprints with continuous integration, rigorous QA cycles, and transparent client check-ins that keep every milestone on time and on scope.',
  },
  {
    step: '04',
    title: 'Launch & Scaling',
    description:
      'We handle deployment, platform submission, and post-launch monitoring. Then we scale the infrastructure alongside your growth so you never hit a ceiling.',
  },
]


const TEAM = [
  {
    id: 't1',
    name: 'Hammad Daud',
    leadershipTitle: 'Founder / CEO',
    role: 'Senior Unity Developer',
    image: '/HammadDaudProfilePicture.png',
    bio: 'Hammad founded Oasis Studio with a mission to build world-class interactive products from Pakistan. A specialist in both 2D and 3D game production, he has deep expertise in casual, hypercasual, and puzzle game design, with a sharp eye for level design and player experience.',
    skills: ['2D Games', '3D Games', 'Casual & Hypercasual', 'Puzzle Games', 'Level Design', 'Unity'],
  },
  {
    id: 't2',
    name: 'Muhammad Umer Iftikhar',
    leadershipTitle: 'Co-Founder / Project Manager',
    role: 'Senior Unity Developer',
    image: '/MuhammadUmerIftikharProfile.png',
    bio: 'Umer co-founded Oasis Studio and brings deep technical expertise across the full Unity development stack. He specialises in multiplayer systems, seamless backend integration, and production-grade asset management and game optimisation, ensuring every title ships fast and performs at scale.',
    skills: ['Multiplayer Systems', 'Backend Integration', 'Asset Management', 'Game Optimisation', 'Unity'],
  },
  {
    id: 't3',
    name: 'Sabieh Faiz',
    leadershipTitle: 'Managing Director',
    role: 'MD',
    image: '/SabiKianiProfile.jpeg',
    bio: 'Sabieh steers the strategic direction of Oasis Studio, overseeing agency operations, client relationships, and long-term growth. He ensures every engagement is delivered with clarity and excellence, acting as the bridge between client vision and studio execution.',
    skills: ['Agency Operations', 'Client Success', 'Strategic Planning', 'Project Management'],
  },
  {
    id: 't4',
    name: 'Umer Malik',
    leadershipTitle: '',
    role: 'Senior Game Developer',
    image: '/UmerMalikProfile.jpeg',
    bio: 'Umer is a dedicated 2D game developer with a strong command of platformers, puzzle games, and narrative-driven experiences. He focuses on crafting engaging mechanics and fluid performance, producing games that feel satisfying to play from the very first interaction.',
    skills: ['2D Games', 'Platformers', 'Puzzle Games', 'Narrative Design', 'Unity', 'C#'],
  },
  {
    id: 't5',
    name: 'Abdul Moiz',
    leadershipTitle: '',
    role: 'Senior Game Developer',
    image: '/AbdulMoizProfile.jpeg',
    bio: 'Abdul is a versatile game developer with expertise in both 2D and 3D production, specialising in fighting games and top-down titles. He combines deep knowledge of game optimisation with a commitment to high graphical quality, delivering smooth and visually striking gameplay systems.',
    skills: ['2D & 3D Games', 'Fighting Games', 'Top-Down Games', 'Game Optimisation', 'Unity', 'C#'],
  },
  {
    id: 't6',
    name: 'Mehtab Ahmad',
    leadershipTitle: '',
    role: 'App Developer & ASO Specialist',
    image: '/MehtabAhmadProfile.jpeg',
    bio: 'Mehtab builds robust mobile applications for both Android and iOS, then ensures they succeed after launch through expert App Store Optimisation. His ASO strategies improve keyword rankings, conversion rates, and organic visibility, turning well-built apps into high-acquisition products.',
    skills: ['Android', 'iOS', 'App Development', 'ASO', 'Keyword Strategy', 'User Acquisition'],
  },
  {
    id: 't7',
    name: 'Saif Ahmad',
    leadershipTitle: '',
    role: 'UI/UX Designer & 2D Artist',
    image: '/SaifAhmadProfile.jpeg',
    bio: 'Saif crafts highly intuitive and visually stunning user experiences across games, apps, and web products. His work spans UI/UX design, 2D illustration, and animation, producing interfaces and artwork that are as beautiful to look at as they are effortless to use.',
    skills: ['UI/UX Design', 'Game UI', 'App Design', 'Web Design', '2D Art', 'Animation'],
  },
  {
    id: 't8',
    name: 'Ehtesham Ali',
    leadershipTitle: '',
    role: 'Senior Full Stack AI Engineer',
    image: '/AhtishamButtProfile.jpeg',
    bio: 'With over 8 years of full-stack experience, Ehtesham architects scalable web and mobile platforms and integrates cutting-edge AI and LLM capabilities into production systems. His expertise spans the full stack from React and Next.js on the front end to Python, Node.js, and .NET on the back end, deployed across AWS, Vercel, and custom VPS environments.',
    skills: ['React.js', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Django', '.NET', 'AI/LLM', 'React Native', 'AWS'],
  },
  {
    id: 't9',
    name: 'Muhammad Fahad Nisar',
    leadershipTitle: '',
    role: '3D Artist',
    image: '/FahadNisarProfile.jpeg',
    bio: 'Fahad is a 3D artist and environment designer with a sharp focus on building immersive worlds for mobile games and VR/XR platforms. He creates detailed, optimised environments that balance visual richness with the performance requirements of real-time and interactive experiences.',
    skills: ['3D Art', 'Environment Design', 'Mobile Games', 'VR / XR', 'Blender', 'Substance 3D'],
  },
  {
    id: 't10',
    name: 'Saad Khan Afridi',
    leadershipTitle: '',
    role: '3D Artist',
    image: '/SaadAfridiProfile.jpeg',
    bio: 'Saad is a versatile 3D artist with expertise across the full production pipeline, from character and environment modeling to rigging, animation, UV mapping, texturing, shading, lighting, and final rendering. His work spans game-ready assets and animation projects, delivering polished, production-quality results at every stage.',
    skills: ['3D Modeling', 'Character Rigging', '3D Animation', 'UV Mapping', 'Texturing', 'Shading', 'Lighting', 'Rendering', 'Blender'],
  },
  {
    id: 't11',
    name: 'Haseeb Kiyani',
    leadershipTitle: '',
    role: 'Video Editor & AI Content Creator',
    image: '/HaseebKiyaniProfile.jpeg',
    bio: 'Haseeb is a skilled video editor and AI content specialist who combines traditional post-production expertise with cutting-edge generative AI tools. He produces cinematic trailers, branded reels, and social content in Premiere Pro and After Effects, and leverages AI video platforms to accelerate production, create synthetic visuals, and deliver content at a scale and speed that traditional workflows cannot match.',
    skills: ['Video Editing', 'AI Video Generation', 'Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Generative AI', 'Social Content'],
  },
  // ── Add more team members here ──────────────────────────────────────────────
]

const REVIEWS = [
  {
    id: 'r1',
    text: 'The Oasis team was excellent to work with throughout the project. They were professional, communicative, detail-oriented, and consistently delivered high-quality work. They successfully implemented gameplay features, UI improvements, ad mediation, Firebase integration, bug fixes, Android and iOS updates, and provided all source files and ownership documentation at project completion. They were committed to making sure everything was working properly and were always willing to help when questions or technical challenges came up. Communication was clear throughout the process, and the final result exceeded my expectations. I\'m very happy with the completed project and look forward to working with them again on future game development projects.',
    name: 'Albert Dorn',
    company: 'Dorn Bros Entertainment',
    initials: 'AD',
  },
  {
    id: 'r2',
    text: 'This is the 2nd major project I have worked on with Oasis Studio. They were an absolute integral part of the project. With their help, the game will be exceeding all expectations I had for it. They were able to make all of my ideas come true, and they did it with a high level of efficiency and skill. I especially appreciate their attention to detail. My project was ambitious and they worked halfway through a mountain of tasks. After this game is published, I\'m hoping to work with them on a 3rd game. I have no hesitation about recommending them. The team is extremely talented, and have wonderful Unity developers. Thanks again!',
    name: 'Karen',
    company: 'Panel Pro (Steam Release)',
    initials: 'K',
  },
  {
    id: 'r3',
    text: 'Professional and very cooperative team! I worked with them and they were fast, understood the requirements perfectly, and delivered clean, well-organized work. Honestly, it was an excellent experience, and I highly recommend working with them without hesitation.',
    name: 'Amjad Alhamed',
    company: 'Independent App Developer',
    initials: 'AA',
  },
  {
    id: 'r4',
    text: 'I had a great experience working with this team on my app. From the start, their team understood my requirements and turned them into a working product exactly the way I imagined. They communicated clearly, gave useful suggestions, and always responded quickly. The whole process was smooth, and they handled every challenge with professionalism. I\'m very satisfied with the result, and I look forward to working with them again on future projects.',
    name: 'Shorsh Hemn',
    company: 'Mobile App Client',
    initials: 'SH',
  },
  {
    id: 'r5',
    text: 'I highly recommend Oasis for game development needs. The team delivered the card game on schedule and within budget. They were also very responsive to my questions and concerns, and quickly resolved any issues that arose during testing. They have recently completed the game and are now working on an update for me. This team is a pleasure to work with, and I would definitely hire them again.',
    name: 'Thilip Kumar',
    company: 'Independent Game Developer',
    initials: 'TK',
  },
  {
    id: 'r6',
    text: 'Oasis Studio took our vision for a complex 3D side-scrolling fighting game and executed it flawlessly. The combat mechanics, character animations, and environmental designs are incredibly polished. Managing a project of this scale requires serious technical architecture, and their Unity engineers proved they are top-tier. They kept us updated at every milestone and consistently pushed the quality higher than we asked for. We are absolutely thrilled with the results.',
    name: 'Michael Merrit',
    company: 'Midas Mobile Apps',
    initials: 'MM',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">

      {/* Global fixed watermark */}
      <div className="fixed inset-0 z-[1] flex justify-center items-center pointer-events-none opacity-20" aria-hidden="true">
        <Image
          src="/OasisLogoTransparent.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[80vw] max-w-[900px] h-auto object-contain"
        />
      </div>

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="#" className="shrink-0">
            <div className="text-2xl font-black tracking-widest">
              <span className="text-[#E63946]">OASIS</span><span className="text-white">STUDIO</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-[#E63946] hover:bg-red-700 text-white transition-colors duration-200 shrink-0"
          >
            Start a Project
          </a>
        </nav>
      </header>


      <main>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
            style={{ width: 800, height: 400, backgroundColor: 'rgba(230,57,70,0.07)' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl w-full pb-28">
          <div className="inline-flex items-center gap-2 border border-[#E63946]/30 rounded-full px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase text-[#E63946] bg-[#E63946]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
            Established Software &amp; Interactive Agency
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Building Next-Gen Digital Products.
            <br />
            <span className="text-[#E63946]">Engineering</span> Excellence.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Oasis Studio is a premier software and interactive media agency. We build
            scalable web platforms, immersive games, robust mobile applications, and
            comprehensive digital products from first pixel to final build.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E63946] hover:bg-red-700 text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Explore Services
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-gray-600 text-xs tracking-widest uppercase pointer-events-none">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════════ */}
      <section id="about" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Text */}
            <div>
              <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A Studio Built on Craft and Code.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                Founded in Pakistan and active for over five years, Oasis Studio has grown
                from a passionate indie collective into a full-service interactive media agency
                serving clients across three continents. Every project we take on is treated
                as if it were our own product.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                Our in-house team is a specialised unit built around three core pillars.
                Five dedicated <span className="text-white font-semibold">Unity developers</span> who
                have shipped mobile games, multiplayer titles, WebGL prototypes, and complex
                software solutions. A <span className="text-white font-semibold">full-stack backend engineer</span> who
                ensures every product, including blockchain and wallet integrations, is secure,
                scalable, and performant from day one. And a{' '}
                <span className="text-white font-semibold">graphic design expert</span> covering
                UI/UX, 2D illustration, 3D modeling, animation, and video editing.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                No outsourcing. No handoffs to third parties. Just a tight-knit, invested
                team delivering studio-quality work on every single engagement.
              </p>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  'Unity Development',
                  'Full-Stack Web',
                  'App Development',
                  'Blockchain',
                  'Wallet Integration',
                  'UI/UX Design',
                  '3D Modeling',
                  'QA Testing',
                  'Video Editing',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#121212] rounded-2xl p-8 border border-white/5 flex flex-col"
                >
                  <span className="text-5xl font-black text-[#E63946] mb-3">{value}</span>
                  <span className="text-sm text-gray-400 leading-snug">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════ */}
      <section id="services" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Core Services</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              Nine specialisms. One integrated team. Every service under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="group bg-[#1E1E1E] rounded-2xl p-6 border border-white/5 hover:border-[#E63946]/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-5 text-xl group-hover:bg-[#E63946]/20 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-5 flex-1">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════════════ */}
      <section id="process" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Development Process</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              A battle-tested four-stage workflow that keeps every project on time, on scope, and on brief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

            <div
              className="hidden lg:block absolute top-[1.2rem] left-[14%] right-[14%] h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}
            />

            {PROCESS.map((p) => (
              <div key={p.step} className="flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#121212] border border-[#E63946]/40 flex items-center justify-center shrink-0 relative z-10">
                    <span className="text-[#E63946] text-xs font-black">{p.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          TEAM
      ════════════════════════════════════════════════ */}
      <section id="team" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
              The People
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              Nine in-house specialists across game development, engineering, design, and operations. Zero outsourcing. Every person on this page works on your project directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E63946]/30 transition-all duration-300 group"
              >
                {/* Profile photo */}
                <div className="w-full aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-0.5">
                    {member.leadershipTitle}
                  </p>
                  <p className="text-gray-500 text-xs font-semibold mb-5">{member.role}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════
          CLIENT REVIEWS
      ════════════════════════════════════════════════ */}
      <section id="reviews" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
              Client Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              100% satisfaction across every engagement. Here is what a few of our clients have shared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <article
                key={review.id}
                className="bg-[#1E1E1E] rounded-2xl p-8 border border-white/5 flex flex-col h-full"
                style={{ boxShadow: '0 0 40px rgba(230,57,70,0.04)' }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#E63946] text-lg" aria-hidden="true">
                      &#9733;
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <footer className="flex items-center gap-3 pt-5 border-t border-white/5 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="text-[#E63946] text-xs font-bold">{review.initials}</span>
                  </div>
                  <cite className="not-italic">
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.company}</p>
                  </cite>
                </footer>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════════════ */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
              Ready to build something great? Tell us about your project and we will get back to you within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Form */}
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E63946]/50 transition-colors duration-200 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E63946]/50 transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E63946]/50 transition-colors duration-200 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E63946]/50 transition-colors duration-200 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#E63946] hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-200 text-sm mt-1"
              >
                Send Message
              </button>
            </form>

            {/* Right: Contact Details */}
            <address className="flex flex-col gap-8 not-italic">

              {/* Email & General */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#E63946] mb-4">
                  General Enquiries
                </p>
                <a
                  href="mailto:admin@oasisstudio.org"
                  className="text-white font-semibold hover:text-[#E63946] transition-colors duration-200"
                >
                  admin@oasisstudio.org
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  We reply within one business day.
                </p>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#E63946] mb-4">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/923095250595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-[#E63946] transition-colors duration-200"
                >
                  +92 309 5250595
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  Available during working hours.
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#E63946] mb-3">
                  Working Hours
                </p>
                <p className="text-gray-400 text-sm">Monday to Friday: 9:00 AM to 6:00 PM (PKT)</p>
                <p className="text-gray-400 text-sm">Saturday: 10:00 AM to 2:00 PM (PKT)</p>
              </div>

            </address>

          </div>
        </div>
      </section>


      </main>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-1">
            <div className="text-2xl font-black tracking-widest mb-4">
              <span className="text-[#E63946]">OASIS</span><span className="text-white">STUDIO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A premier software and interactive media agency. Crafting digital worlds since 2020.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Process', 'Team', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Game Development',
                'Web Development',
                'App Development',
                'UI/UX Design',
                '3D Modeling',
                '2D Art',
                'Testing & QA',
                'Video Editing',
                'AI & Cloud Engineering',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:admin@oasisstudio.org"
                  className="hover:text-white transition-colors duration-200"
                >
                  admin@oasisstudio.org
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923095250595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  +92 309 5250595
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E63946] hover:bg-red-700 text-white text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Start a Project
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 py-5 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <span>&#169; {new Date().getFullYear()} Oasis Studio. All rights reserved.</span>
            <span>Built with Next.js and Sanity</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
