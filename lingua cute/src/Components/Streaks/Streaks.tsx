
import { IoFlameSharp } from 'react-icons/io5';
import { FaTrophy } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { BiTime } from 'react-icons/bi';
import './Streaks.scss';

const Streaks = () => {
  const stats = [
    {
      icon: <IoFlameSharp />,
      value: '7',
      label: 'Day Streak',
      bgColor: '#a9b5c5',
    },
    {
      icon: <FaTrophy />,
      value: '1,250',
      label: 'Total XP',
      bgColor: '#a9b5c5',
    },
    {
      icon: <IoMdCheckmarkCircle />,
      value: '24',
      label: 'Lessons Done',
      bgColor: '#a9b5c5',
    },
    {
      icon: <BiTime />,
      value: '12h',
      label: 'Study Time',
      bgColor: '#a9b5c5',
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div 
            className="icon-box" 
            style={{ backgroundColor: stat.bgColor }}
          >
            {stat.icon}
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Streaks;