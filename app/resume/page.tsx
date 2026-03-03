"use client";

import { AppLayout } from "@/components/layout";
import { Icon, Button, Card } from "@/components/ui";

export default function ResumePage() {
  const resumeData = {
    name: "Alex Rivera",
    title: "Senior Software Engineer",
    contact: {
      email: "alex@velamini.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://alexrivera.dev",
    },
    summary:
      "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in React, TypeScript, and cloud architecture. Led teams of up to 10 engineers and delivered products used by millions.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Velamini Inc.",
        period: "2022 - Present",
        description:
          "Lead development of the AI twin platform. Architected the real-time chat system handling 100k+ concurrent connections.",
      },
      {
        title: "Software Engineer",
        company: "TechCorp",
        period: "2019 - 2022",
        description:
          "Built and maintained microservices infrastructure. Reduced deployment time by 60% through CI/CD improvements.",
      },
      {
        title: "Junior Developer",
        company: "StartupXYZ",
        period: "2016 - 2019",
        description:
          "Full-stack development using React and Node.js. Contributed to the core product used by 50k+ users.",
      },
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "Stanford University",
        year: "2016",
      },
      {
        degree: "B.S. Computer Science",
        school: "UC Berkeley",
        year: "2014",
      },
    ],
    skills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS/GCP",
      "Docker/Kubernetes",
      "GraphQL",
    ],
  };

  return (
    <AppLayout
      title="Resume"
      description="Auto-generated from your training data."
      actions={
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" className="hidden sm:flex">
            <Icon name="edit" className="mr-2 text-sm" />
            Edit
          </Button>
          <Button size="sm">
            <Icon name="download" className="mr-2 text-sm" />
            <span className="hidden sm:inline">Export PDF</span>
            <span className="sm:hidden">PDF</span>
          </Button>
        </div>
      }
    >
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          {/* Resume Preview */}
          <Card className="p-8 print:shadow-none">
            {/* Header Section */}
            <div className="text-center border-b border-slate-200 dark:border-primary/10 pb-6 mb-6">
              <h2 className="text-3xl font-bold">{resumeData.name}</h2>
              <p className="text-xl text-primary font-medium mt-1">
                {resumeData.title}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Icon name="mail" className="text-sm" />
                  {resumeData.contact.email}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="phone" className="text-sm" />
                  {resumeData.contact.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="location_on" className="text-sm" />
                  {resumeData.contact.location}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="language" className="text-sm" />
                  {resumeData.contact.website}
                </span>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <Icon name="person" className="text-sm" />
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="work" className="text-sm" />
                Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="font-bold">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-500 mb-2">{exp.period}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="school" className="text-sm" />
                Education
              </h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.school} • {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="psychology" className="text-sm" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </Card>
        </div>
    </AppLayout>
  );
}
