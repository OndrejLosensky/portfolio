import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

export interface SocialLink {
  icon: IconType;
  name: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, name: 'GitHub', url: 'https://github.com/OndrejLosensky' },
  { icon: FaLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ondřej-losenský' },
  { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/losensky_ondra/' },
  // { icon: MdOutlineMailOutline, name: 'Email', url: 'losenskyondrej@gmail.com' },
];
