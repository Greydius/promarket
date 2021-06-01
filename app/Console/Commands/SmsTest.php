<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SmsTest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sms:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        // The data to send to the API
        $postData = array(
            'api_key' => '3k47zv4011t5i6xjcvsp34vqweh6c7cz',
            'user_name' => 'torsherio@gmail.com',
            'action' => 'calls.send_sms',
            'to' => '998911667347',
            'text' => 'Wake up, Samurai! We have fat to burn!'
        );

        // Setup cURL
        $ch = curl_init('https://prosadiga.moizvonki.ru/api/v1');
        curl_setopt_array($ch, array(
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json'
            ),
            CURLOPT_POSTFIELDS => json_encode($postData)
        ));

        // Send the request
        $response = curl_exec($ch);

        // Check for errors
        if($response === FALSE){
            die(curl_error($ch));
        }

        // Decode the response
        $responseData = json_decode($response, TRUE);

        // Close the cURL handler
        curl_close($ch);

        // Print the date from the response
        $this->info($responseData);
    }
}
