import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Zap, Layers, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { home } from 'virtual:content';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Zap,
  Layers,
  CheckCircle,
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hello App — Simple Test App</title>
        <meta name="description" content="A simple hello world app for testing. Your app is up and running." />
        <link rel="canonical" href="https://hello-app.example.com/" />
        <meta property="og:title" content="Hello App" />
        <meta property="og:description" content="A simple hello world app for testing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hello-app.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello App" />
        <meta name="twitter:description" content="A simple hello world app for testing." />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="py-xxxl flex flex-col items-center justify-center text-center px-6">
          {/* Decorative accent shape */}
          <div
            className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'hsl(var(--primary))', filter: 'blur(80px)' }}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto"
          >
            {/* Badge */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: 'hsl(var(--muted))',
                color: 'hsl(var(--primary))',
                borderColor: 'hsl(var(--primary) / 0.2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              v1.0.0 — Ready
            </span>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight" style={{ color: 'hsl(var(--primary))' }}>
              {home.hero.heading}
            </h1>

            <p className="text-xl text-muted-foreground max-w-md">
              {home.hero.subtitle}
            </p>

            <Button size="lg" className="mt-2 px-8">
              {home.hero.cta}
            </Button>
          </motion.div>
        </section>

        {/* Features */}
        <section className="py-xxl px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
              className="grid grid-cols-1 md:grid-cols-3 gap-base"
            >
              {home.features.map((feature, i) => {
                const Icon = iconMap[feature.icon] ?? Zap;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' as const }}
                    className="p-base rounded-xl border border-border bg-card flex flex-col gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'hsl(var(--primary) / 0.1)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                    </div>
                    <h2 className="font-semibold text-foreground">{feature.title}</h2>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
