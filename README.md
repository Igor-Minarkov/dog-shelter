# Dog shelter

## Project setup

```
npm install vue
npm install -g @vue/cli
npm install 
```
## Linux
```
docker build -t _name_ .
docker run -p 5000:8080 _name_
```
### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Simple user manual
```
1. On the homepage, users can choose between a standard (table) view and a card view. There is a select option that we can use to choose our view.
2. On the cards view, we can choose between the standard cards view and the small cards view. We can switch the views with the help of the element UI switch.
3. There are details for every dog. To see the dog's details, we need to click on the card (this option is available when the card is normal or small).
4. We can search the dogs by breed; if we want to do that, we need to go to the breeds page, which is the second page in the navigation.
5. There is a timeline for every dog, but this link is available only if the role is admin. We can switch to the admin role if we use the select option on the top right.
6. The design should be improved.


