import { TabMover } from "./tabMover";

const tabMover = new TabMover();

browser.menus.create({
  contexts: ["tab"],
  onclick: (_, tab) => tabMover.moveTabOrHighlightedTabs(tab, false),
  title: "Move to the prev &window",
});
browser.menus.create({
  contexts: ["tab"],
  onclick: (_, tab) => tabMover.moveTabOrHighlightedTabs(tab, true),
  title: "Move to the next &window",
});
browser.browserAction.onClicked.addListener((tab) => tabMover.moveTabOrHighlightedTabs(tab, true));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
browser.commands.onCommand.addListener((_, tab) => tabMover.moveTabOrHighlightedTabs(tab, true));
