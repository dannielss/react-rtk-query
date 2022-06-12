import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar/index";
import { useListCharactersQuery } from "../features/api";
import * as Styled from "./style";

export function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useListCharactersQuery(page);

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  if(isLoading || isFetching) {
    return <p>Loading...</p>
  }

  return (
    <Styled.Container>
      <Styled.Title>Rick and Morty</Styled.Title>
      {data?.info?.next && <Button onClick={handlePrevPage}>prev page</Button>}
      {data?.info?.next && <Button onClick={handleNextPage}>next page</Button>}
      <Styled.Description>
        Rick and Morty Finder book check here the status of your favorite
        character
      </Styled.Description>
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder="Search here ?"
        onChange={() => null}
      />
      <Styled.List>
        {data?.results?.map((character: any) => <Card key={character.id} character={character} />)}
      </Styled.List>
    </Styled.Container>
  );
}
