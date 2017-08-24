const SELECTE_WORD = 'SELECTE_WORD';

function actionSelectedWord(word){
  return {
    type: SELECTE_WORD,
    selectedWord: word
  }
}

export {
  SELECTE_WORD, actionSelectedWord
}
