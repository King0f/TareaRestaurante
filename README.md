# Los Cuatro Sentidos Web App

Bienvenido al repositorio oficial de la aplicación web del Restaurante Los Cuatro Sentidos, un elegante proyecto que combina la funcionalidad moderna con la estética de lujo para ofrecer una experiencia única tanto a los administradores del restaurante como a sus clientes. Este proyecto utiliza Laravel como backend para gestionar las peticiones a nuestra API REST, React para un frontend dinámico y reactivo, y TailwindCSS para un diseño moderno y responsivo, prometiendo elevar la presencia en línea de cualquier establecimiento de lujo.

## Características

- **Realizar reserva cliente no autenticado (envío de email):** Permite a cualquier visitante realizar una reserva, confirmando su acción a través de un email.
- **Realizar reserva cliente autenticado (se rellenan campos automáticamente en el formulario):** Los usuarios registrados pueden hacer reservas más rápidamente, ya que el sistema completa previamente el formulario con su información.
- **Acceder a mis reservas cliente autenticado:** Los usuarios pueden ver un historial de sus reservas realizadas.
- **Borrar reserva cliente autenticado:** Permite a los usuarios cancelar sus reservas.
- **Necesaria tarjeta de crédito para realizar reserva:** La reserva requiere de los detalles de una tarjeta de crédito.
- **Opción de guardar tarjetas de crédito para un cliente autenticado:** Los usuarios registrados pueden guardar la información de su tarjeta de crédito para futuras transacciones.

## Tecnologías Utilizadas

- **Backend:** Laravel
- **Frontend:** React
- **Estilos:** TailwindCSS
- **Base de Datos:** MySQL
- **APIs:** RESTful API
- **Despliegue:** Uso de Plesk para su despliegue

## Requisitos Previos

Para ejecutar este proyecto localmente, necesitas tener instalado:

- PHP >= 7.4
- Composer
- Node.js
- npm o yarn
- Una base de datos MySQL

## Instalación

1. **Clonar el repositorio**

    ```bash
    git clone https://github.com/tuUsuario/nombreDelRestaurante-webapp.git
    cd nombreDelRestaurante-webapp
    ```

2. **Instalar dependencias de Laravel (Backend)**

    ```bash
    cd backend
    composer install
    ```

3. **Configuración del entorno**

    Copiar el archivo `.env.example` a `.env` y configurar las variables de entorno, incluida la conexión a la base de datos.

    ```bash
    cp .env.example .env
    ```

4. **Generar clave de la aplicación**

    ```bash
    php artisan key:generate
    ```

5. **Migraciones y Seeders**

    ```bash
    php artisan migrate --seed
    ```

6. **Instalar dependencias de React (Frontend)**

    ```bash
    cd ../frontend
    npm install
    ```

7. **Configuración del entorno Frontend**

    Asegúrate de configurar las variables de entorno necesarias para conectar con el backend en `.env`.

8. **Ejecutar el proyecto**

    - **Para el backend:**

        ```bash
        php artisan serve
        ```

    - **Para el frontend:**

        ```bash
        npm start
        ```

    Visita `http://localhost:3000` en tu navegador para ver la aplicación.

## Contribuir

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

1. Fork el Proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus Cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Contacto

Nicolás Gómez - [@Nicooootina](https://twitter.com/Nicooootina)

Link del Proyecto: [https://github.com/King0f/TareaRestaurante](https://github.com/tuUsuario/nombreDelRestaurante-webapp)
