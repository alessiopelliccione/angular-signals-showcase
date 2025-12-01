import { Zap, Code2, Eye, TestTube2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from './CodeBlock';

const WhySignalForms = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Performance 🔥",
      description: "Fine-grained reactivity means only affected parts re-render. No more zone.js overhead.",
      color: "text-orange-500"
    },
    {
      icon: Code2,
      title: "Less Boilerplate",
      description: "No more FormBuilder, FormGroup, FormControl ceremony. Just clean, declarative code.",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Clearer State",
      description: "State is always synchronous and directly accessible. No subscriptions needed.",
      color: "text-green-500"
    },
    {
      icon: TestTube2,
      title: "Easier Testing",
      description: "Pure functions and synchronous state make unit testing straightforward.",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Why Signal Forms</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Signal Forms Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The next evolution of form handling in Angular's ecosystem
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <benefit.icon className={`w-12 h-12 ${benefit.color}`} />
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Diagram */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Old Approach */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="text-red-500">Old Approach</span>
            </h3>
            <div className="bg-card border-2 border-red-500/30 rounded-lg p-6 space-y-3">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">FormBuilder injection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">FormGroup creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Manual subscriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Async pipe gymnastics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Zone.js overhead</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Memory leaks risk</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-500/30">
                <p className="text-center text-sm font-bold text-red-500">
                  ~100 lines of boilerplate
                </p>
              </div>
            </div>
          </div>

          {/* New Approach */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="text-green-500">Signal Forms</span>
            </h3>
            <div className="bg-card border-2 border-green-500/30 rounded-lg p-6 space-y-3">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Direct signal creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Automatic reactivity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Synchronous state</span>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-green-500/30">
                <p className="text-center text-sm font-bold text-green-500">
                  ~20 lines of clean code
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="font-mono text-xs text-red-500">// Traditional Reactive Forms</p>
            <CodeBlock
              code={`export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
                   Validators.email]],
      password: ['', [Validators.required,
                      Validators.minLength(8)]]
    });

    this.loginForm.valueChanges
      .subscribe(val => {
        // handle changes
      });
  }

  ngOnDestroy() {
    // don't forget to unsubscribe!
  }
}`}
              language="typescript"
            />
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs text-green-500">// Signal Forms</p>
            <CodeBlock
              code={`export class LoginComponent {
  email = signal('');
  password = signal('');

  form = computed(() => ({
    email: this.email(),
    password: this.password(),
    valid: this.isValid()
  }));

  private isValid = computed(() =>
    this.email().includes('@') &&
    this.password().length >= 8
  );
}

// That's it! ✨`}
              language="typescript"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySignalForms;
