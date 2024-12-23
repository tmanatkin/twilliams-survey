import { ReactNode, useState } from "react";
import "../styles/form.css";
import "../styles/message.css";
import { db } from "../../firebase-config";

interface FormProps {
  title: string;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ title, children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const url = "https://simpliservicesut.com/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObj: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value.toString();
    });

    formDataObj["timestamp"] = new Date().toISOString();

    try {
      await db.collection("formSubmissions").add(formDataObj);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      {isSubmitted ? (
        <div className="displayMessage">
          <h2>Submitted Successfully!</h2>
          <p>
            Redirecting to <a href={url}>{url}</a>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          {children}
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Form;
