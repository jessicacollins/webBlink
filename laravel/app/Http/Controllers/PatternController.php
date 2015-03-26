<?php namespace App\Http\Controllers;


class PatternController extends Controller {

	protected $test = true;


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


		// Get cURL resource
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => 'https://api.spark.io/v1/devices/55ff6d065075555318171787/' . $params,
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'params' => $params
		    )
		));

		curl_setopt($curl,CURLOPT_HTTPHEADER,array('Authorization: Bearer 9669e389e4b2fc8029a746f3f760042369f5a2c4')); 

		// Send the request & save response to $resp
		$resp = curl_exec($curl);
		// Close request to clear up some resources

		curl_close($curl);

		return $resp;
	}
}