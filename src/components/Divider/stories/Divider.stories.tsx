import Divider from "../Divider";

import "../styles/index.less";

export default {
  title: "Layout/Divider",
  component: Divider,
};

export const Default = () => <Divider />;
export const WithText = () => <Divider children="জন্ম নিবন্ধনের জন্য আবেদন" />;
export const Vertical = () => <Divider vertical children="নিবন্ধন" />;
export const VerticalDivider = () => (
  <>
    <a>জন্মনিবন্ধন</a>
    <Divider vertical as="div" />
    <a>মৃত্যুনিবন্ধন</a>
    <br />
    <br />
    <br />
    <a>জন্মনিবন্ধন</a>
    <Divider as="div" />
    <a>মৃত্যুনিবন্ধন</a>
  </>
);
