import { useEffect, useState } from "react";

export default function Onboard() {
  const [form, setForm] = useState({
    name: "",
    ageGroup: "",
    country: "",
    city: "",
    identity: "",
  });

  useEffect(() => {
    document.title = "Orpheus — The Lyre Awakens";
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: save to state/store if you need it
    window.location.href = "/chat"; // navigate to chat
  };

  return (
    <main className="page page--onboard">
      <div className="card">
        <h1 className="title">Orpheus — The Lyre Awakens</h1>
        <p className="subtitle">Enter a few details to begin.</p>

        <form onSubmit={onSubmit} className="form">
          <label>
            Preferred name
            <input
              value={form.name}
              onChange={update("name")}
              placeholder="e.g., Alice"
              required
            />
          </label>

          <label>
            Age group
            <select value={form.ageGroup} onChange={update("ageGroup")} required>
              <option value="">Select…</option>
              <option>Under 18</option>
              <option>18–24</option>
              <option>25–34</option>
              <option>35–44</option>
              <option>45–54</option>
              <option>55+</option>
            </select>
          </label>

          <label>
            Country
            <input
              value={form.country}
              onChange={update("country")}
              placeholder="e.g., Australia"
              required
            />
          </label>

          <label>
            City / town (optional)
            <input
              value={form.city}
              onChange={update("city")}
              placeholder="e.g., Sydney"
            />
          </label>

          <label>
            Cultural identity (optional)
            <input
              value={form.identity}
              onChange={update("identity")}
              placeholder="e.g., Australian"
            />
          </label>

          <button type="submit" className="btn">Continue to chat →</button>
        </form>
      </div>
    </main>
  );
}
