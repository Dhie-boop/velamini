"use client";

import { useState } from "react";
import { AppLayout } from "@/components/layout";
import { Icon, Button, Input, Textarea, Card } from "@/components/ui";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Rivera",
    title: "Senior Software Engineer",
    company: "Velamini Inc.",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in React, TypeScript, and cloud architecture.",
    email: "alex@velamini.com",
    phone: "+1 (555) 123-4567",
    website: "https://alexrivera.dev",
  });

  const shareLink = "https://velamini.ai/chat/alex-rivera";

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <AppLayout
      title="Profile"
      description="Manage your public profile and share your AI twin."
      actions={
        <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
          <Icon name={isEditing ? "close" : "edit"} className="mr-2 text-sm" />
          <span className="hidden sm:inline">{isEditing ? "Cancel" : "Edit"}</span>
        </Button>
      }
    >
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6 lg:space-y-8">
          {/* Profile Card */}
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  AR
                </div>
                {isEditing && (
                  <Button variant="ghost" size="sm" className="mt-4">
                    <Icon name="photo_camera" className="mr-2 text-sm" />
                    Change Photo
                  </Button>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                {isEditing ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
                          Full Name
                        </label>
                        <Input
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
                          Job Title
                        </label>
                        <Input
                          value={profile.title}
                          onChange={(e) =>
                            setProfile({ ...profile, title: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
                          Company
                        </label>
                        <Input
                          value={profile.company}
                          onChange={(e) =>
                            setProfile({ ...profile, company: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
                          Location
                        </label>
                        <Input
                          value={profile.location}
                          onChange={(e) =>
                            setProfile({ ...profile, location: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
                        Bio
                      </label>
                      <Textarea
                        value={profile.bio}
                        onChange={(e) =>
                          setProfile({ ...profile, bio: e.target.value })
                        }
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => setIsEditing(false)}>
                        Save Changes
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold">{profile.name}</h2>
                      <p className="text-primary font-medium">
                        {profile.title} at {profile.company}
                      </p>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <Icon name="location_on" className="text-sm" />
                        {profile.location}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {profile.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Icon name="mail" className="text-sm" />
                        {profile.email}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Icon name="phone" className="text-sm" />
                        {profile.phone}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Icon name="language" className="text-sm" />
                        {profile.website}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>

          {/* Share Link */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="share" className="text-primary" />
              <h3 className="text-xl font-bold">Share Your AI Twin</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Share this link so others can chat with your AI twin anytime.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-3 bg-slate-100 dark:bg-primary/10 rounded-lg text-sm text-slate-600 dark:text-slate-300 truncate">
                {shareLink}
              </div>
              <Button onClick={copyLink}>
                <Icon name="content_copy" className="mr-2 text-sm" />
                Copy Link
              </Button>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">1,234</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Total Conversations</p>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">4.9</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Average Rating</p>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">87%</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Training Complete</p>
            </Card>
          </div>
        </div>
    </AppLayout>
  );
}
