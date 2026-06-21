// ── Types ──────────────────────────────────────────────────────────────────
export type MemberRole = "Member" | "Premium Member" | "Pastor" | "Moderator" | "Admin";
export type MemberStatus = "Active" | "Inactive" | "Suspended";
export type PaymentStatus = "Successful" | "Pending" | "Failed" | "Refunded";

export interface AdminMember {
  id: string; name: string; email: string; phone: string;
  role: MemberRole; plan: "Free" | "Premium" | "Annual";
  status: MemberStatus; joined: string; location: string; avatar: string;
}

export interface AdminCourse {
  id: string; title: string; category: string; instructor: string;
  students: number; lessons: number; status: "Published" | "Draft";
  access: "Free" | "Premium"; thumbnail: string; description: string;
  created: string; completionRate: number;
}

export interface AdminSermon {
  id: string; title: string; speaker: string; bibleRef: string;
  category: string; date: string; duration: string; views: number;
  status: "Published" | "Draft" | "Archived"; thumbnail: string;
}

export interface AdminEvent {
  id: string; title: string; date: string; time: string; location: string;
  category: string; capacity: number; registered: number;
  status: "Upcoming" | "Ongoing" | "Past" | "Cancelled"; image: string;
}

export interface AdminDonation {
  id: string; donor: string; email: string; fund: string;
  amount: number; date: string; type: "One-time" | "Recurring";
  status: PaymentStatus; method: string;
}

export interface AdminPrayer {
  id: string; title: string; detail: string; author: string;
  category: string; privacy: "Public" | "Private";
  status: "Pending" | "Approved" | "Hidden"; answered: boolean;
  prayerCount: number; createdAt: string;
}

export interface AdminPost {
  id: string; author: string; avatar: string; content: string;
  type: string; likes: number; comments: number;
  status: "Pending" | "Approved" | "Hidden"; reported: boolean;
  createdAt: string;
}

export interface AdminAnnouncement {
  id: string; title: string; description: string; category: string;
  pinned: boolean; status: "Published" | "Draft" | "Scheduled";
  publishDate: string; image: string;
}

export interface AdminPlan {
  id: string; name: string; monthlyPrice: number; yearlyPrice: number;
  features: string[]; activeSubscribers: number; status: "Active" | "Inactive";
}

export interface AdminTransaction {
  id: string; member: string; email: string; plan: string;
  amount: number; date: string; status: PaymentStatus; method: string;
}

export interface AdminCertificate {
  id: string; member: string; course: string; issuedDate: string;
  status: "Issued" | "Pending" | "Revoked";
}

export interface AdminDevotionItem {
  id: string; verse: string; ref: string; message: string;
  reflection: string; prayer: string; date: string;
  status: "Published" | "Draft" | "Scheduled";
}

// ── Mock Data ──────────────────────────────────────────────────────────────
export const ADMIN_MEMBERS: AdminMember[] = [
  { id: "m1", name: "Rachel Mensah", email: "rachel.m@email.com", phone: "+1 555-0101", role: "Premium Member", plan: "Premium", status: "Active", joined: "Mar 15, 2021", location: "Accra, Ghana", avatar: "RM" },
  { id: "m2", name: "Andrew Thompson", email: "a.thompson@email.com", phone: "+1 555-0102", role: "Moderator", plan: "Premium", status: "Active", joined: "Jul 8, 2019", location: "London, UK", avatar: "AT" },
  { id: "m3", name: "Priya Sharma", email: "priya.s@email.com", phone: "+1 555-0103", role: "Member", plan: "Free", status: "Active", joined: "Jan 22, 2023", location: "Mumbai, India", avatar: "PS" },
  { id: "m4", name: "Daniel Owusu", email: "daniel.o@email.com", phone: "+1 555-0104", role: "Pastor", plan: "Premium", status: "Active", joined: "Feb 10, 2020", location: "Lagos, Nigeria", avatar: "DO" },
  { id: "m5", name: "Michael O'Brien", email: "michael.o@email.com", phone: "+1 555-0105", role: "Member", plan: "Annual", status: "Active", joined: "Sep 3, 2018", location: "Dublin, Ireland", avatar: "MO" },
  { id: "m6", name: "Sarah Lin", email: "sarah.lin@email.com", phone: "+1 555-0106", role: "Member", plan: "Free", status: "Inactive", joined: "Feb 14, 2022", location: "Toronto, Canada", avatar: "SL" },
  { id: "m7", name: "James Adeyemi", email: "james.a@email.com", phone: "+1 555-0107", role: "Pastor", plan: "Premium", status: "Active", joined: "Nov 1, 2017", location: "Abuja, Nigeria", avatar: "JA" },
  { id: "m8", name: "Grace Amadi", email: "grace.a@email.com", phone: "+1 555-0108", role: "Member", plan: "Free", status: "Suspended", joined: "Apr 5, 2023", location: "Enugu, Nigeria", avatar: "GA" },
];

export const ADMIN_COURSES: AdminCourse[] = [
  { id: "c1", title: "Understanding the Gospel of John", category: "New Testament", instructor: "Pastor David Mensah", students: 248, lessons: 21, status: "Published", access: "Premium", thumbnail: "📖", description: "A deep verse-by-verse study of the Gospel of John.", created: "Jan 10, 2026", completionRate: 62 },
  { id: "c2", title: "Foundations of Christian Faith", category: "Christian Living", instructor: "Pastor Sarah Okafor", students: 412, lessons: 14, status: "Published", access: "Free", thumbnail: "✝️", description: "Core essentials of the Christian faith for new believers.", created: "Mar 5, 2026", completionRate: 74 },
  { id: "c3", title: "Prayer and Spiritual Growth", category: "Prayer", instructor: "Pastor James Adeyemi", students: 187, lessons: 12, status: "Published", access: "Free", thumbnail: "🙏", description: "Practical guide to building a powerful prayer life.", created: "Feb 20, 2026", completionRate: 89 },
  { id: "c4", title: "Leadership in Ministry", category: "Ministry Training", instructor: "Pastor Ruth Eze", students: 96, lessons: 18, status: "Draft", access: "Premium", thumbnail: "👑", description: "Equipping leaders to serve effectively in ministry.", created: "May 1, 2026", completionRate: 0 },
  { id: "c5", title: "Old Testament Survey", category: "Old Testament", instructor: "Pastor Daniel Yusuf", students: 133, lessons: 36, status: "Published", access: "Premium", thumbnail: "📜", description: "A comprehensive survey of the entire Old Testament.", created: "Dec 12, 2025", completionRate: 41 },
  { id: "c6", title: "Christian Apologetics", category: "Christian Living", instructor: "Pastor Grace Amadi", students: 67, lessons: 18, status: "Published", access: "Free", thumbnail: "🛡️", description: "Learn to defend your faith with grace and wisdom.", created: "Apr 15, 2026", completionRate: 55 },
];

export const ADMIN_SERMONS: AdminSermon[] = [
  { id: "s1", title: "The Kingdom Among Us", speaker: "Pastor David Mensah", bibleRef: "Matthew 6:33", category: "Kingdom of God", date: "Jun 16, 2026", duration: "52:14", views: 1240, status: "Published", thumbnail: "🎙️" },
  { id: "s2", title: "Carried By Grace", speaker: "Pastor David Mensah", bibleRef: "Ephesians 2:8", category: "Grace", date: "Jun 9, 2026", duration: "48:32", views: 1582, status: "Published", thumbnail: "🕊️" },
  { id: "s3", title: "Faith That Moves Mountains", speaker: "Pastor Caleb Nwosu", bibleRef: "Matthew 17:20", category: "Faith", date: "Jun 2, 2026", duration: "44:18", views: 998, status: "Published", thumbnail: "⛰️" },
  { id: "s4", title: "A House Of Prayer", speaker: "Pastor David Mensah", bibleRef: "Isaiah 56:7", category: "Prayer", date: "May 26, 2026", duration: "55:09", views: 1411, status: "Published", thumbnail: "🏛️" },
  { id: "s5", title: "The Prodigal Son Returns", speaker: "Pastor Sarah Okafor", bibleRef: "Luke 15:11", category: "Redemption", date: "May 19, 2026", duration: "41:25", views: 876, status: "Archived", thumbnail: "💛" },
];

export const ADMIN_EVENTS: AdminEvent[] = [
  { id: "e1", title: "Sunday Worship Service", date: "Jun 29, 2026", time: "9:00 AM", location: "Main Sanctuary", category: "Worship", capacity: 600, registered: 412, status: "Upcoming", image: "⛪" },
  { id: "e2", title: "Summer Faith Conference", date: "Aug 2, 2026", time: "10:00 AM", location: "Kingdom Life Center", category: "Conference", capacity: 500, registered: 312, status: "Upcoming", image: "🌟" },
  { id: "e3", title: "Wednesday Bible Study", date: "Jul 2, 2026", time: "7:00 PM", location: "Fellowship Hall", category: "Bible Study", capacity: 150, registered: 98, status: "Upcoming", image: "📖" },
  { id: "e4", title: "Youth Fellowship Night", date: "Jun 27, 2026", time: "6:30 PM", location: "Youth Center", category: "Youth", capacity: 150, registered: 92, status: "Upcoming", image: "🎉" },
  { id: "e5", title: "Marriage and Family Seminar", date: "Jul 19, 2026", time: "2:00 PM", location: "Fellowship Hall", category: "Seminar", capacity: 120, registered: 84, status: "Upcoming", image: "💑" },
  { id: "e6", title: "Easter Sunday Service", date: "Apr 20, 2026", time: "9:00 AM", location: "Main Sanctuary", category: "Worship", capacity: 600, registered: 578, status: "Past", image: "✝️" },
];

export const ADMIN_DONATIONS: AdminDonation[] = [
  { id: "d1", donor: "Anonymous", email: "anon@email.com", fund: "General Fund", amount: 1200, date: "Jun 20, 2026", type: "One-time", status: "Successful", method: "Card" },
  { id: "d2", donor: "Rachel Mensah", email: "rachel.m@email.com", fund: "Missions", amount: 250, date: "Jun 19, 2026", type: "Recurring", status: "Successful", method: "Card" },
  { id: "d3", donor: "Anonymous", email: "anon2@email.com", fund: "Building Fund", amount: 5000, date: "Jun 18, 2026", type: "One-time", status: "Successful", method: "Bank Transfer" },
  { id: "d4", donor: "Andrew Thompson", email: "a.thompson@email.com", fund: "Monthly Giving", amount: 150, date: "Jun 17, 2026", type: "Recurring", status: "Successful", method: "Card" },
  { id: "d5", donor: "Sarah Lin", email: "sarah.lin@email.com", fund: "Charity", amount: 75, date: "Jun 17, 2026", type: "One-time", status: "Failed", method: "Card" },
  { id: "d6", donor: "Michael O'Brien", email: "michael.o@email.com", fund: "Youth Ministry", amount: 500, date: "Jun 15, 2026", type: "One-time", status: "Successful", method: "Card" },
];

export const ADMIN_PRAYERS: AdminPrayer[] = [
  { id: "p1", title: "Healing for my mother", detail: "My mother was recently diagnosed and I need prayers.", author: "Rachel Mensah", category: "Health", privacy: "Public", status: "Approved", answered: false, prayerCount: 24, createdAt: "3 days ago" },
  { id: "p2", title: "Career breakthrough", detail: "Believing God for a new opportunity.", author: "John Member", category: "Career", privacy: "Private", status: "Approved", answered: false, prayerCount: 8, createdAt: "1 week ago" },
  { id: "p3", title: "Thanksgiving for job offer", detail: "God answered my prayer!", author: "Rachel Mensah", category: "Thanksgiving", privacy: "Public", status: "Approved", answered: true, prayerCount: 42, createdAt: "2 weeks ago" },
  { id: "p4", title: "Family restoration", detail: "Praying for peace and reconciliation.", author: "Andrew Thompson", category: "Family", privacy: "Public", status: "Pending", answered: false, prayerCount: 0, createdAt: "5 days ago" },
  { id: "p5", title: "Offensive content test", detail: "This should be hidden.", author: "Unknown", category: "Other", privacy: "Public", status: "Hidden", answered: false, prayerCount: 0, createdAt: "1 day ago" },
];

export const ADMIN_POSTS: AdminPost[] = [
  { id: "po1", author: "Rachel Mensah", avatar: "RM", content: "\"For I know the plans I have for you\" — God is faithful! 🙏", type: "testimony", likes: 48, comments: 12, status: "Approved", reported: false, createdAt: "2 hours ago" },
  { id: "po2", author: "Andrew Thompson", avatar: "AT", content: "Wednesday Bible study was amazing. Pastor David's teaching on John 15 really spoke to me.", type: "encouragement", likes: 32, comments: 8, status: "Pending", reported: false, createdAt: "5 hours ago" },
  { id: "po3", author: "Priya Sharma", avatar: "PS", content: "\"The Lord is my shepherd, I shall not want.\" — Psalm 23:1 🌅", type: "verse", likes: 61, comments: 15, status: "Approved", reported: false, createdAt: "1 day ago" },
  { id: "po4", author: "Unknown User", avatar: "UU", content: "Flagged content that needs review by moderators.", type: "encouragement", likes: 2, comments: 1, status: "Pending", reported: true, createdAt: "3 hours ago" },
];

export const ADMIN_ANNOUNCEMENTS: AdminAnnouncement[] = [
  { id: "an1", title: "New Bible Academy Course: Christian Apologetics", description: "Our newest course is now live!", category: "Bible Academy", pinned: true, status: "Published", publishDate: "Jun 20, 2026", image: "🎓" },
  { id: "an2", title: "Sunday Service Time Update", description: "Starting July 6, our first service will begin at 8:30 AM.", category: "Church News", pinned: true, status: "Published", publishDate: "Jun 18, 2026", image: "⛪" },
  { id: "an3", title: "Community Outreach Registration", description: "Join us as we serve on July 5.", category: "Events", pinned: false, status: "Draft", publishDate: "Jun 25, 2026", image: "🤝" },
  { id: "an4", title: "Prayer Week This Monday", description: "Daily sessions at 6 AM and 7 PM.", category: "Prayer", pinned: false, status: "Scheduled", publishDate: "Jun 28, 2026", image: "🙏" },
];

export const ADMIN_PLANS: AdminPlan[] = [
  { id: "pl1", name: "Free", monthlyPrice: 0, yearlyPrice: 0, features: ["2 free courses", "Recent sermons", "Community feed", "Prayer requests"], activeSubscribers: 1842, status: "Active" },
  { id: "pl2", name: "Premium", monthlyPrice: 9.99, yearlyPrice: 79.99, features: ["All courses", "Full sermon archive", "Certificates", "Offline access", "Priority support"], activeSubscribers: 524, status: "Active" },
  { id: "pl3", name: "Annual", monthlyPrice: 6.67, yearlyPrice: 79.99, features: ["Everything in Premium", "Family sharing (4)", "1-on-1 call", "Annual devotional"], activeSubscribers: 118, status: "Active" },
];

export const ADMIN_TRANSACTIONS: AdminTransaction[] = [
  { id: "tx1", member: "Rachel Mensah", email: "rachel.m@email.com", plan: "Premium", amount: 9.99, date: "Jun 20, 2026", status: "Successful", method: "Visa •••• 4242" },
  { id: "tx2", member: "Andrew Thompson", email: "a.thompson@email.com", plan: "Annual", amount: 79.99, date: "Jun 19, 2026", status: "Successful", method: "Mastercard •••• 5555" },
  { id: "tx3", member: "Priya Sharma", email: "priya.s@email.com", plan: "Premium", amount: 9.99, date: "Jun 18, 2026", status: "Failed", method: "Visa •••• 1234" },
  { id: "tx4", member: "Michael O'Brien", email: "michael.o@email.com", plan: "Premium", amount: 9.99, date: "Jun 17, 2026", status: "Successful", method: "PayPal" },
  { id: "tx5", member: "Sarah Lin", email: "sarah.lin@email.com", plan: "Annual", amount: 79.99, date: "Jun 10, 2026", status: "Refunded", method: "Visa •••• 9999" },
];

export const ADMIN_CERTIFICATES: AdminCertificate[] = [
  { id: "cert1", member: "Rachel Mensah", course: "Foundations of Christian Faith", issuedDate: "Jun 15, 2026", status: "Issued" },
  { id: "cert2", member: "Andrew Thompson", course: "Prayer and Spiritual Growth", issuedDate: "Jun 10, 2026", status: "Issued" },
  { id: "cert3", member: "Michael O'Brien", course: "Leadership in Ministry", issuedDate: "Jun 5, 2026", status: "Issued" },
  { id: "cert4", member: "Priya Sharma", course: "Understanding the Gospel of John", issuedDate: "—", status: "Pending" },
];

export const ADMIN_DEVOTIONS: AdminDevotionItem[] = [
  { id: "dv1", verse: "Be still, and know that I am God.", ref: "Psalm 46:10", message: "In the noise of life, God invites us into stillness...", reflection: "What areas do you need to release control?", prayer: "Lord, still my heart before You today.", date: "Jun 24, 2026", status: "Published" },
  { id: "dv2", verse: "Your word is a lamp to my feet.", ref: "Psalm 119:105", message: "God's Word illuminates our path in darkness...", reflection: "How has God's Word guided you recently?", prayer: "Father, let Your Word be my guide today.", date: "Jun 25, 2026", status: "Scheduled" },
  { id: "dv3", verse: "I can do all things through Christ.", ref: "Philippians 4:13", message: "Paul wrote this from prison, yet full of joy...", reflection: "What challenge are you facing that needs His strength?", prayer: "Lord, be my strength in weakness.", date: "Jun 26, 2026", status: "Draft" },
];

// ── Chart Data ─────────────────────────────────────────────────────────────
export const MEMBER_GROWTH = [180, 210, 245, 280, 310, 355, 398, 442, 490, 540, 610, 680];
export const REVENUE_DATA = [3200, 4800, 4100, 6400, 5800, 7200, 6800, 8600, 7900, 9400, 8800, 10200];
export const DONATION_DATA = [8200, 12400, 10800, 15600, 14200, 18800, 16400, 22000, 19600, 24800, 22400, 28000];
export const ENROLLMENT_DATA = [42, 68, 55, 89, 76, 94, 88, 112, 98, 124, 108, 138];
export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
