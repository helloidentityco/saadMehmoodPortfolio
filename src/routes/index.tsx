import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { originalMedia, portfolio } from "@/data/original-media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saad Mehmood — Creative Content Producer & Portfolio" },
      {
        name: "description",
        content:
          "Saad Mehmood's original portfolio of creative content, video production, brand campaigns, and visual storytelling.",
      },
      {
        property: "og:title",
        content: "Saad Mehmood — Creative Content Producer & Portfolio",
      },
      {
        property: "og:description",
        content: "Explore Saad Mehmood's creative work, brand campaigns, experience, and content production services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = ["About", "Portfolio", "Services", "Contact"];

const experience = [
  {
    title: " Digital Marketer / Creative Content Producer – Identity",
    date: "2026 - Present",
    points: [
      "Led a team of 8 employees including Developers, Video Editors and Graphic Designers.",
      "Oversaw branded content creation focused on conversions and brand positioning.",
      "Coordinated cross-functional team efforts to ensure efficient content production and timely project delivery.",
      "Collaborated with international clients to execute high-impact campaigns aligned with their business objectives.",
    ],
  },
  {
    title: "Creative Producer / Media Lead – Galaxy Rags",
    date: "2024 - Present",
    points: [
      "Led a team of 4–6 creatives including and photographers.",
      "Oversaw branded content creation with focus on conversions and brand positioning.",
      "Managed cross-functional teams for content production.",
      "Worked closely with international clients to deliver high-impact campaigns.",
    ],
  },
  {
    title: "Creative Producer – Brandock",
    date: "2024 - 2026",
    points: [
      "Led a team of 2–3 creatives including designers and photographers.",
      "Developed content strategy, brand tone, and visual storytelling.",
      "Supervised end-to-end production and final approvals.",
      "Managed client communication and ensured delivery of conversion-focused content.",
    ],
  },

  {
    title: "Creative Producer – Astela Healthcare",
    date: "2024 - 2025",
    points: [
      "Produced healthcare content aligned with brand standards and compliance.",
      "Led post-production and creative direction for campaigns.",
    ],
  },
  {
    title: "Video Editor – International Clients",
    date: "2022 - 2024",
    points: [
      "Edited videos for diverse international clients across social media and long form platforms.",
      "Delivered high-quality content under tight deadlines while maintaining brand consistency.",
    ],
  },
  {
    title: "Assistant Creative Content Producer - Almehraj Marketing (intern) ",
    date: "2022",
    points: [
      "Assisted in content strategy and creative execution for multiple campaigns.",
      "Supported designers and videographers in producing branded content.",
      "Learned end-to-end production processes and post-production workflows.",
      "Contributed to client communications and campaign delivery under supervision.",
    ],
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedImage]);

  return (
    <>
      <header className="site-header" style={{}}>
        <a href="#top" aria-label="Saad Mehmood home">
          <img
            className="brand-image"
            src={originalMedia.logo}
            alt="Saad Mehmood"
            style={{ width: '150px', height: 'auto' }}
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-trigger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="top">
          <picture className="hero-photo">
            <source media="(max-width: 599px)" srcSet={originalMedia.heroMobile} />
            <img
              src={originalMedia.hero}
              alt="Saad Mehmood in a black suit"
              fetchPriority="high"
            />
          </picture>
          <div className="hero-copy">
            <h1>
              &nbsp;
              <br />
              &nbsp;
              <br />
              Digital
              <br />
              Marketer
              <br />
              & Creative
              <br />
              Content
              <br />
              Producer
            </h1>
            <hr />
            <p className="hero-tagline" style={{textAlign: "center"}}>
              Helping Brands Create
              High Impact Visual Campaigns.
            </p>
          </div>
        </section>

        <section className="belief">
          <img src={originalMedia.rug} alt="" className="rug-background" loading="lazy" />
          <div className="content-width">
            <h2 className="section-heading">I Believe Brands</h2>
            <p className="subheading">Designed to Be Seen, Felt, and Remembered</p>
            <div className="profile-grid" >
              {originalMedia.profiles.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={
                    [
                      "Almehraj Marketing Instagram",
                      "NorthKing Pizza Instagram",
                      "Zilver Instagram",
                      "Brandock Instagram",
                      "Galaxy Rags Instagram",
                    ][i]
                  }
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          style={{
            backgroundImage: `url(${originalMedia.about})`,
          }}
        >
          <div
            className="about-grid"
          >
            <div>
              <h1 style={{ color: "oklch(0.88 0.29 137)", textAlign: "center" }}>WHO AM I?</h1>
              <p className="body-copy">
                Digital Marketer, Creative Content Producer &amp; Head of Content with 7+ years of experience leading end to end content
                production for fashion, healthcare, e-commerce, and corporate brands. Expert in content strategy,
                creative direction, video production, and post production supervision. Focused on conversion driven
                branded content, audience retention, and brand consistency. Experienced in managing international
                clients and remote teams while delivering high quality creative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="education">

          <div className="content-width education-grid">
            <div>
              {/* <p className="section-kicker">am i</p> */}
              <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)", textAlign: "center" }}>Am I Educated &amp; Continuously Learning Professional?</h2>
            </div>
            <div className="body-copy education-text">
              <p>
                I completed my Intermediate in Computer Science from Ismail College and my Matriculation in Computer
                Science from Speciss Higher Secondary School, Currenly doing Bachlors in Computer Science building a strong foundation in technology and digital
                creativity.
              </p>
              <p>
                Alongside my academic studies, I have earned Eight Certificates in areas including graphic design,
                filmmaking, and media production. Most of my skills have been developed through hands-on experience and
                continuous self learning, allowing me to grow practically by working on real projects and constantly
                refining my creative and technical abilities.
              </p>
              <p>
                I also plan to continue my education throughout my life, regardless of location, as the creative and
                digital industry constantly evolves with new trends and technologies, and staying updated is an
                essential part of my professional growth.
              </p>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="content-width">
            <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)", textAlign: "center" }}>BRANDS</h2>
            <p className="body-copy">That Selected Me to Represent Their Vision</p>
            <div className="brand-grid">
              {originalMedia.brands.map((src, i) => (
                <img key={src} src={src} alt={`Original client brand ${i + 1}`} loading="lazy" />
              ))}
            </div>
            <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)", textAlign: "center" }}>Celebrities</h2>
            <p className="body-copy">Who Trusted Me for Their Creative Projects</p>
            <div className="celebrity-grid">
              {originalMedia.celebrities.map((src, i) => (
                <img key={src} src={src} alt={`Original celebrity project ${i + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="content-width">
            <div className="experience-header">
              <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)", textAlign: "center" }}>Experience</h2>
              <p className="body-copy" style={{ textAlign: "center" }}>Spanning a broad spectrum of industries.</p>
            </div>
            {experience.map((item) => (
              <article className="experience-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ color: "oklch(0.88 0.29 137)" }}>{item.date}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
            <video
              className="experience-video"
              src={originalMedia.experienceVideo.src}
              poster={originalMedia.experienceVideo.poster}
              controls
              playsInline
              preload="none"
              aria-label="Original experience production video"
            />
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="content-width">
            <div style={{ textAlign: "center" }}>
              <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)" }}>Portfolio</h2>
              <h3 >An infinite scrolling experience</h3>
            </div>
            <div className="portfolio-grid">
              {portfolio.map((item, i) =>
                item.type === "video" ? (
                  <div className="portfolio-item" key={item.id}>
                    <video
                      src={item.src}
                      poster={item.poster}
                      width={item.width}
                      height={item.height}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`Original portfolio video ${i + 1}`}
                      onPlay={(event) => {
                        const current = event.currentTarget;
                        document.querySelectorAll("video").forEach((video) => {
                          if (video !== current) video.pause();
                        });
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    className="portfolio-item portfolio-image-button"
                    variant="ghost"
                    key={item.id}
                    aria-label={`View original portfolio post ${i + 1}`}
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img
                      src={item.src}
                      width={item.width}
                      height={item.height}
                      alt={`Original portfolio post ${i + 1}`}
                      loading="lazy"
                    />
                  </Button>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="content-width services-grid">
            <div>
              <h2 className="section-heading" style={{ color: "oklch(0.88 0.29 137)" }}>Services I Can Confidently Offer:</h2>
            </div>
            <div className="body-copy">
              <p>
                Digital marketing focused on building brand awareness, engaging target audiences, and driving conversions
                through strategic campaigns and creative content. Combining audience insights, platform knowledge, and data-driven
                strategies, I help brands strengthen their online presence,reach potential customers, and achieve measurable
                business growth.
              </p>
              <p>
                Creative content production combined with strategic marketing understanding, allowing brands to not only
                create visually strong content but also achieve meaningful results.
              </p>
              <p>
                With hands-on experience in video production, editing, graphic design, and digital marketing, I bring
                ideas to life through clear storytelling, professional execution, and audience focused creativity.
              </p>
              <p>
                My approach is reliable, collaborative, and results-driven ensuring every project is handled with
                creativity, technical precision, and a strong understanding of brand goals.
              </p>
              <p>
                I am also open to relocation and can move to the country of employment if sponsored by the hiring
                company, allowing me to collaborate and contribute wherever opportunities arise.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="content-width contact-grid">
            {/* Image column — first visually on desktop, on top on mobile */}
            <picture className="contact-bg" aria-hidden="true">
              <source media="(max-width: 600px)" srcSet={originalMedia.contact} />
              <img
                src={originalMedia.contact}
                alt=""
                loading="lazy"
                className="contact-photo"
              />
            </picture>

            {/* Copy column */}
            <div className="contact-copy">
              <h2
                className="section-heading"
                style={{ textAlign: "center", color: "oklch(0.88 0.29 137)" }}
              >
                Let’s Create Something Meaningful Together
              </h2>
              <p className="body-copy mt-6">
                If you’re looking for creative content that combines strong storytelling
                with strategic thinking, I’d love to hear about your project. Whether
                it’s a brand campaign, visual production, or digital content
                collaboration let’s turn your ideas into impactful results.
              </p>
              <p className="contact-name">Saad Mehmood</p>
              <div className="contact-actions">
                <Button asChild style={{ backgroundColor: "oklch(0.88 0.29 137)" }}>
                  <a href="https://wa.me/923104997870" target="_blank" rel="noreferrer">
                    <MessageCircle />
                    WhatsApp: +92 310 4997870
                    <ArrowUpRight />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:saadmehmood.co@gmail.com" className="text-sm">
                    <Mail />
                    Email: saadmehmood.co@gmail.com
                  </a>
                </Button>
              </div>
              <p className="body-copy">
                Start a conversation and let’s build something exceptional.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <span>Saad Mehmood</span>
          <span>© {new Date().getFullYear()} All rights reserved by
            <a href="https://helloidentity.co/">
              <img
                src="/src/assets/Identity-logo.png"
                alt="Identity Logo"
                className="inline-block w-16 h-8 object-contain align-middle"
              />
            </a>
          </span>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Original portfolio post"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="secondary"
            size="icon"
            className="lightbox-close"
            aria-label="Close image"
            autoFocus
            onClick={() => setSelectedImage(null)}
          >
            <X />
          </Button>
          <img
            src={selectedImage}
            alt="Original portfolio post enlarged"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
