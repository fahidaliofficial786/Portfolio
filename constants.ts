
import { BlogPost, FAQItem, PricingTier, ProcessStep, ServiceItem, Testimonial, ExperienceItem, CertificationItem, DetailedProject } from './types';

export const STOP_WORDS = [
  "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", 
  "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", 
  "can't", "cannot", "could", "couldn't", 
  "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", 
  "each", 
  "few", "for", "from", "further", 
  "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", 
  "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", 
  "let's", 
  "me", "more", "most", "mustn't", "my", "myself", 
  "no", "nor", "not", 
  "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", 
  "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", 
  "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", 
  "under", "until", "up", 
  "very", 
  "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", 
  "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"
];

export const CONTACT_CONFIG = {
  formspreeUrl: "https://formspree.io/f/xeorkqnk", 
  calendlyUrl: "https://calendly.com/fahidaliofficial/30min",
  email: "Fahaidaliofficial@gmail.com"
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start with a deep dive into your business logic. I map out the automation flows and security architecture that fits your specific scaling needs."
  },
  {
    number: "02",
    title: "Development & Hardening",
    description: "Whether it's a GHL Snapshot or a Custom WP Plugin, I build with a 'Security-First' mindset. Every automation is tested, every line of code sanitized."
  },
  {
    number: "03",
    title: "Deployment & Training",
    description: "I launch your system without downtime and provide Loom videos/documentation so your team knows exactly how to drive the new machine."
  },
  {
    number: "04",
    title: "Optimization & Support",
    description: "Digital landscapes change. I offer ongoing maintenance to ensure your GHL workflows stay active and your WP site remains impenetrable."
  }
];

export const WP_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Analysis & Assessment",
    description: "I perform a full-site audit to identify the extent of the infection, backdoors, and all security vulnerabilities."
  },
  {
    number: "02",
    title: "Removal & Cleanup",
    description: "I meticulously remove all malware from your files and database, ensuring no stone is left unturned and your data is safe."
  },
  {
    number: "03",
    title: "Hardening & Protection",
    description: "After cleanup, I implement robust security measures (Firewalls, Login Protection) to protect your site from future attacks."
  }
];

export const WP_TECHNICAL_FEATURES = [
  { name: "Protect .htaccess", icon: "fa-solid fa-file-code" },
  { name: "6G Firewall Protection", icon: "fa-solid fa-shield-virus" },
  { name: "Protect wp-config.php", icon: "fa-solid fa-database" },
  { name: "DoS Shield", icon: "fa-solid fa-user-shield" },
  { name: "Block Bad Query Strings", icon: "fa-solid fa-code-branch" },
  { name: "Block Fake Googlebots", icon: "fa-solid fa-robot" },
  { name: "Disable File Editing", icon: "fa-solid fa-ban" },
  { name: "Prevent Hotlinking", icon: "fa-solid fa-link-slash" },
  { name: "File Change Detection", icon: "fa-solid fa-tasks" },
  { name: "Rename Login Page", icon: "fa-solid fa-user-lock" },
  { name: "Block Spam Comments", icon: "fa-solid fa-comment-dots" },
  { name: "Database Backups", icon: "fa-solid fa-hdd" },
];

export const WP_WHY_CHOOSE_ME = [
  { title: "Proven Expertise", description: "Fiverr Level 2 Seller with 130+ positive reviews recovering hacked sites.", icon: "fa-solid fa-user-check" },
  { title: "Weekly Reports", description: "Automated security scans and status updates sent directly to your inbox.", icon: "fa-solid fa-file-invoice" },
  { title: "SEO Recovery", description: "Restoring rankings by removing malware redirects and submitting review requests.", icon: "fa-solid fa-chart-line" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Agency Owner",
    content: "Fahid completely transformed our onboarding process. What used to take us 4 hours per client is now done automatically in 5 minutes via GHL.",
    stars: 5
  },
  {
    name: "Michael Ross",
    role: "E-commerce Manager",
    content: "Our site was getting hit by malware every week. Fahid didn't just clean it; he set up a firewall that has kept us safe for 6 months straight.",
    stars: 5
  },
  {
    name: "David Chen",
    role: "SaaS Founder",
    content: "The custom API integration he built between Stripe and HighLevel saved us thousands in manual admin work. Fast delivery.",
    stars: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer white-label services for agencies?",
    answer: "Yes, I work as a silent partner for multiple agencies, handling their backend GHL automation and WordPress security tickets under their brand."
  },
  {
    question: "Can you automate my entire sales follow-up?",
    answer: "Absolutely. I can build multi-channel workflows (SMS, Email, Voicemail Drops) in GoHighLevel that nurture leads from 'New' to 'Booked Appointment' without you lifting a finger."
  },
  {
    question: "How do we communicate during the project?",
    answer: "I use WhatsApp for quick updates and Calendly/Zoom for milestone reviews. You will have full transparency into the project status at all times."
  }
];

export const WP_FAQS: FAQItem[] = [
  {
    question: "How do I know if my WordPress site is hacked?",
    answer: "Common signs include unusual traffic spikes, defaced homepage, unwanted pop-ups, redirects to malicious sites, and warnings from Google or your hosting provider."
  },
  {
    question: "How long does the malware removal process take?",
    answer: "Most standard cleanups are completed within 24 hours. For severe infections, I prioritize speed to minimize downtime."
  },
  {
    question: "Will you get my site off Google's blacklist?",
    answer: "Yes. After cleaning, I submit a review request to Google and other authorities. Delisting typically takes 24-72 hours."
  },
  {
    question: "Can you guarantee the hack won't happen again?",
    answer: "While no site is 100% unhackable, my security hardening (Firewalls, Login Protection) drastically reduces risk and makes your site a hard target."
  }
];

export const TECH_STACK = [
  { name: "GoHighLevel", icon: "fa-solid fa-rocket" },
  { name: "WordPress", icon: "fa-brands fa-wordpress" },
  { name: "Zapier", icon: "fa-solid fa-bolt" },
  { name: "OpenAI API", icon: "fa-solid fa-brain" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "WooCommerce", icon: "fa-solid fa-cart-shopping" },
  { name: "Make.com", icon: "fa-solid fa-circle-nodes" },
  { name: "Stripe", icon: "fa-brands fa-stripe" }
];

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/+923484103239?text=Hello-I-Need-Help",
  linkedin: "https://www.linkedin.com/in/fahidaliofficial",
  github: "https://github.com/fahidaliofficial",
  fiverr: "https://www.fiverr.com/users/fahidaliofficia/portfolio",
  email: "mailto:Fahaidaliofficial@gmail.com",
  calendly: "https://calendly.com/fahidaliofficial/30min",
  youtube: "https://youtube.com/@FHDtech",
  instagram: "https://www.instagram.com/fahidaliofficial",
  facebook: "https://facebook.com/fahidaliofficial",
  twitter: "https://twitter.com/fahidali0",
  tiktok: "https://vm.tiktok.com/fahidaliofficial",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "WordPress Site Hacked? 7 Telltale Signs and Your Emergency Action Plan",
    date: "October 01, 2025",
    author: "Fahid Ali",
    summary: "A hacked WordPress website is a direct threat. Learn to spot the 7 most common red flags like Blacklist warnings and redirects.",
    content: `...` 
  },
  {
    id: 2,
    title: "Why WordPress is a Prime Target (And How to Fortify Your Site)",
    date: "October 03, 2025",
    author: "Fahid Ali",
    summary: "WordPress powers over 40% of the web. Understand vulnerabilities like outdated plugins and weak passwords.",
    content: ""
  },
  {
    id: 3,
    title: "Your Website's Lifeline: The Ultimate Guide to WordPress Backups",
    date: "October 05, 2025",
    author: "Fahid Ali",
    summary: "A single hack or server crash can wipe out years of work. Discover why automated off-site backups are non-negotiable.",
    content: ""
  },
  {
    id: 4,
    title: "Top 5 Security Plugins to Harden Your WordPress Site in 2025",
    date: "October 07, 2025",
    author: "Fahid Ali",
    summary: "Reviewing the top 5 essential plugins that provide firewall protection, malware scanning, and login security.",
    content: ""
  },
  {
    id: 5,
    title: "Anatomy of a WordPress Hack: Common Attack Vectors Explained",
    date: "October 09, 2025",
    author: "Fahid Ali",
    summary: "From SQL Injection to XSS. We break down the most common attack vectors and how to block them.",
    content: ""
  }
];

export const SECURITY_PRICING: PricingTier[] = [
  {
    title: "Emergency Cleanup",
    price: "$150",
    features: [
      "Deep Scan: Full file system & database",
      "Guaranteed Malware Removal",
      "Blacklist Removal (Google etc.)",
      "24-48 Hour Turnaround",
      "Security patch installation",
      "Software version upgrade",
      "Remove shell scripts"
    ],
    ctaText: "Get Started"
  },
  {
    title: "Pro Security Package",
    price: "$250",
    period: "/mo",
    recommended: true,
    features: [
      "Everything in Emergency Plan",
      "Advanced Security Hardening",
      "6G Firewall Setup & Config",
      "Vulnerability Assessment",
      "60 Days Post-Cleanup Support",
      "Daily Reports & Server Management",
      "Brute force attack prevention",
      "Priority Backups & Restoration",
      "Small customization tasks included"
    ],
    ctaText: "Choose Pro"
  },
  {
    title: "Maintenance Plan",
    price: "$50",
    features: [
      "Ongoing Security Monitoring 24/7",
      "Weekly Automated Scans & Reports",
      "Cloud Backups (Off-site)",
      "Plugin, Theme & Core Updates",
      "Priority Email Support",
      "Basic Malware Removal",
      "Prebuild Security layers"
    ],
    ctaText: "Subscribe"
  }
];

export const GHL_SERVICES: ServiceItem[] = [
  {
    iconClass: "fa-solid fa-star",
    title: "GHL Virtual Assistant",
    description: "Dedicated support to manage and optimize your GoHighLevel operations, ensuring seamless daily execution."
  },
  {
    iconClass: "fa-solid fa-robot",
    title: "AI Employee Automations",
    description: "AI-driven workflows for lead nurturing, sales, and support that work 24/7 without breaks."
  },
  {
    iconClass: "fa-solid fa-sliders",
    title: "SaaS Configuration",
    description: "Build and deploy your own white-labeled SaaS with custom snapshots and onboarding flows."
  },
  {
    iconClass: "fa-solid fa-bolt",
    title: "Zapier & Make.com",
    description: "Complex integrations connecting GHL with third-party tools via API, Webhooks, and middleware."
  }
];

export const WP_SERVICES: ServiceItem[] = [
  {
    iconClass: "fa-solid fa-virus-slash",
    title: "Complete Malware Removal",
    description: "Deep file and database scan to find and eliminate all malicious code, backdoors, and injection scripts."
  },
  {
    iconClass: "fa-solid fa-file-excel",
    title: "Blacklist Removal",
    description: "I'll handle the entire process of getting your site removed from Google, McAfee, and other security blacklists."
  },
  {
    iconClass: "fa-solid fa-shield-alt",
    title: "Security Hardening",
    description: "Implementation of best-practice security measures to prevent future attacks and protect your digital assets."
  },
  {
    iconClass: "fa-solid fa-fire-extinguisher",
    title: "Emergency 24/7 Cleanup",
    description: "Facing a critical issue? I offer rapid response services to tackle urgent security threats immediately."
  },
  {
    iconClass: "fa-solid fa-user-secret",
    title: "Vulnerability Patching",
    description: "I identify and fix security loopholes in your themes, plugins, and core files before hackers can exploit them."
  },
  {
    iconClass: "fa-solid fa-file-shield",
    title: "Post-Hack Consultation",
    description: "A full report on the hack and actionable steps you can take to maintain a secure website going forward."
  }
];

// New Data from HTML Source
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "GHL Automation Specialist",
    company: "m4suite.com",
    period: "Present",
    description: [
      "Implementing end-to-end GoHighLevel solutions for clients, boosting lead conversion by over 30%.",
      "Automating client onboarding processes, reducing manual setup time by 15 hours per week."
    ]
  },
  {
    title: "Technical VA",
    company: "Respromos.com",
    period: "Ongoing",
    description: [
      "Providing monthly technical support, website maintenance, and SEO services to ensure optimal performance."
    ]
  },
  {
    title: "Website Maintenance Specialist",
    company: "UnaryTeam",
    period: "Past Project",
    description: [
      "Managed website updates, security, and performance optimization for a Kuwait-based client."
    ]
  },
  {
    title: "Freelance Consultant (Level 2 Seller)",
    company: "Fiverr",
    period: "Ongoing",
    description: [
      "Successfully completed over 130 projects with a 4.9-star rating, specializing in WordPress security, bug fixing, and custom development."
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Certified GHL Automation Pro",
    issuer: "m4suite.com",
    iconClass: "fa-solid fa-star"
  },
  {
    title: "Certified WordPress Developer",
    issuer: "DigiSkills Pakistan",
    iconClass: "fa-brands fa-wordpress-simple"
  },
  {
    title: "Advanced WordPress Security",
    issuer: "Punjab Group of Colleges",
    iconClass: "fa-solid fa-shield-virus"
  },
  {
    title: "Zapier Certified Expert",
    issuer: "Zapier",
    iconClass: "fa-solid fa-bolt-lightning"
  }
];

export const FEATURED_PROJECTS: DetailedProject[] = [
  {
    title: "AI-Powered GHL Lead Bot",
    description: "Pre-qualifies leads via conversational AI, categorizes them, and books appointments, boosting sales team efficiency by 40%.",
    iconClass: "fa-solid fa-brain"
  },
  {
    title: "GHL SaaS Setup for Agency",
    description: "Configured GHL in SaaS mode with custom snapshots, enabling a marketing agency to white-label and sell the platform.",
    iconClass: "fa-solid fa-server"
  },
  {
    title: "E-commerce Cart Recovery",
    description: "Built a GHL workflow with multi-channel follow-ups (Email, SMS, Voice) to recover abandoned carts, increasing revenue by 18%.",
    iconClass: "fa-solid fa-shopping-cart"
  },
  {
    title: "Real Estate Analytics Dashboard",
    description: "Integrated multiple APIs to build a custom dashboard for a realtor, providing real-time property value and market trend insights.",
    iconClass: "fa-solid fa-chart-area"
  },
  {
    title: "Custom WordPress Security Suite",
    description: "Engineered a bespoke security plugin with real-time malware scanning, reducing threats by 95% for an e-commerce client.",
    iconClass: "fa-solid fa-shield-halved"
  },
  {
    title: "Automated Client Onboarding",
    description: "Created a zero-touch onboarding system linking e-signatures to GHL workflows for automated project creation and client communication.",
    iconClass: "fa-solid fa-handshake-angle"
  },
  {
    title: "GHL Membership Site",
    description: "Launched a full online course platform within GHL, with automated student progress tracking and certificate issuance.",
    iconClass: "fa-solid fa-graduation-cap"
  },
  {
    title: "Dynamic Coupon Bot",
    description: "Used webhooks to connect a website's 'spin-the-wheel' game to GHL, generating and applying unique coupon codes to contacts.",
    iconClass: "fa-solid fa-ticket"
  }
];
