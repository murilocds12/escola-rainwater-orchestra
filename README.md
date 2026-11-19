# Escola Rainwater Orchestra

Crie um SITE ÚNICO, em um só arquivo (index.html, com CSS e Java dentro dele), sobre o projeto "Sistema Automatizado de Aproveitamento de Água da Chuva" da Escola Técnica Adélia. Todo o conteúdo fica no mesmo site, sem páginas separadas: um menu fixo no topo leva a cada área por âncoras (rolagem suave), e o item da área atual fica destacado conforme a rolagem. Não deve parecer uma apresentação de slides: use visual de produto/plataforma, com cards, painéis e componentes interativos. Mobile first, modo claro/escuro, Poppins, cores #1E6FD9 (azul-água), #1B7F3B (verde) e #0A2A5E (azul-escuro).



ÁREAS (nesta ordem, todas no mesmo site)

1. Início: título, slogan "Água da chuva hoje, um futuro melhor amanhã!", vídeo curto do projeto (placeholder), resumo do problema (desperdício de água) e da solução, e botão "Ver o painel ao vivo" que rola até o painel.

2. PAINEL DE MONITORAMENTO (a área principal, logo depois do início):

   - Esquema animado da maquete: casa com telhado e calha, reservatório inicial, sensor, Arduino, bomba, mangueira e caixa-d'água. A água sobe e desce na tela (nível em %), com chuva e fluxo na mangueira animados.

   - Indicadores: nível do reservatório inicial (%), nível da caixa-d'água (%), sensor (ATIVADO/DESATIVADO com LED verde/vermelho), bomba (LIGADA/DESLIGADA), bateria (%) e carga solar (carregando/sem sol).

   - Botões: "Simular chuva", "Parar chuva", "Sol / sem sol" e "Reiniciar", mais um controle deslizante para o nível de acionamento do sensor (ex.: 80%).

   - Lógica real em JavaScript: ao atingir o nível definido, o sensor é ativado, o Arduino liga a bomba, a água passa para a caixa-d'água e, quando o reservatório esvazia, a bomba desliga. Com a bateria em 0%, o sistema para.

   - Gráfico de linha (canvas) do histórico do nível e registro de eventos com horário ("10:32:05 – Sensor ativado", "10:32:06 – Bomba ligada").

   - Botão "Conectar ao Arduino (USB)" com Web Serial API, lendo linhas como "nivel=72;sensor=1;bomba=1;bateria=85". Sem conexão, usar a simulação. Mostre o sketch do Arduino em um bloco de código.

3. Como funciona: fluxo de energia (placa solar → controlador de carga → baterias → alimenta Arduino, sensor e bomba) e fluxo da água (chuva → calha → reservatório inicial → sensor de nível → Arduino → bomba → mangueira → caixa-d'água), ambos animados, mais o passo a passo e a lógica "se o sensor detectar o nível, o Arduino liga a bomba; se a água baixar, desliga".

4. Componentes: cards de Arduino, sensor de nível, bomba d'água (galão), placa solar, controlador de carga, baterias, mangueira, reservatório inicial, caixa-d'água e maquete. Cada card com ícone, função e como se liga ao Arduino.

5. Benefícios: economia, menos desperdício, irrigação e limpeza, menor impacto ambiental, energia solar, sustentabilidade e tecnologia.

6. Equipe: cards com foto, nome, função e curso (placeholders), professor orientador e galeria da maquete com lightbox.

Rodapé: logo da Escola Técnica Adélia e "Projeto Integrador 2026 – 2º semestre".



REQUISITOS: tudo em um único arquivo HTML pronto para abrir no navegador, código comentado, textos e imagens fáceis de trocar, alt nas imagens, bom contraste, navegação por teclado e respeito a prefers-reduced-motion.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/55794b16-4e6e-491b-b448-cdd1481232c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
