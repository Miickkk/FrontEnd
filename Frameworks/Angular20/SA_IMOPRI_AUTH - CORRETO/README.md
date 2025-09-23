# LEVANTAMENTO DE REQUISITOS 


## Objetivos SMART
Desenvolver metas claras para o fluxo do projeto.

- **Específico**: Desenvolver uma aplicação web que permita cadastro e login de clientes e corretores, gerenciamento de imóveis e registro de interesses. 
- **Mensurável**: Entregar uma aplicação funcional com protótipos, diagramas, CRUD completo e funcionalidades de autenticação dentro do prazo.
- **Atingível**: Utilizar Angular, JSON Server e tecnologias conhecidas, com estrutura modular e escalável.
- **Realista**: Criar um sistema de imobiliária online com dashboard para corretores, sistema de interesses para clientes e controle de acesso por perfil.
- **Tempo**: 3 semanas.  


## Requisitos funcionais
A aplicação deve permitir funcionalidades específicas para cada tipo de usuário.

- **Usuário não logado**: Visualizar página inicial com imóveis em destaque, visualizar detalhes de imóveis, criar conta de cliente.
- **Cliente**: Todas as funcionalidades públicas, marcar imóveis como “Tenho Interesse”, visualizar lista de imóveis de interesse, editar seu próprio perfil. 
- **Corretor**: Login (conta criada por administrador), CRUD de imóveis, visualizar lista de clientes interessados em seus imóveis.


## Requisitos não-funcionais
O sistema deve ser responsivo, seguro e intuitivo.

- Controle de acesso por tipo de usuário (cliente ou corretor) usando Guards do Angular.
- Autenticação com validação de senha.
- Implementação de LocalStorage.  
- Uso de identidade visual (verde-esmeralda, cinza-escuro e branco).


## Recursos humanos
Projeto **individual**, mas organizado em funções caso seja expandido.

- Desenvolvedor Frontend / Designer: Protótipos e componentes Angular.
- Gerente / QA: Testes de usabilidade e fluxo.
- Backend / Dados: Configuração de JSON Server, db.json e simulação de API.


## Recursos tecnológicos
Ferramentas e tecnologias utilizadas para desenvolvimento rápido e eficiente:

- Figma (protótipos UI/UX)
- Angular 16  
- JSON Server  
- Reactive Forms (formulários)
- Local Storage (sessão do usuário)
- Guardas de rota (controle de acesso por perfil)
- SCSS (estilização)


## Cronograma – 1° semana

| Horas | Seg | Ter | Qua 
|-------|-----|-----|-----
| 13h   |     |     | Divisão de tarefas/planejamento |
| 14h   |     |     | Documentação e protótipos no Figma |
| 15h   |     |     | Estrutura do projeto Angular |
| 16h   |     |     | Início do desenvolvimento de componentes |

## Cronograma – 2° semana

| Horas | Seg | Ter | Qua 
|-------|-----|-----|-----
| 13h   |     |     | Desenvolvimento de CRUD e serviços |
| 14h   |     |     | Implementação de guards e autenticação |
| 15h   |     |     | Testes de fluxo e integração |
| 16h   |     |     | Ajustes de design e responsividade |

## Cronograma – 3° semana

| Horas | Seg | Ter | Qua 
|-------|-----|-----|-----
| 13h   |     |     | Revisão geral do projeto |
| 14h   |     |     | Testes finais e correções |
| 15h   |     |     | Preparação do vídeo de apresentação |
| 16h   |     |     | Entrega final e publicação do repositório |



## DIAGRAMA DE FLUXOS


## Diagrama de Fluxo – Login e Redirecionamento
<img src="diagrama de fluxos - login.png" width="400">


## Diagrama de Fluxo – Cliente
<img src="diagrama de fluxos - cliente.png" width="400">


## Diagrama de Fluxo – Corretor
<img src="diagrama de fluxos - corretor.png" width="600">



## DIAGRAMA DE CASOS DE USO
<img src="diagrama de casos de uso.png" width="400">


## DIAGRAMA DE CLASSES
<img src="diagrama de classes.png" width="400">


PODE MEXER ❤︎ cavalinho ❤︎

-dentro da pasta **SRC**, depois dentro da pasta **APP**, depois dentro da pasta **SERVICES** -> arquivo **auth.service.ts** -> linha **10** -> pode mudar o 3004 para o numero que quiser, **apenas o numero!**


-dentro da pasta **SRC**, depois dentro da pasta **APP**, depois dentro da pasta **SERVICES** -> arquivo **interessados.service.ts** -> linha **10** -> pode mudar o 3004 para o numero que quiser, **apenas o numero!**


-dentro da pasta **SRC**, depois dentro da pasta **APP**, depois dentro da pasta **SERVICES** -> arquivo **meus-imoveis.service.ts** -> linha **10** -> pode mudar o 3004 para o numero que quiser, **apenas o numero!**


-dentro da pasta **SRC**, depois dentro da pasta **APP**, depois dentro da pasta **VIEWS**, depois dentro da pasta **INTERNA** -> arquivo **interna.component.html** -> linha **10, 25, 33, 41,** -> pode mudar a imagem, que dentro da pasta **ASSETS**, tem outra pasta de imagens, pode trocar se quiser!

PORT ENQUANTO SÓ ISSO!

para: ❤︎ cavalinho ❤︎
