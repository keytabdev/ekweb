import melisearchClient from "@/config/meilisearch";
import { SearchParams } from "meilisearch";

export const search = async ({
  query,
  searchParams,
}: {
  query?: string;
  searchParams?: SearchParams;
}) => {
  const index = melisearchClient.index("carousel");
  return index.search(query, {
    q: query,
    attributesToRetrieve: ["id", "title", "type", "tags", "count", "lookups"],
    attributesToSearchOn: ["tags.name"],
    ...searchParams,
  });
};
