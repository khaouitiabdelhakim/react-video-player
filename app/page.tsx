'use client';

import VideoPlayer from "./components/VideoPlayer";

// Demo usage
export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">React Video Player</h1>
        
        <VideoPlayer
          src="/video.mp4"
          poster="/banner.jpg"
          controls={true}
          onTimeUpdate={() => console.log('Video time updated')}
          className="rounded-lg overflow-hidden shadow-2xl"
        />

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Features</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Play/Pause with spacebar or click</li>
            <li>• Custom progress bar with seek functionality</li>
            <li>• Volume control with mute toggle</li>
            <li>• Skip forward/backward 10 seconds</li>
            <li>• Fullscreen support</li>
            <li>• Auto-hiding controls (hover to show)</li>
            <li>• Callback props for events</li>
            <li>• Customizable styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}