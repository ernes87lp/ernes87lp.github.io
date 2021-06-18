var WIZARD_CONFIG = {
  "title": "Bienvenido",
  "subtitle": "¿Qué tipo de atención necesitás?",
  "color": "#d52b1e",
  "logo": "data:image/svg+xml;base64,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",
  "options": [
    {
      "id": "comercial",
      "title": "Comercial",
      "subtitle": "¿Cuál es el motivo de tu visita?",
      "image": "https://placeimg.com/300/200/any?id=comercial",
      "options": [
        {
          "id": "cuentas",
          "title": "Cuentas",
          "image": "https://placeimg.com/300/200/any?id=cuentas",
          "options": [
            {
              "id": "quiero-ser-cliente",
              "title": "Quiero ser cliente del Banco",
              "image": "https://placeimg.com/300/200/any?id=quiero-ser-cliente",
              "type": "html",
              "content": "<div style='text-align: left'><p>¿Sabías que podés abrir una cuenta sin moverte de tu casa?</p><ul><li>Productos 100% bonificados</li><li>Reintegro en la primera compra en la adhesión de débito automático</li><li>Acceso a Club Supervielle  </li></ul><p>¡Y mucho más!</p><p>Completá tus datos <a href='https://hacetecliente.supervielle.com.ar/?_ga=2.139822833.394289028.1598460958-2071073089.1598460958#/paquete' target='_self'>acá</a> y conocé la oferta que tenemos pensada para vos.</p></div>"
            },
            {
              "id": "soy-cliente",
              "title": "Soy cliente y quiero abrir una caja de ahorro y/o cuenta corriente en pesos",
              "image": "https://placeimg.com/300/200/any?id=soy-cliente",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que desde Online Banking podés dar de alta tu cuenta.</p><p>Ingresá <strong>Cuentas &gt; Solicitudes</strong> y solicitá la apertura de:</p><ul><li>Caja de ahorro en Pesos</li><li>Cuenta Corriente en Pesos</li></ul><p><strong>¿No estás registrado en Online Banking?</strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "consultar-cbu",
              "title": "Consultar mi CBU",
              "image": "https://placeimg.com/300/200/any?id=consultar-cbu",
              "type": "html",
              "content": "<div style='text-align: left'><p>Consultá tu CBU desde Online Banking o App Supervielle<br> Ingresando al menú <strong>Cuentas</strong></p><p><strong>¿No estás registrado en Online Banking? </strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "cerrar-cuenta",
              "title": "Consultar mi CBU",
              "image": "https://placeimg.com/300/200/any?id=cerrar-cuenta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Podés cerrar tu cuenta y tarjetas desde Online Banking.</p><p>Ingresá  <strong>Cuentas &gt;  Solicitudes &gt;  Cierre de Cuenta</strong><br>Una vez hecho, recibirás por mail la confirmación de la operación</p><p><strong>¿No estás registrado en Online Banking?  </strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            }
          ]
        },
        {
          "id": "tarjetas",
          "title": "Tarjetas",
          "image": "https://placeimg.com/300/200/any?id=tarjetas",
          "options": [
            {
              "id": "clave-tarjeta",
              "title": "Realizar la clave de mi tarjeta de débito",
              "image": "https://placeimg.com/300/200/any?id=clave-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>¡Realizar la clave de tu tarjeta es muy fácil!</p><p>Elegí la opción que más te guste, mirá el video y enterate como <strong>generar la clave desde tu casa</strong></p><ul><li><a href='https://www.youtube.com/watch?v=ikm9SsyWq_Y' target='_self'>Desde </a><a href='https://www.youtube.com/watch?v=ikm9SsyWq_Y' target='_self'>App Supervielle</a></li><li><a href='https://www.youtube.com/watch?v=zbtoPAi74A8' target='_self'>Desde Online Banking</a></li><li><a href='https://www.youtube.com/watch?v=7lrEF0QvL98' target='_self'>Desde la Banca telefónica</a></li></ul><p><strong>¿No estás registrado en Online Banking?</strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "reclamo-desconocimiento",
              "title": "Quiero hacer un reclamo por desconocimiento de compra",
              "image": "https://placeimg.com/300/200/any?id=reclamo-desconocimiento",
              "type": "html",
              "content": "<div style='text-align: left'><p>Realizá desde tu casa el <strong>desconocimiento de compra</strong> de tu tarjeta de crédito o tarjeta de débito Supervielle.<p><strong>Para tarjeta de débito:</strong></p><p>Descargá, completá y seguí las instrucciones que se encuentra en el formulario.</p><ul><li><a href='https://content-us-7.content-cms.com/8ba19f21-9a97-4525-8886-f54d823a5cea/dxdam/63/63746634-6cc8-40a3-bbb3-b786990d22a7/Copia%20de%20DDJJ%20TRANSACCIONES%20NO%20RECONOCIDAS%20-%20copia.xlsx' target='_self'>Form-desconocimiento de compra en tarjeta débito Supervielle</a></li></ul><p>Recibirás una confirmación vía email con el número de ticket. En caso de no recibirlo en 72hrs favor comunicarse al 4959-4959 desde la C.A.B.A. y G.B.A, o desde el interior del país al 0810-333-4959.</p><p><strong>Para tarjeta de crédito</strong></p><p>Solo tenés que estar dado de alta en Online Banking.</p><p>Mirá el video y enterate cómo hacerlo.</p><ul><li><a href='https://www.youtube.com/watch?v=o5NECJ2Obf8' target='_self'>Desconocimiento - Visa</a></li><li><a href='https://www.youtube.com/watch?v=-0jxlCzNYKE&amp;t=1s' target='_self'>Desconocimiento - Master</a></li></ul><p><strong>¿No estás registrado en Online Banking o App Supervielle?</strong></p><p>Descargá la APP Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "reponer-tarjeta",
              "title": "Reponer mi tarjeta de crédito por deterioro",
              "image": "https://placeimg.com/300/200/any?id=reponer-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Comunicate con la Banca teléfonica de lunes a viernes de 8hs a 20hs y solicitá la reimpresión de tu tarjeta</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><p>Marca las siguientes opciones:</p><ol><li><strong>Opción 1 </strong>Productos</li><li>Ingresá tu DNI</li><li>Ingresá tu clave telefónica (si no la tenés o no la  recordás, podrás generarla en el momento)  </li><li><strong>Opción 2</strong> Tarjeta de Crédito</li><li><strong>Opción 1</strong> Visa u <strong>opción 2</strong> Master</li><li><strong>Opción 7 </strong>Otras consultas</li><li><strong>Opción 6</strong> Otras consultas</li></ol></div>"
            },
            {
              "id": "realizar-pago",
              "title": "Realizar el pago de mi tarjeta - Canales de pago",
              "image": "https://placeimg.com/300/200/any?id=realizar-pago",
              "type": "html",
              "content": "<div style='text-align: left'><p>¡Recordá que podés realizar los pagos de tu tarjeta sin necesidad de ir a la sucursal!</p><p>Enterate como:</p><ul><li>Con débito automático en caja de ahorro</li><li>A través de Online Banking o Supervielle Movil </li><li>Desde Pagomiscuentas.com</li><li>En las terminales de autoservicio Supervielle </li><li>En cajeros automáticos </li><li>En Pago Fácil </li></ul><p><strong>¿No estás registrado en Online Banking?</strong><br><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p>Descargá la App Supervielle& nbsp; desde Play Store o App Store y registrate.</p></div>"
            },
            {
              "id": "saldo-tarjeta",
              "title": "Quiero saber el saldo y resumen de mi tarjeta",
              "image": "https://placeimg.com/300/200/any?id=saldo-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Accedé a la información de tu tarjeta desde Online Banking y/o App Supervielle.</p><p>Registrate fácilmente con la <strong>App Supervielle</strong><br><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p><p>Consultá tus movimientos, resúmenes y saldo a pagar.</p><p>Recordá que desde Online Banking podrás adherirte a <strong>Resumen electrónico</strong> para que te llegue todos los meses por mail.</p></div>"
            }
          ]
        },
        {
          "id": "otros-productos",
          "title": "Otros productos",
          "image": "https://placeimg.com/300/200/any?id=otros-productos",
          "options": [
            {
              "id": "prestamo-personal",
              "title": "Quiero solicitar un préstamo personal",
              "image": "https://placeimg.com/300/200/any?id=saldo-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Desde Online Banking o App Supervielle ingresá a </p><p><strong>Préstamos  &gt; Solicitudes</strong> y conocé la oferta que tenemos para vos.</p><p><strong>¿No estás registrado en Online Banking? </strong> <br>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_blank'>Ver tutorial registración</a></p><p>O hacelo desde la <strong>Banca telefónica</strong> de lunes a viernes de 8hs a 20hs.</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><ol><li><strong>Opción 1 </strong>Productos</li><li>Ingresá DNI y clave Telefónica </li><li><strong>Opción 7 </strong>Nuevos productos</li><li><strong>Opción 2</strong> Prestamos</li></ol><p><strong>Si no sos cliente:</strong></p><p>Completá tus datos <a href='https://www.supervielle.com.ar/personas/prestamos/personales/solicitar' target='_self'>acá </a>y nos pondremos en contacto con vos.</p></div>"
            },
            {
              "id": "vencimiento-prestamo",
              "title": "Quiero saber el monto y vencimiento de la cuota de mi préstamo",
              "image": "https://placeimg.com/300/200/any?id=vencimiento-prestamo",
              "type": "html",
              "content": "<div style='text-align: left'><p>Desde Online Banking o App Supervielle</p><p>Ingresá al menú <strong>Prestamos </strong>y consultá monto y vencimiento de todas tus cuotas</p><p><strong>¿No estás registrado en Online Banking? </strong> <br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "alta-seguro",
              "title": "Quiero dar de alta un Seguro",
              "image": "https://placeimg.com/300/200/any?id=alta-seguro",
              "type": "html",
              "content": "<div style='text-align: left'><p>¿Sabias que por Online Banking podés Cotizar tu Seguro?</p><p>Ingresá al menú Seguros  y consultá por </p><ul><li>Seguro de Tecnologia </li><li>Seguro de Bolso Protegido</li><li>Seguro Contenido de Auto</li></ul><p><strong>¿No estás registrado en Online Banking?  </strong><br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_blank'>Ver tutorial registración</a></p><p>Nuestros representantes de atención también podrán cotizar tu seguro:</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><ol><li><strong>Opción 1</strong> Productos</li><li>Ingresá tu DNI </li><li>Ingresá tu clave telefónica</li><li><strong>Opción 7</strong> Nuevos Productos</li><li><strong>Opción 1 </strong>Seguros</li></ol></div>"
            },
            {
              "id": "plazo-fijo",
              "title": "Quiero constituir un plazo fijo",
              "image": "https://placeimg.com/300/200/any?id=plazo-fijo",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que podés constituir tu Plazo Fijo sin moverte de tu casa desde Online Banking o App Supervielle.</p><ul><li>Ingresá a “<strong>Inversiones  y Plazo Fijos</strong>”</li><li>Seleccioná “<strong>constitución de Plazo fijo</strong>”</li><li>Elegi cuanto querés invertir y a cuánto tiempo.</li></ul><p>También podrás realizar esta operación en App Supervielle desde la opción Plazo fijo</p><p><strong>¿No estás registrado en Online Banking?  </strong><br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.youtube.com/watch?v=3xKQQCAcgJI' target='_self'>Ver tutorial registración</a></p></div>"
            }
          ]
        },
        {
          "id": "canales-digitales",
          "title": "Canales digitales y cajeros",
          "image": "https://placeimg.com/300/200/any?id=canales-digitales",
          "options": [
            {
              "id": "generar-clave",
              "title": "¿Cómo genero la clave de Online Banking y App Supervielle?",
              "image": "https://placeimg.com/300/200/any?id=generar-clave",
              "type": "html",
              "content": "<div style='text-align: left'><p>Descargá la <strong>App Supervielle</strong> desde Play Store o App Store y vas a poder habilitar el Reconocimiento Facial para ingresar y autorizar operaciones importantes de una manera ¡más segura! y sin claves.</p><ol><li>Ingresá tu DNI </li><li>Tomá una foto de tu DNI y Rostro</li><li>Generá usuario y clave</li></ol><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial</a></p></div>"
            },
            {
              "id": "olvide-clave",
              "title": "Olvidé o bloqueé la clave de Online banking",
              "image": "https://placeimg.com/300/200/any?id=olvide-clave",
              "type": "html",
              "content": "<div style='text-align: left'><p>Generá nuevamente tu clave sin moverte de tu casa</p><p>Podés hacerlo desde tu Online Banking o con la App Supervielle </p><p><strong>Elegí la opción que más te guste, mira el video y enterate como hacerlo</strong></p><ul><li><a href='https://www.youtube.com/watch?v=qE1j4RavUiA' target='_self'>Olvide o bloqueé mi clave - desde Online Banking</a></li><li><a href='https://www.youtube.com/watch?v=dK0rI7W-PwU' target='_self'>Olvidé o bloqueé mi clave - desde la App Supervielle</a></li></ul></div>"
            },
            {
              "id": "dinero-cajero",
              "title": "¿Cuánto dinero puedo retirar por cajero?",
              "image": "https://placeimg.com/300/200/any?id=dinero-cajero",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que podés retirar por día y en cajeros Banelco de Banco Supervielle hasta $30.000 y en Cash Dispenser  hasta $80.000 solo con tu huella (con previa registración)</p></div>"
            },
            {
              "id": "extraer-dinero",
              "title": "Quiero extraer dinero sin tarjeta de débito",
              "image": "https://placeimg.com/300/200/any?id=extraer-dinero",
              "type": "html",
              "content": "<div style='text-align: left'><p>Generá una orden de extracción desde tu Online Banking para que puedas retirar dinero vos u otra persona desde cualquier cajero automático de la red Banelco o Link</p><p><strong>¡Es muy facil!</strong></p><p>Enterate como hacerlo</p><p><a href='https://www.youtube.com/watch?v=usIOzhIy7wg' target='_self'>Retirar dinero sin tarjeta </a></p></div>"
            }
          ]
        },
        {
          "id": "otro",
          "title": "Otro",
          "image": "https://placeimg.com/300/200/any?id=otro",
          "type": "redirect",
          "content": "https://www.supervielle.com.ar/personas/servicios-digitales/turno-online/modificar"
        }
      ]
    },
    {
      "id": "caja",
      "title": "Caja",
      "image": "https://placeimg.com/300/200/any?id=caja",
      "type": "html",
      "content": "<div style='text-align: left'><h5>Operaciones habilitadas con turno previo</h5><div><p>Recordá que este turno solo te permite realizar las siguientes operaciones:</p><ul><li>Depósitos y extracciones de cuentas en moneda extranjera</li><li>Depósitos de cheques de terceros</li><li>Las personas con discapacidad que se presenten con su certificado único de discapacidad vigente, podrán realizar por caja todo tipo de operación sin ningún tipo de restricción</li></ul></div></div>"
    }
  ]
};
