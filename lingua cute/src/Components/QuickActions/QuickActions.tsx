import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import "./QuickActions.scss";
import { MdOutlineTranslate } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";

const QuickActions = ()=>{
     const actions = [

        {
          icon: <FiBookOpen />,
          details: "Learn while having fun ",
          label: 'Continue Learning',
          bgColor: '#817461',
        },
        {
          icon: <MdOutlineTranslate />,
          details: "Translate words and phrases",
          label: 'Quick Translate',
          bgColor: '#75582c',
        },
        {
          icon: <IoGameControllerOutline />,
          label: 'Play Games',
          details: "Pick off where you left off",
          bgColor: '#614116',
        },
      ];
    return(
        <div className="actions-container">
      {actions.map((actions, index) => (
          <div key={index} className="action-card">
          <div className="action-card-header">
            <div 
              className="action-box" 
              style={{ backgroundColor: actions.bgColor }}
            >
              {actions.icon}
            </div>
            <span className="arrow-icon"><FiArrowRight /></span>
          </div>
          <div className="action-value">{actions.label}</div>
          <div className="action-label">{actions.details}</div>
        </div>
      ))}
    </div>
    )
}

export default QuickActions;