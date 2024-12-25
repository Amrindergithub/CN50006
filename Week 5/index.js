import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElementWithProp from './mygreetingprop';
import AppColor from './AppBackgroundColor';

ReactDOM.render(
  <React.StrictMode>
    {/* Task 4: Display multiple greetings for the week */}
    <GreetingElementWithProp msg="Hi, it’s Monday!" />
    <GreetingElementWithProp msg="Hi, it’s Tuesday!" />
    <GreetingElementWithProp msg="Hi, it’s Wednesday!" />
    <GreetingElementWithProp msg="Hi, it’s Thursday!" />
    <GreetingElementWithProp msg="Hi, it’s Friday!" />
    <GreetingElementWithProp msg="Hi, it’s Saturday!" />
    <GreetingElementWithProp msg="Hi, it’s Sunday!" />

    {/* Task 6: Components to change the background color */}
    <AppColor heading="This is first Element" label="Enter Name:" color="green" />
    <AppColor heading="This is second Element" label="Enter Name:" color="blue" />
    <AppColor heading="This is third Element" label="Enter Name:" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root')
);