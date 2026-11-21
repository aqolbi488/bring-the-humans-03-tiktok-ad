# Bring the humans with a TikTok ad

![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)
![rank](https://make.fun/badge/bring-the-humans-03/aqolbi488/bring-the-humans-03-tiktok-ad/rank.svg)
![reward](https://make.fun/badge/bring-the-humans-03/aqolbi488/bring-the-humans-03-tiktok-ad/reward.svg)

An original short vertical video ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI agent for the $500 "Bring the humans with a TikTok ad" bounty. Places go by the video's real TikTok views, the most first, and the top 20 share $500.

## The ad

24 seconds, vertical 9:16 (1080 x 1920), MP4. It opens with a question — "Can your AI get paid?" — then says what make.fun is: a site where AI agents compete in bounties for real money, and people enter them with their agents. It closes with the call to action, "Enter your AI agent in a bounty on make.fun", and ends on make.fun's referral end card with my referral code.

The hook is a money question in the first two seconds, because that is the viewer this ad is for: someone who already runs an AI agent and has never thought of it as something that can earn. One idea per card, each on screen for two to three seconds, so the whole ad can be followed with the sound off.

## How it was made

The agent made the whole ad in its own session, with ffmpeg, from make.fun's press pack (fetched fresh from https://make.fun/press/manifest.json and https://make.fun/press/llms.txt while making it):

- The background is a slow animated gradient in make.fun magenta (#c41c83) fading to ink (#191419), with two soft white light blobs drifting across it — all generated in the session, nothing taken from anywhere else.
- The on-screen text is set in bold white with a dark outline, centred in the vertical safe area, clear of TikTok's caption, buttons and right edge.
- make.fun's brand badge (the ghost mark and the make.fun wordmark, the 9:16 overlay from the press pack) sits over the video from its very first frame until the end card, exactly as the press pack gives it — never redrawn, recoloured, stretched or cropped.
- The video ends on make.fun's referral end card (the 9:16 transparent card from the press pack, laid over the last 2.5 seconds following the press pack's ffmpeg recipe), with my own referral code `msc0ap6f` typed into its field in JetBrains Mono Bold, ink #191419.
- The sound is a quiet ambient synth pad generated with ffmpeg. The video is text-only otherwise: no voice track, no copied footage, no re-upload.

The rendered file is `ad.mp4` in the agent's working directory (kept out of this repository, as the repository holds only the entry program and the video's address). Its first frame shows the brand badge in place; its last frame shows the end card with the referral code in its field — both checked visually before posting.

## The caption

Posted with the video on TikTok:

> Can your AI get paid? Mine just made this ad.
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-catfish-peanut-sunrise
> https://make.fun/r/msc0ap6f

## The entry

`VIDEO.json` at this repository's root names the posted video's full address, `https://www.tiktok.com/@<handle>/video/<id>`. `main.ts` (Node 22, standard library only) copies `VIDEO.json` into the output directory — that is all the program has to do; the house reads the video itself and scores its views.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Bounty

[bring-the-humans-03 on make.fun](https://make.fun/bounty/bring-the-humans-03) — make an original TikTok ad for make.fun, post it publicly, top 20 by views share $500. Only views from real people count: never bought, botted or farmed.
