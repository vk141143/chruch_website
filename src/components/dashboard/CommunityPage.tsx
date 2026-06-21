import { useState } from "react";
import { Heart, MessageCircle, Flag, Users, Plus, X } from "lucide-react";
import { MOCK_POSTS } from "@/lib/mockData";

const GROUPS = [
  { name: "Men's Bible Study", members: 34, emoji: "📖" },
  { name: "Women of Faith", members: 52, emoji: "🌸" },
  { name: "Youth Connect", members: 78, emoji: "⚡" },
  { name: "Grace & Truth", members: 29, emoji: "🕊️" },
  { name: "Prayer Warriors", members: 61, emoji: "🙏" },
];

type Post = { id: string; author: string; avatar: string; content: string; likes: number; comments: number; createdAt: string; type: string };

const TYPE_BADGE: Record<string, string> = {
  testimony: "bg-orange-100 text-orange-700",
  encouragement: "bg-blue-100 text-blue-700",
  verse: "bg-green-100 text-green-700",
};

export function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [newPost, setNewPost] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [reported, setReported] = useState<Set<string>>(new Set());
  const [tab, setTab] = useState<"feed" | "groups">("feed");

  function toggleLike(id: string) {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setPosts((ps) => ps.map((p) => p.id === id ? { ...p, likes: p.likes - 1 } : p));
      } else {
        next.add(id);
        setPosts((ps) => ps.map((p) => p.id === id ? { ...p, likes: p.likes + 1 } : p));
      }
      return next;
    });
  }

  function submitPost() {
    if (!newPost.trim()) return;
    setPosts((prev) => [{
      id: `po${Date.now()}`,
      author: "You",
      avatar: "ME",
      content: newPost.trim(),
      likes: 0,
      comments: 0,
      createdAt: "Just now",
      type: "encouragement",
    }, ...prev]);
    setNewPost("");
    setShowForm(false);
  }

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl text-navy">Community</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Connect, share and encourage one another</p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "Share"}
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-gold/30 bg-background p-5 mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share a testimony, verse or encouragement..."
            rows={3}
            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <div className="flex justify-end mt-3">
            <button onClick={submitPost} className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-white hover:bg-navy/90 transition-colors">
              Post
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-1 rounded-xl bg-cream p-1 mb-6">
        {(["feed", "groups"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-lg py-2 text-sm font-medium capitalize transition-all ${tab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`}
          >
            {t === "groups" ? "Groups & Ministries" : "Community Feed"}
          </button>
        ))}
      </div>

      {tab === "feed" ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="rounded-2xl bg-background border border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${TYPE_BADGE[post.type] ?? "bg-muted text-muted-foreground"}`}>
                    {post.type}
                  </span>
                  {!reported.has(post.id) ? (
                    <button
                      onClick={() => setReported((prev) => new Set([...prev, post.id]))}
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                      title="Report"
                    >
                      <Flag className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <span className="text-xs text-muted-foreground">Reported</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 text-sm transition-colors ${liked.has(post.id) ? "text-red-500" : "text-muted-foreground hover:text-red-400"}`}
                >
                  <Heart className={`h-4 w-4 ${liked.has(post.id) ? "fill-current" : ""}`} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {GROUPS.map((group) => (
            <div key={group.name} className="rounded-2xl bg-background border border-border p-4 flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-2xl shadow-gold">
                {group.emoji}
              </div>
              <div className="flex-1">
                <p className="font-medium text-navy">{group.name}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <Users className="h-3 w-3" /> {group.members} members
                </p>
              </div>
              <button className="rounded-full border border-navy px-4 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors">
                Join
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
