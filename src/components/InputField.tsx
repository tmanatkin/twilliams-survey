interface InputFieldProps {
  title: string;
  type: "text" | "number" | "password";
  required?: boolean;
  validation?: "email" | "phone" | "zip";
}

const InputField: React.FC<InputFieldProps> = ({ title, type, required, validation }) => {
  const identifier = title.replace(/\s+/g, "_").toLowerCase();
  return (
    <div className="input-field">
      <p>{title}</p>
      <input id={identifier} type={type} name={identifier} required={required} />
    </div>
  );
};

export default InputField;
