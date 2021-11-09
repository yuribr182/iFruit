<h1 align="center">
  Desafio Framework - iFruit
</h1>

Aplicativo Desenvolvido por <a href="https://www.instagram.com/yuritome/">Yuri Mendonça</a>

1.  **Execute os pacotes.**

    ```sh
    npm install ou
    yarn install
    ```
2.  **Execute o Projeto com o expo!**
    Agora precisamos executar o projeto!
    
    ```sh
    expo start
    ```
    
3.  **Teste o Projeto com o expo!**

    Depois de ter executado o expo é só escaniar o código qr! 
     
## Estruturas de pastas

Saiba a estruturação deste projeto / src

     
    ├── src
      ├── components
        ├── buttons 
            Button.js
            LinkButton.js
        ├── textinputs
            UnderlinePasswordInput.js
            UnderlineTextInput.js
      ├── configs
        action.js
        http.js
        images.js
        reducers.js
      ├── images
      ├── navigation
        CartNavigator.js
        DeliveryNavigator.js
        HomeNavigator.js
        MainNavigator.js
        MaisNavigator.js
      ├── scenes
        ├── delivery
          ├── components
            ├── cart
              ├── components
                Order.js
              Cart.js
              index.js
              styles.js
            ├── deliverys
              ├── components
                index.js
                components.js
                styles.js
              Deliverys.js
              index.js
              style.js
            ├── product
              index.js
              Product.js
              styles.js
          actions.js
          initialState.js
          reducer.js
        ├── user
          ├── components
            ├── intro
              index.js
              Intro.js
              styles.js
            ├── login
              index.js
              Login.js
              styles.js
            ├── menu
              index.js
              Menu.js
              styles.js
        actions.js
        initialState.js
        reducer.js  
      ├── theme
        colors.js
        layout.js
      App.js

