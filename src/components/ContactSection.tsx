import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mgodvrao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData(p => ({ ...p, firstName: e.target.value }))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" required />
              <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData(p => ({ ...p, lastName: e.target.value }))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" required />
            </div>
            <input type="email" placeholder="hello@example.com" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" required />
            <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <textarea rows={3} placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" required />
            <Button variant="cta" size="default" type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}