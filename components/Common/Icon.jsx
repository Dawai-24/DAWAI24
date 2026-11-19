import {
  Pill, Sparkles, Droplet, HeartPulse, Smile, Stethoscope, Baby, Wind, Bone, Dumbbell,
  ShieldCheck, Truck, BadgePercent, Headset, Package,
} from "lucide-react";

const map = { Pill, Sparkles, Droplet, HeartPulse, Smile, Stethoscope, Baby, Wind, Bone, Dumbbell, ShieldCheck, Truck, BadgePercent, Headset, Package };

export default function Icon({ name, ...props }) {
  const C = map[name] || Package;
  return <C {...props} />;
}
