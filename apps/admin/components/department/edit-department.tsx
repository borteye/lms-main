"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Check, ChevronsUpDown, SquarePen } from "lucide-react";
import { useState } from "react";
import useGetTeachers from "@/hooks/use-get-teachers";
import { cn } from "@workspace/ui/lib/utils";

export default function EditDepartment() {
  const [open, setOpen] = useState(false);
  const [value, setValues] = useState("");

  const { data, isLoading } = useGetTeachers();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <SquarePen /> Edit Department
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-primary w-fit p-2 border border-black rounded-md">
              <SquarePen />
            </div>
            Edit Department
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Department Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="address"
              // {...register("address")}
              placeholder="Enter street address"
              className="mt-1"
            />
            {/* {formState.errors.address && (
                        <p className="text-destructive text-sm mt-1">
                          {formState.errors.address.message}
                        </p>
                      )} */}
          </div>
          <div>
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Department Code <span className="text-gray-400">(Optional)</span>
            </Label>
            <Input
              id="address"
              // {...register("address")}
              placeholder="Enter street address"
              className="mt-1"
            />
            {/* {formState.errors.address && (
                        <p className="text-destructive text-sm mt-1">
                          {formState.errors.address.message}
                        </p>
                      )} */}
          </div>

          <div>
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Head of Department
              <span className="text-gray-400">(Optional)</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  role="combobox"
                  aria-expanded={open}
                  variant="outline"
                  className="w-full flex justify-between"
                >
                  {isLoading
                    ? "Fetching teachers"
                    : "Select Head of Department"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search staff" />
                  <CommandList>
                    <CommandEmpty>No teacher found.</CommandEmpty>
                    <CommandGroup>
                      {data?.map((teacher, i) => (
                        <CommandItem key={i} value={String(teacher.id)}>
                          {teacher.first_name} {teacher.last_name}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === String(teacher.id)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>Create Department</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
