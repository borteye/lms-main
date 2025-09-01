"use client";

import useSignUp from "@/hooks/use-sign-up";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import LoaderButton from "@workspace/ui/components/loading-button";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  const { register, formState, form, onSubmit, showPassword, setShowPassword } =
    useSignUp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 to-vivid-purple/90 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Card className="bg-white/95 border-2 border-black backdrop-blur-sm shadow-elegant">
          <CardHeader className="space-y-1 text-center">
            <div className="mb-4">
              <div className="w-14 h-14 mx-auto border border-black bg-primary rounded-lg  flex items-center justify-center">
                <span className="text-white font-bold text-4xl">T</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Knowledge for Every Seat
              </p>
            </div>
            <CardTitle className="text-2xl font-semibold text-foreground">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-foreground-secondary">
              Set up your school's digital learning platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      {...register("firstName")}
                      className="pl-10"
                    />
                    {formState.errors.firstName && (
                      <p className="text-destructive text-sm mt-1">
                        {formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                      className="pl-10"
                    />
                    {formState.errors.lastName && (
                      <p className="text-destructive text-sm mt-1">
                        {formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email")}
                    className="pl-10"
                  />
                  {formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    {...register("phoneNumber")}
                    className="pl-10"
                  />
                  {formState.errors.phoneNumber && (
                    <p className="text-destructive text-sm mt-1">
                      {formState.errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    {...register("password")}
                    className="pl-10"
                  />
                  {formState.errors.password && (
                    <p className="text-destructive text-sm mt-1">
                      {formState.errors.password.message}
                    </p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-0.5 text-muted-foreground hover:text-foreground hover:bg-transparent"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="passwordConfirmation"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("passwordConfirmation")}
                    className="pl-10"
                  />
                  {formState.errors.passwordConfirmation && (
                    <p className="text-destructive text-sm mt-1">
                      {formState.errors.passwordConfirmation.message}
                    </p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-0.5 text-muted-foreground hover:text-foreground hover:bg-transparent"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <LoaderButton
                loading={formState.isSubmitting}
                type="submit"
                className="w-full border border-black"
              >
                Create Account
              </LoaderButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-foreground-secondary">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
