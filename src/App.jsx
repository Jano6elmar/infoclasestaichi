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
      {/* 🐢 Logo */}
      <div className="text-center mb-5">
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

        {/* ✅ Título con Yin-Yang perfectamente alineados a los costados */}
        <div
          className="d-flex justify-content-center align-items-center text-center"
          style={{
            gap: '15px',
            flexWrap: 'nowrap',
          }}
        >
          <div className="yin-container">
            <YinYang size={40} />
          </div>
          <h1
            className="fs-2 fw-bold m-0"
            style={{
              textAlign: 'center',
              lineHeight: '1.2em',
              whiteSpace: 'normal',
              flex: '0 1 auto',
            }}
          >
            Escuela "Wudang SanFeng Pai Chile"
          </h1>
          <div className="yin-container">
            <YinYang size={40} />
          </div>
        </div>
        <br />
        <h3 className="sede-title">Sede Concepción</h3>
      </div>

      <div className="row g-4 px-3 text-center">
        {/* Columna 1 - Comunidad */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h2 className="fs-3 fw-semibold mb-3 mt-2 w-100 text-center px-2 block-title-header">
                Clases, Comunidad y Actividades
              </h2>

              <h4 className="fs-5 fw-semibold mb-3">Clases Unitarias<br/> Tai Chi/ Chi Kung/ Kung Fu</h4>
              <p><strong>➡️ Formativa (Grupal):</strong> $6.000 — 2 Horas (en Horarios de entrenamiento Regular)</p>
              <p><strong>➡️ Recreativa (Grupal):</strong> $3.000 — 1 hora (fines de semana)</p>
              <p><strong>➡️ Clase Formativa o Entrenamiento Personal:</strong> $10.000 — 1 hora (horario a convenir)</p>

              <div className="mt-1 pt-4 pb-1 border-top border-light">
                <h4 className="fs-5 fw-semibold">Unirse a la Comunidad de Aprendizaje</h4>
                <p>Aporte consciente mensual desde $1.000</p>
                <ul className="text-start list-unstyled">
                  <li>• Acceso a la comunidad en Telegram</li>
                  <li>• Acceso a tutoriales</li>
                </ul>
                <p className="fst-italic">⚠️ No incluye clases presenciales, transmisiones de clases ni grabaciones de clases.</p>
              </div>

              <div className="mt-4 pt-2 border-top border-light">
                <h4 className="fs-5 fw-semibold">Actividad Introductoria</h4>
                <p className="fw-semibold">"Artes Internas de Wudang y Combate Interior"</p>

                <p><strong> Recorrido de 5 semanas.</strong><br /><br />• Derecho a participar de una clase formativa</p>

                <p>• Acceso a grupo de lectura (Introducción en Filosofía y Teoría)</p>
                <p>• (Puede participar de clases extras en el mes del recorrido por $2.500 cada una)</p>
                <p><strong>Valor Actividad:</strong> $15.000</p>
                <p>(Consultar por próximas fechas de inicio)</p>


                <p className="fst-italic">NOTA: Esta introducción permite integrarse, al finalizar el recorrido, en la actividad del grupo de estudio avanzado de Psicoanálisis, Tao, Medicina China y Tai Chi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2 - Planes */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h3 className="fs-4 fw-semibold mb-3 mt-2 w-100 text-center px-2 block-title-header">
                Inscripción en la Escuela
              </h3>
              <h2 className="fs-4 fw-semibold mb-4 w-100 text-center px-2 block-title-header">
                PLANES DE ENTRENAMIENTO REGULAR
              </h2>
              <p className="fst-italic mb-3">(Modalidad: Suscripción Mensual)</p>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan de Entrada — $10.000</p>
              <ul className="text-start list-unstyled mb-3">
                <li>• Acceso a 1 clase por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Clases extra a $5.000 c/u</li>
              </ul>
              <hr className="plan-divider" />

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Básico — $25.000</p>
              <ul className="text-start list-unstyled mb-3">
                <li>• Acceso hasta 4 clases por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
                <li>• Acceso al Grupo de Estudio Avanzado (+ $5.000)</li>
                <li>• Clases extra a $2.500 c/u</li>
              </ul>
              <hr className="plan-divider" />

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Completo — $40.000</p>
              <ul className="text-start list-unstyled">
                <li>• Acceso hasta 11 clases formativas por mes</li>
                <li>• Acceso a plataforma educativa</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
                <li>• Acceso a transmisiones online de las clases y sus grabaciones</li>
                <li>• Acceso al Grupo de Estudios Avanzado: Psicoanálisis, Tao, Medicina China, Tai Chi</li>
              </ul>
                <p className="fst-italic">NOTA: Las clases comienzan con una hora de Chi Kung Médico y la siguiente hora de Tai Chi Chuan, para conocer más 
                  acerca de estas prácticas o entender sus diferencias consulte al Profesor encargado o visite <a href='https://www.wudangsanfeng.cl/'> www.wudangsanfeng.cl </a> </p>

            </div>
            
          </div>
        </div>

        {/* Columna 3 - Servicio */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h2 className="fs-3 fw-semibold mb-4 mt-2 w-100 text-center px-2 block-title-header">
                Entrevista de entrenamiento y orientación individual
              </h2>
              <p><strong>Valor por entrevista (para inscritos en la escuela):</strong> $10.000</p>
              <p><strong>Valor independiente:</strong> $15.000</p>
              <p><strong>Duración de la entrevista:</strong> 1 hora</p>
              <p><strong>Acceso adicional:</strong> incluye 1 clase de Tai Chi en del mes que tome la entrevista.<br />Puede asistir a clases extras por $2.500 cada una.</p>

              <hr className="plan-divider" />
              <h5 className="mt-4 mb-2">Objetivos de la entrevista</h5>
              <ul className="text-start list-unstyled mb-3">
                <li>• Definir Resultado, Deseo o Meta</li>
                <li>• Transmisión de herramientas filosóficas, teóricas y prácticas</li>
                <li>• Definir rutinas de entrenamiento</li>
                <li>• Detectar límites y generar propuesta para atravesarlos </li>
              </ul>

              <hr className="plan-divider" />
              <h5 className="mt-4 mb-2">Temas principales a abordar en la continuidad del entrenamiento</h5>
              <ul className="text-start list-unstyled" style={{ lineHeight: '1.8em' }}>
                <li>• Uso de herramientas Metódicas de Psicoanálisis para exploración y comprensión de la propia estructura psíquica</li>
                <li>• Uso de herramientas de Magia Metódica para la creación de hábitos</li>
                <li>• Práctica y comprensión de la Meditación</li>
                <li>• Modos de entrenamiento y finalidad de la práctica</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Ajuste responsivo directo y estilos locales */}
      <style>
        {`
          .sede-title {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: #f8fafc;
            display: inline-block;
            padding-bottom: 6px;
            margin-top: 0.5rem;
            border-bottom: 2px solid rgba(255,255,255,0.12);
          }

          /* Títulos con línea divisoria */
          .block-title-header {
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 12px;
            line-height: 1.4;
          }

          /* Línea divisoria pequeña entre planes */
          .plan-divider {
            width: 180px;
            margin: 1.5rem auto;
            border: 0;
            border-top: 2px solid rgba(255, 255, 255, 0.4);
            opacity: 1;
          }

          @media (max-width: 576px) {
            .yin-container svg {
              width: 30px !important;
              height: 30px !important;
            }

            .sede-title {
              font-size: 1rem;
              letter-spacing: 0.6px;
            }

            .block-title-header {
              font-size: 0.95rem;
              padding-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}