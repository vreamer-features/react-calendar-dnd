import React from 'react';

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import './App.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
const DndCalendar = withDragAndDrop(Calendar)

function App() {
  return (
    <div className="App">
      <div style={{ background: 'green', width: '3rem' }} draggable>drag me</div>
      <DndCalendar
        localizer={localizer}
        events={[{
          title: 'drag action to calendar',
          start: moment().toDate(),
          end: moment().toDate(),
        }]}
        style={{ height: '100vh' }}
        onDragOver={() => console.log('dragging over')}
        onDropFromOutside={() => console.log('dropped from outside')}
      />
    </div>
  );
}

export default App;
