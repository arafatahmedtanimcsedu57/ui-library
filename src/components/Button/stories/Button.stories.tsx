import AddOutlineIcon from "@rsuite/icons/AddOutline";

import Button from "../Button";

import "../styles/index.less";

export default {
  title: "General/Button",
  Component: Button,
};

export const Default = () => {
  return <Button>পূর্ববর্তী</Button>;
};

export const Appearance = () => {
  return (
    <>
      <Button appearance="ghost" style={{ width: "120px" }}>
        পূর্ববর্তী
      </Button>{" "}
      <Button appearance="primary" style={{ width: "120px" }}>
        পরবর্তী
      </Button>
    </>
  );
};

export const Size = () => {
  return (
    <>
      <Button
        size="md"
        appearance="subtle"
        style={{
          width: "142px",
          border: "1px solid #D0D5DD",
        }}
      >
        Cancel
      </Button>{" "}
      <Button size="md" appearance="primary" style={{ width: "142px" }}>
        Apply
      </Button>
    </>
  );
};

export const Color = () => {
  return (
    <>
      <Button
        block
        appearance="ghost"
        color="red"
        style={{
          background: "#fef3f2",
          border: "1px solid #FDA29B",
        }}
      >
        আমার কাছে এই ডকুমেন্টগুলি নেই
      </Button>{" "}
      <Button block appearance="primary" color="green">
        আমার কাছে এই ডকুমেন্টগুলি আছে
      </Button>
    </>
  );
};

export const Disabled = () => {
  return (
    <>
      <Button
        disabled
        size="md"
        appearance="subtle"
        style={{
          width: "142px",
          border: "1px solid #D0D5DD",
        }}
      >
        Cancel
      </Button>{" "}
      <Button
        disabled
        size="md"
        appearance="primary"
        style={{ width: "142px" }}
      >
        Apply
      </Button>
    </>
  );
};

export const Loading = () => {
  return (
    <>
      <Button
        loading
        size="md"
        appearance="subtle"
        style={{
          width: "142px",
          border: "1px solid #D0D5DD",
        }}
      >
        Cancel
      </Button>{" "}
      <Button loading size="md" appearance="primary" style={{ width: "142px" }}>
        Apply
      </Button>
    </>
  );
};

export const Active = () => {
  return (
    <>
      <Button
        active
        size="md"
        appearance="subtle"
        style={{
          width: "142px",
          border: "1px solid #D0D5DD",
        }}
      >
        Cancel
      </Button>{" "}
      <Button active size="md" appearance="primary" style={{ width: "142px" }}>
        Apply
      </Button>
    </>
  );
};

export const WithIcons = () => {
  return (
    <>
      <Button
        startIcon={<AddOutlineIcon />}
        size="md"
        appearance="subtle"
        style={{
          width: "142px",
          border: "1px solid #D0D5DD",
        }}
      >
        Cancel
      </Button>{" "}
      <Button
        startIcon={<AddOutlineIcon />}
        size="md"
        appearance="primary"
        style={{ width: "142px" }}
      >
        Apply
      </Button>
    </>
  );
};
