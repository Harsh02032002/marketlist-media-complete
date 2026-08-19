import alexie from "@/assets/alexie.jpg.asset.json";
import pavillion from "@/assets/pavillion.jpg.asset.json";
import prudhvi from "@/assets/prudhvi.jpg.asset.json";
import gowda from "@/assets/gowda.jpg.asset.json";
import mili from "@/assets/mili.jpg.asset.json";
import victoria from "@/assets/victoria.jpg.asset.json";
import natures from "@/assets/natures.jpg.asset.json";
import vale from "@/assets/vale.jpg.asset.json";
import inodaya from "@/assets/inodaya.jpg.asset.json";
import ecci from "@/assets/ecci.jpg.asset.json";
import mindful from "@/assets/mindful.jpg.asset.json";
import awon from "@/assets/awon.jpg.asset.json";
import voice from "@/assets/voice.jpg.asset.json";
import workvise from "@/assets/workvise.jpg.asset.json";
import progamez from "@/assets/progamez.jpg.asset.json";
import logo from "@/assets/logo.png.asset.json";

export const brand = {
  name: "Marketlist Media",
  handle: "marketlist.media",
  tagline: "Web Development & Digital Marketing",
  description:
    "Transforming brands into powerful digital presences with cutting-edge solutions.",
  logo: "/logo.png",
};

export const contact = {
  email: "marketlistmedia@gmail.com",
  phones: ["+91 90083 04998", "+91 80505 82430"],
  whatsapp: "919008304998",
  location: "Bangalore, Karnataka, India",
  mapEmbed:
    "https://www.google.com/maps?q=Bangalore,Karnataka,India&output=embed",
  mapLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka,+India",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Results", id: "results" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
] as const;

export type ServiceIcon =
  | "globe"
  | "trending"
  | "palette"
  | "code"
  | "search"
  | "megaphone";

export const services: {
  icon: ServiceIcon;
  title: string;
  description: string;
  accent: "blue" | "purple" | "pink";
}[] = [
  {
    icon: "globe",
    title: "Web Development",
    description:
      "Custom websites built with cutting-edge technology, optimized for speed and conversion.",
    accent: "blue",
  },
  {
    icon: "trending",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your reach and maximize ROI.",
    accent: "purple",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that create memorable user experiences.",
    accent: "pink",
  },
  {
    icon: "code",
    title: "App Development",
    description:
      "Powerful web and mobile applications tailored to your business needs.",
    accent: "blue",
  },
  {
    icon: "search",
    title: "SEO Optimization",
    description:
      "Strategic search optimization to dominate rankings and drive organic traffic.",
    accent: "purple",
  },
  {
    icon: "megaphone",
    title: "Brand Strategy",
    description:
      "Comprehensive branding that positions you as an industry leader.",
    accent: "pink",
  },
];

export const pricingCategories: {
  emoji: string;
  title: string;
  items: { name: string; price: string; note: string }[];
}[] = [
  {
    emoji: "💻",
    title: "Web Development",
    items: [
      {
        name: "Static Business Website",
        price: "₹9,999",
        note: "Up to 5 pages, mobile responsive, contact form",
      },
      {
        name: "Dynamic Website",
        price: "₹24,999",
        note: "CMS driven pages, blog, analytics integration",
      },
      {
        name: "E-commerce Website",
        price: "₹49,999+",
        note: "Product catalogue, payments, order management",
      },
      {
        name: "Web Application",
        price: "Custom",
        note: "Dashboards, portals and custom business logic",
      },
    ],
  },
  {
    emoji: "📈",
    title: "Digital Marketing",
    items: [
      {
        name: "SEO Starter",
        price: "₹7,999 / mo",
        note: "On-page SEO, keyword research, monthly reporting",
      },
      {
        name: "Social Media Management",
        price: "₹12,999 / mo",
        note: "Content calendar, creatives, community management",
      },
      {
        name: "Google & Meta Ads",
        price: "₹14,999 / mo",
        note: "Campaign setup, creatives, optimization",
      },
      {
        name: "Full Growth Retainer",
        price: "Custom",
        note: "SEO + paid ads + content + analytics",
      },
    ],
  },
  {
    emoji: "🎨",
    title: "Branding & Design",
    items: [
      {
        name: "Logo & Brand Mark",
        price: "₹4,999",
        note: "Primary logo, variations, usage guide",
      },
      {
        name: "Brand Identity Kit",
        price: "₹14,999",
        note: "Logo, palette, typography, brand guidelines",
      },
      {
        name: "UI/UX Design",
        price: "₹19,999",
        note: "Wireframes, high-fidelity screens, prototype",
      },
      {
        name: "Video & Motion",
        price: "Custom",
        note: "Promo videos, reels and motion graphics",
      },
    ],
  },
];

export const pricingPlans: {
  name: string;
  price: string;
  features: string[];
  accent: "blue" | "purple" | "pink";
  popular?: boolean;
}[] = [
  {
    name: "Basic",
    price: "₹9,999",
    accent: "blue",
    features: ["Static Website", "Basic SEO", "Mobile Responsive", "1 Month Support"],
  },
  {
    name: "Professional",
    price: "₹24,999",
    accent: "purple",
    popular: true,
    features: [
      "Dynamic Website",
      "SEO & Marketing",
      "Social Media Setup",
      "3 Months Support",
      "Analytics Dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "₹49,999+",
    accent: "pink",
    features: [
      "E-commerce Website",
      "Full Digital Marketing",
      "Brand Identity",
      "6 Months Support",
      "Dedicated Manager",
      "Priority Support",
    ],
  },
];

export const portfolio: {
  title: string;
  url: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Alexie Clothing",
    url: "https://alexieclothing.base44.app",
    description:
      "Premium fashion e-commerce platform with elegant product showcases and seamless shopping...",
    image: alexie.url,
  },
  {
    title: "Pavillion Park Chintamani",
    url: "https://pavillion-park-chintamani.base44.app",
    description:
      "Luxury residential community website featuring immersive property tours and modern amenity...",
    image: pavillion.url,
  },
  {
    title: "Prudhvi Project",
    url: "https://prudhvi-project.base44.app",
    description:
      "Professional portfolio showcasing creative digital projects with a clean, modern interface.",
    image: prudhvi.url,
  },
  {
    title: "Gowda Real Estates",
    url: "https://gowda-real-estates.base44.app",
    description:
      "Premium real estate platform with advanced property listings and virtual tour capabilities.",
    image: gowda.url,
  },
  {
    title: "Mili Resorts",
    url: "https://miliresorts.base44.app",
    description:
      "Tropical resort website with stunning visuals, booking integration, and immersive destination experiences.",
    image: mili.url,
  },
  {
    title: "Victoria Club Hotel",
    url: "https://victoria-club-hotel.base44.app",
    description:
      "Elegant 5-star hotel website featuring luxury amenities, room showcases, and online reservations.",
    image: victoria.url,
  },
  {
    title: "Natures Resorts",
    url: "https://naturesresorts.base44.app",
    description:
      "Eco-friendly nature resort platform highlighting sustainable tourism and serene getaway experiences.",
    image: natures.url,
  },
  {
    title: "Vale Forever",
    url: "https://valeforever.base44.app",
    description:
      "Romantic luxury brand website with elegant product displays and sophisticated visual storytelling.",
    image: vale.url,
  },
  {
    title: "Inodaya",
    url: "https://inodaya.base44.app",
    description:
      "Innovative Indian startup website combining modern technology with vibrant cultural identity.",
    image: inodaya.url,
  },
  {
    title: "ECCI",
    url: "https://ecci.base44.app",
    description:
      "Professional institute website featuring educational programs, corporate training, and excellence.",
    image: ecci.url,
  },
  {
    title: "Mindful Care",
    url: "https://mindful-care.base44.app",
    description:
      "Mental health and wellness platform with calming design, resources, and professional care services.",
    image: mindful.url,
  },
  {
    title: "Awon India Solutions",
    url: "https://awonindiasolutions.base44.app",
    description:
      "IT solutions company website showcasing technology services, team expertise, and client...",
    image: awon.url,
  },
  {
    title: "The Voice of Media",
    url: "https://thevoiceofmedia.base44.app",
    description:
      "Dynamic digital media platform featuring multimedia content, news coverage, and media production.",
    image: voice.url,
  },
  {
    title: "Workvise",
    url: "https://workvise.base44.app",
    description:
      "Modern HR and workforce management SaaS platform with analytics dashboards and team tools.",
    image: workvise.url,
  },
  {
    title: "ProGamez",
    url: "https://progamez.base44.app",
    description:
      "Gaming and esports platform with dynamic visuals, tournament features, and community engagement.",
    image: progamez.url,
  },
];

export const portfolioNotice =
  "All the above websites are prototype or demonstration versions created by Marketlist Media during client development phases. Final live websites and domains have been delivered to respective clients.";

export const stats: {
  icon: "globe" | "users" | "trending" | "award";
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}[] = [
  { icon: "globe", value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: "users", value: 40, suffix: "+", label: "Happy Clients" },
  { icon: "trending", value: 2, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { icon: "award", value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    quote:
      "Marketlist Media transformed our online presence completely. The website they built drives quality leads every single day. Exceptional work!",
    name: "Rajesh Kumar",
    role: "CEO, Gowda Real Estates",
    rating: 5,
  },
  {
    quote:
      "Their digital marketing strategy doubled our bookings within three months. The team is responsive, creative and genuinely invested in our growth.",
    name: "Priya Nair",
    role: "Founder, Mili Resorts",
    rating: 5,
  },
  {
    quote:
      "The e-commerce platform they delivered is fast, beautiful and easy to manage. Our online sales have never been stronger.",
    name: "Aditi Sharma",
    role: "Director, Alexie Clothing",
    rating: 5,
  },
  {
    quote:
      "From branding to launch, everything was handled with precision. Marketlist Media understands both design and business.",
    name: "Vikram Shetty",
    role: "Managing Partner, Awon India Solutions",
    rating: 5,
  },
  {
    quote:
      "Professional, transparent and incredibly fast. Our institute website now converts visitors into admissions consistently.",
    name: "Dr. Suresh Rao",
    role: "Principal, ECCI",
    rating: 5,
  },
];

export const founder = {
  eyebrow: "The Visionary",
  heading: "Meet the Founder",
  role: "Founder & CEO",
  name: "Aakarsh Reddy N",
  handle: "marketlist.media",
  initials: "AR",
  bio: [
    "A passionate digital entrepreneur with expertise in cutting-edge marketing strategies, AI-powered tools, and full-stack web development.",
    "Aakarsh founded Marketlist Media with a vision to empower businesses through intelligent digital solutions that drive real, measurable growth.",
    "With a deep understanding of brand psychology, consumer behavior, and modern technology, he leads a team dedicated to transforming brands into digital powerhouses.",
  ],
  skills: [
    "Full-Stack Web Development",
    "Digital Marketing Strategy",
    "AI-Powered Marketing Tools",
    "SEO & SEM Optimization",
    "Brand Identity Design",
    "Social Media Management",
    "E-commerce Solutions",
    "Google Ads & Meta Ads",
    "Content Strategy",
    "UI/UX Design",
    "Business Growth Consulting",
    "Video Marketing",
  ],
  orbitTags: ["Web Dev", "Branding", "AI Marketing"],
  socials: [
    { kind: "linkedin" as const, href: "https://www.linkedin.com/company/marketlist-media" },
    { kind: "instagram" as const, href: "https://www.instagram.com/marketlist.media" },
    { kind: "globe" as const, href: "#home" },
  ],
};

export const techStack: { label: string; short: string; color: string }[] = [
  { label: "React", short: "R", color: "oklch(0.78 0.15 220)" },
  { label: "Next.js", short: "N", color: "oklch(0.95 0 0)" },
  { label: "Node.js", short: "N", color: "oklch(0.75 0.17 145)" },
  { label: "Python", short: "P", color: "oklch(0.72 0.15 250)" },
  { label: "TypeScript", short: "T", color: "oklch(0.7 0.15 250)" },
  { label: "Tailwind", short: "T", color: "oklch(0.78 0.13 210)" },
  { label: "AWS", short: "A", color: "oklch(0.75 0.16 55)" },
  { label: "Firebase", short: "F", color: "oklch(0.82 0.16 85)" },
  { label: "MongoDB", short: "M", color: "oklch(0.75 0.17 145)" },
  { label: "PostgreSQL", short: "P", color: "oklch(0.7 0.14 265)" },
  { label: "Figma", short: "F", color: "oklch(0.68 0.22 20)" },
  { label: "AI / ML", short: "A", color: "oklch(0.78 0.15 220)" },
];

export const footerLinks = {
  quick: [
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Results", id: "results" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ],
  services: [
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "SEO Optimization",
    "Brand Strategy",
  ],
};

export const footerQuote =
  '"The best way to predict the future is to create it." - Precision Built by Gen Z Leaders';