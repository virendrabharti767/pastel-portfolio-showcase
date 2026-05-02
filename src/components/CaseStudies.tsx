import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import delhiveryThumb from "@/assets/delhivery-thumb.png";
import ecocartThumb from "@/assets/ecocart-thumb.png";
import zomatoThumb from "@/assets/zomato-thumb.png";
import techinnovateThumb from "@/assets/techinnovate-thumb.png";
import erpThumb from "@/assets/erp-thumb.png";

const caseStudies = [
  {
    title: "Delhivery B2C Edge", 
    subtitle: "The Delhivery Way",
    desc: "Architected a B2C logistics framework targeting 2M MAU, designed to optimize delivery SLAs and drive massive operational op-ex savings.",
    color: "bg-card",
    link: "https://drive.google.com/file/d/1rg9HQEdA5ay_dWxPW1quAPxFh-7eOkLb/view?usp=share_link",
    image: delhiveryThumb,
  },
  {
    title: "HelloPM EcoCart",
    subtitle: "",
    desc: "Engineered a smart e-commerce platform integrating 'EcoCoin' rewards and carbon scoring to drive sustainable consumer purchasing behavior.",
    color: "bg-purple-light",
    link: "https://drive.google.com/file/d/1G4VhN2ri1QOKuF4agM9QRyOUlsAOwfZ_/view?usp=share_link",
    image: ecocartThumb,
  },
  {
    title: "Zomato Street Food",
    subtitle: "",
    desc: "Designed an accessible, AI-assisted onboarding ecosystem aimed at bringing 400k regional street food vendors into the digital delivery space.",
    color: "bg-purple-light",
    link: "https://drive.google.com/file/d/1vz_viBZ9SN3NjWHlUKHAYJB9C3QKHYQU/view?usp=share_link",
    image: zomatoThumb,
  },
  {
    title: "Techinnovate Mobility",
    subtitle: "",
    desc: "Developed a foundational routing strategy and feature set projected to cut return-trip logistical losses by up to 60%.",
    color: "bg-purple-light",
    link: "https://drive.google.com/file/d/15EFeZdKDANhTzUBmcvzYJ9tdEtrx0f2q/view?usp=share_link",
    image: techinnovateThumb,
  },
  {
    title: "ERP for SMEs",
    subtitle: "",
    desc: "Designed an intuitive enterprise resource planning solution to drastically lower the learning curve and improve digital adoption for small business owners.",
    color: "bg-purple-light",
    link: "https://drive.google.com/file/d/1y1q4Dco-JkYVYYY7UIddBrU78Del-gsf/view?usp=sharing",
    image: erpThumb,
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">Case Studies</h2>
        <p className="text-muted-foreground mt-2">Detailed explorations of complex product challenges<br />solved through design thinking.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {caseStudies.slice(0, 3).map((cs) => (
            <CaseCard key={cs.title} {...cs} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {caseStudies.slice(3).map((cs) => (
            <CaseCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ title, subtitle, desc, color, link, image }: { title: string; subtitle: string; desc: string; color: string; link: string; image: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className={`${color} h-48 flex items-center justify-center p-4`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        {subtitle && (
          <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
        )}
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
        <Button variant="readMore" className="mt-4" asChild>
          <a href={link}>
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}