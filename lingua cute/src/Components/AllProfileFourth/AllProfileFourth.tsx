import "./AllProfileFourth.scss";
import React, { useEffect, useState } from "react";
import { useBadges } from "./useBadges";
import {
  RiFlag2Line,
  RiFireLine,
  RiFlashlightLine,
  RiBookOpenLine,
  RiMedalLine,
  RiTrophyLine,
  RiVipCrownLine,
  RiStarSLine,
} from "react-icons/ri";
export interface Badge {
  id: string;
  label: string;
  sublabel: string;
  unlocked: boolean;
  /** ISO date string — populated by backend when unlocked */
  unlockedAt?: string;
}
 
interface BadgesAchievementsProps {
  /** Pass fetched badges from your backend here.
   *  Falls back to static demo data when undefined (dev/loading state). */
  badges?: Badge[];
  isLoading?: boolean;
}
 
// ─── Static icon map ──────────────────────────────────────────────────────────
 
const ICON_MAP: Record<string, React.ReactNode> = {
  first_steps: <RiFlag2Line />,
  week_warrior: <RiFireLine />,
  quick_learner: <RiFlashlightLine />,
  bookworm: <RiBookOpenLine />,
  perfectionist: <RiMedalLine />,
  champion: <RiTrophyLine />,
  master: <RiVipCrownLine />,
  legend: <RiStarSLine />,
};
 
// ─── Demo / fallback data (replace with real API response) ────────────────────
 
const DEMO_BADGES: Badge[] = [
  { id: "first_steps",   label: "First",    sublabel: "Steps",    unlocked: true,  unlockedAt: "2025-01-10" },
  { id: "week_warrior",  label: "Week",     sublabel: "Warrior",  unlocked: true,  unlockedAt: "2025-02-03" },
  { id: "quick_learner", label: "Quick",    sublabel: "Learner",  unlocked: true,  unlockedAt: "2025-03-15" },
  { id: "bookworm",      label: "Book",     sublabel: "worm",     unlocked: true,  unlockedAt: "2025-04-01" },
  { id: "perfectionist", label: "Perfectionist", sublabel: "",    unlocked: false },
  { id: "champion",      label: "Champion", sublabel: "",         unlocked: false },
  { id: "master",        label: "Master",   sublabel: "",         unlocked: false },
  { id: "legend",        label: "Legend",   sublabel: "",         unlocked: false },
];
 
const AllProfileFourth =() => {
  const [isLoading, setIsLoading] = useState(false);
    return(
        <section className="firstDash">
            <div className="badges-achievements">
                <h2 className="badges-achievements__title">Badges &amp; Achievements</h2>
                {isLoading ? (
                    <div className="badges-achievements__skeleton">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="badge-item badge-item--skeleton" />
                            ))}
                    </div>
                    ) : (
                    <ul className="badges-achievements__grid" role="list">
                        {/* {displayBadges.map((badge) => (
                            <BadgeItem key={badge.id} badge={badge} />
                        ))} */}
                    </ul>
                )}
            </div>
    </section>
    )
}

export default AllProfileFourth;