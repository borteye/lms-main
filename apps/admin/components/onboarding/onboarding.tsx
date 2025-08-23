"use client";

import { useState } from "react";
import { steps } from "@/lib/loop";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Progress } from "@workspace/ui/components/progress";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import LoaderButton from "@workspace/ui/components/loading-button";
import { cn } from "@workspace/ui/lib/utils";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepFour from "./step-four";
import useStepForms from "@/hooks/use-step-forms";
import useOnboarding from "@/hooks/use-onboarding";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const { isLoading, onSubmit } = useOnboarding();

  const {
    schoolProfileForm,
    academicStructureForm,
    configurationForm,
    optionalSetupForm,
  } = useStepForms();

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCompletedSteps((prev) =>
        prev.filter((step) => step !== currentStep - 1)
      );
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep === 4) {
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    const values = {
      ...schoolProfileForm.getValues(),
      ...academicStructureForm.getValues(),
      ...configurationForm.getValues(),
      ...optionalSetupForm.getValues(),
    };
    setCompletedSteps([...completedSteps, currentStep]);

    onSubmit(values);
  };

  const handleNext = async () => {
    let isValid = false;

    switch (currentStep) {
      case 1:
        isValid = await schoolProfileForm.trigger();
        break;
      case 2:
        isValid = await academicStructureForm.trigger();
        break;
      case 3:
        isValid = await configurationForm.trigger();
        break;
      case 4:
        isValid = await optionalSetupForm.trigger();
        break;
      default:
        isValid = true;
    }

    if (isValid)
      if (currentStep < steps.length) {
        setCompletedSteps((prev) => {
          const updated = new Set(prev);
          updated.add(currentStep);
          return [...updated];
        });

        setCurrentStep((prev) => prev + 1);
      } else {
        completeOnboarding();
      }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne schoolProfileForm={schoolProfileForm} />;
      case 2:
        return <StepTwo academicStructureForm={academicStructureForm} />;
      case 3:
        return <StepThree configurationForm={configurationForm} />;
      case 4:
        return <StepFour optionalSetupForm={optionalSetupForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vivid-purple/10 via-teall/10 to-primary/10">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 border border-black bg-primary rounded-lg  flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Tenasi</h1>
              <p className="text-xs text-foreground-secondary -mt-1">
                Knowledge for Every Seat
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-vivid-purple/20 text-vivid-purple font-semibold border border-black"
          >
            School Setup
          </Badge>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to <span className="text-primary">TENASI</span>
            </h1>
            <span className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </span>
          </div>
          <Progress value={progressPercentage} className="mb-6" />

          {/* Step Indicators */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-15 h-15 rounded-lg flex items-center justify-center border-2 border-black transition-colors",
                      completedSteps.includes(step.id)
                        ? "bg-green-500"
                        : step.bgColor
                    )}
                  >
                    {completedSteps.includes(step.id) ? (
                      <Check className="text-lg" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-sm font-medium ${step.id === currentStep ? step.color : "text-gray-600"}`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-300 mx-4 mt-[-2rem]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="bg-white shadow-sm border border-black">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {steps[currentStep - 1]?.icon}
              {steps[currentStep - 1]?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1 || isLoading}
            className="flex items-center gap-2 bg-transparent border border-black"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex items-center gap-3">
            {currentStep === 4 && (
              <Button
                variant="ghost"
                onClick={handleSkip}
                disabled={isLoading}
                className="text-gray-600"
              >
                Skip for now
              </Button>
            )}
            <LoaderButton
              loading={isLoading}
              disabled={isLoading}
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 border border-black text-white flex items-center gap-2"
            >
              {currentStep === steps.length
                ? isLoading
                  ? "Onboarding..."
                  : "Complete Setup"
                : "Continue"}
              <ChevronRight className={cn("w-4 h-4", isLoading && "hidden")} />
            </LoaderButton>
          </div>
        </div>
      </main>
    </div>
  );
}
