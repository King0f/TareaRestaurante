<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservaMail extends Mailable
{
    use Queueable, SerializesModels;

    public $reserva;
    protected $informacionAdicional;
    public function __construct($reserva, $informacionAdicional = null)
    {
        $this->reserva = $reserva;
        $this->informacionAdicional = $informacionAdicional;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Reserva Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            
            view: 'reserva',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

    /**
     * La función crea un mensaje de correo electrónico con la confirmación de una reserva.
     * 
     * return una instancia de la clase Mail con la vista y los detalles del correo electrónico
     * especificados.
     */
    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
            ->subject('Confirmación de Reserva')
            ->view('reserva')
            ->with([
                'reserva' => $this->reserva,
                'informacionAdicional' => $this->informacionAdicional, // Asegúrate de pasar la variable
            ]);;  
    }
}
