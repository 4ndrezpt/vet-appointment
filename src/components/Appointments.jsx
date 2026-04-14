export const Appointment = ({ appointment, deleteAppointment })=> {
  return (
    <div className="appointment" key={appointment.id.value}>
      <h5>Appointment for: {appointment.petName.value} </h5>
      <p>
        <strong>Owner Data: </strong>
        { appointment.name.value }; {appointment.email.value}
      </p>
      <p>
        <strong>Pet Data: </strong>
        {appointment.petName.value} is a { appointment.raceName.value } {appointment.typeName.value}
      </p>
      <p>
        <strong>Appointment Data: </strong>
        {appointment.date.value }// Hour: { appointment.hour.value}
      </p>
      <p>
        <strong>Description: </strong>
        {appointment.description.value}
      </p>
      <button
        className="danger"
        onClick={() =>  deleteAppointment(appointment.id) }
      >Eliminar &times;</button>
    </div>
  );
}
