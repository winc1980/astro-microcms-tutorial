import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: '7tbg8j90ay',
  apiKey: '5uN4pRKxMayJcKhIylDkcTJgP9ivOQ22TmCa',
});

interface home {
  title: string;
  description :string;
}

export const fetchHomeData = async (): Promise<home> => {
  const res = await client.get({
    endpoint: 'home',
    contentId: 'wo100da5ue'
  })
  return res;
}

