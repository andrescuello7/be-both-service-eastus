exports.htmlTemplate = (consult) => {
  return (`
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; background-color: #fff; padding: 0; margin: 0;">
    <div style="background-color: #fff; padding: 30px; text-align: center; border-bottom: 1px solid #eee;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 300; color: #000;">
          Trabajar duro <span style="color:#6a2c1f;">forthem.</span>
        </h1>
        <p style="margin: 10px 0 0; font-size: 14px; color: #666;">
          Consulta recibida desde el formulario en línea
        </p>
    </div>
    <div style="padding: 30px; line-height: 1.6; font-size: 15px; color: #333;">
        <p><strong>Nombre:</strong> ${consult.fullname || 'No proporcionado'}</p>
        <p><strong>Email:</strong> ${consult.email}</p>
        <p><strong>Contacto:</strong> ${consult.phone}</p>
        <p><strong>Asunto:</strong> Consultas de Clientes</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p>${consult.subject}</p>
    </div>
    <div style="background-color: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee;">
        <p>Este mensaje fue enviado automáticamente a <span style="color:#6a2c1f;">forthem.</span></p>
    </div>
  </div>
`)};