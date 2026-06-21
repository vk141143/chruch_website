import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getUser, type AuthUser } from "@/lib/auth";
import { MOCK_NOTIFICATIONS, type Course } from "@/lib/mockData";

import { DashboardLayout, type DashView } from "@/components/dashboard/DashboardLayout";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { MyLearning } from "@/components/dashboard/MyLearning";
import { VideoLearning } from "@/components/dashboard/VideoLearning";
import { BibleAcademyPage } from "@/components/dashboard/BibleAcademyPage";
import { SermonsPage } from "@/components/dashboard/SermonsPage";
import { DevotionPage } from "@/components/dashboard/DevotionPage";
import { EventsPage } from "@/components/dashboard/EventsPage";
import { PrayerRequestsPage } from "@/components/dashboard/PrayerRequestsPage";
import { CommunityPage } from "@/components/dashboard/CommunityPage";
import { SavedContentPage } from "@/components/dashboard/SavedContentPage";
import { CertificatesPage } from "@/components/dashboard/CertificatesPage";
import { NotificationsPage } from "@/components/dashboard/NotificationsPage";
import { ProfilePage } from "@/components/dashboard/ProfilePage";
import { SettingsPage } from "@/components/dashboard/SettingsPage";
import { SubscriptionPage } from "@/components/dashboard/SubscriptionPage";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — WordnWorship Fellowship" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [view, setView] = useState<DashView>("home");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isPremium] = useState(false); // Toggle to true to test premium state

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  useEffect(() => {
    const u = getUser();
    if (!u) {
      navigate({ to: "/login" });
      return;
    }
    if (u.role === "admin") {
      navigate({ to: "/admin" });
      return;
    }
    setUser(u);
  }, []);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-cream">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  function handleViewChange(v: DashView) {
    setView(v);
    if (v !== "video-learning") setSelectedCourse(null);
  }

  function handleCourseSelect(course: Course) {
    setSelectedCourse(course);
    setView("video-learning");
  }

  function renderPage() {
    switch (view) {
      case "home":
        return (
          <DashboardHome
            user={user!}
            isPremium={isPremium}
            onViewChange={handleViewChange}
            onCourseSelect={handleCourseSelect}
          />
        );
      case "my-learning":
        return (
          <MyLearning
            isPremium={isPremium}
            onCourseSelect={handleCourseSelect}
            onViewChange={handleViewChange}
          />
        );
      case "video-learning":
        return selectedCourse ? (
          <VideoLearning
            course={selectedCourse}
            isPremium={isPremium}
            onViewChange={handleViewChange}
          />
        ) : (
          <MyLearning
            isPremium={isPremium}
            onCourseSelect={handleCourseSelect}
            onViewChange={handleViewChange}
          />
        );
      case "bible-academy":
        return (
          <BibleAcademyPage
            isPremium={isPremium}
            onCourseSelect={handleCourseSelect}
            onViewChange={handleViewChange}
          />
        );
      case "sermons":
        return <SermonsPage />;
      case "devotion":
        return <DevotionPage />;
      case "events":
        return <EventsPage />;
      case "prayer":
        return <PrayerRequestsPage />;
      case "community":
        return <CommunityPage />;
      case "saved":
        return <SavedContentPage />;
      case "certificates":
        return (
          <CertificatesPage
            isPremium={isPremium}
            onViewChange={handleViewChange}
          />
        );
      case "notifications":
        return <NotificationsPage />;
      case "profile":
        return <ProfilePage user={user!} />;
      case "settings":
        return <SettingsPage />;
      case "subscription":
        return (
          <SubscriptionPage
            isPremium={isPremium}
            onViewChange={handleViewChange}
          />
        );
      default:
        return (
          <DashboardHome
            user={user!}
            isPremium={isPremium}
            onViewChange={handleViewChange}
            onCourseSelect={handleCourseSelect}
          />
        );
    }
  }

  return (
    <DashboardLayout
      user={user}
      view={view}
      onViewChange={handleViewChange}
      unreadCount={unreadCount}
    >
      {renderPage()}
    </DashboardLayout>
  );
}
