# Prime Painting

Site institucional da **Prime Painting**, empresa de pintura residencial e comercial da região central da Flórida. O conteúdo público está em inglês.

Desenvolvido em **HTML, CSS e JavaScript**, com imagens locais em WebP. O site funciona como arquivos estáticos, sem PHP, banco de dados, dependências de produção ou build obrigatório.

## Executar localmente

Para usar as ferramentas de desenvolvimento, tenha Node.js 18 ou superior instalado. Não é necessário executar `npm install`.

```bash
npm run dev
```

Abra http://127.0.0.1:4173. Para encerrar o servidor, pressione `Ctrl+C`.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servir o site a partir da raiz do projeto. |
| `npm run check` | Verificar sintaxe JavaScript, links e arquivos locais, âncoras, IDs únicos, idioma e JSON-LD. |
| `npm run build` | Copiar os arquivos públicos para `dist/`, recriando essa pasta. |
| `npm run preview` | Servir a pasta `dist/` após gerar o build. |

O build é opcional: o deploy direto pelo Git utiliza os arquivos da raiz. A hospedagem não precisa de Node.js para servir o site.

## Estrutura

```text
.
├── index.html             # Página principal
├── privacy.html           # Aviso de privacidade
├── styles.css             # Estilos e layout responsivo
├── script.js              # Menu, galeria, comparações e formulário
├── assets/
│   ├── brand/             # Logo atual, originais e alternativas
│   ├── images/            # Fotos dos projetos em WebP
│   └── favicon.svg        # Ícone do site
├── scripts/
│   ├── serve.mjs          # Servidor local
│   ├── check.mjs          # Validação de referências e estrutura
│   └── build.mjs          # Build estático opcional
├── .htaccess              # Página inicial, cache e compressão
├── .gitignore
├── package.json
└── robots.txt
```

`context/` contém o material original fornecido pela empresa e fica fora do Git. `dist/`, `release/`, ZIPs, arquivos de ambiente e diretórios locais de ferramentas também são ignorados. As imagens necessárias para executar o site estão versionadas em `assets/`.

## Publicar pelo Git

O repositório está organizado para publicar a **raiz** no diretório público da hospedagem, sem gerar ou enviar ZIPs.

| Configuração | Valor |
| --- | --- |
| Branch | A mesma configurada na integração; atualmente `master` |
| Diretório de origem | Raiz do repositório (`.`) |
| Diretório público na hospedagem | Diretório do domínio, normalmente `public_html` |
| Instalação de dependências | Não necessária |
| Comando de build | Não necessário |
| Página inicial | `index.html` |

Mantenha `index.html`, `privacy.html`, `styles.css`, `script.js`, `robots.txt`, `.htaccess` e `assets/` juntos. O arquivo inicial deve ficar diretamente no diretório público, sem uma pasta intermediária.

A conexão entre o repositório e a Hostinger deve estar configurada na conta de hospedagem. Um push só aciona publicação automática se essa integração estiver habilitada; o projeto não contém um pipeline próprio de deploy.

### Enviar alterações

```bash
npm run check
git status --short
git diff
git add .
git commit -m "Update Prime Painting website"
git push origin master
```

Esses comandos pressupõem que o remoto `origin` está configurado e que você usa a branch `master`. Se usar outra branch, ajuste o comando de push e a configuração de publicação.

Se a hospedagem ainda contém a versão PHP anterior, remova os antigos `index.php` e `privacy.php` após fazer backup. Arquivos externos ao controle do Git podem permanecer no servidor mesmo após um novo deploy.

### Publicação com pasta de saída

Caso outra integração exija uma pasta com apenas os arquivos públicos, execute `npm run build` e configure `dist/` como saída. Essa pasta é gerada localmente e não deve ser versionada.

## Recursos do site

- Navegação responsiva com menu para celular.
- Serviços em painéis expansíveis e seleção do serviço no formulário.
- Comparações de antes/depois de cozinha, gabinete de banheiro e corredor.
- Portfólio com oito projetos e filtros por categoria.
- Fotos ampliadas com botões **Previous** e **Next**, contador e navegação circular dentro do filtro selecionado.
- Navegação da galeria pelas setas do teclado e por deslize horizontal no celular.
- Fechamento da foto pelo botão, tecla Escape ou clique fora, com retorno do foco ao cartão de origem.
- Perguntas frequentes, links de ligação e perfil do Instagram.
- Página de privacidade, metadados sociais e dados estruturados `HousePainter`.
- Foco visível, link para pular ao conteúdo e suporte à preferência de movimento reduzido.

## Formulário de contato

O formulário **prepara uma mensagem de SMS**, mas não envia automaticamente, não envia e-mail e não grava dados em banco de dados.

1. O visitante informa nome, cidade ou ZIP code, serviço e descrição do projeto.
2. **Prepare my text message** gera uma mensagem na própria página.
3. O visitante pode abrir seu aplicativo de mensagens ou copiar o texto.
4. A empresa só recebe a mensagem quando o visitante confirma o envio no aplicativo.

O destinatário é **+1 (689) 305-5077**. A abertura do link `sms:` depende de um aplicativo compatível; copiar a mensagem e ligar são alternativas disponíveis. Nenhum SMS real foi enviado durante os testes.

## Manutenção de conteúdo

| Alteração | Arquivos |
| --- | --- |
| Textos, serviços, FAQ e contatos | `index.html` |
| Cores, espaçamentos e responsividade | `styles.css` |
| Interações, comparações e mensagem de SMS | `script.js` |
| Política informativa de privacidade | `privacy.html` |
| Fotos dos projetos | `assets/images/` e referências em `index.html` |
| Logo utilizada pelo site | `assets/brand/prime-painting-flat.webp` |
| Logo em PNG transparente | `assets/brand/prime-painting-flat.png` |

Ao alterar o telefone, atualize `index.html`, `script.js` e `privacy.html`, incluindo os links de ligação, SMS e dados estruturados.

A identidade usa azul-petróleo, dourado e branco quente. A logo atual tem estilo chapado e fundo transparente, mantendo apenas a casa e o nome **Prime Painting**. A seção **The Prime Approach** apresenta uma foto real do portfólio em uma composição compacta.

As fotos de obras vieram do material fornecido pela empresa. As comparações mostram os ângulos originais de cada foto. O Instagram é acessado por link para [@primepaintingoficial](https://www.instagram.com/primepaintingoficial/); não há feed incorporado ou sincronização automática de publicações.

## Domínio e SEO

Quando o domínio definitivo estiver configurado:

- Atualize `og:image` em `index.html` para a URL HTTPS absoluta da imagem.
- Adicione `og:url` e o link `canonical` com a URL real do site.
- Crie `sitemap.xml` com as URLs públicas e indique seu endereço em `robots.txt`.

O site não usa analytics, cookies de publicidade ou fontes externas.

## Validação

Execute `npm run check` antes de enviar alterações. Esse comando verifica referências locais e estrutura, mas não substitui a revisão visual ou o teste das interações no navegador.

O layout foi conferido em desktop e celular, incluindo largura de 320 px. Também foram verificados filtros, navegação da galeria, teclado, deslize, retorno de foco, comparações e preparação da mensagem de contato.

Após publicar, confira o domínio no computador e no celular, incluindo carregamento das imagens, galeria e abertura dos links de contato.
