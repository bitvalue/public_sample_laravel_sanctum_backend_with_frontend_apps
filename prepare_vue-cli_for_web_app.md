# Vue CLI for Web App
- `http://sanctum-sample.local:8080`
```shell
$ cd <project>
$ vue create -n vue-cli
$ cd vue-cli
$ yarn add axios
```
## vue-cli/_serve.sh
```shell
$ touch _serve.sh
$ chmod 700 _serve.sh
$ vi _serve.sh
```
```bash
#!/bin/bash
yarn serve --host=sanctum-sample.local
```
To serve vue-cli frontend.
```shell
$ cd <project>/vue-cli
$ ./_serve.sh
```
