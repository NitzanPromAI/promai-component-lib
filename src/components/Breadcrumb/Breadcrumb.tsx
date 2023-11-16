import { Stack } from "@mui/material";
import LightTooltip from "../LightTooltip";
import { Fragment, useMemo, useState } from "react";
import BreadCrumbItem from "./BreadCrumbItem";

interface sheetProps {
  id: string | number;
  image: string;
  catalogNumber: string;
}

interface BreadcrumbProps {
  data: { sheets: sheetProps[]; name?: string };
  loading: boolean;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { data, loading } = props;
  const [selected, setSelected] = useState<number | null>(null);

  // if a previous item is selected, every item to the right will be cleared off

  const { tooltipItems, items, initialData } = useMemo(() => {
    let newData = [...data.sheets];
    if (selected) {
      const findIndex = data.sheets.findIndex((item: sheetProps) => item.id === selected);
      newData = newData.slice(0, findIndex + 1);
      return {
        items: newData.length > 1 ? newData.slice(newData.length - 2, newData.length) : newData.reverse(),
        tooltipItems: newData.reverse(),
        initialData: newData,
      };
    }
    return {
      items: newData.slice(newData.length - 2, newData.length),
      tooltipItems: newData.reverse(),
      initialData: newData,
    };
  }, [data, selected]);

  return (
    <Stack direction="row" gap="10px" width="100%">
      {initialData.length - 1 >= 2 && (
        <LightTooltip
          title={
            <Fragment>
              <Stack direction="row" gap="8px">
                {tooltipItems.map(
                  (el: any, index: number) =>
                    index > 1 && (
                      <BreadCrumbItem
                        id={el?.id}
                        key={el?.id}
                        text={`${el.catalogNumber}`}
                        image={el?.image}
                        textOverflow="initial"
                        loading={loading}
                        handleClick={() => setSelected(el.id)}
                      />
                    )
                )}
              </Stack>
            </Fragment>
          }
          // minWidth="677px"
          arrow
          placement="top"
        >
          <Stack>
            <BreadCrumbItem text="..." isActive={false} handleClick={() => `/**/`} />
          </Stack>
        </LightTooltip>
      )}
      {items &&
        items?.length > 0 &&
        items?.map((el: any, index: number) => (
          <BreadCrumbItem
            key={el?.id}
            id={el?.id}
            text={`${el.catalogNumber}`}
            image={el?.image}
            isActive={index === items?.length - 1}
            loading={loading}
            handleClick={() => setSelected(el.id)}
          />
        ))}
    </Stack>
  );
};

export default Breadcrumb;
