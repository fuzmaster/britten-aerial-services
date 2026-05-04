export const site = {
  name: "Britten Aerial Services",
  tagline: "Drone & Real Estate Media in Massachusetts",
  phone: "774-231-8523",
  email: "brittenaerialservices@gmail.com",
  location: "Peabody, MA",
  serviceArea: "North Shore and surrounding Massachusetts communities",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Book a Shoot" },
];

export const media = {
  hero: "/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg",
  showreel: "/assets/videos/bas-showreel-2024.mp4",
  showreelPoster: "/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg",
  contact: "/assets/contact/bas-real-estate-drone-photography-ma-contact.jpg",
  faq: "/assets/faq/bas-drone-photography-faq-coastal-background.jpg",
  aboutFallback: "/assets/portfolio/bas-coastal-drone-photography-lighthouse-bridge-01.jpg",
};

export type Service = {
  title: string;
  description: string;
  bestFor: string;
  includes: string[];
  image: string;
};

export const services: Service[] = [
  {
    title: "Real Estate Photography",
    description: "Interior and exterior listing photos edited for MLS, social media, and agent marketing.",
    bestFor: "Agents, homeowners, rentals, and property managers.",
    includes: ["Interior photos", "Exterior photos", "MLS-ready exports", "Social media versions"],
    image: "/assets/services/bas-real-estate-interior-photography-living-room.jpg",
  },
  {
    title: "Drone Photography",
    description: "Aerial photos for listings, land, waterfront properties, commercial spaces, and marketing.",
    bestFor: "Larger lots, waterfront listings, and properties with strong curb appeal.",
    includes: ["High-resolution aerial stills", "Neighborhood context angles", "Edited digital delivery", "Web and print versions"],
    image: "/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg",
  },
  {
    title: "Drone Video",
    description: "Smooth aerial video for listing tours, social clips, business promos, and property showcases.",
    bestFor: "Listings and businesses that need motion-driven marketing content.",
    includes: ["Cinematic flyovers", "Short social-ready clips", "Horizontal and vertical exports", "Ready-to-post files"],
    image: "/assets/portfolio/bas-coastal-drone-photography-lighthouse-bridge-01.jpg",
  },
  {
    title: "Roof & Inspection Photos",
    description: "Drone-based roof and property documentation for safer inspections and claim support.",
    bestFor: "Property managers, contractors, and homeowners who need visual documentation.",
    includes: ["Roof overview photos", "Detail angles", "Safer no-ladder capture", "Organized file sets"],
    image: "/assets/services/bas-drone-roof-inspection-chimney-detail-01.jpg",
  },
  {
    title: "Floor Plans & Tours",
    description: "Listing add-ons that help buyers understand layout, flow, and property value before visiting.",
    bestFor: "Agents who want higher-quality listing packages and clearer buyer expectations.",
    includes: ["Floor plan capture", "Tour-ready media", "Package integration", "Marketing-ready deliverables"],
    image: "/assets/services/bas-real-estate-floor-plan-peabody-ma.jpg",
  },
  {
    title: "Marketing Video Production",
    description: "Short promotional videos, branded visuals, and social media assets for local businesses.",
    bestFor: "Businesses and agents who need consistent local marketing media.",
    includes: ["Edited promo videos", "Brand-focused visuals", "Social cutdowns", "Commercial-ready exports"],
    image: "/assets/services/bas-real-estate-exterior-photography.jpg",
  },
];

export type Package = {
  name: string;
  bestFor: string;
  items: string[];
  ctaLabel: string;
  recommended?: boolean;
};

export const packages: Package[] = [
  {
    name: "Starter Listing Photos",
    bestFor: "Condos, rentals, and smaller homes that need clean launch-ready media.",
    items: ["25 to 35 edited photos", "Interior and exterior coverage", "MLS-ready export", "Fast digital delivery"],
    ctaLabel: "Book starter package",
  },
  {
    name: "Aerial Add-On Package",
    bestFor: "Homes with lot size, waterfront views, and neighborhood context worth showing.",
    items: ["8 to 12 edited aerial photos", "Context and elevation angles", "High-resolution exports", "Social-ready versions"],
    ctaLabel: "Book aerial add-on",
  },
  {
    name: "Premium Listing Package",
    bestFor: "Higher-value listings and agents who want complete marketing coverage.",
    items: ["Interior and exterior photos", "Drone photos", "Walkthrough video", "Floor plan add-on option"],
    ctaLabel: "Book premium package",
    recommended: true,
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Residential Listing Media",
    category: "Real Estate",
    description: "Aerial and listing media for a property marketing package.",
    image: "/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg",
  },
  {
    title: "Interior Real Estate Photography",
    category: "Photography",
    description: "Clean interior image work for MLS and agent marketing.",
    image: "/assets/services/bas-real-estate-interior-photography-living-room.jpg",
  },
  {
    title: "Kitchen / Detail Photography",
    category: "Photography",
    description: "Bright interior detail photography for property listings.",
    image: "/assets/services/bas-real-estate-kitchen-photography.jpg",
  },
  {
    title: "Roof Inspection Photos",
    category: "Inspection",
    description: "Close drone documentation for roof and chimney review.",
    image: "/assets/services/bas-drone-roof-inspection-chimney-detail-01.jpg",
  },
  {
    title: "Coastal Drone Photography",
    category: "Drone",
    description: "Cinematic coastal aerials for portfolio and print use.",
    image: "/assets/portfolio/bas-coastal-drone-photography-lighthouse-bridge-01.jpg",
  },
  {
    title: "Scenic Aerial Prints",
    category: "Prints",
    description: "Massachusetts aerial landscape photography for print and portfolio use.",
    image: "/assets/prints/bas-scenic-aerial-print-massachusetts-01.jpg",
  },
];

export const faqs = [
  { q: "How do I prepare a property before a shoot?", a: "Declutter countertops, open blinds, turn on all lights, and remove vehicles from key exterior views. A clean prep makes every shot stronger." },
  { q: "Can you shoot interiors and exteriors?", a: "Yes. Listing sessions can include interior photography, exterior coverage, and add-ons like drone media and floor plans." },
  { q: "Can I use the photos on MLS and social media?", a: "Yes. Deliverables are prepared for MLS, social media, and standard marketing use." },
  { q: "What happens if weather cancels the drone shoot?", a: "If conditions are unsafe for flight, the drone portion is rescheduled for the next workable weather window." },
  { q: "How fast is delivery?", a: "Most projects are delivered quickly, with turnaround depending on property size and selected services." },
  { q: "Do you offer video and floor plans?", a: "Yes. Video, walkthrough media, and floor plan add-ons are available for listing packages." },
  { q: "Are you FAA licensed?", a: "Yes. Britten Aerial Services operates with FAA-compliant drone practices." },
  { q: "What areas do you serve?", a: "The company is based in Peabody, MA and serves the North Shore and surrounding Massachusetts communities." },
];
