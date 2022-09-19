# teams-bio-xmas

Updates your Office 365 about me text to the number of days until Christmas.

## Setup in Actions

1. Fork this repo
2. Get your Microsoft Graph API token. The easiest way to do this is to go to [the graph explorer](https://developer.microsoft.com/en-us/graph/graph-explorer), login, then click the access token tab. Copy the token.
3. Paste your Microsoft Graph API token with the name `TEAMS_TOKEN` under repository settings > secrets > actions > new secret
4. Profit

NOTE: If you use Graph Explorer to get your access token, make sure not to sign out of it, or your token will be invalidated. You may need to update the token every so often. You'll know the token expires when the action errors and references status code 401.

## Default Schedule

The default schedule is to run every day at 5:00 AM UTC. You can change this by editing the workflow file's cron schedule.