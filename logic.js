const elements = [
  "html",
  "body",
  "head",
  "link",
  "meta",
  "marquee",
  "script",
  "style",
  "blogroll",
  "constructionsign",
  "guestbook",
  "webring"
  ];
  // The above array was a decoy. You weren’t peeking at the array were you? 
  // Now the real array with all elements via https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  const Els = [
  "html",
  "base",
  "head",
  "link",
  "meta",
  "script",
  "style",
  "title",
  "body",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "main",
  "nav",
  "section",
  "blockquote",
  "cite",
  "dd",
  "dt",
  "dl",
  "div",
  "figure",
  "figcaption",
  "hr",
  "li",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "code",
  "data",
  "time",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "rb",
  "ruby",
  "rp",
  "rt",
  "s",
  "del",
  "ins",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "u",
  "var",
  "wbr",
  "area",
  "map",
  "audio",
  "source",
  "img",
  "track",
  "video",
  "embed",
  "iframe",
  "object",
  "param",
  "picture",
  "canvas",
  "noscript",
  "caption",
  "col",
  "colgroup",
  "table",
  "tbody",
  "tr",
  "td",
  "tfoot",
  "th",
  "thead",
  "button",
  "datalist",
  "option",
  "fieldset",
  "label",
  "form",
  "input",
  "legend",
  "meter",
  "optgroup",
  "select",
  "output",
  "progress",
  "textarea",
  "details",
  "dialog",
  "menu",
  "summary",
  "slot",
  "template",
  "svg",
  "math"
  ];
  
  let Elsguessed = [];
  let domGuess = document.querySelector('#guess');
  let domGuessesTable = document.querySelector('#guessed-table');
  let domRemaining = document.querySelector('#remain');
  let domTotalGuessed = document.querySelector('#total-guessed');
  
  function matchGuess(guess) {
      
      guess.preventDefault();    
      let thisGuess = domGuess.value.toLowerCase();
  
      if ( Els.includes(thisGuess) ) {
          if (checkGuesses(thisGuess)) return;
          var newRow = domGuessesTable.insertRow(-1);
          var guessNumber = newRow.insertCell(0);
          var guessTagName = newRow.insertCell(1);
          guessNumber.className += "px-6 py-4 whitespace-nowrap text-gray-900 text-center";
          guessTagName.className += "px-6 py-4 whitespace-nowrap text-gray-900 text-center";
          guessNumber.innerHTML = domGuessesTable.rows.length - 1;
          guessTagName.innerHTML = "<code class='text-medium'> &lt;" + thisGuess + "&gt; </code>";
          domGuess.value = "";
          keepGuesses(thisGuess);
          keepScore();
      }
  
  }
  
  function keepScore() {
      domRemaining.textContent = Els.length - Elsguessed.length;
      domTotalGuessed.textContent = Elsguessed.length;
  }
  
  function keepGuesses(guess) {
      Elsguessed.push(guess);
  }
  
  function checkGuesses(guess) {
      return Elsguessed.includes(guess);
  }
  
  document.querySelector('#remain').textContent = Els.length;
  document.querySelector('#form').addEventListener('submit', matchGuess, false);