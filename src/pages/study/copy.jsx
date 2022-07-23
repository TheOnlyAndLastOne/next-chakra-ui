import { Button, Input, useToast, useClipboard } from "@chakra-ui/react";
import React from "react";

function CopyClipboard() {
  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard("value");

  return (
    <div>
      <Input />
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

export default CopyClipboard;
