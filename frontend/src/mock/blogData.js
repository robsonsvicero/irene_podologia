// Mock data para artigos do blog - será substituído por integração real no backend

const blogPosts = [
  {
    id: 1,
    title: "5 Sinais de que Você Precisa de um Podólogo",
    slug: "5-sinais-voce-precisa-podologo",
    excerpt: "Descubra os principais indicativos de que está na hora de procurar um profissional especializado em cuidados com os pés.",
    content: `
      <p>Muitas pessoas negligenciam a saúde dos pés até que surjam problemas mais sérios. Aqui estão 5 sinais importantes de que você deve consultar um podólogo:</p>
      
      <h3>1. Dor Persistente nos Pés</h3>
      <p>Se você sente dor constante ao caminhar, correr ou mesmo em repouso, isso pode indicar problemas que precisam de atenção profissional.</p>
      
      <h3>2. Unhas Encravadas Recorrentes</h3>
      <p>Unhas encravadas são dolorosas e podem levar a infecções. Um podólogo pode tratar adequadamente e prevenir recorrências.</p>
      
      <h3>3. Calosidades e Calos Excessivos</h3>
      <p>O acúmulo excessivo de pele endurecida pode indicar problemas de pressão ou postura que precisam ser corrigidos.</p>
      
      <h3>4. Mudanças na Cor ou Textura das Unhas</h3>
      <p>Alterações podem indicar infecções fúngicas ou outros problemas que requerem tratamento especializado.</p>
      
      <h3>5. Dificuldade para Caminhar</h3>
      <p>Problemas nos pés afetam diretamente sua mobilidade e qualidade de vida. Não deixe para depois!</p>
      
      <p>Se você identificou algum desses sinais, agende uma consulta. A prevenção é sempre o melhor caminho para manter a saúde dos seus pés.</p>
    `,
    image: "https://images.unsplash.com/photo-1573717006464-2933e14c2fae?w=800&q=80",
    author: "Dra. Irene",
    date: "2025-01-15",
    category: "Saúde dos Pés",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Cuidados Essenciais com os Pés no Dia a Dia",
    slug: "cuidados-essenciais-pes-dia-dia",
    excerpt: "Aprenda práticas simples que você pode incorporar na sua rotina para manter seus pés sempre saudáveis e bonitos.",
    content: `
      <p>Cuidar dos pés deve fazer parte da sua rotina diária de higiene e saúde. Confira estas dicas essenciais:</p>
      
      <h3>Higiene Adequada</h3>
      <p>Lave os pés diariamente com água morna e sabão neutro. Seque bem, especialmente entre os dedos, para evitar fungos.</p>
      
      <h3>Hidratação</h3>
      <p>Use um creme hidratante específico para os pés após o banho. Evite aplicar entre os dedos para prevenir umidade excessiva.</p>
      
      <h3>Escolha do Calçado</h3>
      <p>Opte por sapatos confortáveis e do tamanho adequado. Evite saltos muito altos ou bicos finos por períodos prolongados.</p>
      
      <h3>Corte das Unhas</h3>
      <p>Corte as unhas retas, evitando cantos muito arredondados que podem causar encravamento.</p>
      
      <h3>Inspeção Regular</h3>
      <p>Examine seus pés regularmente em busca de feridas, rachaduras, calos ou mudanças na pele e unhas.</p>
      
      <p>Lembre-se: seus pés sustentam todo o seu corpo. Cuide bem deles!</p>
    `,
    image: "https://images.unsplash.com/photo-1706394991888-7fdb8f764919?w=800&q=80",
    author: "Dra. Irene",
    date: "2025-01-10",
    category: "Dicas",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Pé Diabético: Prevenção e Cuidados Especiais",
    slug: "pe-diabetico-prevencao-cuidados",
    excerpt: "Entenda a importância do acompanhamento podológico regular para pessoas com diabetes e como prevenir complicações.",
    content: `
      <p>O diabetes pode afetar significativamente a saúde dos pés. Entenda por que o acompanhamento regular é fundamental:</p>
      
      <h3>Por Que o Pé Diabético Requer Atenção Especial?</h3>
      <p>O diabetes pode causar neuropatia (perda de sensibilidade) e problemas circulatórios, tornando os pés mais vulneráveis a feridas e infecções.</p>
      
      <h3>Prevenção é Fundamental</h3>
      <p>Inspeção diária dos pés, controle rigoroso da glicemia e consultas regulares ao podólogo são essenciais para prevenir complicações sérias.</p>
      
      <h3>Sinais de Alerta</h3>
      <ul>
        <li>Feridas que não cicatrizam</li>
        <li>Mudanças na cor da pele</li>
        <li>Formigamento ou dormência</li>
        <li>Dor ao caminhar</li>
      </ul>
      
      <h3>Cuidados Especiais</h3>
      <p>Nunca ande descalço, use meias sem costura, verifique a temperatura da água antes do banho e mantenha os pés sempre hidratados.</p>
      
      <p>Se você tem diabetes, agende consultas regulares com um podólogo especializado. A prevenção pode salvar seus pés!</p>
    `,
    image: "https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=800&q=80",
    author: "Dra. Irene",
    date: "2025-01-05",
    category: "Saúde",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Como Escolher o Calçado Ideal para Seus Pés",
    slug: "como-escolher-calcado-ideal",
    excerpt: "O calçado certo pode prevenir diversos problemas nos pés. Saiba como fazer a escolha adequada para seu tipo de pé.",
    content: `
      <p>A escolha do calçado adequado é fundamental para a saúde dos seus pés. Veja como escolher corretamente:</p>
      
      <h3>Tamanho e Conforto</h3>
      <p>Sempre experimente os sapatos no final do dia, quando os pés estão ligeiramente inchados. Deve haver espaço de cerca de 1cm entre o dedo mais longo e a ponta do sapato.</p>
      
      <h3>Material</h3>
      <p>Prefira materiais naturais como couro, que permitem a respiração dos pés e reduzem o suor excessivo.</p>
      
      <h3>Salto</h3>
      <p>Saltos de 3 a 5 cm são os mais saudáveis. Evite usar saltos muito altos diariamente.</p>
      
      <h3>Palmilhas</h3>
      <p>Para quem tem problemas específicos, palmilhas ortopédicas personalizadas podem fazer toda a diferença.</p>
      
      <p>Consulte um podólogo para avaliar seu tipo de pisada e receber orientações personalizadas sobre o calçado ideal para você.</p>
    `,
    image: "https://images.unsplash.com/photo-1768508236664-3f294aaf7d41?w=800&q=80",
    author: "Dra. Irene",
    date: "2024-12-28",
    category: "Dicas",
    readTime: "5 min"
  },
  {
    id: 5,
    title: "Micose nas Unhas: Causas, Tratamento e Prevenção",
    slug: "micose-unhas-tratamento-prevencao",
    excerpt: "A micose nas unhas é um problema comum mas tratável. Entenda suas causas e como se prevenir.",
    content: `
      <p>A onicomicose (micose das unhas) é uma infecção fúngica que afeta milhões de pessoas. Saiba como tratar e prevenir:</p>
      
      <h3>O Que Causa Micose nas Unhas?</h3>
      <p>Fungos prosperam em ambientes quentes e úmidos. Piscinas, vestiários e até mesmo sapatos fechados podem ser fontes de contaminação.</p>
      
      <h3>Sintomas</h3>
      <ul>
        <li>Espessamento da unha</li>
        <li>Mudança de cor (amarelada ou esbranquiçada)</li>
        <li>Fragilidade e quebra fácil</li>
        <li>Deformação da unha</li>
      </ul>
      
      <h3>Tratamento</h3>
      <p>O tratamento pode incluir antifúngicos tópicos ou orais, dependendo da gravidade. Nunca se automedique - procure um podólogo.</p>
      
      <h3>Prevenção</h3>
      <p>Mantenha os pés secos, use chinelos em áreas públicas, evite compartilhar cortadores de unha e mantenha boa higiene dos pés.</p>
      
      <p>O tratamento pode levar meses, mas com acompanhamento profissional, os resultados são excelentes!</p>
    `,
    image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=800&q=80",
    author: "Dra. Irene",
    date: "2024-12-20",
    category: "Tratamentos",
    readTime: "7 min"
  }
];

export { blogPosts };
