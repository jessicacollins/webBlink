@extends('layout')

@section('main_content')
<div class="register">
					@if (count($errors) > 0)
						<div class="alert alert-danger">
							<strong>Whoops!</strong> There were some problems with your input.<br><br>
							<ul>
								@foreach ($errors->all() as $error)
									<li>{{ $error }}</li>
								@endforeach
							</ul>
						</div>
					@endif

					<form role="form" method="POST" action="{{ url('/auth/register') }}">
						<input type="hidden" name="_token" value="{{ csrf_token() }}">

						<div >
							<div >
								<input type="text" name="name" value="{{ old('name') }}" placeholder="Name">
							</div>
						</div>

						<div>
							<div>
								<input type="email" name="email" value="{{ old('email') }}" placeholder="Email">
							</div>
						</div>

						<div>
							<div>
								<input type="password" class="form-control" name="password" placeholder="Password">
							</div>
						</div>

						<div>
							<div>
								<input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
							</div>
						</div>

						<div>
							<div>
								<button type="submit" class="btn btn-primary">
									Register
								</button>
							</div>
						</div>
					</form>
</div>
@endsection
