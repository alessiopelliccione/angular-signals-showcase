import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatAreSignals from "@/components/WhatAreSignals";
import WhatAreSignalForms from "@/components/WhatAreSignalForms";
import WhySignalForms from "@/components/WhySignalForms";
// import CoreConcepts from "@/components/CoreConcepts";
import LiveCoding from "@/components/LiveCoding";
// import RealWorldDemo from "@/components/RealWorldDemo";
import ArchitectureTips from "@/components/ArchitectureTips";
import ThankYou from "@/components/ThankYou";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="signals">
          <WhatAreSignals />
        </div>
        <div id="signal-forms">
          <WhatAreSignalForms />
        </div>
        <div id="why">
          <WhySignalForms />
        </div>
        {/* <div id="concepts">
          <CoreConcepts />
        </div> */}
        <div id="coding">
          <LiveCoding />
        </div>
        {/* <div id="demo">
          <RealWorldDemo />
        </div> */}
        <div id="tips">
          <ArchitectureTips />
        </div>
        <ThankYou />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-muted-foreground">//</span> Signal Forms: The Modern Way to Build Forms in Angular
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
