import { motion } from 'framer-motion';
import SplitText from '../SplitText/SplitText';
import { useParallax } from '../../hooks/useParallax';
import './Technologies.css';

const logoMap = {
  'Google Workspace': 'workspace.google.com',
  'Microsoft 365': 'microsoft.com',
  'Azure': 'azure.microsoft.com',
  'AWS': 'aws.amazon.com',
  'OneDrive': 'onedrive.live.com',
  'SharePoint': 'sharepoint.com',
  'Microsoft Intune': 'microsoft.com',
  'Defender': 'microsoft.com',
  'Cloudflare': 'cloudflare.com',
  'Microsoft Teams': 'teams.microsoft.com',
  'Google Meet': 'meet.google.com',
  'Twilio': 'twilio.com',
  'Zoom': 'zoom.us',
  'RingCentral': 'ringcentral.com',
  'HubSpot': 'hubspot.com',
  'Salesforce': 'salesforce.com',
  'Zapier': 'zapier.com',
  'Make.com': 'make.com',
  'Power Automate': 'microsoft.com',
  'ActiveCampaign': 'activecampaign.com',
  'React': 'react.dev',
  'WordPress': 'wordpress.com',
  'Next.js': 'nextjs.org',
  'Webflow': 'webflow.com',
  'Shopify': 'shopify.com',
  'NinjaRMM': 'ninjaone.com',
  'ConnectWise': 'connectwise.com',
  'TeamViewer': 'teamviewer.com',
  'Freshdesk': 'freshdesk.com',
  'Jira': 'atlassian.com',
  'Notion': 'notion.so',
};

const allTechs = [
  { name: 'Google Workspace', color: '#4285F4' },
  { name: 'Microsoft 365', color: '#D83B01' },
  { name: 'Azure', color: '#0089D6' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Cloudflare', color: '#F48120' },
  { name: 'Microsoft Teams', color: '#6264A7' },
  { name: 'Zoom', color: '#2D8CFF' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Webflow', color: '#4353FF' },
  { name: 'Notion', color: '#ffffff' },
  { name: 'Jira', color: '#0052CC' },
  { name: 'Freshdesk', color: '#25C16F' },
  { name: 'TeamViewer', color: '#0E8EE9' },
  { name: 'NinjaRMM', color: '#EC1C24' },
  { name: 'Make.com', color: '#6D00CC' },
  { name: 'Power Automate', color: '#0066FF' },
  { name: 'Twilio', color: '#F22F46' },
  { name: 'ActiveCampaign', color: '#356AE6' },
  { name: 'RingCentral', color: '#F5821F' },
  { name: 'OneDrive', color: '#0078D4' },
  { name: 'SharePoint', color: '#0078D4' },
  { name: 'ConnectWise', color: '#E31837' },
  { name: 'Google Meet', color: '#00897B' },
  { name: 'Defender', color: '#00B4D8' },
];

const row1 = [...allTechs.slice(0, 15), ...allTechs.slice(0, 15)];
const row2 = [...allTechs.slice(15), ...allTechs.slice(0, 7), ...allTechs.slice(15), ...allTechs.slice(0, 7)];

function LogoItem({ tech }) {
  const domain = logoMap[tech.name];
  return (
    <div className="tech-logo-item" style={{ '--item-color': tech.color }}>
      {domain && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
          alt=""
          loading="lazy"
          width={18}
          height={18}
          className="tech-logo-favicon"
        />
      )}
      <span className="tech-logo-name">{tech.name}</span>
    </div>
  );
}

function LogoRow({ items, reverse = false }) {
  return (
    <div className="tech-marquee-track">
      <div className={`tech-marquee-inner ${reverse ? 'tech-marquee-reverse' : ''}`}>
        {items.map((tech, i) => (
          <LogoItem key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  const bgParallax = useParallax(30);

  return (
    <section id="technologies" className="tech-section">
      <motion.div className="tech-section-bg" ref={bgParallax.ref} style={{ y: bgParallax.y }} />
      <div className="container">
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Technologies</div>
          <SplitText as="h2" className="section-title">
            We Work With the<br /><span className="accent-italic">Best-in-Class Tools</span>
          </SplitText>
          <p className="section-subtitle">
            Certified experts across the leading platforms your business already uses—or needs to adopt.
          </p>
        </motion.div>
      </div>

      <div className="tech-marquee-wrapper">
        <LogoRow items={row1} reverse={false} />
        <LogoRow items={row2} reverse={true} />
      </div>

      <div className="container">
        <motion.div
          className="tech-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="tech-banner-content">
            <h3>Don't see your tool?</h3>
            <p>We work with hundreds of platforms. Chances are we've integrated it before.</p>
          </div>
          <a href="#contact" className="btn-primary">Ask Us</a>
        </motion.div>
      </div>
    </section>
  );
}
