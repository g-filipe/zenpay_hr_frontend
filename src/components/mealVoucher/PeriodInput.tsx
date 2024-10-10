import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

interface CompetenciaInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CompetenciaInput: React.FC<CompetenciaInputProps> = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Competência</FormLabel>
      <Input type="month" value={value} onChange={(e) => onChange(e.target.value)} />
    </FormControl>
  );
};

export default CompetenciaInput;
