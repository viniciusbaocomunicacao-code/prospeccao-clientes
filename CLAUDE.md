@AGENTS.md

# Westlink Capital — App Next.js

Ver `../CLAUDE.md` para o contexto completo do projeto (é um site de
prospecção, não de um cliente ativo — detalhes sobre assets, identidade
visual e origem do conteúdo estão lá).

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind v4. Tailwind v4 é CSS-first:
não existe `tailwind.config.js`, os tokens de design (cores, fontes) estão
declarados em `src/app/globals.css` dentro de blocos `@theme`.

## Onde mexer

- **Copy/textos**: tudo centralizado em `src/lib/content.ts` — é o único
  lugar que deveria precisar de edição para mudar texto do site. Não hardcode
  strings de conteúdo institucional direto no JSX.
- **Design tokens** (cores, fontes, textura de assinatura): `src/app/globals.css`.
  Paleta **monocromática** (pivô deliberado após feedback do cliente — a v1 com
  verde-escuro/latão lia como template de construtor de site): `ink` (preto
  absoluto, `#060606`), `graphite` (cinza-escuro para painéis/seções alternadas),
  `paper` (branco), `fog` (cinza muito claro para cards em seção clara),
  `mist`/`haze` (textos secundários em fundo claro/escuro). Sem cor de destaque
  — nenhuma cor além de preto/branco/cinza em lugar nenhum do site. Tipografia:
  Inter Tight (display, peso 600/700, tracking apertado), Inter (corpo), IBM
  Plex Mono (rótulos técnicos — bullet + versalete rastreada, sem régua
  colorida). Referência de direção: estética editorial de marca automotiva
  premium (preto absoluto, tipografia técnica precisa, zero cor de destaque).
- **Componentes reutilizáveis**: `src/components/` — `Header`, `Footer`,
  `WhatsAppButton` (CTA flutuante + inline; `WhatsAppLink` tem prop `tone`
  ("onDark" | "onLight") que inverte bg/texto preto↔branco conforme o fundo da
  seção — sempre passar o tone certo ou o botão fica invisível), `Eyebrow`
  (rótulo com bullet, também tem prop `tone`), `FeatureCard`, `SectionHeading`,
  `CredentialBand` (credenciais reais — não são estatísticas fabricadas, ver
  nota abaixo), `ProcessSteps` (numeração só usada na Estratégia, onde os 5
  passos são uma sequência real).
- **Fotos**: todas as imagens fotográficas (equipe, escritório, geradas por IA)
  levam `grayscale` (+ `contrast-125` nas de fundo) via className — é assim que
  o site absorve fotos com tons quentes (couro/latão) sem quebrar a paleta
  monocromática. Não remover esse filtro ao trocar imagens.
- **Ícones**: `src/components/Icon.tsx` — biblioteca própria de ícones de
  linha (stroke, sem preenchimento), mapeados por `IconName`. `FeatureCard`
  aceita uma prop `icon` opcional; ao adicionar um novo card/item em
  `content.ts`, incluir um `icon` fazendo sentido semântico (ver os mapeamentos
  existentes) — não deixar card sem ícone, foi um dos pontos de feedback do
  cliente (cards "sem ícone, desalinhados").
- **Animações**: `src/components/Reveal.tsx` (client component, fade+slide via
  IntersectionObserver, aceita `delayMs` para stagger) — usado em
  `SectionHeading`, `FeatureCard`, `ProcessSteps` e nos blocos de hero de cada
  página. O hero da Home usa animação de entrada imediata (classes `hero-in`
  + `hero-in-delay-{1,2,3}` no CSS) em vez de scroll-reveal, por estar acima
  da dobra. Tudo respeita `prefers-reduced-motion` (ver `globals.css`) — não
  adicionar animação que ignore essa media query.
- **Páginas**: `src/app/{página}/page.tsx` — Home, `/sobre`, `/solucoes`,
  `/estrategia-resultados`, `/contato`.
- **Imagens**: `public/images/{brand,team,hero,generated}/`. As de
  `generated/` são geradas por IA (ver `../CLAUDE.md`); as de `team/` e
  `brand/` são reais, extraídas do site original.

## Armadilha de CSS já encontrada (não reintroduzir)

`.grain`/`.grain-light` (textura de ruído em seções escuras/claras,
`globals.css`) usam `::before` absolutamente posicionado. Já existiu uma
regra `.grain > *` para garantir que o conteúdo real ficasse acima dessa
textura — mas ela sequestrava QUALQUER filho direto da seção, inclusive divs
`absolute inset-0` usadas como camada de imagem de fundo (forçava
`position:relative` nelas, colapsando a imagem para invisível). O bug ficou
escondido meses porque as imagens já eram sutis (opacidade baixa) — só ficou
óbvio quando quebrou o grid da `CredentialBand`. **Não recriar essa regra.**
Em vez disso, sempre que precisar que um conteúdo fique acima da textura,
aplicar `relative z-[1]` explicitamente só nesse wrapper (ver `CredentialBand`
e `FeatureCard` como referência).

Relacionado: se trocar um arquivo em `public/images/` e a mudança não
aparecer no `next dev`, suspeitar do cache de otimização de imagem do
Next.js — rodar `rm -rf .next` e reiniciar o dev server antes de assumir que
o código está errado.

## Decisões de conteúdo a respeitar

- **Não inventar estatísticas.** O `CredentialBand` na Home mostra fatos reais
  (1º escritório credenciado, CVM 178/23, parceria XP, cidade-sede) em vez de
  números fabricados tipo "500+ clientes" — a Westlink não publicou métricas
  desse tipo, e inventá-las seria desonesto num site de prospecção.
- **Numeração só quando é uma sequência real.** O `ProcessSteps` (01→05) é
  usado apenas na página Estratégia, porque ali os passos (Diagnóstico →
  Acompanhamento) são de fato um processo ordenado. Não reaproveitar esse
  padrão numerado para grids de conteúdo paralelo (ex: os 4 pilares da Home
  não são uma sequência, por isso usam `FeatureCard` sem número).

## Repositório

Remoto `origin`: https://github.com/viniciusbaocomunicacao-code/prospeccao-clientes.git
(branch `main`). Repositório do Vinicius para hospedar sites de prospecção de
clientes — este projeto Next.js está na raiz do repo.

## Comandos

```bash
npm run dev     # dev server (Turbopack)
npm run build   # build de produção — rodar antes de considerar qualquer
                 # mudança "pronta", já pegou bugs reais durante o desenvolvimento
npm run lint
```

Node é gerenciado via nvm nesta máquina — se `node`/`npm` não forem
encontrados num shell novo, rodar:
```bash
export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
