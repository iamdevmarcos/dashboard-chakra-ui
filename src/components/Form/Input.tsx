import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface Props extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
          borderColor: "pink.500",
        }}
        size="lg"
        required
        {...rest}
      />
    </FormControl>
  );
}
