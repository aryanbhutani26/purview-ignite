import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { 
  Cross, 
  Package, 
  Search, 
  Shield,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X
} from "lucide-react";

const smartSolutions = [
  {
    icon: <Cross className="w-6 h-6" />,
    title: "SmartCare",
    description: "AR smart glass solution for medical telepresence, remote clinical support, and immersive medical education with real-time captioning.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    features: ["Medical Telepresence", "Real-time Captioning", "Multilingual Translation"],
    videoUrl: null // No video available
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "SmartPick",
    description: "Revolutionizes warehouse operations with AR smart glasses for vision-based picking, packaging, and inventory management.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    features: ["Vision-based Picking", "RFID Integration", "Real-time Updates"],
    videoUrl: null // No video available
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SmartInspect",
    description: "AR-powered inspection tool with live collaboration, remote expert support, and multilingual translation capabilities.",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    features: ["Live Collaboration", "Remote Expertise", "Multilingual Support"],
    videoUrl: "/videos/SmartInspect.mp4" // Video available
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SmartSurveillance",
    description: "Advanced AR surveillance with head movement control, AI threat detection, and drone integration capabilities.",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    features: ["Head Movement Control", "AI Threat Detection", "Drone Integration"],
    videoUrl: null // No video available
  }
];

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, title, onClose }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePlayPause = () => {
    const video = document.getElementById('solution-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById('solution-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      if (!isFullscreen) {
        videoContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        id="video-container"
        className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <video
          id="solution-video"
          className="w-full h-full object-cover"
          src={videoUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={false}
        />

        {/* Always Visible Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-200 shadow-lg"
          title="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Custom Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">{title}</h3>
            {/* Removed duplicate close button from here */}
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-primary transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={handleMuteToggle}
                className="text-white hover:text-primary transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-primary transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VideoPlaceholder = ({ title, onClose }: { title: string; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}
  >
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden max-w-2xl w-full aspect-video flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Always Visible Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-200 shadow-lg"
        title="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="text-center p-8">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">
          Video is not currently available for this platform and will be updated soon.
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export const IndustrialSmartSolutions = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState<string | null>(null);

  const handleVideoClick = (solution: typeof smartSolutions[0]) => {
    if (solution.videoUrl) {
      setSelectedVideo({ url: solution.videoUrl, title: solution.title });
    } else {
      setShowPlaceholder(solution.title);
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setShowPlaceholder(null);
  };

  return (
    <>
      <section id="smart-solutions" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-gray-500/20 to-zinc-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-transparent to-zinc-500/5" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <FadeInText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                SMART SOLUTIONS PLATFORM
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Smart Solutions
                <br />
                <span className="text-gradient">Platform</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive suite of AR-powered solutions designed to transform 
                industries and enhance operational efficiency across various sectors.
              </p>
            </FadeInText>
          </div>

          {/* Solutions Grid - Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleVideoClick(solution)}
              >
                <GlassCard className={`p-6 h-full bg-gradient-to-br ${solution.gradient} group-hover:shadow-xl transition-all duration-300 hover:scale-105`} glowColor="mixed">
                  {/* Icon and Video Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{solution.icon}</div>
                    </div>
                    {/* Video Play Button */}
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Play className="w-4 h-4 text-primary ml-0.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                      {solution.description}
                    </p>

                    {/* Features - Compact */}
                    <div className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-primary/80"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Video Status Indicator */}
                  <div className="mt-auto">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      solution.videoUrl 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                        : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                    }`}>
                      {solution.videoUrl ? 'Demo Video Available' : 'Coming Soon'}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-0.5" />
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="100" cy="0" r="40" fill="url(#cornerGradient)" />
                      <defs>
                        <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          onClose={closeVideo}
        />
      )}

      {/* Video Placeholder Modal */}
      {showPlaceholder && (
        <VideoPlaceholder title={showPlaceholder} onClose={closeVideo} />
      )}
    </>
  );
};