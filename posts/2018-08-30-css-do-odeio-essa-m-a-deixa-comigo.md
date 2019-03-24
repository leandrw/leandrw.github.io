---
id: 902
title: 'CSS: do ‘Odeio essa m**’ a ‘deixa comigo!’'
date: 2018-08-30T01:06:35+00:00
author: leandrw
guid: https://leandrw.com.br/?p=902
permalink: /css-do-odeio-essa-m-a-deixa-comigo/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";N;s:2:"id";N;s:21:"follower_notification";N;s:7:"license";N;s:14:"publication_id";N;s:6:"status";N;s:3:"url";N;}'
image: /wp-content/uploads/2018/08/Inkedamor-odio_LI-702x430.jpg
categories:
  - Sem categoria
tags:
  - bem
  - css
  - flexbox
  - grid layout
  - less
  - oocss
  - sass
  - smacss
---
<blockquote>- traduzido e adaptado do excelente <a href="https://blog.10pines.com//2017/01/24/css-from-i-hate-it-to-i-actually-like-this-thing/" target="_blank" rel="noopener">post</a> do<a href="https://blog.10pines.com/authors/ignacio-piantanida/" target="_blank" rel="noopener"> Ignacio Piantanida</a> no <a href="https://blog.10pines.com/" target="_blank" rel="noopener">blog do 10pines</a>, de 24 de janeiro de 2017</blockquote>
Me lembro dos meus primeiros dias como desenvolvedor web, quando peguei uma tarefa que parecia tão simples: <em>“nós precisamos adicionar um pequeno botão vermelho abaixo desse formulário. Ele precisa estar alinhado à direita. Ah! E verticalmente centralizado também”</em>. Eu estava condenado. Algumas horas gastas quebrando o layout, consertando-o e quebrando-o novamente a cada mudança no CSS que eu fazia… todos nós já passamos por isso antes.

[caption id="attachment_903" align="alignnone" width="702"]<img class="wp-image-903 size-full" src="https://leandrw.com.br/wp-content/uploads/2018/08/Inkedamor-odio_LI.jpg" alt="A handwrite phrase saying &quot;I hate/love you CSS&quot;" width="702" height="540" /> CSS &amp; Você: uma relação de amor e ódio[/caption]

Felizmente, depois de ler esse post você aprenderá algumas dicas para ajuda-lo(a) no seu caminho para dominar CSS plenamente.

Bora lá!<!--more-->
<h1>0. Esqueça os navegadores antigos</h1>
Não chamaria isso exatamente de dica, ainda mais a 0, mas é algo que sempre levo em consideração ao iniciar um novo projeto.

Tente evitar ter que dar suporte a navegadores antigos. Dê uma olhada nas <a href="https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&amp;qpcustomd=0" target="_blank" rel="noopener">estatísticas de uso</a>, e balanceie a relação <strong>maior alcance de usuários x custos extra no desenvolvimento</strong>. Dar suporte a coisas mais velhas que o IE 10 dá muita dor de cabeça.

É claro, nem sempre isso será possível. Eu conheço uma empresa que obriga todos os seus colaboradores que não trabalham diretamente com T.I. a usa o IE 7, então todas as ferramentas internas devem funcionar no dito-cujo. Se este é o seu caso, eu realmente sinto muito por você. Não poderei ajuda-lo(a).

Se você já possui um site e as estatísticas dele, observe como as versões e navegadores se comportam dentro do contexto do negócio. Por exemplo, em um dos projetos em que trabalhei, a porcentagem de usuários de IE era baixa em termos de visitas. Mas quando você olhava para dados como os de conversão de vendas por navegador, os usuários de IE tinham uma taxa de conversão muito maior, o que representava uma boa porcentagem de vendas.

Dê suporte àquilo que vale a pena.
<h1>1. Entenda as regras de precedência</h1>
Eu não posso deixar de frisar isso. Se você não entende porque uma certa propriedade está sendo aplicada sobre outra, estará sempre em guerra com frameworks, bibliotecas e até mesmo com o monte de CSS dos seus próprios projetos.

Digamos que você tem os seguintes códigos HTML e CSS:
```html
<div id="container" class="my-container">
  I want my <span class="text red">color</span>
</div>

<style>
#container span {
  color: blue;
}

.my-container .text.red {
  color: red;
}
</style>
```
Qual você acha que será a cor do texto?

Se sua resposta foi <em>“eu não ligo, simplesmente vou colocar um <strong>!important</strong> no que eu quero”</em>, bem, lhe desejo uma vida regada a muito IE6.

Para o resto das pessoas que ligam, a resposta é <span style="color: #0000ff;"><strong>azul</strong></span>. Não interessa quantos seletores você adicionar na segunda regra, você nunca fará com que o texto fique <span style="color: #ff0000;">vermelho</span>.

A chave é que os diferentes tipos de seletores (<em>#id</em>, <em>.class</em>, <em>element</em> e <em>inline</em>) possuem diferentes precedências. Cada seletor possui um ‘peso’, e o maior peso ganha.

Uma boa fonte de estudo e compreensão sobre o assunto é o curtíssimo post do Steven Bradley, <a href="http://vanseodesign.com/css/css-specificity-inheritance-cascaade/" target="_blank" rel="noopener">(Understanding Style Precedence in CSS: Specificity, Inheritance, and the Cascade)</a>.
<h1>2. Utilize um pré-processador de CSS</h1>
Hoje em dia é difícil achar uma webapp que use só o CSS puro sem o uso de um pré-processador, mas se você está iniciando um novo projeto, adicione um pré-processador o quanto antes. Mixins, variáveis, herança e import ajudarão a manter seus estilos modulares e sem repetições (princípio DRY) do começo ao fim.

Eu sempre escolho <a href="http://sass-lang.com/" target="_blank" rel="noopener">Sass</a>, que atualmente é o pré-processador CSS mais utilizado, seguido pelo <a href="http://lesscss.org/" target="_blank" rel="noopener">Less</a> (nota do tradutor: não escolha Less).
<h1>3. Abrace o Flexbox para posicionamento</h1>
Com <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" target="_blank" rel="noopener">flexbox</a> você pode construir um layout responsivo consistente, com apenas um pequeno conjunto de regras. Depois de usa-lo pela primeira vez, você nunca mais irá querer usar um float ou o <a href="http://getbootstrap.com/css/#grid" target="_blank" rel="noopener">grid system do bootstrap</a> novamente.

Eu adoro esse joguinho, o <a href="http://flexboxfroggy.com/" target="_blank" rel="noopener">flexboxfroggy.com</a>, para aprender o básico.

Você deverá tomar muito cuidado com a compatibilidade de cada navegador e seus prefixos. O que nos leva à próxima dica…
<h1>4. Não escreva os prefixos de navegador manualmente</h1>
Adicionar os prefixos de cada navegador implica em duplicação, o que é tedioso a leva a erros.

<a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener">Autoprefixer</a> é uma ferramenta que lhe ajudará a lidar com as pequenas diferenças entre os navegadores. Baseado no <a href="http://caniuse.com/" target="_blank" rel="noopener">CanIUse</a>, você define quais versões de navegador você deseja dar suporte e o autoprefixer procurará nos seus arquivos CSS e adicionará as propriedades necessárias para cada navegador. Esqueça toda essa porcaria de <em>-moz</em> ou <em>-webkit</em>.

Independente de qual stack você utilize durante o desenvolvimento, <a href="https://webpack.js.org/" target="_blank" rel="noopener">webpack</a>, <a href="https://gulpjs.com" target="_blank" rel="noopener">gulp</a> ou <a href="https://gruntjs.com" target="_blank" rel="noopener">grunt</a>, é muito simples integra-lo.

Se você não quer mudar nada no seu pipeline, ao menos utilize alguma coisa tipo o <a href="http://bourbon.io/" target="_blank" rel="noopener">Bourbon</a>, uma biblioteca de mixins Sass que adicionam todos os prefixos para você.
<h1>5. Não utilize qualquer nome para classes, utilize uma metodologia</h1>
Conforme o projeto cresce, o número e grau de complexidade das suas páginas de estilo podem se tornar um problema. Se não for cuidadoso(a), adicionar uma simples propriedade a uma classe pode ter um gigantesco impacto em outras partes do site que você nem sequer imagina.

Usar uma metodologia específica irá prevenir esse tipo de erro. Ao mesmo tempo, definirá um padrão para sua base de código, garantindo consistência entre tantos estilos de diferentes desenvolvedores.

Há diversas técnicas para lidar com isso como BEM, <a href="http://oocss.org" target="_blank" rel="noopener">OOCSS</a>, <a href="https://smacss.com" target="_blank" rel="noopener">SMACSS</a>, etc… a única com a qual essou bem familiarizado é a <a href="http://getbem.com" target="_blank" rel="noopener">BEM</a>.

Com BEM (Box, Element, Modifier), você define classes do tipo <em>.bloco__elemento — modificador</em>. Por exemplo, se você tem um cabeçalho com o logo da empresa e um botão de login, você terá classes como <em>.cabecalho__logo-empresa</em>, <em>.cabecalho__btn-logar</em> ou <em>.cabecalho__btn-logar — oculto</em>. Assim, toda vez que olhar para um seletor numa folha de estilos, você saberá em qual elemento ele está interferindo e onde encontra-lo.

Além disso, a BEM sugere uma estrutura chapada de classes (ao invés de aninhar tudo como <em>.cabecalho .btn-logar</em>). Dessa forma, você desacopla seus estilos das estruturas no HTML e seu estilo sempre funcionará da mesma forma (exceto para propriedades herdadas, é claro).
<h1>6. Entenda as diferentes unidades de medida</h1>
Você sabe a diferença entre px, em e rem?

Você sabe o que as unidades de viewport (vw e vh) são?

Adicionar unidades além do px e % na sua caixa de ferramentas lhe permitirá expandir o que poderá fazer, especialmente ao lidar com sites responsivos. Aprenda mais sobre elas <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length" target="_blank" rel="noopener">aqui</a>.
<h1>7. Entenda todos os diferentes valores do POSITION</h1>
Já se perguntou porque às vezes você define o position como absolute e o elemento voa direto para o topo da página e outras vezes simplesmente permanece no mesmo lugar?
A chave é como os <a href="http://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener">valores do position</a> interagem entre si. absolute, relative, fixed ou static possuem seus próprios casos de uso e você deve entender onde cada um deles deve ser usado.
<h1>8. Pseudo-seletores</h1>
Os seletores CSS não são só as classes, ids e elementos. A cada nova versão da especificação CSS, um novo pseudo seletor aparece e permite realizar coisas com CSS puro que antes só podiam ser realizadas com Javascript ou processamento no servidor.

<em>:last-of-type, :last-child, ::before</em> são alguns dos exemplos de pseudo seletores que são usados a todo tempo. <a href="https://kimblim.dk/css-tests/selectors/" target="_blank" rel="noopener">Este site</a> mostra uma lista gigantesca de pseudo seletores incluindo definição, exemplos e o suporte em cada versão de navegador.

Não há muitos segredos aqui, mas assegure-se de que entende tudo o que as abas Styles e Computed têm a oferecer. Elas são muito úteis para entender onde certas propriedades estão sendo sobre-escritas e testar coisas novas rapidamente.

Além disso, garanta no seu fluxo de desenvolvimento que os source maps estão sendo gerados, assim você poderá ver em qual arquivo/linha aquela propriedade está sendo definida, diretamente pelo navegador.
<h1>Conclusão</h1>
Após compreender todos esses 9 pontos, você possuirá um vasto conhecimento de como controlar seus estilos, especialmente em questão de layout, que na minha opinião é a parte mais complexa.

É claro que o mundo do CSS é muito mais do que layout e há muitos outros tópicos mais avançados para cobrir, como animações, transições, transformações, o <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener">novo grid layout</a>, etc… mas quanto a isso, você precisará entender o que cada propriedade faz e o que são os seus diferentes valores, mas tudo que tratamos aqui servirá como uma base sólida.

Tornar-se profissional em CSS necessita de muito tempo e prática, mas com uma base sólida não será uma jornada difícil.

E no final desse artigo, aliás, nenhum post sobre CSS pode ser completo sem esse GIF. Ele nunca fica velho!

<a href="https://media.giphy.com/media/nArBQosm5nXdm/giphy.gif"><img class="alignnone size-full" src="https://media.giphy.com/media/nArBQosm5nXdm/giphy.gif" alt="Family Guy lidando tendo trabalho com uma cortina persiana" width="460" height="345" /></a>

<em>Primeiramente postado no meu Medium em <a href="https://medium.com/@leandrw/css-do-odeio-essa-m-a-pode-deixar-comigo-f4203edfaec5" target="_blank" rel="noopener">CSS: do ‘Odeio essa m**’ a ‘pode deixar comigo!’</a></em>
