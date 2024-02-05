<?php 
declare (strict_types = 1);

final class CIF{
    private $cif;
    /**
     * La función construye un objeto con CIF (número de identificación fiscal) y valida su longitud,
     * letra y dígito de control.
     * 
     * @param string cif El parámetro "cif" es una cadena que representa un número CIF (Certificado de
     * Identificación Fiscal). Se espera que tenga una longitud de 9 caracteres.
     */
    public function __construct(string $cif){
        if (strlen($cif) != 9){
            throw new LengthException("ERROR: El CIF debe tener 9 cifras");
        }else if ($this->comprobarLetra($cif) == false){
            throw new Exception("ERROR: Inserte una letra valida");
        }else if($this->validarFinal($cif) == false){
            throw new Exception("ERROR: Inserte un digito de control valido");
        }
        else{
            $this->cif = $cif;
        }
    }

    /**
     * La función "fromString" crea una nueva instancia de la clase utilizando un parámetro de cadena
     * determinado.
     * 
     * @param string cif El parámetro `` es una cadena que representa un número CIF (Archivo de
     * información del cliente).
     */
    public static function fromString(string $cif){
        return new self($cif);
    }
   /**
    * La función __toString() devuelve la propiedad CIF del objeto como una cadena.
    * 
    * @return string La función __toString() devuelve el valor de la propiedad ->cif como una
    * cadena.
    */
    public function __toString() : string{
        return $this->cif;
    }
    /**
     * La función comprueba si el primer carácter de una cadena determinada es una de las letras
     * especificadas.
     * 
     * @param string cif The parameter "cif" is a string that represents a CIF (Certificado de
     * Identificación Fiscal) number.
     * 
     * return un valor booleano. Si el primer carácter de la cadena de entrada `` es una de las
     * letras especificadas ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'P' , 'Q', 'S', 'K', 'L', 'M'), la
     * función devuelve "verdadero". De lo contrario, devuelve "falso".
     */
    public function comprobarLetra(string $cif){
        $letrainicial = $cif[0];
        if ($letrainicial == 'A' || $letrainicial == 'B' || $letrainicial == 'C' || $letrainicial == 'D'|| $letrainicial == 'E' || $letrainicial == 'F'|| $letrainicial == 'G' || $letrainicial == 'P'|| $letrainicial == 'Q' || $letrainicial == 'S'|| $letrainicial == 'K' || $letrainicial == 'L'|| $letrainicial == 'M'){
            return true;
        }else{
            return false;
        }
    }

    /**
     * La función "validarFinal" en PHP sirve para validar el dígito final de un CIF (número de
     * identificación fiscal español) realizando una serie de cálculos.
     * 
     * return un valor booleano. Devuelve verdadero si el dígito de control calculado coincide con el
     * dígito de control dado y falso en caso contrario.
     */
    public function validarFinal(string $cif){
        $digitoControl = intval(substr($cif, -1));
        $cif = substr($cif, 1, strlen($cif) - 2);
        $suma1 = 0;
        $suma2 = 0;
        for ($i = 0; $i < strlen($cif); $i++){
            if (($i + 1) % 2 == 0){
                $suma1 += intval($cif[$i]);
            }else{
                $num = intval($cif[$i]) * 2;
                if (strlen((string)$num) == 2){
                    $num1 = substr((string)$num,0,1);
                    $num2 = substr((string)$num,1,2);
                    $num = intval($num1) + intval($num2);
                    $suma2 += $num;
                    
                    
                }else{
                    $suma2 += $num;
                }
            }
        }
        $suma = $suma1 + $suma2;
        $final = intval(substr((string)$suma, -1));
        if(10 - $final == $digitoControl){
            return true;
        }else{
            return false;
        }
    
    }
}
?>