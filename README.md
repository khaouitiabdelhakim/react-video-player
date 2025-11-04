# React Video Player Component

A modern, fully-featured video player component for React/Next.js applications with custom controls, playback speed adjustment, and a beautiful UI.

![Video Player Screenshot](./public/screenshot.png)

## Features

✨ **Modern UI** - Clean, minimalist design with white icons on transparent black backgrounds
🎮 **Custom Controls** - Play/Pause, Skip forward/backward, Volume control, Fullscreen
⚡ **Playback Speed** - Adjustable speed (0.5x, 1x, 1.5x, 2x)
🎯 **Seekable Timeline** - Click or drag to navigate through the video
🔊 **Volume Control** - Expandable volume slider with visual feedback
📱 **Responsive** - Works on all screen sizes
⌨️ **Keyboard Support** - Control playback with keyboard shortcuts
🖱️ **Auto-hiding Controls** - Controls fade out during playback for immersive viewing
🎬 **Poster Support** - Display custom thumbnail before playback
🔄 **Double-click Fullscreen** - Exit fullscreen with double-click

## Installation

```bash
npm install @khaouitiabdelhakim/react-video-player
# or
yarn add @khaouitiabdelhakim/react-video-player
# or
pnpm add @khaouitiabdelhakim/react-video-player
```

## Dependencies

This component requires the following peer dependencies:

```bash
npm install react react-dom lucide-react
```

## Usage

### Basic Example

```jsx
'use client'; // Required for Next.js App Router

import VideoPlayer from '@khaouitiabdelhakim/react-video-player';

export default function MyComponent() {
  return (
    <VideoPlayer
      src="/path/to/video.mp4"
      poster="/path/to/poster.jpg"
      controls={true}
      className="rounded-lg shadow-2xl"
    />
  );
}
```

### With Event Callbacks

```jsx
'use client';

import VideoPlayer from '@khaouitiabdelhakim/react-video-player';

export default function MyComponent() {
  const handlePlay = () => {
    console.log('Video started playing');
  };

  const handlePause = () => {
    console.log('Video paused');
  };

  const handleEnded = () => {
    console.log('Video ended');
  };

  const handleTimeUpdate = (currentTime) => {
    console.log('Current time:', currentTime);
  };

  return (
    <VideoPlayer
      src="/video.mp4"
      poster="/poster.jpg"
      controls={true}
      autoPlay={false}
      loop={false}
      muted={false}
      width="100%"
      height="auto"
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
      onTimeUpdate={handleTimeUpdate}
      className="rounded-lg overflow-hidden shadow-2xl"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | URL of the video file |
| `poster` | `string` | `undefined` | URL of the poster/thumbnail image |
| `autoPlay` | `boolean` | `false` | Whether to start playing automatically |
| `loop` | `boolean` | `false` | Whether to loop the video |
| `muted` | `boolean` | `false` | Whether to mute the audio |
| `controls` | `boolean` | `true` | Whether to show custom controls |
| `width` | `string \| number` | `'100%'` | Width of the player |
| `height` | `string \| number` | `'auto'` | Height of the player |
| `onPlay` | `() => void` | `undefined` | Callback when video starts playing |
| `onPause` | `() => void` | `undefined` | Callback when video is paused |
| `onEnded` | `() => void` | `undefined` | Callback when video ends |
| `onTimeUpdate` | `(currentTime: number) => void` | `undefined` | Callback on time update |
| `className` | `string` | `''` | Additional CSS classes |

## Styling

The component uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project.

### Custom Styling

You can customize the appearance by:

1. **Using the className prop** - Add custom classes to the container
2. **Overriding Tailwind classes** - Use Tailwind's layer system
3. **Modifying the component** - Fork and customize the source

Example with custom styling:

```jsx
<VideoPlayer
  src="/video.mp4"
  className="rounded-xl border-4 border-blue-500 shadow-2xl"
/>
```

## Keyboard Shortcuts

- **Space** - Play/Pause
- **Click** - Play/Pause
- **Double-click** - Exit fullscreen
- **Drag timeline** - Seek to position

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## TypeScript Support

This component is written in TypeScript and includes full type definitions.

```typescript
import VideoPlayer from '@khaouitiabdelhakim/react-video-player';
import type { VideoPlayerProps } from '@khaouitiabdelhakim/react-video-player';
```

## Next.js Integration

For Next.js App Router (v13+), make sure to use the `'use client'` directive:

```jsx
'use client';

import VideoPlayer from '@khaouitiabdelhakim/react-video-player';

export default function VideoPage() {
  return <VideoPlayer src="/video.mp4" />;
}
```

For Next.js Pages Router, no special configuration is needed.

## Common Issues

### Video not loading
- Ensure the video path is correct
- For Next.js, place videos in the `public` folder and use `/video.mp4` path
- Check browser console for CORS or network errors

### Controls not showing
- Make sure `controls={true}` is set
- Check if controls are hidden (they auto-hide during playback - hover to show)

### Styling issues
- Ensure Tailwind CSS is properly configured
- Check that your build process includes the component's styles

## Author

KHAOUITI ABDELHAKIM

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by KHAOUITI ABDELHAKIM
