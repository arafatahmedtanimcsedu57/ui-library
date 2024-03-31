import Avatar from "../../Avatar";
import AvatarGroup from "../AvatarGroup";

import "../styles/index.less";
import "../../Avatar/styles/index.less";

export default {
  title: "Data Display/AvatarGroup",
  component: AvatarGroup,
};

export const Default = () => {
  return (
    <AvatarGroup>
      <Avatar
        key="1"
        circle
        src="https://avatars.githubusercontent.com/u/6412038"
      />
      <Avatar
        key="2"
        circle
        src="https://avatars.githubusercontent.com/u/6128107"
      />
      <Avatar
        key="3"
        circle
        src="https://avatars.githubusercontent.com/u/139426"
      />
    </AvatarGroup>
  );
};

export const WithSpacing = () => {
  return (
    <AvatarGroup spacing={10}>
      <Avatar
        key="1"
        circle
        src="https://avatars.githubusercontent.com/u/6412038"
      />
      <Avatar
        key="2"
        circle
        src="https://avatars.githubusercontent.com/u/6128107"
      />
      <Avatar
        key="3"
        circle
        src="https://avatars.githubusercontent.com/u/139426"
      />
    </AvatarGroup>
  );
};

export const InStack = () => {
  return (
    <AvatarGroup stack>
      <Avatar
        key="1"
        circle
        src="https://avatars.githubusercontent.com/u/6412038"
      />
      <Avatar
        key="2"
        circle
        src="https://avatars.githubusercontent.com/u/6128107"
      />
      <Avatar
        key="3"
        circle
        src="https://avatars.githubusercontent.com/u/139426"
      />
    </AvatarGroup>
  );
};
