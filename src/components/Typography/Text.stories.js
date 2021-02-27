import React from "react";

import { Text } from "./index";

export default {
  title: "Typography",
  component: Text,
};

const Template = (args) => <Text {...args}>Hello World</Text>;

export const NormalText = Template.bind({});
