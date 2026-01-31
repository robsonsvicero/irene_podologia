# PRD - Site Profissional Podóloga Irene

## Data de Criação
31 de Janeiro de 2025

## Problema Original
Criar um site profissional para a Podóloga Irene com foco em credibilidade, facilitar contato/agendamento e reforçar autoridade profissional (mais de 10 anos de experiência).

## Público-Alvo
- Adultos e idosos da região do Lauzane Paulista – Zona Norte de São Paulo
- Pessoas com necessidade de cuidados podológicos recorrentes
- Famílias que valorizam atendimento humano, seguro e profissional

## Proposta de Valor
"Cuidado profissional com seus pés, feito com atenção, experiência e confiança."

## Requisitos Funcionais (Estáticos)

### 1. Estrutura do Site
- ✅ Home/Hero Section
- ✅ Sobre a Podóloga Irene
- ✅ Serviços Especializados
- ✅ Avaliações de Pacientes
- ✅ Localização e Atendimento
- ✅ Contato/Agendamento

### 2. Informações de Contato
- WhatsApp: (11) 94694-5695
- Endereço: Av. Basiléia, 79 – Lauzane Paulista – SP
- Referência: Em frente ao Supermercado Trimais
- Código Google Maps: G9F3+37
- Horário: Segunda a Sábado até 18h30

### 3. Design System (Premium Commerce)
- Cores: Tons neutros quentes (#fffef2, #f6f5e8, #333333)
- Tipografia: Inter (fallback system)
- Botões: Sharp rectangular (border-radius: 0px)
- Espaçamento: Generoso (100px+ entre seções)
- Responsivo: Mobile-first approach

## O Que Foi Implementado

### Frontend (31/01/2025)
**Componentes Criados:**
- ✅ Header.jsx - Navegação sticky com scroll suave
- ✅ Footer.jsx - Informações completas de contato
- ✅ Hero.jsx - Seção principal com badge 5.0 ⭐ e CTAs
- ✅ About.jsx - História profissional com grid de imagens
- ✅ Services.jsx - 6 cards de serviços especializados
- ✅ Reviews.jsx - Sistema de avaliações com rating 5.0
- ✅ Location.jsx - Mapa Google Maps integrado
- ✅ Contact.jsx - Formulário que redireciona para WhatsApp
- ✅ WhatsAppButton.jsx - Botão flutuante verde

**Mock Data:**
- reviewsData: 6 avaliações de pacientes (mock)
- servicesData: 6 serviços especializados

**Configuração:**
- Desabilitado babel-metadata-plugin (causava erro de recursão)
- Hot reload funcional
- Design system aplicado em App.css

## API Contracts (Para Backend Futuro)

### 1. Integração Google Reviews (Planejado)
```
GET /api/reviews/google
Response: {
  rating: 5.0,
  totalReviews: 50,
  reviews: [...]
}
```

### 2. Formulário de Contato (Planejado)
```
POST /api/contact
Body: {
  name: string,
  phone: string,
  message: string
}
Response: { success: boolean }
```

## Backlog Priorizado

### P0 (Crítico - Próxima Fase)
- [ ] Backend API para formulário de contato
- [ ] Integração dinâmica com Google Reviews API
- [ ] Validação de formulários com mensagens de erro
- [ ] Analytics (Google Analytics/Search Console)

### P1 (Importante)
- [ ] Sistema de agendamento online integrado
- [ ] WhatsApp Business API integration
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance optimization (lazy loading de imagens)

### P2 (Desejável)
- [ ] Blog de podologia
- [ ] Galeria de antes/depois (com autorização de pacientes)
- [ ] FAQ section
- [ ] Newsletter signup

## Tarefas Seguintes
1. Aprovação do design pelo cliente (Robson)
2. Desenvolvimento do backend (FastAPI + MongoDB)
3. Integração Google Reviews API
4. Testes end-to-end
5. Deploy e configuração de domínio

## Observações Técnicas
- Frontend rodando em http://localhost:3000
- Backend API em http://localhost:8001/api (preparado)
- Mock data em /app/frontend/src/mock/reviewsData.js
- Todas URLs do WhatsApp apontam para: https://wa.me/5511946945695

## Reconhecimentos
- Design inspirado em sistema Premium Commerce (minimalista luxuoso)
- Imagens profissionais via Unsplash (temporárias)
- Componentes shadcn/ui utilizados: Button, Card
