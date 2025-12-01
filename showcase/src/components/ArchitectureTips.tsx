import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Activity } from "lucide-react";

const ArchitectureTips = () => {
  const validators = [
    { name: "required()", description: "Ensures the field has a value" },
    { name: "email()", description: "Validates email format" },
    { name: "min() / max()", description: "Validates number ranges" },
    { name: "minLength() / maxLength()", description: "Validates string or collection length" },
    { name: "pattern()", description: "Validates against a regex pattern" }
  ];

  const fieldStates = [
    { name: "valid()", description: "Returns true if the field passes all validation rules" },
    { name: "touched()", description: "Returns true if the user has focused and blurred the field" },
    { name: "dirty()", description: "Returns true if the user has changed the value" },
    { name: "disabled()", description: "Returns true if the field is disabled" },
    { name: "readonly()", description: "Returns true if the field is readonly" },
    { name: "pending()", description: "Returns true if async validation is in progress" },
    { name: "errors()", description: "Returns an array of validation errors with kind and message properties" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Validation & State</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Validators & Field State
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built-in validators and reactive field state signals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Common Validators Card */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Common Validators</CardTitle>
                  <CardDescription className="text-xs">Built-in validators for common scenarios</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="space-y-3">
                {validators.map((validator, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/50 last:border-0">
                    <code className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      {validator.name}
                    </code>
                    <p className="text-sm text-muted-foreground pt-1">{validator.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Field State Signals Card */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Field State Signals</CardTitle>
                  <CardDescription className="text-xs">Every field() provides reactive state signals</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 font-bold">State</th>
                      <th className="text-left py-2 px-3 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fieldStates.map((state, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-2 px-3">
                          <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                            {state.name}
                          </code>
                        </td>
                        <td className="py-2 px-3 text-muted-foreground">{state.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureTips;
