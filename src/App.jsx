import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Carga adaptable del logo (funciona en local y GitHub Pages)
const logoPath = `${import.meta.env.BASE_URL}logowudang.png`;

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
        {/* 🐢 Logo oficial Wudang Sanfeng Pai Chile */}
        <img
          src={logoPath}
          alt="Logo Wudang Sanfeng Pai Chile"
          style={{
            width: '160px',
            height: 'auto',
            marginBottom: '20px',
            objectFit: 'contain'
          }}
        />
        <div className="d-flex justify-content-center align-items-center gap-3">
          <YinYang size={50} />
          <h1 className="fs-2 fw-bold">Escuela Wudang SanFeng Chile</h1>
          <YinYang size={50} />
        </div>
      </div>

      <div className="row g-4 px-3">
        {/* Columna 1 - Comunidad */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body text-center">
              <h2 className="fs-3 fw-semibold mb-3 mt-2">◆ Ingreso a la Comunidad, Clases y Actividades ◆</h2>
              <p><strong>Ingreso a la Comunidad</strong><br />Aporte consciente desde $1.000</p>
              <ul className="text-start list-unstyled">
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a tutoriales</li>
              </ul>
              <p className="fst-italic">⚠️ No incluye clases presenciales, transmisiones de clases ni grabaciones de clases.</p>

              <div className="mt-4 pt-2 border-top border-light">
                <h4 className="fs-5 fw-semibold mt-3">Clases Unitarias</h4>
                <p><strong>➡️ Formativa:</strong> $6.000</p>
                <p>2 Horas en Horarios de entrenamiento Regular</p>
                <p><strong>➡️ Recreativa:</strong> $3.000</p>
                <p>1 hora (fines de semana)</p>
              </div>

              <div className="mt-4 pt-2 border-top border-light">
                <h4 className="fs-5 fw-semibold mt-3">Introducción al Combate Interior</h4>
                <p><strong>Valor:</strong> $15.000</p>
                <p><strong>Actividad — Recorrido de 5 semanas.</strong><br />• Derecho a participar de una clase formativa</p>
                <p>• Acceso a grupo de lectura para introducirse en la lógica del combate interior</p>
                <p>• (Puede participar de clases extras en el mes del recorrido por $2.500 cada una)</p>
                <p className="fst-italic">NOTA: Esta introducción permite integrarse, al finalizar el recorrido, en la actividad del grupo de estudio avanzado de Psicoanálisis, Tao, Medicina China y Tai Chi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2 - Planes de Entrenamiento */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body text-center">
              <h3 className="fs-4 fw-semibold mb-3 mt-2">◆ Inscripción en la Escuela ◆</h3>
              <h2 className="fs-4 fw-semibold mb-4">◆ PLANES DE ENTRENAMIENTO REGULAR ◆</h2>
              <p className="fst-italic mb-3">(Modalidad de Suscripción Mensual)</p>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan de Entrada — $10.000</p>
              <ul className="text-start list-unstyled mb-3">
                <li>• Acceso a 1 clase </li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Clases extra a $5.000</li>
              </ul>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Básico — $25.000</p>
              <ul className="text-start list-unstyled mb-3">
                <li>• Acceso hasta 4 clases por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
                <li>• Acceso al Grupo de Estudio Avanzado (+ $5.000)</li>
                <li>• Clases extra a $2.500 c/u</li>
              </ul>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Completo — $40.000</p>
              <ul className="text-start list-unstyled">
                <li>• Acceso hasta 11 clases formativas por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
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
              <h2 className="fs-3 fw-semibold mb-4 mt-2">◆ Entrevista de entrenamiento personal y orientación ◆</h2>
              <p><strong>Valor por entrevista (para inscritos en la escuela):</strong> $10.000</p>
              <p><strong>Valor independiente:</strong> $15.000</p>
              <p><strong>Duración de la entrevista:</strong> 1 hora</p>
              <p><strong>Acceso adicional:</strong> incluye 1 clase de Tai Chi dentro del mes.<br />Puede asistir a clases extras por $2.500 cada una.</p>

              <h5 className="mt-4 mb-2">Objetivos de la entrevista</h5>
              <ul className="text-start list-unstyled mb-3">
                <li>• Definir deseo o meta en la práctica</li>
                <li>• Entregar herramientas filosóficas, teóricas y prácticas</li>
                <li>• Definir rutinas de entrenamiento</li>
                <li>• Detectar bloqueos mentales </li>
              </ul>

              <h5 className="mt-4 mb-2">Temas principales a abordar en la continuidad del entrenamiento</h5>
              <ul className="text-start list-unstyled" style={{ lineHeight: '1.8em' }}>
                <li>• Uso de herramientas de Psicoanálisis para exploración y comprensión de la propia estructura psíquica</li>
                <li>• Uso de herramientas de Magia Metódica para la creación de hábitos</li>
                <li>• Práctica y comprensión de la Meditación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
