import siteConfig from '@/data/site-config.json';

export default function LivePlayer() {
  const channelId = siteConfig.youtube.channelId;
  const src = `https://www.youtube.com/embed/live_stream?channel=${channelId}&rel=0&modestbranding=1`;

  return (
    <div className="aspect-video overflow-hidden rounded-3xl bg-slate-950">
      <iframe
        className="h-full w-full"
        src={src}
        title="Transmisie live"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
