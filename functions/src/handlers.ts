import type { CrashlyticsEvent, Issue } from "firebase-functions/v2/alerts/crashlytics";

interface PayloadWithIssue {
  issue: Issue;
}

export async function forwardToWebhook(
  alertType: string,
  event: CrashlyticsEvent<PayloadWithIssue>
): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL;
  const webhookSecret = process.env.WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Missing WEBHOOK_URL or WEBHOOK_SECRET environment variables");
    return;
  }

  const issue = event.data.payload.issue;

  const body = {
    alertType,
    appId: event.appId,
    payload: {
      issue: {
        id: issue.id,
        title: issue.title,
        subtitle: issue.subtitle,
        appVersion: issue.appVersion,
      },
    },
  };

  console.log(`Forwarding ${alertType} alert for app ${event.appId} to webhook`);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${webhookSecret}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Webhook responded with ${response.status}: ${text}`);
    throw new Error(`Webhook request failed with status ${response.status}`);
  }

  console.log(`Successfully forwarded ${alertType} alert`);
}
