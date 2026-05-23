# Guia de Ativos (Imagens) - RD Soluções Digitais

Para que o site exiba suas próprias imagens no GitHub/Produção, siga as instruções abaixo.

## Estrutura Recomendada
Crie uma pasta chamada `assets` dentro da pasta `public` do seu projeto:
`public/assets/`

## Lista de Imagens Necessárias

| Nome do Arquivo | Seção do Site | Descrição / Sugestão | Dimensão Recomendada |
| :--- | :--- | :--- | :--- |
| `hero-bg.jpg` | **Topo (Hero)** | Imagem principal de impacto (Notebook, escritório ou arte digital). | 1200x800px |
| `logo.png` | **Marca (Logo)** | O logotipo da sua empresa (Transparente .png ou svg recomendado). | 150x150px (Quadrado ou horizontal) |
| `lp-solution.jpg` | **Soluções (Landing Pages)** | Print de uma landing page bonita ou mockup de monitor. | 800x600px |
| `p-checkin.jpg` | **Portfólio 1** | Print ou mockup do site de Check-in Online. | 600x400px |
| `p-engenharia.jpg` | **Portfólio 2** | Imagem relacionada à homologação de projetos / RD Engenharia. | 600x400px |
| `p-agenda.jpg` | **Portfólio 3** | Print ou mockup do sistema de Agenda / Calendário. | 600x400px |
| `p-solar.jpg` | **Portfólio 4** | Imagem de painéis solares ou site de energia solar. | 600x400px |

## Como substituir no código
No arquivo `src/App.tsx`, as URLs atuais já apontam para a pasta `/assets/` para facilitar o seu trabalho.

### Para ativar sua Logo Personalizada:
1. Salve o arquivo da sua logo na pasta `public/assets/` com o nome `logo.png` (ou similar).
2. Abra o arquivo `src/App.tsx` e altere a variável `logoImageUrl` (próxima à linha 40) para pointar para o seu arquivo, por exemplo:
   ```typescript
   const logoImageUrl = "/assets/logo.png";
   ```
3. Caso queira continuar usando o logotipo estilizado puramente por código (texto "RD Soluções Digitais" em degradê moderno), basta manter a variável vazia:
   ```typescript
   const logoImageUrl = "";
   ```

*Nota: O número de WhatsApp (73) 99131-7853 já foi configurado e está funcional em todos os botões.*
