<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UnderProductToClient extends Mailable
{
    use Queueable, SerializesModels;
    public $name;
   
    public function __construct($name)
    {
        $this->name = $name;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.sms');
    }
}
