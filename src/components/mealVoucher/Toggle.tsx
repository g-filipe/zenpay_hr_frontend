import { Button, Collapse, Box } from "@chakra-ui/react";
import React from "react";

function Toggle() {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Button onClick={handleToggle}>
        Toggle
      </Button>
      <Collapse in={show}> {/* Use "in" em vez de "isOpen" */}
        <Box mt={4}>

        </Box>
      </Collapse>
    </>
  );
}

export default Toggle;
