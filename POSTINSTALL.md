### Verify the installation

1. Trigger a test crash in your app (e.g., using `FirebaseCrashlytics.instance.crash()` or `fatalError()`)
2. Wait a few minutes for Crashlytics to process the crash
3. Check your ReleaseTag Diagnostics dashboard for the new crash entry

### Reconfiguration

To update the webhook URL or secret:

1. Go to the [Firebase Extensions dashboard](https://console.firebase.google.com/project/_/extensions)
2. Find the **Crashlytics Webhook Forwarder** extension
3. Click **Manage** > **Reconfigure extension**
4. Update the values and save

### Troubleshooting

- **Alerts not appearing in ReleaseTag**: Check the Cloud Functions logs in the Firebase Console for error messages. Verify that the webhook URL and secret are correct.
- **Authentication errors (401)**: The webhook secret may have been regenerated in ReleaseTag. Reconfigure the extension with the new secret.
- **Extension not triggering**: Ensure Crashlytics is enabled and receiving crashes. The extension only processes *new* alerts, not historical data.

### Monitoring

View function execution logs in the [Firebase Console](https://console.firebase.google.com/project/_/functions/logs) to monitor webhook delivery status.
