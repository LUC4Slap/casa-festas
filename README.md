# Casa de Festas - Sistema de Reservas

Um projeto Nuxt.js moderno e elegante para gerenciar a disponibilidade de uma casa de festas, com carrossel de fotos e calendário interativo.

## 🚀 Funcionalidades

### 📅 Calendário de Disponibilidade
- **Navegação por meses**: Botões para navegar entre diferentes meses
- **Marcação interativa**: Clique nas datas para marcar como:
  - 🟢 **Disponível** (verde)
  - 🔴 **Indisponível** (vermelho)
  - ⚪ **Não definido** (neutro)
- **Legenda visual**: Indicadores claros para cada status
- **Interface responsiva**: Adaptável para desktop e mobile

### 🖼️ Carrossel de Fotos
- **5 imagens profissionais** da casa de festas
- **Navegação suave**: Botões anterior/próximo com transições
- **Indicadores visuais**: Pontos indicadores do slide atual
- **Thumbnails interativas**: Miniaturas clicáveis para navegação rápida
- **Autoplay**: Rotação automática das imagens a cada 5 segundos
- **Overlay informativo**: Títulos e descrições aparecem no hover

### 🎨 Design e UX
- **Design moderno**: Interface limpa com gradientes e sombras
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação suave**: Scroll suave entre seções
- **Micro-interações**: Hover effects e transições elegantes
- **Acessibilidade**: Estrutura semântica e navegação por teclado

## 🛠️ Tecnologias Utilizadas

- **Nuxt.js 3.17.5**: Framework Vue.js para aplicações web
- **@nuxt/ui**: Biblioteca de componentes UI moderna
- **Tailwind CSS**: Framework CSS utilitário
- **Vue 3**: Framework JavaScript reativo
- **Heroicons**: Ícones SVG profissionais

## 📁 Estrutura do Projeto

```
casa-de-festas/
├── components/
│   ├── AvailabilityCalendar.vue    # Componente do calendário
│   └── PhotoCarousel.vue           # Componente do carrossel
├── pages/
│   └── index.vue                   # Página principal
├── public/
│   ├── festa1.jpg                  # Imagens da casa de festas
│   ├── festa2.jpg
│   ├── festa3.jpg
│   ├── festa4.jpg
│   └── festa5.jpg
├── assets/css/
│   └── main.css                    # Estilos globais
├── app.vue                         # Layout base
├── nuxt.config.ts                  # Configuração do Nuxt
└── package.json                    # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o projeto
cd casa-de-festas

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção
```bash
# Gerar build de produção
npm run build

# Visualizar build localmente
npm run preview
```

## 📱 Funcionalidades Detalhadas

### Calendário Interativo
O calendário permite aos administradores marcar facilmente a disponibilidade da casa de festas:

1. **Clique simples**: Primeira vez marca como disponível (verde)
2. **Segundo clique**: Marca como indisponível (vermelho)  
3. **Terceiro clique**: Remove a marcação (volta ao neutro)

### Carrossel de Fotos
Apresenta os espaços da casa de festas de forma atrativa:

- **Salão Principal**: Espaço amplo para cerimônias
- **Decoração Personalizada**: Ambientação única
- **Área Gourmet**: Espaço moderno e intimista
- **Vista Panorâmica**: Ambiente sofisticado
- **Área Externa**: Jardim para eventos ao ar livre

### Seções da Página
1. **Header**: Navegação principal com menu responsivo
2. **Hero**: Seção de destaque com call-to-actions
3. **Features**: Benefícios e diferenciais
4. **Galeria**: Carrossel de fotos interativo
5. **Disponibilidade**: Calendário para verificar datas
6. **Contato**: Formulário e informações de contato
7. **Footer**: Informações da empresa

## 🎯 Casos de Uso

### Para Proprietários
- Gerenciar disponibilidade de datas
- Apresentar o espaço para clientes
- Receber solicitações de orçamento
- Controlar reservas visualmente

### Para Clientes
- Visualizar fotos do espaço
- Verificar disponibilidade de datas
- Entrar em contato facilmente
- Solicitar orçamentos

## 🔧 Personalização

### Alterar Imagens
Substitua os arquivos em `public/` mantendo os nomes:
- `festa1.jpg` até `festa5.jpg`

### Modificar Cores
Edite as classes Tailwind em:
- `components/AvailabilityCalendar.vue`
- `components/PhotoCarousel.vue`
- `pages/index.vue`

### Adicionar Funcionalidades
- Integração com banco de dados
- Sistema de autenticação
- Pagamentos online
- Notificações por email

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos canais disponíveis na seção de contato da aplicação.

---

**Desenvolvido com ❤️ usando Nuxt.js e @nuxt/ui**

