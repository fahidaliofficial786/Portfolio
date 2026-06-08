
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
    slug: "wordpress-site-hacked-7-signs",
    title: "WordPress Site Hacked? 7 Telltale Signs and Your Emergency Action Plan",
    date: "October 01, 2025",
    author: "Fahid Ali",
    summary: "A hacked WordPress website is a direct threat. Learn to spot the 7 most common red flags like Blacklist warnings and redirects.",
    content: `
      <p>A hacked WordPress website can ruin your business reputation, devastate your search engine rankings, and compromise sensitive customer details. Identifying an intrusion early is key to minimizing damage. Here are the 7 most common indicators that your site has been compromised:</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">1. Google Blacklist or Browser Security Warnings</h3>
      <p>If you or your visitors are greeted with a bright red warning screen saying "Deceptive site ahead" or "This site has been flagged as malicious", Google has detected malware scripts or phishing pages on your site. This is a critical security emergency.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">2. Unexpected Website Redirects</h3>
      <p>When you click on your website link from search results or mobile devices, are you sent to a completely different domain selling illicit goods, spam, or showing ads? Attackers use subtle JavaScript redirects that target specific referrers (like Google or Bing) to avoid being noticed by administrators directly typing the URL.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">3. Admin Login Failures or Missing Accounts</h3>
      <p>If your administrator password no longer works and password reset emails never arrive, or if you log in and see new, unrecognized administrator accounts in your WordPress Dashboard, an attacker has escalated privileges and hijacked your database.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">4. Unauthorized Modifications to Core Files</h3>
      <p>Files like <code>index.php</code>, <code>.htaccess</code>, or <code>wp-config.php</code> are primary targets for malicious injections. If these files have been modified recently without your knowledge, or contain complex base64 encoded strings, they are housing backdoors.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">5. Severe Drop in Performance or Spikes in Traffic</h3>
      <p>Malware scripts, DDoS botnets, or cryptocurrency mining code running silently on your server consumes significant CPU. This leads to slow loading times, database errors, or servers crashing altogether.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">6. Suspicious Outgoing Emails and Spam Reports</h3>
      <p>If your hosting provider suspends your mail server due to spam abuse, or you notice thousands of pending outgoing emails in your mail queue, your WordPress installation is being used as a spam mail server.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">7. Japanese Keyword Injections or Phishing Subpages</h3>
      <p>Search console audits revealing thousands of indexable spam pages with Japanese keywords or fake bank login forms mean attackers have written automated template files directly into your uploads directory.</p>
      
      <h2 class="text-2xl font-black text-white mt-8 mb-4">Your Emergency Security Action Plan</h2>
      <p>If your site shows any of these symptoms, follow these protocol steps immediately:</p>
      <ol class="list-decimal pl-6 space-y-2 text-gray-300">
        <li><strong>Isolate the site:</strong> Turn on maintenance mode or lock down directory permissions to prevent further data leaks.</li>
        <li><strong>Take a clean snapshot:</strong> Back up the database and files as they are (do not overwrite old safe backups).</li>
        <li><strong>Reinstall core files:</strong> Overwrite the <code>/wp-admin/</code> and <code>/wp-includes/</code> directories with fresh copies from WordPress.org.</li>
        <li><strong>Sanitize uploads:</strong> Scan the <code>/wp-content/uploads/</code> folder and delete any executable <code>.php</code> or <code>.js</code> files.</li>
        <li><strong>Rotate credentials:</strong> Immediately reset all DB credentials, WordPress passwords, and hosting logins.</li>
      </ol>
      <p>If you lack technical experience or need a guaranteed recovery in under 24 hours, contact <a href="https://wa.me/+923484103239?text=Hello-I-Need-Help" class="text-primary-teal underline font-bold">Fahid Ali on WhatsApp</a> for emergency cleanup.</p>
    `
  },
  {
    id: 2,
    slug: "why-wordpress-prime-target-fortify",
    title: "Why WordPress is a Prime Target (And How to Fortify Your Site)",
    date: "October 03, 2025",
    author: "Fahid Ali",
    summary: "WordPress powers over 40% of the web. Understand vulnerabilities like outdated plugins and weak passwords.",
    content: `
      <p>WordPress is the most popular Content Management System in the world, powering over 43% of all websites. While this community scale is great for plugins and themes, it also makes WordPress a massive target for cybercriminals. Automated hacking bots scour the internet looking for specific, well-known WordPress vulnerabilities.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">The Vulnerability Vectors</h3>
      <p>Most WordPress sites do not get hacked because WordPress core is insecure; they get hacked due to configuration gaps:</p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300">
        <li><strong>Outdated Third-Party Extensions:</strong> Over 90% of WordPress entry points are through vulnerable plugins and themes. Abandoned extensions contain unpatched bugs that bots easily exploit.</li>
        <li><strong>Brute Force Attacks:</strong> Hackers use dictionary attacks against <code>wp-login.php</code> to guess weak credentials. Without rate-limiting, bots can submit thousands of attempts per minute.</li>
        <li><strong>Incorrect File System Permissions:</strong> Permissive directories (like chmod 777) allow any script running on the server to modify or append code. Directory permissions should always be set to 755 for folders and 644 for files.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">How to Fortify Your Core</h3>
      <p>To defend against automated scanning and targeted attacks, implement these hardening actions:</p>
      <ol class="list-decimal pl-6 space-y-2 text-gray-300">
        <li><strong>Disable the Built-in File Editor:</strong> Stop administrators (and compromised accounts) from editing theme and plugin files directly from the dashboard. Add <code>define('DISALLOW_FILE_EDIT', true);</code> to your <code>wp-config.php</code> file.</li>
        <li><strong>Rename Your Database Prefix:</strong> The default prefix is <code>wp_</code>. Changing it to a randomized combination makes it much harder for SQL Injection attacks to read your tables.</li>
        <li><strong>Restrict Access to XML-RPC:</strong> XML-RPC allows external applications to communicate with your site. If you aren't using the mobile app or Jetpack, disable it completely via <code>.htaccess</code> to block brute force amplification attacks.</li>
        <li><strong>Protect wp-config.php and .htaccess:</strong> Lock these files from external read access by adding security rules to your server settings.</li>
      </ol>
    `
  },
  {
    id: 3,
    slug: "ultimate-guide-wordpress-backups",
    title: "Your Website's Lifeline: The Ultimate Guide to WordPress Backups",
    date: "October 05, 2025",
    author: "Fahid Ali",
    summary: "A single hack or server crash can wipe out years of work. Discover why automated off-site backups are non-negotiable.",
    content: `
      <p>A website backup is like an insurance policy. If your server database gets corrupted, a hosting provider suspends your account, or a hacker injects persistent malware into your files, a clean restore point is your absolute lifeline. Yet, many website owners fail to establish reliable backup policies.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">Why Local Host Backups are Insecure</h3>
      <p>Storing backups on the same hosting server where your website resides is a dangerous practice. If your server is hacked, the attacker can easily access and delete your backup files as well. Furthermore, if the server hardware fails, you lose both your live site and your restore options.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">The 3-2-1 Backup Strategy</h3>
      <p>A professional security policy dictates the 3-2-1 rule:</p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300">
        <li>Maintain at least <strong>3 copies</strong> of your data.</li>
        <li>Store backups on <strong>2 different storage media</strong>.</li>
        <li>Keep at least <strong>1 backup off-site</strong> in a remote cloud folder (e.g., Google Drive, AWS S3, Dropbox).</li>
      </ul>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">Recommended Automation Methods</h3>
      <p>Do not backup manually. Set up automated systems using tools like UpdraftPlus, Duplicator, or BlogVault configured to push data directly to off-site cloud storage. Regularly test your backups by restoring them to a local staging environment to ensure they are functional and uncorrupted.</p>
    `
  },
  {
    id: 4,
    slug: "top-5-wordpress-security-plugins",
    title: "Top 5 Security Plugins to Harden Your WordPress Site in 2025",
    date: "October 07, 2025",
    author: "Fahid Ali",
    summary: "Reviewing the top 5 essential plugins that provide firewall protection, malware scanning, and login security.",
    content: `
      <p>Relying on hosting default security is often not enough. WordPress plugins provide dedicated application-level monitoring, firewalls, and active threat detection. Here is a review of the top 5 security plugins available in 2025:</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">1. Wordfence Security</h3>
      <p>Wordfence features an endpoint Web Application Firewall (WAF) that runs at the PHP level. Its deep scanner checks core files, themes, and plugins for malware, bad URLs, and backdoor code. It is highly recommended for real-time monitoring and login rate-limiting.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">2. Solid Security (Formerly iThemes)</h3>
      <p>Solid Security specializes in site hardening. It makes it easy to change the admin login URL, enforce strong password policies, rename database prefixes, and schedule automated scans. It is excellent for locking down user accounts.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">3. Sucuri Security</h3>
      <p>Sucuri's free version provides malware scanning, security audits, and file integrity monitoring. Their premium package routes your traffic through a cloud-based CDN firewall, which blocks brute force attacks and malicious query strings before they even reach your server.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">4. All In One WP Security (AIOS)</h3>
      <p>AIOS is user-friendly, providing a security score meter. It helps configure advanced <code>.htaccess</code> firewalls, prevent hotlinking of images, detect file modifications, and lock down PHP script execution in critical folders.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">5. MalCare Security</h3>
      <p>MalCare runs deep scans on its own cloud servers, ensuring your website speed is not affected. It offers an easy one-click malware removal feature and integrates a basic firewall.</p>
    `
  },
  {
    id: 5,
    slug: "anatomy-wordpress-hack-attack-vectors",
    title: "Anatomy of a WordPress Hack: Common Attack Vectors Explained",
    date: "October 09, 2025",
    author: "Fahid Ali",
    summary: "From SQL Injection to XSS. We break down the most common attack vectors and how to block them.",
    content: `
      <p>To secure a WordPress website, you must understand how attackers think. Hacking is rarely a manual process; bots scan thousands of IP addresses looking for standard programming loopholes. Here is a breakdown of the most common attack vectors used against WordPress:</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">1. SQL Injection (SQLi)</h3>
      <p>SQL Injection occurs when input forms or query strings fail to sanitize database requests. An attacker can write raw SQL commands into a search bar or contact form, manipulating the database to export user details or write new administrator accounts.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">2. Cross-Site Scripting (XSS)</h3>
      <p>XSS vulnerabilities allow attackers to inject malicious scripts into trusted websites. When a user visits an infected page, the script executes in their browser. This allows hackers to capture session cookies, hijack admin permissions, or redirect users to phishing sites.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">3. Brute Force Login Attacks</h3>
      <p>Attackers run scripts that try millions of password combinations against <code>/wp-login.php</code>. If you use standard usernames like "admin" or weak passwords, automated bots will crack them in minutes, taking full dashboard control.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">4. Remote File Inclusion (RFI)</h3>
      <p>If your uploads folder or custom forms allow PHP scripts to be uploaded directly without sanitization, an attacker can upload a backdoor file (like a web shell). This gives them remote terminal access to run arbitrary commands on your server.</p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">How to Prevent Entry</h3>
      <p>Block these vectors by installing a Web Application Firewall (WAF) like a 6G/7G firewall, renaming login pages, locking down file upload permissions, and sanitizing all input forms using WordPress native helper functions.</p>
    `
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
