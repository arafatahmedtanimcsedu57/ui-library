import PencilSquareIcon from "@rsuite/icons/legacy/PencilSquare";

import Steps from "../Steps";

import "../styles/index.less";
import "../../Divider/styles/index.less";
import "../../Button/styles/index.less";

export default {
  title: "Navigation/Steps",
  component: Steps,
};

export const Default = () => {
  return (
    <Steps current={2}>
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
    </Steps>
  );
};

export const WithTitleAndDescription = () => {
  return (
    <Steps current={2}>
      <Steps.Item
        title="প্রথম অংশ"
        description="নিবন্ধনাধীন ব্যাক্তির পরিচিতি"
      />
      <Steps.Item
        title="দ্বিতীয় অংশ"
        description="ব্যাক্তির পিতামাতার পরিচিতি"
      />
      <Steps.Item
        title="তৃতীয় অংশ"
        description="ব্যাক্তির বর্তমান ও স্থায়ী ঠিকানা"
      />
      <Steps.Item title="চতুর্থ  অংশ" description="প্রত্যয়ন ও সংযুক্তি" />
    </Steps>
  );
};

export const WithCustomIcon = () => {
  return (
    <Steps current={2}>
      <Steps.Item
        icon={<PencilSquareIcon />}
        title="প্রথম অংশ"
        description="নিবন্ধনাধীন ব্যাক্তির পরিচিতি"
      />
      <Steps.Item
        icon={<PencilSquareIcon />}
        title="দ্বিতীয় অংশ"
        description="ব্যাক্তির পিতামাতার পরিচিতি"
      />
      <Steps.Item
        icon={<PencilSquareIcon />}
        title="তৃতীয় অংশ"
        description="ব্যাক্তির বর্তমান ও স্থায়ী ঠিকানা"
      />
      <Steps.Item
        icon={<PencilSquareIcon />}
        title="চতুর্থ  অংশ"
        description="প্রত্যয়ন ও সংযুক্তি"
      />
    </Steps>
  );
};

export const Small = () => {
  return (
    <Steps current={2} small>
      <Steps.Item
        title="প্রথম অংশ"
        description="নিবন্ধনাধীন ব্যাক্তির পরিচিতি"
      />
      <Steps.Item
        title="দ্বিতীয় অংশ"
        description="ব্যাক্তির পিতামাতার পরিচিতি"
      />
      <Steps.Item
        title="তৃতীয় অংশ"
        description="ব্যাক্তির বর্তমান ও স্থায়ী ঠিকানা"
      />
      <Steps.Item title="চতুর্থ  অংশ" description="প্রত্যয়ন ও সংযুক্তি" />
    </Steps>
  );
};

export const Vertical = () => {
  return (
    <Steps current={2} small vertical>
      <Steps.Item
        title="প্রথম অংশ"
        description="নিবন্ধনাধীন ব্যাক্তির পরিচিতি"
      />
      <Steps.Item
        title="দ্বিতীয় অংশ"
        description="ব্যাক্তির পিতামাতার পরিচিতি"
      />
      <Steps.Item
        title="তৃতীয় অংশ"
        description="ব্যাক্তির বর্তমান ও স্থায়ী ঠিকানা"
      />
      <Steps.Item title="চতুর্থ  অংশ" description="প্রত্যয়ন ও সংযুক্তি" />
    </Steps>
  );
};

export const Error = () => {
  return (
    <Steps current={2} small vertical currentStatus="error">
      <Steps.Item
        title="প্রথম অংশ"
        description="নিবন্ধনাধীন ব্যাক্তির পরিচিতি"
      />
      <Steps.Item
        title="দ্বিতীয় অংশ"
        description="ব্যাক্তির পিতামাতার পরিচিতি"
      />
      <Steps.Item
        title="তৃতীয় অংশ"
        description="ব্যাক্তির বর্তমান ও স্থায়ী ঠিকানা"
      />
      <Steps.Item title="চতুর্থ  অংশ" description="প্রত্যয়ন ও সংযুক্তি" />
    </Steps>
  );
};

// export const Title: Story = {
//   args: {
//     ...defaultArgs,
//     children: (
//       <>
//         <Steps.Item title="Finished" />
//         <Steps.Item title="In Progress" />
//         <Steps.Item title="Waiting" />
//         <Steps.Item title="Waiting" />
//       </>
//     ),
//   },
// };

// export const Description: Story = {
//   args: {
//     ...defaultArgs,
//     children: (
//       <>
//         <Steps.Item title="Finished" description="This is a description." />
//         <Steps.Item title="In Progress" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//       </>
//     ),
//   },
// };

// export const Vertical: Story = {
//   args: {
//     ...defaultArgs,
//     vertical: true,
//     children: (
//       <>
//         <Steps.Item title="Finished" description="This is a description." />
//         <Steps.Item title="In Progress" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//       </>
//     ),
//   },
// };

// export const Small: Story = {
//   args: {
//     ...defaultArgs,
//     small: true,
//     children: (
//       <>
//         <Steps.Item title="Finished" description="This is a description." />
//         <Steps.Item title="In Progress" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//       </>
//     ),
//   },
// };

// export const ErrorStatus: Story = {
//   args: {
//     ...defaultArgs,
//     currentStatus: "error",
//     children: (
//       <>
//         <Steps.Item title="Finished" description="This is a description." />
//         <Steps.Item title="In Progress" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//         <Steps.Item title="Waiting" description="This is a description." />
//       </>
//     ),
//   },
// };

// export const CustomIcon: Story = {
//   args: {
//     ...defaultArgs,
//     children: (
//       <>
//         <Steps.Item title="Finished" icon={<PencilSquareIcon />} />
//         <Steps.Item title="In Progress" icon={<BookIcon />} />
//         <Steps.Item title="Waiting" icon={<WechatIcon />} />
//         <Steps.Item title="Waiting" icon={<SteamSquareIcon />} />
//       </>
//     ),
//   },
// };
