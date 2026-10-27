# Prime Painting

Site institucional da **Prime Painting**, empresa de pintura residencial e comercial sediada em **Orlando, Florida**, com atendimento na região de **Central Florida**. O conteúdo público está em inglês.

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
├── phone-popup.js         # Popup de ligar ou enviar SMS
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

Mantenha `index.html`, `privacy.html`, `styles.css`, `script.js`, `phone-popup.js`, `robots.txt`, `.htaccess` e `assets/` juntos. O arquivo inicial deve ficar diretamente no diretório público, sem uma pasta intermediária.

A conexão entre o repositório e a Hostinger deve estar configurada na conta de hospedagem. Um push só aciona publicação automática se essa integração estiver habilitada; o projeto não contém um pipeline próprio de deploy.

O HTML, CSS e JavaScript são configurados para revalidação de cache em `.htaccess`. As páginas usam um parâmetro de versão nas referências de CSS e JavaScript; ao fazer uma mudança visual ou de interação importante, atualize esse valor nos links do HTML para evitar que um navegador use arquivos antigos após o deploy.

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
- Entradas suaves ao rolar, com pequenos intervalos entre elementos e execução única. As animações respeitam movimento reduzido e são canceladas ao receber foco pelo teclado; sem JavaScript, o conteúdo continua visível.
- Seis serviços em cartões abertos: gabinetes, pintura interna, pintura externa, remoção de popcorn ceiling, aplicação de textura e pintura comercial. Cada cartão seleciona o serviço no formulário.
- Antes/depois em destaque logo após a capa, com os 12 pares fornecidos e um controle deslizante para revelar cada transformação com mouse, toque ou teclado.
- No projeto 3 (gabinete de banheiro), os nomes dos arquivos originais estão invertidos em relação à sequência real: `depois3` é o **antes** escuro e `antes3` é o **depois** branco. O site corrige essa ordem em `script.js` e publica apenas o resultado branco no portfólio.
- Portfólio no estilo Instagram, com cabeçalho de perfil, 22 fotos de resultados finais, quadradas em três colunas e filtros por categoria. Fotos de antes e de trabalhos em andamento não aparecem no portfólio. Os 12 pares completos continuam na seção de antes/depois. O botão View Instagram abre o perfil real; a grade é local, sem sincronização automática ou contadores fictícios de curtidas/seguidores.
- Fotos ampliadas com botões **Previous** e **Next**, contador e navegação circular dentro do filtro selecionado.
- Navegação da galeria pelas setas do teclado e por deslize horizontal no celular.
- Fechamento da foto pelo botão, tecla Escape ou clique fora, com retorno do foco ao cartão de origem.
- Free estimates (orçamentos grátis) destacados na capa, navegação, serviços, FAQ e contato.
- Perguntas frequentes, links de ligação e perfil do Instagram.
- Página de privacidade, metadados sociais e dados estruturados `HousePainter`.
- Foco visível, link para pular ao conteúdo e suporte à preferência de movimento reduzido.

## Formulário de contato

O formulário **prepara uma mensagem para SMS ou e-mail**, mas não envia automaticamente nem grava dados em banco de dados. O visitante confirma o envio no aplicativo de mensagens ou de e-mail.

1. O visitante informa nome, cidade ou ZIP code, serviço e descrição do projeto.
2. **Prepare my free estimate request** gera uma mensagem na própria página.
3. O visitante pode abrir seu aplicativo de mensagens, abrir um rascunho de e-mail ou copiar o texto.
4. A empresa só recebe a mensagem quando o visitante confirma o envio no aplicativo.

O destinatário é **+1 (689) 305-5077**. A abertura do link `sms:` depende de um aplicativo compatível; copiar a mensagem e ligar são alternativas disponíveis. Nenhum SMS real foi enviado durante os testes.

## Manutenção de conteúdo

| Alteração | Arquivos |
| --- | --- |
| Textos, serviços, FAQ e contatos | `index.html` |
| Cores, espaçamentos e responsividade | `styles.css` |
| Interações, comparações e mensagem de SMS | `script.js` |
| Popup dos links de telefone nas duas páginas | `phone-popup.js` |
| Política informativa de privacidade | `privacy.html` |
| Fotos dos projetos | `assets/images/`, referências em `index.html` e descrições dos pares em `script.js` |
| Logo utilizada pelo site | `assets/brand/prime-painting-flat.webp` |
| Logo em PNG transparente | `assets/brand/prime-painting-flat.png` |

O destinatário de e-mail do formulário é configurado no atributo `data-contact-email` de `#project-form`, em `index.html`. O botão de e-mail só aparece quando o endereço é válido. O mesmo endereço deve ser exibido no bloco `.contact-email` como link `mailto:`.

Ao alterar o telefone, atualize `index.html`, `script.js` e `privacy.html`, incluindo os links de ligação, SMS, popup e dados estruturados.

A identidade usa azul-petróleo, dourado e branco quente. A logo atual tem estilo chapado e fundo transparente, mantendo apenas a casa e o nome **Prime Painting**. A seção **The Prime Approach** apresenta uma foto real do portfólio em uma composição compacta.

As fotos de obras vieram do material fornecido pela empresa. Dezessete fotos receberam retoques assistidos por IA para remover objetos temporários e pessoas, incluindo os novos pares do banheiro e das portas. As versões publicadas estão em `assets/images/cleaned/`; os JPEGs originais em `context/` e os PNGs editados em `context/retouched/` ficam preservados localmente. O registro dos retoques e prompts está em `docs/photo-retouching.md`. As demais fotos foram apenas convertidas para WebP. A imagem `context/capa.jpeg` é publicada como `assets/images/capa.webp` na capa e nas prévias sociais. As comparações mostram os ângulos originais de cada foto. O Instagram é acessado por link para [@primepaintingoficial](https://www.instagram.com/primepaintingoficial/); não há feed incorporado ou sincronização automática de publicações.

## Domínio e SEO

Quando o domínio definitivo estiver configurado:

- Atualize `og:image` em `index.html` para a URL HTTPS absoluta da imagem.
- Adicione `og:url` e o link `canonical` com a URL real do site.
- Crie `sitemap.xml` com as URLs públicas e indique seu endereço em `robots.txt`.

Ao adicionar uma foto retocada, atualize as referências em `index.html` e o conjunto `cleanedPhotos` em `script.js`, usado na galeria ampliada e nas comparações.

O site não usa analytics, cookies de publicidade ou fontes externas.

## Validação

Execute `npm run check` antes de enviar alterações. Esse comando verifica referências locais e estrutura, mas não substitui a revisão visual ou o teste das interações no navegador.

O layout foi conferido em desktop e celular, incluindo largura de 320 px. Também foram verificados filtros, navegação da galeria, teclado, deslize, retorno de foco, comparações e preparação da mensagem de contato.

Após publicar, confira o domínio no computador e no celular, incluindo carregamento das imagens, galeria e abertura dos links de contato.
