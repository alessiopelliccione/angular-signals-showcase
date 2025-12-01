const LiveCoding = () => {
  const example = {
    id: "auth-form",
    title: "Login / Signup Form",
    label: "Auth Form",
    description: "A simple authentication form with login and signup modes using Signal-based reactive forms",
    whatWillLearn: [
      "Using signals for form state management",
      "Implementing form validation with signals",
      "Dynamic validator configuration"
    ],
    command: "npm run dev:auth-form",
    port: "4200",
    stackblitzUrl: "https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth",
    githubUrl: "https://github.com/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth"
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Live Coding</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guide to building Signal Forms from scratch
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">{example.title}</h3>
              <p className="text-muted-foreground text-lg">{example.description}</p>
            </div>

            {/* What Will We Learn */}
            {example.whatWillLearn && example.whatWillLearn.length > 0 && (
              <div className="mb-6 bg-muted/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3 text-primary flex items-center gap-2">
                  <span>🎓</span> What will we learn:
                </h4>
                <ul className="space-y-2">
                  {example.whatWillLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            {example.stackblitzUrl && (
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={example.stackblitzUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z" fill="currentColor"/>
                  </svg>
                  Open in StackBlitz
                </a>
                <a
                  href={example.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            )}

            {/* Run Command */}
            {example.command && (
              <div className="bg-slate-950 rounded-lg p-4 border-2 border-slate-800">
                <h4 className="text-sm font-semibold mb-2 text-slate-400">Run locally:</h4>
                <code className="text-green-400 font-mono text-sm">{example.command}</code>
                <p className="text-xs text-slate-500 mt-2">
                  Opens on http://localhost:{example.port}
                </p>
              </div>
            )}

            {!example.command && (
              <div className="bg-muted rounded-lg p-4 border-2 border-muted-foreground/20">
                <p className="text-sm text-muted-foreground text-center">
                  This example will be available soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCoding;
