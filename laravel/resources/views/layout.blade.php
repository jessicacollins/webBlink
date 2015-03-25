<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Control Panel</title>
	<script src="/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="/bower_components/jquery-knob/js/jQuery.knob.js"></script>
	<script src="/bower_components/colpick/js/colpick.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/css/normalize.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/css/styles.css">
	<link rel="stylesheet" href="/bower_components/colpick/css/colpick.css" type="text/css"/>

</head>
<body>
	<main>
		@section('header')
			<header class="primary-header">
				<div class="logo">
					<a href="/"><h1>&lt;web<strong>B</strong>link&gt;</h1></a>
				</div>
				<nav>
					<ul><li>Home</li>
						<li>
					    References
					    	<ul>
					      		<li><a href="http://www.adafruit.com/">Ada Fruit</a></li>
					      		<li><a href="https://www.spark.io/">Spark.io</a></li>
					    	</ul>
					  	</li>
					  	@if(Auth::guest())
						<li><a href="/auth/login">Login</a></li>
						<li><a href="/auth/register">Register</a></li>
						@else
						<li><a href="/controlpanel">Control Panel</a></li>
						<li><a href="/auth/logout">Logout
						</a></li>
						@endif
					</ul>
				</nav>
			</header>
		@show

		<div class="main-content">
			@yield('main_content')
		</div>
		<footer>
			@section('footer')
			@show
		</footer>
	<main>
	<script src="/js/main.js"></script>
</body>
</html>