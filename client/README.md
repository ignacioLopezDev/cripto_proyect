CRIPTO PROYECT FRONT: CLIENT/

CSS:
    -BOOTSTRAP 5

AUTH:
    -AUTH0(front) - // https://auth0.com/blog/complete-guide-to-react-user-authentication/

PAGES
    -npm run build
    -package.json> abajo de "private"
        "homepage":"https://ignacioLopezDev.github.io/cripto_proyect",
    -npm i gh-pages
    -package.json> eb "scripts"
        "deploy": "gh-pages -d build"
    -git add .
    -git commit -m ""
    -git push origin main
    - npm run deploy