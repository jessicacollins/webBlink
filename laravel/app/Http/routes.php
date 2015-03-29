<?php

use App\Models\Pattern;
use App\Models\Pattern_Type;

Route::get('/', 'HomeController@index');

Route::get('home', 'HomeController@index');


Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::get('api/setpattern/{pattern_name}', 'PatternController@setPattern');
Route::get('api/setpattern/{pattern_name}/{params}', 'PatternController@setPattern');
Route::get('api/setparams/{params}', 'PatternController@setParams');
Route::get('api/savepattern', 'PatternController@savePattern');
// Route::get('controlpanel', 'PatternController@getPatterns');
// Route::get('api/getpattern', 'PatternController@getPatterns');
Route::get('api/getpattern/{pattern_id}', 'PatternController@getPattern');
// Route::get('delete/{pattern_id}', 'PatternController@deletePattern');



Route::get('/login', function () {
	return view('/auth/Login');
});

Route::get('register', function () {
	return view('/auth/register');
});

// Route::get('controlpanel', function () {
// 	return view('controlPanel');
// });

// Route::get('controlpanel', 'PatternController@getPattern');

Route::get('controlpanel', function () {
    $patterns = Pattern::all();
    $p_types = Pattern_Type::all();
    return view('controlPanel', ['patterns' => $patterns->getArray()], ['p_types' => $p_types->getArray()]);
});






