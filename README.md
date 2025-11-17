# Política de Privacidade e Termos de Uso - ListaPro

Este diretório contém a página web com a Política de Privacidade e Termos de Uso do aplicativo ListaPro.

## 📁 Estrutura de Arquivos

```
legal/
├── index.html      # Página principal com sistema de abas
├── styles.css      # Estilos CSS modernos e responsivos
├── script.js       # JavaScript para funcionalidade das abas
├── logo-app.png    # Logo do aplicativo
├── privacy.html    # Redireciona para index.html#privacy
├── terms.html      # Redireciona para index.html#terms
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: GitHub Pages

1. Faça commit e push deste diretório para o seu repositório
2. No GitHub, vá em Settings > Pages
3. Configure a source como `/legal` ou `/root` dependendo da estrutura
4. A página estará disponível em: `https://seu-usuario.github.io/seu-repo/legal/`

### Opção 2: Servidor Local

1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server legal
   ```

## 🎨 Características

- ✅ Design moderno e responsivo com **cores do tema ListaPro**
- ✅ **Logo do aplicativo** exibida no header
- ✅ Sistema de abas para alternar entre Política de Privacidade e Termos de Uso
- ✅ **Links diretos** para cada documento (#privacy e #terms)
- ✅ **Páginas separadas** (privacy.html e terms.html) que redirecionam para a aba correta
- ✅ Animações suaves
- ✅ Compatível com dispositivos móveis
- ✅ Links para políticas externas (RevenueCat, Google Play, App Store, AdMob)
- ✅ Seções sobre assinatura Premium com RevenueCat
- ✅ Seções sobre anúncios com Google AdMob

## 📝 Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Alterar Informações de Contato

Edite as seções de contato no arquivo `index.html`:

```html
<p>Email: <a href="mailto:contato@classa.com">contato@classa.com</a></p>
<p>Website: <a href="https://classa.com">classa.com</a></p>
```

## 🔗 Links Importantes

### Links Diretos para os Documentos

- **Política de Privacidade**: `https://seu-usuario.github.io/seu-repo/legal/#privacy` ou `https://seu-usuario.github.io/seu-repo/legal/privacy.html`
- **Termos de Uso**: `https://seu-usuario.github.io/seu-repo/legal/#terms` ou `https://seu-usuario.github.io/seu-repo/legal/terms.html`

### Links Externos

- **RevenueCat Privacy**: https://www.revenuecat.com/privacy
- **Google Play Refund**: https://support.google.com/googleplay/answer/2479637
- **Apple App Store Refund**: https://support.apple.com/pt-br/HT202039

## 📱 Integração com o App

No seu aplicativo Flutter, você pode abrir esta página usando:

```dart
import 'package:url_launcher/url_launcher.dart';

// Abrir Política de Privacidade
void openPrivacyPolicy() async {
  const url = 'https://seu-usuario.github.io/seu-repo/legal/#privacy';
  // ou: const url = 'https://seu-usuario.github.io/seu-repo/legal/privacy.html';
  if (await canLaunchUrl(Uri.parse(url))) {
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  }
}

// Abrir Termos de Uso
void openTermsOfService() async {
  const url = 'https://seu-usuario.github.io/seu-repo/legal/#terms';
  // ou: const url = 'https://seu-usuario.github.io/seu-repo/legal/terms.html';
  if (await canLaunchUrl(Uri.parse(url))) {
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  }
}
```

## 📄 Licença

Este projeto é parte do ListaPro desenvolvido pela equipe Classa.

---

**Desenvolvido com ❤️ pela equipe Classa**

