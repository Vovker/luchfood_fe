import React from "react";
import {SearchWrapper, StyledInput} from "./styled";
import {SearchTypes} from "./search.types";
import {ReactComponent as SearchIcon} from '../../../assets/search_icon.svg'
import useMediaQuery from "../../../hooks/useMatchMedia";


export const Search: React.FC<SearchTypes> = ({placeholder}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <SearchWrapper>
      <SearchIcon/>
      {isDesktop && <StyledInput type="text" placeholder={placeholder}/>}
    </SearchWrapper>
  )
}