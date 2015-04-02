<?php namespace App\Http\Controllers;

use Request;
use App\Models\Pattern;
use DB;

class PatternController extends Controller {

	//Set to true for testing if spark is not connected
	protected $test = true;

	//Get custom pattern settings
	public function getPattern($pattern_id) {
		$pattern = new Pattern($pattern_id);

		return response()->json(['color' => $pattern->color, 'speed' => $pattern->speed, 'intensity' =>$pattern->intensity, 'pattern_name' => $pattern->pattern_name, 'pattern_type_id' => $pattern->pattern_type_id]);
	}

	//Save a custom pattern
	public function savePattern() {
		$color = Request::input('color');
		$speed = Request::input('speed');
		$intensity = Request::input('intensity');
		$pattern_name = Request::input('pattern_name');
		$pattern_type_id = Request::input('pattern_type_id');

		$pattern = new Pattern();
		$pattern->color = $color;
		$pattern->speed = $speed;
		$pattern->intensity = $intensity;
		$pattern->pattern_name = $pattern_name;
		$pattern->pattern_type_id = $pattern_type_id;
		$pattern->save();

		$pdo = DB::getPdo();
		$id = $pdo->lastInsertId();
	
		return response()->json(['name' => $pattern_name, 'id' => $id]);
	}

	//Update a custom pattern
	public function updatePattern($pattern_id) {

		$color = Request::input('color');
		$speed = Request::input('speed');
		$intensity = Request::input('intensity');
		$pattern_name = Request::input('pattern_name');
		$pattern_type_id = Request::input('pattern_type_id');

		$pattern = new Pattern($pattern_id);
		$pattern->color = $color;
		$pattern->speed = $speed;
		$pattern->intensity = $intensity;
		$pattern->pattern_name = $pattern_name;
		$pattern->pattern_type_id = $pattern_type_id;
		$pattern->save();

		return response()->json(['color' => $pattern->color, 'speed' => $pattern->speed, 'intensity' =>$pattern->intensity, 'name' => $pattern->pattern_name, 'pattern_type_id' => $pattern->pattern_type_id]);
	}

	// Delete a custom pattern
    public function deletePattern($pattern_id) {
    	$sql = '
			DELETE FROM pattern WHERE pattern_id = :pattern_id
    	';
    	$delete_values = ['pattern_id' => $pattern_id];
		
		$results = DB::delete($sql, $delete_values);

		return response()->json(['results' => $results]);
    }

	public function setParams($params) {
		return $this->sendSparkCommand($params);
	}

	public function setPattern($pattern_name, $params=[]) {
		return $this->sendSparkCommand($pattern_name, $params);
	}

	private function sendSparkCommand($params) {

		if ($this->test) {
			return 'Test mode:' . $params;
		}


		// Get CURL resource
		$curl = curl_init();
		
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => 'https://api.spark.io/v1/devices/55ff6d065075555318171787/neo/',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'params' => $params
		    )
		));

		curl_setopt($curl,CURLOPT_HTTPHEADER,array('Authorization: Bearer 2e8d1926d5f104b430cd374cccef8e4729c38f43')); 

		// Send the request & save response to $resp
		$resp = curl_exec($curl);

		// Close request to clear up some resources
		curl_close($curl);

		return $resp . ' ' . $params;
	}
}