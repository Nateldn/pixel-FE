// User settings page: Update Email, Update Password, Delete Account, Add/Change Image and Log-out
import "../styling/settings.css";

export const Settings = () => {
  return (
    <div className="settingsContainer">
      <div className="settingsTitle">
        <h1>Settings</h1>
      </div>
      <div className="settingsOther">
        <div className="settings">
          <h2>Set lading page</h2>
          <input />
        </div>
        <div className="settings">
          <h2>Change email</h2>
          <input />
        </div>
        <div className="settings">
          <h2>Change password</h2>
          <input />
        </div>
        <div className="settings" id="deleteAccount">
          <h2>Delete account</h2>
        </div>
      </div>
      <div className="settingsPic">
        <img src="" alt="user profile image" id="userProfileImage"/>
        <h2>Change profile image</h2>
      </div>
    </div>
  );
};
