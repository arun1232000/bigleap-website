import { Monitor, Globe, Briefcase, Shield, Zap, BarChart2 } from 'lucide-react';

/* Content sourced from Full_IT_Services_Aligned.pdf */
export const services = [
  {
    slug: 'remote-it-support',
    num: '01', icon: Monitor, color: '#D6FF3F',
    title: 'Remote IT Support',
    desc: 'Fast, expert IT help without on-site visits. We resolve most issues within 2 hours—remotely, proactively.',
    highlights: ['24/7 monitoring', 'Sub-2hr response', 'Proactive fixes'],
    detail: {
      tagline: 'Fast, expert IT help for your team—without needing an on-site technician.',
      intro: 'We provide secure, remote desktop and laptop support so your systems stay fast, secure, and reliable. When something breaks or slows down, we connect remotely, diagnose the problem, and fix it—so your team can get back to work quickly.',
      sections: [
        {
          heading: 'Fast Technical Troubleshooting',
          intro: 'We handle day-to-day IT issues so your staff doesn’t lose hours trying to solve them.',
          bullets: [
            'Software issue diagnosis – Identify and fix application errors, crashes, or unusual behaviour.',
            'Application installation & configuration – Clean, proper setup of essential business software.',
            'System health checks & error resolution – Regular checks to spot and fix potential issues early.',
          ],
        },
        {
          heading: 'System Updates & Core Maintenance',
          intro: 'Keep your devices stable, secure, and up to date.',
          bullets: [
            'OS & software updates – Apply important updates and patches to reduce security risks.',
            'Disk cleanup & performance tuning – Remove junk files, fix issues, and improve overall speed.',
            'Startup optimization – Disable unnecessary startup apps to make boot times faster and systems smoother.',
          ],
        },
        {
          heading: 'Device & Peripheral Support',
          intro: 'We make sure all your hardware works well together.',
          bullets: [
            'Printer & scanner support – Setup, driver installation, troubleshooting, and connectivity fixes.',
            'Webcam, mic & audio setup – Configure and optimize devices for online meetings and calls.',
          ],
        },
        {
          heading: 'Cloud & File Sync Assistance',
          intro: 'We help keep your files accessible and in sync across devices.',
          bullets: [
            'File transfer & sync troubleshooting – Fix sync and access issues with OneDrive, SharePoint, and other cloud storage platforms.',
          ],
        },
        {
          heading: 'Storage & User Management',
          intro: 'Stay organized and secure as your business grows.',
          bullets: [
            'Disk partition management – Safely manage and optimize storage partitions without risking data loss.',
            'User account & access management – Create, modify, and secure user accounts with proper access levels.',
          ],
        },
        {
          heading: 'Security & Threat Removal',
          intro: 'Protect your business from common cyber threats.',
          bullets: [
            'Virus & malware removal – Remote scanning, detection, and cleanup of infected systems.',
            'Basic security hygiene – Recommendations and changes to keep systems safer going forward.',
          ],
        },
      ],
      outcome: {
        intro: 'With Smart Remote IT Support, your team gets:',
        bullets: [
          'A reliable point of contact for all everyday IT issues',
          'Faster problem resolution and less downtime',
          'More secure, better-performing systems',
          'Peace of mind knowing a professional team is watching your IT',
        ],
        closing: 'You focus on running the business. We keep the technology behind it running smoothly.',
      },
    },
  },
  {
    slug: 'digital-front-door',
    num: '02', icon: Globe, color: '#FFB020',
    title: 'Digital Front Door',
    desc: 'A fast, modern website that becomes the front door to your business. SEO-ready from day one.',
    highlights: ['Mobile-first design', 'SEO optimised', 'Fast load times'],
    detail: {
      tagline: 'A modern, fast, and professional website that becomes the front door to your business.',
      intro: 'We design, build, host, and maintain your website end-to-end so your business looks great online and runs smoothly behind the scenes.',
      sections: [
        {
          heading: 'Beautiful, Responsive Design',
          intro: 'Your website will look clean, modern, and professional on every device.',
          bullets: [
            'Fully responsive layout for mobile, tablet, and desktop',
            'Design aligned with your brand colours, logo, and messaging',
            'Clear structure so visitors immediately understand who you are and what you offer',
          ],
        },
        {
          heading: 'Custom-Built for Your Business',
          intro: 'No generic templates that don’t fit your needs.',
          bullets: [
            'Tailored layouts for your industry and goals (services, booking, lead capture, etc.)',
            'Support for simple one-page sites, multi-page business sites, or more advanced setups',
            'Room to grow as your business adds new services or locations',
          ],
        },
        {
          heading: 'Domain, Hosting & Security (Fully Managed)',
          intro: 'We handle all the technical setup so you don’t have to.',
          bullets: [
            'Domain configuration (new domain or existing one)',
            'Secure, reliable hosting with high uptime',
            'SSL installation (HTTPS) for safe browsing and trust',
            'Speed and performance optimisation for faster loading',
          ],
        },
        {
          heading: 'SEO-Friendly Structure',
          intro: 'We build the website so search engines can understand and rank it better.',
          bullets: [
            'Clean URL structure and page hierarchy',
            'Proper use of headings, titles, and meta descriptions',
            'Fast, mobile-friendly pages that support SEO best practices',
            'Setup of basic on-page SEO elements to help your site appear on Google',
          ],
        },
        {
          heading: 'Easy Content Management',
          intro: 'Update your website anytime—no technical skills required.',
          bullets: [
            'Simple, user-friendly content dashboard',
            'Edit text, images, services, blogs, and more on your own',
            'Optional training so your team knows exactly how to make updates',
          ],
        },
        {
          heading: 'Maintenance & Backups',
          intro: 'We keep your website healthy and secure over time.',
          bullets: [
            'Regular platform and plugin updates',
            'Ongoing security checks and basic hardening',
            'Performance monitoring and basic optimisation',
            'Automated backups so your site can be restored if needed',
          ],
        },
      ],
      outcome: {
        intro: 'With Digital Front Door, you receive:',
        bullets: [
          'A modern, fully responsive website designed for your brand',
          'Secure hosting and domain setup handled for you',
          'An SEO-ready structure to support better visibility on Google',
          'An easy-to-use content dashboard for updates',
          'Ongoing support and monitoring so your site stays fast, secure, and reliable',
        ],
        closing: 'Your website becomes a powerful first impression. We quietly run everything in the background.',
      },
    },
  },
  {
    slug: 'cloud-workspace',
    num: '03', icon: Briefcase, color: '#5EEAD4',
    title: 'Cloud Workspace',
    desc: 'Google Workspace & Microsoft 365 setup, security, and management for your whole team.',
    highlights: ['Google Workspace', 'Microsoft 365', 'Email security'],
    detail: {
      tagline: 'Done-for-you Google Workspace & Microsoft 365 setup, security, and ongoing management.',
      intro: 'Give your business a professional identity (email, domain, branding) and a modern cloud workplace (email, files, meetings, collaboration) without hiring an in-house IT team. We design, configure, secure, and manage your Google Workspace and Microsoft 365 environments so your team can just log in and work.',
      groups: [
        {
          title: 'What You Get with Brand & Work in a Box',
          bullets: [
            'Professional business email & branding – Your own domain (yourcompany.com), branded email addresses, signatures, and consistent identity across all tools.',
            'Modern cloud productivity stack – Google Workspace and/or Microsoft 365 fully set up—email, storage, calendars, meetings, chat, and collaboration.',
            'Secure access for your team – Users, permissions, and devices managed properly so the right people have the right access.',
            'Ongoing IT support – A friendly support team to fix issues, onboard new users, and keep everything running smoothly.',
          ],
        },
        {
          title: 'Google Workspace Setup & Management',
          intro: 'Build a secure, modern, Google-powered workspace for your team. We set up, configure, and manage your entire Google Workspace so your team can work smoothly from anywhere—without you worrying about the technical side.',
          sections: [
            {
              heading: 'Plan Selection & Account Setup',
              bullets: [
                'Help you choose the right Google Workspace plan (Business Starter, Standard, Plus, etc.)',
                'Set up your Google Workspace tenant and admin account',
                'Configure company name, logo, and basic branding',
              ],
            },
            {
              heading: 'Domain & DNS Configuration',
              bullets: [
                'Connect and verify your domain (yourcompany.com) with Google',
                'Set up DNS records (MX, SPF, DKIM, DMARC)',
                'Improve email deliverability and reduce spam/bounce issues',
              ],
            },
            {
              heading: 'Email Setup & Migration to Gmail',
              bullets: [
                'Migrate emails, contacts, and calendars from cPanel, Zoho, Outlook, Office 365, etc.',
                'Preserve mailbox structure (folders/labels) where possible',
                'Create business email addresses (name@yourcompany.com)',
                'Set up group emails like sales@, support@, info@',
              ],
            },
            {
              heading: 'Core App Configuration (Gmail, Drive, Calendar, Meet & Chat)',
              bullets: [
                'Configure Gmail settings, signatures, and basic rules',
                'Organize Google Drive & Shared Drives by team/department',
                'Set up Google Calendar (shared calendars, rooms, resources)',
                'Enable Google Meet for internal and client meetings',
                'Configure Google Chat for internal messaging and team spaces',
              ],
            },
            {
              heading: 'Users, Groups & Access Management',
              bullets: [
                'Create and manage user accounts and aliases',
                'Set up Google Groups for teams, projects, announcements',
                'Define access levels (owners, editors, viewers)',
                'Offboard employees safely (remove access, transfer data)',
              ],
            },
            {
              heading: 'Security, Compliance & Device Management',
              bullets: [
                'Turn on 2-Step Verification (2FA) and key security policies',
                'Configure password policies and sign-in protections',
                'Set file sharing rules (internal only / external / public)',
                'Enable basic device management for laptops & mobiles',
                'Help with retention policies and basic compliance needs',
              ],
            },
            {
              heading: 'Integrations, Automation & Support',
              bullets: [
                'Connect Google Workspace with CRM, HR, phone/VoIP, and other tools',
                'Enable relevant Marketplace apps (e-signature, project tools, etc.)',
                'Set up simple automations to save time',
                'Provide ongoing support for changes, issues, and new users',
              ],
            },
          ],
          result: 'A clean, secure Google Workspace setup where email, files, meetings, and collaboration “just work.”',
        },
        {
          title: 'Microsoft 365 – Full Service Management',
          intro: 'Complete, end-to-end management of your Microsoft 365 environment. We take care of everything from setup and licensing to security, devices, and day-to-day administration—so your team simply logs in and works.',
          sections: [
            {
              heading: 'Setup, Deployment & Tenant Management',
              bullets: [
                'Create and configure your Microsoft 365 tenant',
                'Connect and verify your domain (yourcompany.com)',
                'Set up DNS records (MX, SPF, DKIM, etc.) for email and services',
                'Apply initial security and compliance settings',
                'Help you choose the right Microsoft 365 licenses (Business Basic, Standard, Premium, etc.)',
              ],
            },
            {
              heading: 'User & Access Management',
              bullets: [
                'Create, modify, and disable user accounts and mailboxes',
                'Set up groups, distribution lists, and shared access',
                'Configure Multi-Factor Authentication (MFA)',
                'Manage role-based access (admins, users, guests)',
                'Offboard employees safely (access removal, data handover)',
              ],
            },
            {
              heading: 'Exchange Online – Business Email',
              bullets: [
                'Set up user and shared mailboxes (sales@, info@, accounts@)',
                'Configure aliases, forwarding rules, and auto-replies',
                'Tune spam filtering and anti-phishing protections',
                'Apply email security and basic data loss prevention (DLP)',
                'Assist with email restores and message tracing',
              ],
            },
            {
              heading: 'Teams, SharePoint & OneDrive Collaboration',
              bullets: [
                'Design Microsoft Teams structure (by department, project, location)',
                'Set up channels, permissions, and guest access',
                'Configure meeting policies, recordings, and calling (where applicable)',
                'Set up SharePoint sites for departments and projects',
                'Configure OneDrive for Business for personal work files',
                'Apply basic governance and retention rules for documents',
              ],
            },
            {
              heading: 'Device & Endpoint Management (Intune)',
              bullets: [
                'Enroll Windows, macOS, Android, and iOS devices into Intune',
                'Apply compliance policies (passcodes, encryption, OS versions)',
                'Push business apps to company devices',
                'Enable remote wipe for lost or stolen devices',
                'Configure BitLocker encryption and core endpoint protections',
              ],
            },
            {
              heading: 'Backup, Data Protection & Retention',
              bullets: [
                'Configure backups for email and files (with selected tools/services)',
                'Restore deleted emails, Teams messages, or documents where possible',
                'Set up retention policies for mail, chats, and documents',
                'Assist with legal holds and audit-related data preservation',
              ],
            },
            {
              heading: 'Monitoring, Optimization & Reporting',
              bullets: [
                'Monthly health checks for your Microsoft 365 tenant',
                'License usage review and cost optimization',
                'Check audit and security logs for risky activity',
                'Provide simple reports on usage, security, and adoption',
                'Recommend improvements as your business grows',
              ],
            },
          ],
          result: 'A secure, well-managed Microsoft 365 environment where email, files, meetings, and devices are all under control—without needing an internal Microsoft expert.',
        },
      ],
    },
  },
  {
    slug: 'cybersecurity',
    num: '04', icon: Shield, color: '#8B7CFF',
    title: 'Cybersecurity',
    desc: 'Practical everyday cybersecurity for email, devices, data, and websites. No jargon, just protection.',
    highlights: ['MFA setup', 'Email hardening', 'Device security'],
    detail: {
      tagline: 'Practical, everyday cybersecurity for your email, devices, data, and websites.',
      intro: 'We help keep your organisation safe from modern cyber threats by securing the core parts of your digital setup — email, devices, data, and websites. Our goal is simple: make your business secure by default, without adding complexity for your team.',
      sections: [
        {
          heading: 'Email Protection',
          intro: 'Keep dangerous emails away from your staff and your brand.',
          bullets: [
            'Block harmful emails, phishing attempts, and suspicious links',
            'Reduce the risk of data theft and email-based attacks',
            'Improve trust so your emails are less likely to be flagged as spam',
          ],
        },
        {
          heading: 'SPF, DKIM & DMARC Setup',
          intro: 'We configure the key email security standards to prevent spoofing and impersonation:',
          bullets: [
            'SPF (Sender Policy Framework) – Defines which mail servers are allowed to send email from your domain',
            'DKIM (DomainKeys Identified Mail) – Ensures emails haven’t been altered in transit',
            'DMARC (Domain-based Message Authentication, Reporting & Conformance) – Helps block fake/spoofed emails and gives you reports on attacks',
          ],
          note: 'This protects your domain, improves deliverability, and safeguards your brand reputation.',
        },
        {
          heading: 'Threat & Malware Protection',
          intro: 'Stop threats before they disrupt your business.',
          bullets: [
            'Monitor and block viruses, ransomware, and malicious files',
            'Detect suspicious system behaviour early',
            'Reduce the chances of data loss, downtime, or compromised accounts',
          ],
        },
        {
          heading: 'SSL Certificate Management',
          intro: 'Keep your website traffic private and trusted.',
          bullets: [
            'Install and renew SSL certificates for your websites',
            'Ensure all traffic runs over HTTPS',
            'Improve customer trust and security',
            'Avoid browser "Not Secure" warnings that scare visitors',
          ],
        },
        {
          heading: 'Backup & Recovery',
          intro: 'Be ready for mistakes, failures, or attacks.',
          bullets: [
            'Automatic backups for important data and systems',
            'Clear backup policies so you know what’s protected',
            'Fast restore options to reduce downtime if something goes wrong',
          ],
          note: 'If a device fails, data is deleted, or something breaks, we help you get back up quickly.',
        },
        {
          heading: 'Microsoft Intune Device Security',
          intro: 'Protect your laptops, desktops, and mobile devices. We use Microsoft Intune to apply consistent security across all company devices:',
          bullets: [
            'Enforce strong passwords, encryption, and basic security policies',
            'Control which apps can be installed and used',
            'Remotely wipe lost or stolen devices to protect sensitive data',
            'Keep work data separated from personal data (where supported)',
          ],
        },
        {
          heading: 'Website Security Analysis',
          intro: 'Keep your website safe, reliable, and trusted. We perform a structured security review of your website to identify risks and weaknesses. Here’s what it covers:',
          wide: true,
          bullets: [
            'Vulnerability Checks – Outdated software, exposed files, insecure settings, misconfigurations',
            'Malware & Threat Detection – Malicious scripts, injected code, harmful activity',
            'File & Directory Exposure Review – Ensure sensitive files (backups, configs, code) aren’t public',
            'Security Header & HTTPS Validation – Proper HTTPS and key security headers',
            'Login & Authentication Safety – Protections against brute-force and credential attacks',
            'Database Exposure Check – Ensure database ports/files aren’t exposed online',
            'Firewall & Server Security Assessment – Firewall, versions, permissions, and misconfigurations',
            'Domain & DNS Security Review – DNS, SPF/DMARC, and domain settings to reduce spoofing/redirect risk',
            'Complete Security Report – Clear summary of findings, risks, and recommended fixes',
          ],
        },
      ],
      outcome: {
        intro: 'With Security in a Bundle, your organisation gets:',
        bullets: [
          'Strong protection across email, devices, data, and websites',
          'Reduced risk of common cyberattacks and data breaches',
          'Better trust from customers, partners, and email providers',
          'Clear visibility on where you stand and what to improve next',
        ],
        closing: 'You focus on growth. We quietly keep your digital world safe.',
      },
    },
  },
  {
    slug: 'smartflow-automation',
    num: '06', icon: Zap, color: '#F472B6',
    title: 'SmartFlow Automation',
    desc: 'Automate repetitive work and connect your tools. Save 10+ hours per week on autopilot.',
    highlights: ['Zapier & Make', 'CRM workflows', 'Auto reporting'],
    detail: {
      tagline: 'Automate repetitive work, connect your tools, and keep your business running on autopilot.',
      intro: 'We design and implement smart automations across your CRM, email, finance, HR, and operations tools—so your team spends less time on manual tasks and more time on real work.',
      sections: [
        {
          heading: 'Cross-Platform Workflow Automation',
          intro: 'We connect the tools you already use so data flows automatically between them.',
          bullets: [
            'Automate actions between CRM, email, chat, forms, spreadsheets, and more',
            'Reduce manual copy-paste and repetitive data entry',
            'Trigger workflows based on events (new lead, new invoice, form submission, etc.)',
            'Standardize processes across teams so nothing is missed',
          ],
        },
        {
          heading: 'Real-Time Reporting & Alerts',
          intro: 'Know what’s happening in your business without digging through multiple systems.',
          bullets: [
            'Build automated dashboards using your existing tools (e.g., CRM, sheets, BI tools)',
            'Real-time alerts for critical events (high-value lead, failed payment, low stock, etc.)',
            'Scheduled reports sent to email or chat (daily/weekly summaries)',
            'Simple, visual insights for leadership and team leads',
          ],
        },
        {
          heading: 'Lead Handling & Routing Automation',
          intro: 'Make sure every lead is captured, followed up, and assigned to the right person.',
          bullets: [
            'Capture leads from websites, forms, chats, and ads into your CRM',
            'Auto-assign leads based on territory, product, language, or workload',
            'Trigger welcome emails, follow-up sequences, and reminders for sales teams',
            'Track lead stages and reduce response time dramatically',
          ],
        },
        {
          heading: 'HR & Finance Workflow Automation',
          intro: 'Cut down manual admin in HR and finance operations.',
          bullets: [
            'Automate employee onboarding workflows (accounts, access, documents)',
            'Time-off requests, approvals, and notifications',
            'Basic expense submission and approval flows',
            'Invoice creation, reminders, and payment status tracking using existing tools',
          ],
        },
        {
          heading: 'Custom API Integrations',
          intro: 'When tools don’t "talk" to each other out of the box, we make them talk.',
          bullets: [
            'Build custom connectors between your key platforms using APIs',
            'Sync data between internal systems and cloud tools',
            'Design reliable, maintainable integrations with logging and error handling',
            'Tailor automations to your exact business processes—not just templates',
          ],
        },
      ],
      outcome: {
        intro: 'With SmartFlow Business Automation, you get:',
        bullets: [
          'Fewer manual tasks and fewer mistakes',
          'Faster response times for leads, customers, and internal requests',
          'Clear visibility into what’s happening in real time',
          'A scalable process backbone that grows with your business',
        ],
      },
    },
  },
  {
    slug: 'crm-sales',
    num: '07', icon: BarChart2, color: '#93C5FD',
    title: 'CRM & Sales',
    desc: 'Turn your CRM into a real sales engine. HubSpot, Salesforce—deployed right and optimised for growth.',
    highlights: ['Pipeline setup', 'Lead automation', 'Sales reporting'],
    detail: {
      tagline: 'Turn your CRM into a real sales engine, not just another database.',
      intro: 'We set up, customize, and fine-tune your CRM so it matches the way you sell—giving your team clarity, follow-through, and better conversions.',
      sections: [
        {
          heading: 'CRM Setup & Customization',
          intro: 'We build your CRM around your business, not the other way around.',
          bullets: [
            'Initial CRM setup (users, roles, permissions)',
            'Custom fields for your industry, products, and services',
            'Tailored views for sales, management, and support teams',
            'Dashboards and reports aligned with your key metrics',
          ],
        },
        {
          heading: 'Sales Pipeline Design',
          intro: 'A clear, visual pipeline so everyone knows what’s happening with every deal.',
          bullets: [
            'Design deal stages that reflect your real sales process',
            'Define entry/exit criteria for each stage (no "stuck" deals)',
            'Set up follow-up reminders and task templates',
            'Build views for new leads, hot opportunities, and closing lists',
          ],
        },
        {
          heading: 'Automation Workflows',
          intro: 'Automations that make sure leads and deals never fall through the cracks.',
          bullets: [
            'Auto-assign leads to the right sales rep or team',
            'Trigger emails, tasks, and reminders based on pipeline stage',
            'Automate status updates, notifications, and internal hand-offs',
            'Simple, smart workflows that reduce manual work',
          ],
        },
        {
          heading: 'Integrations with Other Tools',
          intro: 'We connect your CRM to the tools you already use.',
          bullets: [
            'Integrate with email (Gmail/Outlook), calendars, and calling tools',
            'Connect to marketing platforms, forms, and landing pages',
            'Sync with invoicing, support, or project management tools',
            'Ensure data flows smoothly between systems without duplicate entry',
          ],
        },
        {
          heading: 'Data Cleansing & Migration',
          intro: 'Clean, accurate data from day one.',
          bullets: [
            'Audit your existing spreadsheets/old CRM data',
            'Remove duplicates, fix formats, and normalize key fields',
            'Migrate contacts, companies, deals, and activities into the new CRM',
            'Validate migrated data with sample checks before going live',
          ],
        },
      ],
      outcome: {
        intro: 'With CRM Deployment & Optimization, you get:',
        bullets: [
          'A CRM that matches your real-world sales process',
          'Clear visibility into leads, deals, and revenue forecasts',
          'Less manual work for your sales team and fewer missed follow-ups',
          'A reliable system your team actually wants to use, not avoid',
        ],
      },
    },
  },
];

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}
