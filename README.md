# teams-bio-xmas

A GitHub action to update your Office 365 About Me text to the number of days until the Christmas holidays.

## Setup in Actions

1. Fork this repo
2. Get your Microsoft Graph API token. The easiest way to do this is to go to [the graph explorer](https://developer.microsoft.com/en-us/graph/graph-explorer), login, then click the access token tab. Copy the token.
3. Paste your Microsoft Graph API token with the name `TEAMS_TOKEN` under repository settings > secrets > actions > new secret
4. Profit

NOTE: If you use Graph Explorer to get your access token, make sure not to sign out of it, or your token will be invalidated. You may need to update the token every so often. You'll know the token expires when the action errors and references status code 401.

## Default Schedule

The default schedule is to run every day at 5:00 AM UTC. You can change this by editing the workflow file's cron schedule.

## Defining a token in Development Mode

With `NODE_ENV` not set to production, you can use the `.env` file to hold the secret. Add a line with the content `TEAMS_TOKEN="token here"`, repalcing `token here` with the token. You can also set the token in regular environment variables. Please ensure you install dev dependencies with `npm install` (as opposed to `npm install --production` or `npm ci`) before running the script locally (ensure `NODE_ENV` is not set to production). In using the action, `NODE_ENV` is set to production, so `.env` is ignored.

## Setting Teams Status Message instead of Office 365 About Me

This feature is planned, however the Microsoft Graph API doesn't have an endpoint for getting and setting status messages. Check this [user voice](https://feedbackportal.microsoft.com/feedback/idea/a2ddf203-6b48-ec11-a819-000d3a0dbb29) for updates. There is a client side endpoint via Teams, but that access token expires after an hour and is not intended for automation.