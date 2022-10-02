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

export { finishSubject, isSubjectFinished };
