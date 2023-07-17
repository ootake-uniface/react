import { Button } from "@mui/material";
import React from "react";

type Props = {
  message: string;
};

const ExampleComponent: React.FC<Props> = ({ message }: Props) => {
  return <Button>{message}</Button>;
};

export default ExampleComponent;
