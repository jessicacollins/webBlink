@extends('layout')


	@section('main_content')
		<div class="control-panel">
			<div class="left-panel panel fog">
				<div class="box">
					<header><h2><i class="fa fa-fire"></i>  Patterns</h2></header>
					<section>
						<div class="patterns-scroll">	
							<form class="patterns-form">
								@foreach($patterns as $pattern)	
								   
									
{{-- 								    <label class="special-radio">
								        <input type="radio" name="pattern" value="{{$pattern->pattern_type_id}}">
								        <div class="toggle">
								            <div></div>
								        </div>
								        {{$pattern->pattern_name}}
								    </label> --}}
							
{{-- 								<div class="pattern-radio">
								  <input type="radio" value="{{$pattern->pattern_id}}" name="pattern" />
								  <label><span></span>{{$pattern->pattern_name}}</label>
								</div> --}}
								<div>
								  <input type="radio" value="{{$pattern->pattern_id}}" id="{{$pattern->pattern_id}}" name="pattern" />
								  <label for="{{$pattern->pattern_id}}"><span></span>{{$pattern->pattern_name}}</label>
								</div>
								@endforeach	
							</form>
						</div>
						<button class="new-pattern">New Pattern</button>
					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-star"></i>  Save Pattern</h2></header>
					<section>
						<div class="save-pattern">
							<form action="">
						<select class="pattern_select">
							@foreach($p_types as $p_type)
							<option value="{{$p_type->pattern_type_id}}">{{$p_type->display_name}}</option>
								
							@endforeach
						</select>
								<input type="text" name="pattern-name" placeholder="Pattern Name">
								<button class="save-pattern">Save</button>
								<button class="update-pattern">Update</button>
								<button class="delete-pattern">Delete</button>
							</form>
						</div>
					</section>
				</div>
			</div>
			<div class="middle-panel panel glass">
				<div class="box">
					<header><h2><i class="fa fa-bolt"></i>  Speed</h2></header>
					<section>
						<input type="text" class="dial speed" data-min="0" data-max="255" value="0" data-angleArc=320 data-angleOffset=17 data-thickness=".3" data-fgColor="#00FFFF">			

					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-fire"></i>  Intensity</h2></header>
					<section>
						<input type="text" class="dial intensity" data-min="0" data-max="255" value="0" data-angleArc=320 data-angleOffset=17 data-thickness=".3" data-fgColor="#00FFFF">			


					</section>
				</div>
			</div>
			<div class="right-panel panel fog">
				<div class="box">
					<header><h2><i class="fa fa-paint-brush"></i>  Colors</h2></header>
					<section>
						<div class="colors" id="picker"></div>
					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-power-off"></i> Power Off</h2></header>
					<section class="power">
						<i class="fa fa-power-off fa-5x off-hover"></i>
						
					</section>
				</div>
			</div>
		</div>

@endsection



