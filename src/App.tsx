import Form from "./components/Form";
import InputField from "./components/InputField";
import "./styles/main.css";
import InputRow from "./components/InputRow";
import TextareaField from "./components/TextareaField";

function App() {
  return (
    <Form title="Survey">
      <InputRow>
        <InputField title="First Name" type="text" required />
        <InputField title="Last Name" type="text" required />
      </InputRow>
      <InputField title="Email Address" type="email" required />
      <InputField title="Phone Number" type="tel" required />
      <InputField title="Street Address" type="text" required />
      <InputField title="Apartment/Suite Number" type="text" />
      <InputRow>
        <InputField title="City" type="text" required />
        <InputField title="State" type="text" required />
        <InputField title="Zip Code" type="text" required />
        <InputField title="Country" type="text" required />
      </InputRow>
      <TextareaField title="Free Response" />
    </Form>
  );
}

export default App;
