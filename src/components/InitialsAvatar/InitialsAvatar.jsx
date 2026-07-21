import './InitialsAvatar.css';

function getInitials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

/* Custom animated avatar (initials + gradient ring) — replaces stock headshot photography */
export default function InitialsAvatar({ name, color = '#D6FF3F', size = 52 }) {
  return (
    <div className="initials-avatar" style={{ '--ia-color': color, width: size, height: size }}>
      <span className="initials-avatar-ring" />
      <span className="initials-avatar-text" style={{ fontSize: size * 0.36 }}>{getInitials(name)}</span>
    </div>
  );
}
