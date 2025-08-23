"use client";

import { SchoolProfileData } from "@workspace/common/lib/admin-onboarding-schema";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { UseFormReturn } from "@workspace/ui/lib/client";
import { cn } from "@workspace/ui/lib/utils";
import { Mail, MapPin, Upload } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { countryList } from "@workspace/common/lib/client";

export default function StepOne({
  schoolProfileForm,
}: {
  schoolProfileForm: UseFormReturn<SchoolProfileData>;
}) {
  const countries = useMemo(() => countryList().getData(), []);

  const { formState, register, setValue, watch } = schoolProfileForm;

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("logo", file);
    }
  };

  const schoolLogo = watch("logo");

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 text-primary">
        <h3 className="text-xl font-semibold mb-2">
          Tell us about your school
        </h3>
        <p>
          We'll use this information to set up your learning management system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Label
            htmlFor="schoolName"
            className="text-sm font-medium text-gray-700"
          >
            School Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="schoolName"
            {...register("schoolName")}
            placeholder="Enter your school name"
            className="mt-1"
          />
          {formState.errors.schoolName && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.schoolName.message}
            </p>
          )}
        </div>

        <div>
          <Label
            htmlFor="institutionType"
            className="text-sm font-medium text-gray-700"
          >
            Institution Type <span className="text-destructive">*</span>
          </Label>
          <Select
            value={watch("institutionType")}
            onValueChange={(value) => setValue("institutionType", value)}
          >
            <SelectTrigger className={cn("mt-1")}>
              <SelectValue placeholder="Select institution type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="junior-high">Junior High School</SelectItem>
              <SelectItem value="senior-high">Senior High School</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.institutionType && (
            <p className="text-destructive text-sm mt-1">
              {formState.errors.institutionType.message}
            </p>
          )}
        </div>

        {/* Logo Upload */}
        <div>
          <Label htmlFor="logo" className="text-sm font-medium text-gray-700">
            School Logo
          </Label>
          <div className="mt-1 flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              {schoolLogo ? (
                <Image
                  src={URL.createObjectURL(schoolLogo) || "/placeholder.svg"}
                  alt="School logo"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Upload className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <div>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById("logo")?.click()}
              >
                Upload Logo
              </Button>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-medium text-yellow-400">
          <MapPin className="w-5 h-5" />
          Address Information
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Street Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Enter street address"
              className="mt-1"
            />
            {formState.errors.address && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.address.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              {...register("city")}
              placeholder="Enter city"
              className="mt-1"
            />
            {formState.errors.city && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.city.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="state"
              className="text-sm font-medium text-gray-700"
            >
              State/Province <span className="text-destructive">*</span>
            </Label>
            <Input
              id="state"
              {...register("state")}
              placeholder="Enter state/province"
              className="mt-1"
            />
            {formState.errors.state && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.state.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="zipCode"
              className="text-sm font-medium text-gray-700"
            >
              ZIP/Postal Code <span className="text-destructive">*</span>
            </Label>
            <Input
              id="zipCode"
              {...register("zipCode")}
              placeholder="Enter ZIP code"
              className="mt-1"
            />
            {formState.errors.zipCode && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.zipCode.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="country"
              className="text-sm font-medium text-gray-700"
            >
              Country <span className="text-destructive">*</span>
            </Label>
            <Select
              value={watch("country")}
              onValueChange={(value) => setValue("country", value)}
            >
              <SelectTrigger className={cn("mt-1 w-full")}>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries?.map((country, i) => (
                  <SelectItem key={i} value={country?.label}>
                    {country?.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formState.errors.country && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.country.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex  items-center gap-2 text-lg font-medium text-teall">
          <Mail className="w-5 h-5" />
          Contact Information
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="contactEmail"
              className="text-sm font-medium text-gray-700"
            >
              Contact Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contactEmail"
              type="email"
              {...register("contactEmail")}
              placeholder="admin@yourschool.edu"
              className="mt-1"
            />
            {formState.errors.contactEmail && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.contactEmail.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber")}
              placeholder="+1 (555) 123-4567"
              className="mt-1"
            />
            {formState.errors.phoneNumber && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="website"
              className="text-sm font-medium text-gray-700"
            >
              Website <span className="text-gray-400">(Optional)</span>
            </Label>
            <Input
              id="website"
              type="url"
              {...register("website")}
              placeholder="https://www.yourschool.edu"
              className="mt-1"
            />
            {formState.errors.website && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.website.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="socialMedia"
              className="text-sm font-medium text-gray-700"
            >
              Social Media <span className="text-gray-400">(Optional)</span>
            </Label>
            <Input
              id="socialMedia"
              {...register("socialMedia")}
              placeholder="@yourschool"
              className="mt-1"
            />
            {formState.errors.socialMedia && (
              <p className="text-destructive text-sm mt-1">
                {formState.errors.socialMedia.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
