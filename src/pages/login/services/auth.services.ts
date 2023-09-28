import { APIInfo, APIRickAndMorty } from "@/models";

const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = baseUrl + "character/";

export const getMorty = async (): Promise<APIInfo & APIRickAndMorty> => {
  return await (await fetch(characterUrl + "2")).json();
};
