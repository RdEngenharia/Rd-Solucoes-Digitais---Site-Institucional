# Guia de Ativos (Imagens) - RD Soluções Digitais

Para que o site exiba suas próprias imagens no GitHub/Produção, siga as instruções abaixo.

## Estrutura Recomendada
Crie uma pasta chamada `assets` dentro da pasta `public` do seu projeto:
`public/assets/`

## Lista de Imagens Necessárias

| Nome do Arquivo | Seção do Site | Descrição / Sugestão | Dimensão Recomendada |
| :--- | :--- | :--- | :--- |
| `hero-bg.jpg` | **Topo (Hero)** | Imagem principal de impacto (Notebook, escritório ou arte digital). | 1200x800px |
| `lp-solution.jpg` | **Soluções (Landing Pages)** | Print de uma landing page bonita ou mockup de monitor. | 800x600px |
| `p-advocacia.jpg` | **Portfólio 1** | Exemplo de site para Advogados. | 600x400px |
| `p-agendamento.jpg` | **Portfólio 2** | Exemplo de sistema de agendamento/calendário. | 600x400px |
| `p-corretor.jpg` | **Portfólio 3** | Exemplo de site imobiliário/corretor. | 600x400px |
| `p-dashboard.jpg` | **Portfólio 4** | Print de um gráfico ou painel administrativo. | 600x400px |
| `p-estetica.jpg` | **Portfólio 5** | Exemplo de site para clínica ou estética. | 600x400px |
| `p-ebook.jpg` | **Portfólio 6** | Exemplo de página de captura de produto digital. | 600x400px |

## Como substituir no código
No arquivo `src/App.tsx`, as URLs atuais são do Unsplash (internet). Para usar as suas, você deve mudar o `src` para:
`src="/assets/nome-da-imagem.jpg"`

*Nota: O número de WhatsApp (73) 99131-7853 já foi configurado e está funcional em todos os botões.*
