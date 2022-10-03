const getStorage = () => {
  if (localStorage.getItem("status") === null) {
    const arrayToParse = JSON.stringify([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    localStorage.setItem("status", arrayToParse);
  }

  return JSON.parse(localStorage.getItem("status"));
};

const finishSubject = (subject) => {
  const array = getStorage();
  array[subject] = true;
  localStorage.setItem("status", JSON.stringify(array));
};

const isSubjectFinished = (subject) => {
  return subject === -1 ? true : getStorage()[subject];
};

const getReadInfo = () => {
  if (localStorage.getItem("readInfo") === null) {
    localStorage.setItem("readInfo", false);
  }

  return JSON.parse(localStorage.getItem("readInfo"));
};

const readInfo = () => {
  localStorage.setItem("readInfo", true);
};

export { finishSubject, isSubjectFinished, getReadInfo, readInfo };
