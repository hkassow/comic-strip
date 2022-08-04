import React, {useState} from "react";
import { Form } from "semantic-ui-react";


function SearchBar({comics, setComicDisplay}) {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [illustrator, setIllustrator] = useState("")
  const [protagonist, setProtagonist] = useState("");
  const [company, setCompany] = useState("")
//   const [comicsToDisplay, setComicsToDisplay] = useState([])

  function handleTitleChange(e){
    setTitle(e.target.value)
    handleSearch(e, e.target.value, author, illustrator, protagonist, company)
  }

  function handleAuthorChange(e){
    setAuthor(e.target.value)
    handleSearch(e, title, e.target.value, illustrator, protagonist, company)
  }

  function handleIllustratorChange(e){
    setIllustrator(e.target.value)
    handleSearch(e, title, author, e.target.value, protagonist, company)
  }

  function handleProtagonistChange(e){
    setProtagonist(e.target.value)
    handleSearch(e, title, author, illustrator, e.target.value, company)
  }

  function handleCompanyChange(e){
    setCompany(e.target.value)
    handleSearch(e, title, author, illustrator, protagonist, e.target.value)
  }

  function handleSearch(e, t, a, i, p, c) {
    e.preventDefault();
    console.log(e, t, a, i, p, c)
    // let BothOrNoneFilter = []
    // for(let i = 0; i < searchFilterTitle(t).length; i++) {
    //     for(let j = 0; j < searchFilterAuthor(a).length; j++){
    //         if(searchFilterTitle(t)[i].equals(searchFilterAuthor(a)[j])){
    //             BothOrNoneFilter.push(searchFilterTitle(t)[i])
    //         }
    //     }
    // }
    // console.log(BothOrNoneFilter)
    let totalSearchFilter = [...searchFilterTitle(t), ...searchFilterAuthor(a), ...searchFilterIllustrator(i), ...searchFilterProtagonist(p), ...searchFilterCompany(c)]
    //console.log(totalSearchFilter);
    let toPush=[];
      totalSearchFilter.forEach((x) => {
        if(!toPush.includes(x) && x!==[]) {
          toPush.push(x)
        }})
    toPush.sort((a, b) => a.name.localeCompare(b.name))
    setComicDisplay(toPush);
  }

  function searchFilterTitle(t){
    let tempTitleArr =[];
    if(t!==""){
    for (let comic of comics){
      let tempTitle = comic.name.split(' ');
      for (let word of tempTitle) {
        if(word.toUpperCase().includes(t.toUpperCase())){
          tempTitleArr.push(comic);
        }
      }
    }
//    console.log(tempTitleArr)
    return(tempTitleArr);
  }
  return [];
}

function searchFilterAuthor(a){
    let tempAuthorArr =[];
    if(a!==""){
    for (let comic of comics){
      let tempAuthor = comic.author.split(' ');
      for (let word of tempAuthor) {
        if(word.toUpperCase().includes(a.toUpperCase())){
          tempAuthorArr.push(comic);
        }
      }
    }
   // console.log(tempAuthorArr)
    return(tempAuthorArr);
  }
  return [];
}
function searchFilterIllustrator(i){
    let tempIllustratorArr =[];
    if(i!==""){
    for (let comic of comics){
      let tempIllustrator = comic.illustrator.split(' ');
      for (let word of tempIllustrator) {
        if(word.toUpperCase().includes(i.toUpperCase())){
          tempIllustratorArr.push(comic);
        }
      }
    }
   // console.log(tempIllustratorArr)
    return(tempIllustratorArr);
  }
  return [];
}

function searchFilterProtagonist(i){
    let tempProtagonistArr =[];
    if(i!==""){
    for (let comic of comics){
      let tempProtagonist = comic.protagonist.split(' ');
      for (let word of tempProtagonist) {
        if(word.toUpperCase().includes(i.toUpperCase())){
          tempProtagonistArr.push(comic);
        }
      }
    }
   // console.log(tempProtagonistArr)
    return(tempProtagonistArr);
  }
  return [];
}

function searchFilterCompany(i){
    let tempCompanyArr =[];
    if(i!==""){
    for (let comic of comics){
      let tempCompany = comic.company.split(' ');
      for (let word of tempCompany) {
        if(word.toUpperCase().includes(i.toUpperCase())){
          tempCompanyArr.push(comic);
        }
      }
    }
   // console.log(tempCompanyArr)
    return(tempCompanyArr);
  }
  return [];
}

  return (
    <Form onSubmit={(e) => handleSearch(e, title, author, illustrator, protagonist, company)}>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Search By Title' onChange={(e) => handleTitleChange(e)} />
            <Form.Input fluid label='Protagonist' placeholder='Search By Protagonist' onChange={(e) => handleProtagonistChange(e)} />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Author' placeholder='Search By Author' onChange={(e) => handleAuthorChange(e)} />
            <Form.Input fluid label='Illustrator' placeholder='Search By Illustrator' onChange={(e) => handleIllustratorChange(e)} />
            <Form.Input fluid label='Company' placeholder='Search By Company' onChange={(e) => handleCompanyChange(e)} />
        </Form.Group>
    </Form>
  )
}
export default SearchBar;