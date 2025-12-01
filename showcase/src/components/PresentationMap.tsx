import { Card } from "@/components/ui/card";
import { BookOpen, Code2, Lightbulb, Laptop, CheckCircle, Heart } from "lucide-react";

const PresentationMap = () => {
  const sections = [
    {
      icon: BookOpen,
      title: "What Are Signals",
      description: "Introduction to Angular Signals and reactive primitives",
      color: "text-blue-500"
    },
    {
      icon: Code2,
      title: "What Are Signal Forms",
      description: "Applying Signals to forms in Angular",
      color: "text-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Why Signal Forms",
      description: "Benefits and comparisons with traditional approach",
      color: "text-orange-500"
    },
    {
      icon: Laptop,
      title: "Let's Build Together",
      description: "Live coding example with StackBlitz",
      color: "text-green-500"
    },
    {
      icon: CheckCircle,
      title: "Validators & Field State",
      description: "Common validators and reactive field state signals",
      color: "text-cyan-500"
    },
    {
      icon: Heart,
      title: "Grazie!",
      description: "Resources and links",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Agenda</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Will We See in This Presentation
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive journey through Angular Signal Forms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="p-5 hover:shadow-lg transition-all hover:-translate-y-1 border-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`p-2 rounded-lg bg-muted ${section.color}`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationMap;
