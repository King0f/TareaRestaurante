<?php 
declare (strict_types = 1);
use PHPUnit\Framework\TestCase;

final class CIFTest extends TestCase{
    /**
     * La función testComprobacionLongitudCif comprueba si el CIF (número de identificación fiscal)
     * tiene la longitud correcta de 9 dígitos.
     */
    public function testComprobacionLongitudCif(){
        $this->expectException(LengthException::class);
        $this->expectExceptionMessage("ERROR: El CIF debe tener 9 cifras");
        $cif = new CIF("12041941241924");
        
    }
    /**
     * La función está probando la validación de la primera letra de un número CIF.
     */
    public function testComprobacionPrimeraLetraValida(){
        $this->expectException(Exception::class);
        $this->expectExceptionMessage("ERROR: Inserte una letra valida");
        $cif = new CIF("I75409177");
    }

    /**
     * La función prueba la correcta validación de un dígito de control en un CIF.
     */
    public function testComprobacionDigitoControlCorrecto(){
        $this->expectException(Exception::class);
        $this->expectExceptionMessage("ERROR: Inserte un digito de control valido");
        $cif = new CIF("A58818504");
    }

    /**
     * La función prueba si una instancia CIF se crea correctamente a partir de una cadena.
     */
    public function testCifInstanciadoCorrectamente(){
        $this->assertInstanceOf(
        CIF::class,
        CIF::fromString('A58818501')
        );
    }
}
?>