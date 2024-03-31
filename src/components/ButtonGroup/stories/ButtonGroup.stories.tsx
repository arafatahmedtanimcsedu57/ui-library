import ButtonGroup from "../ButtonGroup";
import Button from "../../Button";

import "../styles/index.less";

export default {
  title: "General/ButtonGroup",
  component: ButtonGroup,
};

export const Default = () => {
  return (
    <ButtonGroup>
      <Button appearance="ghost" key="1">
        পূর্ববর্তী
      </Button>
      <Button appearance="primary" key="2">
        পরবর্তী
      </Button>
    </ButtonGroup>
  );
};

export const InVertical = () => {
  return (
    <ButtonGroup vertical>
      <Button appearance="ghost" key="1">
        পূর্ববর্তী
      </Button>
      <Button appearance="primary" key="2">
        পরবর্তী
      </Button>
    </ButtonGroup>
  );
};

export const Block = () => {
  return (
    <ButtonGroup block>
      <Button appearance="ghost" key="1">
        পূর্ববর্তী
      </Button>
      <Button appearance="primary" key="2">
        পরবর্তী
      </Button>
    </ButtonGroup>
  );
};

export const Justified = () => {
  return (
    <ButtonGroup justified>
      <Button appearance="ghost" key="1">
        পূর্ববর্তী
      </Button>
      <Button appearance="primary" key="2">
        পরবর্তী
      </Button>
    </ButtonGroup>
  );
};
