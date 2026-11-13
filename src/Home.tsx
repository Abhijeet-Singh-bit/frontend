
import { useState } from "react";
import { motion } from "motion/react";
import HomeNavbar from "../src/components/Homenavbar";

import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  HandHeart,
  Package,
  Stethoscope,
  Accessibility,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Globe,
  Users,
  ShieldCheck,
  Plus,
  Leaf,
  MoveRight,
} from "lucide-react";

// Reusable animation settings
const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const categories = [
  {
    title: "Healthcare",
    description: "Things that support better care and wellbeing.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    number: "01",
  },
  {
    title: "Equipment",
    description: "Useful tools and equipment ready for another purpose.",
    icon: Accessibility,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85",
    number: "02",
  },
  {
    title: "Education",
    description: "Resources that can open doors to new opportunities.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=85",
    number: "03",
  },
  {
    title: "Daily Essentials",
    description: "Everyday necessities that can make a difference.",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=85",
    number: "04",
  },
];

const steps = [
  {
    number: "01",
    title: "Share what you can",
    description:
      "Have something useful that you no longer need? Give it an opportunity to help someone else.",
    icon: HandHeart,
  },
  {
    number: "02",
    title: "Find what matters",
    description:
      "Explore available resources and discover things that could make a difference in your life.",
    icon: Package,
  },
  {
    number: "03",
    title: "Connect & make it count",
    description:
      "Connect with the community and help useful things reach the right hands.",
    icon: Heart,
  },
];

export default function Home() {
  const [activeForm, setActiveForm] = useState("offer");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#F8F8F2] text-[#183B32]">

      <HomeNavbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pb-24 pt-20 md:pb-32 md:pt-28">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-[#DCEBDA] opacity-60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.16 },
              },
            }}
          >

            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B8CDBA] bg-white px-4 py-2 text-sm font-medium text-[#426B53]">
                <Sparkles size={15} />
                Small acts. Meaningful impact.
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-8 text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-[76px]"
            >
              A little extra
              <br />
              can mean
              <span className="relative ml-3 inline-block font-serif italic text-[#668D68]">
                a lot.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-[#D6A66B]"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-xl text-lg leading-9 text-[#728079]"
            >
              Sometimes what we no longer need can become
              exactly what someone else has been looking for.
              Let's make every useful thing count.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap gap-4"
            >

              <motion.a
                href="#get-started"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 rounded-full bg-[#214D3D] px-8 py-4 font-semibold text-white shadow-lg shadow-green-900/15 transition hover:bg-[#31634E]"
              >
                Be a part of it
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#our-purpose"
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 rounded-full border border-[#C7D4C9] px-8 py-4 font-semibold transition hover:bg-white"
              >
                Discover more
                <ArrowUpRight size={18} />
              </motion.a>

            </motion.div>

            {/* Small social proof */}
            <motion.div
              variants={reveal}
              className="mt-14 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1531123897727-8f129e1688ce",
                ].map((photo, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                    alt="Community member"
                    className="h-10 w-10 rounded-full border-[3px] border-[#F8F8F2] object-cover"
                  />
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Together, we can do more.
                </p>
                <p className="text-xs text-[#87958D]">
                  A community built around kindness
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero Images */}
          <div className="relative mx-auto h-[500px] w-full max-w-[520px]">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-4 h-[390px] w-[75%] overflow-hidden rounded-[150px_150px_25px_25px] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=90"
                alt="Healthcare and community support"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/40 to-transparent" />
            </motion.div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -60, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-3 left-0 h-[220px] w-[54%] overflow-hidden rounded-3xl border-[7px] border-[#F8F8F2] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=700&q=85"
                alt="People helping their community"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating message card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-2 top-16 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#E6F0E4] p-3 text-[#4B7955]">
                  <Heart size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold">Pass it forward</p>
                  <p className="text-xs text-gray-500">
                    Give things new meaning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating bottom badge */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-1 bottom-0 rounded-2xl bg-[#E9EFE2] p-5 shadow-lg sm:-right-5"
            >
              <Leaf className="mb-2 text-[#5D855F]" size={27} />
              <p className="text-sm font-bold">Give it another life.</p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* PURPOSE SECTION */}
      <section
        id="our-purpose"
        className="relative bg-[#214D3D] px-6 py-28 text-white"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B8D4B8]">
            A different way of thinking
          </span>

          <h2 className="mt-8 text-4xl font-medium leading-tight sm:text-6xl">
            What is extra for one
            <span className="font-serif italic text-[#C9DDB8]">
              {" "}can be essential for another.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#D1DFD3]">
            We believe useful things deserve more than one
            chapter. A little generosity, a little connection,
            and a whole lot of possibility.
          </p>

          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto mt-10 w-fit rounded-full border border-white/20 p-5"
          >
            <HandHeart size={36} className="text-[#D3E4C5]" />
          </motion.div>

        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#739477]">
                What can find a new purpose?
              </p>

              <h2 className="text-4xl font-semibold sm:text-5xl">
                Good things deserve
                <br />
                <span className="font-serif italic text-[#739477]">
                  another chance.
                </span>
              </h2>
            </div>

            <p className="max-w-sm leading-8 text-[#849088]">
              Explore different kinds of resources and
              possibilities that bring people together.
            </p>

          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.12 }}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-3xl border border-[#E4E8DF] bg-white shadow-sm transition-shadow hover:shadow-xl"
                >

                  <div className="relative h-56 overflow-hidden">

                    <motion.img
                      src={category.image}
                      alt={category.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#315B43]">
                      {category.number}
                    </span>

                    <div className="absolute bottom-4 right-4 rounded-xl bg-white p-3 text-[#3F7551] shadow">
                      <Icon size={22} />
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-3 min-h-[52px] text-sm leading-7 text-[#87938B]">
                      {category.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#EDF0EA] pt-4 text-sm font-semibold text-[#4D7758]">
                      Explore possibilities
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#EDF2E9] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mx-auto mb-16 max-w-2xl text-center"
          >

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#739477]">
              Simple by nature
            </p>

            <h2 className="text-4xl font-semibold sm:text-5xl">
              Three steps.
              <span className="font-serif italic text-[#739477]">
                {" "}One meaningful impact.
              </span>
            </h2>

          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.18,
                  }}
                  className="relative rounded-3xl border border-[#DAE5D7] bg-white p-9"
                >

                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-light text-[#D4E2D1]">
                      {step.number}
                    </span>

                    <div className="rounded-2xl bg-[#EAF2E7] p-4 text-[#54805D]">
                      <Icon size={28} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#849088]">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* IMAGE STORY SECTION */}
      <section className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <div className="h-[480px] overflow-hidden rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=90"
                alt="Community members supporting one another"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-3 max-w-[260px] rounded-3xl bg-[#214D3D] p-7 text-white shadow-2xl sm:-right-8"
            >
              <Heart size={27} className="mb-4 text-[#C8DDBD]" />

              <p className="font-serif text-2xl italic">
                "Kindness becomes powerful when it is shared."
              </p>

            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#739477]">
              More than just things
            </p>

            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Behind every useful thing,
              <span className="font-serif italic text-[#739477]">
                {" "}there is a story.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#849088]">
              A piece of equipment, a book, a medical essential
              or something as simple as a daily necessity.
              What matters is not how much it costs, but how
              much good it can still do.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Make better use of available resources",
                "Build meaningful community connections",
                "Create opportunities through sharing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-[#6D966F]"
                  />
                  <span className="font-medium text-[#456052]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <motion.a
              href="#get-started"
              whileHover={{ x: 6 }}
              className="mt-10 inline-flex items-center gap-3 font-bold text-[#3D7250]"
            >
              Be part of something good
              <MoveRight size={20} />
            </motion.a>

          </motion.div>

        </div>
      </section>

      {/* GET STARTED / FORM SECTION */}
      <section
        id="get-started"
        className="relative overflow-hidden bg-[#214D3D] px-6 py-28 text-white"
      >

        <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#668C65]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Form introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#D6E7D0]">
              <Sparkles size={15} />
              Your next step starts here
            </span>

            <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
              Every good thing
              <br />
              starts with
              <span className="font-serif italic text-[#C5DBB6]">
                {" "}a connection.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-9 text-[#CFDED1]">
              Whether you have something to share or are
              looking for something important, there's a
              place for you here.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <ShieldCheck size={24} className="text-[#C5DBB6]" />
                </div>

                <div>
                  <p className="font-semibold">Built around trust</p>
                  <p className="text-sm text-[#B6CDBB]">
                    Thoughtful connections and responsible sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Users size={24} className="text-[#C5DBB6]" />
                </div>

                <div>
                  <p className="font-semibold">Powered by people</p>
                  <p className="text-sm text-[#B6CDBB]">
                    A community where everyone can contribute.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[30px] bg-[#F9FAF5] p-6 text-[#214D3D] shadow-2xl sm:p-10"
          >

            <div className="mb-8">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7D9880]">
                Get involved
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                How would you like to begin?
              </h3>

            </div>

            {/* Form Toggle */}
            <div className="mb-8 grid grid-cols-2 gap-3 rounded-2xl bg-[#EAF0E7] p-2">

              <button
                type="button"
                onClick={() => {
                  setActiveForm("offer");
                  setSubmitted(false);
                }}
                className={`rounded-xl px-3 py-4 text-sm font-semibold transition-all ${
                  activeForm === "offer"
                    ? "bg-[#214D3D] text-white shadow-md"
                    : "text-[#607767] hover:bg-white/60"
                }`}
              >
                <HandHeart className="mx-auto mb-2" size={21} />
                I have something
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveForm("need");
                  setSubmitted(false);
                }}
                className={`rounded-xl px-3 py-4 text-sm font-semibold transition-all ${
                  activeForm === "need"
                    ? "bg-[#214D3D] text-white shadow-md"
                    : "text-[#607767] hover:bg-white/60"
                }`}
              >
                <Heart className="mx-auto mb-2" size={21} />
                I'm looking for something
              </button>

            </div>

            {submitted ? (

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <CheckCircle2
                  size={55}
                  className="mx-auto text-[#5F9866]"
                />

                <h3 className="mt-5 text-2xl font-bold">
                  Thank you!
                </h3>

                <p className="mt-3 text-[#7D8D80]">
                  Your form demonstration is complete.
                  Connect this form to your backend to receive submissions.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 font-semibold text-[#42724D] underline"
                >
                  Submit another response
                </button>
              </motion.div>

            ) : (

              <motion.form
                key={activeForm}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    {activeForm === "offer"
                      ? "What would you like to share?"
                      : "What are you looking for?"}
                  </label>

                  <input
                    type="text"
                    required
                    placeholder={
                      activeForm === "offer"
                        ? "e.g. Medical equipment, books..."
                        : "e.g. Wheelchair, medicines..."
                    }
                    className="w-full rounded-xl border border-[#DDE5DA] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#5B8764] focus:ring-2 focus:ring-[#5B8764]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Category
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#DDE5DA] bg-white px-4 py-4 text-sm outline-none focus:border-[#5B8764]"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Healthcare</option>
                    <option>Medical Equipment</option>
                    <option>Education</option>
                    <option>Daily Essentials</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Your location
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your city"
                    className="w-full rounded-xl border border-[#DDE5DA] bg-white px-4 py-4 text-sm outline-none focus:border-[#5B8764]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#DDE5DA] bg-white px-4 py-4 text-sm outline-none focus:border-[#5B8764]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#214D3D] py-4 font-semibold text-white transition hover:bg-[#32634D]"
                >
                  {activeForm === "offer"
                    ? "Share Something"
                    : "Find What I Need"}

                  <ArrowRight size={19} />
                </motion.button>

                <p className="text-center text-xs leading-5 text-[#95A197]">
                  By continuing, you agree to connect respectfully
                  and share accurate information.
                </p>

              </motion.form>

            )}

          </motion.div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <div className="mx-auto mb-7 w-fit rounded-full bg-[#E8F0E4] p-5 text-[#648668]">
            <Heart size={32} />
          </div>

          <h2 className="text-4xl font-semibold sm:text-6xl">
            Let's make useful things
            <span className="font-serif italic text-[#739477]">
              {" "}matter again.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#87938B]">
            Sometimes the smallest gesture can create the
            biggest change. Be part of a community that believes
            in sharing more and wasting less.
          </p>

          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#214D3D] px-9 py-4 font-semibold text-white shadow-lg hover:bg-[#32634D]"
          >
            Start making a difference
            <ArrowRight size={19} />
          </motion.a>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4E9DF] bg-[#F0F3EC] px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Ek<span className="font-serif italic text-[#739477]">Zaria.</span>
            </h2>

            <p className="mt-2 text-sm text-[#849088]">
              Making useful things matter again.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-[#607767]">
            <a href="#our-purpose" className="hover:text-[#214D3D]">
              Our Purpose
            </a>
            <a href="#get-started" className="hover:text-[#214D3D]">
              Get Involved
            </a>
            <a href="#projects" className="hover:text-[#214D3D]">
              Explore
            </a>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#DCE4D9] pt-7 text-center text-xs text-[#929D93]">
          © {new Date().getFullYear()} Ek Zaria. Built with care.
        </div>

      </footer>

    </main>
  );
}
