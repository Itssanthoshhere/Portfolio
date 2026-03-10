import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import hvfPreview from "@/assets/hvf-preview.mp4";
import hvfThumbnail from "@/assets/hvf-project.jpg";
import rdyepreview from "@/assets/rdye-preview.mp4";
import foodreview from "@/assets/food-preview.mp4";
import sweetThumbnail from "@/assets/sweetThumbnail.png";
import fizzi from "@/assets/fizzi-preview.mp4";
import fizziThumbnail from "@/assets/fizzi-thumbnail.png";
import flavorapreview from "@/assets/flavora-preview.mp4";
import flavoraThumbnail from "@/assets/flavora-thumbnail.png";
import sweetbitepreview from "@/assets/sweetPreview2.mp4";
import restate from "@/assets/real-estate.mp4";
import velvetPourPreview from "@/assets/velvetPourPreview.mp4";
import velvetThumbnail from "@/assets/velvet-thumbnail.png";
import flexHavenPreview from "@/assets/flexHavenPreview.mp4";
import flexThumbnail from "@/assets/flexHaven-thumbnail.png";
import suburbiaPreview from "@/assets/suburbiaPreview.mp4";
import suburbiaThumbnail from "@/assets/suburbia-thumbnail.png";
import nikePreview from "@/assets/nikePreview.mp4";
import nikeThumbnail from "@/assets/nikeThumbnail.png";
import pastryPreview from "@/assets/pastryPreview.mp4";
import pastryThumbnail from "@/assets/pastryThumbnail.png";
import spicyPreview from "@/assets/spicyPreview.mp4";
import spicyThumbnail from "@/assets/spicy-thumbnail.png";
import cozynestPreview from "@/assets/cozynestPreview.mp4";
import cozynestThumbnail from "@/assets/cozynest-thumbnail.png";
import brewblissPreview from "@/assets/brewblissPreview.mp4";
import brewblissThumbnail from "@/assets/brewblissThumbnail.png";
import k72Preview from "@/assets/k72Preview.mp4";
import k72Thumbnail from "@/assets/k72Thumbail.jpg";
import chugPreview from "@/assets/chugPreview.mp4";
import chugThumbnail from "@/assets/chugThumbnail.png";
import nimbusPreview from "@/assets/nimbusPreview.mp4";
import nimbusThumbnail from "@/assets/nimbusThumbnail.jpg";
import beePreview from "@/assets/beePreview.mp4";
import beeThumbnail from "@/assets/beeThumbnail.png";
import rayvePreview from "@/assets/rayvePreview.mp4";
import rayveThumbnail from "@/assets/rayveThumbnail.png";
import magmaPreview from "@/assets/magmaPreview.mp4";
import magmaThumbnail from "@/assets/magmaThumbnail.jpg";
import cinemaPreview from "@/assets/cinemaPreview.mp4";
import cinemaThumbnail from "@/assets/cinemaThumbnail.png";
import chessPreview from "@/assets/ChessPreview.mp4";
import chessThumbnail from "@/assets/chessThumbnail.png";
import quickshowPreview from "@/assets/quickshowPreview.mp4";
import quickshowThumbnail from "@/assets/quickshowThumbnail.png";
import bubblyPreview from "@/assets/bubblyPreview.mp4";
import bubblyThumbnail from "@/assets/bubblyThumbnail.png";
import figProPreview from "@/assets/figProPreview.mp4";
import figProThumbnail from "@/assets/figProThumbnail.jpg";
import conversoPreview from "@/assets/conversoPreview.mp4";
import conversoThumbnail from "@/assets/conversoThumbnail.png";
import waveCastPreview from "@/assets/wavecastPreview.mp4";
import waveCastThumbnail from "@/assets/wavecastThumbnail.png";
// import expoCommercePreview from "@/assets/expoCommercePreview.mp4";
import expoCommercePreview from "@/assets/Timeline 1.mov";
import expoCommerceThumbnail from "@/assets/expoCommerceThumbnail.png";

const projects = [
  {
    title: "🎬 QuickShow – Full Stack Movie Theater Booking Platform",
    description:
      "A modern movie booking platform built with React, Node.js, Express, and MongoDB. Features real-time seat booking, secure payments via Stripe, and an advanced admin dashboard for theater management.",
    longDescription:
      "QuickShow is a full-stack movie theater booking application designed to deliver a seamless and interactive experience for both users and admins. Built with React, Node.js, Express, and MongoDB, it enables users to browse movies, book seats in real-time, and complete payments securely using Stripe. The platform includes Clerk-based authentication, Cloudinary-powered media storage, and an automated workflow system via Inngest. Admins can efficiently manage shows, movies, and analytics through a dedicated dashboard. QuickShow provides a scalable, production-ready solution for digital ticketing and theater operations.",
    video: quickshowPreview, // MP4 video preview path (if available)
    image: quickshowThumbnail, // fallback thumbnail image path
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Clerk Auth",
      "Cloudinary",
      "Inngest",
      "Nodemailer",
      "Tailwind CSS 4",
      "Axios",
      "Lucide React",
    ],
    features: [
      "🎟️ Real-time seat booking with dynamic layouts",
      "💳 Secure payments powered by Stripe",
      "👥 User authentication and profiles via Clerk",
      "🧑‍💼 Admin dashboard for movie and show management",
      "🎬 Movie catalog with trailers and details",
      "📧 Automated email confirmations using Nodemailer",
      "☁️ Cloud-based media management with Cloudinary",
      "📊 Analytics and background workflows via Inngest",
      "📱 Responsive and accessible design",
      "⚙️ Modular backend with structured APIs",
    ],
    githubUrl:
      "https://github.com/Itssanthoshhere/QuickShow-Movie-Theater-Booking-Platform",
    liveUrl: "https://quick-show-ticketbooking.vercel.app/",
    duration: "October 2025",
    category: "Full-Stack Web App",
  },

  {
    title: "HVF e-Leave Portal – React Edition",
    description:
      "Web-based leave management system developed during In-Plant Training at HVF, Avadi. Built with React, TypeScript, Tailwind CSS, and Vite with modular component structure and reusable hooks.",
    longDescription:
      "A comprehensive leave management system designed for government sector use at Heavy Vehicles Factory (HVF), Avadi. Features secure authentication, role-based access control, leave tracking, and administrative approval workflows.",
    video: hvfPreview,
    image: hvfThumbnail,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
    features: [
      "Secure user authentication and role-based access",
      "Comprehensive leave tracking and management",
      "Administrative approval workflows",
      "Real-time notifications and status updates",
      "Responsive design for all devices",
      "Modular component architecture",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/HVF-e-Leave-Portal",
    liveUrl: "https://hvf-e-leave-portal.vercel.app/",
    duration: "June 2025",
    category: "Full-Stack Application",
  },

  {
    title: "Velvet Pour 🍹 – Stunning GSAP Cocktail Website",
    description:
      "A scroll-driven, animated cocktail website built with React, GSAP, and Tailwind CSS. Features SplitText reveals, ScrollTrigger timelines, pinned sections, parallax scrolling, scroll-synced videos, image masking, and custom carousels.",
    longDescription:
      "Velvet Pour is a modern, interactive cocktail website built with React, GSAP, and Tailwind CSS. The project leverages advanced scroll-driven animations like SplitText reveals, ScrollTrigger timelines, pinned sections, parallax scrolling, scroll-synced video playback, image masking, and a fully customized carousel. Designed with responsive layouts and modular React components, it delivers a polished, cinematic, and immersive user experience. Ideal for exploring advanced GSAP animations and creating smooth, visually striking web interactions.",
    video: velvetPourPreview,
    image: velvetThumbnail,
    technologies: [
      "React",
      "GSAP",
      "Tailwind CSS",
      "Vite",
      "SplitText",
      "ScrollTrigger",
      "Parallax Scrolling",
      "Pinned Sections",
      "Scroll-Synced Video",
      "Custom Carousel",
    ],
    features: [
      "Dynamic SplitText text reveals for bold section intros",
      "ScrollTrigger-powered timeline animations and effects",
      "Smooth parallax scrolling for immersive depth",
      "Pinned sections for interactive storytelling",
      "Scroll-synced video playback for cinematic impact",
      "Scroll-based image masking for striking transitions",
      "Fully custom animated carousel with multiple navigation options",
      "Seamless multi-section animation timelines",
      "Responsive UI across all screen sizes",
      "Optimized performance for videos and animations",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Velvet-Pour",
    liveUrl: "https://velvet-pour-cocktail.vercel.app/",
    figmaUrl:
      "https://www.figma.com/design/LVdc2zP8j8ZEd4agVV0JVJ/Cocktail-GSAP-Website?node-id=2-2&t=7umyEDJMvJ1iyxmr-1",
    duration: "August 2025",
    category: "Frontend Website",
  },

  {
    title: "Converso 🎓 – AI-Powered LMS SaaS Platform",
    description:
      "An AI-driven Learning Management System built with Next.js, Supabase, Clerk, and Vapi. Enables real-time voice-based learning, subscriptions, bookmarks, and session tracking.",
    longDescription:
      "Converso is a modern, full-stack SaaS Learning Management System designed to transform how users learn through real-time AI voice conversations. Built with Next.js App Router and TypeScript, it integrates Supabase for PostgreSQL-backed data handling, Clerk for authentication and subscription management, Stripe for billing, and Vapi AI for low-latency speech-to-speech tutoring. Users can create personalized AI companions, talk to them via voice, bookmark favorites, track learning history, and unlock premium features through subscriptions. This project demonstrates production-ready SaaS architecture with secure server actions, feature gating, scalable design, and real-world AI integration.",
    video: conversoPreview,
    image: conversoThumbnail,
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Clerk Auth",
      "Stripe",
      "Vapi AI",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
      "Sentry",
    ],
    features: [
      "Real-time AI voice tutoring with speech-to-speech interaction",
      "Create and manage personalized AI companions",
      "Secure authentication and subscriptions with Clerk",
      "Feature-based access and plan limits",
      "Stripe-powered subscription billing",
      "Bookmark favorite companions",
      "Track session history and learning progress",
      "User dashboard with activity insights",
      "Scalable SaaS architecture using server actions",
      "Responsive and modern UI with Tailwind CSS",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/lms-saas-app",
    liveUrl: "https://lms-saas-app-coral.vercel.app/",
    duration: "Nov 2025",
    category: "Full-Stack SaaS Application",
  },

  {
    title: "WaveCast 🎧 – Modern Podcast Platform",
    description:
      "A modern podcast discovery platform built with Next.js App Router. Explore podcast episodes, blogs, hosts, pricing plans, and FAQs in a clean, scalable UI.",
    longDescription:
      "WaveCast is a fully responsive, production-ready podcast platform built using Next.js App Router, React 19, TypeScript, and Tailwind CSS. It allows users to browse podcast episodes, read blogs, explore hosts, manage favorites, view pricing plans, and interact with FAQ sections. Designed with scalability in mind, WaveCast features clean architecture, reusable components, client-server rendering separation, and smooth UX—making it ready for backend APIs, authentication, and audio player integration.",
    video: waveCastPreview,
    image: waveCastThumbnail,
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Swiper.js",
      "react-hot-toast",
      "LocalStorage",
      "next/font",
    ],
    features: [
      "Podcast episode listing with search and sorting",
      "Favorite episodes using localStorage",
      "Blog system with categories and dynamic routes",
      "Host profiles with social interactions",
      "Pricing plans with monthly/yearly toggle",
      "Accordion-based FAQ section",
      "Global layout system with ClientWrapper",
      "Custom 404 page handling",
      "Fully responsive modern UI",
      "Scalable frontend architecture ready for backend integration",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/WaveCast-Podcast",
    liveUrl: "https://wave-cast-podcast.vercel.app/",
    duration: "January 2026",
    category: "Frontend Web Application",
  },

  {
    title: "ExpoCommerce 🛒 – Full Stack Mobile E-Commerce Platform",
    description:
      "A production-style full-stack e-commerce platform with a React Native mobile app, admin dashboard, and REST API backend. Built with Expo, Node.js, MongoDB, Stripe, and Cloudinary.",
    longDescription:
      "ExpoCommerce is a complete full-stack e-commerce platform consisting of a customer mobile application, an admin dashboard, and a scalable REST API backend. The mobile app is built using React Native with Expo and NativeWind for a smooth cross-platform UI. The backend is powered by Node.js, Express, and MongoDB with secure authentication via Clerk. Stripe handles payments while Cloudinary manages product images. The platform includes product browsing, cart management, wishlist, order tracking, product reviews, and secure checkout. Admins can manage products, customers, orders, and analytics through a dedicated dashboard. The architecture is designed to be production-ready, scalable, and modular.",
    video: expoCommercePreview, // MP4 video preview path
    image: expoCommerceThumbnail, // fallback image if video isn't available
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind (Tailwind CSS)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "Clerk Auth",
      "TanStack React Query",
      "Inngest",
    ],
    features: [
      "Customer mobile app with product browsing and cart",
      "Wishlist and order history management",
      "Secure authentication using Clerk (Google & Apple login)",
      "Stripe payment integration with Payment Sheet",
      "Admin dashboard for product, order, and customer management",
      "Cloudinary image uploads for product media",
      "REST API backend with scalable Express architecture",
      "Background jobs using Inngest",
      "Address management and order tracking",
      "Product reviews and ratings system",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Expo-Ecommerce",
    // liveUrl: "", // mobile app demo or Expo link if available
    duration: "December 2025",
    category: "Full-Stack Mobile Application",
  },

  {
    title: "Fizzi🥤 – A 3D Soda Can Web Experience",
    description:
      "Interactive 3D soda can animation website built with React Three Fiber, Next.js App Router, and Prismic CMS. A fun, fizzy, and fully responsive splash experience for products or portfolios.",
    longDescription:
      "Fizzi 🥤 is a visually immersive 3D soda can experience built with React Three Fiber and powered by Prismic CMS. Designed as a creative product splash or personal branding demo, it features animated UI, custom SVGs, and CMS-editable content. Leveraging Next.js App Router, the site delivers seamless routing, responsiveness, and performance — all wrapped in fizzy visual delight.",
    video: fizzi,
    image: fizziThumbnail,
    technologies: [
      "React Three Fiber",
      "Next.js",
      "Prismic CMS",
      "Tailwind CSS",
      "JavaScript",
      "SVG",
    ],
    features: [
      "3D soda can animations with React Three Fiber",
      "CMS-powered content via Prismic",
      "Next.js App Router for fast routing and rendering",
      "Animated UI and custom SVG graphics",
      "Fully responsive and mobile-friendly layout",
      "Perfect as a product splash or creative portfolio intro",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Fizzi",
    liveUrl: "https://fizzi-soda-for-gusty-people.vercel.app/",
    duration: "July 2025",
    category: "3D Web Experience",
  },

  {
    title: "🛹 Suburbia Skate – Interactive 3D Skateboard Website",
    description:
      "A modern, interactive skateboard website with 3D animations using Next.js 15, TailwindCSS, Prismic CMS, and React Three Fiber. Built step by step with Slice Machine and GSAP for smooth animations.",
    longDescription:
      "Suburbia Skate is an interactive skateboard website showcasing products and 3D experiences using React Three Fiber. Users can explore products, view 3D skateboards, and interact with animations powered by GSAP. The site is powered by Next.js 15, TailwindCSS, and Prismic CMS for easy content management, featuring modular components, smooth animations, and fully responsive design.",
    video: suburbiaPreview,
    image: suburbiaThumbnail,
    technologies: [
      "Next.js 15",
      "React 19 (RC)",
      "TypeScript 5",
      "TailwindCSS 3.4",
      "Prismic CMS",
      "React Three Fiber",
      "Drei",
      "Three.js",
      "GSAP",
      "Matter.js",
    ],
    features: [
      "Landing page with animated hero sections",
      "Interactive 3D skateboard models with rotation and floating effects",
      "Dynamic content managed via Prismic CMS",
      "Custom animations powered by GSAP and React Three Fiber",
      "Fully responsive design for desktop, tablet, and mobile",
      "Modular and reusable UI components",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Suburbia-Skate",
    liveUrl: "https://suburbia-skate.vercel.app/",
    duration: "August 2025",
    category: "3D Web Experience",
  },

  {
    title: "🛍️ Nike E-commerce w/ Devin AI",
    description:
      "A full-stack modern eCommerce app featuring product pages, cart & checkout with Stripe, authentication, PostgreSQL/Drizzle ORM backend, Zustand state management, and a clean Tailwind UI. Built collaboratively with Devin AI for seamless development.",
    longDescription:
      "Nike-style E-commerce is a full-stack modern shopping platform built with Next.js 15, TypeScript, and TailwindCSS, featuring a PostgreSQL backend via NeonDB with Drizzle ORM, and secure authentication powered by Better Auth. State management is handled with Zustand, while Stripe ensures smooth checkout flows. Designed with a clean and modular UI, the project was built step by step using Devin AI for AI-assisted development, ensuring scalability, developer productivity, and fast iteration.",
    video: nikePreview,
    image: nikeThumbnail,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Prismic (optional for content)",
      "Better Auth",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Stripe",
      "Zustand",
      "Devin AI",
      "Cursor AI",
    ],
    features: [
      "Landing page with smooth animations and brand showcase",
      "Product listing with filters, sorting, and availability",
      "Product details page with reviews and AI-enhanced descriptions",
      "Shopping cart with Zustand state management",
      "Secure checkout with Stripe integration",
      "Authentication and user management via Better Auth",
      "PostgreSQL database with Drizzle ORM schema",
      "Responsive design for desktop, tablet, and mobile",
      "Modular code architecture with reusable components",
      "Built with Devin AI for AI-assisted software engineering",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nike-Ecommerce",
    liveUrl: "https://nike-ecommerce-black.vercel.app/",
    duration: "August 2025",
    category: "Full-Stack Web App",
  },

  {
    title: "🥛 Chug SPYLT – Awwwards-Inspired Interactive Website",
    description:
      "An immersive interactive website built with React 19, Tailwind CSS v4, and GSAP. Features smooth parallax scrolling, clip-path animations, and Awwwards-style text reveals.",
    longDescription:
      "Chug SPYLT is a stunning interactive web experience inspired by Awwwards’ finest creative projects. Built with React 19, Tailwind CSS v4, and GSAP, it leverages ScrollTrigger and ScrollSmoother for fluid animations, parallax effects, and storytelling-driven layouts. This project showcases advanced animation techniques like layered GSAP timelines, clip-path transitions, and text reveal effects, all wrapped in a responsive and high-performance design. Deployed on Vercel, Chug SPYLT blends creativity, motion design, and technical mastery into one showcase site.",
    video: chugPreview,
    image: chugThumbnail,
    technologies: ["React 19", "Tailwind CSS v4", "GSAP"],
    features: [
      "Parallax scrolling with smooth depth effects",
      "Advanced clip-path animations",
      "ScrollTrigger & ScrollSmoother for dynamic interactions",
      "Awwwards-style text reveal animations",
      "Layered GSAP timelines for immersive storytelling",
      "Fully responsive design optimized for mobile and desktop",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Chug-SPYLT",
    liveUrl: "https://chug-spylt.vercel.app/",
    duration: "September 2025",
    category: "Interactive Website",
  },

  {
    title: "♟️ Real-Time Chess Game – Multiplayer Online Chess",
    description:
      "A real-time multiplayer chess game with drag-and-drop pieces, live updates via Socket.io, board flipping, and move validation using chess.js. Perfect for playing online with friends or spectating games.",
    longDescription:
      "Real-Time Chess Game is an interactive multiplayer chess application built with Node.js, Express, Socket.io, and TailwindCSS. It features drag-and-drop piece movement, real-time board updates for players and spectators, automatic board flipping for black player, and move validation using chess.js. The project emphasizes smooth UI interactions, responsive design, and real-time game synchronization for online chess enthusiasts.",
    video: chessPreview,
    image: chessThumbnail,
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "chess.js",
      "TailwindCSS",
      "JavaScript (ES6+)",
    ],
    features: [
      "Real-time multiplayer chess gameplay",
      "Drag-and-drop piece movement",
      "Spectator mode to watch games live",
      "Automatic board flipping for black player",
      "Move validation using chess.js",
      "Responsive design for desktop and tablet",
      "Customizable board size and styling",
      "Live board updates for all connected clients",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Real-Time-Chess-Game",
    liveUrl: "", // Add live demo URL if deployed
    duration: "September 2025",
    category: "Full-Stack Web App",
  },

  {
    title: "💬 Bubbly ChatApp – Real-Time Messaging App",
    description:
      "A full-stack real-time chat application built with React Native (Expo), Node.js, Express, and MongoDB. Features secure authentication, live chat powered by Socket.IO, and a modern responsive UI using NativeWind.",
    longDescription:
      "Bubbly ChatApp is a real-time, full-stack chat application inspired by WhatsApp and Messenger. Built with React Native (Expo) and TypeScript for the frontend, and Node.js, Express, and MongoDB for the backend, it delivers secure authentication, live messaging via Socket.IO, and a smooth, modern chat experience. The app features a clean and scalable architecture with reusable UI components, profile management, and fast real-time updates, all styled using NativeWind (TailwindCSS for React Native).",
    video: bubblyPreview,
    image: bubblyThumbnail,
    technologies: [
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS (NativeWind)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Axios",
      "JWT Auth",
    ],
    features: [
      "Secure authentication using JWT",
      "Real-time messaging with Socket.IO",
      "User presence and typing indicators",
      "Profile management with image upload",
      "Scalable REST API using Express",
      "Responsive UI for Android and iOS",
      "Reusable and modular React Native components",
      "Clean UI powered by NativeWind (TailwindCSS)",
      "Global auth state using Context API",
      "Fast and reliable message syncing",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Bubbly-ChatApp",
    // liveUrl: "https://expo.dev/@itssanthoshhere/bubbly-chatapp",
    duration: "October 2025",
    category: "Full-Stack Mobile App",
  },

  {
    title: "FigPro 🎨 – Real-Time Figma-Style Collaborative Design App",
    description:
      "A real-time collaborative design platform built with Next.js, Liveblocks, and Fabric.js, supporting live cursors, drawing tools, shapes, comments, reactions, history, and multi-user collaboration similar to Figma.",
    longDescription:
      "FigPro is a fully interactive, real-time collaborative design application inspired by Figma. Built using Next.js, TypeScript, Liveblocks, Fabric.js, TailwindCSS, and Shadcn/UI, it allows multiple users to design together with features like live cursors, drawing tools, shape editing, comments, reactions, undo/redo, canvas history tracking, and exporting options. The app demonstrates advanced real-time syncing, powerful canvas rendering, and a scalable design tooling architecture.",

    video: figProPreview,
    image: figProThumbnail,
    technologies: [
      "Next.js",
      "TypeScript",
      "Liveblocks",
      "Fabric.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Radix UI",
      "JSPDF",
      "UUID",
    ],

    features: [
      "Real-time multi-user collaboration",
      "Live cursors with cursor chat",
      "Comment threads with pinned notes",
      "Real-time reactions (emoji bursts)",
      "Freeform drawing with synced paths",
      "Shape tools: rectangles, circles, lines, triangles, text",
      "Image upload and editing",
      "Properties panel for color, size, stroke, font, and z-index",
      "Undo/Redo with Liveblocks history",
      "Keyboard shortcuts for fast interaction",
      "Export canvas as PDF or image",
      "Action history tracking and canvas management",
      "Clean and scalable UI built with Shadcn/UI",
    ],

    githubUrl: "https://github.com/Itssanthoshhere/FigPro",
    liveUrl: "https://fig-pro-sandyy.vercel.app/",
    duration: "November 2025",
    category: "Real-Time Collaborative App",
  },

  {
    title: "Nimbus Keyboards ⌨️ – 3D Interactive E-Commerce Showcase",
    description:
      "An immersive 3D keyboard showcase built with Next.js, TailwindCSS, Prismic CMS, and React Three Fiber. Features GSAP animations, Slice Machine-driven content, and Stripe-powered payments.",
    longDescription:
      "Nimbus Keyboards is a modern 3D interactive website that brings keyboards to life with immersive visuals and e-commerce features. Built using Next.js 15, TypeScript, TailwindCSS, and Prismic CMS, it integrates React Three Fiber and GSAP for smooth animations and lifelike interactions. Users can explore keyboards, switches, and keycaps in 3D, customize layouts, and purchase via secure Stripe Checkout. The project demonstrates advanced front-end engineering, content-driven development, and real-world payment flows for a production-ready shopping experience.",
    video: nimbusPreview,
    image: nimbusThumbnail,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Prismic CMS",
      "React Three Fiber",
      "Three.js",
      "GSAP",
      "Drei",
      "Slice Machine",
      "clsx",
      "Stripe",
    ],
    features: [
      "Immersive landing page with 3D keyboard hero",
      "3D keyboard models with rotate, zoom, and interact features",
      "Switch Playground for testing tactile feel in 3D",
      "Keycap customization and real-time visualization",
      "Dynamic content management via Prismic CMS",
      "GSAP-powered animations and scroll-based transitions",
      "Stripe Checkout integration for real-world payments",
      "Responsive and fluid UI across devices",
      "Content modeling and slices with Prismic Slice Machine",
      "Modular, scalable codebase for production readiness",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nimbus-Keyboard-3D",
    liveUrl: "https://nimbus-keyboard-3-d.vercel.app/",
    duration: "September 2025",
    category: "Full-Stack Web App",
  },

  {
    title: "Rayve 🕶️ – Animated Modern Landing Page",
    description:
      "A sleek and interactive landing page with animated text, dynamic backgrounds, and smooth visual effects using HTML, CSS, JavaScript, GSAP, and Shery.js. Delivers an engaging, modern web presentation experience.",
    longDescription:
      "Rayve is a visually engaging landing page project that combines interactive hero sections, dynamic backgrounds, and smooth animations using GSAP and Shery.js. It offers immersive effects, responsive design for all devices, and a modern aesthetic suitable for showcasing products, portfolios, or digital experiences. This project demonstrates advanced front-end animation techniques, creative typography, and interactive web design principles.",
    video: rayvePreview,
    image: rayveThumbnail,
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Shery.js"],
    features: [
      "Animated hero text with smooth GSAP transitions",
      "Dynamic multi-image background effects using Shery.js",
      "Interactive buttons with hover effects",
      "Responsive design for desktop",
      "Custom fonts and modern typography",
      "Easy customization of animations and backgrounds",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Rayve",
    liveUrl: "https://rayve-eta.vercel.app/",
    duration: "September 2025",
    category: "Frontend Web Project",
  },

  {
    title: "🎬 Cinema Seat Booking – Interactive React Component",
    description:
      "A modern and responsive seat booking system built with React.js and TailwindCSS. Features dynamic seat layouts, categories, pricing, and booking flow.",
    longDescription:
      "Cinema Seat Booking is an interactive and customizable React component designed for cinema halls, theaters, and event booking platforms. It supports seat selection with categories like Regular, Premium, and VIP, dynamic pricing, booking summaries, aisle separation, and booked seat management. Built with React.js and TailwindCSS, it provides a responsive, user-friendly experience. Developers can easily customize seat layouts, categories, pricing, and booking callbacks, making it ideal for production-level applications.",
    image: cinemaThumbnail,
    video: cinemaPreview,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Vite / CRA",
    ],
    features: [
      "Dynamic seat map with rows, seats per row, and aisle separation",
      "Customizable seat categories (Regular, Premium, VIP)",
      "Booking summary with selected seats, seat count, and total price",
      "Booked seat handling with disabled states",
      "Interactive UI with click-to-select animations",
      "Responsive design across devices",
      "Inline notifications for success/error",
      "Post-booking status showing booked seat IDs",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Cinema-Seat-Booking",
    liveUrl: "https://cinemaseatbooking.vercel.app/",
    duration: "September 2025",
    category: "React Component / UI Project",
  },

  // Simple frontent websites
  {
    title: "Sweet Bite – Bakery Website",
    description:
      "Fully responsive bakery website featuring product showcase, testimonial section, and contact form. Built with HTML5, CSS3, and JavaScript with focus on user-friendly layout and cross-device compatibility.",
    longDescription:
      "An elegant and modern bakery website showcasing delicious products with beautiful imagery, customer testimonials, and seamless user experience across all devices.",
    video: sweetbitepreview,
    image: sweetThumbnail,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Beautiful product showcase with image galleries",
      "Customer testimonials and reviews section",
      "Contact form with validation",
      "Fully responsive design",
      "Smooth animations and transitions",
      "SEO optimized structure",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Sweet-Bite",
    liveUrl: "https://sweet-bite-ruby.vercel.app/",
    duration: "Oct 2024",
    category: "Frontend Website",
  },

  {
    title: "🍽 Flavor Fusion – Modern Restaurant Website",
    description:
      "A sleek, fully responsive restaurant website built with HTML5, Tailwind CSS, and JavaScript. Features interactive menu filtering, smooth AOS animations, and a polished chef-inspired UI.",
    longDescription:
      "Flavor Fusion is a modern, mobile-friendly restaurant website designed to deliver an immersive dining experience online. Built with semantic HTML5, styled using Tailwind CSS for rapid responsive design, and enhanced with JavaScript for interactive features, it offers smooth AOS animations and intuitive navigation. Visitors can explore the menu with dynamic category-based filtering, enjoy scroll-triggered effects, and navigate effortlessly with a sticky header and back-to-top button. Optimized for performance and aesthetics, this project highlights clean UI, accessibility, and cross-device compatibility.",
    video: flavorapreview,
    image: flavoraThumbnail,
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "AOS (Animate On Scroll)",
    ],
    features: [
      "Fully responsive design for desktop, tablet, and mobile",
      "Sticky navigation with scroll-based style changes",
      "Smooth back-to-top button for quick navigation",
      "Interactive menu filtering with animated transitions",
      "Scroll-triggered fade-in effects using AOS",
      "Mobile menu with slide-in navigation",
      "SEO-friendly semantic HTML structure",
      "Optimized for fast loading and smooth performance",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Flavora-Restaurant",
    liveUrl: "https://flavora-restaurant.vercel.app/",
    duration: "August 2025",
    category: "Frontend Website",
  },

  {
    title: "☕ Pastry World – Modern Café & Bakery Website",
    description:
      "A stylish and responsive café & bakery website built with HTML, CSS, and JavaScript. Features interactive menu cards, booking form, smooth animations, and a mobile-first design to showcase café specialties.",
    longDescription:
      "Pastry World is a modern, fully responsive café and bakery website designed with HTML5, CSS3, and JavaScript. It provides an elegant online presence for bakeries, coffee shops, and dessert cafés, with interactive features like menu cards, booking forms, and scroll-based animations. The site ensures mobile-first responsiveness, cross-browser compatibility, and smooth UI/UX, making it an engaging platform for customers to explore and connect with the brand.",
    video: pastryPreview,
    image: pastryThumbnail,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Remix Icons",
      "ScrollReveal.js",
    ],
    features: [
      "Responsive navbar with hamburger menu for mobile",
      "Engaging hero section with café branding",
      "Popular menu section with styled cards and hover effects",
      "Book a table form with interactive design",
      "About Us section to highlight café story",
      "Footer with social links and quick navigation",
      "Smooth animations using ScrollReveal.js",
      "Cross-browser compatibility and mobile-first design",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Pastry-World",
    liveUrl: "https://pastry-world-ten.vercel.app/",
    duration: "August 2025",
    category: "Frontend Website",
  },

  {
    title: "☕ Brew Bliss – Premium Coffee Experience",
    description:
      "A modern, fully responsive coffee shop website built with HTML, CSS, and JavaScript. Features a clean UI, interactive menu, testimonials slider, and smooth user experience.",
    longDescription:
      "Brew Bliss is a stylish and responsive coffee shop website designed to showcase premium coffee experiences and menu offerings. Developed with HTML, CSS, and vanilla JavaScript, it features an engaging Hero section, interactive menu categories, customer testimonials with Swiper.js, a gallery showcase, and a contact form. The project highlights modern UI/UX principles, smooth animations, mobile responsiveness, and fast-loading performance.",
    video: brewblissPreview,
    image: brewblissThumbnail,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Swiper.js",
      "Font Awesome",
    ],
    features: [
      "Fully responsive design across devices",
      "Interactive Navbar with hamburger menu",
      "Smooth hover effects and CSS animations",
      "Comprehensive Menu for beverages and desserts",
      "Customer Testimonials with Swiper slider",
      "Gallery section showcasing coffee shop ambiance",
      "Contact form for inquiries",
      "Social media integration (Facebook, Instagram, Twitter)",
      "Privacy & Refund Policies included",
      "Fast loading and optimized performance",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Brew-Bliss",
    liveUrl: "https://brew-bliss-five.vercel.app/",
    duration: "September 2025",
    category: "Frontend Web Development",
  },

  {
    title: "🛍️ CozyNest – eCommerce Landing Page",
    description:
      "A modern and fully responsive eCommerce landing page built with HTML, Tailwind CSS, and vanilla JavaScript. Features product showcase, blog section, smooth interactions, and deployment on Vercel.",
    longDescription:
      "CozyNest is a stylish and responsive eCommerce landing page created to showcase handmade decor. Built with HTML5, Tailwind CSS, and vanilla JavaScript, it demonstrates modern UI/UX principles with smooth interactions and responsive design. The project includes engaging sections like Hero, Product Grid, Blog, and Footer, along with a custom slider for product images. Deployed on Vercel, it ensures fast performance and reliable hosting.",
    video: cozynestPreview,
    image: cozynestThumbnail,
    technologies: ["HTML5", "Tailwind CSS", "JavaScript (ES6)", "Vercel"],
    features: [
      "Fully responsive design across mobile, tablet, and desktop",
      "Interactive Navbar with mobile menu toggle",
      "Modern UI styled with Tailwind CSS utility classes",
      "Smooth hover effects and transition animations",
      "Product showcase section with advanced grid layout",
      "Blog section highlighting handmade decor insights",
      "Parallax background effects for immersive visuals",
      "Custom image slider with auto-slide functionality using vanilla JS",
      "Footer with contact details, social links, and copyright",
      "Live deployment on Vercel for fast hosting",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/CozyNest-ecommerce",
    liveUrl: "https://cozynest-ecommerce.vercel.app/",
    duration: "September 2025",
    category: "Frontend Landing Page",
  },

  {
    title: "🏋🏼‍♂️ Flex Haven – Modern Gym & Fitness Website",
    description:
      "A responsive multi-page fitness website built with HTML, CSS, and JavaScript, featuring dynamic navigation, smooth UI interactions, Swiper.js carousels, and mobile-first design.",
    longDescription:
      "Flex Haven is a modern, responsive gym & fitness website designed to provide a professional online presence for fitness enthusiasts, trainers, and gyms. Built with HTML5, CSS3, and JavaScript, it includes dynamic navigation, Swiper.js carousels, a contact form, and interactive elements. The website demonstrates clean UI design, responsive layouts, and cross-browser compatibility, ensuring a smooth experience across devices.",
    video: flexHavenPreview,
    image: flexThumbnail,
    technologies: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
    features: [
      "Responsive navigation bar with mobile-friendly hamburger menu",
      "Active link highlighting to indicate current section",
      "Engaging hero and landing sections with modern fitness UI",
      "Swiper.js carousels for trainers and class schedules",
      "Dedicated Contact Page with Google Maps integration",
      "Interactive contact form with submission feedback",
      "Footer with newsletter signup and social media links",
      "Cross-browser compatible, mobile-first responsive design",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Flex-Haven",
    liveUrl: "https://flex-haven.vercel.app/",
    duration: "August 2025",
    category: "Frontend Web App",
  },

  {
    title: "🌶️ Spicy Picy – Landing Page",
    description:
      "A modern and responsive landing page for a spice brand, built with React, Tailwind CSS, and Vite. Features Hero, Banner, Products, About, Reviews, and Footer sections with smooth scrolling and interactive elements.",
    longDescription:
      "Spicy Picy is a visually appealing, fully responsive landing page designed for a spice brand. Built with React and Tailwind CSS, it showcases products, highlights brand specialties, displays customer reviews, and provides a smooth scrolling experience. The project emphasizes clean UI, reusable React components, interactive cards, and a modern, maintainable codebase.",
    video: spicyPreview,
    image: spicyThumbnail,
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6)"],
    features: [
      "Fully responsive desktop & mobile layout",
      "Smooth scrolling navigation",
      "Interactive Product and About cards with hover effects",
      "Reviews section showing random customer testimonials",
      "Fixed Navbar adapting while scrolling",
      "Clean and modern UI with Tailwind CSS",
      "Reusable React components for better maintainability",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Spicy-Picy",
    liveUrl: "https://spicy-picy.vercel.app/",
    duration: "September 2025",
    category: "Frontend Landing Page",
  },

  {
    title: "Demon Bee 3D 🐝 – Interactive 3D Web Experience",
    description:
      "A visually immersive 3D web project featuring animated Demon Bee elements, layered backgrounds, and smooth GSAP & Three.js animations with responsive design.",
    longDescription:
      "Demon Bee 3D is an interactive web experience built with HTML, CSS, JavaScript, Three.js, and GSAP. Users can explore animated Demon Bee elements with smooth transitions and layered backgrounds, creating a visually engaging and responsive website. The project demonstrates custom 3D modeling, dynamic animations, and responsive layouts suitable for desktop and mobile devices.",
    video: beePreview,
    image: beeThumbnail,
    technologies: ["HTML5", "CSS3", "JavaScript", "Three.js", "GSAP"],
    features: [
      "Interactive 3D Demon Bee animations",
      "Layered dynamic backgrounds for depth",
      "Responsive design for desktop, tablet, and mobile",
      "Smooth motion animations with GSAP",
      "Custom fonts integrated via Google/CDN",
      "Lightweight and performance-optimized",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Demon-Bee-3D",
    liveUrl: "https://demon-bee-3d.vercel.app/",
    duration: "September 2025",
    category: "3D Web Project",
  },

  {
    title: "⚡ K72 Clone – Animated Creative Agency Website",
    description:
      "A modern and fully responsive creative agency clone built with React, GSAP, TailwindCSS, and Vite. Features immersive animations, video backgrounds, and storytelling-inspired layouts.",
    longDescription:
      "K72 Clone is a sleek and animated web project inspired by the K72 Creative Agency website. It showcases smooth GSAP-powered animations, autoplay video backgrounds, bold typography, and a clean, minimal aesthetic. Built with React, TailwindCSS, and Vite, it delivers an immersive user experience and highlights modern web animation techniques. This project emphasizes responsiveness, performance optimization, and creative web storytelling for agency-style websites.",
    video: k72Preview,
    image: k72Thumbnail,
    technologies: ["React", "GSAP", "TailwindCSS", "Vite"],
    features: [
      "Hero section with autoplay video background",
      "GSAP-powered animations and scroll effects",
      "Responsive layouts for desktop and mobile",
      "Bold typography and storytelling sections",
      "Creative agency-inspired design",
      "Optimized performance with Vite bundling",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/k72",
    liveUrl: "https://k72-spark.vercel.app/",
    duration: "September 2025",
    category: "Animated Website",
  },

  {
    title: "Rdye 🚖 – Full Stack Cab Booking App",
    description:
      "A ride-booking mobile app built with React Native, Expo, Stripe, Google Maps, and PostgreSQL. Offers a smooth Uber-like experience with real-time tracking, secure payments, and user-friendly design.",
    longDescription:
      "Rdye is a full-featured ride-booking application that replicates the Uber experience using a modern tech stack. Built with React Native and Expo, it includes real-time map tracking, Stripe-based payments, secure authentication with Clerk, and PostgreSQL database hosted via NeonDB. It’s crafted with clean UI using NativeWind (Tailwind CSS for React Native) and offers an end-to-end cab booking experience on both Android and iOS devices. This project highlights scalable mobile app architecture, smooth animations, and production-level features.",
    video: rdyepreview,
    technologies: [
      "React Native",
      "Expo",
      "PostgreSQL",
      "Stripe",
      "Google Maps API",
      "Prisma",
      "Clerk Auth",
      "Tailwind CSS (NativeWind)",
      "Zustand",
      "Geoapify",
    ],
    features: [
      "Smooth onboarding and authentication flow",
      "Email/password and Google OAuth with Clerk",
      "Real-time location tracking on Google Maps",
      "Search rides using Google Places Autocomplete",
      "Select, confirm, and pay for rides via Stripe",
      "Post-payment ride creation and booking",
      "Recent rides and full ride history",
      "Responsive UI for Android and iOS",
      "Profile management and secure user access",
      "Modular codebase with reusable components",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Ryde",
    // liveUrl:
    figmaUrl:
      "https://www.figma.com/design/blwkDHvyKdd9YqdOYNCBY7/Ryde---Uber-Clone-App?node-id=0-1&t=SQQwfpztHy1V3epw-1",
    duration: "August 2025",
    category: "Full-Stack Mobile App",
  },
  {
    title: "🍔 Food Delivery Mobile App",
    description:
      "A modern, full-stack food delivery app built with React Native, Expo, TailwindCSS (NativeWind), Appwrite, and TypeScript. Features smooth UI, Google authentication, dynamic search, and cart functionality for a complete food-ordering experience.",
    longDescription:
      "The Food Delivery Mobile App is a full-stack application designed to deliver a smooth, intuitive, and modern food-ordering experience. Built with React Native and Expo, styled using NativeWind (Tailwind CSS for React Native), and powered by TypeScript, it integrates Appwrite for secure authentication, database management, and file storage. The app features Google sign-in, category-based search and filtering, cart and checkout functionalities, and a responsive UI optimized for both Android and iOS. With a scalable architecture and reusable components, it ensures maintainability and a delightful user journey from onboarding to payment.",
    video: foodreview,
    technologies: [
      "React Native",
      "Expo",
      "Appwrite",
      "Tailwind CSS (NativeWind)",
      "TypeScript",
      "Zustand",
      "Sentry",
      "Google Auth",
      "Figma",
    ],
    features: [
      "Google Authentication for secure user login",
      "Home page with latest offers and quick links",
      "Category-based search and keyword filtering",
      "Product details with images and descriptions",
      "Add to cart functionality with price calculation",
      "Cart review and checkout flow",
      "Profile management for user settings",
      "Appwrite backend integration for database and file storage",
      "Reusable and modular code architecture",
      "Responsive UI for Android and iOS",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Food-Delivery-App",
    // liveUrl:
    figmaUrl:
      "https://www.figma.com/design/FGHC0TYI24OH28CgTu4VZx/Food-Delivery-App?node-id=0-1&t=B938Im9U84TKMYmd-1",
    duration: "August 2025",
    category: "Full-Stack Mobile App",
  },

  {
    title: "Real Scout 🏡 – Real Estate App",
    description:
      "A modern cross-platform real estate app built with React Native, Expo, Appwrite, and Tailwind CSS. Designed for browsing, searching, and managing property listings with an intuitive, mobile-first UI.",
    longDescription:
      "Real Scout is a full-stack mobile application designed for discovering and managing property listings effortlessly. Built with React Native and Expo SDK 52, it integrates Appwrite for authentication, database, and file storage, while NativeWind (Tailwind CSS for React Native) ensures a clean and responsive design. Users can explore properties, apply filters, view detailed property information, save favorites, and manage their profiles. The app is optimized for both Android and iOS, delivering a smooth, secure, and visually engaging experience. Includes centralized data fetching inspired by TanStack’s useQuery for optimized performance.",
    video: restate,
    technologies: [
      "React Native",
      "Expo SDK 52",
      "Appwrite",
      "TypeScript",
      "Tailwind CSS (NativeWind)",
    ],
    features: [
      "Secure Google authentication",
      "Home page with latest and recommended properties",
      "Advanced search and filtering system",
      "Explore page to browse all property types",
      "Detailed property pages with photos, pricing, and full info",
      "Profile management and preferences",
      "Centralized and optimized API data fetching",
      "Responsive design for Android and iOS",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Real-Scout",
    figmaUrl:
      "https://www.figma.com/design/F0pys4nJsQXz42KOzI2yl9/Real-Scout---Real-Estate-App?node-id=2-2&t=PjxkudNOJCqZHm97-1",
    duration: "August 2025",
    category: "Full-Stack Mobile App",
  },

  {
    title: "Magma 🔥 – Interactive Web3 Real Estate Landing Page",
    description:
      "A sleek, modern landing page with 14 scrollable sections, animated hero, dynamic visuals, scroll-triggered effects, and social call-to-actions built using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll.",
    longDescription:
      "Magma is a Web3-inspired interactive real estate landing page featuring hero sections, digital twin explanation, blogs, featured press, CTAs, and social links across 14 pages. It leverages GSAP for animations and Locomotive Scroll for smooth scroll-triggered effects, providing an immersive and visually engaging user experience. Perfect for portfolio demos, digital agencies, or Web3 project showcases, it highlights modern design, responsive layout, and interactive animations.",
    video: magmaPreview,
    image: magmaThumbnail,
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll"],
    features: [
      "Animated hero section with text and video background",
      "14 scrollable sections including CTA, blogs, and featured press",
      "Smooth scroll and parallax effects via Locomotive Scroll",
      "Interactive buttons and social links with hover effects",
      "Responsive design for desktop, tablet, and mobile",
      "Modern typography and clean layout inspired by Magma website",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Twinverse",
    liveUrl: "https://twinverse-magma.vercel.app/",
    duration: "September 2025",
    category: "Interactive Landing Page",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating expertise in modern web
            development, from full-stack applications to responsive frontend
            designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-project overflow-hidden animate-slide-up"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                {/* <div className="relative overflow-hidden">
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                  /> */}
                {/* 
                {project.video ? (
                  <video
                    width="100%"
                    height="100%"
                    // controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>
                </div>  */}

                <div className="relative overflow-hidden">
                  {project.video && project.video !== "" ? (
                    <video
                      width="100%"
                      height="100%"
                      // controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-64 lg:h-full bg-gray-200 flex items-center justify-center text-muted-foreground">
                      No Preview Available
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} className="text-accent" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-surface border-border/50 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="btn-hero flex items-center gap-2"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="btn-hero flex items-center gap-2"
                    >
                      <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Figma
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="btn-secondary-hero flex items-center gap-2"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        className="btn-hero flex items-center gap-2"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {/* Show Figma button only for projects with figmaUrl */}
                    {project.figmaUrl && (
                      <Button
                        asChild
                        className="btn-secondary-hero flex items-center gap-2"
                      >
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Figma
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="btn-secondary-hero flex items-center gap-2"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button asChild className="btn-hero">
            <a
              href="https://github.com/Itssanthoshhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
