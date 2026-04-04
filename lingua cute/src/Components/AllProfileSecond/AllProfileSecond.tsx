import { BiTime } from "react-icons/bi";
import { FaBookOpen, FaTrophy } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoFlameSharp } from "react-icons/io5";
import "./AllProfileSecond.scss"

const AllProfileSecond = ()=>{
     const stats = [
        {
          icon: <FaTrophy />,
          value: '7',
          label: 'Day Streak',
          bgColor: '#a9b5c5',
        },
        {
          icon: <IoFlameSharp />,
          value: '1,250',
          label: 'Total XP',
          bgColor: '#a9b5c5',
        },
        {
          icon: <BiTime />,
          value: '24',
          label: 'Lessons Done',
          bgColor: '#a9b5c5',
        },
        {
          icon: <FaBookOpen />,
          value: '12h',
          label: 'Study Time',
          bgColor: '#a9b5c5',
        },
      ];
    return(
        <section className="firstDash">
              <div className="stats-container">
                
      {stats.map((stat, index) => (
        <div key={index} className="stat-cards">
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
        </section>
    )
}

export default AllProfileSecond;