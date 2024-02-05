@extends('layouts.app')

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const nTarjetaInput = document.getElementById('Nº_Tarjeta');
        const cvvInput = document.getElementById('CVV');
        const btnSubmit = document.getElementById('btnSubmit');

        [nTarjetaInput, cvvInput].forEach(input => {
            input.addEventListener('input', () => {
                if (nTarjetaInput.checkValidity() && cvvInput.checkValidity()) {
                    btnSubmit.disabled = false;
                } else {
                    btnSubmit.disabled = true;
                }
            });
        });
    });
</script>

@section('content')
<div class="container">
    <h2>Añadir Tarjeta de Crédito</h2>
    <form method="POST" action="{{ route('guardar-tarjeta') }}">
        @csrf

        <div class="form-group">
            <label for="Nº_Tarjeta">Número de Tarjeta (Formato: 1111-1111-1111-1111):</label>
            <input type="text" class="form-control" id="Nº_Tarjeta" name="Nº_Tarjeta" required pattern="\d{4}-\d{4}-\d{4}-\d{4}">
        </div>

        <div class="form-group">
            <label for="Fecha_Caducidad">Fecha de Caducidad (MM/AA):</label>
            <input type="text" class="form-control" id="Fecha_Caducidad" name="Fecha_Caducidad" required pattern="(0[1-9]|1[0-2])\/\d{2}">
            <small>Formato: MM/AA (por ejemplo, 01/23)</small>
        </div>

        <div class="form-group">
            <label for="CVV">CVV (Formato: 123):</label>
            <input type="text" class="form-control" id="CVV" name="CVV" required pattern="\d{3}">
        </div>

        <button type="submit" id="btnSubmit" class="btn btn-primary" disabled>Añadir Tarjeta</button>
    </form>
</div>
<footer class="bg-gray-800 p-4 text-white text-center fixed bottom-0 w-full">
    Pagina creada por Nicolas Gomez Mulero
</footer>
@endsection

