import React, { useEffect } from "react";
import '../pages/styles/SettingsModal.css';

const SettingsModal = ({ IsForProfile = true }) => {
  useEffect(() => {
    // Get references to the modal, buttons, and form elements
    const settingsModal = document.getElementById("settingsModal");
    const gearIcon = document.querySelector(".fa-gear"); // Gear icon that opens the modal
    const closeSettingsBtn = document.querySelector(".close-settings"); // Button to close the modal
    const saveSettingsBtn = document.querySelector(".save-settings"); // Button to save the settings

    // Function to open the modal
    const openModal = () => {
      settingsModal.style.display = "flex"; // Set the display to 'flex' to show the modal
    };

    // Function to close the modal
    const closeModal = () => {
      settingsModal.style.display = "none"; // Hide the modal
    };

    // Function to save the settings and log the chosen values
    const saveSettings = () => {
      const notifications = document.getElementById("notifications")?.checked; // Get the notification setting
      const darkMode = document.getElementById("darkModes")?.checked; // Get the dark mode setting
      const language = document.getElementById("language")?.value; // Get the selected language

      // Log the saved settings to the console
      console.log("Settings saved:");
      console.log("Notifications: " + notifications);
      console.log("Dark Mode: " + darkMode);
      console.log("Language: " + language);

      settingsModal.style.display = "none"; // Close the modal after saving
    };

    // Event listener to open the modal when the gear icon is clicked
    if (gearIcon) {
      gearIcon.addEventListener("click", openModal);
    }

    // Event listener to close the modal when the close button is clicked
    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener("click", closeModal);
    }

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", (e) => {
      if (e.target === settingsModal) {
        closeModal();
      }
    });

    // Event listener to save the settings when the save button is clicked
    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener("click", saveSettings);
    }

    // Cleanup the event listeners when the component is unmounted
    return () => {
      if (gearIcon) gearIcon.removeEventListener("click", openModal);
      if (closeSettingsBtn) closeSettingsBtn.removeEventListener("click", closeModal);
      window.removeEventListener("click", (e) => {
        if (e.target === settingsModal) {
          closeModal();
        }
      });
      if (saveSettingsBtn) saveSettingsBtn.removeEventListener("click", saveSettings);
    };
  }, []); // Empty dependency array means this runs once when the component is mounted

  return (
    <div id="settingsModal">
      <div className="modal-contentSettings">
        <span className="close-settings">&times;</span> {/* Close button */}
        <h3>Settings</h3>
        <div className="settings-option">
          <label htmlFor="notifications">Enable Notifications</label>
          <input type="checkbox" id="notifications" defaultChecked /> {/* Notification setting */}
        </div>
        {IsForProfile && (
          <div className="settings-option">
            <label htmlFor="privacy">Set as private page</label>
            <input type="checkbox" id="darkModes" /> {/* Dark mode setting */}
          </div>
        )}
        <div className="settings-option">
          <label htmlFor="language">Language</label>
          <select id="language"> {/* Language selection dropdown */}
            <option value="en">English</option>
            <option value="es">Arabic</option>
            <option value="fr">Turkish</option>
          </select>
        </div>
        <button className="save-settings">Save</button> {/* Save button */}
      </div>
    </div>
  );
};

export default SettingsModal;
