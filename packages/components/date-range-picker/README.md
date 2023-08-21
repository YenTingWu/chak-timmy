# DateRangePicker

### Install @chak-timmy/date-range-picker

```bash
npm install --save @chak-timmy/date-range-picker
```

### Usage

#### import

```tsx
import {
  DateRangePicker,
  DateRangePickerGroup,
  DateRangePickerStartField,
  DateRangePickerEndField,
  DateRangePickerPopover,
  DateRangePickerDialog,
  DateRangePickerCalendar,
  DateRangePickerCalendarContent,
  DateRangePickerCalendarGrid,
  DateRangePickerCalendarHeader,
  DateRangePickerCalendarTitle,
  DateRangePickerCalendarNextButton,
  DateRangePickerCalendarPrevButton,
} from "@chak-timmy/date-range-picker";
```

#### Uncontrolled

```tsx
function UncontrolledDateRangePickerExample() {
  return (
    <DateRangePicker>
      <DateRangePickerGroup mt="36px">
        <DateRangePickerStartField />
        <chakra.div mx="16px">-</chakra.div>
        <DateRangePickerEndField />
      </DateRangePickerGroup>
      <DateRangePickerPopover>
        <DateRangePickerDialog>
          <DateRangePickerCalendar>
            <DateRangePickerCalendarContent>
              <DateRangePickerCalendarHeader>
                <DateRangePickerCalendarTitle />
                <chakra.div display="flex" alignItems="center">
                  <DateRangePickerCalendarPrevButton />
                  <DateRangePickerCalendarNextButton />
                </chakra.div>
               </DateRangePickerCalendarHeader>
              <DateRangePickerCalendarGrid />
            </DateRangePickerCalendarContent>
          </DateRangePickerCalendar>
         </DateRangePickerDialog>
        </DateRangePickerPopover>
      </DateRangePicker>>
  )
}
```

#### Controlled

```tsx
function ControlledDateRangePickerExample() {
  const [value, setValue] = React.useState({
    start: getISODateString(new Date()),
    end: getISODateString(new Date()),
  });

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <DateRangePicker
        value={value}
        isOpen={isOpen}
        label="date range picker"
        onOpenChange={setIsOpen}
        onChange={(newValue:{ start: string; end: string }) =>
          setValue(newValue)
        }
      >
      <DateRangePickerGroup mt="36px">
        <DateRangePickerStartField />
        <chakra.div mx="16px">-</chakra.div>
        <DateRangePickerEndField />
      </DateRangePickerGroup>
      <DateRangePickerPopover>
        <DateRangePickerDialog>
          <DateRangePickerCalendar>
            <DateRangePickerCalendarContent>
              <DateRangePickerCalendarHeader>
                <DateRangePickerCalendarTitle />
                <chakra.div display="flex" alignItems="center">
                  <DateRangePickerCalendarPrevButton />
                  <DateRangePickerCalendarNextButton />
                </chakra.div>
               </DateRangePickerCalendarHeader>
              <DateRangePickerCalendarGrid />
            </DateRangePickerCalendarContent>
          </DateRangePickerCalendar>
         </DateRangePickerDialog>
        </DateRangePickerPopover>
      </DateRangePicker>>
  )
}
```
