import * as React from "react";
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
} from "../src";
import { getISODateString } from "@chak-timmy/utils";
import { chakra } from "@chakra-ui/system";

const meta = {
  title: "Components / Range Date Picker",
  tags: ["autodocs"],
  decorators: [
    // eslint-disable-next-line
    (story: Function) => (
      <chakra.div
        mx="auto"
        maxW="400px"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        {story()}
      </chakra.div>
    ),
  ],
};
export default meta;

export function Controlled() {
  const [value, setValue] = React.useState({
    start: getISODateString(new Date()),
    end: getISODateString(new Date()),
  });

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <chakra.h1>Date Now</chakra.h1>
      <chakra.h3>{`${value.start} --> ${value.end}`}</chakra.h3>
      <DateRangePicker
        value={value}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onChange={(newValue: { start: string; end: string }) =>
          setValue(newValue)
        }
      >
        <DateRangePickerGroup>
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
      </DateRangePicker>
    </>
  );
}

export function Uncontrolled() {
  return (
    <DateRangePicker>
      <DateRangePickerGroup>
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
    </DateRangePicker>
  );
}

export function WithPlacementChanged() {
  return (
    <DateRangePicker>
      <DateRangePickerGroup>
        <DateRangePickerStartField />
        <chakra.div mx="16px">-</chakra.div>
        <DateRangePickerEndField />
      </DateRangePickerGroup>
      <DateRangePickerPopover placement="top">
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
    </DateRangePicker>
  );
}

export function WithFlippingAllow() {
  return (
    <>
      <chakra.div mb="16px" sx={{ p: { m: 0 } }}>
        <chakra.p>Click on the trigger button first.</chakra.p>
        <chakra.p>And try to shrink in height</chakra.p>
        <chakra.p>Click on the trigger button again.</chakra.p>
      </chakra.div>
      <DateRangePicker>
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div mx="16px">-</chakra.div>
          <DateRangePickerEndField />
        </DateRangePickerGroup>
        <DateRangePickerPopover shouldFlip>
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
      </DateRangePicker>
    </>
  );
}

export function WithDefaultValue() {
  const defaultValue = { start: "2033-01-20", end: "2033-01-22" };

  return (
    <DateRangePicker defaultValue={defaultValue}>
      <DateRangePickerGroup>
        <DateRangePickerStartField />
        <chakra.div mx="16px">-</chakra.div>
        <DateRangePickerEndField />
      </DateRangePickerGroup>
      <DateRangePickerPopover shouldFlip>
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
    </DateRangePicker>
  );
}
