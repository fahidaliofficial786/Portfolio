
import { FAQItem } from '../types';

export interface ServicePageData {
  id: string;
  seoTitle: string;
  seoDesc: string;
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  painPoints: {
    title: string;
    items: { icon: string; title: string; desc: string }[];
  };
  targetAudience: {
    title: string;
    list: string[];
  };
  solution: {
    title: string;
    desc: string;
    imageIcon: string;
  };
  methodology: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  features: {
    title: string;
    items: { title: string; desc: string }[];
  };
  deliverables: string[];
  comparison: {
    us: string[];
    others: string[];
  };
  techStack: {
    title: string;
    icons: string[];
  };
  process: {
    title: string;
    steps: { number: string; title: string; desc: string }[];
  };
  caseStudy: {
    title: string;
    metric: string;
    desc: string;
  };
  industries: string[];
  faqs: FAQItem[];
}

export const SERVICES_DATA: Record<string, ServicePageData> = {
  'websites': {
    id: 'websites',
    seoTitle: 'Custom Website Development & Digital Presence',
    seoDesc: 'High-performance, security-first website development using React, WordPress, and Next.js. Build a digital fortress that converts.',
    hero: {
      title: 'BUILD YOUR DIGITAL',
      highlight: 'FORTRESS',
      subtitle: 'We don’t just build websites; we engineer high-performance digital assets secured against modern threats and optimized for maximum conversion.'
    },
    stats: [
      { label: 'Avg Speed Score', value: '98/100' },
      { label: 'Uptime Guarantee', value: '99.9%' },
      { label: 'Security Breaches', value: '0' }
    ],
    painPoints: {
      title: 'Is Your Website Failing You?',
      items: [
        { icon: 'fa-solid fa-stopwatch', title: 'Slow Load Times', desc: 'Google penalizes slow sites. If it takes >3s to load, you are losing 40% of traffic.' },
        { icon: 'fa-solid fa-shield-virus', title: 'Security Vulnerabilities', desc: 'WordPress sites are hacked every minute. Is your current build actually secure?' },
        { icon: 'fa-solid fa-mobile-screen-button', title: 'Poor Mobile UX', desc: '70% of users are on mobile. If your site breaks on phones, you are invisible.' }
      ]
    },
    targetAudience: {
      title: 'Who This Is For',
      list: ['SaaS Startups needing high-speed landing pages', 'Agencies requiring white-label dev work', 'E-commerce brands needing secure checkout flows', 'Professional Services (Law, Medical) needing trust']
    },
    solution: {
      title: 'The FHD Architecture',
      desc: 'I combine military-grade security protocols with modern frontend frameworks (React/Next.js) or hardened WordPress builds. The result is a site that loads instantly, ranks high, and withstands attacks.',
      imageIcon: 'fa-solid fa-layer-group'
    },
    methodology: {
      title: 'Our Engineering Philosophy',
      steps: [
        { title: 'Mobile-First Indexing', desc: 'We build for the smallest screen first, ensuring Google loves your site structure.' },
        { title: 'Security by Design', desc: 'We don\'t add security later. We bake 6G firewalls into the core code.' },
        { title: 'Conversion Psychology', desc: 'Every button color and placement is chosen based on user behavior data.' }
      ]
    },
    features: {
      title: 'Core Deliverables',
      items: [
        { title: 'Custom UI/UX Design', desc: 'Glassmorphism, Neomorphism, or Minimalist - tailored to your brand identity.' },
        { title: '6G Firewall Integration', desc: 'Pre-installed security layers to block bots, SQLi, and XSS attacks.' },
        { title: 'Speed Optimization', desc: '90+ Google PageSpeed scores guaranteed via code splitting and caching.' },
        { title: 'Conversion Logic', desc: 'Strategically placed CTAs and funnels integrated directly into the design.' }
      ]
    },
    deliverables: [
        "Fully Responsive Website",
        "Source Code / WP Admin Access",
        "Speed Optimization Report",
        "Security Hardening Log",
        "Basic SEO Setup (Meta tags, Schema)",
        "30 Days Post-Launch Support"
    ],
    comparison: {
        us: ["Custom Code / Hardened WP", "Load Time < 1s", "Built-in Security Shield", "Conversion Focused UI"],
        others: ["Slow Elementor Templates", "Load Time > 4s", "Vulnerable to Hacks", "Generic Templates"]
    },
    process: {
      title: 'Development Lifecycle',
      steps: [
        { number: '01', title: 'Blueprint', desc: 'Wireframing the user journey and defining security requirements.' },
        { number: '02', title: 'Engineering', desc: 'Coding the frontend and hardening the backend infrastructure.' },
        { number: '03', title: 'Stress Testing', desc: 'Simulating traffic spikes and penetration testing before launch.' },
        { number: '04', title: 'Deployment', desc: 'Live server setup with CDN integration and automated backups.' }
      ]
    },
    techStack: {
      title: 'Powered By',
      icons: ['fa-brands fa-react', 'fa-brands fa-wordpress', 'fa-brands fa-js', 'fa-brands fa-css3', 'fa-brands fa-html5', 'fa-brands fa-aws']
    },
    caseStudy: {
        title: "E-Commerce Overhaul",
        metric: "+200% Sales",
        desc: "Rebuilt a hacked WooCommerce store with a headless React frontend. Eliminated downtime and doubled conversion rate in 30 days."
    },
    industries: ['SaaS', 'E-commerce', 'Agencies', 'Real Estate', 'Healthcare'],
    faqs: [
      { question: 'Do you use templates?', answer: 'No. Every line of code is optimized for your specific needs, even if we start with a framework.' },
      { question: 'Is hosting included?', answer: 'I can set up high-performance cloud hosting (DigitalOcean/Vultr) for you.' },
      { question: 'How long does it take?', answer: 'A standard secure business site takes 2-3 weeks from blueprint to launch.' }
    ]
  },
  'advertising': {
    id: 'advertising',
    seoTitle: 'Paid Advertising & PPC Management',
    seoDesc: 'Data-driven PPC campaigns on Google & Meta. Maximize ROAS with AI-targeting and automated bid strategies.',
    hero: {
      title: 'ALGORITHMIC AD',
      highlight: 'DOMINANCE',
      subtitle: 'Stop burning cash. We use AI-driven targeting and automated bid strategies to put your offer in front of the exact people ready to buy.'
    },
    stats: [
      { label: 'Avg ROAS', value: '4.5x' },
      { label: 'Ad Spend Managed', value: '$500k+' },
      { label: 'Leads Generated', value: '10k+' }
    ],
    painPoints: {
      title: 'Why Most Ads Fail',
      items: [
        { icon: 'fa-solid fa-fire-burner', title: 'Budget Burn', desc: 'Spending thousands on clicks that never convert due to poor targeting.' },
        { icon: 'fa-solid fa-eye-slash', title: 'Banner Blindness', desc: 'Creative that looks like "just another ad" gets ignored by prospects.' },
        { icon: 'fa-solid fa-chart-line-down', title: 'Low ROAS', desc: 'Not tracking pixel data correctly leads to negative ROI campaigns.' }
      ]
    },
    targetAudience: {
        title: "Ideal For",
        list: ["Local Service Businesses", "Coaches & Consultants", "E-commerce Brands", "Real Estate Agents"]
    },
    solution: {
      title: 'Precision Targeting Protocol',
      desc: 'We don’t guess. We use GHL and pixel data to build "Lookalike Audiences" of your best customers, then hit them with high-converting creative.',
      imageIcon: 'fa-solid fa-bullseye'
    },
    methodology: {
        title: "The Testing Phase",
        steps: [
            { title: "Rapid Testing", desc: "We launch 10-20 ad variations with small budgets to find winners fast." },
            { title: "Scaling Winners", desc: "Once an ad hits the KPI, we double the budget every 48 hours." },
            { title: "Retargeting Loop", desc: "We show different ads to people who clicked but didn't buy." }
        ]
    },
    features: {
      title: 'Campaign Modules',
      items: [
        { title: 'Google Search Ads', desc: 'Capture high-intent leads searching for your exact solution right now.' },
        { title: 'Meta Retargeting', desc: 'Follow up with site visitors who didn’t buy, bringing them back to the funnel.' },
        { title: 'A/B Creative Testing', desc: 'Running 5-10 variations of headlines and images to find the winner.' },
        { title: 'Conversion Tracking', desc: 'Server-side API tracking to bypass iOS14 privacy blocks.' }
      ]
    },
    deliverables: [
        "Ad Account Setup",
        "Pixel & CAPI Installation",
        "Weekly Performance Reports",
        "Creative Design (Images/Video)",
        "Copywriting",
        "Audience Management"
    ],
    comparison: {
        us: ["Data-Driven Decisions", "Full Funnel Tracking", "Creative Production Included", "Daily Optimization"],
        others: ["Gut Feeling", "Click Metrics Only", "You Provide Images", "Set & Forget"]
    },
    process: {
      title: 'Campaign Launch Sequence',
      steps: [
        { number: '01', title: 'Audit', desc: 'Analyzing past ad account performance and competitor ads.' },
        { number: '02', title: 'Setup', desc: 'Installing Pixels, CAPI, and configuring GHL tracking.' },
        { number: '03', title: 'Launch', desc: 'Going live with initial testing budget to gather data.' },
        { number: '04', title: 'Scale', desc: 'Cutting losers and doubling budget on winning ad sets.' }
      ]
    },
    techStack: {
      title: 'Ad Platforms',
      icons: ['fa-brands fa-google', 'fa-brands fa-facebook', 'fa-brands fa-instagram', 'fa-brands fa-tiktok', 'fa-brands fa-linkedin']
    },
    caseStudy: {
        title: "Solar Lead Gen",
        metric: "$12 Leads",
        desc: "Reduced cost per lead from $45 to $12 for a solar company using YouTube Ads and GHL automated follow-ups."
    },
    industries: ['Local Service', 'E-commerce', 'Coaching', 'Solar', 'Roofing'],
    faqs: [
      { question: 'What is the minimum budget?', answer: 'We recommend at least $1,000/mo in ad spend to get statistically significant data.' },
      { question: 'Do you guarantee leads?', answer: 'We guarantee the system and targeting. Lead volume depends on market demand and offer.' },
      { question: 'Do I own the ad account?', answer: 'Yes. You retain full ownership of all data and creative assets.' }
    ]
  },
  'content': {
    id: 'content',
    seoTitle: 'Content Strategy & Creative Production',
    seoDesc: 'SEO-driven content creation and creative design. Establish authority and engage your audience with high-value narratives.',
    hero: {
      title: 'NARRATIVE',
      highlight: 'ARCHITECTURE',
      subtitle: 'Content isn’t just text; it’s code for the human brain. We engineer articles, visuals, and scripts that position you as the undisputed authority.'
    },
    stats: [
      { label: 'Words Written', value: '1M+' },
      { label: 'Traffic Increase', value: '300%' },
      { label: 'Keywords Ranked', value: '500+' }
    ],
    painPoints: {
      title: 'The Content Gap',
      items: [
        { icon: 'fa-solid fa-ghost', title: 'Inconsistency', desc: 'Posting randomly without a strategy leads to zero audience growth.' },
        { icon: 'fa-solid fa-robot', title: 'Generic AI Fluff', desc: 'Using raw ChatGPT content that sounds robotic and gets flagged by Google.' },
        { icon: 'fa-solid fa-ear-deaf', title: 'Zero Engagement', desc: 'Creating content that speaks to no one and solves no problems.' }
      ]
    },
    targetAudience: {
        title: "Perfect For",
        list: ["Thought Leaders", "B2B Tech Companies", "Agencies", "Health Professionals"]
    },
    solution: {
      title: 'Value-First Methodology',
      desc: 'We combine SEO keyword research with human storytelling. Every piece of content is designed to answer a specific question your prospect is asking.',
      imageIcon: 'fa-solid fa-pen-nib'
    },
    methodology: {
        title: "The Production Line",
        steps: [
            { title: "Keyword Clustering", desc: "Finding groups of keywords to attack with a single pillar page." },
            { title: "Human Editing", desc: "Ensuring voice, tone, and empathy are present in every sentence." },
            { title: "Visual Enhancement", desc: "Adding custom graphics to break up text and increase time-on-page." }
        ]
    },
    features: {
      title: 'Production Units',
      items: [
        { title: 'SEO Blog Writing', desc: 'Long-form articles optimized to rank on Page 1 for buyer-intent keywords.' },
        { title: 'Social Media Graphics', desc: 'High-end visuals that stop the scroll on LinkedIn and Instagram.' },
        { title: 'Email Newsletters', desc: 'Nurture sequences that turn cold leads into warm appointments.' },
        { title: 'Video Scripts', desc: 'Hook-Body-CTA frameworks for YouTube and TikTok.' }
      ]
    },
    deliverables: [
        "Content Calendar",
        "4x SEO Blogs / Month",
        "12x Social Posts / Month",
        "Custom Thumbnails/Graphics",
        "Keyword Research Report",
        "Performance Analytics"
    ],
    comparison: {
        us: ["SEO-Backed Strategy", "Human Written/Edited", "Custom Graphics", "Conversion Focused"],
        others: ["Random Topics", "Raw AI Output", "Stock Photos", "Just for 'Likes'"]
    },
    process: {
      title: 'Content Factory',
      steps: [
        { number: '01', title: 'Research', desc: 'Finding low-difficulty, high-volume keywords in your niche.' },
        { number: '02', title: 'Drafting', desc: 'Creating the skeleton and flesh of the content.' },
        { number: '03', title: 'Optimization', desc: 'Injecting keywords and internal links for SEO juice.' },
        { number: '04', title: 'Distribution', desc: 'Publishing across your website and social channels.' }
      ]
    },
    techStack: {
      title: 'Creative Tools',
      icons: ['fa-solid fa-pen-fancy', 'fa-brands fa-figma', 'fa-solid fa-camera', 'fa-solid fa-video', 'fa-solid fa-microphone']
    },
    caseStudy: {
        title: "SaaS Blog Growth",
        metric: "+50k Visitors",
        desc: "Scaled a B2B SaaS blog from 0 to 50,000 monthly organic visitors in 6 months using pillar cluster strategy."
    },
    industries: ['Tech', 'Finance', 'Health', 'Legal', 'Marketing'],
    faqs: [
      { question: 'Is this AI generated?', answer: 'We use AI for research, but 100% of the writing and editing is human to ensure voice and tone.' },
      { question: 'How often do you post?', answer: 'Depends on the package. Usually 4 blogs and 12 social posts per month.' },
      { question: 'Do you do video editing?', answer: 'Yes, we handle short-form video editing (Reels/Shorts) as an add-on.' }
    ]
  },
  'local-seo': {
    id: 'local-seo',
    seoTitle: 'Local SEO & GMB Optimization',
    seoDesc: 'Dominate your local market. GMB optimization, citation building, and review management to get you in the Map Pack.',
    hero: {
      title: 'LOCAL SEARCH',
      highlight: 'DOMINATION',
      subtitle: 'When customers search "near me", do they find you or your competitor? We engineer your presence to own the Local Map Pack.'
    },
    stats: [
      { label: 'Map Pack Rankings', value: '#1' },
      { label: 'Call Vol Increase', value: '+150%' },
      { label: 'Citations Built', value: '5000+' }
    ],
    painPoints: {
      title: 'Invisible Locally?',
      items: [
        { icon: 'fa-solid fa-location-dot', title: 'Not in Map Pack', desc: 'If you aren\'t in the top 3 map results, you don\'t exist to 80% of local searchers.' },
        { icon: 'fa-solid fa-star-half-stroke', title: 'Low Reviews', desc: 'Competitors with more 5-star reviews are stealing your trust and your calls.' },
        { icon: 'fa-solid fa-circle-exclamation', title: 'NAP Errors', desc: 'Inconsistent Name, Address, Phone data confuses Google and tanks rankings.' }
      ]
    },
    targetAudience: {
        title: "Critical For",
        list: ["Dentists", "Law Firms", "Home Services (HVAC/Plumbing)", "Restaurants"]
    },
    solution: {
      title: 'Geo-Grid Expansion',
      desc: 'We don\'t just optimize for your office address. We build location pages and citations that expand your ranking radius to the entire city.',
      imageIcon: 'fa-solid fa-map-location-dot'
    },
    methodology: {
        title: "Local Authority Building",
        steps: [
            { title: "Data Consistency", desc: "Ensuring your Name, Address, and Phone are identical on 100+ directories." },
            { title: "Review Velocity", desc: "Implementing systems to get a steady stream of 5-star reviews." },
            { title: "Local Link Building", desc: "Getting links from local charities, news, and partners." }
        ]
    },
    features: {
      title: 'Ranking Factors',
      items: [
        { title: 'GMB Optimization', desc: 'Complete profile build-out with keywords, photos, and services.' },
        { title: 'Citation Building', desc: 'Listing your business on 100+ authoritative directories (Yelp, YellowPages, etc.).' },
        { title: 'Review Automation', desc: 'Setting up SMS campaigns to automatically ask happy clients for reviews.' },
        { title: 'Local Backlinks', desc: 'Securing links from local news sites and partners.' }
      ]
    },
    deliverables: [
        "GMB Profile Audit & Fix",
        "100+ Local Citations",
        "Review Gen System",
        "Monthly Ranking Report",
        "Local Content Strategy",
        "Spam Fighting (Competitors)"
    ],
    comparison: {
        us: ["Manual Citations", "Geo-Grid Tracking", "Spam Removal", "Review Automation"],
        others: ["Automated/Bot Citations", "Rank Only at Office", "Ignore Spam", "No Review System"]
    },
    process: {
      title: 'Ranking Timeline',
      steps: [
        { number: '01', title: 'Clean Up', desc: 'Fixing bad data and duplicate listings across the web.' },
        { number: '02', title: 'Optimize', desc: 'Dialing in the Google Business Profile categories and description.' },
        { number: '03', title: 'Build', desc: 'Creating location landing pages on your website.' },
        { number: '04', title: 'Authority', desc: 'Ongoing citation and link building month over month.' }
      ]
    },
    techStack: {
      title: 'SEO Tools',
      icons: ['fa-brands fa-google', 'fa-solid fa-map-pin', 'fa-solid fa-magnifying-glass', 'fa-solid fa-chart-column']
    },
    caseStudy: {
        title: "Dental Practice",
        metric: "+40 Calls/mo",
        desc: "Moved a dental clinic from position #12 to #1 in the Map Pack, resulting in 40+ extra new patient calls per month."
    },
    industries: ['Plumbers', 'Dentists', 'Lawyers', 'Restaurants', 'Gyms'],
    faqs: [
      { question: 'How fast will I rank?', answer: 'Local SEO typically takes 3-6 months to see dominant results, though GMB fixes can help instantly.' },
      { question: 'Do I need an office?', answer: 'You need a physical address to verify the GMB, even if you hide it (Service Area Business).' },
      { question: 'What about fake reviews?', answer: 'We help dispute and remove spam reviews that violate Google policy.' }
    ]
  },
  'crm-automation': {
    id: 'crm-automation',
    seoTitle: 'CRM & Workflow Automation (GHL)',
    seoDesc: 'Stop chasing leads manually. Full GoHighLevel setup, SMS/Email automation, and AI booking bots.',
    hero: {
      title: 'AUTOMATED',
      highlight: 'ECOSYSTEMS',
      subtitle: 'Replace your sales team with code. We build self-driving CRMs that capture, nurture, and book leads 24/7/365.'
    },
    stats: [
      { label: 'Hours Saved/Wk', value: '20+' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Response Time', value: '<1min' }
    ],
    painPoints: {
      title: 'The Manual Trap',
      items: [
        { icon: 'fa-solid fa-phone-slash', title: 'Missed Calls', desc: '60% of leads go to the first business that answers. If you miss it, you lose it.' },
        { icon: 'fa-solid fa-envelope-open-text', title: 'Lead Rot', desc: 'Leads sitting in your inbox for hours before follow-up convert at <1%.' },
        { icon: 'fa-solid fa-money-bill-transfer', title: 'Subscription Hell', desc: 'Paying for Mailchimp, Calendly, ClickFunnels, and Twilio separately.' }
      ]
    },
    targetAudience: {
        title: "Built For",
        list: ["High Volume Agencies", "Sales Teams", "Appointment Based Biz", "Course Creators"]
    },
    solution: {
      title: 'The GHL Central Nervous System',
      desc: 'We consolidate your entire tech stack into GoHighLevel. One login, infinite automation. From the first ad click to the final invoice.',
      imageIcon: 'fa-solid fa-network-wired'
    },
    methodology: {
        title: "Automation Logic",
        steps: [
            { title: "Immediate Response", desc: "Every lead gets a text/email within 30 seconds." },
            { title: "Long-Term Nurture", desc: "If they don't buy now, we keep emailing them value for 12 months." },
            { title: "Pipeline Clarity", desc: "Visual dashboards showing exactly where every deal stands." }
        ]
    },
    features: {
      title: 'Automation Protocols',
      items: [
        { title: 'Missed Call Text Back', desc: 'Instantly texts anyone who calls you when you can\'t answer, saving the lead.' },
        { title: 'Database Reactivation', desc: 'SMS campaigns that wake up dead leads from 6 months ago and book them.' },
        { title: 'AI Booking Bot', desc: 'Conversational AI that qualifies leads via text and books appointments on your calendar.' },
        { title: 'Review Management', desc: 'Automated requests sent after a service is marked "Completed".' }
      ]
    },
    deliverables: [
        "Full GHL Setup",
        "Pipeline Architecture",
        "Calendar Integration",
        "Email/SMS Copywriting",
        "AI Bot Configuration",
        "Staff Training Video"
    ],
    comparison: {
        us: ["Custom Architecture", "Copywriting Included", "Advanced Logic", "Ongoing Support"],
        others: ["Generic Snapshot", "Empty Templates", "Basic Triggers", "No Training"]
    },
    process: {
      title: 'Integration Steps',
      steps: [
        { number: '01', title: 'Migration', desc: 'Moving contacts and pipelines from your old CRM to GHL.' },
        { number: '02', title: 'Architecture', desc: 'Building the visual workflows and triggers.' },
        { number: '03', title: 'Connection', desc: 'Linking Twilio, Stripe, and Mailgun API keys.' },
        { number: '04', title: 'Training', desc: 'Teaching your team how to use the "Conversations" tab.' }
      ]
    },
    techStack: {
      title: 'Automation Stack',
      icons: ['fa-solid fa-rocket', 'fa-solid fa-bolt', 'fa-solid fa-robot', 'fa-brands fa-stripe', 'fa-solid fa-envelope']
    },
    caseStudy: {
        title: "Gym Franchise",
        metric: "150 New Members",
        desc: "Automated the lead follow-up for a gym chain. Database reactivation campaign generated 150 new memberships in 48 hours."
    },
    industries: ['Agencies', 'Consultants', 'Medical Spas', 'Contractors', 'SaaS'],
    faqs: [
      { question: 'Is GHL expensive?', answer: 'It actually saves money by replacing 5+ other software subscriptions.' },
      { question: 'Do you provide the software?', answer: 'We can set you up on our Agency account or configure your own account.' },
      { question: 'Can it integrate with Zapier?', answer: 'Yes, GHL has a native API that connects to 5000+ apps via Zapier or Make.' }
    ]
  }
};
