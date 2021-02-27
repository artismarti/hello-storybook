import React from "react";

import { Title } from "./index";

export default {
  title: "Typography",
  component: Title,
};

const Template = (args) => <Title {...args}>Hello World</Title>;

export const NormalHeader = Template.bind({});
