import { Card, CardContent } from "@/components/ui/card";
import { Zap, RefreshCw, Target } from "lucide-react";
import CodeBlock from './CodeBlock';

const WhatAreSignals = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Are Signals?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Signals are Angular's new reactive primitives for managing state in a simple, efficient way
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Definition */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">A New Paradigm</h3>
                  <p className="text-muted-foreground mb-4">
                    Signals are wrappers around values that notify consumers when the value changes.
                    They provide a <span className="text-primary font-semibold">fine-grained reactivity</span> system
                    that's both simple and powerful.
                  </p>
                  <CodeBlock
                    code={`const count = signal(0);

// Read the value
console.log(count()); // 0

// Update the value
count.set(1);
count.update(n => n + 1);`}
                    language="typescript"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why They Matter */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Why Signals?</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional change detection checks the entire component tree on every event.
                    Signals enable <span className="text-accent font-semibold">precise updates</span> - only
                    components using changed signals re-render.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>No more Zone.js overhead</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>Automatic dependency tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>Synchronous and predictable</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Three Core APIs</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-mono text-primary font-bold mb-2">signal()</div>
                    <p className="text-sm text-muted-foreground">
                      Creates a writable signal with an initial value. Use <code className="bg-muted px-1 py-0.5 rounded">.set()</code> or{" "}
                      <code className="bg-muted px-1 py-0.5 rounded">.update()</code> to change it.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-primary font-bold mb-2">computed()</div>
                    <p className="text-sm text-muted-foreground">
                      Creates a read-only signal that derives its value from other signals.
                      Automatically updates when dependencies change.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-primary font-bold mb-2">effect()</div>
                    <p className="text-sm text-muted-foreground">
                      Runs side effects when signals change. Perfect for logging, analytics,
                      or syncing with external systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Example */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-card border-2 border-muted rounded-lg p-6 text-left max-w-2xl">
            <p className="text-xs font-mono text-muted-foreground mb-3">// Quick Example</p>
            <CodeBlock
              code={`@Component({
  template: \`
    <div>
      <p>Count: {{ count() }}</p>
      <p>Double: {{ double() }}</p>
      <button (click)="increment()">+</button>
    </div>
  \`
})
export class CounterComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);

  increment() {
    this.count.update(n => n + 1);
  }
}`}
              language="typescript"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreSignals;
