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
} from "../src";
import { chakra } from "@chakra-ui/system";
import { fireEvent, render, screen, waitFor } from "@chak-timmy/test-utils";

describe("DatePicker", () => {
  it("should render correctly without external value", () => {
    const Component = () => (
      <DatePicker label="date picker">
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

    render(<Component />);

    expect(screen.getByText("mm")).toBeInTheDocument();
    expect(screen.getByText("dd")).toBeInTheDocument();
    expect(screen.getByText("yyyy")).toBeInTheDocument();
  });

  it("should render correctly with external default value", () => {
    const year = "2022";
    const month = "04";
    const day = "02";

    const value = `${year}-${month}-${day}`;

    const Component = ({ defaultValue }: { defaultValue: string }) => (
      <DatePicker label="date picker" defaultValue={defaultValue}>
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

    const { rerender } = render(<Component defaultValue={value} />);

    expect(screen.getByText(month)).toBeInTheDocument();
    expect(screen.getByText(day)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();

    const newYear = "2024";
    const newMonth = "09";
    const newDay = "05";

    const newValue = `${newYear}-${newMonth}-${newDay}`;

    rerender(<Component defaultValue={newValue} />);

    expect(screen.getByText(month)).toBeInTheDocument();
    expect(screen.getByText(day)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
  });

  it("should render correctly with external value", async () => {
    const year = "2022";
    const month = "04";
    const day = "02";

    const value = `${year}-${month}-${day}`;

    const Component = ({ value }: { value: string }) => (
      <DatePicker label="date picker" value={value}>
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

    const { rerender } = render(<Component value={value} />);

    expect(screen.getByText(month)).toBeInTheDocument();
    expect(screen.getByText(day)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();

    const newYear = "2024";
    const newMonth = "09";
    const newDay = "05";

    const newValue = `${newYear}-${newMonth}-${newDay}`;

    rerender(<Component value={newValue} />);

    expect(screen.getByText(newMonth)).toBeInTheDocument();
    expect(screen.getByText(newDay)).toBeInTheDocument();
    expect(screen.getByText(newYear)).toBeInTheDocument();
  });

  it("dialog should be disclosure when isOpen props turns from true to false", () => {
    const Component = ({ isOpen }: { isOpen: boolean }) => (
      <DatePicker label="date picker" isOpen={isOpen}>
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

    const { rerender } = render(<Component isOpen />);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();

    rerender(<Component isOpen={false} />);

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("trigger button should work correctly", async () => {
    const testId = "date-picker-trigger-button";
    const onOpenChange = jest.fn();

    const Component = () => (
      <DatePicker label="date picker" onOpenChange={onOpenChange}>
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

    render(<Component />);
    const triggerButton = screen.getByTestId(testId);

    fireEvent.click(triggerButton);

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
  });
});
