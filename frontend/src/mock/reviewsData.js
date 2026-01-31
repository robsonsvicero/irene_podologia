// Mock data para avaliações do Google - será substituído por integração real no backend

const reviewsData = {
  rating: 5.0,
  totalReviews: 50,
  reviews: [
    {
      id: 1,
      author: "Maria Silva",
      rating: 5,
      date: "2024-11-15",
      text: "Me atende há mais de 10 anos, não troco por nada! Profissional excepcional e muito atenciosa.",
      avatar: "MS"
    },
    {
      id: 2,
      author: "João Santos",
      rating: 5,
      date: "2024-10-28",
      text: "Ela cuida dos pés de toda minha família. Atendimento de excelência e muito cuidadoso.",
      avatar: "JS"
    },
    {
      id: 3,
      author: "Ana Paula Costa",
      rating: 5,
      date: "2024-10-10",
      text: "Atendimento incrível e profissional. A Irene é extremamente dedicada e competente.",
      avatar: "AC"
    },
    {
      id: 4,
      author: "Roberto Lima",
      rating: 5,
      date: "2024-09-22",
      text: "Melhor podóloga da região! Sempre muito atenciosa e profissional.",
      avatar: "RL"
    },
    {
      id: 5,
      author: "Carla Mendes",
      rating: 5,
      date: "2024-09-05",
      text: "Profissional incrível! Muito cuidadosa e detalhista. Recomendo demais!",
      avatar: "CM"
    },
    {
      id: 6,
      author: "Patricia Oliveira",
      rating: 5,
      date: "2024-08-18",
      text: "Experiência maravilhosa. A Irene é muito profissional e o ambiente é impecável.",
      avatar: "PO"
    }
  ]
};

const servicesData = [
  {
    id: 1,
    title: "Avaliação Podológica",
    description: "Análise completa da saúde dos seus pés com diagnóstico profissional e orientações personalizadas.",
    icon: "Stethoscope"
  },
  {
    id: 2,
    title: "Corte Técnico de Unhas",
    description: "Técnica especializada para corte correto, prevenindo unhas encravadas e outros problemas.",
    icon: "Scissors"
  },
  {
    id: 3,
    title: "Tratamento de Unhas Encravadas",
    description: "Procedimento especializado para alívio imediato e tratamento eficaz de unhas encravadas.",
    icon: "AlertCircle"
  },
  {
    id: 4,
    title: "Calosidades e Calos",
    description: "Remoção profissional de calosidades e calos com técnicas seguras e indolores.",
    icon: "Heart"
  },
  {
    id: 5,
    title: "Cuidados Preventivos",
    description: "Orientações e tratamentos preventivos para manter a saúde dos seus pés em dia.",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Manutenção Recorrente",
    description: "Acompanhamento contínuo para manutenção da saúde e bem-estar dos seus pés.",
    icon: "Calendar"
  }
];

export { reviewsData, servicesData };
