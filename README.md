# Prime Painting

Site estático em inglês, feito com HTML, CSS e JavaScript, pronto para deploy direto pelo Git. Sem PHP, banco de dados, dependências de produção ou build obrigatório.

## Publicação pelo Git

Os arquivos públicos já estão na raiz do repositório. Configure sua integração de deploy para publicar essa raiz no diretório do site (`public_html` na hospedagem):

- **Branch:** a mesma enviada ao remoto; a branch atual é `master`.
- **Diretório do site:** raiz do repositório (`.`).
- **Comando de instalação:** nenhum.
- **Comando de build:** nenhum.
- **Página inicial:** `index.html`.

Mantenha `index.html`, `privacy.html`, `styles.css`, `script.js`, `robots.txt`, `.htaccess` e `assets/` juntos. As imagens e a logo usadas pelo site estão incluídas no repositório.

Não é necessário enviar ZIPs nem versionar `dist/`. A integração entre o repositório e a hospedagem deve ser configurada na sua conta; este projeto não executa deploy remoto sozinho.

Se já publicou a versão PHP anterior, remova os antigos `index.php` e `privacy.php` da hospedagem após fazer backup. O Git não remove arquivos externos que nunca foram rastreados pelo repositório.

## Primeiro envio

O Git já está inicializado. Revise os arquivos e faça o primeiro commit:

```bash
npm run check
git status --short
git add .
git commit -m "Create Prime Painting website"
git push -u origin master
```

O comando de push pressupõe que `origin` já está configurado. Caso ainda não esteja, execute `git remote add origin URL_DO_REPOSITORIO` com a URL real antes do push. Se mudar o nome da branch, use o mesmo nome no push e na configuração de deploy.

O `.gitignore` exclui arquivos locais de contexto, credenciais, ZIPs, `dist/`, `release/` e diretórios de ferramentas. Os arquivos originais em `context/` ficam na sua máquina e não são necessários para o site funcionar.

## Desenvolvimento local

Node.js 18 ou superior é necessário apenas para as ferramentas locais. Não é preciso executar `npm install`.

```bash
npm run dev
```

Acesse http://127.0.0.1:4173.

```bash
npm run check
```

Valida a sintaxe do JavaScript, links e imagens locais, âncoras, IDs únicos, idioma e dados estruturados.

## Build opcional

Caso outra plataforma peça uma pasta de saída com os arquivos públicos:

```bash
npm run build
npm run preview
```

O build gera `dist/`, que fica fora do Git. Esse passo é opcional e não faz parte do deploy direto da raiz. A hospedagem não precisa de Node.js ou Python para servir o site.

## Funcionalidades

- Layout responsivo, navegação móvel e links de ligação.
- Serviços em painéis expansíveis, com seleção automática no formulário.
- Três comparações de antes/depois: cozinha, gabinete do banheiro e corredor.
- Galeria de oito projetos com filtros e ampliação em modal; navegação circular entre fotos por botões, setas do teclado e deslize horizontal no celular, respeitando o filtro ativo; fechamento por botão, Escape ou clique fora; retorno de foco ao cartão.
- Perguntas frequentes com controles HTML nativos.
- Formulário com validação que prepara um SMS para **+1 (689) 305-5077**.
- Alternativa para copiar o texto no computador.
- Página de privacidade, metadados sociais e dados estruturados `HousePainter`.
- Sem fontes externas, rastreamento, cookies de publicidade ou embeds do Instagram.
- Foco visível, link para pular ao conteúdo e respeito à preferência de movimento reduzido.

## Contato: funcionamento e limites

O formulário **não envia mensagens automaticamente** e não representa uma solicitação já recebida. Os dados ficam na página até o visitante abrir seu aplicativo e confirmar o envio. Não há endpoint, serviço externo de formulário ou coleta em banco de dados. A abertura de `sms:` depende de um aplicativo compatível no dispositivo; no computador, o usuário pode copiar o texto ou ligar. A entrega real do SMS não foi testada: nenhum contato foi enviado à empresa.

Telefone: `+16893055077` em `index.html`, `script.js` e `privacy.html`.
Instagram: https://www.instagram.com/primepaintingoficial/

## Conteúdo e identidade

- Informações da empresa: `context/context.md` fornecido pelo cliente.
- Identidade: logo original refinada em estilo chapado, sem relevo 3D, com fundo transparente, mantendo somente a casa e o nome Prime Painting, sem círculo ou serviços; paleta azul-petróleo, dourado e branco quente. Arquivos em `assets/brand/`. A seção The Prime Approach usa uma foto real do portfólio e uma composição compacta.
- Todas as fotos apresentadas vêm dos arquivos fornecidos, sem fotos de banco ou imagens geradas.
- Referências consultadas: https://www.newhopepainting.pro/ e https://megapropainters.com/. Textos, código e imagens próprios desses sites não foram reutilizados.
- O Instagram não permitiu leitura automatizada nesta sessão; o site inclui o link do perfil, sem copiar publicações não verificadas.
- Os vídeos não foram incluídos na publicação; um deles está identificado como ainda pendente de edição.
- Não foram inventados depoimentos, avaliações, anos de experiência, garantias, licenças ou cidades específicas de atendimento.
- As comparações usam fotos de ângulos diferentes, lado a lado, sem simular um alinhamento que não existe.

## Ajustes após definir o domínio

O domínio final não foi fornecido. Ao defini-lo, atualize `og:image` em `index.html` para a URL HTTPS absoluta da imagem, acrescente `og:url` e um link `canonical`, e gere um `sitemap.xml` com as URLs reais. Inclua a URL do sitemap em `robots.txt`. Nenhum domínio fictício foi colocado no código. Esses ajustes não impedem a publicação.

## Verificações

- Validação local com `npm run check` e geração opcional com `npm run build`.
- Layout conferido anteriormente no Chrome em desktop e celular, incluindo telas de 320 px.
- Galeria testada com filtros, navegação circular, teclado, deslize no celular e retorno de foco ao fechar.
- Formulário testado para preparar a mensagem; nenhum SMS foi enviado.

Nenhum commit, push ou deploy remoto foi realizado pelo assistente.
