import React from "react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  header: "I Can Hazz Cats",
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
