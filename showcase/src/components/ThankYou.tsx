import { Heart } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-primary animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Grazie!
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you for exploring Angular Signal Forms with me
          </p>

          <div className="pt-6">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">//</span> Happy coding with signals! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
