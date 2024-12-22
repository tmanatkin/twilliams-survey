import Form from "./components/Form";
import InputField from "./components/InputField";
import "./styles/main.css";
import InputRow from "./components/InputRow";

function App() {
  return (
    <Form title="Survey">
      <InputRow>
        <InputField title="First Name" type="text" required />
        <InputField title="Last Name" type="text" required />
      </InputRow>
      <InputField title="Email Address" type="text" required />
      <InputField title="Phone Number" type="number" required />
    </Form>
  );
}

export default App;
