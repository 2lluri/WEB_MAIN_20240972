function googleSearch() {
  const searchInput = document.getElementById('search_input');
  const searchTerm = searchInput.value.trim();

  if (searchTerm.length === 0) {
    alert("검색어를 입력해주세요.");
    searchInput.focus();
    return false;
  }

  const profanityList = ["바보", "멍청이", "나쁜말1", "나쁜말2", "욕설"];
  const lowerCaseTerm = searchTerm.toLowerCase();

  for (let i = 0; i < profanityList.length; i++) {
    if (lowerCaseTerm.includes(profanityList[i].toLowerCase())) {
      alert("부적절한 검색어(비속어)가 포함되어 있습니다.");
      searchInput.value = '';
      return false;
    }
  }

  const url = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
  return false;
}