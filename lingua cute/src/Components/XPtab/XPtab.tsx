import { FiBookOpen } from "react-icons/fi"
import "./XPtab.scss"
import { FaHourglassStart, FaRegStar } from "react-icons/fa"


const XPtab = ()=>{
    const tabs = [
        {
            icon: <FiBookOpen />,
            number: 19,
            label: "Lessons Completed",
            bgColor: "#8b4555",
        },
        {
            icon: <FaRegStar />, 
            number: 1250,
            label: "Total XP",
            bgColor: "#8b4555"
        }, 
        {
            icon: <FaHourglassStart />,
            number: "48%", 
            label: "Course Progress",
            bgColor: "#1f2220"
        }
    ]
    return(
         <div className="coverEverything">
      <h2 className="recalct">Learning Progress</h2>
      <h5 className="recafct">Track your journey and continue where you left off</h5>
      <div className="actions-container">
{tabs.map((tabs, index) => (
    <div className="action-card">
      <div className="action-card-header">
        <div
          className="action-box"
          style={{ backgroundColor: tabs.bgColor }}
        >
          {tabs.icon}
        </div>
      </div>
      <div className="action-value">{tabs.number}</div>
      <div className="action-label">{tabs.label}</div>
    </div>
))}

      </div>
    </div>
    )
}

export default XPtab;