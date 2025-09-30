import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container py-5 bg-dark text-light">
      <div className="row g-4">

        {/* Columna 1 - Comunidad */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                ★ Ingreso a la Comunidad y Clases ★
              </h2>
              <p><strong>Ingreso a la Comunidad</strong><br />Aporte consciente desde $1.000</p>
              <ul>
                <li>Acceso a la comunidad en Telegram</li>
                <li>Acceso a tutoriales en YouTube</li>
              </ul>
              <p className="fst-italic">No incluye clases, transmisiones ni grabaciones</p>
              <p><strong>Clase Unitaria:</strong> $6.000</p>
              <p><strong>Clase Recreativa:</strong> $3.000<br />1 hora de práctica los fines de semana</p>
            </div>
          </div>
        </div>

        {/* Columna 2 - Planes */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                ★ Planes de Suscripción a la Escuela ★
              </h2>

              <p><strong>Plan de Entrada — $10.000</strong></p>
              <ul>
                <li>1 clase al mes</li>
                <li>Acceso a la plataforma educativa</li>
                <li>Acceso a la comunidad en Telegram</li>
                <li>Clases extra a $5.000</li>
              </ul>

              <p><strong>Plan Básico — $30.000</strong></p>
              <ul>
                <li>Hasta 6 clases al mes</li>
                <li>Acceso a la plataforma educativa</li>
                <li>Acceso a la comunidad en Telegram</li>
                <li>Actividades recreativas en entornos naturales</li>
                <li>Acceso al Grupo de Estudio Avanzado (+ $5.000)</li>
              </ul>

              <p><strong>Plan Completo — $40.000</strong></p>
              <ul>
                <li>Hasta 12 clases al mes</li>
                <li>Acceso a la plataforma educativa</li>
                <li>Acceso a la comunidad en Telegram</li>
                <li>Actividades recreativas en entornos naturales</li>
                <li>Transmisiones online y grabaciones</li>
                <li>Acceso al Grupo de Estudio Avanzado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna 3 - Servicio */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                ★ Servicio Personalizado de Entrenamiento ★
              </h2>
              <p><strong>Valor tomando una suscripción:</strong> $10.000</p>
              <p><strong>Valor independiente:</strong> $15.000</p>
              <p><strong>Duración:</strong> 1 hora</p>
              <p><strong>Acceso adicional:</strong> incluye 1 clase de Tai Chi dentro del mes.</p>

              <h5 className="mt-4">Objetivos de la sesión</h5>
              <ul>
                <li>Definir el deseo o meta</li>
                <li>Entregar herramientas teóricas y prácticas</li>
                <li>Rutina de entrenamiento semanal</li>
                <li>Superar bloqueos mentales</li>
              </ul>

              <h5 className="mt-4">Temas principales</h5>
              <ul>
                <li>Autoconocimiento</li>
                <li>Psicoanálisis</li>
                <li>Magia</li>
                <li>Generación del hábito</li>
                <li>Meditación</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
