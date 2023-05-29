import { Component } from 'react';
import "./Callender.scss"
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import searchLight from "../../assets/icons/search-light.svg"
import { appointments } from '../../utils/appointments';

class Callender extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: '2018-06-27',
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };

    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }
  

  render() {
    const {
      currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
    } = this.state;

    const Appointment = ({
      children, style, ...restProps
    }) => (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          backgroundColor: '#86A3B8',
          borderRadius: '8px',
        }}
      >
        {children}
      </Appointments.Appointment>
    );

    return (
      <div className='calender-container'>
        
        <div className='calender-navigation'>
          
          <div className='view-btn'>
            <button disabled >Project Planning</button>
            <button className='active'>Weekly Planning</button>
            <button disabled >Planning Insights</button>
          </div>

          <div className='search-rectangle'>
            <img src={searchLight} alt='searchLight' />
            <input placeholder='Search'  />
          </div>

        </div>

        <Paper>
          <Scheduler
            data={data}
            
          >
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
            />
            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
            />
            <WeekView
              startDayHour={9}
              endDayHour={17}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <AllDayPanel />
            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <Appointments appointmentComponent={Appointment} />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
            />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}

export default Callender