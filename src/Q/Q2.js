export const Q2 = (val) => {
  // Given a string, check if count of letters is in incremental form. Abbccc -> yes, aabbcc->no, baaccc->yes
    let freq = {};
      for (let i = 0; i < val.length; i++) {
        let char = val.charAt(i);
        if (freq[char]) freq[char]++;
        else freq[char] = 1;
      }

      let check = Object.values(freq);
      check.sort();
      let ok = true;
      for (let i = 0; i < check.length; i++) {
        if (check[i] !== i + 1) {
          ok = false;
        }
      }
      if(ok)return "YES"; 
      else return "NO"; 
}