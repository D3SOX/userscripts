// ==UserScript==
// @name         GitHub notifications early-click fix
// @namespace    Violentmonkey Scripts
// @version      1.0.1
// @description  Prevent notification actions from opening GitHub's internal beta endpoints before the page is ready
// @author       D3SOX
// @license      GPL-3.0
// @match        https://github.com/notifications*
// @run-at       document-start
// @inject-into  content
// @grant        none
// @icon         https://icons.duckduckgo.com/ip3/github.com.ico
// @homepageURL  https://github.com/D3SOX/userscripts
// @supportURL   https://github.com/D3SOX/userscripts/issues
// @updateURL    https://rawcdn.githack.com/D3SOX/userscripts/refs/heads/master/github-notifications-early-click-fix.user.js
// @downloadURL  https://rawcdn.githack.com/D3SOX/userscripts/refs/heads/master/github-notifications-early-click-fix.user.js
// ==/UserScript==

(() => {
  "use strict";

  const notificationsPath = "/notifications";
  const betaPath = `${notificationsPath}/beta/`;

  if (location.pathname.startsWith(betaPath)) {
    location.replace(notificationsPath);
    return;
  }

  let pageReady = document.readyState !== "loading";

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      pageReady = true;
    },
    { once: true },
  );

  const blockPrematureNotificationAction = (event) => {
    if (pageReady) return;

    const betaForm = event
      .composedPath()
      .find(
        (target) =>
          target instanceof HTMLFormElement &&
          new URL(target.action).pathname.startsWith(betaPath),
      );

    if (!betaForm) return;

    event.preventDefault();
    event.stopImmediatePropagation();
  };

  document.addEventListener("click", blockPrematureNotificationAction, true);
  document.addEventListener("submit", blockPrematureNotificationAction, true);
})();
