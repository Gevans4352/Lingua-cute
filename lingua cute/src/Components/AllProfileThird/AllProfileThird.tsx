import "./AlllProfileThird.scss";
interface LevelProgressProps {
  currentXP: number ;
  maxXP: number ;
  level: number ;
  levelLabel: string ;
}
const AlllProfileThird: React.FC<LevelProgressProps> = ({
  currentXP = 5000,
  maxXP = 20000,
  level = 100,
  levelLabel = " ",

}) => {
 
  const percentage = Math.min(((currentXP ?? 0) / (maxXP ?? 1)) * 100, 100);
const xpToNext = (maxXP ?? 0) - (currentXP ?? 0);
 
  return (
    <section className="firstDash">
      <div className="level-progress">
        <div className="level-progress__header">
          <div className="level-progress__info">
            <h3 className="level-progress__title">Level Progress</h3>
            <p className="level-progress__subtitle">
              Level {level} - {levelLabel}
            </p>
          </div>
          <div className="level-progress__xp">
            <span className="level-progress__xp-current">
              {currentXP?.toLocaleString()}
            </span>
            <span className="level-progress__xp-max">
              {" "}
              / {maxXP?.toLocaleString()} XP
            </span>
          </div>
        </div>

        <div className="level-progress__bar-track">
          <div
            className="level-progress__bar-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="level-progress__xp-remaining">
          {xpToNext.toLocaleString()} XP to next level
        </p>
      </div>
    </section>
  );
};

export default AlllProfileThird;
