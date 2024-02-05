<?php 
declare (strict_types = 1);

final class DNI{
    private $dni;
    public function __construct(string $dni){
        if (strlen($dni) > 9){
            throw new LengthException("Demasiado largo");
        }else if (strlen($dni) < 9){
            throw new LengthException("Demasiado corto");
        }
        else{
            $this->dni = $dni;
        }
    }

    public static function fromString(string $dni){
        return new self($dni);
    }
    public function __toString() : string{
        return $this->dni;
    }
}
?>