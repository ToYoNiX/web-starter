import {
  Card,
  CardBody,
  CardGrid,
  CardTitle,
  CardTop,
  CardMeta,
  Container,
  Display,
  Eyebrow,
  Lead,
  Section,
  SectionLabel,
} from "@toyonix/web-kit/react";
import { site } from "@/site";

// Placeholder home page: replace it with the real app.
const NEXT_STEPS = [
  {
    step: "01",
    title: "Set up the repo",
    body: "Run npm run setup once: it enables GitHub Pages, adds the toyonix-site topic, and names the site.",
  },
  {
    step: "02",
    title: "Describe the app",
    body: "Fill in the app section of AGENTS.md, so people and agents know what this site is for.",
  },
  {
    step: "03",
    title: "Build it",
    body: "Replace this page. Push to main and it deploys to toyonix.github.io/<repo>/.",
  },
];

export default function Home() {
  return (
    <Container>
      <section className="pt-24 pb-12">
        <Eyebrow>New toyonix site</Eyebrow>
        <Display className="max-w-[15ch]">
          <em>{site.title}</em> is ready to build.
        </Display>
        <Lead>{site.description}</Lead>
      </section>
      <Section>
        <SectionLabel>Next steps</SectionLabel>
        <CardGrid>
          {NEXT_STEPS.map(({ step, title, body }) => (
            <Card key={step}>
              <CardTop>
                <CardMeta>step {step}</CardMeta>
              </CardTop>
              <CardTitle>{title}</CardTitle>
              <CardBody>{body}</CardBody>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </Container>
  );
}
