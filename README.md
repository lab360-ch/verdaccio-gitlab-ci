# Install

```bash
npm install verdaccio-gitlab-ci --save
```
# Configuration
```
auth:
  gitlab-ci:
    url: https://gitlab.com
    #url: https://privategitlab.example.com
```
In gitlab, project -> settings -> repository ->  deploy-tokens

# Local Dev  

```bash
npm install
mkdir node_modules/verdaccio-gitlab-ci
ln -s `pwd`/index.js node_modules/verdaccio-gitlab-ci/
ln -s `pwd`/package.json node_modules/verdaccio-gitlab-ci/

``` 



