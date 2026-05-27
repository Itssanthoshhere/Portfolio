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
  duration: string;
  category: "Full-Stack" | "Mobile" | "3D Experience" | "Frontend" | "Component";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "quickshow-movie-booking",
    title: "QuickShow – Movie Theater Platform",
    description: "A modern movie booking platform built with React, Node.js, Express, and MongoDB. Features real-time seat booking and secure payments.",
    longDescription: "QuickShow is a full-stack movie theater booking application designed to deliver a seamless and interactive experience for both users and admins. Built with React, Node.js, Express, and MongoDB, it enables users to browse movies, book seats in real-time, and complete payments securely using Stripe.",
    video: quickshowPreview,
    image: quickshowThumbnail,
    technologies: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB", "Stripe", "Clerk Auth"],
    features: [
      "Real-time seat booking with dynamic layouts",
      "Secure payments powered by Stripe",
      "User authentication and profiles via Clerk",
      "Admin dashboard for movie and show management",
      "Movie catalog with trailers and details"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/QuickShow-Movie-Theater-Booking-Platform",
    liveUrl: "https://quick-show-ticketbooking.vercel.app/",
    duration: "October 2025",
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "converso-lms",
    title: "Converso 🎓 – AI-Powered LMS SaaS",
    description: "An AI-driven Learning Management System built with Next.js, Supabase, Clerk, and Vapi. Enables real-time voice-based learning.",
    longDescription: "Converso is a modern, full-stack SaaS Learning Management System designed to transform how users learn through real-time AI voice conversations. Built with Next.js App Router and TypeScript, it integrates Supabase for PostgreSQL-backed data handling and Vapi AI for low-latency speech-to-speech tutoring.",
    video: conversoPreview,
    image: conversoThumbnail,
    technologies: ["Next.js", "TypeScript", "Supabase", "Clerk Auth", "Stripe", "Vapi AI", "Tailwind CSS"],
    features: [
      "Real-time AI voice tutoring with speech-to-speech interaction",
      "Create and manage personalized AI companions",
      "Secure authentication and subscriptions with Clerk",
      "Stripe-powered subscription billing"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/lms-saas-app",
    liveUrl: "https://lms-saas-app-coral.vercel.app/",
    duration: "Nov 2025",
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "wavechat",
    title: "WaveChat 🌊 – Real-Time Messaging",
    description: "A production-grade full-stack messaging platform built with React 19, React Native (Expo), Express.js, MongoDB, and Socket.io.",
    longDescription: "WaveChat is a full-stack, cross-platform messaging application powered by a custom Socket.io server — giving full control over real-time infrastructure with no vendor lock-in. Works seamlessly across iOS, Android, and web.",
    video: wavechatPreview,
    image: wavechatThumbnail,
    technologies: ["React 19", "React Native", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Zustand"],
    features: [
      "Real-time messaging with custom Socket.io server",
      "Typing indicators and online/offline presence",
      "Optimistic UI updates for instant feel",
      "Cross-platform: iOS, Android, and Web from one backend"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/WaveChat-App",
    liveUrl: "https://wavechat-app.onrender.com/",
    duration: "April 2026",
    category: "Mobile",
    featured: true
  },
  {
    slug: "figpro-collaborative",
    title: "FigPro 🎨 – Collaborative Design App",
    description: "A real-time collaborative design platform built with Next.js, Liveblocks, and Fabric.js, supporting live cursors and drawing tools.",
    longDescription: "FigPro is a fully interactive, real-time collaborative design application inspired by Figma. Built using Next.js, TypeScript, Liveblocks, Fabric.js, and TailwindCSS, it allows multiple users to design together with features like live cursors, drawing tools, and shape editing.",
    video: figProPreview,
    image: figProThumbnail,
    technologies: ["Next.js", "TypeScript", "Liveblocks", "Fabric.js", "Tailwind CSS", "Shadcn/UI"],
    features: [
      "Real-time multi-user collaboration",
      "Live cursors with cursor chat",
      "Freeform drawing with synced paths",
      "Shape tools: rectangles, circles, lines, triangles, text"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/FigPro",
    liveUrl: "https://fig-pro-sandyy.vercel.app/",
    duration: "November 2025",
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "nimbus-keyboards-3d",
    title: "Nimbus Keyboards ⌨️ – 3D E-Commerce",
    description: "An immersive 3D keyboard showcase built with Next.js, TailwindCSS, Prismic CMS, and React Three Fiber.",
    longDescription: "Nimbus Keyboards is a modern 3D interactive website that brings keyboards to life with immersive visuals and e-commerce features. Built using Next.js 15, TypeScript, TailwindCSS, and Prismic CMS, it integrates React Three Fiber and GSAP for smooth animations.",
    video: nimbusPreview,
    image: nimbusThumbnail,
    technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "Prismic CMS", "React Three Fiber", "GSAP", "Stripe"],
    features: [
      "Immersive landing page with 3D keyboard hero",
      "3D keyboard models with rotate, zoom, and interact features",
      "Dynamic content management via Prismic CMS",
      "Stripe Checkout integration for real-world payments"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nimbus-Keyboard-3D",
    liveUrl: "https://nimbus-keyboard-3-d.vercel.app/",
    duration: "September 2025",
    category: "3D Experience",
    featured: true
  },
  {
    slug: "velvet-pour",
    title: "Velvet Pour 🍹 – GSAP Cocktail Site",
    description: "A scroll-driven, animated cocktail website built with React, GSAP, and Tailwind CSS. Features SplitText reveals and parallax.",
    longDescription: "Velvet Pour is a modern, interactive cocktail website built with React, GSAP, and Tailwind CSS. The project leverages advanced scroll-driven animations like SplitText reveals, ScrollTrigger timelines, pinned sections, parallax scrolling, and scroll-synced video playback.",
    video: velvetPourPreview,
    image: velvetThumbnail,
    technologies: ["React", "GSAP", "Tailwind CSS", "Vite", "ScrollTrigger"],
    features: [
      "Dynamic SplitText text reveals for bold section intros",
      "ScrollTrigger-powered timeline animations and effects",
      "Smooth parallax scrolling for immersive depth",
      "Scroll-synced video playback for cinematic impact"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Velvet-Pour",
    liveUrl: "https://velvet-pour-cocktail.vercel.app/",
    duration: "August 2025",
    category: "Frontend",
    featured: true
  },
  {
    slug: "suburbia-skate",
    title: "Suburbia Skate – 3D Skateboard Site",
    description: "A modern, interactive skateboard website with 3D animations using Next.js 15, TailwindCSS, Prismic CMS, and React Three Fiber.",
    longDescription: "Suburbia Skate is an interactive skateboard website showcasing products and 3D experiences using React Three Fiber. Users can explore products, view 3D skateboards, and interact with animations powered by GSAP.",
    video: suburbiaPreview,
    image: suburbiaThumbnail,
    technologies: ["Next.js 15", "React 19", "TailwindCSS", "Prismic CMS", "React Three Fiber", "GSAP"],
    features: [
      "Landing page with animated hero sections",
      "Interactive 3D skateboard models with rotation",
      "Dynamic content managed via Prismic CMS",
      "Custom animations powered by GSAP and React Three Fiber"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Suburbia-Skate",
    liveUrl: "https://suburbia-skate.vercel.app/",
    duration: "August 2025",
    category: "3D Experience",
    featured: false
  },
  {
    slug: "fizzi-soda",
    title: "Fizzi 🥤 – 3D Soda Can Experience",
    description: "Interactive 3D soda can animation website built with React Three Fiber, Next.js App Router, and Prismic CMS.",
    longDescription: "Fizzi 🥤 is a visually immersive 3D soda can experience built with React Three Fiber and powered by Prismic CMS. Designed as a creative product splash or personal branding demo, it features animated UI, custom SVGs, and CMS-editable content.",
    video: fizzi,
    image: fizziThumbnail,
    technologies: ["React Three Fiber", "Next.js", "Prismic CMS", "Tailwind CSS", "GSAP"],
    features: [
      "3D soda can animations with React Three Fiber",
      "CMS-powered content via Prismic",
      "Animated UI and custom SVG graphics",
      "Fully responsive and mobile-friendly layout"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Fizzi",
    liveUrl: "https://fizzi-soda-for-gusty-people.vercel.app/",
    duration: "July 2025",
    category: "3D Experience",
    featured: false
  },
  {
    slug: "expocommerce",
    title: "ExpoCommerce 🛒 – Mobile E-Commerce",
    description: "A production-style full-stack e-commerce platform with a React Native mobile app, admin dashboard, and REST API backend.",
    longDescription: "ExpoCommerce is a complete full-stack e-commerce platform consisting of a customer mobile application, an admin dashboard, and a scalable REST API backend. The mobile app is built using React Native with Expo and NativeWind for a smooth cross-platform UI.",
    video: expoCommercePreview,
    image: expoCommerceThumbnail,
    technologies: ["React Native", "Expo", "NativeWind", "Node.js", "MongoDB", "Stripe", "Clerk Auth"],
    features: [
      "Customer mobile app with product browsing and cart",
      "Secure authentication using Clerk (Google & Apple login)",
      "Stripe payment integration with Payment Sheet",
      "Admin dashboard for product, order, and customer management"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Expo-Ecommerce",
    duration: "December 2025",
    category: "Mobile",
    featured: false
  },
  {
    slug: "nike-ecommerce",
    title: "Nike E-commerce w/ Devin AI",
    description: "A full-stack modern eCommerce app featuring product pages, cart & checkout with Stripe, authentication, PostgreSQL/Drizzle ORM backend.",
    longDescription: "Nike-style E-commerce is a full-stack modern shopping platform built with Next.js 15, TypeScript, and TailwindCSS, featuring a PostgreSQL backend via NeonDB with Drizzle ORM, and secure authentication powered by Better Auth.",
    video: nikePreview,
    image: nikeThumbnail,
    technologies: ["Next.js 15", "TailwindCSS", "Drizzle ORM", "PostgreSQL", "Stripe", "Zustand"],
    features: [
      "Landing page with smooth animations and brand showcase",
      "Product listing with filters, sorting, and availability",
      "Shopping cart with Zustand state management",
      "Secure checkout with Stripe integration"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Nike-Ecommerce",
    liveUrl: "https://nike-ecommerce-black.vercel.app/",
    duration: "August 2025",
    category: "Full-Stack",
    featured: false
  },
  {
    slug: "rdye-cab-booking",
    title: "Rdye 🚖 – Cab Booking App",
    description: "A ride-booking mobile app built with React Native, Expo, Stripe, Google Maps, and PostgreSQL. Uber-like experience.",
    longDescription: "Rdye is a full-featured ride-booking application that replicates the Uber experience using a modern tech stack. Built with React Native and Expo, it includes real-time map tracking, Stripe-based payments, secure authentication with Clerk, and PostgreSQL database hosted via NeonDB.",
    video: rdyepreview,
    image: rdyeThumbnail,
    technologies: ["React Native", "Expo", "PostgreSQL", "Stripe", "Google Maps API", "Clerk Auth"],
    features: [
      "Smooth onboarding and authentication flow",
      "Real-time location tracking on Google Maps",
      "Search rides using Google Places Autocomplete",
      "Select, confirm, and pay for rides via Stripe"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Ryde",
    figmaUrl: "https://www.figma.com/design/blwkDHvyKdd9YqdOYNCBY7/Ryde---Uber-Clone-App",
    duration: "August 2025",
    category: "Mobile",
    featured: false
  },
  {
    slug: "real-scout",
    title: "Real Scout 🏡 – Real Estate App",
    description: "A modern cross-platform real estate app built with React Native, Expo, Appwrite, and Tailwind CSS.",
    longDescription: "Real Scout is a full-stack mobile application designed for discovering and managing property listings effortlessly. Built with React Native and Expo SDK 52, it integrates Appwrite for authentication, database, and file storage, while NativeWind ensures a clean design.",
    video: restate,
    image: rdyeThumbnail, // Using placeholder
    technologies: ["React Native", "Expo SDK 52", "Appwrite", "TypeScript", "Tailwind CSS"],
    features: [
      "Secure Google authentication",
      "Advanced search and filtering system",
      "Detailed property pages with photos, pricing, and full info",
      "Profile management and preferences"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Real-Scout",
    figmaUrl: "https://www.figma.com/design/F0pys4nJsQXz42KOzI2yl9/Real-Scout---Real-Estate-App",
    duration: "August 2025",
    category: "Mobile",
    featured: false
  }
];
