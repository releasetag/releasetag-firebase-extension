# ReleaseTag Connector

A Firebase Extension that connects Crashlytics to [ReleaseTag](https://releasetag.com), forwarding crash alerts to your Diagnostics dashboard alongside customer feedback and app reviews.

## Supported Alert Types

- **Fatal crashes** — new crash issues detected by Crashlytics
- **Non-fatal errors** — new non-fatal issues
- **ANR** — Application Not Responding issues (Android)
- **Regressions** — previously resolved issues that have resurfaced

## Prerequisites

- A [ReleaseTag](https://releasetag.com) account with admin or owner access to your project
- A Firebase project with Crashlytics enabled
- Firebase Blaze (pay-as-you-go) plan

## Installation

### 1. Generate webhook credentials in ReleaseTag

1. Go to **Project Settings** > **Integrations**
2. Find the **Firebase Crashlytics** section
3. Click **Enable Crashlytics Webhook**
4. Copy the **Webhook URL** and **Secret**

### 2. Install the extension

```bash
firebase ext:install releasetag/releasetag --project=YOUR_PROJECT_ID
```

When prompted, provide:
- **Webhook URL** — the URL from ReleaseTag
- **Webhook Secret** — the secret from ReleaseTag
- **Cloud Functions location** — choose the region closest to your users

### 3. Verify

Trigger a test crash in your app and check the ReleaseTag Diagnostics dashboard after a few minutes.

## Configuration

| Parameter | Description |
|-----------|-------------|
| Webhook URL | The ReleaseTag webhook endpoint for your project |
| Webhook Secret | Bearer token used for webhook authentication |
| Cloud Functions location | Region where the extension functions are deployed |

## Reconfiguration

To update the webhook URL or secret after installation:

```bash
firebase ext:configure releasetag --project=YOUR_PROJECT_ID
```

Or use the [Firebase Console](https://console.firebase.google.com) > Extensions > Manage > Reconfigure.

## Uninstalling

```bash
firebase ext:uninstall releasetag --project=YOUR_PROJECT_ID
```

## How It Works

The extension deploys 4 Cloud Functions, each listening to a specific Crashlytics alert type via Eventarc. When an alert fires, the function extracts the issue details (ID, title, subtitle, app version) and POSTs them to your ReleaseTag webhook with Bearer token authentication.

## Billing

This extension uses Cloud Functions and Eventarc, which may incur charges on the Blaze plan. Each function uses 256MB of memory. See [Firebase pricing](https://firebase.google.com/pricing) for details.

## License

Apache-2.0
