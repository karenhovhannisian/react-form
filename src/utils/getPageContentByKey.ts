import { GetPageContentParamsType } from "../ts/types";

export const getPageContentByKey = ({
  content,
  defaultPage,
  key,
}: GetPageContentParamsType) => {
  return key && content[key] ? content[key] : defaultPage;
};
