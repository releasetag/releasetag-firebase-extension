Use this extension to forward Firebase Crashlytics alerts to your ReleaseTag project via webhook.

When Crashlytics detects a new crash, non-fatal error, ANR, or regression in your app, this extension automatically sends the alert details to your ReleaseTag webhook endpoint, where they appear in your Diagnostics dashboard.

### Prerequisites

- A [ReleaseTag](https://releasetag.com) account with a project configured
- Firebase Crashlytics enabled in your Firebase project
- Your Firebase project on the Blaze (pay-as-you-go) plan

### Setup

Before installing this extension, generate a webhook URL and secret in your ReleaseTag project settings under **Integrations > Firebase Crashlytics**.

### Billing

This extension uses Cloud Functions and Eventarc, which may incur charges on the Blaze plan. See [Firebase pricing](https://firebase.google.com/pricing) for details.
