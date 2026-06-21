export type Course = {
  id: string; title: string; category: string; instructor: string;
  progress: number; lessonsCompleted: number; totalLessons: number;
  lastWatched: string; thumbnail: string; status: "in-progress" | "completed" | "saved";
  currentLesson: string; duration: string; premium: boolean;
};

export type Sermon = {
  id: string; title: string; speaker: string; bibleRef: string;
  date: string; duration: string; topic: string; thumbnail: string;
  saved: boolean;
};

export type Event = {
  id: string; title: string; date: string; time: string; location: string;
  type: string; attendees: number; status: "upcoming" | "registered" | "past" | "cancelled";
  image: string;
};

export type PrayerRequest = {
  id: string; title: string; detail: string; category: string;
  privacy: "public" | "private"; prayerCount: number; answered: boolean;
  createdAt: string; author: string;
};

export type Notification = {
  id: string; title: string; message: string; type: string;
  read: boolean; createdAt: string;
};

export type Post = {
  id: string; author: string; avatar: string; content: string;
  likes: number; comments: number; createdAt: string; type: string;
};

export type Announcement = {
  id: string; title: string; description: string; date: string;
  category: string; pinned: boolean; image: string;
};

export const MOCK_COURSES: Course[] = [
  { id: "c1", title: "Understanding the Gospel of John", category: "New Testament", instructor: "Pastor David Mensah", progress: 68, lessonsCompleted: 14, totalLessons: 21, lastWatched: "2 days ago", thumbnail: "📖", status: "in-progress", currentLesson: "The Bread of Life", duration: "4h 30m left", premium: true },
  { id: "c2", title: "Foundations of Christian Faith", category: "Christian Living", instructor: "Pastor Sarah Okafor", progress: 35, lessonsCompleted: 5, totalLessons: 14, lastWatched: "5 days ago", thumbnail: "✝️", status: "in-progress", currentLesson: "Grace and Salvation", duration: "6h 15m left", premium: true },
  { id: "c3", title: "Prayer and Spiritual Growth", category: "Prayer", instructor: "Pastor James Adeyemi", progress: 90, lessonsCompleted: 11, totalLessons: 12, lastWatched: "1 day ago", thumbnail: "🙏", status: "in-progress", currentLesson: "Intercession", duration: "45m left", premium: false },
  { id: "c4", title: "Leadership in Ministry", category: "Ministry Training", instructor: "Pastor Ruth Eze", progress: 100, lessonsCompleted: 18, totalLessons: 18, lastWatched: "1 week ago", thumbnail: "👑", status: "completed", currentLesson: "Completed", duration: "0m left", premium: true },
  { id: "c5", title: "Old Testament Survey", category: "Old Testament", instructor: "Pastor Daniel Yusuf", progress: 0, lessonsCompleted: 0, totalLessons: 36, lastWatched: "Never", thumbnail: "📜", status: "saved", currentLesson: "Introduction", duration: "12h total", premium: true },
  { id: "c6", title: "Christian Apologetics", category: "Christian Living", instructor: "Pastor Grace Amadi", progress: 0, lessonsCompleted: 0, totalLessons: 18, lastWatched: "Never", thumbnail: "🛡️", status: "saved", currentLesson: "Introduction", duration: "8h total", premium: false },
];

export const MOCK_SERMONS: Sermon[] = [
  { id: "s1", title: "The Kingdom Among Us", speaker: "Pastor David Mensah", bibleRef: "Matthew 6:33", date: "Jun 16, 2026", duration: "52:14", topic: "Kingdom of God", thumbnail: "🎙️", saved: true },
  { id: "s2", title: "Carried By Grace", speaker: "Pastor David Mensah", bibleRef: "Ephesians 2:8", date: "Jun 9, 2026", duration: "48:32", topic: "Grace", thumbnail: "🕊️", saved: false },
  { id: "s3", title: "Faith That Moves Mountains", speaker: "Pastor Caleb Nwosu", bibleRef: "Matthew 17:20", date: "Jun 2, 2026", duration: "44:18", topic: "Faith", thumbnail: "⛰️", saved: true },
  { id: "s4", title: "A House Of Prayer", speaker: "Pastor David Mensah", bibleRef: "Isaiah 56:7", date: "May 26, 2026", duration: "55:09", topic: "Prayer", thumbnail: "🏛️", saved: false },
  { id: "s5", title: "The Prodigal Son Returns", speaker: "Pastor Sarah Okafor", bibleRef: "Luke 15:11", date: "May 19, 2026", duration: "41:25", topic: "Redemption", thumbnail: "💛", saved: false },
];

export const MOCK_EVENTS: Event[] = [
  { id: "e1", title: "Sunday Worship Service", date: "Jun 29, 2026", time: "9:00 AM & 11:00 AM", location: "Main Sanctuary", type: "Worship", attendees: 412, status: "upcoming", image: "⛪" },
  { id: "e2", title: "Summer Faith Conference", date: "Aug 2, 2026", time: "10:00 AM - 6:00 PM", location: "WordnWorship Center", type: "Conference", attendees: 312, status: "registered", image: "🌟" },
  { id: "e3", title: "Wednesday Bible Study", date: "Jul 2, 2026", time: "7:00 PM", location: "Fellowship Hall", type: "Bible Study", attendees: 98, status: "upcoming", image: "📖" },
  { id: "e4", title: "Youth Fellowship Night", date: "Jun 27, 2026", time: "6:30 PM", location: "Youth Center", type: "Youth", attendees: 92, status: "registered", image: "🎉" },
  { id: "e5", title: "Prayer and Worship Evening", date: "Jul 11, 2026", time: "7:30 PM", location: "Prayer Room", type: "Prayer", attendees: 65, status: "upcoming", image: "🙏" },
  { id: "e6", title: "Marriage and Family Seminar", date: "Jul 19, 2026", time: "2:00 PM", location: "Fellowship Hall", type: "Seminar", attendees: 84, status: "upcoming", image: "💑" },
];

export const MOCK_PRAYER_REQUESTS: PrayerRequest[] = [
  { id: "p1", title: "Healing for my mother", detail: "My mother was recently diagnosed and I need prayers for her complete healing.", category: "Health", privacy: "public", prayerCount: 24, answered: false, createdAt: "3 days ago", author: "You" },
  { id: "p2", title: "Career breakthrough", detail: "Believing God for a new opportunity aligned with my purpose.", category: "Career", privacy: "private", prayerCount: 8, answered: false, createdAt: "1 week ago", author: "You" },
  { id: "p3", title: "Thanksgiving for job offer", detail: "God answered my prayer! I received a wonderful job offer.", category: "Thanksgiving", privacy: "public", prayerCount: 42, answered: true, createdAt: "2 weeks ago", author: "Rachel M." },
  { id: "p4", title: "Restoration of family unity", detail: "Praying for peace and reconciliation in my family.", category: "Family", privacy: "public", prayerCount: 31, answered: false, createdAt: "5 days ago", author: "Andrew T." },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: "n1", title: "New Course Released!", message: "Christian Apologetics is now available in Bible Academy.", type: "course", read: false, createdAt: "1 hour ago" },
  { id: "n2", title: "Event Registration Confirmed", message: "You are registered for Summer Faith Conference.", type: "event", read: false, createdAt: "3 hours ago" },
  { id: "n3", title: "New Sermon Uploaded", message: "Pastor David uploaded: The Kingdom Among Us.", type: "sermon", read: true, createdAt: "1 day ago" },
  { id: "n4", title: "24 People Praying For You", message: "Your prayer request received 24 prayers.", type: "prayer", read: true, createdAt: "2 days ago" },
  { id: "n5", title: "Subscription Renewal", message: "Your Premium plan renews in 7 days.", type: "subscription", read: false, createdAt: "3 days ago" },
  { id: "n6", title: "Certificate Earned! 🎉", message: "You earned a certificate for Leadership in Ministry.", type: "certificate", read: true, createdAt: "1 week ago" },
];

export const MOCK_POSTS: Post[] = [
  { id: "po1", author: "Rachel Mensah", avatar: "RM", content: "\"For I know the plans I have for you\" — God is faithful! Just got confirmed for a new role. Never stop trusting Him. 🙏✨", likes: 48, comments: 12, createdAt: "2 hours ago", type: "testimony" },
  { id: "po2", author: "Andrew Thompson", avatar: "AT", content: "Wednesday Bible study was amazing tonight. Pastor David's teaching on John 15 really spoke to me. Who else was blessed?", likes: 32, comments: 8, createdAt: "5 hours ago", type: "encouragement" },
  { id: "po3", author: "Priya Sharma", avatar: "PS", content: "\"The Lord is my shepherd, I shall not want.\" — Psalm 23:1. Starting every morning with this truth. Have a blessed day, WordnWorship family! 🌅", likes: 61, comments: 15, createdAt: "1 day ago", type: "verse" },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id: "an1", title: "New Bible Academy Course: Christian Apologetics", description: "Our newest course is now live! Learn to defend your faith with grace and wisdom. Enroll today.", date: "Jun 20, 2026", category: "Bible Academy", pinned: true, image: "🎓" },
  { id: "an2", title: "Sunday Service Time Update", description: "Starting July 6, our first Sunday service will begin at 8:30 AM. Second service remains at 11:00 AM.", date: "Jun 18, 2026", category: "Church News", pinned: true, image: "⛪" },
  { id: "an3", title: "Community Outreach Registration Open", description: "Join us as we serve our community on July 5. Sign up through the Events page.", date: "Jun 15, 2026", category: "Events", pinned: false, image: "🤝" },
  { id: "an4", title: "Prayer Week Begins This Monday", description: "Join us for a week of corporate prayer and fasting. Daily sessions at 6 AM and 7 PM.", date: "Jun 12, 2026", category: "Prayer", pinned: false, image: "🙏" },
];

export const BIBLE_VERSES = [
  { verse: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105" },
  { verse: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
  { verse: "For God so loved the world that he gave his one and only Son.", ref: "John 3:16" },
  { verse: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
];

export const DEVOTION = {
  verse: "Be still, and know that I am God.",
  ref: "Psalm 46:10",
  message: "In the noise and rush of modern life, God invites us into stillness. Not passive idleness, but an active trust — a ceasing from our striving to acknowledge His sovereignty. When we quiet our hearts, we create space to hear His voice, feel His presence, and be renewed in His peace that surpasses all understanding.",
  reflection: "What areas of your life do you need to release control and trust God more fully today?",
  prayer: "Lord, still my heart before You today. Help me to trust in Your sovereignty over every area of my life. Let Your peace guard my heart and mind in Christ Jesus. Amen.",
};

export const STREAK_DAYS = [
  { day: "Mon", done: true }, { day: "Tue", done: true }, { day: "Wed", done: true },
  { day: "Thu", done: true }, { day: "Fri", done: false }, { day: "Sat", done: false }, { day: "Sun", done: false },
];
