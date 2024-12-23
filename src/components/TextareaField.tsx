interface TextareaFieldProps {
  title: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ title }) => {
  const identifier = title.replace(/\s+/g, "_").toLowerCase();

  return (
    <div className="input-field">
      <p>{title}</p>
      <textarea id={identifier} name={identifier}></textarea>
    </div>
  );
};

export default TextareaField;
