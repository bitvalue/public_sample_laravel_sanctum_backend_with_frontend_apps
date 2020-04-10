# Laravel for API Server
- `http://backend.sanctum-sample.local:8000`
```shell
$ cd <project>
$ laravel new laravel
$ cd laravel
$ composer require laravel/ui
$ php artisan ui vue --auth
$ yarn && yarn prod
$ touch database/database.sqlite
$ vi .env # use sqlite for this sample
$ composer require laravel/sanctum
$ php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
$ php artisan migrate
$ php artisan tinker
> factory(App\User::class)->create(['email' => 'test@example.com']);
```
## laravel/.env
```
SESSION_DOMAIN=.sanctum-sample.local
SANCTUM_STATEFUL_DOMAINS=sanctum-sample.local
```
## laravel/app/Http/Kernel.php
```php
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

'api' => [
    EnsureFrontendRequestsAreStateful::class,
],
```
## laravel/config/cors.php
```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout'],
    'supports_credentials' => true,
]
```
## laravel/_serve.sh
```shell
$ touch _serve.sh
$ chmod 700 _serve.sh
$ vi _serve.sh
```
```bash
#!/bin/bash
php artisan serve --host=backend.sanctum-sample.local
```
To serve laravel backend.
```shell
$ cd <project>/laravel
$ ./_serve.sh
```
