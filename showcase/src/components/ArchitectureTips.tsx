import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCode2, Recycle, Shield, Puzzle } from "lucide-react";
import CodeBlock from './CodeBlock';

const ArchitectureTips = () => {
  const tips = [
    {
      icon: FileCode2,
      title: "Dedicated Model Files",
      description: "Separate form logic from components",
      code: `// ❌ Bad: Everything in component
@Component({...})
class UserFormComponent {
  email = signal('');
  password = signal('');
  emailValid = computed(...)
  // ... 200 lines of form logic
}

// ✅ Good: Dedicated model file
// user-form.model.ts
export class UserFormModel {
  email = signal('');
  password = signal('');
  emailValid = computed(...)
}

// user-form.component.ts
@Component({...})
class UserFormComponent {
  model = new UserFormModel();
}`,
      benefits: [
        "Better separation of concerns",
        "Easier to test in isolation",
        "Reusable across components",
        "Cleaner component files"
      ]
    },
    {
      icon: Recycle,
      title: "Reusable Validators",
      description: "Create a validator library",
      code: `// validators/index.ts
export class Validators {
  static email(signal: Signal<string>) {
    return computed(() =>
      /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(signal())
    );
  }

  static minLength(signal: Signal<string>, min: number) {
    return computed(() => signal().length >= min);
  }

  static matches(
    signal1: Signal<string>,
    signal2: Signal<string>
  ) {
    return computed(() =>
      signal1() === signal2() &&
      signal1().length > 0
    );
  }
}

// Usage across multiple forms
emailValid = Validators.email(this.email);
passwordValid = Validators.minLength(this.password, 8);`,
      benefits: [
        "DRY principle applied",
        "Consistent validation logic",
        "Easy to extend and maintain",
        "Type-safe and composable"
      ]
    },
    {
      icon: Shield,
      title: "Strongly-Typed Schemas",
      description: "Define clear interfaces for type safety",
      code: `// types/user-form.types.ts
export interface UserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserFormValidation {
  email: boolean;
  password: boolean;
  firstName: boolean;
  lastName: boolean;
}

// user-form.model.ts
export class UserFormModel {
  // Typed signals
  private email = signal<string>('');
  private password = signal<string>('');

  // Typed computed form data
  formData = computed<UserFormData>(() => ({
    email: this.email(),
    password: this.password(),
    firstName: this.firstName(),
    lastName: this.lastName()
  }));

  // Typed validation state
  validation = computed<UserFormValidation>(() => ({
    email: this.emailValid(),
    password: this.passwordValid(),
    firstName: this.firstNameValid(),
    lastName: this.lastNameValid()
  }));
}`,
      benefits: [
        "Compile-time type checking",
        "Better IDE autocomplete",
        "Catch errors early",
        "Self-documenting code"
      ]
    },
    {
      icon: Puzzle,
      title: "Global Signal Composition",
      description: "Combine local and global state",
      code: `// stores/user.store.ts
export class UserStore {
  private currentUser = signal<User | null>(null);

  setUser(user: User) {
    this.currentUser.set(user);
  }

  isAuthenticated = computed(() =>
    this.currentUser() !== null
  );
}

// form.model.ts
export class ProfileFormModel {
  constructor(private userStore: UserStore) {}

  email = signal('');

  // Compose with global state
  canEditEmail = computed(() =>
    this.userStore.isAuthenticated() &&
    this.userStore.currentUser()?.role === 'admin'
  );

  // Initialize from global state
  loadUserData() {
    const user = this.userStore.currentUser();
    if (user) {
      this.email.set(user.email);
    }
  }
}`,
      benefits: [
        "Share state across forms",
        "Reactive to app-level changes",
        "Single source of truth",
        "Easier state management"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground mb-2">// --- Architecture Tips</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Best Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build scalable and maintainable Signal Forms applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                    <CardDescription className="text-xs">{tip.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                {/* Code Example */}
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Pattern:</p>
                  <div className="max-h-[400px] overflow-y-auto">
                    <CodeBlock code={tip.code} language="typescript" />
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-sm font-bold mb-3 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Benefits:
                  </p>
                  <div className="grid gap-2">
                    {tip.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Structure Recommendation */}
        <div className="mt-12 bg-card border-2 border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-primary" />
            Recommended Project Structure
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <CodeBlock
                code={`src/
├── app/
│   ├── features/
│   │   ├── user/
│   │   │   ├── models/
│   │   │   │   ├── user-form.model.ts
│   │   │   │   └── user-form.types.ts
│   │   │   ├── components/
│   │   │   │   └── user-form.component.ts
│   │   │   └── validators/
│   │   │       └── user.validators.ts
│   │   └── auth/
│   │       └── ...
│   └── shared/
│       ├── validators/
│       │   └── common.validators.ts
│       └── stores/
│           └── app.store.ts`}
                language="bash"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm mb-2">Key Principles:</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Group by feature, not by type
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Keep models close to components
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Share common validators in shared/
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Use clear, descriptive naming
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded p-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Pro Tip:</span> This structure scales
                  from small to large applications while keeping related code together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Tip */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Testing Your Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`describe('UserFormModel', () => {
  it('validates email correctly', () => {
    const model = new UserFormModel();

    model.email.set('invalid');
    expect(model.emailValid()).toBe(false);

    model.email.set('valid@email.com');
    expect(model.emailValid()).toBe(true);
  });

  it('computes form validity', () => {
    const model = new UserFormModel();

    expect(model.formValid()).toBe(false);

    model.email.set('test@test.com');
    model.password.set('Pass1234');

    expect(model.formValid()).toBe(true);
  });
});`}
                language="typescript"
              />
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Performance Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`// Use effect() wisely for side effects
export class FormModel {
  email = signal('');

  constructor() {
    // Debounce expensive operations
    effect(() => {
      const value = this.email();
      debounce(() => {
        this.checkEmailAvailability(value);
      }, 500);
    });
  }

  private async checkEmailAvailability(
    email: string
  ) {
    // API call here
  }
}`}
                language="typescript"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureTips;
