/* Conteúdo separado da lógica da aplicação. */
const CYBER_DATA = {
 meta:{title:'CyberPath',duration:'44 semanas',hours:'7–10 h/semana'},
 phases:[
 {id:'f1',num:'01',title:'Fundamentos de tecnologia',desc:'Computadores, sistemas, dados, processos e internet antes de falar em segurança.',weeks:[
  ['Computador por dentro','Hardware, CPU, RAM, armazenamento, periféricos e firmware.','Montar um mapa de componentes e explicar o caminho de um arquivo do disco à memória.'],
  ['Sistemas operacionais','Kernel, processos, memória, arquivos, usuários, permissões e serviços.','Windows: Task Manager e PowerShell; Linux: processos, arquivos e usuários.'],
  ['Internet sem mistério','Rede, cliente/servidor, IP, domínio, DNS e o que ocorre ao abrir um site.','Desenhar o caminho navegador → DNS → servidor e validar com ferramentas do SO.'],
  ['Dados e troubleshooting','Logs, erros, comandos, documentação e método de investigação.','Resolver três problemas simulados e registrar hipótese, evidência e conclusão.'] ]},
 {id:'f2',num:'02',title:'Redes',desc:'Da comunicação local aos protocolos que sustentam aplicações e segurança.',weeks:[
  ['Conceitos de rede','LAN/WAN, topologia, MAC, switch, roteador, gateway, máscara e DHCP.','Construir uma rede conceitual e identificar o papel de cada dispositivo.'],
  ['TCP/IP e endereçamento','IPv4, IPv6, sub-redes em nível introdutório, TCP, UDP e portas.','Usar ipconfig/ifconfig, ping, tracert/traceroute e ss/netstat.'],
  ['DNS e resolução de nomes','Domínio, resolvedor, cache, registros A/AAAA/CNAME/MX e resolução.','Consultar DNS com nslookup/dig e documentar uma resolução.'],
  ['HTTP/HTTPS','URL, request/response, headers, métodos, status, cookies e TLS em visão prática.','Usar DevTools para observar uma requisição web e explicar cada parte.'],
  ['Roteamento, NAT e VPN','Como pacotes atravessam redes e o que muda com NAT e túneis.','Traçar rotas e desenhar um cenário doméstico com NAT e VPN.'],
  ['Firewall e segmentação','Filtragem, portas, ACL, DMZ, VLAN e princípio de menor exposição.','Criar regras hipotéticas e justificar cada permissão.'],
  ['Revisão + laboratório de redes','Consolidar conceitos e interpretar tráfego básico.','Laboratório: Wireshark em tráfego próprio; identificar DNS, TCP e HTTP/HTTPS.'] ]},
 {id:'f3',num:'03',title:'Linux e Windows para segurança',desc:'Administração básica dos dois ecossistemas mais úteis para quem começa.',weeks:[
  ['Linux essencial','Filesystem, shell, comandos, pipes, redirecionamento, permissões e sudo.','OverTheWire Bandit níveis iniciais ou VM Linux própria.'],
  ['Linux administração','Processos, serviços, pacotes, usuários, logs, SSH e tarefas agendadas.','Criar usuários, instalar serviço e localizar eventos nos logs.'],
  ['Windows e PowerShell','Processos, serviços, Event Viewer, PowerShell, usuários e políticas básicas.','Coletar informações do sistema via PowerShell e interpretar eventos.'],
  ['Git e documentação técnica','Git, commits, branches, README, Markdown e evidência reproduzível.','Criar repositório de laboratório com README e diário de aprendizagem.'] ]},
 {id:'f4',num:'04',title:'Programação aplicada à segurança',desc:'Só o necessário para automatizar, investigar e entender aplicações.',weeks:[
  ['Lógica e Python','Variáveis, tipos, condições, loops e funções.','Escrever pequenos scripts de leitura e transformação de dados.'],
  ['Arquivos e automação','CSV/JSON, regex introdutória, erros e argumentos.','Analisar um arquivo de logs fictício e produzir um resumo.'],
  ['HTTP com código','Requests, parâmetros, headers, JSON e tratamento de respostas.','Consultar uma API pública e registrar status, headers e corpo.'],
  ['Bash, PowerShell e SQL','Automação de shell e consultas SQL básicas.','Criar comandos/scripts que filtrem logs e consultas SELECT/WHERE.'] ]},
 {id:'f5',num:'05',title:'Fundamentos de Segurança da Informação',desc:'A linguagem e os princípios usados para pensar risco e proteção.',weeks:[
  ['CIA e risco','Confidencialidade, integridade, disponibilidade, ativos, ameaças, vulnerabilidades e risco.','Analisar cinco cenários e separar ameaça, vulnerabilidade, impacto e controle.'],
  ['Controles e defesa em camadas','Preventivo, detectivo, corretivo; hardening, backup, segmentação e políticas.','Montar defesa em camadas para um pequeno ambiente.'],
  ['Identidade e acesso','Autenticação, autorização, MFA, RBAC, menor privilégio, contas e sessões.','Projetar matriz de acesso para uma empresa fictícia.'],
  ['Criptografia','Hash, cifra simétrica/assimétrica, chaves, TLS e assinaturas.','Comparar hash vs criptografia e explicar onde cada um aparece.'],
  ['Vulnerabilidade e ameaça','CVE, CWE, CVSS, IOC, TTP, malware, phishing e engenharia social.','Classificar indicadores em um caso fictício.'],
  ['Frameworks e governança','NIST CSF, CIS Controls, ISO 27001 em visão orientadora.','Mapear um incidente simples para categorias de controle.'] ]},
 {id:'f6',num:'06',title:'Web, APIs e vulnerabilidades',desc:'Entender como aplicações funcionam antes de testar sua segurança.',weeks:[
  ['Arquitetura web','Frontend, backend, banco, API, sessão, cookies e autenticação.','Mapear arquitetura de uma aplicação didática.'],
  ['OWASP Top 10','Classes de falhas, impacto, prevenção e evidência.','Estudar exemplos seguros na Web Security Academy.'],
  ['Autenticação e sessão','Cookies, tokens, MFA, sessão, CSRF e controles.','Laboratório autorizado de autenticação na PortSwigger.'],
  ['SQL e injeção','Como consultas funcionam, entrada não confiável e SQLi em laboratório.','Lab de SQL injection da PortSwigger; documentar causa e correção.'],
  ['APIs e segurança','REST, JSON, autenticação, autorização, rate limit e validação.','Testar uma API própria ou laboratório e escrever checklist de segurança.'],
  ['Revisão web','Conectar arquitetura, HTTP e vulnerabilidades.','Desafio guiado: explicar vulnerabilidade → impacto → mitigação.'] ]},
 {id:'f7',num:'07',title:'Defesa, logs e SOC',desc:'Transformar eventos técnicos em evidências, alertas e investigação.',weeks:[
  ['Logs e telemetria','Evento, log, timestamp, origem, correlação e retenção.','Coletar e classificar logs de uma VM.'],
  ['SIEM','Ingestão, parsing, busca, correlação, alertas e casos.','Explorar um SIEM/lab gratuito ou dataset de logs.'],
  ['Detecção','Indicadores, regras, falsos positivos, baselines e MITRE ATT&CK.','Criar três hipóteses de detecção para eventos fictícios.'],
  ['Resposta a incidentes','Preparação, identificação, contenção, erradicação, recuperação e lições.','Investigar incidente fictício e produzir timeline.'],
  ['EDR/XDR e endpoint','Processos, conexões, persistência e telemetria de endpoint.','Investigar artefatos em laboratório controlado.'],
  ['SOC N1 na prática','Triagem, severidade, escalonamento, documentação e SLA.','Simular fila de cinco alertas e decidir prioridade.'] ]},
 {id:'f8',num:'08',title:'Especializações e cloud',desc:'Explorar caminhos profissionais sem abandonar a base.',weeks:[
  ['Cloud fundamentals','Responsabilidade compartilhada, IAM, rede, armazenamento e logs.','Criar arquitetura cloud segura no papel; opcionalmente usar free tier sem gerar custos.'],
  ['Cloud Security','Configuração segura, secrets, logging, postura e exposição.','Checklist de segurança para uma conta/arquitetura fictícia.'],
  ['IAM aprofundado','Joiner/mover/leaver, RBAC, IGA, PAM, MFA e governança.','Desenhar fluxo de ciclo de vida de identidade.'],
  ['Threat Intelligence e OSINT','Fontes, IOCs, TTPs, atores, contexto e validação.','Montar relatório de ameaça usando fontes públicas e separar fato de hipótese.'],
  ['Pentest como complemento','Reconhecimento, enumeração, vulnerabilidade, exploração e relatório.','Somente CTF/lab autorizado; completar uma sala introdutória e documentar.'],
  ['GRC e privacidade','Políticas, riscos, evidências, LGPD em visão introdutória e controles.','Montar mini matriz de riscos e controles.'] ]},
 {id:'f9',num:'09',title:'Projetos de portfólio',desc:'Produzir evidências concretas do que você sabe fazer.',weeks:[
  ['Projeto 1 — infraestrutura','Documentação de uma pequena rede de laboratório.','Diagrama, endereçamento, serviços e riscos.'],
  ['Projeto 2 — Linux','Laboratório Linux documentado.','Usuários, permissões, serviços, logs e hardening básico.'],
  ['Projeto 3 — Wireshark','Análise de tráfego.','PCAP próprio/lab, filtros, achados e limitações.'],
  ['Projeto 4 — rede','Mapeamento autorizado.','Inventário e interpretação de serviços de uma rede de laboratório.'],
  ['Projeto 5 — web','Vulnerabilidade web em laboratório.','Evidência, impacto, reprodução segura e correção.'],
  ['Projeto 6 — mini SOC','Detecção e triagem.','Dataset de logs, regras, alertas e relatório.'],
  ['Projeto 7 — incidente','Investigação fictícia.','Timeline, IOCs, hipóteses, contenção e lições.'],
  ['Projeto final','Integração.','Escolher SOC, IAM, AppSec, Cloud ou CTI e produzir projeto completo.'] ]},
 {id:'f10',num:'10',title:'Preparação para estágio/júnior',desc:'Consolidar fundamentos, portfólio e capacidade de explicar seu raciocínio.',weeks:[
  ['Diagnóstico técnico','Teste geral e lacunas.','Refazer os tópicos com menor desempenho.'],
  ['Currículo e GitHub','Evidências, README, resultados e linguagem objetiva.','Organizar 2–4 projetos e escrever README profissional.'],
  ['Entrevista técnica','Redes, Linux, web, segurança, logs e cenários.','Responder perguntas em voz alta e corrigir lacunas.'],
  ['Busca orientada a vagas','Ler requisitos sem perseguir todas as tecnologias.','Comparar 10 vagas e criar matriz: comum, diferencial, senioridade.'] ]}
 ],
 specializations:[
  {id:'soc',title:'SOC / Blue Team',level:'Entrada relativamente acessível',desc:'Monitoramento, triagem, logs, SIEM, detecção e resposta.',skills:['Redes e Windows/Linux','Logs e SIEM','EDR/XDR','Resposta a incidentes','MITRE ATT&CK'],roles:['Estágio SOC','SOC N1','Assistente/Analista de Segurança'],fit:'Boa opção para construir experiência operacional, embora algumas vagas tenham escala/turnos.'},
  {id:'iam',title:'IAM / Identity Security',level:'Entrada possível via suporte/infra/IAM',desc:'Identidade é o ponto de controle entre pessoas, aplicações e recursos.',skills:['AD/Entra ID','MFA','RBAC','IGA','PAM','menor privilégio'],roles:['Estágio IAM','Analista IAM Jr','Identity Operations'],fit:'Boa rota para quem gosta de processos técnicos, acesso e investigação sem depender de programação pesada.'},
  {id:'appsec',title:'Segurança de Aplicações',level:'Base técnica forte recomendada',desc:'Segurança de aplicações, APIs e SDLC.',skills:['HTTP','OWASP','APIs','autenticação','testes em laboratório'],roles:['AppSec Jr','Security Testing','DevSecOps'],fit:'Exige entender bastante web e costuma se beneficiar de alguma programação.'},
  {id:'cloud',title:'Cloud Security',level:'Mais forte após fundamentos',desc:'Proteção de identidades, redes, workloads e configurações cloud.',skills:['AWS/Azure/GCP','IAM','redes cloud','logging','postura'],roles:['Cloud Security Jr','Security Cloud','Cloud IAM'],fit:'Área promissora, mas não é atalho: redes, sistemas e IAM continuam sendo base.'},
  {id:'cti',title:'Threat Intelligence',level:'Entrada variável',desc:'Transformar dados sobre ameaças em contexto útil para defesa.',skills:['OSINT','IOCs','TTPs','MITRE','investigação','escrita'],roles:['CTI Jr','Threat Research','Cyber Threat Analyst'],fit:'Combina investigação e documentação; vagas de entrada podem ser menos numerosas que SOC.'},
  {id:'pentest',title:'Pentest / Offensive Security',level:'Especialização',desc:'Avaliar segurança ofensivamente em ambientes autorizados.',skills:['Redes','Linux','web','enumeração','vulnerabilidades','relatórios'],roles:['Pentest Jr','Security Testing'],fit:'Não deve ser tratado como sinônimo de cibersegurança nem como único caminho de entrada.'}
 ],
 projects:[
  {n:1,title:'Mapa de uma pequena infraestrutura',obj:'Explicar como computadores, roteador, DNS e servidor se relacionam.',tools:'diagrama, navegador, comandos de rede',out:'README + diagrama + riscos + glossário',skills:'redes, cliente/servidor, DNS'},
  {n:2,title:'Linux seguro e documentado',obj:'Montar uma VM Linux e registrar usuários, permissões, serviços e logs.',tools:'VirtualBox, Linux, terminal',out:'README + checklist de hardening + evidências',skills:'Linux, permissões, logs'},
  {n:3,title:'Análise de tráfego',obj:'Interpretar um PCAP de laboratório sem presumir conclusões.',tools:'Wireshark',out:'relatório de filtros, protocolos, achados e limitações',skills:'TCP/IP, DNS, HTTP, evidência'},
  {n:4,title:'Inventário de rede de laboratório',obj:'Mapear ativos e serviços apenas em ambiente próprio/autorizado.',tools:'Nmap em lab, Linux',out:'inventário + interpretação + recomendações',skills:'portas, serviços, exposição'},
  {n:5,title:'Vulnerabilidade web',obj:'Explorar e corrigir uma falha em laboratório didático.',tools:'PortSwigger ou app vulnerável local',out:'causa + impacto + evidência + mitigação',skills:'HTTP, OWASP, autenticação'},
  {n:6,title:'Mini SOC',obj:'Criar uma pequena rotina de triagem baseada em logs.',tools:'dataset, SIEM/lab, planilha',out:'regras + alertas + playbook + relatório',skills:'logs, detecção, incidentes'},
  {n:7,title:'Incidente fictício',obj:'Investigar phishing/comprometimento usando evidências simuladas.',tools:'logs, timeline, ATT&CK',out:'timeline + IOCs + hipótese + contenção',skills:'IR, CTI, análise'},
  {n:8,title:'Projeto final',obj:'Demonstrar uma capacidade de ponta a ponta em uma especialização.',tools:'definidas pelo projeto',out:'README executivo + arquitetura + evidências + limitações',skills:'integração e comunicação técnica'}
 ],
 resources:[
  ['Cisco Networking Academy','Cursos introdutórios e materiais de redes/segurança','https://www.netacad.com/'],
  ['OverTheWire','Wargames para aprender fundamentos de Linux e segurança','https://overthewire.org/wargames/'],
  ['Wireshark','Análise de protocolos e tráfego em laboratório','https://www.wireshark.org/'],
  ['Nmap','Documentação e ferramenta de descoberta em ambientes autorizados','https://nmap.org/'],
  ['PortSwigger Web Security Academy','Laboratórios gratuitos de segurança web','https://portswigger.net/web-security'],
  ['TryHackMe','Trilhas e salas práticas; conferir conteúdo gratuito disponível','https://tryhackme.com/'],
  ['MITRE ATT&CK','Base de conhecimento de técnicas adversárias','https://attack.mitre.org/'],
  ['OWASP','Referências de segurança de aplicações','https://owasp.org/'],
  ['Python','Documentação oficial','https://docs.python.org/3/'],
  ['MDN Web Docs','Fundamentos de HTTP, web e APIs','https://developer.mozilla.org/pt-BR/']
 ],
 tests:[
 {id:'t1',title:'Fundamentos e redes',questions:[['Ao acessar um site pelo domínio, qual papel o DNS cumpre?',['Criptografa toda a página','Converte o nome em informação de endereço usada para localizar o serviço','Bloqueia portas perigosas','Cria uma senha para o navegador'],1],['Qual é a diferença básica entre cliente e servidor?',['Cliente sempre é mais seguro','Servidor nunca inicia conexões','Cliente solicita/usa um serviço e servidor fornece o serviço','São sinônimos'],2],['Para que uma porta TCP/UDP é usada?',['Identificar a aplicação/serviço dentro de um host','Substituir o endereço IP','Criptografar arquivos','Definir o fabricante da placa'],0],['Por que logs importam em segurança?',['Porque eliminam vulnerabilidades','Porque registram eventos que podem sustentar investigação e detecção','Porque substituem backups','Porque impedem phishing'],1]]},
 {id:'t2',title:'Segurança e defesa',questions:[['Qual opção representa autenticação?',['O que você pode acessar','Provar quem você é','Registrar um evento','Criptografar um disco'],1],['Menor privilégio significa:',['Dar acesso máximo para evitar bloqueios','Dar somente os acessos necessários para a função','Eliminar MFA','Usar uma senha para todos'],1],['Um SIEM é usado principalmente para:',['Editar imagens','Centralizar/analisar eventos e apoiar detecção','Substituir o firewall','Hospedar sites'],1],['Em resposta a incidentes, a contenção busca:',['Aumentar o impacto','Limitar propagação/impacto enquanto a investigação continua','Apagar todas as evidências','Criar usuários'],1]]},
 {id:'t3',title:'Web e aplicações',questions:[['HTTP status 404 indica, em termos gerais:',['Recurso não encontrado','Autenticação perfeita','Servidor desligado obrigatoriamente','Criptografia forte'],0],['Por que SQL injection acontece?',['Entrada não confiável interfere indevidamente na consulta','O banco sempre usa HTTP','DNS falhou','O usuário esqueceu MFA'],0],['Qual ambiente é apropriado para estudar exploração?',['Sistema de terceiros escolhido aleatoriamente','CTF/laboratório explicitamente autorizado','Site de uma empresa','Roteador de vizinho'],1],['Qual é uma boa prática ao usar IA para segurança?',['Executar qualquer comando sugerido','Validar e compreender o resultado antes de usar','Compartilhar segredos para obter melhor resposta','Usar IA para atacar sistemas reais'],1]]}
 ]
};
