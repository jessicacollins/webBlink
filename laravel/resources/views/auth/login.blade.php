@extends('layout')

@section('main_content')
	<div class="main">
		<div class="login">
			{{-- <div class="login-header">Login</div> --}}
			<div>
				@if (count($errors) > 0)
					<div class="alert alert-danger">
						<strong>Whoops!</strong> There were some 	problems with your input.<br><br>
						<ul>
							@foreach ($errors->all() as $error)
								<li>{{ $error }}</li>
							@endforeach
						</ul>
					</div>
				@endif

				<form method="POST" action="{{ url('/auth/login') }}">
					<input type="hidden" name="_token" value="{{ csrf_token() }}">

					<div >
						
						<div>
							<input type="email"  placeholder="Email Address" name="email" value="{{ old('email') }}">
						</div>
					</div>

					<div>
						
						<div>
							<input type="password"  name="password" placeholder="Password">
						</div>
					</div>

					<div>
						<div>
							<button type="submit">Login</button>

							<div class="forgot-password"><a href="{{ url('/password/email') }} ">Forgot Your Password?</a><div>
						</div>
					</div>
				</form>
			</div>
		</div>	
	</div>
@endsection
