
import React, { useState } from "react";
import "./BankAccountForm.css";

const BankAccountForm = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    bank: "",
    type: "",
  });

  const [errors, setErrors] = useState({});
  const [accounts, setAccounts] = useState([]);

  // ✅ handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ validate before submit
  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Account name is required";
    else if (form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!form.number) newErrors.number = "Account number is required";
    else if (!/^\d{10}$/.test(form.number))
      newErrors.number = "Account number must be  10 digits";

    if (!form.bank) newErrors.bank = "Please select a bank";
    if (!form.type) newErrors.type = "Select account type";

    return newErrors;
  };

  // ✅ handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      setAccounts([...accounts, form]);
      setForm({ name: "", number: "", bank: "", type: "" });
    }
  };

  return (
    <div className="bank-form-container">
      <h2>Add Bank Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Account Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Account Number:</label>
        <input
          type="text"
          name="number"
          maxLength="10"
          value={form.number}
          onChange={handleChange}
        />
        {errors.number && <p className="error">{errors.number}</p>}

        <label>Bank Name:</label>
        <select name="bank" value={form.bank} onChange={handleChange}>
          <option value="">Select Bank</option>
          <option>Access Bank</option>
          <option>Sky Bank</option>
          <option>UBA</option>
          <option>First Bank</option>
          <option>Zenith Bank</option>
        </select>
        {errors.bank && <p className="error">{errors.bank}</p>}

        <label>Account Type:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="Savings"
              checked={form.type === "Savings"}
              onChange={handleChange}
            />
            Savings
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Current"
              checked={form.type === "Current"}
              onChange={handleChange}
            />
            Current
          </label>
        </div>
        {errors.type && <p className="error">{errors.type}</p>}

        <button type="submit">Save Account Details</button>
      </form>

      {/* ✅ Display saved accounts */}
      {accounts.length > 0 && (
        <div className="account-list">
          <h3>Saved Accounts:</h3>
          {accounts.map((acc, i) => (
            <div key={i} className="account-item">
              <p><strong>{acc.name}</strong> ({acc.bank})</p>
              <p>Acct No: {acc.number}</p>
              <p>Type: {acc.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BankAccountForm;
