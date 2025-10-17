import 'bootstrap/dist/css/bootstrap.min.css';

function YinYang({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-label="Yin Yang"
      role="img"
    >
      <circle cx="50" cy="50" r="48" fill="black" stroke="white" strokeWidth="2" />
      <path d="M50 2 A48 48 0 1 0 50 98 A24 24 0 1 1 50 50 A24 24 0 1 0 50 2" fill="white" />
      <circle cx="50" cy="25" r="8" fill="black" />
      <circle cx="50" cy="75" r="8" fill="white" />
    </svg>
  );
}

export default function App() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: '#001B44',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <YinYang size={50} />
          <h1 className="fs-2 fw-bold">Escuela Wudang SanFeng GongFu Chile</h1>
          
          <YinYang size={50} />
          
        </div>
      </div>

      <div className="row g-4 px-3">
        {/* Columna 1 - Comunidad */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body text-center">
              <h2 className="fs-4"> Ingreso a la </h2>
              <h3 className="fs-5 mb-3">Comunidad, Clases y Actividades </h3>
              <p><strong>➡️Ingreso a la Comunidad</strong><br />Aporte consciente desde $1.000</p>
              <ul className="text-start list-unstyled">
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a tutoriales</li>
              </ul>
              <p className="fst-italic">⚠️ No incluye clases presenciales, transmisiones de clases ni grabaciones de clases.</p>
              <div className="my-4"></div>

              <div className="mt-4 pt-3 border-top border-light">
                 
                 <p><strong>Clases Unitarias </strong></p>
  
              <p><strong>➡️ Formativa:</strong> $6.000</p>
              <p> 2 Horas en Horarios de entrenamiento Regular</p>
              <p><strong> ➡️ Recreativa:</strong> $3.000<br /></p>
              <p>1 hora (fines de semana) </p>

                
              </div>











              
              
              <div className="mt-4 pt-3 border-top border-light">
                <h4 className="fs-6 mt-3"><strong> Introducción al Combate Interior </strong></h4>
                <p><strong>Valor:</strong> $15.000</p>
                <p>
                  <strong>Actividad — Recorrido de 5 semanas.</strong><br /><br />
                  • Derecho a participar de una clase 
                  <p>• Acceso a recorrido por textos que introducen en la lógica del combate interior,
                  estableciendo bases del recorrido hacia la realización del Guerrero Interior</p>  
                  
                  •(Puede participar de clases extras en el mes del recorrido por $2.500 cada una)
                </p>
                <p className="mt-2 fst-italic">
                  NOTA: Esta introducción permite integrarse, al finalizar el recorrido, en la actividad del grupo de estudio avanzado de Psicoanálisis, Tao, Medicina China y Tai Chi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2 - Planes de Entrenamiento */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body text-center">
              <h3 className="fs-6 mb-2 text-uppercase text-light-50">Inscripción en la Escuela</h3>
              <h2 className="fs-4"> PLANES DE ENTRENAMIENTO REGULAR</h2>
              <p className="fst-italic">(Modalidad de Suscripción Mensual)</p>

              <p><strong>➡️ Plan de Entrada — $10.000</strong></p>
              <ul className="text-start list-unstyled">
                <li>• Acceso a 1 clase por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Clases extra a $5.000</li>
              </ul>

              <p><strong>➡️ Plan Básico — $25.000</strong></p>
              <ul className="text-start list-unstyled">
                <li>• Acceso hasta 4 clases por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Actividades recreativas en entornos Naturales</li>
                <li>• Acceso al Grupo de Estudio Avanzado (+ $5.000)</li>
                <li>• Clases extra a $2.500</li>
              </ul>

              <p><strong>➡️ Plan Completo — $40.000</strong></p>
              <ul className="text-start list-unstyled">
                <li>• Acceso hasta 11 clases formativas por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Actividades recreativas en entornos Naturales</li>
                <li>• Acceso a transmisiones online de las clases y sus grabaciones</li>
                <li>• Acceso al Grupo de Estudios Avanzado: Psicoanálisis, Tao, Medicina China, Tai Chi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna 3 - Servicio */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body text-center">
              <h2 className="fs-4"> Servicio Personalizado — Entrevista </h2>
              <h3 className="fs-6 mb-3"> Entrenamiento personalizado y Orientación</h3>
              <p><strong>Valor por entrevista (para inscritos en la escuela):</strong> $10.000</p>
              <p><strong>Valor independiente:</strong> $15.000</p>
              <p><strong>Duración de la entrevista:</strong> 1 hora</p>
              <p><strong>Acceso adicional:</strong> incluye 1 clase de Tai Chi dentro del mes.<br />Puede asistir a clases extras por $2.500 cada una.</p>

              <h5 className="mt-4 mb-3">Objetivos de la entrevista</h5>
              <ul className="text-start list-unstyled mb-4">
                <li>• Definir deseo o meta en la práctica</li>
                <li>• Entregar herramientas filosóficas, teóricas y prácticas</li>
                <li>• Definir rutinas de entrenamiento</li>
                <li>• Detectar bloqueos mentales </li>
                
              </ul>

              <h5 className="mt-4 mb-3">Temas principales a abordar en la continuidad del entrenamiento</h5>
              <ul className="text-start list-unstyled" style={{ lineHeight: '1.8em' }}>
                <li>• Uso de herramientas de Psicoanálisis para exploración y comprensión de la propia estructura psíquica</li>
                <li>• Uso de herramientas de Magia para la creación de hábitos</li>
                <li>• Práctica y comprensión de la Meditación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
