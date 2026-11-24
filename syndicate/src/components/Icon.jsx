import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Container,
  FileBadge,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MessageCircle,
  MessagesSquare,
  PackageCheck,
  PackageOpen,
  Scroll,
  ScanSearch,
  Ship,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';

const icons = {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Container,
  FileBadge,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MessageCircle,
  MessagesSquare,
  PackageCheck,
  PackageOpen,
  Scroll,
  ScanSearch,
  Ship,
  ShieldCheck,
  Sprout,
  Truck,
};

/** Renders a Lucide icon from a string kept in the editable content data. */
export default function Icon({ name, ...props }) {
  const Component = icons[name] || BadgeCheck;
  return <Component {...props} />;
}
