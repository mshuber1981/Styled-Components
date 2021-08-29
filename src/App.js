import BasicTitle from "./components/BasicTitle";
import { DefualtButton, HipsterButton } from "./components/Buttons";

export default function App() {
  return (
    <div>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle special>Styled Components</BasicTitle>
      <DefualtButton>Styled Button</DefualtButton>
      <HipsterButton>Hipster Button</HipsterButton>
    </div>
  );
}
