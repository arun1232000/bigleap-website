import './Marquee.css';

const techItems = [
  'Google Workspace', 'Microsoft 365', 'HubSpot', 'Salesforce', 'Zapier',
  'Cloudflare', 'Azure', 'AWS', 'Twilio', 'Intune', 'TeamViewer', 'SharePoint',
  'Google Workspace', 'Microsoft 365', 'HubSpot', 'Salesforce', 'Zapier',
  'Cloudflare', 'Azure', 'AWS', 'Twilio', 'Intune', 'TeamViewer', 'SharePoint',
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <p className="marquee-label">Certified across industry-leading platforms</p>
      <div className="marquee-track">
        <div className="marquee-inner">
          {techItems.map((item, i) => (
            <span key={i} className="marquee-pill">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
