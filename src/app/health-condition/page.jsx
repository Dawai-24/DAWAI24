import HealthConditionClient from "./HealthConditionClient";

export const metadata = {
  title: "Browse Medicines by Health Condition | PlatinumRx",
  description: "Browse prescription and chronic medicines categorized by health condition. Find bioequivalent same-salt substitutes and save up to 70% with PlatinumRx.",
};

export default function HealthConditionPage() {
  return <HealthConditionClient />;
}
