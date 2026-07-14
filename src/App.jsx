import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Carga adaptable del logo (funciona en local y GitHub Pages)
const logoPath = `${import.meta.env.BASE_URL}logowudang.png`;
// Usa el nombre real del archivo en /public (espacios codificados como %20)
const logoNeidanPath = `${import.meta.env.BASE_URL}LOGO%20ESCUELA%20NEIDAN%20%20500px.png`;

const MENU_SECTIONS = [
  { id: 'clases', title: 'Grupo de Estudios, Clases Unitarias y Comunidad' },
  { id: 'inscripcion', title: 'Suscripción y Planes de Entrenamiento' },
  { id: 'entrevista', title: 'Entrevista de entrenamiento y orientación individual' },
];

const pageStyle = {
  backgroundColor: '#001B44',
  color: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

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

function PageHeader() {
  return (
    <div className="text-center mb-5">
      <div
        className="d-flex justify-content-between align-items-center mx-auto"
        style={{
          maxWidth: '520px',
          marginBottom: '24px',
        }}
      >
        <img
          src={logoNeidanPath}
          alt="Logo Escuela Neidan"
          style={{
            width: '160px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        <img
          src={logoPath}
          alt="Logo Wudang Sanfeng Pai Chile"
          style={{
            width: '160px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="mb-3">
        <h2 className="fs-4 fw-semibold m-0">ESCUELA NEIDAN</h2>
        <p className="m-0">Departamento de Artes Internas Taoístas</p>
      </div>

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
          Wudang SanFeng Pai Chile
        </h1>
        <div className="yin-container">
          <YinYang size={40} />
        </div>
      </div>
      <br />
      <h3 className="sede-title">Actividades <br />Sede Concepción</h3>
    </div>
  );
}

function MenuScreen({ onSelectSection }) {
  return (
    <div className="row g-4 px-3 justify-content-center">
      {MENU_SECTIONS.map((section) => (
        <div key={section.id} className="col-12 col-md-8 col-lg-6">
          <button
            type="button"
            className="menu-access-btn w-100"
            onClick={() => onSelectSection(section.id)}
          >
            {section.title}
          </button>
        </div>
      ))}
    </div>
  );
}

function MainContent({ selectedSection, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSection]);

  return (
    <>
      <div className="text-center mb-4 px-3">
        <button type="button" className="back-menu-btn" onClick={onBack}>
          ← Volver al menú principal
        </button>
      </div>

      <div className="row g-4 px-3 text-center justify-content-center">
        {selectedSection === 'clases' && (
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h2 className="fs-3 fw-semibold mb-3 mt-2 w-100 text-center px-2 block-title-header">
                Clases Unitarias, Comunidad y Grupo de Estudios
              </h2>

              <h4 className="fs-5 fw-semibold mb-2">Clases Unitarias</h4>
              <p className="fs-5 fw-semibold mb-2">Tai Chi/ Chi Kung</p>
              <p><strong>➡️ Formativa (Grupal):</strong> 1.5 Horas (en Horarios de entrenamiento Regular)<br/>Valor: $6.000</p>
              <p className="fs-5 fw-semibold mb-2 mt-3 text-center">Kung Fu</p> 
              <p><strong>➡️ Formativa (Grupal):</strong> 1 Hora (en Horarios de entrenamiento Regular)<br/>Valor: $6.000</p>
              <p><strong>➡️ Clase Formativa o Entrenamiento Personal:</strong> 1 hora (horario a convenir)<br/>Valor: $10.000</p>

              <div className="mt-1 pt-4 pb-1 border-top border-light">
                <h4 className="fs-5 fw-semibold">Unirse a la Comunidad de Aprendizaje</h4>
                <p>$: Aporte consciente mensual </p>
                <ul className="text-start list-unstyled">
                  <li>• Acceso a la comunidad en Telegram</li>
                  <li>• Acceso a tutoriales</li>
                </ul>
                <p className="fst-italic">⚠️ No incluye clases presenciales, transmisiones de clases ni grabaciones de clases.</p>
              </div>

              <div className="mt-4 pt-2 border-top border-light">
  <h4 className="fs-5 fw-semibold mb-3">Grupo de Estudios</h4>
  
  {/* Cambiamos a una lista con alineación izquierda ordenada y buen margen */}
  <ul className="text-start list-unstyled px-2 mx-auto" style={{ maxWidth: '560px', lineHeight: '1.6em' }}>
    <li className="mb-3">
      🔹 Esta actividad está pensada para acompañar a quienes quieran recorrer el Camino del autoconocerse usando las herramientas que comparte el instructor.
    </li>
    <li className="mb-3">
      🔹 Desde la Magia Metódica, abordamos el estudio del Tao, Medicina China y Tai Chi. Nos enfocamos en crear hábitos que fortalecen nuestra salud y amplian nuestra conciencia.
    </li>
    <li className="mb-3">
      🔹 La actividad principal consiste en una reunión mensual de 2 horas en la que se entregan al participante elementos teórico/prácticos de uso cotidiano.
    </li> 
    <li className="mb-3">
      🔹 Para esta actividad se da acceso a un grupo de Telegram donde se comparten materiales de estudio (teóricos/prácticos), se cuenta con espacio para realizar consultas y abrir debates sobre los temas abordados.
    </li>
  </ul>

  <div className="fst-italic mt-3 px-2 text-center">
    <p className="mb-1">NOTA, al tomar esta actividad cuentas con:</p>
    <p className="mb-1">• Derecho a participar de una clase de Tai Chi en el mes que tomas la actividad</p>
  </div>

  <p className="mt-4 fs-5"><strong>Valor mensual de la Actividad:</strong> $15.000</p>
</div>
            </div>
          </div>
        </div>
        )}

        {selectedSection === 'inscripcion' && (
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h3 className="fs-4 fw-semibold mb-3 mt-2 w-100 text-center px-2 block-title-header">
                SUSCRIPCIÓN Y PLANES DE ENTRENAMIENTO
              </h3>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan de aprendizaje individual — $15.000</p>
              <ul className="text-start list-unstyled mb-4">
                <li>• Acceso a 1 clase presencial (para correciones y vivenciar la práctica)</li>
                <li>• Acceso a plataforma de estudios (Materiales de estudio y video tutoriales)  </li>
                <li>• Acceso a la comunidad en Telegram</li>
                
              </ul>

              <div className="title-with-border-top">
                <h2 className="fs-4 fw-semibold mb-4 mt-4 w-100 text-center px-2 ">
                  
                </h2>
              </div>

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Básico — $25.000</p>
              <ul className="text-start list-unstyled mb-3">
              <li>• Puedes acceder a este plan en formato on-line, semipresencial o presencial</li>

                <li>• Acceso hasta 4 clases mensuales</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a transmisiones online de las clases y sus grabaciones</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
                <li>• Acceso al Grupo de Estudio y Formación por Niveles (+ $5.000)</li>
                
              </ul>
              <hr className="plan-divider" />

              <p className="fs-5 fw-semibold mb-2">➡️ Plan Completo — $40.000</p>
              <ul className="text-start list-unstyled px-2 mx-auto" style={{maxWidth: '560px', lineHeight: '1.6em'}} >
                <li>• Acceso hasta 12 clases presencialesmensuales</li>
                <li>• Acceso a la comunidad en Telegram</li>
                <li>• Acceso a actividades recreativas en entornos Naturales</li>
                <li>• Acceso a transmisiones online de las clases y sus grabaciones</li>
                <li>• Acceso a Grupo de Estudios</li>
                <li>• Formación por Niveles(+ $5.000)</li>
              </ul>
                <p className="fst-italic">NOTA: En las sesiones de entrenamiento aprendemos y practicamos Chi Kung Médico (Qi Gong Medico) y Tai Chi Chuan(Qi Gong Marcial), para conocer más 
                  acerca de estas prácticas o entender sus diferencias consulte al Profesor encargado o visite <a href='https://www.wudangsanfeng.cl/'> www.wudangsanfeng.cl </a> </p>

            </div>
            
          </div>
        </div>
        )}

        {selectedSection === 'entrevista' && (
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card h-100 border border-white rounded-3" style={{ backgroundColor: '#002D72', color: 'white' }}>
            <div className="card-body">
              <h2 className="fs-3 fw-semibold mb-4 mt-2 w-100 text-center px-2 block-title-header">
                Entrevista de entrenamiento y orientación individual
              </h2>
              <p><strong>Valor por entrevista (para inscritos en la escuela):</strong> $10.000</p>
              <p><strong>Valor independiente:</strong> $18.000</p>
              <p><strong>Duración de la entrevista:</strong> 1 hora</p>
              <p><strong>Acceso adicional:</strong> incluye 1 clase de Tai Chi en el mes que tome la entrevista.<br />Puede asistir a clases extras por $3.000 cada una.</p>

              <hr className="plan-divider" />
              <h5 className="mt-4 mb-2">Objetivos de la entrevista</h5>
              <ul className="text-start list-unstyled mb-3">
                <li>• Ayudar a definir Resultado, Deseo o Meta respecto a su entrenamiento o salud</li>
                <li>• Transmitir herramientas filosóficas, teóricas y prácticas</li>
                <li>• Definir rutinas de entrenamiento</li>
                <li>• Detectar límites mentales mediante Escucha Analítica y generar propuesta para atravesarlos </li>
              </ul>

              <hr className="plan-divider" />
              <h5 className="mt-4 mb-2">Temas principales a abordar en la continuidad de entrevistas y entrenamiento</h5>
              <ul className="text-start list-unstyled" style={{ lineHeight: '1.8em' }}>
                <li>• Uso de herramientas Metódicas de Psicoanálisis para exploración y comprensión de la propia estructura psíquica</li>
                <li>• Uso de herramientas de Magia Metódica para la creación de hábitos</li>
                <li>• Práctica y comprensión de la Meditación</li>
                <li>• Modos de entrenamiento y finalidad de la práctica</li>

              </ul>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelectSection = (sectionId) => {
    setSelectedSection(sectionId);
    setView('main');
  };

  const handleBackToMenu = () => {
    setView('menu');
    setSelectedSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid py-5" style={pageStyle}>
      <PageHeader />

      {view === 'menu' ? (
        <MenuScreen onSelectSection={handleSelectSection} />
      ) : (
        <MainContent
          selectedSection={selectedSection}
          onBack={handleBackToMenu}
        />
      )}

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

          /* Título con línea arriba y abajo */
          .title-with-border-top h2 {
            border-top: 2px solid rgba(255, 255, 255, 0.3);
            padding-top: 20px;
          }

          .menu-access-btn {
            background-color: #002D72;
            color: white;
            border: 2px solid white;
            border-radius: 12px;
            padding: 2rem 1.5rem;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.35rem;
            font-weight: 600;
            line-height: 1.4;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            min-height: 120px;
          }

          .menu-access-btn:hover,
          .menu-access-btn:focus-visible {
            background-color: #003d99;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
            color: white;
            outline: none;
          }

          .back-menu-btn {
            background-color: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 8px;
            padding: 0.6rem 1.2rem;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }

          .back-menu-btn:hover,
          .back-menu-btn:focus-visible {
            background-color: rgba(255, 255, 255, 0.1);
            border-color: white;
            color: white;
            outline: none;
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

            .menu-access-btn {
              font-size: 1.05rem;
              padding: 1.5rem 1rem;
              min-height: 100px;
            }
          }
        `}
      </style>
    </div>
  );
}