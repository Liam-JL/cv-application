import { useState } from "react"
import { MdEmail as EmailIcon} from "react-icons/md" ;
import { FaMobileAlt as PhoneIcon } from "react-icons/fa";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { TbSocial as SocialIcon} from "react-icons/tb";

export default function ContactSection({ active }) {
    return (
        <section className="contact-section" aria-label="contact-me">
            <ul className="contact-section__list">
                <li>
                    <ContactInfoBlock label="email" active={active} icon={EmailIcon}/>
                </li>
                <li>
                    <ContactInfoBlock label="phone" active={active} icon={PhoneIcon}/>
                </li>
                <li>
                    <ContactInfoBlock label="location" active={active} icon={LocationIcon}/>
                </li>
                <li>
                    <ContactInfoBlock label="social" active={active} icon={SocialIcon} />
                </li>
            </ul>
        </section>
    )
}

export function ContactInfoBlock({active, label, icon, className = undefined}) {
    const [fieldValue, setFieldValue] = useState(label || "Test")
    const Icon = icon

    function getHref() {
        if (label === "email") return "mailto:" + fieldValue;
        if (label === "phone") return "tel:" + fieldValue;
        if (label === "location") return null;
        return fieldValue;
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
            className={`${className} ${className}--input`}
            value={fieldValue} onChange={(e) => setFieldValue(e.target.value)}
            aria-label={label}
            type={getType()}
            />
        </div>
    ) : (
        <div className="contact-info-block">
            <Icon />
            {getHref() ? (
                <a href={getHref()}>{fieldValue}</a>
            ) : (
                <span>{fieldValue}</span>
            )
        }
        </div>
    )   
}