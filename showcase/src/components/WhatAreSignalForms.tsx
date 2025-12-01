import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CodeBlock from './CodeBlock';

const WhatAreSignalForms = () => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Core Concept</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Are Signal Forms?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Applying the power of Signals to form state management
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
                    Signal Forms bring reactive forms to the next level by using signals
                    to represent form state. Instead of observables and subscriptions,
                    you get <span className="text-primary font-semibold">direct, synchronous access</span> to
                    form values and validation state.
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
                  <h3 className="text-xl font-bold mb-3">How It Works</h3>
                  <p className="text-muted-foreground mb-4">
                    Each form field is a signal. Validators are computed signals.
                    The entire form state is reactive and type-safe by default.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">1</span>
                      </div>
                      <p className="text-sm">Define form fields as signals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">2</span>
                      </div>
                      <p className="text-sm">Create computed validators</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">3</span>
                      </div>
                      <p className="text-sm">Bind to template with signals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">4</span>
                      </div>
                      <p className="text-sm">Automatic reactivity everywhere!</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-6 text-center">A Simple Comparison</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Traditional */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <h4 className="font-mono text-sm font-bold">Traditional Reactive Forms</h4>
                </div>
                <CodeBlock
                  code={`// Component
form = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

constructor() {
  this.form.valueChanges
    .subscribe(value => {
      // Handle changes
    });
}

// Template
<input [formControl]="form.get('email')">

// Access value
const email = this.form.get('email')?.value;`}
                  language="typescript"
                />
              </div>

              {/* Signal Forms */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <h4 className="font-mono text-sm font-bold">Signal Forms</h4>
                </div>
                <CodeBlock
                  code={`// Component
email = signal('');
password = signal('');

form = computed(() => ({
  email: this.email(),
  password: this.password()
}));

// Automatic reactivity!

// Template
<input [value]="email()"
       (input)="email.set($event.value)">

// Access value
const email = this.email(); // ✨`}
                  language="typescript"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="mt-12">
          <Card className="border-2 border-accent/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Why Signal Forms Matter</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">No subscriptions</span> - synchronous by design</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">Type-safe</span> - TypeScript knows your form structure</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">Less boilerplate</span> - simpler, cleaner code</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">Better performance</span> - granular updates only</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">Easier testing</span> - pure functions, no async</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span><span className="font-bold">Zoneless compatible</span> - ready for the future</span>
                      </div>
                    </div>
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
