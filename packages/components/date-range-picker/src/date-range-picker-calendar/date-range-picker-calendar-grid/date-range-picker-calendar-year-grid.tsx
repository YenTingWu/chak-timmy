import { chakra } from "@chakra-ui/system";
import { DateRangePickerCalendarYearGridCell } from "./date-range-picker-calendar-year-grid-cell";

const START_YEAR = 1900;
const END_YEAR = 2099;

const list = Array.from(
  { length: END_YEAR - START_YEAR + 1 },
  (_, index) => START_YEAR + index,
);

const groupList = list.reduce((acc, cur, index) => {
  if (index === 0) return [[cur]];
  const lastIndex = acc.length - 1;
  const lastItem = acc[lastIndex];

  if (lastItem.length === 3) return [...acc, [cur]];

  const newList = [...acc];

  newList.splice(lastIndex, 1, [...lastItem, cur]);

  return newList;
}, [] as number[][]);

export const DateRangePickerCalendarYearGrid = () => {
  return (
    <chakra.div
      maxH="188px"
      overflowY="auto"
      py="1rem"
      px="1.25rem"
      borderTopStyle="solid"
      borderTopColor="#D9D9D9"
      borderTopWidth="1px"
      sx={{
        "*": {
          fontSize: "0.875rem",
          lineHeight: "16px",
          fontWeight: 400,
        },
      }}
    >
      {groupList.map((list) => {
        const listWithThreeItems = Array.from(
          { length: 3 },
          (_, index) => list[index] ?? null,
        );

        return (
          <chakra.div
            key={JSON.stringify(list)}
            role="row"
            display="flex"
            alignItems="stretch"
            py="0.125rem"
            px="0.25rem"
          >
            {listWithThreeItems.map((year, index) =>
              year == null ? (
                <chakra.div key={`${year}_${index}`} flex="1" />
              ) : (
                <DateRangePickerCalendarYearGridCell key={year} year={year} />
              ),
            )}
          </chakra.div>
        );
      })}
    </chakra.div>
  );
};
