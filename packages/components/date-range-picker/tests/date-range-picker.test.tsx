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
import { chakra } from "@chakra-ui/system";
import { render, screen, fireEvent, waitFor } from "@chak-timmy/test-utils";

describe("DatePicker", () => {
  it("should render correctly without external value", () => {
    const Component = () => (
      <DateRangePicker label="date range picker">
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div>-</chakra.div>
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

    render(<Component />);

    expect(screen.getAllByText("mm")).toHaveLength(2);
    expect(screen.getAllByText("dd")).toHaveLength(2);
    expect(screen.getAllByText("yyyy")).toHaveLength(2);
  });

  it("should render correctly with external default value", () => {
    const startYear = "2022";
    const startMonth = "04";
    const startDay = "02";

    const start = `${startYear}-${startMonth}-${startDay}`;

    const endYear = "2023";
    const endMonth = "05";
    const endDay = "03";

    const end = `${endYear}-${endMonth}-${endDay}`;

    const value = { start, end };

    const Component = ({
      defaultValue,
    }: {
      defaultValue: { start: string; end: string };
    }) => (
      <DateRangePicker label="date range picker" defaultValue={defaultValue}>
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div>-</chakra.div>
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

    const { rerender } = render(<Component defaultValue={value} />);

    expect(screen.queryByText(startMonth)).toBeInTheDocument();
    expect(screen.queryByText(startDay)).toBeInTheDocument();
    expect(screen.queryByText(startYear)).toBeInTheDocument();

    expect(screen.queryByText(endMonth)).toBeInTheDocument();
    expect(screen.queryByText(endDay)).toBeInTheDocument();
    expect(screen.queryByText(endYear)).toBeInTheDocument();

    const newStartYear = "2044";
    const newStartMonth = "06";
    const newStartDay = "21";

    const newStart = `${newStartYear}-${newStartMonth}-${newStartDay}`;

    const newEndYear = "2055";
    const newEndMonth = "09";
    const newEndDay = "30";

    const newEnd = `${newEndYear}-${newEndMonth}-${newEndDay}`;

    const newValue = { start: newStart, end: newEnd };

    rerender(<Component defaultValue={newValue} />);

    // The display value will not be replaced by the new value when the props changes
    expect(screen.queryByText(startMonth)).toBeInTheDocument();
    expect(screen.queryByText(startDay)).toBeInTheDocument();
    expect(screen.queryByText(startYear)).toBeInTheDocument();

    expect(screen.queryByText(endMonth)).toBeInTheDocument();
    expect(screen.queryByText(endDay)).toBeInTheDocument();
    expect(screen.queryByText(endYear)).toBeInTheDocument();

    expect(screen.queryByText(newStartMonth)).not.toBeInTheDocument();
    expect(screen.queryByText(newStartDay)).not.toBeInTheDocument();
    expect(screen.queryByText(newStartYear)).not.toBeInTheDocument();

    expect(screen.queryByText(newEndMonth)).not.toBeInTheDocument();
    expect(screen.queryByText(newEndDay)).not.toBeInTheDocument();
    expect(screen.queryByText(newEndYear)).not.toBeInTheDocument();
  });

  it("should render correctly with external value", () => {
    const startYear = "2022";
    const startMonth = "04";
    const startDay = "02";

    const start = `${startYear}-${startMonth}-${startDay}`;

    const endYear = "2023";
    const endMonth = "05";
    const endDay = "03";

    const end = `${endYear}-${endMonth}-${endDay}`;

    const value = { start, end };

    const Component = ({
      value,
    }: {
      value: { start: string; end: string };
    }) => (
      <DateRangePicker label="date range picker" value={value}>
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div>-</chakra.div>
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

    const { rerender } = render(<Component value={value} />);

    expect(screen.queryByText(startMonth)).toBeInTheDocument();
    expect(screen.queryByText(startDay)).toBeInTheDocument();
    expect(screen.queryByText(startYear)).toBeInTheDocument();

    expect(screen.queryByText(endMonth)).toBeInTheDocument();
    expect(screen.queryByText(endDay)).toBeInTheDocument();
    expect(screen.queryByText(endYear)).toBeInTheDocument();

    const newStartYear = "2044";
    const newStartMonth = "06";
    const newStartDay = "21";

    const newStart = `${newStartYear}-${newStartMonth}-${newStartDay}`;

    const newEndYear = "2055";
    const newEndMonth = "09";
    const newEndDay = "30";

    const newEnd = `${newEndYear}-${newEndMonth}-${newEndDay}`;

    const newValue = { start: newStart, end: newEnd };

    rerender(<Component value={newValue} />);

    // The display value will be replaced by the new value when the props changes
    expect(screen.queryByText(startMonth)).not.toBeInTheDocument();
    expect(screen.queryByText(startDay)).not.toBeInTheDocument();
    expect(screen.queryByText(startYear)).not.toBeInTheDocument();

    expect(screen.queryByText(endMonth)).not.toBeInTheDocument();
    expect(screen.queryByText(endDay)).not.toBeInTheDocument();
    expect(screen.queryByText(endYear)).not.toBeInTheDocument();

    expect(screen.queryByText(newStartMonth)).toBeInTheDocument();
    expect(screen.queryByText(newStartDay)).toBeInTheDocument();
    expect(screen.queryByText(newStartYear)).toBeInTheDocument();

    expect(screen.queryByText(newEndMonth)).toBeInTheDocument();
    expect(screen.queryByText(newEndDay)).toBeInTheDocument();
    expect(screen.queryByText(newEndYear)).toBeInTheDocument();
  });

  it("dialog should be disclosure when isOpen props turns from true to false", () => {
    const Component = ({ isOpen }: { isOpen: boolean }) => (
      <DateRangePicker label="date range picker" isOpen={isOpen}>
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div>-</chakra.div>
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

    const { rerender } = render(<Component isOpen />);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();

    rerender(<Component isOpen={false} />);

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("trigger field should work correctly", async () => {
    const onOpenChange = jest.fn();

    const Component = () => (
      <DateRangePicker
        label="date range picker"
        isOpen
        onOpenChange={onOpenChange}
      >
        <DateRangePickerGroup>
          <DateRangePickerStartField />
          <chakra.div>-</chakra.div>
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

    render(<Component />);

    const startFieldTestId = "date-range-trigger-start-field";

    const triggerStartField = screen.getByTestId(startFieldTestId);

    fireEvent.pointerDown(triggerStartField);

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
  });
});
