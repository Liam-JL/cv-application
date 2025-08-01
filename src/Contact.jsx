import { useState, useEffect } from "react"
import { MdEmail as EmailIcon } from "react-icons/md"
import { FaMobileAlt as PhoneIcon } from "react-icons/fa"
import { FaLocationDot as LocationIcon } from "react-icons/fa6"
import { TbSocial as SocialIcon } from "react-icons/tb"
import { MdEditNote as EditIcon} from "react-icons/md";

const defaultContact = {
  email: "email@example.com",
  phone: "0000000000",
  location: "City, Country",
  social: "https://social-link.com",
}

export default function ContactSection({ active, onActivate }) {
  const [contactInfo, setContactInfo] = useState(() => {
    const localValue = localStorage.getItem("CONTACT_INFO")
    return localValue ? JSON.parse(localValue) : defaultContact
  })

  useEffect(() => {
    localStorage.setItem("CONTACT_INFO", JSON.stringify(contactInfo))
  }, [contactInfo])

  function editField(label, value) {
    setContactInfo(prev => ({ ...prev, [label]: value }))
  }

  return (
    <section className="section section--contact" aria-label="contact-me">
      <ul className="contact-section__list">
        {[
          { label: "email", icon: EmailIcon },
          { label: "phone", icon: PhoneIcon },
          { label: "location", icon: LocationIcon },
          { label: "social", icon: SocialIcon },
        ].map(({ label, icon }) => (
          <li key={label}>
            <ContactInfoBlock
              active={active}
              label={label}
              icon={icon}
              value={contactInfo[label]}
              editField={editField}
            />
          </li>
        ))}
      </ul>
      {!active && <button className="btn" aria-label="edit-section" onClick={() => onActivate("contact")}> <EditIcon /> Contact</button>}
    </section>
  )
}

function ContactInfoBlock({ active, label, icon, value, editField, className }) {
    const Icon = icon

  function getHref() {
    if (label === "email") return "mailto:" + value
    if (label === "phone") return "tel:" + value
    if (label === "location") return null
    return value
  }

  function getType() {
    if (label === "email") return "email"
    if (label === "phone") return "tel"
    return "text"
  }

  return active ? (
    <div className="contact-info-block">
      <Icon />
      <input
        className={`${className ?? ""} ${className ? `${className}--input` : ""}`}
        value={value}
        onChange={e => editField(label, e.target.value)}
        aria-label={label}
        type={getType()}
      />
    </div>
  ) : (
    <div className="contact-info-block">
      <Icon />
      {getHref() ? <a href={getHref()}>{value}</a> : <span>{value}</span>}
    </div>
  )
}