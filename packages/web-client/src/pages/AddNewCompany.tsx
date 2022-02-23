import { useState } from "react";

export const AddNewCompany = () => {
  const [ticker, setTicker] = useState("");
  const [companyName, setCompanyName] = useState("");
  console.log('Hello from AddNewCompany')

  const handleSubmit = (evt:any) => {
    evt.preventDefault();
    const company = { ticker, companyName };

    fetch("http://localhost:3001/company", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    })
      .then(() => {
        console.log("new company has been added");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Add new company</h2>
      <form onSubmit={handleSubmit}>
        <label>Ticker:</label>
        <input
          type="text"
          required
          maxLength={4}
          minLength={4}
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          />
        <label>Company Name:</label>
        <input
          type="text"
          required
          minLength={5}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};
