import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-dark-section rounded-3xl p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
          Have a complex product<br />challenge? Let's discuss.
        </h2>
        <Button variant="cta" size="lg" className="mt-8" asChild>
          <a href="#contact">Start a Conversation</a>
        </Button>
      </div>
    </section>
  );
}