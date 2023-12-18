function firstWord(s) {
  // your code here
	let i = 0;
	let ans = '';
	while(i<s.length && s[i] != ' '){
		ans += s[i];
		i++;
	}
	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
