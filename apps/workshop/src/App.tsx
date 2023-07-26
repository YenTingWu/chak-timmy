import "./App.css";
import { VStack } from "@chakra-ui/react";
import { DatePickerExample } from "./date-picker-example";
import { DateRangePickerExample } from "./date-range-picker-example";

function App() {
  return (
    <VStack
      minH="100vh"
      spacing="10"
      alignItems="center"
      justifyContent="center"
    >
      <DateRangePickerExample />
      <DatePickerExample />
    </VStack>
  );
}

export default App;
