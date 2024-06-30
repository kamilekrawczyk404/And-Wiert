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
  faPaperPlane,
  faLocationDot,
  faAnglesDown,
  faClock,
  faBars,
  faAnglesUp,
  faAngleLeft,
  faAngleRight,
  faUserTie,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

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
  AnglesUp: ({ className = "" }) => (
    <FontAwesomeIcon icon={faAnglesUp} className={className} />
  ),
  AngleLeft: ({ className = "" }) => (
    <FontAwesomeIcon icon={faAngleLeft} className={className} />
  ),
  AngleRight: ({ className = "" }) => (
    <FontAwesomeIcon icon={faAngleRight} className={className} />
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
  User: ({ className = "" }) => (
    <FontAwesomeIcon icon={faUserTie} className={className} />
  ),
  Warning: ({ className = "" }) => (
    <FontAwesomeIcon icon={faTriangleExclamation} className={className} />
  ),
};
