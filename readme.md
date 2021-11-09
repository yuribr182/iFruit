<h1 align="center">
  Desafio Framework - iFruit
</h1>


1.  **Instalação.**

    ```sh
    npm install
    ```
2.  **Execute o Projeto com o expo!**
    
    ```sh
    expo start
    ```
    
3.  **Teste o Projeto com o expo!**

    Depois de ter executado o expo é só escanear o qr code! 
     
## Estruturas de pastas

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

