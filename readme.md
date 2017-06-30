# ✨ Let's Talk Sockets: Building interactive art and installations with Socket.IO ✨

## What is this?

I gave a talk at [We RISE 2017](https://werise.tech/) in Atlanta, GA and this was my final demo.

My talk was a quickstart of Socket.IO

## Usage

This app consists of a [viewer](https://werise-love.glitch.me/viewer), which receives events and data based on input from [controls](https://werise-love.glitch.me) clients.

Open 1+ Controls and the Viewer. Tap or click anywhere in a Controls client to trigger responsive animations in the Viewer :)

With a Controls client open, you will also see how many other Controls are connected. And, yes, you're all talking to the same Viewer.

## Interactions

- **Taps** in the Controls create soft circles in the same relative positions in the Viewer.
- **More taps at any one moment** increases the saturation of the Viewer background color.
- **Number of Controls connected** hue-shifts the background color of the Viewer.