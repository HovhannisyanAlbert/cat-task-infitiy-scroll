export interface ICatsInitialState {
  catsData: CatsItem[];
  isLoadingCat: boolean;
}

export type CategoryItem = {
  id: number;
  name: string;
};

export type CatsItem = {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: CategoryItem[];
  pending?: number;
  approved?: number;
  rejected?: number;
};

export type GetCatsPayload = {
  size?: string | string[] | null;
  mime_types?: string | string[] | null;
  order?: string | string[] | null;
  limit?: number | null;
  page?: number | null;
} | null;
