<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/ru/profile/edit',
        '/en/profile/edit',
        '/lv/profile/edit',
        '/ru/profile/avatar',
        '/lv/profile/avatar',
        '/en/profile/avatar',
        '/ru/market/*',
        '/lv/market/*',
        '/en/market/*',
    ];
}
