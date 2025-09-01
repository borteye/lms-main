import Onboarding from "@/components/onboarding/onboarding";
import { Suspense } from "react";

export default function OnboardingPage() {
  return (
    <Suspense>
      <Onboarding />
    </Suspense>
  );
}
