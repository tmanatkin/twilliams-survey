import { ReactNode } from "react";
import "../styles/form.css";

interface FormProps {
  title: string;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ title, children }) => {
  return (
    <form>
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
