import { MeiliSearch } from "meilisearch";

const melisearchClient = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_BASE_URL ?? "",
  apiKey: process.env.NEXT_PUBLIC_MEILISEARCH_KEY,
});

export default melisearchClient;
