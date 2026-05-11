import { SBNav, SBHero } from "./components/hero";
import { SBDemo } from "./components/demo";
import { SBValues, SBCode } from "./components/sections-top";
import { SBSocial } from "./components/social";
import { SBQuotes } from "./components/quotes";
import { SBTrust, SBFinal, SBFooter } from "./components/trust-final";

export default function Home() {
  return (
    <div className="sb-root" data-theme="dark">
      <SBNav />
      <SBHero />
      <SBValues />
      <SBDemo />
      <SBCode />
      <SBSocial />
      <SBQuotes quotesVariant="social" />
      <SBTrust trustVariant="inline" communityVariant="segmented" />
      <SBFinal finalBg="aurora" />
      <SBFooter />
    </div>
  );
}
