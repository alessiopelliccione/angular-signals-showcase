import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CodeBlock from './CodeBlock';

const WhatAreSignalForms = () => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <p className="text-sm font-mono text-muted-foreground">// --- Core Concept</p>
            <Badge variant="secondary" className="text-xs">Experimental</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Are Signal Forms?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A library for managing form state in Angular by building on the reactive foundation of signals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Definition */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">The Concept</h3>
                    <Badge variant="outline" className="text-xs">Angular 21+</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    An experimental library that manages form state with <span className="text-primary font-semibold">automatic two-way binding</span>,
                    <span className="text-primary font-semibold"> type-safe field access</span>, and
                    <span className="text-primary font-semibold"> schema-based validation</span>.
                    All form concerns—tracking values, validation, errors, UI sync—are handled automatically.
                  </p>
                  <CodeBlock
                    code={`// Traditional way
this.form.valueChanges.subscribe(...)

// Signal Forms way
const value = this.form.value(); // ✨`}
                    language="typescript"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">The Three Pillars</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Signal Forms address form complexity through three core capabilities
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Automatic Synchronization</p>
                        <p className="text-xs text-muted-foreground">Form model syncs with UI automatically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Type Safety</p>
                        <p className="text-xs text-muted-foreground">Fully typed schemas & UI bindings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Centralized Validation</p>
                        <p className="text-xs text-muted-foreground">All validation rules in one schema</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* When to Use */}
        <div className="mt-12">
          <Card className="border-2 border-orange-500/30 bg-orange-500/5">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3 text-center">When to Use Signal Forms?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-sm">Best For:</h4>
                  </div>
                  <div className="space-y-1.5 pl-7">
                    <p className="text-sm text-muted-foreground">✓ New applications built with signals</p>
                    <p className="text-sm text-muted-foreground">✓ Projects targeting zoneless Angular</p>
                    <p className="text-sm text-muted-foreground">✓ Teams comfortable with experimental features</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-sm">Stick with Reactive Forms If:</h4>
                  </div>
                  <div className="space-y-1.5 pl-7">
                    <p className="text-sm text-muted-foreground">• Existing app with Reactive Forms</p>
                    <p className="text-sm text-muted-foreground">• Production stability is critical</p>
                    <p className="text-sm text-muted-foreground">• Need mature ecosystem support</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatAreSignalForms;
