<h1 align='center'>Chak-Timmy</h1>

Chak-Timmy is a react component library that built on top of <a href='https://chakra-ui.com/'>chakra-ui</a>, which mainly serves as date picker and calendar components.

<div align="center">
    
[![npm](https://img.shields.io/npm/v/@chak-timmy/react?color=blue&logo=npm&style=flat-square)](https://www.npmjs.com/package/@chak-timmy/react)

[![GitHub](https://img.shields.io/github/license/YenTingWu/chak-timmy)](https://github.com/YenTingWu/chak-timmy/blob/main/LICENSE)

</div>

Check out [storybook](https://646b21717bd2cb2ea0e03367-mxyxrkpztg.chromatic.com/?path=/docs/components-single-date-picker--docs) to play with components.

## Setup

### Install Chakra UI

Follow the instructions from [Chakra-UI installation](https://chakra-ui.com/getting-started)

### Install Chak-Timmy

```bash
npm install --save @chak-timmy/react
```

## API

- (?) = optional props

### DatePicker

| props                   | type                      | description                                                                      |
| :---------------------- | ------------------------- | -------------------------------------------------------------------------------- |
| isOpen (?)              | boolean                   | a boolean value to control if the popover is open                                |
| defaultOpen (?)         | boolean                   | if `true`, popover will be initially open                                        |
| shouldCloseOnSelect (?) | boolean \| () => boolean  | if `true` or the return `true`, popover closes after completing a date selection |
| label (?)               | string                    | The label for aria-label or aria-labelledby attribute for accessibility.         |
| value (?)               | string                    | a value with iso date format to control the picked date                          |
| children                | React.ReactNode           | React children                                                                   |
| defaultValue (?)        | string                    | a default value with iso date format                                             |
| onOpenChange (?)        | (isOpen: boolean) => void | a function triggered while isOpen is being changed                               |
| onChange (?)            | (iso: string) => void     | a function triggered while the date is selected                                  |

### DateRangePicker

| props                   | type                                            | description                                                                      |
| :---------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------- |
| isOpen (?)              | boolean                                         | a boolean value to control if the popover is open                                |
| defaultOpen (?)         | boolean                                         | if `true`, popover will be initially open                                        |
| label (?)               | string                                          | The label for aria-label or aria-labelledby attribute for accessibility.         |
| children                | React.ReactNode                                 | React children                                                                   |
| shouldCloseOnSelect (?) | boolean \| () => boolean                        | if `true` or the return `true`, popover closes after completing a date selection |
| value (?)               | { start: string; end: string }                  | a value with iso date format to control the picked date                          |
| defaultValue (?)        | { start: string; end: string }                  | a default value with iso date format                                             |
| onOpenChange (?)        | (isOpen: boolean) => void                       | a function triggered while isOpen is being changed                               |
| onChange (?)            | (value: { start: string; end: string }) => void | a function triggered while the date is selected                                  |

## Usage

### DatePicker

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

### DateRangePicker

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
