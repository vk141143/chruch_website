import { useState } from "react";
import { Plus, Trash2, Edit2, BookOpen, Tag, Video as VideoIcon } from "lucide-react";
import {
  ADMIN_COURSES, type AdminCourse,
} from "./adminData";
import {
  DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar,
  FormField, inputCls, selectCls, textareaCls, ActionBtn, toast,
} from "./AdminUI";

// ─────────────────────────────────────────────────────────────────────────────
// Bible Academy Courses
// ─────────────────────────────────────────────────────────────────────────────
const BLANK_COURSE: Omit<AdminCourse, "id"> = {
  title: "", category: "New Testament", instructor: "", students: 0,
  lessons: 0, status: "Draft", access: "Free", thumbnail: "📖",
  description: "", created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  completionRate: 0,
};

const CATEGORIES_LIST = ["New Testament", "Old Testament", "Prayer", "Christian Living", "Ministry Training", "Prophecy", "Biblical Languages"];
const EMOJIS = ["📖", "✝️", "🙏", "👑", "📜", "🛡️", "🔮", "🏛️", "🌿", "⭐"];

export function AcademyView() {
  const [courses, setCourses] = useState<AdminCourse[]>(ADMIN_COURSES);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; course?: AdminCourse }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState<Omit<AdminCourse, "id">>(BLANK_COURSE);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.instructor.toLowerCase().includes(search.toLowerCase())
  );

  function openAdd() { setForm(BLANK_COURSE); setModal({ open: true, mode: "add" }); }
  function openEdit(c: AdminCourse) { setForm(c); setModal({ open: true, mode: "edit", course: c }); }

  function save() {
    if (!form.title.trim() || !form.instructor.trim()) { toast("Title and instructor required.", "error"); return; }
    if (modal.mode === "add") {
      setCourses((p) => [...p, { ...form, id: `c${Date.now()}` }]);
      toast("Course created.");
    } else if (modal.course) {
      setCourses((p) => p.map((c) => c.id === modal.course!.id ? { ...modal.course!, ...form } : c));
      toast("Course updated.");
    }
    setModal({ open: false, mode: "add" });
  }

  const cols = [
    {
      key: "title", label: "Course",
      render: (c: AdminCourse) => (
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-xl">{c.thumbnail}</div>
          <div>
            <p className="font-medium text-navy text-sm">{c.title}</p>
            <p className="text-xs text-muted-foreground">{c.instructor}</p>
          </div>
        </div>
      ),
    },
    { key: "category", label: "Category", render: (c: AdminCourse) => <span className="text-xs text-muted-foreground">{c.category}</span> },
    { key: "students", label: "Students", render: (c: AdminCourse) => <span className="font-medium text-navy">{c.students}</span> },
    { key: "completionRate", label: "Completion", render: (c: AdminCourse) => (
      <div className="flex items-center gap-2 min-w-[80px]">
        <div className="flex-1 h-1.5 rounded-full bg-cream overflow-hidden">
          <div className="h-full bg-gradient-gold" style={{ width: `${c.completionRate}%` }} />
        </div>
        <span className="text-xs text-muted-foreground">{c.completionRate}%</span>
      </div>
    ) },
    { key: "access", label: "Access", render: (c: AdminCourse) => <Badge label={c.access} /> },
    { key: "status", label: "Status", render: (c: AdminCourse) => <Badge label={c.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Bible Academy" desc={`${courses.length} courses`}
        action={
          <button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
            <Plus className="h-3.5 w-3.5" /> New Course
          </button>
        }
      />
      <div className="mb-5"><SearchBar value={search} onChange={setSearch} placeholder="Search courses..." /></div>

      <DataTable cols={cols} rows={filtered}
        actions={(c) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => openEdit(c)} variant="ghost" />
            <ActionBtn label={c.status === "Published" ? "Unpublish" : "Publish"}
              onClick={() => { setCourses((p) => p.map((x) => x.id === c.id ? { ...x, status: x.status === "Published" ? "Draft" : "Published" } : x)); toast("Status updated."); }}
              variant="default" />
            <button onClick={() => setConfirm({ open: true, id: c.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      />

      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Create Course" : "Edit Course"} size="lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <FormField label="Course Title" required>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Course title" />
            </FormField>
          </div>
          <FormField label="Instructor / Pastor" required>
            <input value={form.instructor} onChange={(e) => setForm((f) => ({ ...f, instructor: e.target.value }))} className={inputCls} placeholder="Pastor name" />
          </FormField>
          <FormField label="Category">
            <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={selectCls}>
              {CATEGORIES_LIST.map((c) => <option key={c}>{c}</option>)}
            </select>
          </FormField>
          <FormField label="Access Level">
            <select value={form.access} onChange={(e) => setForm((f) => ({ ...f, access: e.target.value as "Free" | "Premium" }))} className={selectCls}>
              <option>Free</option><option>Premium</option>
            </select>
          </FormField>
          <FormField label="Status">
            <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as "Published" | "Draft" }))} className={selectCls}>
              <option>Draft</option><option>Published</option>
            </select>
          </FormField>
          <FormField label="Thumbnail Emoji">
            <div className="flex gap-2 flex-wrap">
              {EMOJIS.map((e) => (
                <button key={e} onClick={() => setForm((f) => ({ ...f, thumbnail: e }))}
                  className={`h-9 w-9 rounded-xl text-lg flex items-center justify-center transition-colors ${form.thumbnail === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`}>
                  {e}
                </button>
              ))}
            </div>
          </FormField>
          <FormField label="Number of Lessons">
            <input type="number" value={form.lessons} onChange={(e) => setForm((f) => ({ ...f, lessons: +e.target.value }))} className={inputCls} />
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Description">
              <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className={textareaCls} rows={3} placeholder="Course description..." />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField label="Bible References">
              <input className={inputCls} placeholder="e.g. John 1:1, Genesis 1:1" />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField label="Study Resources (PDF links)">
              <input className={inputCls} placeholder="Paste PDF URL or upload link..." />
            </FormField>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">
            {modal.mode === "add" ? "Create Course" : "Save Changes"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setCourses((p) => p.filter((c) => c.id !== confirm.id)); toast("Course deleted.", "error"); }}
        title="Delete Course" message="This will permanently delete the course and all its lessons." danger />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Course Categories
// ─────────────────────────────────────────────────────────────────────────────
const INIT_CATEGORIES = CATEGORIES_LIST.map((name, i) => ({
  id: `cat${i}`, name,
  courses: ADMIN_COURSES.filter((c) => c.category === name).length,
  color: ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-yellow-100 text-yellow-700", "bg-purple-100 text-purple-700", "bg-orange-100 text-orange-700", "bg-pink-100 text-pink-700", "bg-cyan-100 text-cyan-700"][i % 7],
}));

export function CategoriesView() {
  const [cats, setCats] = useState(INIT_CATEGORIES);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });

  function addCat() {
    if (!name.trim()) { toast("Category name required.", "error"); return; }
    setCats((p) => [...p, { id: `cat${Date.now()}`, name, courses: 0, color: "bg-slate-100 text-slate-600" }]);
    setName(""); setModal(false); toast("Category added.");
  }

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Course Categories" desc={`${cats.length} categories`}
        action={
          <button onClick={() => setModal(true)} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
            <Plus className="h-3.5 w-3.5" /> Add Category
          </button>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cats.map((cat) => (
          <div key={cat.id} className="rounded-2xl bg-background border border-border p-5 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <Tag className="h-5 w-5 text-navy" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">{cat.name}</p>
                <p className="text-xs text-muted-foreground">{cat.courses} courses</p>
              </div>
            </div>
            <button onClick={() => setConfirm({ open: true, id: cat.id })} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:text-red-600 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
      <Modal open={modal} onClose={() => setModal(false)} title="Add Category" size="sm">
        <FormField label="Category Name" required>
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="e.g. New Testament" />
        </FormField>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={() => setModal(false)} className="rounded-full border border-border px-4 py-2 text-sm text-navy hover:bg-cream">Cancel</button>
          <button onClick={addCat} className="rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold">Add</button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setCats((p) => p.filter((c) => c.id !== confirm.id)); toast("Category deleted.", "error"); }}
        title="Delete Category" message="Courses in this category will become uncategorized." danger />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Videos & Lessons
// ─────────────────────────────────────────────────────────────────────────────
const LESSONS = [
  { id: "l1", course: "Understanding the Gospel of John", title: "Introduction & Overview", duration: "8:32", order: 1, type: "Video", status: "Published", free: true },
  { id: "l2", course: "Understanding the Gospel of John", title: "Historical Context", duration: "12:14", order: 2, type: "Video", status: "Published", free: true },
  { id: "l3", course: "Understanding the Gospel of John", title: "The Word Became Flesh", duration: "15:40", order: 3, type: "Video", status: "Published", free: false },
  { id: "l4", course: "Foundations of Christian Faith", title: "What is the Gospel?", duration: "10:05", order: 1, type: "Video", status: "Published", free: true },
  { id: "l5", course: "Foundations of Christian Faith", title: "Grace and Salvation", duration: "11:28", order: 2, type: "Video", status: "Published", free: false },
  { id: "l6", course: "Prayer and Spiritual Growth", title: "Why We Pray", duration: "9:15", order: 1, type: "Video", status: "Draft", free: true },
];

export function VideosView() {
  const [lessons, setLessons] = useState(LESSONS);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; lesson?: typeof LESSONS[0] }>({ open: false });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState({ title: "", course: "", youtubeId: "", duration: "", order: 1, type: "Video", status: "Draft", free: false });

  const filtered = lessons.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    l.course.toLowerCase().includes(search.toLowerCase())
  );

  const cols = [
    {
      key: "title", label: "Lesson",
      render: (l: typeof LESSONS[0]) => (
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-navy">
            <VideoIcon className="h-4 w-4 text-gold" />
          </div>
          <div>
            <p className="font-medium text-navy text-sm">{l.title}</p>
            <p className="text-xs text-muted-foreground">{l.course}</p>
          </div>
        </div>
      ),
    },
    { key: "order", label: "Order", render: (l: typeof LESSONS[0]) => <span className="font-medium text-navy">#{l.order}</span> },
    { key: "duration", label: "Duration", render: (l: typeof LESSONS[0]) => <span className="text-xs text-muted-foreground">{l.duration}</span> },
    { key: "free", label: "Access", render: (l: typeof LESSONS[0]) => <Badge label={l.free ? "Free" : "Premium"} /> },
    { key: "status", label: "Status", render: (l: typeof LESSONS[0]) => <Badge label={l.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Videos & Lessons" desc={`${lessons.length} lessons`}
        action={
          <button onClick={() => { setForm({ title: "", course: "", duration: "", order: 1, type: "Video", status: "Draft", free: false }); setModal({ open: true }); }}
            className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
            <Plus className="h-3.5 w-3.5" /> Add Lesson
          </button>
        }
      />
      <div className="mb-5"><SearchBar value={search} onChange={setSearch} placeholder="Search lessons or courses..." /></div>
      <DataTable cols={cols} rows={filtered}
        actions={(l) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => { setForm({ title: l.title, course: l.course, duration: l.duration, order: l.order, type: l.type, status: l.status, free: l.free }); setModal({ open: true, lesson: l }); }} variant="ghost" />
            <button onClick={() => setConfirm({ open: true, id: l.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      />
      <Modal open={modal.open} onClose={() => setModal({ open: false })} title={modal.lesson ? "Edit Lesson" : "Add Lesson"} size="md">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <FormField label="Lesson Title" required>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Lesson title" />
            </FormField>
          </div>
          <FormField label="Course">
            <select value={form.course} onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))} className={selectCls}>
              <option value="">Select course...</option>
              {ADMIN_COURSES.map((c) => <option key={c.id}>{c.title}</option>)}
            </select>
          </FormField>
          <FormField label="Lesson Order">
            <input type="number" value={form.order} onChange={(e) => setForm((f) => ({ ...f, order: +e.target.value }))} className={inputCls} min={1} />
          </FormField>
          <FormField label="Duration">
            <input value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} className={inputCls} placeholder="e.g. 12:30" />
          </FormField>
          <FormField label="Access">
            <select value={form.free ? "Free" : "Premium"} onChange={(e) => setForm((f) => ({ ...f, free: e.target.value === "Free" }))} className={selectCls}>
              <option>Free</option><option>Premium</option>
            </select>
          </FormField>
          <FormField label="YouTube Video ID" required>
            <input value={form.youtubeId ?? ""} onChange={(e) => setForm((f) => ({ ...f, youtubeId: e.target.value }))} className={inputCls} placeholder="e.g. dQw4w9WgXcQ" />
            <p className="text-xs text-muted-foreground mt-1">Paste the YouTube video ID from the URL. The video must be set to Unlisted or Public on YouTube.</p>
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Video Upload / URL (optional)">
              <input className={inputCls} placeholder="Paste video URL or upload..." />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField label="Bible References">
              <input className={inputCls} placeholder="e.g. John 1:1, Romans 8:28" />
            </FormField>
          </div>
          <FormField label="Status">
            <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))} className={selectCls}>
              <option>Draft</option><option>Published</option>
            </select>
          </FormField>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={() => { if (!form.title.trim()) { toast("Title required.", "error"); return; } if (modal.lesson) { setLessons((p) => p.map((l) => l.id === modal.lesson!.id ? { ...l, ...form } : l)); toast("Lesson updated."); } else { setLessons((p) => [...p, { id: `l${Date.now()}`, ...form }]); toast("Lesson added."); } setModal({ open: false }); }}
            className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">
            {modal.lesson ? "Save Changes" : "Add Lesson"}
          </button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setLessons((p) => p.filter((l) => l.id !== confirm.id)); toast("Lesson deleted.", "error"); }}
        title="Delete Lesson" message="This lesson will be permanently removed." danger />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Video Library (admin view of videoData)
// ─────────────────────────────────────────────────────────────────────────────
import { useState as useStateVL } from "react";
import { MOCK_VIDEOS, VIDEO_CATEGORIES, type Video as VideoData } from "@/lib/videoData";

export function VideoLibraryView() {
  const [videos, setVideos] = useStateVL<VideoData[]>(MOCK_VIDEOS);
  const [search, setSearch] = useStateVL("");
  const [catFilter, setCatFilter] = useStateVL("all");
  const [modal, setModal] = useStateVL<{ open: boolean; mode: "add" | "edit"; video?: VideoData }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useStateVL<{ open: boolean; id: string }>({ open: false, id: "" });

  const BLANK: Omit<VideoData, "id"> = {
    title: "", description: "", thumbnail: "", youtubeId: "", premium: false,
    category: "new-testament", duration: "", instructor: "", order: 1,
    views: 0, publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  };

  const [form, setForm] = useStateVL<Omit<VideoData, "id">>(BLANK);

  const filtered = videos.filter((v) => {
    const ms = v.title.toLowerCase().includes(search.toLowerCase()) || v.instructor.toLowerCase().includes(search.toLowerCase());
    const mc = catFilter === "all" || v.category === catFilter;
    return ms && mc;
  });

  function openAdd() { setForm(BLANK); setModal({ open: true, mode: "add" }); }
  function openEdit(v: VideoData) { const { id: _id, ...rest } = v; setForm(rest); setModal({ open: true, mode: "edit", video: v }); }

  function save() {
    if (!form.title.trim() || !form.youtubeId.trim()) { toast("Title and YouTube ID required.", "error"); return; }
    if (modal.mode === "add") {
      setVideos((p) => [...p, { ...form, id: `v${Date.now()}` }]);
      toast("Video added to library.");
    } else if (modal.video) {
      setVideos((p) => p.map((v) => v.id === modal.video!.id ? { ...modal.video!, ...form } : v));
      toast("Video updated.");
    }
    setModal({ open: false, mode: "add" });
  }

  const cols = [
    {
      key: "title", label: "Video",
      render: (v: VideoData) => (
        <div className="flex items-center gap-3">
          <img src={v.thumbnail} alt={v.title} className="h-10 w-16 rounded-lg object-cover bg-muted shrink-0" />
          <div className="min-w-0">
            <p className="font-medium text-navy text-sm truncate max-w-[200px]">{v.title}</p>
            <p className="text-xs text-muted-foreground truncate">{v.instructor}</p>
          </div>
        </div>
      ),
    },
    { key: "category", label: "Category", render: (v: VideoData) => <span className="text-xs text-muted-foreground capitalize">{v.category.replace("-", " ")}</span> },
    { key: "duration", label: "Duration", render: (v: VideoData) => <span className="text-xs text-muted-foreground">{v.duration}</span> },
    { key: "views", label: "Views", render: (v: VideoData) => <span className="font-medium text-navy text-sm">{(v.views ?? 0).toLocaleString()}</span> },
    { key: "youtubeId", label: "YouTube ID", render: (v: VideoData) => (
      <a href={`https://youtu.be/${v.youtubeId}`} target="_blank" rel="noopener noreferrer"
        className="text-xs text-gold hover:underline font-mono">{v.youtubeId}</a>
    ) },
    { key: "premium", label: "Access", render: (v: VideoData) => <Badge label={v.premium ? "Premium" : "Free"} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Video Library"
        desc={`${videos.length} videos · ${videos.filter((v) => v.premium).length} premium`}
        action={
          <button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
            <Plus className="h-3.5 w-3.5" /> Add Video
          </button>
        }
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search videos or instructors..." /></div>
        <div className="flex gap-1 rounded-xl bg-cream p-1 overflow-x-auto">
          {VIDEO_CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => setCatFilter(c.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${catFilter === c.id ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <DataTable
        cols={cols}
        rows={filtered}
        actions={(v) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => openEdit(v)} variant="ghost" />
            <ActionBtn
              label={v.premium ? "Set Free" : "Set Premium"}
              onClick={() => { setVideos((p) => p.map((x) => x.id === v.id ? { ...x, premium: !x.premium } : x)); toast("Access updated."); }}
              variant="default"
            />
            <button onClick={() => setConfirm({ open: true, id: v.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Add Video" : "Edit Video"} size="lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <FormField label="Video Title" required>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Video title" />
            </FormField>
          </div>
          <FormField label="YouTube Video ID" required>
            <input value={form.youtubeId} onChange={(e) => setForm((f) => ({ ...f, youtubeId: e.target.value }))} className={inputCls} placeholder="e.g. dQw4w9WgXcQ" />
            <p className="text-xs text-muted-foreground mt-1">Upload as Unlisted on YouTube, then paste the video ID.</p>
          </FormField>
          <FormField label="Thumbnail URL">
            <input value={form.thumbnail} onChange={(e) => setForm((f) => ({ ...f, thumbnail: e.target.value }))} className={inputCls} placeholder="https://..." />
          </FormField>
          <FormField label="Instructor">
            <input value={form.instructor} onChange={(e) => setForm((f) => ({ ...f, instructor: e.target.value }))} className={inputCls} placeholder="Pastor name" />
          </FormField>
          <FormField label="Duration">
            <input value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} className={inputCls} placeholder="e.g. 12:30" />
          </FormField>
          <FormField label="Category">
            <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={selectCls}>
              {VIDEO_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Access Level">
            <select value={form.premium ? "Premium" : "Free"} onChange={(e) => setForm((f) => ({ ...f, premium: e.target.value === "Premium" }))} className={selectCls}>
              <option>Free</option>
              <option>Premium</option>
            </select>
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Description">
              <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className={textareaCls} rows={3} placeholder="Brief description of the video content..." />
            </FormField>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">
            {modal.mode === "add" ? "Add Video" : "Save Changes"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog
        open={confirm.open}
        onClose={() => setConfirm((p) => ({ ...p, open: false }))}
        onConfirm={() => { setVideos((p) => p.filter((v) => v.id !== confirm.id)); toast("Video deleted.", "error"); }}
        title="Delete Video"
        message="This video will be permanently removed from the library."
        danger
      />
    </div>
  );
}
