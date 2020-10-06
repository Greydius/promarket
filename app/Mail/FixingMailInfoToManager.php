<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FixingMailInfoToManager extends Mailable
{
    use Queueable, SerializesModels;
    public $request_details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request_details)
    {
        $this->request_details = $request_details;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.manager-mail');
    }
}
