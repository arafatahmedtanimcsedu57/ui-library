import Avatar from "../Avatar";
import "../styles/index.less";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
};

export const Default = () => {
  return <Avatar />;
};

export const WithImage = () => {
  return <Avatar src="https://avatars.githubusercontent.com/u/6412038" />;
};

export const WithCharacter = () => {
  return <Avatar children="A" />;
};

export const CircularAvatar = () => {
  return (
    <Avatar circle src="https://avatars.githubusercontent.com/u/6412038" />
  );
};
