import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.(js|ts)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
