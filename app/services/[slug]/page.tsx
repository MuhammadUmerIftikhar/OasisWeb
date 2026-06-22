import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ThreeDGallery from './ThreeDGallery'
import UIUXGallery from './UIUXGallery'
import AppIconImage from './AppIconImage'
import { FaqPageJsonLd } from '../../components/JsonLd'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TITLE_MAP: Record<string, string> = {
  'game-development': 'Game Development',
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'ui-ux-design': 'UI / UX Design',
  '3d-modeling': '3D Modeling',
  '2d-art': '2D Art',
  'testing-qa': 'Testing & QA',
  'video-editing': 'Video Editing',
  'ai-cloud-engineering': 'AI & Cloud Engineering',
}

type FaqItem = { question: string; answer: string }

const SERVICE_FAQS: Record<string, FaqItem[]> = {
  'game-development': [
    {
      question: 'What game development services does Oasis Studio provide?',
      answer:
        'Oasis Studio provides full-cycle game development for mobile, PC, and console using Unity and Unreal Engine, covering game design, development, QA, and store submission for iOS, Android, and Steam.',
    },
    {
      question: 'Does Oasis Studio build multiplayer games?',
      answer:
        'Yes. Oasis Studio builds multiplayer games with real-time networking, backend integration, and cross-platform online experiences. The studio has shipped multiplayer card and action titles on Google Play and Steam.',
    },
    {
      question: 'What types of games has Oasis Studio shipped?',
      answer:
        'Oasis Studio has shipped casual, hypercasual, puzzle, card, and fighting games including Stickey on Google Play and Organizer Pro on Steam, for international clients across three continents.',
    },
  ],
  'app-development': [
    {
      question: 'Does Oasis Studio build Android and iOS apps?',
      answer:
        'Yes. Oasis Studio builds cross-platform mobile apps for Android and iOS. The studio has over 13 published apps on Google Play with millions of combined downloads.',
    },
    {
      question: 'What frameworks does Oasis Studio use for mobile app development?',
      answer:
        'Oasis Studio uses React Native and Flutter for cross-platform development and native Android when performance-critical behavior is required for consumer-grade applications.',
    },
    {
      question: 'Does Oasis Studio handle App Store Optimization?',
      answer:
        'Yes. Oasis Studio includes dedicated ASO strategy to improve keyword rankings, store conversion rates, and organic downloads on both Google Play and the Apple App Store.',
    },
  ],
  'web-development': [
    {
      question: 'What web technologies does Oasis Studio use?',
      answer:
        'Oasis Studio builds full-stack web applications using Next.js, React, Node.js, and PostgreSQL, deployed on AWS, Vercel, and Digital Ocean with automated CI/CD pipelines.',
    },
    {
      question: 'Has Oasis Studio built SaaS platforms?',
      answer:
        'Yes. Oasis Studio has delivered multiple SaaS platforms including Vonza for course creators, ScoreHub for sports management, and Careflair for healthcare bookings, serving users internationally.',
    },
    {
      question: 'Does Oasis Studio handle both frontend and backend development?',
      answer:
        'Yes. Oasis Studio is a full-stack agency. A single integrated team handles UI, API, database, cloud infrastructure, and deployment on every project.',
    },
  ],
  'ai-development': [
    {
      question: 'What AI development services does Oasis Studio offer?',
      answer:
        'Oasis Studio builds AI-powered products using OpenAI, Anthropic Claude, AWS Bedrock, and custom RAG pipelines for intelligent document processing, automation, and agentic AI workflows.',
    },
    {
      question: 'Has Oasis Studio delivered RAG-based AI applications?',
      answer:
        'Yes. Oasis Studio built GovDoc.ai, a government document intelligence platform using Retrieval-Augmented Generation and AWS Bedrock, and Cuts Like A Knife, an AI data retrieval system built with OpenAI and Claude.',
    },
    {
      question: 'Does Oasis Studio integrate large language models into production systems?',
      answer:
        'Yes. Oasis Studio integrates LLMs, GenAI, and AgenticAI into production systems, providing enterprise clients with intelligent automation, semantic search, and scalable AI infrastructure.',
    },
  ],
  'cloud-engineering': [
    {
      question: 'What cloud platforms does Oasis Studio work with?',
      answer:
        'Oasis Studio designs and deploys cloud infrastructure on AWS as the primary platform, with expertise in Docker, Kubernetes, Vercel, and custom VPS environments.',
    },
    {
      question: 'Does Oasis Studio provide DevOps and CI/CD pipeline services?',
      answer:
        'Yes. Oasis Studio implements automated CI/CD pipelines, infrastructure-as-code, and continuous deployment workflows that reduce release cycles and eliminate manual deployment errors.',
    },
    {
      question: 'Can Oasis Studio architect scalable cloud solutions for enterprise clients?',
      answer:
        'Yes. Oasis Studio provides enterprise-grade cloud architecture designed for horizontal scalability, high availability, and security compliance, supporting startups and enterprise clients globally.',
    },
  ],
  'video-editing': [
    {
      question: 'What video production services does Oasis Studio provide?',
      answer:
        'Oasis Studio produces game trailers, brand promo reels, social media content, and product demo videos using Premiere Pro and After Effects with professional color grading and motion graphics.',
    },
    {
      question: 'Does Oasis Studio create game launch trailers?',
      answer:
        'Yes. Oasis Studio produces high-energy game launch trailers with VFX overlays, dynamic color grading, custom motion graphics, and sound design for mobile and PC titles on Google Play and Steam.',
    },
    {
      question: 'Can Oasis Studio produce short-form social media content?',
      answer:
        'Yes. Oasis Studio produces short-form videos formatted for Instagram Reels, TikTok, and YouTube Shorts, each optimized to under 30 seconds with platform-native aspect ratios.',
    },
  ],
  'ui-ux-design': [
    {
      question: 'What UI/UX design services does Oasis Studio offer?',
      answer:
        'Oasis Studio offers user research, wireframing, high-fidelity prototyping, and full design systems for web apps, mobile apps, and games using Figma and Adobe XD.',
    },
    {
      question: 'Does Oasis Studio design game user interfaces?',
      answer:
        'Yes. Oasis Studio creates reusable in-game UI frameworks covering HUDs, menus, inventory screens, and dialog flows, prototyped in Figma and implemented directly in Unity.',
    },
    {
      question: 'Does Oasis Studio deliver end-to-end product design for SaaS applications?',
      answer:
        'Yes. Oasis Studio provides complete SaaS product design from user journey mapping and low-fidelity wireframes through to pixel-perfect high-fidelity prototypes validated with user testing.',
    },
  ],
  'graphic-designing': [
    {
      question: 'What graphic design services does Oasis Studio provide?',
      answer:
        'Oasis Studio provides brand identity design, logo creation, marketing materials, social media visuals, and print-ready assets using Adobe Illustrator, Photoshop, and Figma.',
    },
    {
      question: 'Does Oasis Studio create complete brand identity systems?',
      answer:
        'Yes. Oasis Studio designs complete brand identity systems including logo, typography scale, color palette, icon libraries, and Figma design tokens for consistent implementation across all touchpoints.',
    },
    {
      question: 'Can Oasis Studio produce promotional and app store graphics?',
      answer:
        'Yes. Oasis Studio creates promotional graphics, social media banners, app store artwork, and campaign visuals for games, mobile apps, and web products across all major platforms.',
    },
  ],
  '2d-art': [
    {
      question: 'What 2D art services does Oasis Studio provide?',
      answer:
        'Oasis Studio produces concept art, character sheets, sprite atlases, frame-by-frame animations, and Spine-based rigged animations for games, apps, and marketing materials.',
    },
    {
      question: 'Does Oasis Studio create sprite atlases for mobile games?',
      answer:
        'Yes. Oasis Studio produces optimized sprite atlases packed with TexturePacker, covering characters, enemies, UI elements, and tilesets designed to minimize draw calls on mobile hardware.',
    },
    {
      question: 'What 2D tools does Oasis Studio use?',
      answer:
        'Oasis Studio uses Adobe Photoshop, Illustrator, Procreate, and Spine 2D for all 2D art and animation production, delivering assets in formats ready for Unity and Unreal Engine.',
    },
  ],
  '3d-modeling': [
    {
      question: 'What 3D modeling services does Oasis Studio provide?',
      answer:
        'Oasis Studio produces game-ready 3D characters, environment assets, and props with full PBR textures, LOD chains, and rigged skeletons optimized for Unity and Unreal Engine.',
    },
    {
      question: 'Does Oasis Studio create 3D animations and cinematic sequences?',
      answer:
        'Yes. Oasis Studio produces fully animated 3D cinematic sequences rendered in Blender Cycles, composited in After Effects, and integrated into Unity via Cinemachine.',
    },
    {
      question: 'What 3D tools does Oasis Studio use?',
      answer:
        'Oasis Studio uses Blender, Maya, ZBrush, and Substance 3D Painter for all 3D production. Assets are optimized for real-time performance on mobile, PC, and VR/XR platforms.',
    },
  ],
  'testing-qa': [
    {
      question: 'What testing and QA services does Oasis Studio offer?',
      answer:
        'Oasis Studio provides automated and manual QA for web apps, mobile apps, and games using Playwright, Jest, and GitHub Actions for CI/CD-integrated test coverage and reporting.',
    },
    {
      question: 'Does Oasis Studio perform performance and device testing?',
      answer:
        'Yes. Oasis Studio conducts deep performance profiling across CPU, GPU, memory, and network layers on iOS and Android devices using Xcode Instruments, Android Profiler, and k6.',
    },
    {
      question: 'Does Oasis Studio test games before store submission?',
      answer:
        'Yes. Oasis Studio performs full manual and automated QA passes across iOS and Android builds, covering device matrix testing, regression suites, crash reporting, and sign-off before store submission.',
    },
  ],
  'ai-cloud-engineering': [
    {
      question: 'Does Oasis Studio offer combined AI and cloud engineering services?',
      answer:
        'Yes. Oasis Studio provides integrated AI and cloud engineering, combining LLM integration, RAG pipelines, and AWS-hosted scalable infrastructure for enterprise AI product delivery.',
    },
    {
      question: 'What AI tools does Oasis Studio use for enterprise projects?',
      answer:
        'Oasis Studio uses OpenAI, Anthropic Claude, AWS Bedrock, and OpenSearch for RAG implementations. The studio has delivered production AI systems for government, legal, and enterprise clients.',
    },
    {
      question: 'Can Oasis Studio handle both AI model integration and cloud deployment?',
      answer:
        'Yes. Oasis Studio manages the full stack from AI model integration and RAG pipeline design to Docker, Kubernetes, and AWS deployment, providing end-to-end enterprise AI infrastructure.',
    },
  ],
}

type StoreLink = {
  platform: 'google-play' | 'steam'
  url: string
}

type Project = {
  id: string
  title: string
  description: string
  // Real projects
  image?: string
  genres?: string[]
  links?: StoreLink[]
  techStack?: string[]
  websiteUrl?: string
  // Placeholder projects
  initials?: string
  category?: string
  client?: string
  tech?: string[]
  accent?: string
}

const PORTFOLIO_DATA: Record<string, Project[]> = {
  'game-development': [
    {
      id: 'gd1',
      image: '/StickeyIcon.jpeg',
      title: 'Stickey',
      genres: ['Multiplayer', '2D', 'Card Game'],
      description:
        'Stickey is a fast-paced multiplayer card game of strategy, bluffing, and risk! Play with friends or compete online as you draw, play, and decide whether to stick or pass. Each round brings new surprises with action cards, combos, and sudden twists. Outsmart opponents, avoid traps, and be the last one standing. Easy to learn but full of depth, Stickey keeps you coming back for more. Will you stick to your plan or fold under pressure? Play now and find out!',
      links: [
        {
          platform: 'google-play',
          url: 'https://play.google.com/store/apps/details?id=com.omgc.stickey.cardgame&hl=en',
        },
      ],
    },
    {
      id: 'gd2',
      image: '/OrganizerProIcon.png',
      title: 'Organizer Pro',
      genres: ['Puzzle', 'Sorting', '3D'],
      description:
        'Organizer Pro is a casual decluttering and organizational game with over 15,000 objects to organize. No rules or time limits, just pure arranging and satisfying before-and-after transformations. Approximately 30 total hours of playtime.',
      links: [
        {
          platform: 'steam',
          url: 'https://store.steampowered.com/app/4378250/Organizer_Pro/',
        },
      ],
    },
  ],
  'web-development': [
    {
      id: 'wd3',
      title: 'ScoreHub App',
      techStack: ['Next.js', 'Nest.js', 'Postgres', 'AWS', 'Mailgun', 'Sportsmonk', 'Stripe', 'Jira', 'Google Analytics'],
      description:
        'A dynamic and scalable sports management platform featuring live scoring updates, real-time data integration via Sportsmonk, and secure payment processing.',
      websiteUrl: 'https://scorehubapp.com/',
    },
    {
      id: 'wd4',
      title: "Let's Padel",
      techStack: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS', 'Vercel', 'Resend', 'Filestack', 'Stripe', 'Google Analytics'],
      description:
        'A dedicated community and booking application for Padel tennis enthusiasts, featuring streamlined court reservations and integrated automated communication.',
      websiteUrl: 'https://www.lets-padel.com/',
    },
    {
      id: 'wd5',
      title: 'Careflair',
      techStack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Digital Ocean', 'Redis', 'Sendgrid'],
      description:
        'A robust healthcare and service booking application built to connect users with essential support services seamlessly and securely.',
      websiteUrl: 'https://careflair.com.au/',
    },
    {
      id: 'wd6',
      title: 'GetZeuss',
      techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', '29Next', 'Mailchimp', 'Microsoft Azure'],
      description:
        'A high-performance modern web platform optimized for user engagement, rapid content delivery, and seamless third-party marketing integrations.',
      websiteUrl: 'https://getzeuss.com/',
    },
    {
      id: 'wd8',
      title: 'On The Felt',
      techStack: ['Node.js', 'React', 'Vite', 'TypeScript', 'PostgreSQL', 'Supabase Auth', 'Stripe', 'Resend', 'MailerLite', 'Tailwind CSS'],
      description:
        'A specialized, lightning-fast application for managing poker tournaments, tracking player statistics, and handling secure authentications via Supabase.',
      websiteUrl: 'https://onthefelt.app/',
    },
  ],
  'app-development': [
    {
      id: 'apd1',
      image: '/APD1.webp',
      title: 'Vault: Hide Photos & Videos',
      description:
        'Protect your privacy with Vault: Hide Photos & Videos, a powerful photo vault app designed to hide photos, hide videos, and hide files safely using a secure 3dev vault system. If you are looking for a reliable photo vault to keep your data safe, this app is the perfect choice. Your hidden data stays protected and can only be accessed by you.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.applockpro.photovault.password.locker' }],
    },
    {
      id: 'apd2',
      image: '/APD2.webp',
      title: 'All Language Translator',
      description:
        'A fast and easy translation app that helps you translate text, voice, and images in multiple languages. Translate words and sentences instantly using powerful voice translation and smart text features. Just type, speak, or scan text with the built in OCR scanner to get quick and accurate translations. Perfect for students, travelers, and business communication.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threedev.android.apps.translate.voice.translator.languagetranslator' }],
    },
    {
      id: 'apd3',
      image: '/APD3.webp',
      title: 'Mind Guess: Fun Hub Center',
      description:
        'Pick between two options, swipe to keep it, and see where your mind takes you! Test your brain by guessing popular logos and everyday objects. You can also play Animal Face Guess for laughs and group fun. Simple, smart, and addictive.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threedevtech.Guess.fun.challenge' }],
    },
    {
      id: 'apd4',
      image: '/APD4.webp',
      title: 'Smart Car Connection',
      description:
        'Connect your phone to your car wirelessly with ease. No cables needed, experience smooth and fast pairing. Compatible with most modern car systems. Drive smarter and stay connected on the go.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.carplay.car.connect.android.carscreen.smartmirror' }],
    },
    {
      id: 'apd5',
      image: '/APD5.webp',
      title: 'PDF Scanner & File Manager',
      description:
        'Transform the way you manage documents. This powerful app allows you to scan, organize, lock, unlock, merge, split, and convert images to PDF all in one place. Perfect for professionals, students, and anyone who needs an efficient document solution.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threedevtech.pdf.scanner.reader.all.documents' }],
    },
    {
      id: 'apd6',
      image: '/APD6.webp',
      title: '3Dev Wireless Printer And Scan',
      description:
        'A wireless printer app to print your documents directly from your mobile device. This all in one solution supports high quality document and photo printing, advanced PDF scanning, and printing directly from files, web pages, or your clipboard.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threedevtech.document.printer.print.scan.photo' }],
    },
    {
      id: 'apd7',
      image: '/APD7.webp',
      title: 'Clap & Whistle Phone Finder',
      description:
        'Lost your phone again? This is a smart and powerful phone finder app that helps you quickly locate your device using a clap sound, whistle sound, or your own voice command. Works even when your phone is on silent mode, featuring loud alarms, flashlight, and vibration.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.find.my.phone.device.antitheft.phonelocate' }],
    },
    {
      id: 'apd8',
      image: '/APD8.webp',
      title: 'Background Eraser Photo Editor',
      description:
        'Designed for everyone from beginners to professionals who want to remove backgrounds from their photos, enhance images with clean cutouts, or create eye catching collages. Transform ordinary pictures into polished masterpieces effortlessly.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.bg.remover.android.background.eraser.editor' }],
    },
    {
      id: 'apd9',
      image: '/APD9.webp',
      title: 'Crazy QR Code Scanner',
      description:
        'Simplify your digital life with this ultimate tool for scanning, generating, and managing QR codes and PDFs. Combines advanced functionality with a user friendly design to meet all your scanning and document needs.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threeDev.qr.code.scanner.barcode.scan' }],
    },
    {
      id: 'apd10',
      image: '/APD10.webp',
      title: 'Photo Editing App',
      description:
        'Your ultimate tool for transforming images into stunning visuals. Apply a variety of filters, add fun elements like stickers and text, and draw shapes to highlight specific parts of your picture. Ideal for creating social media content or unique visuals.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.litephotoeditor.photolab.top.apps.collagemaker' }],
    },
    {
      id: 'apd11',
      image: '/APD11.webp',
      title: 'Gym Workout & Fitness Planner',
      description:
        'Transform your daily fitness routine with your all in one workout partner. Whether you are a beginner or an expert, this app gives you personalized tools and smart workout features. Track your progress with active streaks and detailed history to stay consistent.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.homeworkoutmate.dailyfitnessapp.gymexercise' }],
    },
    {
      id: 'apd12',
      image: '/APD12.webp',
      title: 'Photo Editor: Photo lab',
      description:
        'The ultimate photo editing app for Android users who love to add filters and make photo collages. Packed with tools to crop, rotate, resize, and retouch photos with professional effects. Gives you full creative control over your images.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.pics.studio.photo.editor.lab' }],
    },
    {
      id: 'apd13',
      image: '/APD13.webp',
      title: 'Quran for You: القرأن الكريم',
      description:
        'A comprehensive Islamic application designed to fulfill your daily spiritual needs. Features include the complete Holy Quran with multi-language translations, accurate prayer timings, a precise Qibla compass, a digital Tasbeeh counter, a Zakat calculator, and a vast collection of daily Duas.',
      links: [{ platform: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.threedev.quran.muslim.pro.offline' }],
    },
  ],
  'ai-cloud-engineering': [
    {
      id: 'ai1',
      title: 'Vonza',
      techStack: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Mandrill', 'Mailchimp', 'Filestack', 'Stripe', 'Jira', 'OVH', 'Google Analytics', 'ConvertKit'],
      description:
        'A comprehensive all-in-one platform empowering creators and entrepreneurs to seamlessly build, manage, and sell online courses, products, and memberships.',
      websiteUrl: 'https://vonza.com/',
    },
    {
      id: 'ai2',
      title: 'GovDoc.ai',
      techStack: ['Next.js', 'Nest.js', 'MongoDB', 'AWS', 'Opensearch', 'RAG', 'Mailgun', 'Stripe', 'AWS Bedrock', 'Scrapper API'],
      description:
        'An advanced AI-powered intelligence platform utilizing Retrieval-Augmented Generation (RAG) and AWS Bedrock to instantly search, analyze, and process complex government documents.',
      websiteUrl: 'https://govdoc.ai/',
    },
    {
      id: 'ai3',
      title: 'Cuts Like A Knife',
      techStack: ['Next.js', 'Nest.js', 'Postgres', 'AWS', 'Mailgun', 'AI/ML', 'RAG', 'OpenSearch', 'Stripe', 'OpenAI', 'Claude'],
      description:
        'An innovative AI-driven application leveraging OpenSearch, Claude, and OpenAI to provide intelligent, context-aware data retrieval and powerful automation features.',
      websiteUrl: 'https://qa.cutslikeaknife.net/',
    },
  ],
  'ui-ux-design': [
    {
      id: 'ux1',
      initials: 'BI',
      title: 'Brand Identity System',
      category: 'Branding / UI',
      client: 'Tech Startup',
      tech: ['Figma', 'Illustrator', 'Principle'],
      accent: '#FF6B9D',
      description:
        'A complete brand identity system including logo design, typography scale, color system, icon library, and a full Figma design token structure.',
    },
    {
      id: 'ux2',
      initials: 'GM',
      title: 'Game UI Framework',
      category: 'Game UI',
      client: 'Multiple Clients',
      tech: ['Figma', 'Unity UI Toolkit', 'Adobe XD'],
      accent: '#E63946',
      description:
        'A reusable in-game UI design system covering HUDs, menus, inventory screens, and dialog flows. Prototyped in Figma and implemented directly in Unity.',
    },
    {
      id: 'ux3',
      initials: 'DP',
      title: 'SaaS Dashboard Design',
      category: 'Product Design',
      client: 'B2B Startup',
      tech: ['Figma', 'Maze', 'Zeplin'],
      accent: '#2ED573',
      description:
        'End-to-end product design for a B2B SaaS platform, from user journey mapping and low-fi wireframes to a pixel-perfect high-fidelity prototype.',
    },
  ],
  '3d-modeling': [
    {
      id: '3d1',
      initials: 'CM',
      title: 'Character Model Pack',
      category: '3D Characters',
      client: 'RPG Game Studio',
      tech: ['Blender', 'ZBrush', 'Substance 3D'],
      accent: '#FD9644',
      description:
        'A set of game-ready hero and NPC characters with full PBR texture maps, LOD chains, and rigged skeletons ready for Unity and Unreal Engine.',
    },
    {
      id: '3d2',
      initials: 'EV',
      title: 'Environment Asset Pack',
      category: '3D Environments',
      client: 'Indie Game Dev',
      tech: ['Maya', 'Blender', 'Substance 3D'],
      accent: '#4F9CF9',
      description:
        'A modular environment art pack covering buildings, props, foliage, and terrain, optimised for mobile with LODs, atlased textures, and occlusion culling support.',
    },
    {
      id: '3d3',
      initials: 'CS',
      title: 'Cinematic Cutscene',
      category: '3D Animation',
      client: 'Dorn Bros Entertainment',
      tech: ['Blender', 'After Effects', 'Unity Cinemachine'],
      accent: '#A29BFE',
      description:
        'A fully animated 3D cinematic opening sequence, lit and rendered with Cycles and composited in After Effects before being integrated into Unity via Cinemachine.',
    },
  ],
  '2d-art': [
    {
      id: '2d1',
      initials: 'SA',
      title: 'Sprite Atlas Package',
      category: '2D Game Art',
      client: 'Mobile Game Studio',
      tech: ['Photoshop', 'Illustrator', 'TexturePacker'],
      accent: '#E63946',
      description:
        'A complete sprite atlas for a mobile game, covering characters, enemies, UI elements, and tilesets. Optimised for draw calls and packed with TexturePacker.',
    },
    {
      id: '2d2',
      initials: 'CA',
      title: 'Concept Art Series',
      category: 'Concept Art',
      client: 'Indie RPG Dev',
      tech: ['Procreate', 'Photoshop'],
      accent: '#FF6B9D',
      description:
        'A series of high-detail concept paintings including character designs, environment keys, and mood boards, used as the visual bible for a fantasy RPG production.',
    },
    {
      id: '2d3',
      initials: 'RA',
      title: 'Spine Rigged Animation',
      category: '2D Animation',
      client: 'Game Startup',
      tech: ['Spine', 'Photoshop', 'Unity'],
      accent: '#2ED573',
      description:
        'Full character animation pipeline using Spine 2D: rig setup, walk/run/attack cycles, hit reactions, and Unity integration with a runtime controller.',
    },
  ],
  'testing-qa': [
    {
      id: 'qa1',
      initials: 'AT',
      title: 'Automated Test Suite',
      category: 'Test Automation',
      client: 'SaaS Platform',
      tech: ['Playwright', 'Jest', 'GitHub Actions'],
      accent: '#4F9CF9',
      description:
        'A comprehensive automated test suite covering unit, integration, and end-to-end flows, wired into CI/CD via GitHub Actions with full coverage reporting.',
    },
    {
      id: 'qa2',
      initials: 'GP',
      title: 'Game QA Campaign',
      category: 'Manual QA',
      client: 'Panel Pro / Karen',
      tech: ['Unity Test Framework', 'TestFlight', 'Google Play Console'],
      accent: '#E63946',
      description:
        'Full manual and automated QA pass across iOS and Android builds, covering device matrix testing, regression suites, crash reporting, and sign-off before launch.',
    },
    {
      id: 'qa3',
      initials: 'PA',
      title: 'Performance Audit',
      category: 'Performance Testing',
      client: 'Mobile App Client',
      tech: ['Xcode Instruments', 'Android Profiler', 'k6'],
      accent: '#2ED573',
      description:
        'Deep-dive performance profiling across CPU, GPU, memory, and network layers. Every bottleneck was identified and resolved before submission to the app stores.',
    },
  ],
  'video-editing': [
    {
      id: 've1',
      initials: 'GT',
      title: 'Game Launch Trailer',
      category: 'Game Trailer',
      client: 'Indie Game Studio',
      tech: ['Premiere Pro', 'After Effects', 'Color Grading'],
      accent: '#E63946',
      description:
        'A high-energy 90-second game launch trailer with motion graphics, VFX overlays, dynamic colour grading, and a custom sound design mix.',
    },
    {
      id: 've2',
      initials: 'BR',
      title: 'Brand Promo Reel',
      category: 'Brand Video',
      client: 'Tech Startup',
      tech: ['Premiere Pro', 'After Effects', 'Motion Graphics'],
      accent: '#A29BFE',
      description:
        "A polished 60-second brand reel showcasing the client's product and team culture, built with kinetic typography, custom motion graphics, and licensed music.",
    },
    {
      id: 've3',
      initials: 'SC',
      title: 'Social Content Series',
      category: 'Social Media',
      client: 'E-Commerce Brand',
      tech: ['Premiere Pro', 'After Effects', 'Adobe Express'],
      accent: '#2ED573',
      description:
        'A 12-piece short-form video series formatted for Instagram Reels, TikTok, and YouTube Shorts. Each video is cut to under 30 seconds with platform-native ratios.',
    },
  ],
}

// ─── Store button icons ────────────────────────────────────────────────────────

function GooglePlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M3.18 23.76a2 2 0 01-.99-.27C1.45 23.07 1 22.28 1 21.4V2.6C1 1.72 1.45.93 2.19.51a2 2 0 012.04.07l16.5 9.4c.74.42 1.19 1.2 1.19 2.02s-.45 1.6-1.19 2.02l-16.5 9.4c-.33.19-.69.28-1.05.28zm.82-20.2v16.88L19.36 12 4 3.56z" />
    </svg>
  )
}

function SteamIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const STORE_LABELS: Record<string, string> = {
  'google-play': 'Google Play',
  steam: 'Steam',
}

const BTN_CLASS =
  'flex items-center justify-center gap-2 px-6 py-3 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] hover:-translate-y-1 transition-all w-44 font-semibold'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const title = TITLE_MAP[slug]
  if (!title) notFound()

  const projects = PORTFOLIO_DATA[slug] ?? []
  const faqs = SERVICE_FAQS[slug] ?? []
  const pageTitle = `${title} Portfolio | Oasis Studio`
  const pageDescription = `A curated selection of Oasis Studio ${title.toLowerCase()} projects, from initial concept through to final delivery.`
  const pageUrl = `https://oasisstudio.io/services/${slug}`

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <FaqPageJsonLd faqs={faqs} pageTitle={pageTitle} pageDescription={pageDescription} pageUrl={pageUrl} />

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <div className="text-2xl font-black tracking-widest">
              <span className="text-[#E63946]">OASIS</span><span className="text-white">STUDIO</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/#services"
              className="hidden md:inline text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              All Services
            </Link>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-[#E63946] hover:bg-red-700 text-white transition-colors duration-200 shrink-0"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      </header>

      <main>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#E63946] transition-colors duration-200 mb-8 font-semibold tracking-widest uppercase"
          >
            <span aria-hidden="true">&#8592;</span> Back to Home
          </Link>

          <p className="text-[#E63946] text-xs font-bold tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            {title}
            <br />
            <span className="text-[#E63946]">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
            A curated selection of our {title.toLowerCase()} projects, from
            initial concept through to final delivery.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROJECTS GRID
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {slug === 'ai-cloud-engineering' ? (
            /* ── AI & Cloud Engineering: text-only cards ── */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-[#1e293b] p-6 md:p-8 rounded-xl flex flex-col h-full border border-gray-800 shadow-lg hover:border-gray-600 transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-[#E63946] transition-colors duration-300">
                    {project.title}
                  </h2>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-900 text-gray-300 rounded-full px-2.5 py-1 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {project.websiteUrl && (
                    <div className="mt-auto">
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={BTN_CLASS}
                      >
                        <ExternalLinkIcon />
                        Visit Website
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : slug === '3d-modeling' ? (
            <ThreeDGallery />
          ) : slug === 'ui-ux-design' ? (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">UI/UX Design Portfolio</h2>
              <UIUXGallery />
            </div>
          ) : slug === 'app-development' ? (
            /* ── App Development: icon + description cards ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-[#1E1E1E] rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col p-7"
                >
                  {/* App icon */}
                  {project.image && (
                    <AppIconImage src={project.image} alt={project.title} />
                  )}

                  {/* Title */}
                  <h2 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#E63946] transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>

                  {/* Google Play button */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.links.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={BTN_CLASS}
                        >
                          <GooglePlayIcon />
                          {STORE_LABELS[link.platform]}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : slug === 'web-development' ? (
            /* ── Web Development: text-only cards ── */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-[#1e293b] p-6 md:p-8 rounded-xl flex flex-col h-full border border-gray-800 shadow-lg hover:border-gray-600 transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-[#E63946] transition-colors duration-300">
                    {project.title}
                  </h2>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-900 text-gray-300 rounded-full px-2.5 py-1 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {project.websiteUrl && (
                    <div className="mt-auto">
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={BTN_CLASS}
                      >
                        <ExternalLinkIcon />
                        Visit Website
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-500 py-16">Projects coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) =>
                project.image ? (
                  /* ── Real project card (game dev etc.) ── */
                  <article
                    key={project.id}
                    className="group bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full aspect-square overflow-hidden bg-[#161616]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[#E63946] transition-colors duration-300">
                        {project.title}
                      </h2>

                      {project.genres && project.genres.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.genres.map((genre) => (
                            <span
                              key={genre}
                              className="text-xs px-3 py-1 rounded-full bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20 font-semibold"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                        {project.description}
                      </p>

                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-auto">
                          {project.links.map((link) => (
                            <a
                              key={link.platform}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={BTN_CLASS}
                            >
                              {link.platform === 'google-play' ? <GooglePlayIcon /> : <SteamIcon />}
                              {STORE_LABELS[link.platform]}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  /* ── Placeholder card (other slugs) ── */
                  <article
                    key={project.id}
                    className="group bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300"
                  >
                    <div
                      className="h-52 flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: `${project.accent}12` }}
                    >
                      <span
                        className="text-8xl font-black select-none group-hover:scale-110 transition-transform duration-500"
                        style={{ color: `${project.accent}40` }}
                      >
                        {project.initials}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/60 to-transparent" />
                      {project.category && (
                        <span
                          className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white/80 border border-white/10"
                          style={{ backgroundColor: `${project.accent}25` }}
                        >
                          {project.category}
                        </span>
                      )}
                    </div>

                    <div className="p-7">
                      <h2 className="text-xl font-bold mb-1 group-hover:text-[#E63946] transition-colors duration-300">
                        {project.title}
                      </h2>
                      {project.client && (
                        <p className="text-gray-500 text-xs mb-4">{project.client}</p>
                      )}
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          )}

          {/* Bottom back link */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-[#E63946]/40 text-gray-300 hover:text-[#E63946] text-sm font-semibold rounded-full transition-all duration-200"
            >
              <span aria-hidden="true">&#8592;</span> Back to Home
            </Link>
          </div>

        </div>
      </section>

      </main>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>&#169; {new Date().getFullYear()} All rights reserved.</span>
          <a href="mailto:admin@oasisstudio.org" className="hover:text-gray-400 transition-colors duration-200">
            admin@oasisstudio.org
          </a>
        </div>
      </footer>

    </div>
  )
}
