import React, { useState } from "react";

const SettingsModule = () => {
  const [settings, setSettings] = useState({
    theme: "light",
    language: "English",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="form-card">
      <h3>System Settings</h3>
      <label>Theme</label>
      <select name="theme" value={settings.theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="monochrome">Monochrome</option>
      </select>

      <label>Language</label>
      <select name="language" value={settings.language} onChange={handleChange}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="French">French</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="notifications"
          checked={settings.notifications}
          onChange={handleChange}
        />
        Enable Notifications
      </label>

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsModule;