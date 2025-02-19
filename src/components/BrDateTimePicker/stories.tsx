import { Meta, Story } from "@storybook/react";

import { Col } from "@/common/Grid";

import BrDateTimePicker, { BrDateTimePickerProps } from ".";

export default {
  title: "Formulários/DateTimePicker",
  component: BrDateTimePicker,
} as Meta;

const Template: Story<BrDateTimePickerProps> = (args) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <BrDateTimePicker {...args} />
    </Col>
  );
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  dataType: "date",
  dataMode: "single",
  onChange: (value) => console.log("onChange", value),
  onDateChange: (value) => console.log("onDateChange", value),
  onRangeChange: (value) => console.log("onRangeChange", value),
};

const today = new Date();
const todayPlus15 = new Date();
todayPlus15.setDate(todayPlus15.getDate() + 15);

export const DatePickerRange = Template.bind({});
DatePickerRange.args = {
  ...DatePicker.args,
  dataType: "date",
  dataMode: "range",
  minDate: today,
  maxDate: todayPlus15,
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  ...DatePicker.args,
  dataType: "time",
  dataMode: "single",
};

export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
  ...DatePicker.args,
  dataType: "date-time",
  dataMode: "single",
};

export const MonthPicker = Template.bind({});
MonthPicker.args = {
  ...DatePicker.args,
  dataType: "month",
  dataMode: "single",
};
