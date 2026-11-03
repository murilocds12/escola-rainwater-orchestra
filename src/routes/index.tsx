import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Água da Chuva – Escola Técnica Adélia" },
      { name: "description", content: "Sistema automatizado de aproveitamento de água da chuva com Arduino e energia solar." },
      { property: "og:title", content: "Água da Chuva – Escola Técnica Adélia" },
      { property: "og:description", content: "Painel ao vivo, componentes e equipe do Projeto Integrador 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/site-chuva.html" title="Sistema de Aproveitamento de Água da Chuva" className="fixed inset-0 h-full w-full border-0" />;
}
