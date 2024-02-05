<?php 
declare (strict_types = 1);
use PHPUnit\Framework\TestCase;

final class DNITest extends TestCase{
    public function testDniInstanciadoCorrectamente(){
        $this->assertInstanceOf(
        DNI::class,
        DNI::fromString('75893457Y')
        );
    }
}
?>