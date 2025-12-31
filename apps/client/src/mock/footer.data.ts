import { 
  faFacebookF, 
  faYoutube, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";
import { ContactItem, FooterLink, SocialLink } from "@/types/footer";

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'fb', icon: faFacebookF, href: '#', colorClass: 'hover:bg-blue-600' },
  { id: 'yt', icon: faYoutube, href: '#', colorClass: 'hover:bg-red-600' },
  { id: 'ig', icon: faInstagram, href: '#', colorClass: 'hover:bg-pink-600' },
];

export const QUICK_LINKS: FooterLink[] = [
  { label: 'Về Chúng Tôi', href: '#vision' },
  { label: 'Các Dự Án', href: '#features' },
  { label: 'Báo Cáo Tài Chính', href: '#statements' },
  { label: 'Đăng Ký TNV', href: '#volunteer' },
];

export const CONTACT_INFO: ContactItem[] = [
  { icon: faLocationDot, text: '123 Đường Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh, Việt Nam' },
  { icon: faPhone, text: '(+84) 90 123 4567' },
  { icon: faEnvelope, text: 'contact@littleroses.org' },
];