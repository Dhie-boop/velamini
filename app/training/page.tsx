"use client";

import { useState } from "react";
import { AppLayout } from "@/components/layout";
import { Icon, Button, Input, Textarea, Select } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  { id: "identity", label: "Identity", icon: "fingerprint" },
  { id: "education", label: "Education", icon: "school" },
  { id: "experience", label: "Experience", icon: "work" },
  { id: "skills", label: "Skills", icon: "psychology" },
  { id: "projects", label: "Projects", icon: "folder_special" },
  { id: "awards", label: "Awards", icon: "emoji_events" },
  { id: "social", label: "Social", icon: "share" },
];

export default function TrainingPage() {
  const [activeStep, setActiveStep] = useState("identity");
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    birthPlace: "",
    currentLocation: "",
    languages: "",
    relationshipStatus: "Single",
    hobbies: "",
    favoriteFood: "",
    bio: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saving progress:", formData);
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex((s) => s.id === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].id);
    }
  };

  return (
    <AppLayout
      title="Training"
      description="Build your intelligent virtual self step by step"
    >
      <div className="flex flex-col h-full">
        {/* Horizontal Stepper */}
        <div className="sticky top-0 bg-background-light dark:bg-background-dark z-10 border-b border-slate-200 dark:border-primary/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "flex flex-col items-center gap-1 sm:gap-2 py-3 border-b-2 transition-all shrink-0 min-w-[60px]",
                    activeStep === step.id
                      ? "border-primary text-primary"
                      : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  )}
                >
                  <Icon name={step.icon} className="text-lg sm:text-xl" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    {step.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Area */}
        <section className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-primary/10 p-4 sm:p-6 lg:p-8 shadow-sm">
              {activeStep === "identity" && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Birth Date
                      </label>
                      <Input
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Birth Place
                      </label>
                      <Input
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        placeholder="San Francisco, USA"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Current Location
                      </label>
                      <Input
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleInputChange}
                        placeholder="New York, USA"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Languages
                      </label>
                      <Input
                        name="languages"
                        value={formData.languages}
                        onChange={handleInputChange}
                        placeholder="English, Spanish, French"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Relationship Status
                      </label>
                      <Select
                        name="relationshipStatus"
                        value={formData.relationshipStatus}
                        onChange={handleInputChange}
                      >
                        <option>Single</option>
                        <option>In a relationship</option>
                        <option>Married</option>
                        <option>Prefer not to say</option>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Hobbies
                      </label>
                      <Input
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleInputChange}
                        placeholder="Hiking, Photography, Chess"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Favorite Food
                      </label>
                      <Input
                        name="favoriteFood"
                        value={formData.favoriteFood}
                        onChange={handleInputChange}
                        placeholder="Sushi, Pasta, Tacos"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Bio
                      </label>
                      <Textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Tell us about yourself, your values, and what makes you unique..."
                        rows={4}
                      />
                    </div>
                  </div>
                </>
              )}

              {activeStep === "education" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Education</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Highest Degree
                      </label>
                      <Select>
                        <option>High School</option>
                        <option>Associate Degree</option>
                        <option>Bachelor&apos;s Degree</option>
                        <option>Master&apos;s Degree</option>
                        <option>Doctorate</option>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Field of Study
                      </label>
                      <Input placeholder="Computer Science" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Institution
                      </label>
                      <Input placeholder="Stanford University" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Graduation Year
                      </label>
                      <Input type="number" placeholder="2020" />
                    </div>
                  </div>
                </>
              )}

              {activeStep === "experience" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Current Job Title
                      </label>
                      <Input placeholder="Senior Software Engineer" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Company
                      </label>
                      <Input placeholder="Tech Corp Inc." />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Years of Experience
                      </label>
                      <Input type="number" placeholder="5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Industry
                      </label>
                      <Input placeholder="Technology" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Job Description
                      </label>
                      <Textarea
                        placeholder="Describe your current role and responsibilities..."
                        rows={4}
                      />
                    </div>
                  </div>
                </>
              )}

              {activeStep === "skills" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Technical Skills
                      </label>
                      <Input placeholder="JavaScript, Python, React, Node.js" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Soft Skills
                      </label>
                      <Input placeholder="Leadership, Communication, Problem Solving" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Certifications
                      </label>
                      <Input placeholder="AWS Certified, PMP" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Tools & Technologies
                      </label>
                      <Input placeholder="VS Code, Git, Docker, Kubernetes" />
                    </div>
                  </div>
                </>
              )}

              {activeStep === "projects" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Projects</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Project Name
                        </label>
                        <Input placeholder="AI Virtual Assistant" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Role
                        </label>
                        <Input placeholder="Lead Developer" />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Description
                        </label>
                        <Textarea
                          placeholder="Describe the project, technologies used, and your contributions..."
                          rows={4}
                        />
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">
                      <Icon name="add" className="mr-2" />
                      Add Another Project
                    </Button>
                  </div>
                </>
              )}

              {activeStep === "awards" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Awards & Recognition</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Award Name
                        </label>
                        <Input placeholder="Employee of the Year" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Year
                        </label>
                        <Input type="number" placeholder="2023" />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Description
                        </label>
                        <Textarea placeholder="Describe the award and why you received it..." rows={3} />
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">
                      <Icon name="add" className="mr-2" />
                      Add Another Award
                    </Button>
                  </div>
                </>
              )}

              {activeStep === "social" && (
                <>
                  <h3 className="text-xl font-semibold mb-6">Social Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        LinkedIn
                      </label>
                      <Input placeholder="https://linkedin.com/in/username" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Twitter/X
                      </label>
                      <Input placeholder="https://x.com/username" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        GitHub
                      </label>
                      <Input placeholder="https://github.com/username" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Personal Website
                      </label>
                      <Input placeholder="https://yoursite.com" />
                    </div>
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4">
                <Button variant="secondary" onClick={handleSave} className="w-full sm:w-auto">
                  Save Progress
                </Button>
                <Button onClick={handleNext} className="w-full sm:w-auto flex items-center justify-center gap-2">
                  Next Step
                  <Icon name="arrow_forward" className="text-sm" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
