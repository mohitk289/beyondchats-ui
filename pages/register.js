import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-darkText mb-4">Register</h2>

        {step === 1 && (
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded"
            />
            <button
              className="w-full bg-primary text-white py-2 rounded hover:opacity-80"
              onClick={() => setStep(2)}
            >
              Continue
            </button>
            <p className="text-center text-lightText mt-3">or</p>
            <button className="w-full border py-2 rounded mt-2">Continue with Google</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-3">Enter the OTP sent to {email}</p>
            <input
              type="text"
              placeholder="OTP"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="w-full bg-primary text-white py-2 rounded hover:opacity-80"
              onClick={() => alert("Registration Complete!")}
            >
              Verify & Continue
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
