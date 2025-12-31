import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition as BrandIconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface SocialLink {
  id: string;
  icon: BrandIconDefinition;
  href: string;
  colorClass: string; // Để hover ra màu khác nhau (facebook blue, youtube red...)
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactItem {
  icon: IconDefinition;
  text: string;
}