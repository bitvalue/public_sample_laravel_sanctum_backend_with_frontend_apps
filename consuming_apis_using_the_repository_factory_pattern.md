# Consuming APIs Using the Repository Factory Pattern
## Directory structure
```
+ src/
    + repositories/
        + SelfApi/
            + CrsfCookie/
                + index.js
            + User/
                + index.js
            + Repository.js
        + AnotherEndpointApi/
            + Post/
                + index.js
            + Repository.js
        + RepositoryFactory.js
```
## Usage
```js
import RepositoryFactory from '@/repositories/RepositoryFactory'
// User repository of SelfApi
const SelfApiUser = RepositoryFactory('User', 'SelfApi')
const response = await SelfApiUser.create({dataset})
const { data } = await SelfApiUser.search({conditions})
const { data } = await SelfApiUser.get(id)
const response = await SelfApiUser.update({dataset})
const response = await SelfApiUser.delete(id)
// Post repository of AnotherEndpointApi
const AnotherEndpointApiPost = RepositoryFactory('Post', 'AnotherEndpointApi')
const response = await AnotherEndpointApiPost.create({dataset})
const { data } = await AnotherEndpointApiPost.search({conditions})
const { data } = await AnotherEndpointApiPost.get(id)
const response = await AnotherEndpointApiPost.update({dataset})
const response = await AnotherEndpointApiPost.delete(id)
```
## Backend (Laravel) URIs
| URI               | Verb             | Action                | Frontend method       |
| ----------------- | ---------------- | --------------------- | --------------------- |
| /api/[model]/     | [POST:dataset]   | Create a dataset      | .create({dataset})    |
| /api/[model]/?... | [GET:conditions] | Read list of datasets | .search({conditions}) |
| /api/[model]/{id} | [GET]            | Read a dataset        | .get(id)              |
| /api/[model]/{id} | [PATCH:dataset]  | Update a dataset      | .update({dataset})    |
| /api/[model]/{id} | [DELETE]         | Delete a dataset      | .delete(id)           |
