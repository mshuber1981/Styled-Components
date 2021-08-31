import BasicTitle from "./components/BasicTitle";
import { DefualtButton, HipsterButton } from "./components/Buttons";
import ComplexTitle from "./components/ComplexTitle";
import Card from "./components/Card";

// Detect Darkmode
console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

export default function App() {
  return (
    <div>
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle special>Special Styled Component</BasicTitle>
      <DefualtButton>Styled Button</DefualtButton>
      <HipsterButton>Hipster Button</HipsterButton>
      <ComplexTitle title={"Complex Title"} />
      <Card />
    </div>
  );
}
