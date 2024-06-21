import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faAnglesRight,
  faCalendar,
  faDroplet,
  faEnvelope,
  faHourglassHalf,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export const Icon = {
  Phone: ({ className = "" }) => (
    <FontAwesomeIcon icon={faPhone} className={className} />
  ),
  RingingPhone: ({ className = "" }) => (
    <FontAwesomeIcon icon={faPhoneVolume} className={className} />
  ),
  Location: ({ className = "" }) => (
    <FontAwesomeIcon icon={faLocationDot} className={className} />
  ),
  Email: ({ className = "" }) => (
    <FontAwesomeIcon icon={faEnvelope} className={className} />
  ),
  Facebook: ({ className = "" }) => (
    <FontAwesomeIcon icon={faFacebook} className={className} />
  ),
  Logo: ({ className = "" }) => (
    <FontAwesomeIcon icon={faDroplet} className={className} />
  ),
  Message: ({ className = "" }) => (
    <FontAwesomeIcon icon={faEnvelope} className={className} />
  ),
  Plane: ({ className = "" }) => (
    <FontAwesomeIcon icon={faPaperPlane} className={className} />
  ),
  AnglesDown: ({ className = "" }) => (
    <FontAwesomeIcon icon={faAnglesDown} className={className} />
  ),
  AnglesRight: ({ className = "" }) => (
    <FontAwesomeIcon icon={faAnglesRight} className={className} />
  ),
  HourGlassHalf: ({ className = "" }) => (
    <FontAwesomeIcon icon={faHourglassHalf} className={className} />
  ),
  Clock: ({ className = "" }) => (
    <FontAwesomeIcon icon={faClock} className={className} />
  ),
  Calendar: ({ className = "" }) => (
    <FontAwesomeIcon icon={faCalendar} className={className} />
  ),
  Bars: ({ className = "" }) => (
    <FontAwesomeIcon icon={faBars} className={className} />
  ),
};
