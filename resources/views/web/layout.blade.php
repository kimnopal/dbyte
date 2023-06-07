<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>dByte | @yield('title')</title>
</head>
<body class="md:max-w-[895px] m-auto">
    @include('web.layout.navbar')
    <div class="h-[1000px]"></div>
    @include('web.layout.footer')
</body>
</html>