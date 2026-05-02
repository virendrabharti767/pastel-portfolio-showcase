import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get in touch</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Have a project in mind? Let's build something exceptional together.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:virendrabharti008@gmail.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                virendrabharti008@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/virendrabharti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="text" placeholder="Last Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <input type="email" placeholder="hello@example.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="text" placeholder="Company" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <textarea rows={3} placeholder="Tell me about your project..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <Button variant="cta" size="default" type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}