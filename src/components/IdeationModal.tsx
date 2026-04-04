import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X, Lock, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Ideation & Strategy", "Software Dev", "Web Development",
  "Mobile App", "AI & ML", "IoT Solutions",
  "UI/UX Design", "Cloud & Security", "IT Support",
  "Hardware Supply", "Research", "Not Sure Yet",
];

const timelines = ["Less than 1 month", "1–3 months", "3–6 months", "6–12 months", "Ongoing / Retainer"];
const budgets = ["Under ₦500K", "₦500K – ₦2M", "₦2M – ₦5M", "₦5M – ₦20M", "₦20M+", "Not sure yet"];
const referrals = ["Google Search", "Social Media", "Referral / Word of Mouth", "Event / Conference", "LinkedIn", "Other"];

interface IdeationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const IdeationModal = ({ open, onOpenChange }: IdeationModalProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  // Step 1
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  // Step 2
  const [idea, setIdea] = useState("");
  const [outcome, setOutcome] = useState("");

  // Step 3
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [referral, setReferral] = useState("");

  const toggleService = (s: string) => {
    setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFullName(""); setOrganisation(""); setEmail(""); setPhone(""); setRole("");
    setIdea(""); setOutcome("");
    setSelectedServices([]); setTimeline(""); setBudget(""); setReferral("");
  };

  const canNext1 = fullName.trim() && email.trim();
  const canNext2 = idea.trim() && outcome.trim();

  const handleSubmit = async () => {
    setSending(true);
    const body = {
      fullName, organisation, email, phone, role,
      idea, outcome,
      services: selectedServices, timeline, budget, referral,
    };

    const mailtoSubject = encodeURIComponent(`New Ideation Brief from ${fullName}`);
    const mailtoBody = encodeURIComponent(
      `--- ABOUT ---\nName: ${fullName}\nOrganisation: ${organisation}\nEmail: ${email}\nPhone: ${phone}\nRole: ${role}\n\n--- BRIEF ---\nIdea: ${idea}\nOutcome: ${outcome}\n\n--- DETAILS ---\nServices: ${selectedServices.join(", ")}\nTimeline: ${timeline}\nBudget: ${budget}\nReferral: ${referral}`
    );

    // Open mailto as fallback email method
    window.open(`mailto:ddynamictech@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, "_self");

    setSending(false);
    setSubmitted(true);
    toast({ title: "Brief submitted!", description: "We'll be in touch shortly." });
  };

  const steps = [
    { num: 1, label: "ABOUT YOU" },
    { num: 2, label: "YOUR BRIEF" },
    { num: 3, label: "DETAILS" },
  ];

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) resetForm(); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-card border-border p-0 gap-0">
        <DialogTitle className="sr-only">Start Your Ideation</DialogTitle>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
            <CheckCircle2 className="text-primary mb-4" size={56} />
            <h2 className="heading-md mb-2">Thank You!</h2>
            <p className="text-muted-foreground">Your ideation brief has been sent. Our team will review and reach out shortly.</p>
            <Button variant="hero" className="mt-8" onClick={() => { resetForm(); onOpenChange(false); }}>
              Close
            </Button>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            {/* Header */}
            <p className="label-caps text-primary mb-2">— Start Your Ideation</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-1">
              Tell us about your idea or challenge
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Share your vision — we'll think through it together and map the path from idea to reality.
            </p>

            {/* Stepper */}
            <div className="flex items-center justify-center gap-0 mb-8">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                      step >= s.num
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground/30 text-muted-foreground"
                    }`}>
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <span className={`label-caps text-[10px] mt-1 ${step >= s.num ? "text-primary" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-16 md:w-24 h-[2px] mx-2 mb-4 ${step > s.num ? "bg-primary" : "bg-muted-foreground/20"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Full Name <span className="text-destructive">*</span></label>
                      <Input placeholder="Your full name" value={fullName} onChange={e => setFullName(e.target.value)} className="bg-secondary border-border" />
                    </div>
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Organisation / Company</label>
                      <Input placeholder="Your company or startup name" value={organisation} onChange={e => setOrganisation(e.target.value)} className="bg-secondary border-border" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Email Address <span className="text-destructive">*</span></label>
                      <Input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-secondary border-border" />
                    </div>
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Phone Number</label>
                      <Input placeholder="+234 xxx xxx xxxx" value={phone} onChange={e => setPhone(e.target.value)} className="bg-secondary border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="label-caps text-xs mb-1.5 block">Your Role / Title</label>
                    <Input placeholder="e.g. CEO, Product Manager, Developer" value={role} onChange={e => setRole(e.target.value)} className="bg-secondary border-border" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div>
                    <label className="label-caps text-xs mb-1.5 block">Describe your idea, challenge or project <span className="text-destructive">*</span></label>
                    <Textarea placeholder="Tell us what you're working on, the problem you're trying to solve, or the idea you want to bring to life. Don't worry about being too technical — just share your thinking." value={idea} onChange={e => setIdea(e.target.value)} rows={5} className="bg-secondary border-border resize-none" />
                  </div>
                  <div>
                    <label className="label-caps text-xs mb-1.5 block">What outcome are you looking for? <span className="text-destructive">*</span></label>
                    <Textarea placeholder="e.g. A mobile app, a web platform, a technology strategy, an AI solution, hardware procurement.." value={outcome} onChange={e => setOutcome(e.target.value)} rows={4} className="bg-secondary border-border resize-none" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div>
                    <label className="label-caps text-xs mb-3 block">Which services are you interested in?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {services.map(s => (
                        <label key={s} className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <Checkbox checked={selectedServices.includes(s)} onCheckedChange={() => toggleService(s)} />
                          <span className="label-caps text-[11px]">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Project Timeline</label>
                      <Select value={timeline} onValueChange={setTimeline}>
                        <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                        <SelectContent>{timelines.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="label-caps text-xs mb-1.5 block">Estimated Budget (Optional)</label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder="Select range" /></SelectTrigger>
                        <SelectContent>{budgets.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="label-caps text-xs mb-1.5 block">How did you hear about us?</label>
                    <Select value={referral} onValueChange={setReferral}>
                      <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder="Select one" /></SelectTrigger>
                      <SelectContent>{referrals.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Lock size={12} className="text-accent" /> Your details are kept confidential. We never share your information with third parties.
              </p>
              <div className="flex gap-3">
                {step > 1 && (
                  <Button variant="heroOutline" onClick={() => setStep(step - 1)} className="gap-1">
                    <ArrowLeft size={16} /> Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    variant="hero"
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 ? !canNext1 : !canNext2}
                    className="gap-1"
                  >
                    Continue <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button variant="hero" onClick={handleSubmit} disabled={sending} className="gap-1">
                    {sending ? "Sending…" : "Submit Brief"} <ArrowRight size={16} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IdeationModal;
