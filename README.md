# D3SOX's Userscripts

This repository hosts various userscripts that I needed for very specific use-cases and I couldn't find an existing script for.

## How-to

You need a userscript manager of choice for your browser (I recommend [Violentmonkey](https://violentmonkey.github.io/get-it/) or if you're using Safari [Userscripts App](https://apps.apple.com/app/userscripts/id1463298887))

> [!TIP]
> If you're using Google Chrome and can't install Violentmonkey, consider switching to [Helium](https://helium.computer/) or another Chromium-based browser that still supports Manifest V2. As a last resort [Brave](https://brave.com/) also works but I recommend disabling its built-in crypto, ads, and tracking features during setup.

> [!TIP]
> If you are on Android: [Cromite](https://github.com/uazo/cromite) has native userscripts and even experimental addons support.
> I haven't tested it but it should work if you set it to use the desktop site there too

Then you can just press on the Install link for the script you want

## Change Bell on All Channels

A userscript for YouTube that batch changes notification settings for all subscribed channels.

[Install](https://rawcdn.githack.com/D3SOX/userscripts/refs/heads/master/change-bell-all-channels.user.js)

### Features

- Scans all subscribed channels on the YouTube channels feed page
- Identifies channels with "all notifications" enabled
- Batch changes notification settings to either "None" or "Personalized"
- Automatically scrolls to load all subscriptions

### Usage

1. Navigate to [`youtube.com/feed/channels`](https://youtube.com/feed/channels)
2. Open the userscript manager menu and select "Run script"
3. Wait for it to scroll to the bottom of the page and load all subscriptions (this may take a while depending on the amount of channels you are subscribed to)
4. Choose to turn off notifications or set to personalized for all channels
