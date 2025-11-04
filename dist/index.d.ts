import React from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    width?: string | number;
    height?: string | number;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onTimeUpdate?: (currentTime: number) => void;
    className?: string;
}
declare const VideoPlayer: React.FC<VideoPlayerProps>;

export { type VideoPlayerProps, VideoPlayer as default };
