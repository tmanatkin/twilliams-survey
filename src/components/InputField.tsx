import { useState } from "react";

interface InputFieldProps {
  title: string;
  type: "text" | "number" | "password" | "email" | "tel";
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ title, type, required }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const identifier = title.replace(/[\s/]+/g, "_").toLowerCase();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

  const validateField = () => {
    if (type === "email" && !emailRegex.test(value)) {
      setError("Please enter a valid email address: email@email.com");
    } else if (type === "tel" && !phoneRegex.test(value)) {
      setError("Please enter a valid phone number: (123) 456-7890");
    } else {
      setError("");
    }
  };

  return (
    <div className="input-field">
      <p>{title}</p>
      <input
        id={identifier}
        type={type}
        name={identifier}
        // value={value}
        required={required}
        onChange={(e) => setValue(e.target.value)}
        onBlur={validateField}
      />
      <span className="input-error">{error}</span>
    </div>
  );
};

export default InputField;
