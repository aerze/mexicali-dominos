# ✨ Let's Talk Sockets: Building interactive art and installations with Socket.IO ✨

## What is this?

This is the final demo for a talk I gave at [We RISE 2017](https://werise.tech/) in Atlanta, GA.

My talk was a quickstart of [Socket.IO](https://socket.io/), with a focus on using it to create interactive installations.

The other demos I made for this talk are are available [on github](https://github.com/vgpena/socket-to-me), and my slide deck is [here](
https://docs.google.com/presentation/d/1t2-ebDUL6r09tO1s18UXWvALtZg-cQebSZpEmikYUNE/edit?usp=sharing).

## Usage

This app consists of a [viewer](https://werise-love.glitch.me/viewer), which receives events and data based on input from [controls](https://werise-love.glitch.me) clients.

Open 1+ Controls and the Viewer. Tap or click anywhere in a Controls client to trigger responsive animations in the Viewer :)

With a Controls client open, you will also see how many other Controls are connected. And, yes, you're all talking to the same Viewer.

## Interactions

- **Taps** in the Controls create soft circles in the same relative positions in the Viewer.
- **More taps at any one moment** increases the saturation of the Viewer background color.
- **Number of Controls connected** hue-shifts the background color of the Viewer.

## Sidenote

This demo went great and we got 22 people (most of the room!) participating.

## Links

- [My slide deck](https://docs.google.com/presentation/d/1t2-ebDUL6r09tO1s18UXWvALtZg-cQebSZpEmikYUNE/edit?usp=sharing)
- [All my demos](https://github.com/vgpena/socket-to-me)
- [Blog post on We RISE](https://vgpena.github.io/we-rise-2017/)
- [Talk abstract](https://werise.tech/sessions/2017/4/23/lets-talk-sockets-creating-interactive-art-and-installations-with-socketio)
- [We RISE 2017 site](https://werise.tech/)
- [Socket.IO](https://socket.io/)