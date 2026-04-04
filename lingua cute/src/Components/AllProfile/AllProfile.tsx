import { CiCalendar, CiCamera } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import "./AllProfile.scss";
import { FiMapPin } from "react-icons/fi";

interface ProfileCardProps {
  username?: string;
  tagline?: string;
  email?: string;
  joinedDate?: string;
  location?: string;
  avatarInitial?: string;
  onEditProfile?: () => void;
  onChangeAvatar?: () => void;
}


const AllProfile : React.FC<ProfileCardProps> = ({
 username = "User Name", 
  tagline = "Add your tagline",
  email = "user@example.com",
  joinedDate = "Just joined",
  location = "Add location",
  avatarInitial = "U",
  onEditProfile = () => {},
  onChangeAvatar = () => {},
}) => {


    return(
        <section className="firstDash">
        <div className="profile-card">
      <div className="profile-card__left">
        <div className="profile-card__avatar-wrapper">
          <div className="profile-card__avatar">
            <span className="profile-card__avatar-initial">{avatarInitial}</span>
          </div>
          <button
            className="profile-card__camera-btn"
            onClick={onChangeAvatar}
            aria-label="Change avatar"
          >
            <CiCamera  size={14} />
          </button>
        </div>

        <div className="profile-card__info">
          <div className="profile-card__name-row">
            <h2 className="profile-card__name">{username}</h2>
            <button className="profile-card__inline-edit" aria-label="Edit name">
              <GoPencil  size={14} />
            </button>
          </div>

          <p className="profile-card__tagline">{tagline}</p>

          <div className="profile-card__meta">
            <span className="profile-card__meta-item">
              <CiMail size={13} />
              {email}
            </span>
            <span className="profile-card__meta-item">
              <CiCalendar size={13} />
              {joinedDate}
            </span>
            <span className="profile-card__meta-item">
              <FiMapPin size={13} />
              {location}
            </span>
          </div>
        </div>
      </div>


      <button className="profile-card__edit-btn" onClick={onEditProfile}>
        <GoPencil size={14} />
        Edit Profile
      </button>
    </div>
    </section>
    )
}

export default AllProfile;
