import { ReactNode } from "react";

interface InputRowProps {
  children: ReactNode;
}

const InputRow: React.FC<InputRowProps> = ({ children }) => {
  return <div className="input-row">{children}</div>;
};

export default InputRow;
