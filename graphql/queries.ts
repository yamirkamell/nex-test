import { gql } from "@apollo/client";

export const GET_ALLTIME_POPULAR_ANIMES = gql`
  query ($sort: [MediaSort], $type: MediaType, $isAdult: Boolean, $perPage: Int){
            Page(perPage: $perPage) {
              media(sort: $sort, type: $type, isAdult: $isAdult) {
                title {
                  english
                  native
                }
                isFavourite
                coverImage {
                  large
                }
              }
            }
          }
`;

export const GET_MOSTPOPULAR_ANIMES = gql`
  query ($sort: [MediaSort], $type: MediaType, $isAdult: Boolean, $perPage: Int, $seasonYear: Int){
            Page(perPage: $perPage) {
              media(sort: $sort, type: $type, isAdult: $isAdult, seasonYear: $seasonYear) {
                title {
                  english
                  native
                }
                isFavourite
                coverImage {
                  large
                }
              }
            }
          }
`;

