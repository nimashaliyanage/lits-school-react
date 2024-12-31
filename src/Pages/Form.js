import React, { useState } from 'react';
import './formstyle.css';
// import './Assets/icons/fontawesome/css/all.min.css';
import logo from '../Assets/images/logo1.png';

const Form = () => {
  const [classSelect, setClassSelect] = useState('');
  const [sectionSelect, setSectionSelect] = useState('');

  const handleClassChange = (event) => {
    setClassSelect(event.target.value);
    setSectionSelect(''); // Reset section on class change
  };

  const handleSectionChange = (event) => {
    setSectionSelect(event.target.value);
  };

  const sections = {
    Japanese: ["Japanese"],
    French: ["French"],
    Chinese: ["Chinese"],
    Korean: ["Korean"],
    Hindi: ["Hindi"],
    English: ["English"],
    Russian: ["Russian"],
    Italy: ["Italy"],
    Arabic: ["Arabic"],
    German: ["German"],
  };

  return (
    <>
      <section className="admission-section" id="form-section">
        <h1 className="title">Make An Admission</h1>
        <form id="admissionForm" className="form-container">
          {/* Academic Details */}
          <div className="form-group">
            <h2>Academic Details</h2>
            <div className="form-inputs">
              <div>
                <label>School Name*</label>
                <input
                  type="text"
                  name="schoolName"
                  value="Language Infinity Training School"
                  readOnly
                />
              </div>
              <div>
                <label>Class*</label>
                <select name="class" id="classSelect" value={classSelect} onChange={handleClassChange}>
                  <option value="">Select</option>
                  {Object.keys(sections).map((className) => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Section*</label>
                <select name="section" id="sectionSelect" value={sectionSelect} onChange={handleSectionChange}>
                  <option value="">Select</option>
                  {sections[classSelect] && sections[classSelect].map((sec) => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Student Details */}
          <div className="form-group">
            <h2>Student Details</h2>
            <div className="form-inputs">
              <input type="text" name="firstName" placeholder="First Name*" required />
              <input type="text" name="lastName" placeholder="Last Name*" required />
              <select name="gender" required>
                <option value="">Select Gender*</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="date" name="dob" required />
              <input type="tel" name="mobile" placeholder="Student Mobile Number*" required />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="address" placeholder="Permanent Address*" required></textarea>
            </div>
          </div>

          {/* Guardian Details */}
          <div className="form-group">
            <h2>Guardian Details</h2>
            <div className="form-inputs">
              <select name="guardianRelation" required>
                <option value="">Select Relation*</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
              </select>
              <input type="text" name="guardianName" placeholder="Guardian Name*" required />
              <input type="tel" name="guardianMobile" placeholder="Guardian Number*" required />
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-buttons">
            <button type="reset" className="reset-button">Clear</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
