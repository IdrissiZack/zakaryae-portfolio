import { useEffect, useRef } from 'react';
import profileImg from '../assets/img.jpg';
import './AboutMe.css';

const achievements = [
    {
        icon: 'bx bx-shield-quarter',
        title: 'Cybersecurity Focus',
        detail: 'Focused on Cybersecurity, Web Security, and Penetration Testing through continuous hands-on learning.',
        color: '#10b981',
    },
    {
        icon: 'bx bx-code-alt',
        title: 'Software Engineering',
        detail: 'Building a strong software engineering foundation with modern web development and application architecture.',
        color: '#6366f1',
    },
    {
        icon: 'bx bx-terminal',
        title: 'Security Labs',
        detail: 'Practicing security concepts in controlled labs using Linux, networking, reconnaissance, and security testing tools.',
        color: '#f59e0b',
    },
    {
        icon: 'bx bx-globe',
        title: 'Web Security',
        detail: 'Learning how to identify and understand common web application security vulnerabilities and attack surfaces.',
        color: '#06b6d4',
    },
    {
        icon: 'bx bx-network-chart',
        title: 'Networking & Linux',
        detail: 'Developing practical knowledge of Linux systems, networking fundamentals, and security-oriented environments.',
        color: '#8b5cf6',
    },
    {
        icon: 'bx bx-book-open',
        title: 'Continuous Learning',
        detail: 'Continuously improving through technical courses, practical labs, cybersecurity research, and personal projects.',
        color: '#ec4899',
    },
];

const AboutMe = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('am-visible');
                });
            },
            { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
        );
        const els = sectionRef.current?.querySelectorAll('.am-reveal');
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-me-section" ref={sectionRef} aria-label="About Zakaryae Idrissi">
            {/* Subtle background accents */}
            <div className="am-bg-blob am-blob-1" />
            <div className="am-bg-blob am-blob-2" />

            <div className="container am-outer">

                {/* ── TOP: two-column intro + photo ── */}
                <div className="am-top-row am-reveal">
                    {/* Left — text */}
                    <div className="am-left">
                        <span className="am-eyebrow">
                            <i className="bx bx-user-circle" /> Who am I
                        </span>
                        <div className="am-heading-wrapper">
                            <h2 className="am-heading">
                             I'm <span className="am-name-highlight">Zakaryae Idrissi</span>
                            </h2>
                            <span className="am-nickname">~ Cybersecurity Student</span>
                        </div>
                        <p className="am-bio">
                           
    A <strong>Software Engineering student</strong> focused on
    <strong> Cybersecurity</strong>, <strong>Web Security</strong>, and
    <strong> Penetration Testing</strong>. I enjoy understanding how
    systems and applications work, identifying security weaknesses,
    and learning how to build more secure software.
</p>
                        <p className="am-bio">
                        
    My learning journey combines <strong>Software Engineering </strong>
    with hands-on cybersecurity practice, including Linux, networking,
    reconnaissance, web security, and security testing. I am continuously
    building my skills through <strong>labs, projects, and practical learning</strong>.
</p>
                        
                        <div className="am-quick-tags">
                           <span className="am-tag"><i className="bx bx-map-pin" /> Morocco</span>
<span className="am-tag"><i className="bx bx-graduation" /> Software Engineering Student</span>
<span className="am-tag"><i className="bx bx-shield-quarter" /> Cybersecurity</span>
<span className="am-tag"><i className="bx bx-world" /> Open to Opportunities</span>
                        </div>
                    </div>

                    {/* Right — photo */}
                    <div className="am-right">
                        <div className="am-photo-frame">
                           <img src={profileImg} alt="Zakaryae Idrissi" className="am-photo" />
                            <div className="am-photo-badge">
                                <i className="bx bx-code-alt" />
                                <span>Cybersecurity Student</span>
                            </div>
                            <div className="am-photo-deco am-deco-1" />
                            <div className="am-photo-deco am-deco-2" />
                        </div>
                    </div>
                </div>

                {/* ── Achievements Grid ── */}
                <div className="am-achievements-block am-reveal" style={{ '--am-delay': '0.1s' }}>
                    <h3 className="am-sub-heading">
                        <i className="bx bx-medal" /> Skills &amp; Highlights
                    </h3>
                    <div className="am-achievements-grid">
                        {achievements.map((a, i) => (
                            <div
                                key={a.title}
                                className="am-ach-card"
                                style={{ '--ach-color': a.color, '--ach-delay': `${i * 0.07}s` }}
                            >
                                <div className="am-ach-icon">
                                    <i className={a.icon} />
                                </div>
                                <div className="am-ach-text">
                                    <h4>{a.title}</h4>
                                    <p>{a.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
