import React from "react";

import { SubTitle } from "./index";

export default {
  title: "Typography",
  component: SubTitle,
};

const Template = (args) => <SubTitle {...args}>Hello World</SubTitle>;

export const NormalSubTitle = Template.bind({});
