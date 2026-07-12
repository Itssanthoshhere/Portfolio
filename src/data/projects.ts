import hvfPreview from "@/assets/hvf-preview.mp4";
import hvfThumbnail from "@/assets/hvf-project.jpg";
import rdyepreview from "@/assets/rdye-preview.mp4";
import rdyeThumbnail from "@/assets/rdye-thumbnail.png"; // Assuming this exists based on pattern
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
import expoCommercePreview from "@/assets/expoCommercePreview.mp4";
import expoCommerceThumbnail from "@/assets/expoCommerceThumbnail.png";
import wavechatPreview from "@/assets/waveChatPreview.mp4";
import wavechatThumbnail from "@/assets/waveChatThumbnail.png";
import recurioPreview from "@/assets/recurioPreview.mp4";
import recurioThumbnail from "@/assets/recurioThumbnail.png";
import RecurioApk from "@/assets/Recurio-v1.0.0.apk";
import travelorThumbnail from "@/assets/travelorThumbnail.png";
import travelorPreview from "@/assets/travelorPreview.mp4";
import feastoThumbnail from "@/assets/feastoThumbnail.png";
import feastoPreview from "@/assets/feastoPreview.mp4";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  video?: string;
  image?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  apkUrl?: string;
  duration: string;
  category:
    | "Full-Stack"
    | "Mobile"
    | "3D Experience"
    | "Frontend"
    | "Component"
    | ("Full-Stack" | "Mobile" | "3D Experience" | "Frontend" | "Component")[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "feasto-food-delivery",
    title: "Feasto 🛵 – Full-Stack Real-Time Food Delivery",
    description:
      "A production-grade microservices food delivery ecosystem built with React, TypeScript, Node.js, RabbitMQ, Socket.IO, MongoDB, and Docker.",
    longDescription:
      "Feasto is a full-stack food delivery ecosystem that demonstrates real-world microservices architecture at the application level. It features a responsive web app and a native Expo mobile app. The platform implements decoupled async communication via RabbitMQ between payment, restaurant, and rider services, real-time WebSocket delivery with JWT-authenticated rooms, geospatial queries in MongoDB for location-aware restaurant discovery and rider dispatching, live map routing via Leaflet, dual payment gateway integration, and multi-role RBAC for customers, sellers, riders, and admins.",
    technologies: [
      "React 19",
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Socket.IO",
      "Leaflet",
      "Docker",
      "Vite",
      "Tailwind CSS",
    ],
    features: [
      "Cross-platform access with a responsive web app and native Expo mobile app",
      "Decoupled async communication via RabbitMQ between microservices",
      "Real-time WebSocket delivery with JWT-authenticated rooms",
      "Live order tracking with Socket.IO updates and Leaflet routing maps",
      "Geospatial queries in MongoDB for location-aware restaurant discovery and rider dispatching",
      "Dual payment gateway integration (Razorpay + Stripe)",
      "Multi-role RBAC for customers, sellers, riders, and admins",
    ],
    video: feastoPreview,
    image: feastoThumbnail,
    githubUrl: "https://github.com/Itssanthoshhere/Feasto",
    liveUrl: "https://getfeasto.vercel.app",
    apkUrl: "https://expo.dev/accounts/itssanthoshhere/projects/feasto/builds/aa0d513f-cf0d-4456-8b88-aa1656e623ed",
    duration: "Current",
    category: ["Full-Stack", "Mobile"],
    featured: true,
  },
  {
    slug: "recurio-subscription-manager",
    title: "Recurio 📱 – Subscription Manager",
    description:
      "A premium, high-fidelity Expo & React Native application to track, manage, and optimize recurring subscriptions.",
    longDescription:
      "Recurio is a pixel-perfect, feature-rich subscription tracking mobile app. Built on the modern Expo SDK 54, it addresses the real-world challenge of subscription fatigue by giving users an elegant control center to monitor payments, analyze costs, customize designs, and receive timely alerts before renewals hit.",
    video: recurioPreview,

    image: recurioThumbnail, // Using placeholder image for now
    technologies: [
      "React Native",
      "Expo SDK 54",
      "Supabase",
      "Clerk Auth",
      "Zustand",
      "NativeWind v5",
    ],
    features: [
      "Secure, identity-first authentication with Clerk (MFA & JWT support)",
      "Optimistic UI updates with Zustand client state caching",
      "Real-time backend queries and mutations via Supabase",
      "Dynamic dashboard and search filter for active subscriptions",
      "Interactive Bar Chart detailing expenses across categories",
      "Slide-up bottom sheet modal for creation & editing with custom card colors",
      "Local push notifications configured dynamically via user settings",
    ],
    githubUrl:
      "https://github.com/Itssanthoshhere/Recurio-Subscription-Manager-App",
    apkUrl: RecurioApk,
    duration: "Recent",
    category: "Mobile",
    featured: true,
  },

  {
    slug: "quickshow-movie-booking",
    title: "QuickShow – Movie Theater Platform",
    description:
      "A modern movie booking platform built with React, Node.js, Express, and MongoDB. Features real-time seat booking and secure payments.",
    longDescription:
      "QuickShow is a full-stack movie theater booking application designed to deliver a seamless and interactive experience for both users and admins. Built with React, Node.js, Express, and MongoDB, it enables users to browse movies, book seats in real-time, and complete payments securely using Stripe. The platform leverages Inngest for automated background workflows, Cloudinary for media storage, and automatically syncs the latest 'Now Playing' movies from the TMDB API.",
    video: quickshowPreview,
    image: quickshowThumbnail,
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Clerk Auth",
      "Inngest",
      "Cloudinary",
      "TMDB API",
      "Nodemailer",
    ],
    features: [
      "Real-time seat booking with dynamic layouts",
      "Secure payments powered by Stripe webhooks",
      "Automated background workflows using Inngest (user sync, validations, reminders)",
      "Automatic 'Now Playing' movie synchronization via TMDB API",
      "Email notifications for booking confirmations and reminders via Nodemailer",
      "User authentication and profiles via Clerk",
      "Admin dashboard for centralized movie and show management",
    ],
    githubUrl:
      "https://github.com/Itssanthoshhere/QuickShow-Movie-Theater-Booking-Platform",
    liveUrl: "https://quick-show-ticketbooking.vercel.app/",
    duration: "October 2025",
    category: "Full-Stack",
    featured: true,
  },
  {
    slug: "hvf-eleave-portal",
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
    category: "Full-Stack",
    featured: true,
  },
  {
    slug: "converso-lms",
    title: "Converso 🎓 – AI-Powered LMS SaaS",
    description:
      "An AI-driven Learning Management System built with Next.js, Supabase, Clerk, and Vapi. Enables real-time voice-based learning.",
    longDescription:
      "Converso is a modern, full-stack SaaS Learning Management System designed to transform how users learn through real-time AI voice conversations. Built with Next.js App Router and TypeScript, it integrates Supabase for PostgreSQL-backed data handling and Vapi AI for low-latency speech-to-speech tutoring.",
    video: conversoPreview,
    image: conversoThumbnail,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk Auth",
      "Stripe",
      "Vapi AI",
      "Tailwind CSS",
    ],
    features: [
      "Real-time AI voice tutoring with speech-to-speech interaction",
      "Create and manage personalized AI companions",
      "Secure authentication and subscriptions with Clerk",
      "Stripe-powered subscription billing",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/lms-saas-app",
    liveUrl: "https://lms-saas-app-coral.vercel.app/",
    duration: "Nov 2025",
    category: "Full-Stack",
    featured: false,
  },
  {
    slug: "figpro-collaborative",
    title: "FigPro 🎨 – Collaborative Design App",
    description:
      "A real-time collaborative design platform built with Next.js, Liveblocks, and Fabric.js, supporting live cursors and drawing tools.",
    longDescription:
      "FigPro is a fully interactive, real-time collaborative design application inspired by Figma. Built using Next.js, TypeScript, Liveblocks, Fabric.js, and TailwindCSS, it allows multiple users to design together with features like live cursors, drawing tools, and shape editing.",
    video: figProPreview,
    image: figProThumbnail,
    technologies: [
      "Next.js",
      "TypeScript",
      "Liveblocks",
      "Fabric.js",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
    features: [
      "Real-time multi-user collaboration",
      "Live cursors with cursor chat",
      "Freeform drawing with synced paths",
      "Shape tools: rectangles, circles, lines, triangles, text",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/FigPro",
    liveUrl: "https://fig-pro-sandyy.vercel.app/",
    duration: "November 2025",
    category: "Full-Stack",
    featured: false,
  },
  {
    slug: "nimbus-keyboards-3d",
    title: "Nimbus Keyboards ⌨️ – 3D E-Commerce",
    description:
      "An immersive 3D keyboard showcase built with Next.js, TailwindCSS, Prismic CMS, and React Three Fiber.",
    longDescription:
      "Nimbus Keyboards is a modern 3D interactive website that brings keyboards to life with immersive visuals and e-commerce features. Built using Next.js 15, TypeScript, TailwindCSS, and Prismic CMS, it integrates React Three Fiber and GSAP for smooth animations.",
    video: nimbusPreview,
    image: nimbusThumbnail,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Prismic CMS",
      "React Three Fiber",
      "GSAP",
      "Stripe",
    ],
    features: [
      "Immersive landing page with 3D keyboard hero",
      "3D keyboard models with rotate, zoom, and interact features",
      "Dynamic content management via Prismic CMS",
      "Stripe Checkout integration for real-world payments",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nimbus-Keyboard-3D",
    liveUrl: "https://nimbus-keyboard-3-d.vercel.app/",
    duration: "September 2025",
    category: "3D Experience",
    featured: true,
  },
  {
    slug: "velvet-pour",
    title: "Velvet Pour 🍹 – GSAP Cocktail Site",
    description:
      "A scroll-driven, animated cocktail website built with React, GSAP, and Tailwind CSS. Features SplitText reveals and parallax.",
    longDescription:
      "Velvet Pour is a modern, interactive cocktail website built with React, GSAP, and Tailwind CSS. The project leverages advanced scroll-driven animations like SplitText reveals, ScrollTrigger timelines, pinned sections, parallax scrolling, and scroll-synced video playback.",
    video: velvetPourPreview,
    image: velvetThumbnail,
    technologies: ["React", "GSAP", "Tailwind CSS", "Vite", "ScrollTrigger"],
    features: [
      "Dynamic SplitText text reveals for bold section intros",
      "ScrollTrigger-powered timeline animations and effects",
      "Smooth parallax scrolling for immersive depth",
      "Scroll-synced video playback for cinematic impact",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Velvet-Pour",
    liveUrl: "https://velvet-pour-cocktail.vercel.app/",
    duration: "August 2025",
    category: "Frontend",
    featured: true,
  },
  {
    slug: "suburbia-skate",
    title: "Suburbia Skate – 3D Skateboard Site",
    description:
      "A modern, interactive skateboard website with 3D animations using Next.js 15, TailwindCSS, Prismic CMS, and React Three Fiber.",
    longDescription:
      "Suburbia Skate is an interactive skateboard website showcasing products and 3D experiences using React Three Fiber. Users can explore products, view 3D skateboards, and interact with animations powered by GSAP.",
    video: suburbiaPreview,
    image: suburbiaThumbnail,
    technologies: [
      "Next.js 15",
      "React 19",
      "TailwindCSS",
      "Prismic CMS",
      "React Three Fiber",
      "GSAP",
    ],
    features: [
      "Landing page with animated hero sections",
      "Interactive 3D skateboard models with rotation",
      "Dynamic content managed via Prismic CMS",
      "Custom animations powered by GSAP and React Three Fiber",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Suburbia-Skate",
    liveUrl: "https://suburbia-skate.vercel.app/",
    duration: "August 2025",
    category: "3D Experience",
    featured: false,
  },
  {
    slug: "fizzi-soda",
    title: "Fizzi 🥤 – 3D Soda Can Experience",
    description:
      "Interactive 3D soda can animation website built with React Three Fiber, Next.js App Router, and Prismic CMS.",
    longDescription:
      "Fizzi 🥤 is a visually immersive 3D soda can experience built with React Three Fiber and powered by Prismic CMS. Designed as a creative product splash or personal branding demo, it features animated UI, custom SVGs, and CMS-editable content.",
    video: fizzi,
    image: fizziThumbnail,
    technologies: [
      "React Three Fiber",
      "Next.js",
      "Prismic CMS",
      "Tailwind CSS",
      "GSAP",
    ],
    features: [
      "3D soda can animations with React Three Fiber",
      "CMS-powered content via Prismic",
      "Animated UI and custom SVG graphics",
      "Fully responsive and mobile-friendly layout",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Fizzi",
    liveUrl: "https://fizzi-soda-for-gusty-people.vercel.app/",
    duration: "July 2025",
    category: "3D Experience",
    featured: false,
  },
  {
    slug: "expocommerce",
    title: "ExpoCommerce 🛒 – Mobile E-Commerce",
    description:
      "A production-style full-stack e-commerce platform with a React Native mobile app, admin dashboard, and REST API backend.",
    longDescription:
      "ExpoCommerce is a complete full-stack e-commerce platform consisting of a customer mobile application, an admin dashboard, and a scalable REST API backend. The mobile app is built using React Native with Expo and NativeWind for a smooth cross-platform UI.",
    video: expoCommercePreview,
    image: expoCommerceThumbnail,
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Clerk Auth",
    ],
    features: [
      "Customer mobile app with product browsing and cart",
      "Secure authentication using Clerk (Google & Apple login)",
      "Stripe payment integration with Payment Sheet",
      "Admin dashboard for product, order, and customer management",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Expo-Ecommerce",
    duration: "December 2025",
    category: "Mobile",
    featured: false,
  },
  {
    slug: "nike-ecommerce",
    title: "Nike E-commerce w/ Devin AI",
    description:
      "A full-stack modern eCommerce app featuring product pages, cart & checkout with Stripe, authentication, PostgreSQL/Drizzle ORM backend.",
    longDescription:
      "Nike-style E-commerce is a full-stack modern shopping platform built with Next.js 15, TypeScript, and TailwindCSS, featuring a PostgreSQL backend via NeonDB with Drizzle ORM, and secure authentication powered by Better Auth.",
    video: nikePreview,
    image: nikeThumbnail,
    technologies: [
      "Next.js 15",
      "TailwindCSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Stripe",
      "Zustand",
    ],
    features: [
      "Landing page with smooth animations and brand showcase",
      "Product listing with filters, sorting, and availability",
      "Shopping cart with Zustand state management",
      "Secure checkout with Stripe integration",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nike-Ecommerce",
    liveUrl: "https://nike-ecommerce-black.vercel.app/",
    duration: "August 2025",
    category: "Full-Stack",
    featured: false,
  },
  // {
  //   slug: "rdye-cab-booking",
  //   title: "Rdye 🚖 – Cab Booking App",
  //   description:
  //     "A ride-booking mobile app built with React Native, Expo, Stripe, Google Maps, and PostgreSQL. Uber-like experience.",
  //   longDescription:
  //     "Rdye is a full-featured ride-booking application that replicates the Uber experience using a modern tech stack. Built with React Native and Expo, it includes real-time map tracking, Stripe-based payments, secure authentication with Clerk, and PostgreSQL database hosted via NeonDB.",
  //   video: rdyepreview,
  //   image: rdyeThumbnail,
  //   technologies: [
  //     "React Native",
  //     "Expo",
  //     "PostgreSQL",
  //     "Stripe",
  //     "Google Maps API",
  //     "Clerk Auth",
  //   ],
  //   features: [
  //     "Smooth onboarding and authentication flow",
  //     "Real-time location tracking on Google Maps",
  //     "Search rides using Google Places Autocomplete",
  //     "Select, confirm, and pay for rides via Stripe",
  //   ],
  //   githubUrl: "https://github.com/Itssanthoshhere/Ryde",
  //   figmaUrl:
  //     "https://www.figma.com/design/blwkDHvyKdd9YqdOYNCBY7/Ryde---Uber-Clone-App",
  //   duration: "August 2025",
  //   category: "Mobile",
  //   featured: false,
  // },
  // {
  //   slug: "real-scout",
  //   title: "Real Scout 🏡 – Real Estate App",
  //   description:
  //     "A modern cross-platform real estate app built with React Native, Expo, Appwrite, and Tailwind CSS.",
  //   longDescription:
  //     "Real Scout is a full-stack mobile application designed for discovering and managing property listings effortlessly. Built with React Native and Expo SDK 52, it integrates Appwrite for authentication, database, and file storage, while NativeWind ensures a clean design.",
  //   video: restate,
  //   image: rdyeThumbnail, // Using placeholder
  //   technologies: [
  //     "React Native",
  //     "Expo SDK 52",
  //     "Appwrite",
  //     "TypeScript",
  //     "Tailwind CSS",
  //   ],
  //   features: [
  //     "Secure Google authentication",
  //     "Advanced search and filtering system",
  //     "Detailed property pages with photos, pricing, and full info",
  //     "Profile management and preferences",
  //   ],
  //   githubUrl: "https://github.com/Itssanthoshhere/Real-Scout",
  //   figmaUrl:
  //     "https://www.figma.com/design/F0pys4nJsQXz42KOzI2yl9/Real-Scout---Real-Estate-App",
  //   duration: "August 2025",
  //   category: "Mobile",
  //   featured: false,
  // },
  {
    slug: "bubbly-chatapp",
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
      "Fast and reliable message syncing",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Bubbly-ChatApp",
    duration: "October 2025",
    category: "Mobile",
    featured: false,
  },
  {
    slug: "demon-bee-3d",
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
    category: "3D Experience",
    featured: false,
  },
  {
    slug: "chug-spylt",
    title: "🥛 Chug SPYLT – Awwwards-Inspired Interactive Website",
    description:
      "An immersive interactive website built with React 19, Tailwind CSS v4, and GSAP. Features smooth parallax scrolling, clip-path animations, and Awwwards-style text reveals.",
    longDescription:
      "Chug SPYLT is a stunning interactive web experience inspired by Awwwards' finest creative projects. Built with React 19, Tailwind CSS v4, and GSAP, it leverages ScrollTrigger and ScrollSmoother for fluid animations, parallax effects, and storytelling-driven layouts. This project showcases advanced animation techniques like layered GSAP timelines, clip-path transitions, and text reveal effects.",
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
    category: "Frontend",
    featured: false,
  },
  {
    slug: "travelor-tourism",
    title: "Travelor ✈️ – Multi-Page Travel & Tourism Website",
    description:
      "A fully responsive travel and tourism website built with React, Tailwind CSS v4, React Router, and Swiper.js. Features advanced animations, dynamic routing, interactive sliders, and a scalable component-driven architecture.",
    longDescription:
      "Travelor is a production-quality multi-page travel and tourism website built entirely from scratch using React 19, Vite, Tailwind CSS v4, React Router v7, and Swiper.js. Designed as a deep frontend engineering project, it showcases modern SPA routing, advanced Swiper integrations, reusable component architecture, handcrafted CSS animations, and a scalable folder structure. The platform includes fully routed pages for tours, destinations, blogs, pricing, services, testimonials, FAQs, and tour guides. Interactive features such as animated hero sections, parallax clouds, autoplay carousels, dynamic detail pages, animated counters, and custom CSS effects create an immersive travel experience. Built without UI kits or animation libraries, Travelor demonstrates clean frontend architecture, responsive design systems, and production-level React development.",
    video: travelorPreview,
    image: travelorThumbnail,
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "React Router DOM v7",
      "Swiper.js",
      "@iconify/react",
      "react-countup",
      "JavaScript (ES6+)",
      "CSS Animations",
      "Vercel",
    ],
    features: [
      "13 fully routed pages with dynamic route parameters",
      "Advanced Swiper.js integrations with autoplay and custom navigation",
      "Animated hero section with MP4 video background and parallax effects",
      "Dynamic tour, destination, service, and blog detail pages",
      "Reusable component architecture with 30+ modular components",
      "Custom handcrafted CSS animations without animation libraries",
      "Animated counters using react-countup",
      "Responsive testimonials, tours, and destinations carousels",
      "Interactive FAQ accordion and booking widgets",
      "Responsive mobile navigation with slide-in drawer menus",
      "Custom shimmer button effects and hover interactions",
      "Fully responsive design optimized for desktop, tablet, and mobile",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Travelor",
    liveUrl: "https://travelor-one.vercel.app/",
    duration: "May 2026",
    category: "Frontend",
    featured: false,
  },
  {
    slug: "wavecast-podcast",
    title: "WaveCast 🎧 – Modern Podcast Platform",
    description:
      "A modern podcast discovery platform built with Next.js App Router. Explore podcast episodes, blogs, hosts, pricing plans, and FAQs in a clean, scalable UI.",
    longDescription:
      "WaveCast is a fully responsive, production-ready podcast platform built using Next.js App Router, React 19, TypeScript, and Tailwind CSS. It allows users to browse podcast episodes, read blogs, explore hosts, manage favorites, view pricing plans, and interact with FAQ sections. Designed with scalability in mind, WaveCast features clean architecture, reusable components, and smooth UX.",
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
    ],
    githubUrl: "https://github.com/Itssanthoshhere/WaveCast-Podcast",
    liveUrl: "https://wave-cast-podcast.vercel.app/",
    duration: "January 2026",
    category: "Frontend",
    featured: false,
  },
  {
    slug: "cinema-seat-booking",
    title: "🎬 Cinema Seat Booking – Interactive React Component",
    description:
      "A modern and responsive seat booking system built with React.js and TailwindCSS. Features dynamic seat layouts, categories, pricing, and booking flow.",
    longDescription:
      "Cinema Seat Booking is an interactive and customizable React component designed for cinema halls, theaters, and event booking platforms. It supports seat selection with categories like Regular, Premium, and VIP, dynamic pricing, booking summaries, aisle separation, and booked seat management.",
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
      "Interactive UI with click-to-select animations",
      "Responsive design across devices",
      "Post-booking status showing booked seat IDs",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Cinema-Seat-Booking",
    liveUrl: "https://cinemaseatbooking.vercel.app/",
    duration: "September 2025",
    category: "Component",
    featured: false,
  },
  {
    slug: "sweet-bite-bakery",
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
    category: "Frontend",
    featured: false,
  },
  {
    slug: "brew-bliss-coffee",
    title: "☕ Brew Bliss – Premium Coffee Experience",
    description:
      "A modern, fully responsive coffee shop website built with HTML, CSS, and JavaScript. Features a clean UI, interactive menu, testimonials slider, and smooth user experience.",
    longDescription:
      "Brew Bliss is a stylish and responsive coffee shop website designed to showcase premium coffee experiences and menu offerings. Developed with HTML, CSS, and vanilla JavaScript, it features an engaging Hero section, interactive menu categories, customer testimonials with Swiper.js, a gallery showcase, and a contact form.",
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
      "Customer Testimonials with Swiper slider",
      "Gallery section showcasing coffee shop ambiance",
      "Contact form for inquiries",
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Brew-Bliss",
    liveUrl: "https://brew-bliss-five.vercel.app/",
    duration: "September 2025",
    category: "Frontend",
    featured: false,
  },
];
