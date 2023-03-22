export const addMeta = function (keywords,description){
  let head = document.getElementsByTagName('head')[0];
  let keywordsMetaEl = document.querySelectorAll("meta[name='keywords']")[0];
  let descriptionMetaEl = document.querySelectorAll("meta[name='description']")[0];
  if(keywordsMetaEl){
    head.removeChild(keywordsMetaEl);
  }
  if(descriptionMetaEl){
    head.removeChild(descriptionMetaEl);
  }
  const keywordsMeta = document.createElement('meta');
  keywordsMeta.name = "keywords";
  keywordsMeta.content = keywords;
  head.appendChild(keywordsMeta);
  const descriptionMeta = document.createElement('meta');
  descriptionMeta.name = "description";
  descriptionMeta.content = description;
  head.appendChild(descriptionMeta);
  console.log("head",head)
}
