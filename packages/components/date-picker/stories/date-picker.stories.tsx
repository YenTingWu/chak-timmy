import * as React from "react";
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
  getISODateString,
} from "../src";
import { chakra } from "@chakra-ui/system";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components / Single Date Picker",
  tags: ["autodocs"],
  decorators: [
    (story: Function) => (
      <chakra.div
        mx="auto"
        maxW="400px"
        mt="200px"
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
  const [ISOString, setISOString] = React.useState(
    `${getISODateString(new Date())}`,
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <chakra.h3>{ISOString}</chakra.h3>
      <DatePicker
        value={ISOString}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
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
    </>
  );
}

export function Uncontrolled() {
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

export function WithPlacementChanged() {
  return (
    <DatePicker>
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      <DatePickerPopover placement="left">
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

export function WithFlippingAllow() {
  return (
    <>
      <chakra.div mb="16px" sx={{ p: { m: 0 } }}>
        <chakra.p>Click on the trigger button first.</chakra.p>
        <chakra.p>And try to shrink in height</chakra.p>
        <chakra.p>Click on the trigger button again.</chakra.p>
      </chakra.div>
      <DatePicker>
        <DatePickerGroup>
          <DatePickerField />
          <DatePickerTriggerButton />
        </DatePickerGroup>
        <DatePickerPopover shouldFlip>
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
    </>
  );
}

export function WithDefaultValue() {
  return (
    <DatePicker defaultValue="2033-01-20">
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      <DatePickerPopover shouldFlip>
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

export const Test: StoryObj = {
  parameters: {
    shopFlip: {
      values: [
        { name: "true", value: true },
        { name: "true", value: false },
      ],
    },
  },
  render: () => {
    return (
      <DatePicker defaultValue="2033-01-20">
        <DatePickerGroup>
          <DatePickerField />
          <DatePickerTriggerButton />
        </DatePickerGroup>
        <DatePickerPopover shouldFlip>
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
  },
};
