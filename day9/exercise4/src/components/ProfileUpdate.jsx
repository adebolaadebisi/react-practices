import React, { useState, useEffect } from "react";
import "./ProfileUpdate.css";

const ProfileUpdate = () => {
  const initialData = {
    username: "",
    email: "",
    bio: "",
    location: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // 🧠 Load saved data on mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setFormData(savedProfile.formData);
      setPreview(savedProfile.preview);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(file);
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (formData.username.length < 3)
      newErrors.username = "Must be at least 3 characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.bio.trim()) newErrors.bio = " your Bio is required";
    if (!formData.location) newErrors.location = "Select your location";
    if (!formData.gender) newErrors.gender = "Kindly select your gender";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // 🧠 Save to localStorage
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ formData, preview })
      );
      setSuccess("✅ Profile Updated and Saved!");
    } else {
      setSuccess("");
    }
  };

  const handleCancel = () => {
    setFormData(initialData);
    setProfileImage(null);
    setPreview(null);
    setErrors({});
    setSuccess("");
    localStorage.removeItem("userProfile");
  };

  return (
    <div className="profile-container">
      <h2> profile update</h2>

      <form onSubmit={handleSubmit} className="profile-form">
        
        <div className="image-section">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="profile-img" />
          ) : (
            <div className="placeholder">No Image</div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Bio:</label>
        <textarea
          name="bio"
          rows="3"
          value={formData.bio}
          onChange={handleChange}
        />
        {errors.bio && <p className="error">{errors.bio}</p>}

        <label>Location:</label>
        <select name="location" value={formData.location} onChange={handleChange}>
          <option value="">-- Select City --</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Kano">Kano</option>
          <option value="Other">Other</option>
        </select>
        {errors.location && <p className="error">{errors.location}</p>}

        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <div className="btns">
          <button type="submit">Update Profile</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default ProfileUpdate;
