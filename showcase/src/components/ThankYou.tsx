import { Heart, ExternalLink, Github, FileCode } from "lucide-react";

const ThankYou = () => {
  const links = [
    {
      title: "Angular Signals Documentation",
      url: "https://angular.dev/guide/signals",
      icon: FileCode
    },
    {
      title: "Angular Signal Forms",
      url: "https://angular.dev/guide/forms/signals/overview",
      icon: FileCode
    },
    {
      title: "My StackBlitz Examples",
      url: "https://stackblitz.com/@alessiopelliccione",
      icon: ExternalLink
    },
    {
      title: "My GitHub",
      url: "https://github.com/alessiopelliccione",
      icon: Github
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-primary animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Grazie!
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you for exploring Angular Signal Forms with me
          </p>

          <div className="pt-4">
            <p className="font-mono text-sm text-muted-foreground mb-6">
              <span className="text-primary">//</span> Happy coding with signals! 🚀
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-lg transition-all group"
                >
                  <link.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{link.title}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
