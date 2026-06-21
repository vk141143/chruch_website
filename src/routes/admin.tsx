import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/auth";

import { AdminLayout, type AdminView } from "@/components/admin/AdminLayout";
import { ToastContainer } from "@/components/admin/AdminUI";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { MembersView } from "@/components/admin/MembersView";
import { AcademyView, CategoriesView, VideosView } from "@/components/admin/ContentViews";
import { SermonsView, DevotionsView } from "@/components/admin/SermonDevotionViews";
import { EventsAdminView, RegistrationsView } from "@/components/admin/EventsViews";
import { PrayerAdminView, CommunityAdminView, AnnouncementsView } from "@/components/admin/ChurchViews";
import { DonationsView, PlansView, TransactionsView } from "@/components/admin/FinanceViews";
import { CertificatesView, NotificationsAdminView, ReportsView, SettingsView, AdminProfileView } from "@/components/admin/SystemViews";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Kingdom Life Fellowship" },
      { name: "description", content: "Church administration panel." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<AdminView>("dashboard");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUser();
    if (!user || user.role !== "admin") {
      navigate({ to: "/login" });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-cream">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  function renderView() {
    switch (view) {
      case "dashboard":      return <AdminDashboard onViewChange={setView} />;
      case "members":        return <MembersView />;
      case "academy":        return <AcademyView />;
      case "categories":     return <CategoriesView />;
      case "videos":         return <VideosView />;
      case "sermons":        return <SermonsView />;
      case "devotions":      return <DevotionsView />;
      case "events":         return <EventsAdminView />;
      case "registrations":  return <RegistrationsView />;
      case "prayer":         return <PrayerAdminView />;
      case "community":      return <CommunityAdminView />;
      case "announcements":  return <AnnouncementsView />;
      case "donations":      return <DonationsView />;
      case "plans":          return <PlansView />;
      case "transactions":   return <TransactionsView />;
      case "certificates":   return <CertificatesView />;
      case "notifications":  return <NotificationsAdminView />;
      case "reports":        return <ReportsView />;
      case "settings":       return <SettingsView />;
      case "profile":        return <AdminProfileView />;
      default:               return <AdminDashboard onViewChange={setView} />;
    }
  }

  return (
    <>
      <AdminLayout view={view} onViewChange={setView} pendingCount={2}>
        {renderView()}
      </AdminLayout>
      <ToastContainer />
    </>
  );
}
