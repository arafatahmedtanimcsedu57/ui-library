import Text from "../Text";

import "../styles/index.less";
import "../../Stack/styles/index.less";

export default {
  title: "General/Text",
  component: Text,
};

export const Default = () => <Text>জন্ম নিবন্ধন আবেদন সম্পন্ন করার জন্য নিম্নলিখিত ডকুমেন্টগুলো প্রয়োজন।</Text>;

export const CommonModalHeader = () => <Text size="xl" weight="semibold">অ্যাটাচমেন্ট অ্যাভেইলেবিলিটি চেক</Text>

export const WarningText = () => {
    return (
      <Text color="orange" weight="medium">
        আবেদন পত্রটি সাবমিট করার পূর্বে সকল তথ্য ঠিক আছে কিনা দেখে নিন ও আবেদনকারীকে দেখান, মনে রাখবেন একবার সাবমিট করা হয়ে গেলে আবেদনপত্রটিতে আর এডিট করার সুযোগ থাকবে না
      </Text>
    );
};

export const PrimaryHeading = () => {
  return(
    <Text color="violet" weight="semibold">
      জন্ম নিবন্ধনের জন্য আবেদন
    </Text>
  )
}

export const SubHeading = () => {
  return(
    <Text size="md" color="violet" weight="regular">
      (প্রত্যয়ন)
    </Text>
  )
}

export const SecondaryHeading = () => {
  return(
    <Text size="14" weight="semibold">
      প্রথম অংশ: নিবন্ধনাধীন ব্যাক্তির পরিচিতি    
    </Text>
  )
}

export const Muted = () => {
  return(
    <Text size="14" muted weight="regular">
      আবেদনাধীন ব্যক্তির সহিত সম্পর্কঃ *   
    </Text>
  )
}

export const Title = () => {
  return(
    <Text size="14" muted weight="medium">
      আবেদনাধীন ব্যক্তির সহিত সম্পর্কঃ *   
    </Text>
  )
}

