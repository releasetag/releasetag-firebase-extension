import {
  onNewFatalIssuePublished,
  onNewNonfatalIssuePublished,
  onNewAnrIssuePublished,
  onRegressionAlertPublished,
} from "firebase-functions/v2/alerts/crashlytics";
import { forwardToWebhook } from "./handlers";

export const onNewFatalIssue = onNewFatalIssuePublished(async (event) => {
  await forwardToWebhook("crashlytics.newFatalIssue", event);
});

export const onNewNonfatalIssue = onNewNonfatalIssuePublished(async (event) => {
  await forwardToWebhook("crashlytics.newNonfatalIssue", event);
});

export const onNewAnrIssue = onNewAnrIssuePublished(async (event) => {
  await forwardToWebhook("crashlytics.newAnrIssue", event);
});

export const onRegressionAlert = onRegressionAlertPublished(async (event) => {
  await forwardToWebhook("crashlytics.regression", event);
});
