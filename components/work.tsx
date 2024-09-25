import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

export default function Work() {
  const videos = [
    {
      title: "Iron 5",
      thumbnail: "/assets/driving1.png",
      videoId: "/assets/driving1.mp4",
    },
    {
      title: "52º Wedge",
      thumbnail: "/assets/driving2.png",
      videoId: "/assets/driving2.mp4",
    },
    {
      title: "Par 3 - 190m",
      thumbnail: "/assets/driving3.png",
      videoId: "/assets/driving3.mp4",
    },
    {
      title: "Iron 7",
      thumbnail: "/assets/driving4.png",
      videoId: "/assets/driving4.mp4",
    },
  ];

  return (
    <section
      id="my-work"
      className="py-16 scroll-mt-8 bg-header bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white border border-white">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-80 transition-transform duration-300 mx-auto group-hover:scale-105 pt-4 "
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-0.5 bg-white">
                    <h3 className="text-lg font-semibold text-center text-green-600">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="md:max-w-screen-2xl sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{video.title}</DialogTitle>
                  <DialogDescription>
                    Watch Lucas Schmidt golfing skills in action.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.videoId}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* <video loop muted className=" w-full h-full object-cover">
                        <source
                          src={`/assets/${video.videoId}.mp4`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video> */}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
