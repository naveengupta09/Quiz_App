import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { heroStyles } from "../assets/dummyStyles";

const Hero = () => {

    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

  return (
    <div className={heroStyles.wrapper}>
      <div className={heroStyles.backgroundGlowOne} />
      <div className={heroStyles.backgroundGlowTwo} />
      <div className={heroStyles.content}>
        <div className={heroStyles.card}>
          <div className={heroStyles.badge}>
            <Sparkles size={14} />
            <span>Admin Experience</span>
          </div>

          <div className={heroStyles.iconWrap}>
            <GraduationCap size={40} />
          </div>

          <h1 className={heroStyles.title}>
            Welcome to <span className={heroStyles.titleAccent}>Tech Quiz Master</span>
          </h1>

          <p className={heroStyles.subtitle}>
            Create quizzes, monitor users, and manage learning analytics from a clean, fast, and premium admin workspace.
          </p>

          <div className={heroStyles.statsRow}>
            <div className={heroStyles.statPill}>
              <div className={heroStyles.statLabel}>Focus</div>
              <div className={heroStyles.statValue}>Quiz creation</div>
            </div>
            <div className={heroStyles.statPill}>
              <div className={heroStyles.statLabel}>Control</div>
              <div className={heroStyles.statValue}>Users & results</div>
            </div>
            <div className={heroStyles.statPill}>
              <div className={heroStyles.statLabel}>Mode</div>
              <div className={heroStyles.statValue}>Secure admin</div>
            </div>
          </div>

          <div className={heroStyles.actions}>
            <Link to="/dashboard" className={heroStyles.primaryAction}>
              <BookOpen size={16} />
              Open Dashboard
              <ArrowRight size={16} />
            </Link>
            <div className={heroStyles.secondaryAction}>
              <ShieldCheck size={16} />
              Sign in to continue
            </div>
          </div>

          <p className={heroStyles.footerNote}>
            Access your admin tools after authentication.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero