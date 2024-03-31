import Stack from "../Stack";
import Button from "../../Button";
import Divider from "../../Divider";

import "../styles/index.less";
import "../../Divider/styles/index.less";
import "../../Button/styles/index.less";

export default {
  title: "Layout/Stack",
  component: Stack,
};

export const Default = () => {
  return (
    <Stack>
      <Button key="1">Button</Button>
      <Button key="2">Button</Button>
      <Button key="3">Button</Button>
    </Stack>
  );
};

export const Spacing = () => {
  return (
    <Stack spacing={10}>
      <Button key="1">Button</Button>
      <Button key="2">Button</Button>
      <Button key="3">Button</Button>
    </Stack>
  );
};

export const WithDivider = () => {
  return (
    <Stack divider={<Divider vertical />}>
      <Button key="1">Button</Button>
      <Button key="2">Button</Button>
      <Button key="3">Button</Button>
    </Stack>
  );
};

export const Wrap = () => {
  return (
    <Stack wrap>
      {new Array(100).fill(0).map((_, i) => (
        <Button key={i}>Button</Button>
      ))}
    </Stack>
  );
};

export const RowReverse = () => {
  return (
    <Stack divider={<Divider vertical />} direction="row-reverse">
      <Button key="1">Button 1</Button>
      <Button key="2">Button 2</Button>
      <Button key="3">Button 3</Button>
    </Stack>
  );
};
