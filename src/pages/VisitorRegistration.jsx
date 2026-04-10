// import React, { useRef, useState } from 'react';
// // import { AlertCircle } from 'lucide-react';
// import { IoAlertCircleOutline } from "react-icons/io5";

// const FIELDS = [
//     { id: "name", label: "Full Name", type: "text", placeholder: "e.g. Ramesh Patel" },
//     { id: "number", label: "Mobile No.", type: "tel", placeholder: "e.g. 9876543210" },
//     { id: "village", label: "Village", type: "text", placeholder: "e.g. Bardoli" },
//     { id: "taluka", label: "Taluka", type: "text", placeholder: "e.g. Bardoli" },
//     { id: "occupation", label: "Occupation", type: "text", placeholder: "e.g. Farmer" },
// ];

// const EMPTY = { name: "", number: "", village: "", taluka: "", occupation: "" };

// export default function VisitorRegistration() {
//     //     // const GOOGLE_FORM_ID = '';
//     //     const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScLsCE7OjwXFQSWoyW_-ABPsozIiU3BKsU-8YCRIqqMw7eOeA/viewform?embedded=true`;

//     //     return (
//     //         <div className="min-h-screen bg-white pt-44">
//     //             {/* Main Container */}
//     //             {/* <div className="max-w-2xl mx-auto py-5"> */}

//     //                 {/* Header Section */}
//     //                 <div className="text-center mb-12 font-khand">
//     //                     <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
//     //                         Visitor Registration
//     //                     </h1>
//     //                     <div className="w-96 h-[1px] bg-[#2F3840] mx-auto mb-2"></div>
//     //                 </div>

//     //                 {/* Google Form Container */}
//     //                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//     //                     <iframe
//     //                         src={googleFormUrl}
//     //                         width="100%"
//     //                         height="1200"
//     //                         frameBorder="0"
//     //                         marginHeight="0"
//     //                         marginWidth="0"
//     //                         style={{ border: 'none' }}
//     //                         title="AGRI WORLD EXPO 2025 Visitor Registration"
//     //                     >
//     //                         Loading…
//     //                     </iframe>
//     //                 </div>

//     //             {/* </div> */}
//     //         </div>
//     //     );
//     // }
//     const [form, setForm] = useState(EMPTY);
//     const [errors, setErrors] = useState({});
//     const [status, setStatus] = useState(null); // 'saving' | 'saved' | 'error'
//     const [savedData, setSavedData] = useState(null);
//     const printRef = useRef(null);

//     const validate = () => {
//         const e = {};
//         FIELDS.forEach(({ id, label }) => {
//             if (!form[id].trim()) e[id] = `${label} is required.`;
//         });
//         if (form.number && !/^\d{10}$/.test(form.number.trim()))
//             e.number = "Enter a valid 10-digit mobile number.";
//         return e;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//         if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//     };

//     const handleSaveAndPrint = async () => {
//         const e = validate();
//         if (Object.keys(e).length) { setErrors(e); return; }

//         setStatus("saving");

//         try {
//             const res = await fetch("/api/records", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form),
//             });

//             if (!res.ok) throw new Error("Server error");

//             setSavedData({ ...form });
//             setStatus("saved");

//             // Trigger print after a short delay so print card renders
//             setTimeout(() => window.print(), 300);

//             // Reset form
//             setForm(EMPTY);
//             setErrors({});
//         } catch {
//             setStatus("error");
//         }
//     };

//     const handlePrint = () => {
//         if (!savedData) return;
//         window.print();
//     };

//     return (
//         <>
//             {/* ── Screen UI ─────────────────────────── */}
//             <div className="text-center mt-12 font-khand">
//                 <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
//                     Visitor Registration
//                 </h1>
//                 <div className="w-96 h-[1px] bg-[#2F3840] mx-auto mb-2"></div>
//             </div>
//             <div className="no-print" style={styles.page}>
//                 <div style={styles.card}>
//                     {/* Header */}
//                     <div style={styles.header}>
//                         <div style={styles.badge}>नोंदणी फॉर्म</div>
//                         <h1 style={styles.title}>Registration Form</h1>
//                         <p style={styles.subtitle}>Fill in the details below and save the record.</p>
//                     </div>

//                     {/* Fields */}
//                     <div style={styles.fields}>
//                         {FIELDS.map(({ id, label, type, placeholder }) => (
//                             <div key={id} style={styles.fieldGroup}>
//                                 <label style={styles.label} htmlFor={id}>{label}</label>
//                                 <input
//                                     id={id}
//                                     name={id}
//                                     type={type}
//                                     value={form[id]}
//                                     onChange={handleChange}
//                                     placeholder={placeholder}
//                                     style={{
//                                         ...styles.input,
//                                         ...(errors[id] ? styles.inputError : {}),
//                                     }}
//                                 />
//                                 {errors[id] && <span style={styles.error}>{errors[id]}</span>}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Status message */}
//                     {status === "saved" && (
//                         <div style={styles.successBanner}>
//                             ✅ Record saved to database successfully!
//                         </div>
//                     )}
//                     {status === "error" && (
//                         <div style={styles.errorBanner}>
//                             ❌ Could not save. Make sure the backend is running on port 3001.
//                         </div>
//                     )}

//                     {/* Buttons */}
//                     <div style={styles.actions}>
//                         <button
//                             onClick={handleSaveAndPrint}
//                             disabled={status === "saving"}
//                             style={{
//                                 ...styles.btn,
//                                 ...styles.btnPrimary,
//                                 ...(status === "saving" ? styles.btnDisabled : {}),
//                             }}
//                         >
//                             {status === "saving" ? "Saving…" : "💾 Save & Print"}
//                         </button>

//                         {savedData && (
//                             <button onClick={handlePrint} style={{ ...styles.btn, ...styles.btnOutline }}>
//                                 🖨️ Print Again
//                             </button>
//                         )}
//                     </div>

//                     <p style={styles.hint}>
//                         Clicking "Save & Print" stores the record in the database and opens the print dialog.
//                     </p>
//                 </div>
//             </div>

//             {/* ── Print-only receipt ─────────────────── */}
//             {savedData && (
//                 <div className="print-container" ref={printRef}>
//                     <div className="print-card">
//                         <div className="print-title">Registration Record</div>
//                         {FIELDS.map(({ id, label }) => (
//                             <div className="print-row" key={id}>
//                                 <span className="print-label">{label}:</span>
//                                 <span className="print-value">{savedData[id]}</span>
//                             </div>
//                         ))}
//                         <div style={{ marginTop: 24, fontSize: 11, color: "#999", textAlign: "right" }}>
//                             Printed on: {new Date().toLocaleString("en-IN")}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// /* ── Inline styles ───────────────────────────── */
// const styles = {
//     page: {
//         // minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "40px 16px",
//         background: "var(--bg)",
//     },
//     card: {
//         background: "var(--card)",
//         borderRadius: "var(--radius)",
//         boxShadow: "var(--shadow)",
//         border: "1px solid var(--border)",
//         maxWidth: 520,
//         width: "100%",
//         padding: "40px 36px 32px",
//     },
//     header: {
//         marginBottom: 32,
//         textAlign: "center",
//     },
//     badge: {
//         display: "inline-block",
//         fontSize: 11,
//         fontWeight: 500,
//         letterSpacing: "0.12em",
//         textTransform: "uppercase",
//         color: "var(--accent)",
//         background: "var(--accent-light)",
//         borderRadius: 20,
//         padding: "4px 14px",
//         marginBottom: 12,
//     },
//     title: {
//         fontFamily: "'Playfair Display', serif",
//         fontSize: 30,
//         fontWeight: 700,
//         color: "var(--ink)",
//         marginBottom: 6,
//     },
//     subtitle: {
//         fontSize: 14,
//         color: "var(--ink-light)",
//         fontWeight: 300,
//     },
//     fields: {
//         display: "flex",
//         flexDirection: "column",
//         gap: 18,
//     },
//     fieldGroup: {
//         display: "flex",
//         flexDirection: "column",
//         gap: 6,
//     },
//     label: {
//         fontSize: 12,
//         fontWeight: 500,
//         letterSpacing: "0.06em",
//         textTransform: "uppercase",
//         color: "var(--ink-light)",
//     },
//     input: {
//         background: "var(--bg)",
//         border: "1.5px solid var(--border)",
//         borderRadius: 8,
//         padding: "11px 14px",
//         fontSize: 15,
//         color: "var(--ink)",
//         fontFamily: "'DM Sans', sans-serif",
//         outline: "none",
//         transition: "border-color 0.18s",
//     },
//     inputError: {
//         borderColor: "#d9534f",
//     },
//     error: {
//         fontSize: 12,
//         color: "#d9534f",
//     },
//     successBanner: {
//         marginTop: 20,
//         background: "#eaf7ec",
//         color: "#2e7d32",
//         border: "1px solid #b2dfdb",
//         borderRadius: 8,
//         padding: "10px 14px",
//         fontSize: 13,
//         fontWeight: 500,
//     },
//     errorBanner: {
//         marginTop: 20,
//         background: "#fff0f0",
//         color: "#c62828",
//         border: "1px solid #ffcdd2",
//         borderRadius: 8,
//         padding: "10px 14px",
//         fontSize: 13,
//         fontWeight: 500,
//     },
//     actions: {
//         display: "flex",
//         gap: 12,
//         marginTop: 28,
//     },
//     btn: {
//         flex: 1,
//         padding: "12px 0",
//         borderRadius: 9,
//         fontSize: 14,
//         fontWeight: 500,
//         cursor: "pointer",
//         fontFamily: "'DM Sans', sans-serif",
//         transition: "all 0.16s",
//         border: "none",
//     },
//     btnPrimary: {
//         background: "var(--accent)",
//         color: "#fff",
//         boxShadow: "0 2px 12px rgba(200,97,26,0.25)",
//     },
//     btnOutline: {
//         background: "transparent",
//         color: "var(--accent)",
//         border: "1.5px solid var(--accent)",
//     },
//     btnDisabled: {
//         opacity: 0.55,
//         cursor: "not-allowed",
//     },
//     hint: {
//         marginTop: 14,
//         fontSize: 12,
//         color: "var(--ink-light)",
//         textAlign: "center",
//         lineHeight: 1.5,
//     },
// };

import React, { useRef, useState } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";

const FIELDS = [
  { id: "name", label: "Full Name", type: "text", placeholder: "e.g. Ramesh Patel" },
  { id: "number", label: "Mobile No.", type: "tel", placeholder: "e.g. 9876543210" },
  { id: "village", label: "Village", type: "text", placeholder: "e.g. Bardoli" },
  { id: "taluka", label: "Taluka", type: "text", placeholder: "e.g. Bardoli" },
  { 
    id: "occupation", 
    label: "Occupation", 
    type: "select", 
    options: [
      { value: "", label: "Select an occupation" },
      { value: "Farmer", label: "Farmer" },
      { value: "Dealer", label: "Dealer" },
      { value: "Company", label: "Company" },
      { value: "Other", label: "Other" }
    ]
  },
  { id: "zipcode", label: "Zipcode", type: "text", placeholder: "e.g. 123456" },
];

const EMPTY = { name: "", number: "", village: "", taluka: "", occupation: "", zipcode: "" };

export default function VisitorRegistration() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const printRef = useRef(null);

  const validate = () => {
    const e = {};
    FIELDS.forEach(({ id, label }) => {
      if (!form[id].trim()) e[id] = `${label} is required.`;
    });
    if (form.number && !/^\d{10}$/.test(form.number.trim())) e.number = "Enter a valid 10-digit mobile number.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSaveAndPrint = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setStatus("saving");

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/records`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${res.status}`);
      }

      setSavedData({ ...form });
      setStatus("saved");

      setTimeout(() => window.print(), 300);

      setForm(EMPTY);
      setErrors({});
    } catch (error) {
      console.error("API Error:", error);
      setStatus("error");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenPWDModal = () => {
    setShowPasswordModal(true);
    setPassword("");
    setPasswordError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
  };

  const handlePasswordSubmit = async () => {
    setPasswordLoading(true);

    try {
      const correctPassword = import.meta.env.VITE_PASSWORD;

      if (password === correctPassword) {
        setPasswordError("");
        setShowPasswordModal(false);
        setPassword("");
        await handleExportData();
      } else {
        setPasswordError("Incorrect password. Please try again.");
      }
    } catch (error) {
      setPasswordError("An error occurred. Please try again.");
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleExportData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/records/export`;
      window.open(apiUrl, "_blank");
    } catch (error) {
      console.error("Export failed:", error);
      setPasswordError("Failed to export data. Please try again.");
    }
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setPasswordError("");
  };

  return (
    <>
      {/* ── Screen UI ─────────────────────────── */}
      <div className="no-print text-center mt-12 font-khand max-w-[1440px] mx-auto">
        <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">Visitor Registration</h1>
        <div className="w-96 h-px bg-[#2F3840] mx-auto mb-2"></div>
      </div>

      <div className="no-print max-w-[1440px] mx-auto" style={styles.page}>
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.badge}>नोंदणी फॉर्म</div>
            <h1 style={styles.title}>Registration Form</h1>
            <p style={styles.subtitle}>Fill in the details below and save the record.</p>
          </div>

          {/* Fields */}
          <div style={styles.fields}>
            {FIELDS.map(({ id, label, type, placeholder, options }) => (
              <div key={id} style={styles.fieldGroup}>
                <label style={styles.label} htmlFor={id}>
                  {label}
                </label>
                {type === "select" ? (
                  <select
                    id={id}
                    name={id}
                    value={form[id]}
                    onChange={handleChange}
                    style={{
                      ...styles.select,
                      ...(errors[id] ? styles.inputError : {}),
                    }}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={form[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={{
                      ...styles.input,
                      ...(errors[id] ? styles.inputError : {}),
                    }}
                  />
                )}
                {errors[id] && <span style={styles.error}>{errors[id]}</span>}
              </div>
            ))}
          </div>

          {/* Status messages */}
          {status === "saved" && <div style={styles.successBanner}>✅ Record saved to database successfully!</div>}
          {status === "error" && (
            <div style={styles.errorBanner}>❌ Could not save. Make sure the backend is running on port 3001.</div>
          )}

          {/* Buttons */}
          <div style={styles.actions}>
            <button
              onClick={handleSaveAndPrint}
              disabled={status === "saving"}
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...(status === "saving" ? styles.btnDisabled : {}),
              }}
            >
              {status === "saving" ? "Saving…" : "💾 Save & Print"}
            </button>
            <button
              onClick={handleOpenPWDModal}
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
              }}
            >
              Export
            </button>

            {savedData && (
              <button onClick={handlePrint} style={{ ...styles.btn, ...styles.btnOutline }}>
                🖨️ Print Again
              </button>
            )}
          </div>

          <p style={styles.hint}>
            Clicking "Save & Print" stores the record in the database and opens the print dialog.
          </p>
        </div>
      </div>

      {/* ── Print-only receipt — always in DOM, hidden via CSS ── */}
      <div className="print-container" ref={printRef}>
        <div className="print-card">
          <div className="print-title">Registration Record</div>
          {FIELDS.map(({ id, label }) => (
            <div className="print-row" key={id}>
              <span className="print-label">{label}:</span>
              <span className="print-value">{savedData ? savedData[id] : ""}</span>
            </div>
          ))}
          <div style={{ marginTop: 24, fontSize: 11, color: "#999", textAlign: "right" }}>
            {savedData && `Printed on: ${new Date().toLocaleString("en-IN")}`}
          </div>
        </div>
      </div>

      {/* ── Password Modal ─────────────────────────── */}
      {showPasswordModal && (
        <div style={styles.modalOverlay} onClick={handleClosePasswordModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Enter Password</h2>
              <button onClick={handleClosePasswordModal} style={styles.closeButton} aria-label="Close modal">
                ✕
              </button>
            </div>

            <p style={styles.modalSubtitle}>Please enter the password to export the registration data.</p>

            <div style={styles.passwordFieldGroup}>
              <label style={styles.passwordLabel} htmlFor="export-password">
                Password
              </label>
              <input
                id="export-password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
                placeholder="Enter password"
                style={{
                  ...styles.passwordInput,
                  ...(passwordError ? styles.passwordInputError : {}),
                }}
                disabled={passwordLoading}
              />
              {passwordError && (
                <span style={styles.passwordError}>
                  <IoAlertCircleOutline style={{ display: "inline", marginRight: 6 }} />
                  {passwordError}
                </span>
              )}
            </div>

            <div style={styles.modalActions}>
              <button
                onClick={handleClosePasswordModal}
                disabled={passwordLoading}
                style={{
                  ...styles.modalBtn,
                  ...styles.modalBtnSecondary,
                  ...(passwordLoading ? styles.btnDisabled : {}),
                }}
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                disabled={passwordLoading || !password.trim()}
                style={{
                  ...styles.modalBtn,
                  ...styles.modalBtnPrimary,
                  ...(passwordLoading || !password.trim() ? styles.btnDisabled : {}),
                }}
              >
                {passwordLoading ? "Verifying…" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Inline styles ───────────────────────────── */
const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 16px",
    background: "var(--bg)",
  },
  card: {
    background: "var(--card)",
    borderRadius: "var(--radius)",
    boxShadow: "var(--shadow)",
    border: "1px solid var(--border)",
    maxWidth: 520,
    width: "100%",
    padding: "40px 36px 32px",
  },
  header: {
    marginBottom: 32,
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--accent)",
    background: "var(--accent-light)",
    borderRadius: 20,
    padding: "4px 14px",
    marginBottom: 12,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 30,
    fontWeight: 700,
    color: "var(--ink)",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "var(--ink-light)",
    fontWeight: 300,
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--ink-light)",
  },
  input: {
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 15,
    color: "var(--ink)",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.18s",
  },
  select: {
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 15,
    color: "var(--ink)",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.18s",
    cursor: "pointer",
  },
  inputError: {
    borderColor: "#d9534f",
  },
  error: {
    fontSize: 12,
    color: "#d9534f",
  },
  successBanner: {
    marginTop: 20,
    background: "#eaf7ec",
    color: "#2e7d32",
    border: "1px solid #b2dfdb",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 500,
  },
  errorBanner: {
    marginTop: 20,
    background: "#fff0f0",
    color: "#c62828",
    border: "1px solid #ffcdd2",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 500,
  },
  actions: {
    display: "flex",
    gap: 12,
    marginTop: 28,
  },
  btn: {
    flex: 1,
    padding: "12px 0",
    borderRadius: 9,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.16s",
    border: "none",
  },
  btnPrimary: {
    background: "var(--accent)",
    color: "#fff",
    boxShadow: "0 2px 12px rgba(200,97,26,0.25)",
  },
  btnOutline: {
    background: "transparent",
    color: "var(--accent)",
    border: "1.5px solid var(--accent)",
  },
  btnDisabled: {
    opacity: 0.55,
    cursor: "not-allowed",
  },
  hint: {
    marginTop: 14,
    fontSize: 12,
    color: "var(--ink-light)",
    textAlign: "center",
    lineHeight: 1.5,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modalContent: {
    background: "White",
    borderRadius: "var(--radius)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
    border: "1px solid var(--border)",
    maxWidth: 420,
    width: "90%",
    padding: "32px 28px",
    maxHeight: "90vh",
    overflow: "auto",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 700,
    color: "var(--ink)",
    margin: 0,
  },
  closeButton: {
    background: "transparent",
    border: "none",
    fontSize: 24,
    color: "var(--ink-light)",
    cursor: "pointer",
    padding: 0,
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s",
  },
  modalSubtitle: {
    fontSize: 13,
    color: "var(--ink-light)",
    marginBottom: 24,
    lineHeight: 1.5,
    margin: 0,
  },
  passwordFieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 24,
  },
  passwordLabel: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--ink-light)",
  },
  passwordInput: {
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 15,
    color: "var(--ink)",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.18s",
  },
  passwordInputError: {
    borderColor: "#d9534f",
  },
  passwordError: {
    fontSize: 12,
    color: "#d9534f",
    display: "flex",
    alignItems: "center",
    marginTop: 4,
  },
  modalActions: {
    display: "flex",
    gap: 12,
  },
  modalBtn: {
    flex: 1,
    padding: "11px 16px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.16s",
    border: "none",
  },
  modalBtnPrimary: {
    background: "var(--accent)",
    color: "#fff",
    boxShadow: "0 2px 12px rgba(200,97,26,0.25)",
  },
  modalBtnSecondary: {
    background: "var(--bg)",
    color: "var(--ink)",
    border: "1.5px solid var(--border)",
  },
};
