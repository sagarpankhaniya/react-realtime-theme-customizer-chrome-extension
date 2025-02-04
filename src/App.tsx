import { ChangeEvent } from "react";

import { useTheme } from "./hooks/useTheme";
import { Heading, Input, Label, Select } from "./ui";


const App = () => {
  const [theme, setTheme] = useTheme({
    backgroundColor: "#ffffff",
    textColor: "#000000",
    fontFamily: "Arial, sans-serif",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setTheme({ ...theme, [name]: value });
  };

  return (
    <div className="rounded-lg shadow w-[20rem] p-6 space-y-4">
      <Heading>Theme Customizer</Heading>
      <div>
        <Label>Background</Label>
        <Input
          type="color"
          name="backgroundColor"
          value={theme.backgroundColor}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label>Text</Label>
        <Input
          type="color"
          name="textColor"
          value={theme.textColor}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label>Font</Label>
        <Select
          name="fontFamily"
          value={theme.fontFamily}
          onChange={handleInputChange}
          options={[
            { value: "Arial, sans-serif", label: "Arial" },
            { value: "Verdana, sans-serif", label: "Verdana" },
            { value: "Times New Roman, serif", label: "Times New Roman" },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
