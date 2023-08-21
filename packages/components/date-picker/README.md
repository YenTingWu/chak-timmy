# DatePicker

### Install @chak-timmy/date-picker

```bash
npm install --save @chak-timmy/date-picker
```

### Usage

#### import

```tsx
import {
  DatePicker,
  DatePickerGroup,
  DatePickerField,
  DatePickerPopover,
  DatePickerDialog,
  DatePickerTriggerButton,
  DatePickerCalendar,
  DatePickerCalendarContent,
  DatePickerCalendarGrid,
  DatePickerCalendarNextButton,
  DatePickerCalendarHeader,
  DatePickerCalendarTitle,
  DatePickerCalendarPrevButton,
} from "@chak-timmy/react";
```

#### Uncontrolled

```tsx
function UncontrolledDatePickerExample() {
  return (
    <DatePicker>
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      <DatePickerPopover>
        <DatePickerDialog>
          <DatePickerCalendar>
            <DatePickerCalendarContent>
              <DatePickerCalendarHeader>
                <DatePickerCalendarTitle />
                <chakra.div display="flex" alignItems="center">
                  <DatePickerCalendarPrevButton />
                  <DatePickerCalendarNextButton />
                </chakra.div>
              </DatePickerCalendarHeader>
              <DatePickerCalendarGrid />
            </DatePickerCalendarContent>
          </DatePickerCalendar>
        </DatePickerDialog>
      </DatePickerPopover>
    </DatePicker>
  );
}
```

#### Controlled

```tsx
function ControlledDatePickerExample() {
  const [iSOString, setISOString] = React.useState(
    /** import { getISODateString } from '@chak-timmy/utils' */
    `${getISODateString(new Date())}`,
  );
  const [isOpen, setIsOpen] = React.useState < boolean > false;

  return (
    <DatePicker
      value={iSOString}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      label="date picker"
      onChange={(iso: string) => setISOString(iso)}
    >
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      <DatePickerPopover>
        <DatePickerDialog>
          <DatePickerCalendar>
            <DatePickerCalendarContent>
              <DatePickerCalendarHeader>
                <DatePickerCalendarTitle />
                <chakra.div display="flex" alignItems="center">
                  <DatePickerCalendarPrevButton />
                  <DatePickerCalendarNextButton />
                </chakra.div>
              </DatePickerCalendarHeader>
              <DatePickerCalendarGrid />
            </DatePickerCalendarContent>
          </DatePickerCalendar>
        </DatePickerDialog>
      </DatePickerPopover>
    </DatePicker>
  );
}
```
