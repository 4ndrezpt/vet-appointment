export const Appointment = ({appointment})=> {
  return (
    <div className="appointment">
      <h5>Appointment id: {appointment.id.value }</h5>
      <p>
        <strong>Owner Data: </strong>
        { appointment.name.value }
      </p>
      <p>
        <strong>Pet Data: </strong>
        {appointment.petName.value} is a { appointment.raceName.value } {appointment.typeName.value}
      </p>
      <p>
        <strong>Appointment Data: </strong>
        {appointment.date.value }Hour: { appointment.hour.value}
      </p>
      <p>
        <strong>Description: </strong>
        {appointment.description.value}
      </p>
    </div>
  );
}
