<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Home</title>
	<link rel="stylesheet" href="/css/styles.css">
</head>
<body>
	<main>
		<header>
			@section('header')
				<div class="logo">
					<a href="/"><h1>&lt;web<strong>B</strong>link&gt;</h1></a>
				</div>
					<nav>
						@if(Auth::guest())
						<a href="/auth/login">Login</a>
						<a href="/auth/register">Register</a>
						@else
						<a href="/auth/logout">Logout</a>
						<a href="/userprofile">Profile</a>
						@endif
					</nav>
			@show
		</header>

		<div class="content">
			@yield('main_content')
		</div>
		<footer>
			@section('footer')
				<a href="">About</a>
				<a href="https://www.spark.io/">Spark.io</a>
				<a href="http://www.adafruit.com/">adafruit</a>
			@show
		</footer>
	<main>
</body>
</html>