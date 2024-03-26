import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./filter.module.css";
import Selected from "@/components/Selected/Selected";
import {
  mimeTypesSelected,
  orderSelected,
  sizeSelected,
} from "@/Cats/catsInfo";
import Label from "@/components/Label/Label";
const FilterCats = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value === "all") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );
  const handleSelectedChange = (newOption: string, name?: string) => {
    router.push(pathname + "?" + createQueryString(name as string, newOption));
  };
  return (
    <div className={styles.search_header}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Label text="Choose mime type" />
        <Selected
          value={searchParams?.get("mime_types")}
          name="mime_types"
          selected={sizeSelected}
          onSelectedChange={handleSelectedChange}
        />
      </div>
      <div>
        <Label text="Choose size" />
        <Selected
          value={searchParams?.get("size")}
          name="size"
          selected={mimeTypesSelected}
          onSelectedChange={handleSelectedChange}
        />
      </div>
      <div>
        <Label text="Choose order" />
        <Selected
          value={searchParams?.get("order")}
          name="order"
          selected={orderSelected}
          onSelectedChange={handleSelectedChange}
        />
      </div>
    </div>
  );
};
export default FilterCats;
