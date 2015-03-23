<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::get('home', 'HomeController@index');


Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

// Route::get('/blink/{state}', function($state) {

// // Get cURL resource
// $curl = curl_init();
// // Set some options - we are passing in a useragent too here
// curl_setopt_array($curl, array(
//     CURLOPT_RETURNTRANSFER => 1,
//     CURLOPT_URL => 'https://api.spark.io/v1/devices/55ff6d065075555318171787/led',
//     CURLOPT_POST => 1,
//     CURLOPT_POSTFIELDS => array(
//         // 'access_token' => '9669e389e4b2fc8029a746f3f760042369f5a2c4',
//         'params' => 'l2,' . $state
//     )
// ));

// curl_setopt($curl,CURLOPT_HTTPHEADER,array('Authorization: Bearer 9669e389e4b2fc8029a746f3f760042369f5a2c4')); 
// // curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
// // Send the request & save response to $resp
// $resp = curl_exec($curl);
// // Close request to clear up some resources

// curl_close($curl);

// var_dump($resp);

// 	return "trying blink";
// });

Route::get('/neo/{command}', function($command) {

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://api.spark.io/v1/devices/55ff6d065075555318171787/neo',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => array(
        // 'access_token' => '9669e389e4b2fc8029a746f3f760042369f5a2c4',
        'params' => $command
    )
));

curl_setopt($curl,CURLOPT_HTTPHEADER,array('Authorization: Bearer 9669e389e4b2fc8029a746f3f760042369f5a2c4')); 
// curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources

curl_close($curl);

var_dump($resp);

    return "trying blink";
});

Route::get('/login', function () {
	return view('/auth/Login');
});

Route::get('register', function () {
	return view('/auth/register');
});

Route::get('controlpanel', function () {
	return view('controlPanel');
});