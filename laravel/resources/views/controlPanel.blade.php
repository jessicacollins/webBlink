@extends('layout')


	@section('main_content')
		<div class="control-panel">
			<div class="left-panel panel fog">
				<div class="box">
					<header><h2><i class="fa fa-fire"></i>  Patterns</h2></header>
					<section>
						<form class="patterns-form">
							
							<div>
							  <input type="radio" value="rainbow" name="pattern" />
							  <label for="rainbow"><span id="rainbow"></span>Rainbow Pattern</label>
							</div>

							<div>
							 <input type="radio" value="chase" name="pattern" />
							 <label for="chase"><span></span>Chase Pattern</label>
							</div>
							<div>
							 <input type="radio" value="cylon" name="pattern" />
							 <label for="cylon"><span></span>Cylon Pattern</label>
							</div>
							
						</form>
					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-star"></i>  Save Pattern</h2></header>
					<section>
						<div class="save-pattern">
							<form action="">
								<input type="text" name="pattern-name" placeholder="Pattern Name">
								<button>Save</button>
							</form>
						</div>
					</section>
				</div>
			</div>
			<div class="middle-panel panel glass">
				<div class="box">
					<header><h2><i class="fa fa-bolt"></i>  Speed</h2></header>
					<section>
						<input type="text" class="dial speed" data-min="0" data-max="255" value="0" data-thickness=".3">			

					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-fire"></i>  Intensity</h2></header>
					<section>
						<input type="text" class="dial intensity" data-min="0" data-max="255" value="0" data-thickness=".3">			


					</section>
				</div>
			</div>
			<div class="right-panel panel fog">
				<div class="box">
					<header><h2><i class="fa fa-fire"></i>  Colors</h2></header>
					<section >
						<div class="colors" id="picker"></div>
					</section>
				</div>
				<div class="box">
					<header><h2><i class="fa fa-power-off"></i> Power Off</h2></header>
					<section class="power">
						<i class="fa fa-power-off fa-5x off"></i>
						
					</section>
				</div>
			</div>
		</div>

@endsection



