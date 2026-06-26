import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookOpen, GraduationCap, Award, PlayCircle, FileText, Users, Mic2, Cross, Scale, ShieldCheck, CheckCircle2, Clock, BookMarked, Church, DollarSign, Globe, UserCheck, AlertTriangle, Mail, MapPin, ClipboardList, Laptop } from "lucide-react";

export const Route = createFileRoute("/bible-academy")({
  head: () => ({
    meta: [
      { title: "St. Cyprian School of Theology — ECSGS" },
      { name: "description", content: "The Saint Cyprian School of Theology provides educational formation for diaconal candidates and lay leaders in ECSGS and affiliated communities." },
      { property: "og:title", content: "St. Cyprian School of Theology" },
      { property: "og:description", content: "Diaconal formation, theological education, and open courses for lay leaders." },
    ],
  }),
  component: AcademyPage,
});

const FREE_RESOURCES = [
  { icon: BookOpen, title: "Weekly Course Handouts", text: "All weekly handouts are available to every participant — those attending in person and those joining by Zoom." },
  { icon: FileText, title: "Lay Auditing — No Cost", text: "Committed lay leaders and local parishioners may audit, attend, and participate in many course offerings without cost." },
  { icon: PlayCircle, title: "Recorded Sessions", text: "All classes are videotaped and made available for subsequent students and those who could not attend live." },
];

const SGS_COURSES = [
  {
    code: "SGS 1",
    title: "Introduction to Theology",
    desc: "How theology evolved over time from scripture, tradition, and church formation across historical, political and cultural eras with Catholic distinctives.",
    tag: "Core",
  },
  {
    code: "SGS 2",
    title: "New Testament in the Order Written",
    desc: "Hebrew, Roman, and Greek influences on the developing Jesus movement. How the NT writings unfolded, their interrelationships with one another, and how the canon was established.",
    tag: "Scripture",
  },
  {
    code: "SGS 3",
    title: "Hebrew Testament in the Order Written",
    desc: "The story of the Israelites\u2019 path to the One God, establishing their identity as a Covenant people. We explore the Torah, prophets, and writings, key figures and historical settings out of which our system of law and ethics arose and Christianity emerged.",
    tag: "Scripture",
  },
  {
    code: "SGS 4",
    title: "History of the Church",
    desc: "An overview from the Church\u2019s earliest beginnings, through its historic schism with the Byzantine Church, the Protestant Reformation, to modern day. This is a self-study unit with video lectures and text.",
    tag: "History",
  },
  {
    code: "SGS 5",
    title: "Independent Catholicism",
    desc: "From political and theological developments in the Roman Catholic Church, the Old Catholic movement in Europe emerged, which led to the American independent movement, up to and including our recent ECC roots.",
    tag: "History",
  },
  {
    code: "SGS 6",
    title: "Sacraments Yesterday, Today, and Tomorrow",
    desc: "Sacramental development as seen through scripture and tradition, pointing to our stance on openness and inclusivity for all seekers. Sacraments administered by Deacons will be highlighted and practical hands-on training included. Weekend format.",
    tag: "Sacraments",
  },
  {
    code: "SGS 7",
    title: "Liturgical Cycle and Altar Training Practicum",
    desc: "A hands-on course to become familiar with the Deacon\u2019s role and responsibilities before, during, and after the Mass. Each applicant will serve as altar server and/or lector for one year in their local parish as a prerequisite. Weekend format.",
    tag: "Practicum",
  },
  {
    code: "SGS 8",
    title: "Diaconate Project",
    desc: "Each candidate will develop an educational seminar or retreat suitable for children, adolescents, adults or families focusing on a liturgical season, theological issue, social justice project, or life of a saint to be presented as their contribution to their local church.",
    tag: "Project",
  },
  {
    code: "SGS 9",
    title: "Homiletics",
    desc: "Instruction from several clergy regarding their approaches to preparing homilies. Each student will prepare one short homily to be presented to teaching staff for feedback. Weekend format.",
    tag: "Ministry",
  },
  {
    code: "SGS 10",
    title: "Ethical and Legal Issues for Pastoral Staff",
    desc: "Personal, pastoral, parish, diocesan and community considerations in relation to ethics and secular laws. Each student will serve on their local church parish council or another designated parish ministry for one year during training.",
    tag: "Ethics",
  },
  {
    code: "SGS 11",
    title: "Pastoral Theology and Urgent Care in the Local Parish",
    desc: "Common issues where clergy accompany people through major life hurdles and crises, and basic counseling skills.",
    tag: "Pastoral",
  },
];

const SGS_ELECTIVES = [
  "The Minor Prophets",
  "The NT Epistles in Order in Which They were Written",
  "Book of Ruth: A Model of Commitment",
  "Mary Magdalene, the First Apostle: The Struggle for Authority",
  "Luther: Gospel, Law and Reformation",
  "History of Christianity in the Reformation Era",
  "Junia: The only female apostle documented in the NT",
  "The Wisdom Books",
];

function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Diaconal Study Program"
            title="Saint Cyprian School of Theology"
            subtitle="A developing program serving ECSGS and affiliated sister communities — providing formation for diaconal candidates and open learning for all committed lay leaders."
            center
            light
          />
          <p className="mt-4 text-white/50 text-xs tracking-widest uppercase">Under the Episcopal Oversight of</p>
          <p className="mt-1 text-white/80 text-sm font-serif">Most Reverend Arturo Querijero Ferreras</p>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <SectionHeading eyebrow="About the School" title="What is the Saint Cyprian School of Theology?" />
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We are a small and still developing program which currently serves two purposes: providing <strong className="text-navy">educational formation for candidates for ordination as permanent deacons</strong> in ECSGS or in our affiliated sister communities.
              </p>
              <p>
                Additionally, <strong className="text-navy">committed lay leaders and local parishioners</strong> may audit, attend and participate in many of our course offerings without cost.
              </p>
              <p>
                Courses are offered in a hybrid format — approximately half our participants attend in person at House of Ruth and Junia, while the other half join by Zoom. With a large screen, we gather in a circle with both groups present, enabling rich, lively discussion.
              </p>
              <p>
                We share a dinner together at House of Ruth and Junia prior to each class. St. Cyprian students have assignments; others simply enjoy the experience and the conversation.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-navy text-white p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold shadow-gold">
                <Cross className="h-5 w-5 text-navy" strokeWidth={2.5} />
              </span>
              <p className="font-serif text-xl">Quick Facts</p>
            </div>
            {[
              { label: "Program Type", value: "Diaconal Formation + Open Lay Auditing" },
              { label: "Format", value: "In-Person & Zoom (Hybrid)" },
              { label: "Location", value: "House of Ruth and Junia" },
              { label: "Pre-Class", value: "Shared dinner before each session" },
              { label: "Courses Launched", value: "5 courses to date" },
              { label: "Cost for Lay Auditors", value: "Free" },
              { label: "Oversight", value: "Bishop Arturo Querijero Ferreras / ECSGS" },
            ].map(({ label, value }) => (
              <div key={label} className="border-t border-white/10 pt-3 flex justify-between text-sm">
                <span className="text-white/60">{label}</span>
                <span className="text-white font-medium text-right max-w-[55%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dean's Word */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="A Word from the Dean…" title="Rev. Mo. Martha — Dean, St. Cyprian School of Theology" center />
          <div className="mt-12 rounded-3xl bg-background border border-border p-8 md:p-12 shadow-elegant">
            <div className="flex items-start gap-4 mb-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold text-navy font-bold text-lg font-serif">M</span>
              <div>
                <p className="font-semibold text-navy">Rev. Mo. Martha</p>
                <p className="text-xs text-gold tracking-widest uppercase mt-0.5">Dean · Priest since 2006 · PhD Clinical Psychology</p>
              </div>
            </div>

            {/* Dean's Word quotes */}
            <div className="space-y-5 text-muted-foreground leading-relaxed font-serif italic text-lg">
              <p>"We are excited to participate in this new educational formation adventure! For the past year and a half, we have launched and taught five courses. Our St. Cyprian students have attended as have other members in the Saint Matthew community."</p>
              <p>"About half of our participants come to the class 'live' — we share a dinner at House of Ruth and Junia prior to class — and the other half join us by Zoom. With a big screen, we are able to gather in a circle with both the attendees physically present and those coming in by Zoom. And we have some very interesting discussions that bring our studies to life!"</p>
              <p>"St. Cyprian students have assignments but others just enjoy the experience. Weekly course handouts are available to all, those who come and those online. All classes are videotaped in order to be available to subsequent students."</p>
            </div>

            {/* Background */}
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-5">People may be curious about my background…</p>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>I have been a priest since 2006, at which time I established <strong className="text-navy">St. Junia's House in Anaheim</strong>. In 2012, our Belgian sister community, <strong className="text-navy">House of Ruth</strong>, was established by Rev. Mo. Jetty. In 2022, we renamed St. Junia's House to join up with House of Ruth. We are now <strong className="text-navy">House of Ruth and Junia</strong>, a specialized ministry under episcopal oversight of Bishop Arturo and ECSGS.</p>
                <p>If you are not familiar with these two biblical characters: <strong className="text-navy">Junia</strong> is the only named female apostle in the New Testament — see Romans 16:7. <strong className="text-navy">Ruth's</strong> story is found in the Hebrew Bible in the Book of Ruth — how she, an outsider, "immigrated" into a Hebrew family and became a foremother of Jesus.</p>
                <p>Rev. Mo. Martha holds a <strong className="text-navy">PhD in Clinical Psychology</strong>, in addition to completing two post-doctoral training programs in forensic psychology and certification in neuropsychology. She has a private corporation and still has a "day job," continuing to work as a forensic neuropsychologist in the court systems in southern California.</p>
                <p>Typical of most independent catholic women clergy, she did not attend a divinity program or earn a divinity degree. Hers was a later-life calling to the priesthood. She acquired her expertise over many years of research and systematic self-study, and taking advantage of various seminars and educational opportunities. She is currently the developer and author of all St. Cyprian courses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Open to All" title="Resources available without cost" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FREE_RESOURCES.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border p-8 bg-card">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="SGS Course Catalog" title="Course catalog & descriptions" subtitle="Each course includes approximately 15 hours of direct class instruction, supplemented by assigned readings, written work, and practical formation activities. Each course equals one quarter credit equivalent (QCE) for internal program purposes." center />

          {/* Required Courses */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {SGS_COURSES.map((c) => (
              <article key={c.code} className="rounded-2xl border border-border bg-background p-7 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold">{c.code}</span>
                  <span className="rounded-full border border-border bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">{c.tag}</span>
                </div>
                <h3 className="font-serif text-xl text-navy leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>

          {/* Electives */}
          <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-gold" />
              <div>
                <p className="font-semibold text-navy">SGS 12–13: Two Required Elective Courses or Independent Studies</p>
                <p className="text-xs text-muted-foreground mt-0.5">Courses currently available (TBA for future additions):</p>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {SGS_ELECTIVES.map((e, i) => (
                <li key={e} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-gold font-semibold shrink-0">{String.fromCharCode(97 + i)})</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform"
            >
              Inquire About Enrollment
            </Link>
          </div>
        </div>
      </section>

      {/* Diaconal Program */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Diaconal Study Program" title="Formation for Permanent Deacons" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Mic2, title: "Who Is It For?", text: "Candidates for ordination as permanent deacons in ECSGS or our affiliated sister communities. Lay leaders may also audit courses without cost." },
              { icon: Users, title: "How Does It Work?", text: "Students attend in-person or by Zoom. We share dinner before each class, then gather for teaching and discussion. All sessions are recorded for future students." },
              { icon: GraduationCap, title: "Under Episcopal Oversight", text: "The entire program operates under the Episcopal Oversight of Most Reverend Arturo Querijero Ferreras and ECSGS." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-6 w-6 text-navy" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Episcopal Oversight & Legal Status */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Episcopal Oversight & Legal Status" title="History and Governance of Saint Cyprian" center />
          <div className="mt-12 rounded-3xl bg-background border border-border p-8 md:p-12 shadow-elegant space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold mt-0.5">
                <Church className="h-5 w-5 text-navy" />
              </span>
              <div>
                <p className="font-semibold text-navy mb-2">Origins under Bishop Peter Hickman</p>
                <p>Saint Cyprian was first developed under <strong className="text-navy">Bishop Peter Hickman</strong> of the Saint Matthew Ecumenical Catholic Church. Its founding Dean was the late <strong className="text-navy">Reverend Doctor Diane Smith</strong>. After her passing, the school did not operate for a period of time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold mt-0.5">
                <ShieldCheck className="h-5 w-5 text-navy" />
              </span>
              <div>
                <p className="font-semibold text-navy mb-2">Reestablished under ECSGS in 2025</p>
                <p>With the consecration of <strong className="text-navy">Bishop Arturo</strong> and the formation of the ECSGS, he appointed a new Dean — <strong className="text-navy">Reverend Mother Martha Rogers</strong> — in 2025, reestablishing the school under the oversight of ECSGS.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold mt-0.5">
                <Scale className="h-5 w-5 text-navy" />
              </span>
              <div>
                <p className="font-semibold text-navy mb-2">Legal Status — California Education Code §94874(e)</p>
                <p>Applicable law regulating the operation of St. Cyprian is based upon laws for <strong className="text-navy">religious institutions (§94874(e))</strong> which are owned, controlled, operated, and maintained by a religious organization. St. Cyprian is owned, controlled, and operated by the ECSGS — a nonprofit religious corporation — and primarily provides religious education pursuant to Part 4 (commencing with Section 9110) of Division 2 of Title 1 of the Corporations Code.</p>
                <ul className="mt-3 space-y-2 list-none">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>(A) Instruction is limited to the principles of its parent religious organization, and courses offered pursuant to Section 2789 of the Business and Professions Code.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>(B) Certification achieved by students is limited to evidence of completion of its educational program.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Status */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Accreditation Status" title="Non-Degree-Granting Institution" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-8">
              <BookMarked className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy">California Education Code §94874(f)(1)</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">St. Cyprian School of Theology is a <strong className="text-navy">Non-Degree-Granting Institution</strong>. We do not award academic or professional degrees. We provide only non-degree, skills-based programs focused on preparing candidates for ordination as permanent deacons in the ECSGS jurisdiction.</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-8">
              <Award className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy">Credits & Transferability</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Credits are <strong className="text-navy">not recognized and not transferable</strong> to colleges or universities. Other independent catholic jurisdictions may recognize our program and permit their diaconate candidates to enroll at Saint Cyprian.</p>
            </article>
          </div>
          <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-navy mb-2">Qualifying for Exemption</p>
            <p>Applicable law is based upon religious institutions (§94874(e)) which are owned, controlled, operated, and maintained by a religious organization that may lawfully operate under a nonprofit religious corporation and primarily provide religious education, qualifying for exemption.</p>
          </div>
        </div>
      </section>

      {/* Program Requirements */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Program Requirements" title="What to expect as a SCST student" center />
          <div className="mt-12 space-y-4">
            {[
              {
                icon: BookOpen,
                title: "Hybrid Learning Format",
                text: "The SCST program is a combination of in-person classes, Zoom sessions, and self-paced study with materials available online. A student must have the ability to fully participate while managing their other personal responsibilities.",
              },
              {
                icon: Clock,
                title: "Two to Three Year Program",
                text: "The program will take two to three years for the average student who is employed aside from participating in our courses.",
              },
              {
                icon: Church,
                title: "Parish Service Requirement",
                text: "The program requires serving as altar server, lector, and on the local parish council for one year.",
              },
              {
                icon: Users,
                title: "Bishop Recommendation",
                text: "Students are recommended by their local bishop and committed to serve as deacons in their local ECSGS parish.",
              },
              {
                icon: Mic2,
                title: "Diaconal Work",
                text: "Work of deacons includes leadership on the pastoral team, teaching, and designated parish ministries.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{title}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform"
            >
              Apply or Inquire About Enrollment
            </Link>
          </div>
        </div>
      </section>

      {/* Ordination Requirements */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Ordination in the ECSGS" title="Completion does not guarantee ordination" center />
          <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/5 p-8 md:p-12">
            <div className="flex gap-4 mb-6">
              <AlertTriangle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Successful completion of the educational program provided by St. Cyprian does <strong className="text-navy">not automatically guarantee or lead to ordination</strong>. Ordination also requires:
              </p>
            </div>
            <ul className="space-y-3 ml-10">
              {[
                { icon: UserCheck, text: "Criminal background check (at student's own cost)" },
                { icon: UserCheck, text: "Psychological evaluation (at student's own cost)" },
                { icon: UserCheck, text: "Appropriate references" },
                { icon: UserCheck, text: "Additional on-site training and experience" },
                { icon: UserCheck, text: "Final approval by the bishop of the student's jurisdiction" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="St. Cyprian Staff" title="Our faculty & administration" center />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { initials: "MR", name: "Rev. Martha Rogers, PhD", role: "Academic Dean & Instructor" },
              { initials: "MD", name: "Mariah Doyle-Sandoval, M.Ed.", role: "Assistant to Dean in Administration" },
              { initials: "FB", name: "Fr. Bhaskar", role: "Assistant to the Dean in Instruction" },
              { initials: "JV", name: "Rev. Jetty Van Den Berghe", role: "Assistant to Dean in Media Management & Instruction" },
              { initials: "TR", name: "Fr. Tony Russo", role: "Instructor & Mentor" },
              { initials: "BA", name: "Bp. Arturo Querijero Ferreras", role: "Overseer — Episcopal Oversight" },
            ].map(({ initials, name, role }) => (
              <div key={name} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold text-navy font-bold font-serif">{initials}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{name}</p>
                  <p className="text-xs text-gold tracking-wide mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Program Costs" title="Tuition & fees" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-8 text-center">
              <DollarSign className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">$1,600</p>
              <p className="mt-2 text-sm font-semibold text-navy">Total Program</p>
              <p className="mt-2 text-xs text-muted-foreground">Includes tuition ($1,500) + non-refundable application fee ($100). May be paid in full or in agreed-upon installments.</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-8 text-center">
              <DollarSign className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">$125</p>
              <p className="mt-2 text-sm font-semibold text-navy">Per Course</p>
              <p className="mt-2 text-xs text-muted-foreground">For those enrolling in specific individual courses rather than the full program.</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-8 text-center">
              <DollarSign className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">$2,500</p>
              <p className="mt-2 text-sm font-semibold text-navy">Statutory Threshold</p>
              <p className="mt-2 text-xs text-muted-foreground">Total program charges will never exceed the $2,500 statutory threshold for exemption per California Education Code §94874(f).</p>
            </article>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-navy">Payment:</strong> No institutional loans provided per California Education Code §94911(k) and §94874(f). No interest-bearing debt or loan obligations. We do not accept or administer any state or federal financial aid (including FAFSA, Title IV, or California-based grant or loan programs). All payments are made directly by students or through non-governmental sponsors.</p>
            <p><strong className="text-navy">Refund Policy:</strong> Full refund, minus the non-refundable application fee ($100), if enrollment is canceled on or before the first day of instruction or within 3 calendar days. A pro-rata refund is issued for withdrawals after the start of instruction, consistent with §94919–§94920.</p>
          </div>
        </div>
      </section>

      {/* Mission Scope */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Mission Scope" title="Who we serve & how we operate" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Who We Currently Train",
                text: "We currently train permanent deacons. In the foreseeable future, we may add an option for transitional deacons and candidates for the priesthood.",
              },
              {
                icon: Globe,
                title: "International Students",
                text: "While our courses are available to persons in other states or countries who are preparing for ordination in ECSGS or one of our sister communities, we are not currently certified under SEVP and do not issue I-20 visas. We do not issue Religious Worker visas, which must be sponsored by the student's bishop.",
              },
              {
                icon: BookOpen,
                title: "Language of Instruction",
                text: "Our program is taught in the English language with some accommodations available for those for whom English is their second language.",
              },
              {
                icon: Church,
                title: "Sister Community Enrollment",
                text: "Other independent catholic jurisdictions may recognize our program and permit their diaconate candidates to enroll at Saint Cyprian School of Theology.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{title}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Faculty */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Saint Cyprian Board & Faculty" title="Governance & academic leadership" center />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { initials: "MR", name: "Rev. Martha Rogers, PhD", role: "Academic Dean & Instructor" },
              { initials: "MD", name: "Mariah Doyle-Sandoval, M.Ed.", role: "Assistant to Dean in Administration" },
              { initials: "JV", name: "Rev. Jetty Van Den Berghe", role: "Assistant to Dean in Media Management & Instruction" },
              { initials: "TR", name: "Fr. Tony Russo", role: "SGS Board Member & Instructor" },
              { initials: "BA", name: "Bp. Arturo Querijero Ferreras", role: "Overseer — Episcopal Oversight" },
            ].map(({ initials, name, role }) => (
              <div key={name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold text-navy font-bold font-serif">{initials}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{name}</p>
                  <p className="text-xs text-gold tracking-wide mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform"
            >
              Contact Us or Apply
            </Link>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Courses" title="Course structure & credit equivalency" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-background p-8 text-center">
              <Clock className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">15</p>
              <p className="mt-2 text-sm font-semibold text-navy">Hours of Direct Instruction</p>
              <p className="mt-2 text-xs text-muted-foreground">Each course includes approximately 15 hours of direct class instruction per quarter.</p>
            </article>
            <article className="rounded-2xl border border-border bg-background p-8 text-center">
              <BookOpen className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">+</p>
              <p className="mt-2 text-sm font-semibold text-navy">Supplemental Work</p>
              <p className="mt-2 text-xs text-muted-foreground">Assigned readings, written work, and practical formation activities supplement each course.</p>
            </article>
            <article className="rounded-2xl border border-border bg-background p-8 text-center">
              <Award className="h-8 w-8 text-gold mx-auto" />
              <p className="mt-4 font-serif text-4xl text-navy">1 QCE</p>
              <p className="mt-2 text-sm font-semibold text-navy">Quarter Credit Equivalent</p>
              <p className="mt-2 text-xs text-muted-foreground">For internal program purposes, each course is equivalent to one quarter credit equivalent unless otherwise specified. See course catalog for details.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Contact Information" title="Get in touch or apply" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Mail className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm">Email</p>
                  <a href="mailto:mariahadmin@ecsgs-stcyprian.com" className="mt-1 text-sm text-gold hover:underline break-all">
                    mariahadmin@ecsgs-stcyprian.com
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">For more information and application procedures</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <MapPin className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm">Physical Mailing Address</p>
                  <address className="mt-1 text-sm text-muted-foreground not-italic leading-relaxed">
                    Servants of the Good Shepherd<br />
                    Saint Cyprian School of Theology<br />
                    500 E Imperial Hwy.<br />
                    Brea, CA 92821 USA
                  </address>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-navy text-white p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Ready to apply?</p>
                <h3 className="mt-3 font-serif text-2xl">Start your formation journey</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">Contact our administration team to receive application materials, learn about enrollment timelines, and get answers to your questions about the diaconal formation program.</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:mariahadmin@ecsgs-stcyprian.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"
                >
                  <Mail className="h-4 w-4" /> Email Administration
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Application Requirements" title="Requirements for deacon candidates" center />
          <div className="mt-12 space-y-3">
            {[
              { n: "1", text: "Hold citizenship or recognized legal status within their state or country of residence and the ECSGS church location of service." },
              { n: "2", text: "Complete a criminal background check or, outside of the U.S., a valid passport is required." },
              { n: "3", text: "Be mentally and physically able to perform all duties as required." },
              { n: "4", text: "Complete an evaluation by a SGS-designated psychologist." },
              { n: "5", text: "Have stable employment and financial self-support." },
              { n: "6", text: "Possess a high school diploma or equivalent with adequate academic skills to undertake college-level academic work." },
              { n: "7", text: "Be fluent in the English language — with some programming accommodations for those whose first language is not English." },
              { n: "8", text: "Be competent in computer usage: writing word documents, email, uploading and downloading documents, Zoom meetings." },
              { n: "9", text: "Be in good standing in a Catholic Church for not less than three years, including active participation in local parish ministries." },
              { n: "10", text: "If married, be in a valid Catholic marriage, or a marriage blessed by a Catholic Church." },
              { n: "11", text: "The application must be approved and signed by their pastor and local bishop, as well as their spouse." },
            ].map(({ n, text }) => (
              <div key={n} className="flex gap-4 rounded-2xl border border-border bg-background p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold text-navy font-bold text-sm font-serif">{n}</span>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="mailto:mariahadmin@ecsgs-stcyprian.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform"
            >
              <Mail className="h-4 w-4" /> Request Application Materials
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
