import React, { Component } from "react";
import { Grid /* Button */ } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
/* import EventForm from "../EventForm/EventForm"; */
/* import cuid from "cuid"; */
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

const mapState = state => ({
  // what state we will use -> (from the rootReducer) as props
  events: state.events
});

const actions = {
  // what actions we will use -> (from the eventActions) as props
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);

    // we won't use this anymore, now that we're using props (actions)
    /* this.setState(({ events }) => ({
      events: events.filter(event => event.id !== id)
    })); */
  };

  render() {
    /* const { events, isOpen, selectedEvent } = this.state; */
    // now we get the stats via props, so we destruct it here
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            /* selectEvent={this.handleSelectEvent} */
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
          {/* <Button
            onClick={this.handleCreateFormOpen}
            positive
            content='Create Event'
          />
          {isOpen && (
            <EventForm
              // with this key, react creates a new instance of our event form when the properties change or the key changes to be more precise in this case
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )} */}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
