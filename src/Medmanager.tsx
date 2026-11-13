import { useState } from "react";
import axios from "axios";

/* ================= TYPES ================= */
type Medicine = {
  _id: string;
  email: string;
  name: string;
  quantity: string;
  units: string;
  company: string;
  dom: string;
  doe: string;
};

/* ================= COMPONENT ================= */
const Medmanger = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedQty, setEditedQty] = useState("");

  /* ================= FETCH ================= */
  const handleFetch = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    setError("");
    setLoading(true);
    setMedicines([]);

    try {
      const res = await axios.get("http://localhost:2026/api/Medmanger",{ params: { email } });

      if (res.data.doc.length > 0) {
        setMedicines(res.data.doc);
      } else {
        setError("No record found for this email");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */
const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:2026/api/delMedmanger/${id}`);

    setMedicines((prev) => prev.filter((m) => m._id !== id));
  } catch (err) {
    console.error(err);
    alert("Delete failed");
  }
};


  /* ================= EDIT (placeholder) ================= */
const handleUpdateQuantity = async (id: string) => {
    try
     {
      await axios.put(
        `http://localhost:2026/api/updateQuantity/${id}`,
        { quantity: editedQty }
      );

      // update UI like TODO list
      setMedicines((prev) =>
        prev.map((m) =>
          m._id === id ? { ...m, quantity: editedQty } : m
        )
      );

      setEditingId(null);
      setEditedQty("");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };
  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-6">

        {/* SEARCH CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Fetch Medicine Records
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Search medicine details by email
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2
                  ${
                    error
                      ? "border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
              {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
              )}
            </div>

            <button
              onClick={handleFetch}
              disabled={loading}
              className="h-10.5 rounded-lg bg-blue-600 px-6 text-sm font-medium text-white
                hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Fetching..." : "Fetch"}
            </button>
          </div>
        </div>

        {/* RESULT CARDS */}
        {medicines.map((medicine) => (
          <div
            key={medicine._id}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Medicine Details
              </h3>

              <div className="flex gap-2">
                {editingId === medicine._id ? (
                  <button
                    onClick={() => handleUpdateQuantity(medicine._id)}
                    className="px-4 py-1.5 text-sm rounded-lg bg-green-600 text-white"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(medicine._id);
                      setEditedQty(medicine.quantity);
                    }}
                    className="px-4 py-1.5 text-sm rounded-lg bg-yellow-500 text-white"
                  >
                    Edit Qty
                  </button> 
                )}

                <button onClick={() => handleDelete(medicine._id)}className="px-4 py-1.5 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700">
          Delete
        </button>

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><b>Email:</b> {medicine.email}</p>
              <p><b>Medicine:</b> {medicine.name}</p>

              {/* 🔥 INLINE EDIT QUANTITY */}
              <p>
                <b>Quantity:</b>{" "}
                {editingId === medicine._id ? (
                  <input
                    type="text"
                    value={editedQty}
                    onChange={(e) => setEditedQty(e.target.value)}
                    className="ml-2 w-20 border rounded px-2 py-1 text-sm"
                  />
                ) : (
                  medicine.quantity
                )}
              </p>

              <p><b>Units:</b> {medicine.units}</p>
              <p><b>Company:</b> {medicine.company}</p>
              <p><b>MFG:</b> {medicine.dom}</p>
              <p><b>EXP:</b> {medicine.doe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medmanger;
